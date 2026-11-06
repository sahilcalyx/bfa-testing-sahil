import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Camera, Play } from "lucide-react";
import { btnBase, btnPrimary } from "./shared";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const RED_CARPET_VIDEO = "_vWzfmR4-9c";
const RED_CARPET_IMG = (n) => `/assets/img/gallery2026/red-carpet/${n}.webp`;

const RED_CARPET_STANCHIONS = "/assets/img/bfa-legacy/red-carpet-stanchions.png";

function RedCarpet2026() {
  const rootRef = useRef(null);
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true);
    document
      .getElementById("bfa26-red-carpet-film")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useGSAP(
    () => {
      if (reduced) return;

      gsap.from("[data-rc-head] > *", {
        autoAlpha: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%", once: true },
      });

      const stage = gsap.timeline({
        scrollTrigger: { trigger: "[data-rc-stage]", start: "top 80%", once: true },
      });
      stage
        .fromTo(
          "[data-rc-carpet]",
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.3,
            ease: "expo.inOut",
            clearProps: "transform",
          }
        )
        .fromTo(
          "[data-rc-film]",
          { autoAlpha: 0, y: 40, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          },
          0.35
        )
        .fromTo(
          "[data-rc-pole='left']",
          { xPercent: -60, autoAlpha: 0 },
          {
            xPercent: 0,
            autoAlpha: 1,
            duration: 1.1,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          },
          0.6
        )
        .fromTo(
          "[data-rc-pole='right']",
          { xPercent: 60, autoAlpha: 0 },
          {
            xPercent: 0,
            autoAlpha: 1,
            duration: 1.1,
            ease: "power3.out",
            clearProps: "opacity,visibility",
          },
          0.6
        );

      gsap.from("[data-rc-thumb]", {
        autoAlpha: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: "[data-rc-foot]", start: "top 88%", once: true },
      });
    },
    { scope: rootRef, dependencies: [reduced] }
  );

  return (
    <section
      ref={rootRef}
      id="red-carpet"
      className="relative [overflow:hidden] bg-bfa-ink px-[24px] pb-[88px] pt-[96px] text-[#fff]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[18%] h-[600px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.28),rgba(200,16,46,0)_65%)]"
      />

      <div className="relative mx-[auto] max-w-[1120px]">
        <div data-rc-head className="mx-[auto] max-w-[720px] [text-align:center]">
          <p className="m-[0px] inline-flex items-center gap-[12px] text-[12px] font-extrabold uppercase tracking-[0.2em] text-bfa-red">
            <span className="h-px w-[28px] bg-bfa-red" />
            Red carpet moments
            <span className="h-px w-[28px] bg-bfa-red" />
          </p>
          <h2 className="m-[0px] mt-[16px] text-[clamp(30px,4.6vw,54px)] font-extrabold leading-none tracking-[-0.05em] text-[#fff]">
            The Evening Begins{" "}
            <span className="whitespace-nowrap text-bfa-red">in Style</span>
          </h2>
          <p className="mx-[auto] mb-[0px] mt-[18px] max-w-[600px] text-[16px] font-medium leading-[1.7] text-[rgba(255,255,255,0.75)]">
            The red carpet reflected what BFA26 stands for: bringing the
            FinTech and MSB community together, recognising its people and
            celebrating the connections that move the industry forward.
          </p>
        </div>

        <div
          data-rc-stage
          className="relative mt-[48px] pb-[150px] max-[900px]:pb-[110px]"
        >
          <div
            data-rc-carpet
            aria-hidden="true"
            className="absolute bottom-[0px] left-0 right-0 top-[30%] origin-[center_top] bg-[linear-gradient(180deg,#5E0716_0%,#9E0C24_40%,#C8102E_100%)] [clip-path:polygon(34%_0,66%_0,75%_100%,25%_100%)]"
          >
            <span className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.08)_0_2px,transparent_2px_9px)]" />
          </div>

          <div
            id="bfa26-red-carpet-film"
            data-rc-film
            className="relative z-[2] mx-[auto] aspect-video w-[min(100%,720px)] [overflow:hidden] rounded-[10px] bg-black shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.08)]"
          >
            {playing ? (
              <iframe
                title="The Red Carpet | Brit FinTech Awards 2026 Spotlight"
                src={`https://www.youtube-nocookie.com/embed/${RED_CARPET_VIDEO}?autoplay=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-[0px]"
              />
            ) : (
              <button
                type="button"
                onClick={play}
                aria-label="Watch red carpet video"
                className="group absolute inset-0 w-full cursor-pointer border-[0px] bg-black p-[0px]"
              >
                <img
                  src={RED_CARPET_IMG(1)}
                  alt="Guest on the BFA26 red carpet"
                  className="block h-full w-full object-cover transition-transform [transition-duration:900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(0deg,rgba(14,14,16,0.75),rgba(14,14,16,0)_55%)]"
                />
                <span className="absolute left-1/2 top-1/2 ml-[-39px] mt-[-39px] grid h-[78px] w-[78px] place-items-center rounded-full bg-bfa-red text-[#fff] shadow-[0_0_0_10px_rgba(200,16,46,0.25)] transition-[transform,box-shadow] [transition-duration:400ms] [transition-timing-function:ease] group-hover:scale-[1.1] group-hover:shadow-[0_0_0_16px_rgba(200,16,46,0.22)]">
                  <Play size={26} fill="currentColor" />
                </span>
                <span className="absolute bottom-[18px] left-[22px] text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#fff]">
                  Watch red carpet video
                </span>
              </button>
            )}
          </div>

          {["left", "right"].map((side) => (
            <div
              key={side}
              data-rc-pole={side}
              aria-hidden="true"
              className={`pointer-events-none absolute bottom-[0px] z-[3] w-[min(34%,380px)] max-[600px]:w-[46%] ${
                side === "right" ? "right-0" : "left-0"
              }`}
            >
              <img
                src={RED_CARPET_STANCHIONS}
                alt=""
                className={`block h-[auto] w-full drop-shadow-[0_18px_18px_rgba(0,0,0,0.55)] ${
                  side === "right" ? "-scale-x-100" : ""
                }`}
              />
            </div>
          ))}
        </div>

        <div
          data-rc-foot
          className="relative z-[4] mt-[48px] grid grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1fr)] items-center gap-[24px] max-[900px]:grid-cols-[1fr_1fr] max-[900px]:gap-[16px]"
        >
          {[20, 45].map((n, i) => (
            <div
              key={n}
              data-rc-thumb
              className={`group relative aspect-[4/3] [overflow:hidden] rounded-[8px] border-[1px] border-solid border-[rgba(255,255,255,0.1)] bg-black ${
                i === 0 ? "order-none" : "order-[2]"
              }`}
            >
              <img
                src={RED_CARPET_IMG(n)}
                alt="Guests on the BFA26 red carpet"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform [transition-duration:900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
            </div>
          ))}
          <div className="order-[1] [text-align:center] max-[900px]:order-[-1] max-[900px]:col-[1/-1] max-[900px]:mb-[12px]">
            <p className="m-[0px] text-[15px] font-medium leading-[1.7] text-[rgba(255,255,255,0.7)]">
              The evening began with glamour, excitement and unforgettable
              moments. Guests stepped onto the red carpet, captured special
              moments, shared their perspectives and showcased their brands.{" "}
              <strong className="text-[#fff]">
                Every guest had a story to tell and a moment to shine.
              </strong>
            </p>
            <div className="mt-[22px] flex [flex-wrap:wrap] justify-center gap-[12px]">
              <button type="button" onClick={play} className={btnPrimary}>
                <Play size={15} fill="currentColor" />
                Watch red carpet video
              </button>
              <NavLink
                to="/photo-gallery-2026"
                className={`${btnBase} border-[1px] border-solid border-[rgba(255,255,255,0.4)] bg-[transparent] text-[#fff] hover:text-white`}
              >
                <Camera size={15} />
                Red carpet photos
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RedCarpet2026;
