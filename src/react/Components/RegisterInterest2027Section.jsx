"use client";

import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CHEVRONS = [
  { id: 1, start: "-8%", width: "36%", opacity: 0.18, duration: 9, delay: 0 },
  { id: 2, start: "8%", width: "40%", opacity: 0.28, duration: 7.5, delay: 0.8 },
  { id: 3, start: "22%", width: "44%", opacity: 0.22, duration: 10, delay: 1.6 },
  { id: 4, start: "38%", width: "42%", opacity: 0.35, duration: 8.2, delay: 0.4 },
  { id: 5, start: "52%", width: "48%", opacity: 0.2, duration: 11, delay: 2.1 },
  { id: 6, start: "66%", width: "46%", opacity: 0.3, duration: 8.8, delay: 1.2 },
];

const ChevronShape = ({ className }) => (
  <svg
    viewBox="0 0 400 520"
    className={className}
    fill="currentColor"
    preserveAspectRatio="xMidYMid slice"
  >
    <path d="M40 20 L210 20 L360 260 L210 500 L40 500 L190 260 Z" />
  </svg>
);

const RegisterInterest2027Section = () => {
  const rootRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root || reduceMotion) return undefined;

      const chevrons = root.querySelectorAll("[data-ri27-chevron]");
      gsap.set(chevrons, { opacity: 0 });

      gsap.to(chevrons, {
        opacity: (i) => CHEVRONS[i]?.opacity ?? 0.22,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: root, start: "top 78%", once: true },
      });

      chevrons.forEach((el, i) => {
        const conf = CHEVRONS[i];
        if (!conf) return;

        gsap.fromTo(
          el,
          { x: "-12vw" },
          {
            x: "28vw",
            duration: conf.duration,
            delay: conf.delay,
            ease: "none",
            repeat: -1,
          }
        );

        gsap.to(el, {
          opacity: conf.opacity * 1.4,
          duration: conf.duration * 0.5,
          delay: conf.delay,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      return undefined;
    },
    { scope: rootRef, dependencies: [reduceMotion] }
  );

  return (
    <section
      ref={rootRef}
      className="relative isolate w-full overflow-hidden border-y-[6px] border-black bg-gradient-to-r from-black via-[#3a050c] to-[#c8102e]"
      aria-labelledby="ri27-headline"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#c8102e]/80 to-transparent"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {CHEVRONS.map((chevron) => (
          <div
            key={chevron.id}
            data-ri27-chevron
            className="absolute top-1/2 h-[150%] -translate-y-1/2 text-black"
            style={{
              left: chevron.start,
              width: chevron.width,
            }}
          >
            <ChevronShape className="h-full w-full" />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-start gap-6 px-5 py-10 sm:flex-row sm:items-center sm:gap-8 sm:px-8 sm:py-12 md:gap-10 md:px-10 md:py-14 lg:gap-12">
        <div className="shrink-0 font-sans text-[clamp(4.5rem,14vw,9.5rem)] font-black leading-none tracking-[-0.07em] text-white">
          2027
        </div>

        <div className="min-w-0 flex-1">
          <h2
            id="ri27-headline"
            className="m-0 font-sans text-[clamp(2rem,6.5vw,4.8rem)] font-normal leading-[0.9] tracking-[-0.03em] text-white"
          >
            <span className="block">The next</span>
            <span className="block">chapter</span>
          </h2>
        </div>

        <div className="relative z-20 flex shrink-0 items-center self-start sm:self-center">
          <NavLink
            to="/register-interest-2027"
            className="ri27-cta inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 font-sans text-[14px] font-bold no-underline shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 sm:px-7 sm:py-4 sm:text-[15px]"
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#000000";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#000000";
            }}
          >
            Register Interest 2027
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default RegisterInterest2027Section;
