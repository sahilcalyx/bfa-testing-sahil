import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const VIDEO_ID = "oU2rhIwkqFE";
const EMBED_SRC = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&rel=0&playsinline=1&fs=0&iv_load_policy=3&disablekb=1&cc_load_policy=0`;

/**
 * Desktop: kinetic strip (hairline → band → full → scroll to box)
 * Mobile: simple stacked layout — title + video box below
 */
const HeroKineticStrip2026 = () => {
  const rootRef = useRef(null);
  const [reducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const eyebrow = root.querySelector(".hks-eyebrow");
      const words = root.querySelectorAll(".hks-word");
      const title = root.querySelector(".hks-title");
      const strip = root.querySelector(".hks-strip");
      const media = root.querySelector(".hks-media");
      const slash = root.querySelector(".hks-slash");
      const hint = root.querySelector(".hks-hint");
      const year = root.querySelector(".hks-year");

      const mediaCover = {
        width: "177.78vh",
        height: "56.25vw",
        minWidth: "100%",
        minHeight: "100%",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
      };

      const mediaFit = {
        width: "100%",
        height: "100%",
        minWidth: 0,
        minHeight: 0,
        top: 0,
        left: 0,
        xPercent: 0,
        yPercent: 0,
      };

      const mm = gsap.matchMedia();

      // —— Mobile: text + video box only (no expand / pin) ——
      mm.add("(max-width: 899px)", () => {
        gsap.set(year, { opacity: 0, display: "none" });
        gsap.set(hint, { opacity: 0, display: "none" });
        gsap.set(title, { clearProps: "all", opacity: 1 });
        gsap.set(strip, {
          clearProps: "all",
          opacity: 1,
          backgroundColor: "#0a0a0a",
        });
        gsap.set(media, {
          position: "absolute",
          ...mediaFit,
        });
        gsap.set(slash, { scaleX: 1, clearProps: "transform" });
        gsap.set([eyebrow, words], { opacity: 1, y: 0, yPercent: 0 });

        if (!reducedMotion) {
          gsap.from([title, strip], {
            opacity: 0,
            y: 18,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          });
        }

        return () => {
          gsap.set(year, { clearProps: "display" });
          gsap.set(hint, { clearProps: "display" });
        };
      });

      // —— Desktop / laptop: kinetic experience ——
      mm.add("(min-width: 900px)", () => {
        const vhNow = () => root.clientHeight || window.innerHeight;
        const vwNow = () => root.clientWidth || window.innerWidth;

        const isLaptop = () => {
          const vw = vwNow();
          const vh = vhNow();
          return vh < 920 || (vw >= 900 && vw < 1440 && vh < 980);
        };

        const titleBottom = () => {
          const rootTop = root.getBoundingClientRect().top;
          const titleEl = root.querySelector(".hks-title");
          if (titleEl) {
            return titleEl.getBoundingClientRect().bottom - rootTop;
          }
          return Math.max(220, vhNow() * 0.3);
        };

        // Large screens: centered band. Laptop: always below the title.
        const band = () => {
          const vh = vhNow();
          if (isLaptop()) {
            const top = titleBottom() + 28;
            const bottomPad = 44;
            const h = Math.max(220, Math.min(300, vh - top - bottomPad));
            return {
              top,
              bottom: Math.max(0, vh - top - h),
              left: 0,
              right: 0,
              borderRadius: 0,
            };
          }
          const h = Math.min(420, vh * 0.42);
          const top = (vh - h) / 2;
          return {
            top,
            bottom: vh - top - h,
            left: 0,
            right: 0,
            borderRadius: 0,
          };
        };

        const boxed = () => {
          const vw = vwNow();
          const vh = vhNow();
          const laptop = isLaptop();
          const gapAfterText = laptop ? 28 : 48;
          const bottomPad = laptop
            ? Math.max(40, vh * 0.06)
            : Math.max(72, vh * 0.09);
          const minBoxH = laptop ? 260 : 300;

          let top = titleBottom() + gapAfterText;
          let availH = Math.max(minBoxH, vh - top - bottomPad);

          // Prefer a readable video size — never collapse to a thin line
          let maxW = Math.min(
            laptop ? 820 : 900,
            vw * (laptop ? 0.86 : 0.84),
            (availH * 16) / 9
          );
          let boxH = maxW * (9 / 16);

          if (boxH < minBoxH) {
            boxH = Math.min(minBoxH, vh - bottomPad - (titleBottom() + 20));
            maxW = Math.min(vw * 0.9, (boxH * 16) / 9);
            top = Math.max(titleBottom() + 20, vh - boxH - bottomPad);
          }

          const left = (vw - maxW) / 2;

          return {
            top,
            left,
            right: vw - left - maxW,
            bottom: Math.max(0, vh - top - boxH),
            borderRadius: 14,
          };
        };

        const full = { top: 0, left: 0, right: 0, bottom: 0, borderRadius: 0 };

        // Hairline must sit under the title on laptop (not through “Excellence”)
        const hairline = () => {
          const vh = vhNow();
          if (isLaptop()) {
            const y = titleBottom() + 28;
            return {
              top: y,
              bottom: vh - y - 3,
              left: 0,
              right: 0,
              borderRadius: 0,
            };
          }
          const mid = vh / 2;
          return {
            top: mid - 1.5,
            bottom: vh - mid - 1.5,
            left: 0,
            right: 0,
            borderRadius: 0,
          };
        };

        gsap.set(year, { opacity: 0, x: 40, display: "" });
        gsap.set(eyebrow, { opacity: 0, y: 12 });
        gsap.set(words, { yPercent: 110, opacity: 0 });
        gsap.set(title, { opacity: 1, y: 0, textAlign: "center" });
        gsap.set(slash, {
          scaleX: 0,
          transformOrigin: "center center",
          marginLeft: "auto",
          marginRight: "auto",
        });
        gsap.set(hint, { opacity: 0, display: "" });
        gsap.set(strip, {
          position: "absolute",
          width: "auto",
          height: "auto",
          ...hairline(),
          backgroundColor: "#c8102e",
          opacity: 1,
        });
        gsap.set(media, {
          position: "absolute",
          ...mediaCover,
        });

        if (reducedMotion) {
          gsap.set([year, eyebrow, words], {
            opacity: 1,
            y: 0,
            yPercent: 0,
            x: 0,
          });
          gsap.set(slash, { scaleX: 1 });
          gsap.set(strip, { ...boxed(), backgroundColor: "#0a0a0a" });
          gsap.set(media, { ...mediaFit });
          return;
        }

        let reverse;
        const prevOverflow = document.body.style.overflow;
        const prevHtmlOverflow = document.documentElement.style.overflow;

        // Block page scroll until fullscreen expand finishes (desktop + laptop)
        const blockScroll = (e) => {
          e.preventDefault();
          window.scrollTo(0, 0);
        };
        const lockScroll = () => {
          document.body.style.overflow = "hidden";
          document.documentElement.style.overflow = "hidden";
          window.scrollTo(0, 0);
          window.addEventListener("wheel", blockScroll, { passive: false });
          window.addEventListener("touchmove", blockScroll, { passive: false });
          window.addEventListener("keydown", onKeyScrollBlock, false);
        };
        const onKeyScrollBlock = (e) => {
          const keys = [
            "ArrowDown",
            "ArrowUp",
            "PageDown",
            "PageUp",
            "Home",
            "End",
            " ",
          ];
          if (keys.includes(e.key)) {
            e.preventDefault();
          }
        };
        const unlockScroll = () => {
          document.body.style.overflow = prevOverflow;
          document.documentElement.style.overflow = prevHtmlOverflow;
          window.removeEventListener("wheel", blockScroll);
          window.removeEventListener("touchmove", blockScroll);
          window.removeEventListener("keydown", onKeyScrollBlock);
        };

        lockScroll();

        const intro = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => {
            gsap.set(strip, { ...full, backgroundColor: "#0a0a0a" });
            gsap.set(media, {
              position: "absolute",
              ...(isLaptop() ? mediaFit : mediaCover),
            });

            // Scroll allowed only after video is fullscreen
            unlockScroll();

            // Full → band → settled box (title returns after box settles)
            reverse = gsap
              .timeline({
                scrollTrigger: {
                  trigger: root,
                  start: "top top",
                  end: "+=150%",
                  pin: true,
                  scrub: 0.95,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                },
              })
              .to(hint, { opacity: 0, duration: 0.15 }, 0)
              .to(strip, { ...band(), duration: 0.45, ease: "none" }, 0)
              .to(strip, { ...boxed(), duration: 0.7, ease: "none" }, 0.35)
              .to(media, { ...mediaFit, duration: 0.7, ease: "none" }, 0.35)
              .to(
                title,
                {
                  opacity: 1,
                  y: 0,
                  textAlign: "center",
                  duration: 0.4,
                  ease: "none",
                },
                0.75
              )
              .to(
                slash,
                {
                  marginLeft: "auto",
                  marginRight: "auto",
                  transformOrigin: "center center",
                  duration: 0.4,
                  ease: "none",
                },
                0.75
              )
              .to(year, { opacity: 0.07, duration: 0.35, ease: "none" }, 0.8);

            ScrollTrigger.refresh();
          },
        });

        intro.to(year, { opacity: 0.07, x: 0, duration: 1.1 }, 0);
        intro.to(eyebrow, { opacity: 1, y: 0, duration: 0.55 }, 0.1);
        intro.to(
          words,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: "power4.out",
          },
          0.18
        );
        intro.to(slash, { scaleX: 1, duration: 0.7 }, 0.55);
        intro.to({}, { duration: 0.35 });
        intro.to(
          strip,
          {
            ...band(),
            backgroundColor: "#0a0a0a",
            duration: 1.1,
            ease: "power3.inOut",
          },
          "+=0.05"
        );
        intro.to({}, { duration: 0.4 });
        intro.to(
          strip,
          { ...full, duration: 1.35, ease: "power3.inOut" },
          "+=0.05"
        );
        intro.to(
          title,
          { opacity: 0, y: -20, duration: 0.5, ease: "power2.in" },
          "-=1.1"
        );
        intro.to(
          year,
          { opacity: 0, duration: 0.4, ease: "power2.in" },
          "-=0.95"
        );
        intro.to(hint, { opacity: 1, duration: 0.4 }, "-=0.2");

        return () => {
          unlockScroll();
          reverse?.scrollTrigger?.kill();
          reverse?.kill();
          intro.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [reducedMotion] }
  );

  return (
    <section
      ref={rootRef}
      className="relative isolate w-full overflow-hidden bg-[#fafafa] md:h-[100svh] md:min-h-[100svh]"
      aria-label="Brit Fintech Awards 2026 — kinetic strip hero"
    >
      <div
        className="hks-year pointer-events-none absolute -right-4 bottom-[-6%] z-[2] hidden select-none font-['Outfit',sans-serif] text-[min(58vh,32rem)] font-black leading-none tracking-[-0.09em] text-zinc-950 md:block"
        aria-hidden="true"
      >
        26
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(80%_60%_at_0%_0%,rgba(200,16,46,0.06),transparent_55%)]"
        aria-hidden="true"
      />

      {/* Title — stacked on mobile, overlay on desktop */}
      <div className="hks-title relative z-20 px-5 pb-5 pt-28 text-center md:absolute md:inset-x-0 md:top-0 md:px-10 md:pb-0 md:pt-28 lg:px-14 lg:pt-32 xl:px-20 xl:pt-40">
        <p className="hks-eyebrow mb-3 font-['Outfit',sans-serif] text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#c8102e] sm:text-[0.7rem] sm:tracking-[0.34em] md:mb-3 xl:mb-4">
          Brit Fintech Awards 2026
        </p>

        {/* Smaller type on laptop (md–lg); full size on xl+ desktop */}
        <h1 className="m-0 font-['Outfit',sans-serif] text-[clamp(1.65rem,7.5vw,4.8rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-zinc-950 md:text-[clamp(1.85rem,3.6vw,3.15rem)] md:leading-[0.96] xl:text-[clamp(2.2rem,5vw,4.6rem)] xl:leading-[0.94]">
          <span className="block overflow-hidden md:whitespace-nowrap">
            <span className="hks-word inline-block">
              The Night That{" "}
              <span className="text-[#c8102e]">Defined</span>
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hks-word inline-block text-zinc-950">
              Excellence
            </span>
          </span>
        </h1>

        <div className="hks-slash mx-auto mt-4 h-[2px] w-20 bg-[#c8102e] md:mt-4 md:w-20 xl:mt-5 xl:w-24" />
      </div>

      {/* Video — normal box on mobile; absolute kinetic gate on desktop */}
      <div className="hks-strip relative z-30 mx-auto mb-12 aspect-video w-[92%] max-w-xl overflow-hidden rounded-[14px] bg-zinc-950 shadow-[0_20px_50px_rgba(0,0,0,0.14)] md:absolute md:mx-0 md:mb-0 md:aspect-auto md:w-auto md:max-w-none md:rounded-none md:shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
        <div className="absolute inset-0 overflow-hidden bg-zinc-950">
          <iframe
            className="hks-media pointer-events-none absolute inset-0 h-full w-full border-0 md:inset-auto"
            src={EMBED_SRC}
            title="Brit Fintech Awards 2026 — Official Highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>

      <p className="hks-hint pointer-events-none absolute bottom-6 left-1/2 z-40 hidden -translate-x-1/2 font-['Outfit',sans-serif] text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] md:block">
        Scroll · video settles below ·{" "}
        <span className="text-[#ff4d6a]">2026 winners</span>
      </p>
    </section>
  );
};

export default HeroKineticStrip2026;
