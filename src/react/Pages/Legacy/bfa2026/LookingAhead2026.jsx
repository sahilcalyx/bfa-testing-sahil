import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ChevronLeft } from "lucide-react";
import { btnBase, Eyebrow } from "./shared";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EDITIONS = [
  { year: "2024", label: "First edition", to: "/bfa-legacy/2024" },
  { year: "2025", label: "Second edition", to: "/bfa-legacy/2025" },
  { year: "2026", label: "Third edition", current: true },
  { year: "2027", label: "Next chapter", to: "/register-interest-2027", next: true },
];

const AHEAD_TICKER = [
  "Recognising excellence",
  "Encouraging innovation",
  "Bringing the industry closer",
  "See you at BFA27",
];

function LookingAhead2026() {
  const rootRef = useRef(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "[data-ahead-stage]",
          start: "top 80%",
          end: "bottom 35%",
          scrub: 0.8,
        },
      });
      tl.fromTo(
        "[data-ahead-old]",
        { yPercent: 0, autoAlpha: 1 },
        { yPercent: -70, autoAlpha: 0, ease: "power2.in" }
      ).fromTo(
        "[data-ahead-new]",
        { yPercent: 70, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, ease: "power2.out" },
        0.35
      );

      gsap.from("[data-ahead-copy] > *", {
        autoAlpha: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: rootRef.current, start: "top 70%", once: true },
      });

      gsap.from("[data-ahead-line]", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.4,
        ease: "power3.inOut",
        scrollTrigger: { trigger: "[data-ahead-steps]", start: "top 90%", once: true },
      });

      gsap.from("[data-ahead-step]", {
        autoAlpha: 0,
        y: 16,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.3,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: "[data-ahead-steps]", start: "top 90%", once: true },
      });

      gsap.to("[data-ahead-track]", {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: rootRef, dependencies: [reduced] }
  );

  const tickerItems = [...AHEAD_TICKER, ...AHEAD_TICKER];

  return (
    <section ref={rootRef} className="relative [overflow:hidden] bg-bfa-ink text-[#fff]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url(/assets/svgs/download.svg)] bg-cover bg-center opacity-[0.35] [-webkit-mask-image:radial-gradient(ellipse_at_70%_50%,#000_20%,transparent_75%)] [mask-image:radial-gradient(ellipse_at_70%_50%,#000_20%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-1/2 h-[640px] w-[640px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.35)_0%,rgba(200,16,46,0)_65%)]"
      />

      <div className="relative mx-[auto] grid max-w-[1120px] grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center gap-[48px] px-[24px] pb-[80px] pt-[110px] max-[900px]:grid-cols-[1fr] max-[900px]:pt-[80px]">
        <div data-ahead-copy>
          <Eyebrow>
            <span className="text-[rgba(255,255,255,0.7)]">Looking ahead</span>
          </Eyebrow>
          <h2 className="mx-[0px] mb-[0px] mt-[16px] text-[clamp(34px,5.4vw,64px)] font-extrabold leading-none tracking-[-0.045em] text-[#fff]">
            The journey
            <br />
            <span className="text-bfa-red">continues.</span>
          </h2>
          <p className="mx-[0px] mb-[0px] mt-[22px] max-w-[520px] text-[16px] font-medium leading-[1.7] text-[rgba(255,255,255,0.7)]">
            Every edition brings new achievements, stronger connections and
            fresh perspectives to the fintech community. As we look back on the
            success of BFA26, we remain committed to recognising excellence,
            encouraging innovation and bringing the industry closer together.
          </p>
          <p className="mx-[0px] mb-[0px] mt-[22px] text-[18px] font-bold tracking-[-0.02em] text-[#fff]">
            See you at Brit FinTech Awards 2027.
          </p>
          <div className="mt-[30px] flex [flex-wrap:wrap] gap-[12px]">
            <NavLink
              to="/register-interest-2027"
              className={`${btnBase} border-[0px] bg-bfa-red text-[#fff] [transition:background_0.3s_ease,color_0.3s_ease] hover:bg-white hover:text-bfa-ink`}
            >
              Register your interest for BFA27
              <ArrowUpRight size={16} />
            </NavLink>
            <Link
              to="/bfa-legacy"
              className={`${btnBase} border-[1px] border-solid border-[rgba(255,255,255,0.35)] bg-[transparent] text-[#fff] hover:text-white`}
            >
              <ChevronLeft size={16} />
              Back to Legacy
            </Link>
          </div>
        </div>

        <div
          data-ahead-stage
          aria-hidden
          className="relative text-right max-[900px]:text-left"
        >
          <span className="block text-[13px] font-extrabold tracking-[0.3em] text-[rgba(255,255,255,0.6)]">
            BRIT FINTECH AWARDS
          </span>
          <div className="relative h-[clamp(150px,19vw,260px)] [overflow:hidden]">
            {[
              { key: "old", text: "26", stroke: true },
              { key: "new", text: "27", stroke: false },
            ].map((n) => (
              <span
                key={n.key}
                {...{ [`data-ahead-${n.key}`]: true }}
                className={`absolute bottom-[0px] right-0 text-[clamp(170px,22vw,300px)] font-black leading-[0.85] tracking-[-0.06em] max-[900px]:left-0 max-[900px]:right-auto ${
                  n.stroke
                    ? "text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.55)]"
                    : "text-bfa-red [-webkit-text-stroke:0]"
                } ${n.stroke === Boolean(reduced) ? "opacity-0" : "opacity-100"}`}
              >
                {n.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-[auto] max-w-[1120px] px-[24px] pb-[72px] pt-[0px]">
        <div data-ahead-steps className="relative">
          <span
            data-ahead-line
            className="absolute left-0 right-0 top-[7px] h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.25),rgba(255,255,255,0.25)_70%,#C8102E)]"
          />
          <div className="relative grid grid-cols-4 gap-[16px] max-[600px]:grid-cols-2 max-[600px]:gap-y-[28px]">
            {EDITIONS.map((ed) => {
              const body = (
                <>
                  <span
                    className={`block h-[15px] w-[15px] rounded-full border-[2px] border-solid ${
                      ed.next
                        ? "border-bfa-red bg-bfa-red shadow-[0_0_0_6px_rgba(200,16,46,0.25)]"
                        : ed.current
                          ? "border-[#fff] bg-[#fff] shadow-[none]"
                          : "border-[rgba(255,255,255,0.45)] bg-bfa-ink shadow-[none]"
                    }`}
                  />
                  <span
                    className={`mt-[16px] block text-[24px] font-extrabold tracking-[-0.03em] ${
                      ed.next ? "text-bfa-red" : "text-[#fff]"
                    }`}
                  >
                    {ed.year}
                  </span>
                  <span
                    className={`mt-[4px] flex items-center gap-[6px] text-[11px] font-bold uppercase tracking-[0.16em] ${
                      ed.current ? "text-[#fff]" : "text-[rgba(255,255,255,0.55)]"
                    }`}
                  >
                    {ed.label}
                    {ed.to && <ArrowUpRight size={12} />}
                  </span>
                </>
              );
              return ed.to ? (
                <NavLink
                  key={ed.year}
                  to={ed.to}
                  data-ahead-step
                  className="block no-underline [transition:transform_0.3s_ease] hover:translate-y-[-3px]"
                >
                  {body}
                </NavLink>
              ) : (
                <div key={ed.year} data-ahead-step>
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative [overflow:hidden] bg-bfa-red py-[16px]">
        <div data-ahead-track className="flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex" aria-hidden={copy === 1}>
              {tickerItems.map((item, i) => (
                <span
                  key={`${copy}-${i}`}
                  className="inline-flex items-center gap-[28px] whitespace-nowrap pr-[28px] text-[15px] font-extrabold uppercase tracking-[0.12em] text-[#fff]"
                >
                  {item}
                  <span className="text-[18px] opacity-70">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LookingAhead2026;
