// Built using Hyperiux Vault: https://vault.hyperiux.com

"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

/**
 * @typedef {{ src: string, alt?: string, width?: number, height?: number }} StackSpreadItem
 * @typedef {{ x: number, y: number, rotate: number, scale?: number, w: number, h: number }} StackSpreadTarget
 * @typedef {{
 *   item: StackSpreadItem,
 *   target: StackSpreadTarget,
 *   targetSm?: { x: number, y: number },
 *   stackRotate?: number,
 *   stackOffset?: { x: number, y: number },
 *   z?: number,
 * }} StackSpreadCard
 *
 * `target` / `targetSm` / `stackOffset` are in vw (x) and vh (y), relative to
 * the viewport centre. Array order = paint order unless `z` is set.
 */

// Scroll progress where the cluster starts scattering and where it finishes.
const SCATTER_START = 0.12;
const SCATTER_END = 0.9;

const PARALLAX_X = 2.6;
const PARALLAX_Y = 2.2;
const PARALLAX_SPRING = { stiffness: 90, damping: 22, mass: 0.6 };
const parallaxDepth = (i, total) =>
  total <= 1 ? 1 : 0.55 + (i / (total - 1)) * 0.75;

const RESPONSIVE = {
  desktop: { scale: null, small: false, colX: null, card: null },
  small: { scale: 0.72, small: true, colX: 22, card: { w: 40, h: 20 } },
};

function useResponsive() {
  const [r, setR] = useState(RESPONSIVE.desktop);
  useEffect(() => {
    // Touch vs. mouse, not raw width: a narrow mouse-driven window keeps the
    // desktop scatter + pointer parallax; only touch devices get the column grid.
    const mq = window.matchMedia("(pointer: coarse)");
    const read = () => setR(mq.matches ? RESPONSIVE.small : RESPONSIVE.desktop);
    read();
    mq.addEventListener("change", read);
    return () => mq.removeEventListener("change", read);
  }, []);
  return r;
}

function usePointerParallax(active, enabled) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, PARALLAX_SPRING);
  const y = useSpring(rawY, PARALLAX_SPRING);

  useEffect(() => {
    if (!enabled) return;

    if (!active) {
      rawX.set(0);
      rawY.set(0);
      return;
    }

    const onMove = (event) => {
      rawX.set((event.clientX / window.innerWidth) * 2 - 1);
      rawY.set((event.clientY / window.innerHeight) * 2 - 1);
    };
    const onLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [active, enabled, rawX, rawY]);

  return { x, y };
}

function Card({
  card,
  progress,
  reduce,
  clusterRotation,
  scaleMul,
  isSmall,
  colX,
  fixedCard,
  stackScale,
  cardRadius,
  pointer,
  depth,
}) {
  const { item, target } = card;
  // with known image dimensions the card follows the photo's own ratio, so nothing is cropped
  const aspect = item.width && item.height ? item.width / item.height : null;

  const flat = reduce === true;
  const stackRotate = flat ? 0 : clusterRotation ? card.stackRotate ?? 0 : 0;
  const stackOffset = card.stackOffset ?? { x: 0, y: 0 };
  const restScale = scaleMul ?? target.scale ?? 1;

  const sm = isSmall && card.targetSm ? card.targetSm : null;
  const endX = sm ? (colX != null ? Math.sign(sm.x) * colX : sm.x) : target.x;
  const endY = sm ? sm.y : target.y;
  const endRotate = flat || isSmall ? 0 : target.rotate;

  // -50% keeps card centred on its anchor
  const translate = useTransform([progress, pointer.x, pointer.y], ([p, px, py]) => {
    const tx = stackOffset.x + (endX - stackOffset.x) * p;
    const ty = stackOffset.y + (endY - stackOffset.y) * p;
    const drift = depth * p;
    const dx = tx - px * PARALLAX_X * drift;
    const dy = ty - py * PARALLAX_Y * drift;
    return `calc(-50% + ${dx}vw) calc(-50% + ${dy}vh)`;
  });
  const rotate = useTransform(progress, [0, 1], [stackRotate, endRotate]);
  const scale = useTransform(progress, [0, 1], [stackScale, restScale]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 will-change-transform"
      style={{
        width: `${fixedCard ? fixedCard.w : target.w}vw`,
        height: aspect ? "auto" : `${fixedCard ? fixedCard.h : target.h}vh`,
        aspectRatio: aspect ?? undefined,
        zIndex: card.z ?? 1,
        translate,
        rotate,
        scale,
      }}
    >
      <div
        className="relative h-full w-full overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] max-md:rounded-[4vw]"
        style={{ borderRadius: `${cardRadius}px` }}
      >
        <Image
          src={item.src}
          alt={item.alt ?? ""}
          fill
          sizes="(max-width: 768px) 45vw, 30vw"
          loading="eager"
          draggable={false}
          className={aspect ? "object-contain" : "object-cover"}
        />
      </div>
    </motion.div>
  );
}

