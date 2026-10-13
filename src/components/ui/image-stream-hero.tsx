"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ── the corridor ────────────────────────────────────────────────
 * Two rails of cards ride from far behind the screen toward the
 * viewer. Perspective alone does the work that looks like two
 * animations: as a card's z grows it gets bigger *and* its screen x
 * sweeps outward from the vanishing point, because the projection
 * scales position and size by the same factor.
 *
 * Three things shape it, and each one fixes a specific artefact:
 *
 * 1. Depth is authored as *apparent size*, geometrically — each card
 *    is a constant ratio bigger than the one behind it, all the way
 *    out. Spacing a straight z-range evenly instead makes the near
 *    cards tear apart from each other as the projection blows up.
 * 2. The rails open hard in the first stretch and then hold
 *    (`fan` > 1). That opening cancels the — still slow — growth back
 *    there, so the ribbon leaves the centre as a flat band, bends
 *    once, and only then runs out on the diagonal. Parallel rails
 *    project to a straight cone with no bend at all.
 * 3. Neither end of the loop is ever on screen. A card dies with its
 *    inner edge past 50cqw, clear of the container's edge. And it is
 *    born *across* the axis — `railBirth` is negative, so the newest
 *    card starts on the far side and sweeps back through the centre.
 *    That plugs the throat: the axis stays covered at every instant,
 *    and a newborn lands behind cards that already cover it, so it
 *    needs no fade in. Birthing on its own side instead leaves a hole
 *    at dead centre that blinks open once every cycle.
 *
 * Every length is in `cqw` — a percentage of the container's width —
 * so the whole corridor keeps its proportions at any size. The
 * defaults were fitted numerically against a reference recording's
 * card-height and edge-position profile, not eyeballed.
 * ─────────────────────────────────────────────────────────────── */

/**
 * Geometry of the corridor. Every length is `cqw`, a percentage of the
 * container's width, so the shape is resolution-independent.
 *
 * These interact: the ribbon only stays solid while consecutive cards
 * overlap, which needs `exitHeight / birthHeight` spread over enough
 * `cards`. Raising `exitHeight`, dropping `cards`, or pulling `railExit`
 * in all push toward a visible tear near the frame edge.
 */
export type CorridorPath = {
  /** Strength of the projection. Lower is a wider-angle, more dramatic rush. @default 30 */
  perspective?: number;
  /** Card width in world units. @default 18 */
  cardWidth?: number;
  /** Card height in world units. @default 25 */
  cardHeight?: number;
  /** Corner radius applied to each card. @default 0.4 */
  cardRadius?: number;
  /** On-screen card height at the waist, where a card is born. @default 2.6 */
  birthHeight?: number;
  /** On-screen card height as a card leaves the frame. @default 46 */
  exitHeight?: number;
  /**
   * Lateral offset at birth. Negative starts the card across the axis so the
   * centre never opens up — see note 3 above. @default -11
   */
  railBirth?: number;
  /** Lateral offset once the rails have finished opening. @default 44 */
  railExit?: number;
  /** How front-loaded the opening is. >1 opens early then holds. @default 3.3 */
  fan?: number;
  /** Y-rotation at birth, degrees. @default 6 */
  turnBirth?: number;
  /** Y-rotation at exit, degrees. @default 28 */
  turnExit?: number;
  /** Keyframe stops used to trace the curve. Raise only if motion looks faceted. @default 24 */
  stops?: number;
  /**
   * Fraction of the trip spent on the receding-then-growing curve. After that
   * the card stops growing and slides straight out to the edge of the frame at
   * a constant size, so cards sit side by side instead of stacking on top of
   * each other. 1 keeps the original single curve. @default 1
   */
  hold?: number;
};

const PATH: Required<CorridorPath> = {
  perspective: 30,
  cardWidth: 18,
  cardHeight: 25,
  cardRadius: 0.4,
  birthHeight: 2.6,
  exitHeight: 46,
  railBirth: -11,
  railExit: 44,
  fan: 3.3,
  turnBirth: 6,
  turnExit: 28,
  stops: 24,
  hold: 1,
};

