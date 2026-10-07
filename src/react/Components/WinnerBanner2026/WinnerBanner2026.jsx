import React, { useCallback, useEffect, useRef, useState } from "react";
import { animate, createTimeline } from "animejs";
import ScrambleWinnersOverlay from "./ScrambleWinnersOverlay";
import WinnersConfetti2026 from "../../Pages/2026/Winners2026/components/WinnersConfetti2026";
import "./WinnerBanner2026.css";

const BANNER_IMAGE = "/assets/img/banner-slider/groupBanner.webp";

/**
 * Flow (once per page load / refresh — does not loop):
 * 1) Black splash
 * 2) Scramble text on black
 * 3) Smooth black → brand → white bridge
 * 4) Image circle expands from center → outer
 * 5) Solid winner box at bottom center
 */
const WinnerBanner2026 = () => {
  const imageRef = useRef(null);
  const bridgeRef = useRef(null);
  const bloomRef = useRef(null);
  const irisAnimRef = useRef(null);
  const bridgeAnimRef = useRef(null);

  const [phase, setPhase] = useState("splash");
  // splash | scramble | bridge | iris | done
  const [showWinnerBox, setShowWinnerBox] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setPhase("done");
      setShowWinnerBox(true);
      return undefined;
    }
    const t = window.setTimeout(() => setPhase("scramble"), 650);
    return () => window.clearTimeout(t);
  }, [reducedMotion]);

  const runCircularReveal = useCallback(() => {
    const el = imageRef.current;
    if (!el) {
      setPhase("done");
      setShowWinnerBox(true);
      return;
    }

    setPhase("iris");

    const start = "circle(0% at 50% 50%)";
    const end = "circle(160% at 50% 50%)";
    el.style.clipPath = start;
    el.style.webkitClipPath = start;

    try {
      irisAnimRef.current?.pause?.();
    } catch {
      /* ignore */
    }

    irisAnimRef.current = animate(el, {
      clipPath: [start, end],
      duration: 1850,
      ease: "inOutCubic",
      onRender: () => {
        el.style.webkitClipPath = el.style.clipPath;
      },
      onComplete: () => {
        el.style.clipPath = "none";
        el.style.webkitClipPath = "none";
        setPhase("done");
        setShowWinnerBox(true);
      },
    });

    window.setTimeout(() => setShowWinnerBox(true), 1100);
  }, []);

  const runBlackToWhiteBridge = useCallback(() => {
    const bridge = bridgeRef.current;
    const bloom = bloomRef.current;
    if (!bridge) {
      runCircularReveal();
      return;
    }

    setPhase("bridge");

    try {
      bridgeAnimRef.current?.pause?.();
      bridgeAnimRef.current?.revert?.();
    } catch {
      /* ignore */
    }

    // Multi-step color wash: black → deep crimson → soft rose → warm white → pure white
    // plus a soft radial bloom that opens from center
    const tl = createTimeline({
      defaults: { ease: "inOut(2.6)" },
      onComplete: () => {
        // Hold a breath on white, then expand the image
        window.setTimeout(runCircularReveal, 180);
      },
    });

    tl.add(bridge, {
      backgroundColor: [
        { to: "#000000", duration: 0 },
        { to: "#1a0609", duration: 320 },
        { to: "#680014", duration: 420 },
        { to: "#c8102e", duration: 380 },
        { to: "#f7e9ea", duration: 520 },
        { to: "#ffffff", duration: 480 },
      ],
      ease: "linear",
    });

    if (bloom) {
      bloom.style.opacity = "0";
      bloom.style.transform = "scale(0.15)";

      tl.add(
        bloom,
        {
          opacity: [
            { to: 0, duration: 0 },
            { to: 0.55, duration: 450 },
            { to: 0.85, duration: 500 },
            { to: 0.35, duration: 450 },
            { to: 0, duration: 400 },
          ],
          scale: [
            { to: 0.15, duration: 0 },
            { to: 0.55, duration: 550 },
            { to: 1.15, duration: 700 },
            { to: 1.85, duration: 650 },
          ],
          ease: "inOut(2.4)",
        },
        "<<"
      );
    }

    // Soft vignette lift so the wash feels cinematic
    tl.add(
      bridge,
      {
        filter: [
          { to: "brightness(1)", duration: 0 },
          { to: "brightness(1.08)", duration: 700 },
          { to: "brightness(1.18)", duration: 600 },
          { to: "brightness(1)", duration: 500 },
        ],
      },
      "<<"
    );

    tl.init();
    bridgeAnimRef.current = tl;
  }, [runCircularReveal]);

  const handleScrambleComplete = useCallback(() => {
    // Short beat on black after scramble exits, then bridge
    window.setTimeout(runBlackToWhiteBridge, 160);
  }, [runBlackToWhiteBridge]);

  useEffect(() => {
    return () => {
      try {
        irisAnimRef.current?.pause?.();
        irisAnimRef.current?.revert?.();
        bridgeAnimRef.current?.pause?.();
        bridgeAnimRef.current?.revert?.();
      } catch {
        /* ignore */
      }
    };
  }, []);

  const showScramble = phase === "scramble";
  const showSplash = phase === "splash" || phase === "scramble";
  const showBridge = phase === "bridge";
  const isIris = phase === "iris";
  const isDone = phase === "done";
  const onWhiteField = showBridge || isIris || isDone;

  return (
    <section
      className={`wb26${onWhiteField ? " wb26--reveal" : ""}`}
      aria-label="Congratulations to all winners 2026"
    >
      <div
        className={`wb26__stage${isIris || isDone ? " is-white" : ""}${
          isDone ? " is-done" : ""
        }`}
      >
        <div
          ref={imageRef}
          className={`wb26__image${isIris || isDone ? " is-revealed" : ""}${
            isIris ? " is-irising" : ""
          }${isDone ? " is-open" : ""}`}
          style={{ backgroundImage: `url(${BANNER_IMAGE})` }}
          role="img"
          aria-label="Brit Fintech Awards winners group"
        />

        <div
          className={`wb26__winner-box${showWinnerBox ? " is-visible" : ""}`}
          aria-live="polite"
        >
          <p className="wb26__eyebrow">Brit Fintech Awards</p>
          <h1 className="wb26__title">CONGRATULATIONS</h1>
          <h2 className="wb26__subtitle">To all the winners 2026</h2>
        </div>

        {/* Black splash for scramble intro */}
        {showSplash && (
          <div className="wb26__splash" aria-hidden="true">
            {showScramble && (
              <ScrambleWinnersOverlay
                onComplete={handleScrambleComplete}
                reducedMotion={false}
              />
            )}
          </div>
        )}

        {/* Smooth black → white bridge layer */}
        {showBridge && (
          <div ref={bridgeRef} className="wb26__bridge" aria-hidden="true">
            <div className="wb26__bridge-bloom-wrap">
              <div ref={bloomRef} className="wb26__bridge-bloom" />
            </div>
            <div className="wb26__bridge-grain" />
          </div>
        )}
      </div>

      {(isIris || isDone) && (
        <WinnersConfetti2026 burstKey={0} reduceMotion={reducedMotion} />
      )}
    </section>
  );
};

export default WinnerBanner2026;