/**
 * Scroll-driven gallery: a fanned stack of cards that scatters into a layout
 * while the section is pinned, revealing centred copy underneath.
 */
export default function StackSpread({
  cards,
  title,
  subtitle,
  action,
  scrollLength = 350,
  bgColor = "#ececeb",
  clusterRotation = true,
  stackScale = 0.82,
  cardRadius = 8,
  textColor = "#141414",
  textFadeStart = 0.3,
  showScrollHint = true,
  scrollHintLabel = "Scroll",
  className = "",
  id,
}) {
  const wrapRef = useRef(null);
  const reduce = useReducedMotion();
  const { scale: scaleMul, small: isSmall, colX, card: fixedCard } = useResponsive();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  // hold, scatter, then settle
  const progress = useTransform(
    scrollYProgress,
    [0, SCATTER_START, SCATTER_END, 1],
    [0, 0, 1, 1],
  );

  const [spread, setSpread] = useState(false);
  const [copyVisible, setCopyVisible] = useState(false);
  useMotionValueEvent(progress, "change", (p) => {
    setSpread((was) => (was ? p > 0.985 : p >= 0.999));
    setCopyVisible(p >= textFadeStart + 0.2);
  });
  const parallaxEnabled = reduce !== true && !isSmall;
  const pointer = usePointerParallax(spread, parallaxEnabled);

  const noScale = reduce === true;
  const copyOpacity = useTransform(progress, [textFadeStart, textFadeStart + 0.35], [0, 1]);
  const copyScale = useTransform(progress, [textFadeStart, 0.9], [0.85, 1]);
  const hintOpacity = useTransform(progress, [0, SCATTER_START], [1, 0]);

  return (
    <section
      id={id}
      ref={wrapRef}
      className={`relative w-full ${className}`}
      style={{ height: `${scrollLength}vh`, backgroundColor: bgColor }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0 z-[5] flex flex-col items-center justify-center px-6 text-center max-md:px-8"
          style={{ opacity: copyOpacity, scale: noScale ? 1 : copyScale }}
        >
          {title && (
            <h2
              className="m-0 w-full text-[4.5vw] font-normal !leading-none tracking-tight max-md:text-[10vw]"
              style={{ color: textColor }}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className="mb-0 mt-[1.2vw] w-full max-w-[42ch] text-[1.15vw] leading-relaxed tracking-tight max-md:mt-3 max-md:text-[3.6vw]"
              style={{ color: textColor, opacity: 0.6 }}
            >
              {subtitle}
            </p>
          )}
          {action && (
            <div
              className={`mt-[2vw] max-md:mt-5 ${copyVisible ? "pointer-events-auto" : "pointer-events-none"}`}
              aria-hidden={!copyVisible}
            >
              {action}
            </div>
          )}
        </motion.div>

        <div className="pointer-events-none absolute inset-0 z-10">
          {cards.map((card, i) => (
            <Card
              key={card.item.src}
              card={card}
              progress={progress}
              reduce={reduce}
              clusterRotation={clusterRotation}
              scaleMul={scaleMul}
              isSmall={isSmall}
              colX={colX}
              fixedCard={fixedCard}
              stackScale={stackScale}
              cardRadius={cardRadius}
              pointer={pointer}
              depth={parallaxEnabled ? parallaxDepth(i, cards.length) : 0}
            />
          ))}
        </div>

        {showScrollHint && (
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-[3vh] z-20 flex flex-col items-center gap-[0.6vh] text-[0.8vw] font-medium uppercase tracking-[0.2em] max-md:bottom-6 max-md:gap-1 max-md:text-[2.8vw]"
            style={{ color: textColor, opacity: hintOpacity }}
          >
            <span>{scrollHintLabel}</span>
            <ChevronDown
              className="h-4 w-4 animate-bounce max-md:h-[4vw] max-md:w-[4vw]"
              aria-hidden="true"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
