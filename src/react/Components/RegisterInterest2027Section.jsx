"use client";

import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PAGE = "/register-interest-2027?src=home-section";
const G = "/assets/img/gallery2026";

// Three looping columns of 2026 moments. Each track holds its set three times and slides by one set, so the loop is seamless.
const COLUMNS = [
  { dur: 46, dir: "normal", photos: ["red-carpet/1", "winner-photos/7", "keynote/7"] },
  { dur: 38, dir: "reverse", photos: ["host/2", "winner-photos/13", "red-carpet/26"] },
  { dur: 52, dir: "normal", photos: ["networking/19", "keynote/19", "winner-photos/28"] },
].map((c) => ({ ...c, photos: c.photos.map((p) => `${G}/${p}.webp`) }));

// Brand chevron, reused as the photo window, the crimson slab behind it and the thin outline.
const CHEVRON = "polygon(0% 0%, 62% 0%, 100% 50%, 62% 100%, 0% 100%, 38% 50%)";
const CHEVRON_POINTS = "0,0 62,0 100,50 62,100 0,100 38,50";

/**
 * Home-page promo for BFA27 interest registration.
 * Editorial band: headline + single CTA on the left; on the right, a brand-chevron
 * window onto slowly scrolling 2026 photography.
 */
const RegisterInterest2027Section = () => {
  const rootRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return undefined;

      const reveals = root.querySelectorAll("[data-ri27-reveal]");
      const stage = root.querySelector("[data-ri27-stage]");
      const tilt = root.querySelector("[data-ri27-tilt]");
      const window_ = root.querySelector("[data-ri27-window]");
      const slab = root.querySelector("[data-ri27-slab]");
      const outline = root.querySelector("[data-ri27-outline]");
      const year = root.querySelector("[data-ri27-year]");
      const rule = root.querySelector("[data-ri27-rule]");

      if (reduceMotion) {
        gsap.set([reveals, window_, slab, outline], { opacity: 1, clearProps: "transform" });
        gsap.set(rule, { scaleX: 1 });
        return undefined;
      }

      gsap.set(reveals, { opacity: 0, y: 26 });
      gsap.set(window_, { opacity: 0, x: 40 });
      gsap.set(slab, { opacity: 0, x: 90 });
      gsap.set(outline, { opacity: 0, x: 24, y: 24 });
      gsap.set(rule, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(tilt, { transformPerspective: 1200 });

      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: root, start: "top 70%", once: true },
      });
      intro
        .to(slab, { opacity: 1, x: 0, duration: 1.1 }, 0)
        .to(window_, { opacity: 1, x: 0, duration: 1.2 }, 0.1)
        .to(outline, { opacity: 1, x: 0, y: 0, duration: 1.2 }, 0.25)
        .to(reveals, { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, 0.15)
        .to(rule, { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, 0.5);

      // Slow parallax while the band scrolls through the viewport.
      gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 1.4 },
      })
        .fromTo(slab, { yPercent: 7 }, { yPercent: -7 }, 0)
        .fromTo(outline, { yPercent: -5 }, { yPercent: 5 }, 0)
        .fromTo(year, { yPercent: 10 }, { yPercent: -14 }, 0);

      // Gentle 3D tilt toward the cursor on desktop.
      if (!window.matchMedia("(pointer: fine)").matches) return undefined;
      const rx = gsap.quickTo(tilt, "rotationX", { duration: 0.8, ease: "power3.out" });
      const ry = gsap.quickTo(tilt, "rotationY", { duration: 0.8, ease: "power3.out" });
      const onMove = (e) => {
        const r = stage.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry(px * 9);
        rx(-py * 7);
      };
      const onLeave = () => {
        rx(0);
        ry(0);
      };
      stage.addEventListener("pointermove", onMove, { passive: true });
      stage.addEventListener("pointerleave", onLeave);
      return () => {
        stage.removeEventListener("pointermove", onMove);
        stage.removeEventListener("pointerleave", onLeave);
      };
    },
    { scope: rootRef, dependencies: [reduceMotion] }
  );

  return (
    <section
      ref={rootRef}
      className="ri27-home relative isolate w-full overflow-hidden bg-[#07070a] font-['Outfit',sans-serif] text-white"
      aria-labelledby="ri27-home-title"
    >
      <style>{`
        .ri27-home h2 { font-family: 'Outfit', system-ui, sans-serif !important; color: #fff; margin: 0; }
        .ri27-home p { margin: 0; }
        .ri27-home .ri27-interest-cta { color: #000 !important; background-color: #fff !important; }
        .ri27-home .ri27-interest-cta:hover,
        .ri27-home .ri27-interest-cta:focus-visible { color: #fff !important; background-color: #c8102e !important; }
        .ri27-home .ri27-interest-cta:hover > span,
        .ri27-home .ri27-interest-cta:focus-visible > span { color: #c8102e !important; background-color: #fff !important; }
        @keyframes ri27-col {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(0, calc(-100% / 3), 0); }
        }
        .ri27-home .ri27-track {
          animation: ri27-col var(--dur) linear infinite;
          animation-direction: var(--dir);
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) { .ri27-home .ri27-track { animation: none; } }
      `}</style>

      {/* Ambient light */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(55%_80%_at_85%_50%,rgba(200,16,46,0.22),transparent_65%),radial-gradient(40%_60%_at_0%_0%,rgba(255,255,255,0.04),transparent_60%)]"
        aria-hidden="true"
      />

      {/* Giant outlined year, bottom-left */}
      <div
        data-ri27-year
        className="pointer-events-none absolute -bottom-[0.2em] -left-[0.03em] z-0 select-none text-[clamp(9rem,24vw,22rem)] font-black leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.08)]"
        aria-hidden="true"
      >
        2027
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-10 px-5 pb-14 pt-12 sm:px-8 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-8 lg:py-0 lg:pl-10 lg:pr-0">
        {/* Left: headline + CTA */}
        <div className="flex flex-col items-start lg:py-24">
          <h2
            id="ri27-home-title"
            data-ri27-reveal
            className="max-w-[13ch] text-[clamp(2.4rem,6vw,5.2rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.045em]"
          >
            <span className="block text-[#c8102e]">BFA 2027</span>
            The next chapter begins here.
          </h2>

          <div data-ri27-rule className="mt-7 h-[2px] w-24 bg-gradient-to-r from-[#c8102e] to-[#c8102e]/0" aria-hidden="true" />

          <p
            data-ri27-reveal
            className="mt-7 max-w-[44ch] text-[clamp(1.02rem,1.35vw,1.2rem)] leading-relaxed text-white/68"
          >
            Following an incredible celebration in 2026, the Brit FinTech Awards
            returns in 2027. A bigger stage. New opportunities. Another celebration
            of innovation.
          </p>

          <div data-ri27-reveal className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <NavLink
              to={PAGE}
              className="ri27-interest-cta group inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-white pl-6 pr-2.5 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] !text-black sm:pl-7 sm:text-[13px] sm:tracking-[0.16em] no-underline shadow-[0_18px_50px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(200,16,46,0.4)]"
            >
              Register your interest
              <span className="grid h-10 w-10 place-items-center rounded-full bg-black text-white transition duration-300 group-hover:bg-white group-hover:text-[#c8102e]">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </span>
            </NavLink>
          </div>
        </div>

        {/* Right: chevron window onto looping 2026 photography */}
        <div data-ri27-stage className="relative h-[320px] w-full sm:h-[400px] lg:h-[640px]">
          <div data-ri27-tilt className="absolute inset-0 [transform-style:preserve-3d]" aria-hidden="true">
            {/* Crimson slab, offset behind */}
            <div
              data-ri27-slab
              className="absolute inset-y-[6%] left-[8%] right-[-6%] bg-gradient-to-br from-[#c8102e] to-[#680014]"
              style={{ clipPath: CHEVRON }}
            />

            {/* Photo window */}
            <div
              data-ri27-window
              className="absolute inset-y-0 left-0 right-[2%] overflow-hidden bg-[#0d0d12]"
              style={{ clipPath: CHEVRON }}
            >
              <div className="absolute -inset-x-[10%] -inset-y-[14%] flex -rotate-[4deg] gap-2.5 sm:gap-3.5">
                {COLUMNS.map((col, c) => (
                  <div key={c} className="min-w-0 flex-1">
                    <div
                      className="ri27-track flex flex-col gap-2.5 pb-2.5 sm:gap-3.5 sm:pb-3.5"
                      style={{ "--dur": `${col.dur}s`, "--dir": col.dir }}
                    >
                      {[0, 1, 2].flatMap((copy) =>
                        col.photos.map((src) => (
                          <figure key={`${copy}-${src}`} className="m-0 aspect-[3/4] overflow-hidden rounded-md bg-[#141419]">
                            <img
                              src={src}
                              alt=""
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover saturate-[0.95] contrast-[1.05]"
                            />
                          </figure>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* Vignette so the loop edges never read as hard cuts */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,#07070a_0%,transparent_22%,transparent_78%,#07070a_100%)] opacity-90" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,10,0.55)_0%,transparent_30%,transparent_70%,rgba(104,0,20,0.35)_100%)]" />
            </div>

            {/* Thin gold outline, offset like a second frame */}
            <svg
              data-ri27-outline
              className="absolute inset-y-0 left-[3%] right-[-1%] h-full w-[98%] translate-x-[3%] translate-y-[2.5%]"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon
                points={CHEVRON_POINTS}
                fill="none"
                stroke="rgba(242,216,172,0.45)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterInterest2027Section;