/** Sample the path once so the CSS keyframes trace the real curve. */
function keyframes(dir: 1 | -1, name: string, p: Required<CorridorPath>) {
  const steps: string[] = [];
  const hold = Math.min(Math.max(p.hold, 0.05), 1);
  for (let s = 0; s <= p.stops; s++) {
    const u = s / p.stops;
    // Geometric in apparent size, so consecutive cards keep a constant size
    // ratio and the ribbon stays solid at both ends.
    const scale =
      (p.birthHeight / p.cardHeight) *
      Math.pow(p.exitHeight / p.birthHeight, u);
    const z = p.perspective * (1 - 1 / scale);
    const rail =
      p.railExit - (p.railExit - p.railBirth) * Math.pow(1 - u, p.fan);
    const turn = p.turnBirth + (p.turnExit - p.turnBirth) * u;
    steps.push(
      `${(u * hold * 100).toFixed(2)}%{transform:translate3d(${(
        dir * rail
      ).toFixed(2)}cqw,0,${z.toFixed(2)}cqw) rotateY(${(-dir * turn).toFixed(
        2,
      )}deg)}`,
    );
  }

  if (hold < 1) {
    // Second leg: size is fixed, so on-screen x is simply rail * scale. Slide
    // that straight out until the card has fully left the frame. A hair of
    // growth keeps the outer card in front where two touch, instead of the
    // pair z-fighting at equal depth.
    const endScale = p.exitHeight / p.cardHeight;
    const outScale = endScale * 1.06;
    const x0 = p.railExit * endScale;
    const xOut = 50 + (p.cardWidth * outScale) / 2 + 4;
    const legs = 6;
    for (let s = 1; s <= legs; s++) {
      const b = s / legs;
      const scale = endScale * (1 + 0.06 * b);
      const x = x0 + (xOut - x0) * b;
      const z = p.perspective * (1 - 1 / scale);
      steps.push(
        `${((hold + (1 - hold) * b) * 100).toFixed(2)}%{transform:translate3d(${(
          (dir * x) / scale
        ).toFixed(2)}cqw,0,${z.toFixed(2)}cqw) rotateY(${(
          -dir * p.turnExit
        ).toFixed(2)}deg)}`,
      );
    }
  }
  return `@keyframes ${name}{${steps.join("")}}`;
}

export type StreamImage = {
  src: string;
  /** Only used if you drop the decorative treatment; the corridor is aria-hidden. */
  alt?: string;
  /**
   * `contain` keeps a cutout fully inside the card. `cover` fills the card.
   * @default "cover"
   */
  fit?: "cover" | "contain";
  /** Plate drawn behind a transparent cutout. */
  backdrop?: string;
};

export type ImageStreamFocal = {
  src: string;
  alt?: string;
  /** On-screen height as a percentage of the section height. @default 40 */
  height?: number;
};

export type ImageStreamHeroProps = {
  /**
   * Images cycled onto the rails. Both rails run the same sequence, so the
   * corridor reads as one mirrored stream. Fewer than `cards` simply repeat.
   */
  images: StreamImage[];
  /**
   * Cards on each rail at once. More cards means a denser corridor, not a
   * faster one — spacing is derived from this and `speed`. Drop it far below
   * the default and consecutive cards grow too fast to stay overlapped near
   * the exit, which tears a gap in the ribbon.
   * @default 9
   */
  cards?: number;
  /**
   * Seconds for one card to travel the whole corridor.
   * @default 18
   */
  speed?: number;
  /**
   * Vertical placement of the corridor's axis, as a percentage of height.
   * @default 55
   */
  axis?: number;
  /** Override any part of the corridor geometry. Merged over the defaults. */
  path?: CorridorPath;
  /** Extra classes for each card, e.g. a plate behind transparent cutouts. */
  cardClassName?: string;
  /**
   * Object fixed on the vanishing point. Distant cards stay behind it and
   * only pass in front once they have come forward.
   */
  focal?: ImageStreamFocal;
  /**
   * Fades the corridor out over this percentage of the width at each side, so
   * cards leave softly instead of being sliced by the frame. 0 turns it off.
   * @default 0
   */
  edgeFade?: number;
  /** Content rendered above the corridor. */
  children?: React.ReactNode;
  className?: string;
};

type RailSlots = { right: number[]; left: number[] };

/** Left rail starts a full rail later, so a pair at the same depth never matches. */
function seedRails(pool: number, count: number): { slots: RailSlots; next: number } {
  const offset = count % pool === 0 ? Math.max(1, Math.floor(pool / 2)) : count;
  const right = Array.from({ length: count }, (_, i) => i % pool);
  const left = Array.from({ length: count }, (_, i) => (i + offset) % pool);
  const used = new Set([...right, ...left]);
  let next = 0;
  while (used.has(next % pool) && next < pool) next += 1;
  return { slots: { right, left }, next: next % pool };
}

