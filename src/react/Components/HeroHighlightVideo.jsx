import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const VIDEO_ID = "oU2rhIwkqFE";
const EMBED_SRC = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&rel=0&playsinline=1&fs=0&iv_load_policy=3&disablekb=1&cc_load_policy=0`;

const TITLE_LINE_1 = ["The", "Night", "That"];
const TITLE_LINE_2 = ["Defined", "Excellence"];

/**
 * White section:
 * 1) First glance — text left + red wash from left corner, video right
 * 2) Video auto-expands to fullscreen
 * 3) Scroll down — reverse to split, then continue
 */
const HeroHighlightVideo = () => {
  const rootRef = useRef(null);
  const [reducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const text = root.querySelector(".hhv-text");
      const words = root.querySelectorAll(".hhv-word");
      const fades = root.querySelectorAll(".hhv-fade");
      const video = root.querySelector(".hhv-video");
      const hint = root.querySelector(".hhv-hint");
      const reds = root.querySelectorAll(".hhv-red");
      const rule = root.querySelector(".hhv-rule");

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 900px)",
          isMobile: "(max-width: 899px)",
        },
        (ctx) => {
          const { isDesktop } = ctx.conditions;
          let reverseTween;

          const splitVideo = () => {
            if (isDesktop) {
              return {
                top: "12%",
                right: "4%",
                bottom: "12%",
                left: "50%",
                borderRadius: 16,
              };
            }
            return {
              top: "54%",
              right: "5%",
              bottom: "6%",
              left: "5%",
              borderRadius: 14,
            };
          };

          const fullVideo = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            borderRadius: 0,
          };

          gsap.set(video, {
            position: "absolute",
            width: "auto",
            height: "auto",
            ...splitVideo(),
            opacity: 0,
            x: isDesktop ? 48 : 0,
            y: isDesktop ? 0 : 36,
          });
          gsap.set(words, { yPercent: 120, opacity: 0 });
          gsap.set(fades, { opacity: 0, y: 18, x: -12 });
          gsap.set(text, { opacity: 1, x: 0 });
          gsap.set(hint, { opacity: 0 });
          gsap.set(rule, { scaleX: 0, transformOrigin: "left center" });
          gsap.set(reds, {
            opacity: 0,
            x: -120,
            scale: 0.85,
            transformOrigin: "left center",
          });

          if (reducedMotion) {
            gsap.set(words, { opacity: 1, yPercent: 0 });
            gsap.set(fades, { opacity: 1, y: 0, x: 0 });
            gsap.set(rule, { scaleX: 1 });
            gsap.set(reds, { opacity: 1, x: 0, scale: 1 });
            gsap.set(video, { ...splitVideo(), opacity: 1, x: 0, y: 0 });
            return;
          }

          const intro = gsap.timeline({
            defaults: { ease: "power3.out" },
            onComplete: () => {
              gsap.set(video, {
                ...fullVideo,
                x: 0,
                y: 0,
                clearProps: "transform",
              });

              reverseTween = gsap
                .timeline({
                  scrollTrigger: {
                    trigger: root,
                    start: "top top",
                    end: "+=130%",
                    pin: true,
                    scrub: 0.95,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                  },
                })
                .to(hint, { opacity: 0, duration: 0.2 }, 0)
                .to(video, { ...splitVideo(), duration: 1, ease: "none" }, 0)
                .to(
                  text,
                  { opacity: 1, x: 0, duration: 0.45, ease: "none" },
                  0.2
                )
                .to(
                  reds,
                  { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "none" },
                  0.15
                );

              ScrollTrigger.refresh();
            },
          });

          // 1) Red theme washes in from left corner → blend into white
          intro.to(
            reds,
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1.15,
              stagger: 0.12,
              ease: "power3.out",
            },
            0
          );

          // 2) Eyebrow + deck slide from left
          intro.to(
            fades,
            {
              opacity: 1,
              y: 0,
              x: 0,
              duration: 0.7,
              stagger: 0.12,
            },
            0.15
          );

          // 3) Title words rise
          intro.to(
            words,
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.055,
              ease: "power4.out",
            },
            0.2
          );

          // Accent rule draws under title
          intro.to(
            rule,
            { scaleX: 1, duration: 0.7, ease: "power2.out" },
            0.55
          );

          // 4) Video into right panel
          intro.to(
            video,
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
            },
            0.45
          );

          // Hold split glance
          intro.to({}, { duration: 0.5 });

          // 5) Expand fullscreen
          intro.to(
            video,
            {
              ...fullVideo,
              duration: 1.35,
              ease: "power3.inOut",
            },
            "+=0.05"
          );

          // Soften reds + text as film takes over
          intro.to(
            reds,
            {
              opacity: 0.15,
              x: -40,
              duration: 0.6,
              ease: "power2.in",
            },
            "-=1.15"
          );

          intro.to(
            text,
            {
              opacity: 0,
              x: isDesktop ? -40 : 0,
              y: isDesktop ? 0 : -16,
              duration: 0.55,
              ease: "power2.in",
            },
            "-=1.05"
          );

          intro.to(hint, { opacity: 1, duration: 0.4 }, "-=0.2");

          return () => {
            reverseTween?.scrollTrigger?.kill();
            reverseTween?.kill();
          };
        }
      );

      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [reducedMotion] }
  );

  return (
    <section
      ref={rootRef}
      className="relative isolate h-[100svh] min-h-[100svh] w-full overflow-hidden bg-white"
      aria-label="Brit Fintech Awards 2026 highlight film"
    >
      {/* Red theme — enters from left corner, blends into white */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
        aria-hidden="true"
      >
        <div className="hhv-red absolute -left-[18%] -top-[22%] h-[70%] w-[55%] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.28)_0%,rgba(200,16,46,0.1)_42%,transparent_70%)] blur-2xl" />
        <div className="hhv-red absolute -left-[8%] top-[28%] h-[55%] w-[42%] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.18)_0%,rgba(200,16,46,0.06)_50%,transparent_72%)] blur-3xl" />
        <div className="hhv-red absolute bottom-[-10%] left-[-12%] h-[45%] w-[38%] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.14)_0%,transparent_68%)] blur-3xl" />
        {/* Soft edge that mixes red → white toward center */}
        <div className="hhv-red absolute inset-y-0 left-0 w-[48%] bg-[linear-gradient(90deg,rgba(200,16,46,0.07)_0%,rgba(200,16,46,0.03)_35%,transparent_100%)]" />
      </div>

      {/* Left — animated copy */}
      <div className="hhv-text absolute inset-x-0 top-0 z-20 flex h-[48%] items-center px-6 pt-20 md:inset-y-0 md:left-0 md:right-auto md:h-full md:w-[48%] md:px-10 md:pt-0 lg:px-16 xl:px-20">
        <div className="max-w-2xl">
          <p className="hhv-fade mb-4 font-['Outfit',sans-serif] text-xs font-bold uppercase tracking-[0.32em] text-[#c8102e] sm:text-sm">
            Brit Fintech Awards 2026
          </p>

          <h1 className="m-0 font-['Outfit',sans-serif] text-[clamp(2.35rem,5.8vw,4.5rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.035em] text-zinc-950">
            <span className="flex flex-wrap gap-x-[0.28em]">
              {TITLE_LINE_1.map((word) => (
                <span
                  key={word}
                  className="inline-block overflow-hidden pb-[0.06em]"
                >
                  <span className="hhv-word inline-block will-change-transform">
                    {word}
                  </span>
                </span>
              ))}
            </span>
            <span className="mt-1 flex flex-wrap gap-x-[0.28em] text-[#c8102e]">
              {TITLE_LINE_2.map((word) => (
                <span
                  key={word}
                  className="inline-block overflow-hidden pb-[0.06em]"
                >
                  <span className="hhv-word inline-block will-change-transform">
                    {word}
                  </span>
                </span>
              ))}
            </span>
          </h1>

          <div className="hhv-rule mt-4 h-[3px] w-14 origin-left rounded-full bg-[#c8102e]" />
        </div>
      </div>

      {/* Right — video (crop bottom slightly to hide forced CC) */}
      <div className="hhv-video absolute z-10 overflow-hidden bg-zinc-950 shadow-[0_24px_70px_rgba(0,0,0,0.16)] will-change-[top,right,bottom,left,width,height,border-radius]">
        <iframe
          className="pointer-events-none absolute left-0 top-0 h-[112%] w-full max-w-none origin-top border-0 scale-[1.02]"
          src={EMBED_SRC}
          title="Brit Fintech Awards 2026 — Official Highlights"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <p className="hhv-hint pointer-events-none absolute bottom-6 left-1/2 z-30 -translate-x-1/2 font-['Outfit',sans-serif] text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)]">
        Scroll to continue ·{" "}
        <span className="text-[#ff4d6a]">2026 winners</span>
      </p>
    </section>
  );
};

export default HeroHighlightVideo;
