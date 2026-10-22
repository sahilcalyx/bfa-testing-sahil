import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const VIDEO_ID = "oU2rhIwkqFE";
const EMBED_SRC = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&rel=0&playsinline=1&fs=0&iv_load_policy=3&disablekb=1&cc_load_policy=0`;

/**
 * Film-gate hero:
 * 1) Title + compact video
 * 2) Video auto-expands OVER text → full hero
 * 3) Scroll → shrinks back to compact gate
 */
const HeroFilmGate2026 = () => {
  const rootRef = useRef(null);
  const [reducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const mark = root.querySelector(".hfg-mark");
      const words = root.querySelectorAll(".hfg-word");
      const title = root.querySelector(".hfg-title");
      const gate = root.querySelector(".hfg-gate");
      const bar = root.querySelector(".hfg-bar");
      const hint = root.querySelector(".hfg-hint");
      const corners = root.querySelectorAll(".hfg-corner");

      // Compact gate — sits under the title with equal white margins
      const splitY = "clamp(3.5rem, 8vh, 5rem)";
      const splitX = "clamp(1.25rem, 4vw, 2.5rem)";

      const gateClosed = () => ({
        top: "42%",
        left: splitX,
        right: splitX,
        bottom: splitY,
        borderRadius: 6,
      });

      const gateFull = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 0,
      };

      gsap.set(mark, { opacity: 0, scale: 1.06 });
      gsap.set(words, { yPercent: 115, opacity: 0 });
      gsap.set(title, { opacity: 1, y: 0 });
      gsap.set(bar, { scaleY: 0, transformOrigin: "top center" });
      gsap.set(corners, { opacity: 0 });
      gsap.set(hint, { opacity: 0, color: "#71717a" });
      gsap.set(gate, {
        position: "absolute",
        width: "auto",
        height: "auto",
        ...gateClosed(),
        opacity: 0,
        scale: 0.96,
      });

      if (reducedMotion) {
        gsap.set([mark, words, corners], {
          opacity: 1,
          yPercent: 0,
          scale: 1,
        });
        gsap.set(bar, { scaleY: 1 });
        gsap.set(gate, { ...gateClosed(), opacity: 1, scale: 1 });
        return;
      }

      let reverse;

      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(gate, { ...gateFull, scale: 1, clearProps: "transform" });

          reverse = gsap
            .timeline({
              scrollTrigger: {
                trigger: root,
                start: "top top",
                end: "+=130%",
                pin: true,
                scrub: 0.9,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            })
            .to(
              hint,
              { opacity: 0, color: "#71717a", duration: 0.2 },
              0
            )
            .to(
              gate,
              {
                ...gateClosed(),
                duration: 1,
                ease: "none",
              },
              0
            )
            .to(
              corners,
              { opacity: 1, duration: 0.35, ease: "none" },
              0.35
            )
            .to(
              title,
              { opacity: 1, y: 0, duration: 0.45, ease: "none" },
              0.25
            )
            .to(
              mark,
              { opacity: 0.06, duration: 0.4, ease: "none" },
              0.2
            );

          ScrollTrigger.refresh();
        },
      });

      intro.to(mark, { opacity: 0.06, scale: 1, duration: 1.15 }, 0);
      intro.to(bar, { scaleY: 1, duration: 0.85, ease: "power2.out" }, 0.05);

      intro.to(
        words,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.07,
          ease: "power4.out",
        },
        0.12
      );

      intro.to(corners, { opacity: 1, duration: 0.4, stagger: 0.04 }, 0.5);
      intro.to(
        gate,
        { opacity: 1, scale: 1, duration: 0.75, ease: "power3.out" },
        0.45
      );

      // Hold compact stage
      intro.to({}, { duration: 0.5 });

      // Expand OVER text → full hero
      intro.to(
        gate,
        {
          ...gateFull,
          duration: 1.45,
          ease: "power3.inOut",
        },
        "+=0.05"
      );

      intro.to(
        corners,
        { opacity: 0, duration: 0.35, ease: "power2.in" },
        "-=1.25"
      );

      intro.to(
        title,
        { opacity: 0, y: -24, duration: 0.55, ease: "power2.in" },
        "-=1.15"
      );

      intro.to(
        mark,
        { opacity: 0, duration: 0.45, ease: "power2.in" },
        "-=1.05"
      );

      intro.to(
        hint,
        { opacity: 1, color: "rgba(255,255,255,0.85)", duration: 0.4 },
        "-=0.25"
      );

      return () => {
        reverse?.scrollTrigger?.kill();
        reverse?.kill();
      };
    },
    { scope: rootRef, dependencies: [reducedMotion] }
  );

  return (
    <section
      ref={rootRef}
      className="relative isolate h-[100svh] min-h-[100svh] w-full overflow-hidden bg-white"
      aria-label="Brit Fintech Awards 2026 — film gate hero"
    >
      <div
        className="hfg-mark pointer-events-none absolute -right-[4%] top-1/2 z-0 -translate-y-1/2 select-none font-['Outfit',sans-serif] text-[min(52vh,28rem)] font-black leading-none tracking-[-0.08em] text-zinc-950"
        aria-hidden="true"
      >
        26
      </div>

      <div
        className="hfg-bar absolute left-0 top-0 z-20 hidden h-full w-[3px] bg-[#c8102e] md:block"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[36%] bg-[linear-gradient(90deg,rgba(200,16,46,0.05)_0%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Title — sits under expanding video */}
      <div className="hfg-title pointer-events-none absolute inset-x-0 top-0 z-20 px-6 pt-28 md:px-12 md:pt-32 lg:px-16">
        <h1 className="m-0 max-w-none font-['Outfit',sans-serif] text-[clamp(2rem,5.5vw,4.6rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-zinc-950">
          <span className="block overflow-hidden whitespace-nowrap">
            <span className="hfg-word inline-block">
              The Night That <span className="text-[#c8102e]">Defined</span>
            </span>
          </span>
          <span className="block overflow-hidden text-[#c8102e]">
            <span className="hfg-word inline-block">Excellence</span>
          </span>
        </h1>
      </div>

      {/* Absolute film gate — expands to cover entire hero */}
      <div className="hfg-shell absolute inset-0 z-30">
        <div className="hfg-gate bg-zinc-950 shadow-[0_30px_80px_rgba(0,0,0,0.18)] will-change-[top,left,right,bottom,border-radius]">
          <span className="hfg-corner pointer-events-none absolute -left-[3px] -top-[3px] z-20 h-5 w-5 border-l-[3px] border-t-[3px] border-[#c8102e]" />
          <span className="hfg-corner pointer-events-none absolute -right-[3px] -top-[3px] z-20 h-5 w-5 border-r-[3px] border-t-[3px] border-[#c8102e]" />
          <span className="hfg-corner pointer-events-none absolute -bottom-[3px] -left-[3px] z-20 h-5 w-5 border-b-[3px] border-l-[3px] border-[#c8102e]" />
          <span className="hfg-corner pointer-events-none absolute -bottom-[3px] -right-[3px] z-20 h-5 w-5 border-b-[3px] border-r-[3px] border-[#c8102e]" />

          <div className="absolute inset-0 overflow-hidden">
            {/* Cover-fill so expanded hero has no black letterbox bars */}
            <iframe
              className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
              src={EMBED_SRC}
              title="Brit Fintech Awards 2026 — Official Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>

      <p className="hfg-hint pointer-events-none absolute bottom-5 left-1/2 z-40 -translate-x-1/2 font-['Outfit',sans-serif] text-[0.68rem] font-semibold uppercase tracking-[0.22em] drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
        Scroll to shrink · <span className="text-[#ff4d6a]">2026 winners</span>
      </p>
    </section>
  );
};

export default HeroFilmGate2026;