export function ImageStreamHero({
  images,
  cards = 9,
  speed = 18,
  axis = 55,
  path,
  cardClassName,
  focal,
  edgeFade = 0,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & ImageStreamHeroProps) {
  const id = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const right = `ish-r-${id}`;
  const left = `ish-l-${id}`;
  const card = `ish-c-${id}`;

  const p = React.useMemo(() => ({ ...PATH, ...path }), [path]);
  const pool = Math.max(images.length, 1);
  // Cards keep a stable order. A card only takes the next image once it has
  // travelled off the edge and been reborn, so the corridor never reshuffles
  // the faces that are still on screen.
  const seeded = seedRails(pool, cards);
  const nextIndex = React.useRef(seeded.next);
  const [assigned, setAssigned] = React.useState<RailSlots>(() => seeded.slots);

  React.useEffect(() => {
    const next = seedRails(pool, cards);
    nextIndex.current = next.next;
    setAssigned(next.slots);
  }, [cards, pool]);

  const css = React.useMemo(
    () =>
      `${keyframes(1, right, p)}${keyframes(-1, left, p)}` +
      // Pausing rather than disabling keeps the corridor whole: every card is
      // already dropped mid-flight by its negative delay, so it freezes as a
      // finished still instead of collapsing onto the axis.
      `@media(prefers-reduced-motion:reduce){.${card}{animation-play-state:paused}}`,
    [right, left, card, p],
  );

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      {...props}
      style={{ containerType: "size", ...props.style }}
    >
      <style>{css}</style>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          perspective: `${p.perspective}cqw`,
          perspectiveOrigin: `50% ${axis}%`,
          ...(edgeFade > 0
            ? (() => {
                const fade = `linear-gradient(90deg, transparent 0%, #000 ${edgeFade}%, #000 ${100 - edgeFade}%, transparent 100%)`;
                return { maskImage: fade, WebkitMaskImage: fade };
              })()
            : null),
        }}
      >
        <div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {focal ? (
            <div
              className="pointer-events-none absolute"
              style={{
                left: "50%",
                top: `${axis}%`,
                height: `clamp(200px, ${focal.height ?? 40}cqh, 420px)`,
                aspectRatio: "316 / 937",
                transform: "translate(-50%, -50%) translateZ(0.15cqw)",
              }}
            >
              <img
                src={focal.src}
                alt={focal.alt ?? ""}
                draggable={false}
                className="h-full w-full object-contain"
                style={{
                  filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.55))",
                }}
              />
            </div>
          ) : null}
          {[right, left].map((name) =>
            Array.from({ length: cards }, (_, i) => {
              const rail = name === right ? "right" : "left";
              const img = images[(assigned[rail][i] ?? i) % pool];
              return (
                <div
                  key={`${name}-${i}`}
                  className={cn(card, "absolute overflow-hidden", cardClassName)}
                  onAnimationIteration={
                    pool > 1
                      ? () => {
                          setAssigned((prev) => {
                            const other = rail === "right" ? "left" : "right";
                            let index = nextIndex.current % pool;
                            if (index === prev[other][i]) index = (index + 1) % pool;
                            nextIndex.current = (index + 1) % pool;
                            const next = {
                              right: prev.right.slice(),
                              left: prev.left.slice(),
                            };
                            next[rail][i] = index;
                            return next;
                          });
                        }
                      : undefined
                  }
                  style={{
                    left: "50%",
                    top: `${axis}%`,
                    width: `${p.cardWidth}cqw`,
                    height: `${p.cardHeight}cqw`,
                    marginLeft: `${-p.cardWidth / 2}cqw`,
                    marginTop: `${-p.cardHeight / 2}cqw`,
                    borderRadius: `${p.cardRadius}cqw`,
                    animation: `${name} ${speed}s linear infinite`,
                    // Negative delay drops each card mid-flight, so the
                    // corridor is already full on the first frame.
                    animationDelay: `${-(i * speed) / cards}s`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  {img ? (
                    <>
                      {img.backdrop ? (
                        <img
                          src={img.backdrop}
                          alt=""
                          aria-hidden
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
                          draggable={false}
                        />
                      ) : null}
                      <img
                        src={img.src}
                        alt={img.alt ?? ""}
                        loading="lazy"
                        decoding="async"
                        className={cn(
                          "relative z-[1] h-full w-full",
                          img.fit === "contain" ? "object-contain" : "object-cover",
                        )}
                        draggable={false}
                      />
                    </>
                  ) : null}
                </div>
              );
            }),
          )}
        </div>
      </div>

      {children}
    </div>
  );
}

export default ImageStreamHero;
