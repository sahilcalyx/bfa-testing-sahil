import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Camera, Trophy } from "lucide-react";
import { WINNERS_2026_PAGE_URL } from "../../2026/Winners2026/winners2026";

function AwardWinnersParallax2026() {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });
  const y = useTransform(
    smoothProgress,
    [0, 1],
    reduced ? ["-5%", "-5%"] : ["-11%", "0%"]
  );
  const scale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    reduced ? [1, 1, 1] : [1.14, 1, 1.14]
  );

  return (
    <section
      id="winners"
      ref={sectionRef}
      className="relative w-full scroll-mt-24 overflow-hidden bg-zinc-950"
    >
      <div className="relative aspect-[4786/2100] w-full overflow-hidden">
        <motion.div
          style={{ y, scale }}
          className="absolute inset-x-0 top-0 w-full origin-[50%_45%] will-change-transform"
        >
          <img
            src="/assets/img/winner-logos-26/winner-banner-2026/groupBanner2026.webp"
            alt="Brit FinTech Awards 2026 winners"
            className="pointer-events-none block h-auto w-full select-none"
          />
        </motion.div>

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/15 via-transparent to-zinc-950/85 max-md:hidden"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 w-full bg-zinc-950 px-4 py-10 md:absolute md:inset-x-0 md:bottom-0 md:bg-transparent md:pb-12 md:pt-40 lg:pb-16 lg:pt-48">
        <div className="relative mx-auto w-full max-w-3xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[140%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950/70 blur-3xl md:block"
          />

          <div className="relative z-10 flex flex-col items-center gap-5 text-center sm:gap-6">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#c8102e]/40 bg-black/40 px-4 py-1.5 text-xs font-black uppercase tracking-[0.22em] text-[#c8102e] backdrop-blur-sm">
                <Trophy size={14} strokeWidth={2.5} className="text-[#c8102e]" />
                Celebrating Excellence
              </span>
              <h2 className="m-0 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                Award Winners 2026
              </h2>
              <p className="mt-3 m-0 text-base font-medium leading-relaxed text-zinc-200 md:text-lg">
                Meet the trailblazers, innovators, and industry leaders
                recognised on the night across payments, fintech, compliance,
                and digital banking.
              </p>
            </div>

            <div className="flex flex-col flex-wrap items-center justify-center gap-3.5 sm:flex-row">
              <NavLink
                to={WINNERS_2026_PAGE_URL}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c8102e] px-6 py-3.5 text-sm font-extrabold text-white no-underline shadow-md transition-all duration-300 hover:scale-[1.03] hover:bg-[#a80d26]"
              >
                <Trophy size={16} strokeWidth={2.5} />
                <span>View Award Winners 2026</span>
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </NavLink>
              <NavLink
                to="/photo-gallery-2026"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-extrabold text-zinc-950 no-underline shadow-md transition-all duration-300 hover:scale-[1.03] hover:bg-zinc-100"
              >
                <Camera size={16} strokeWidth={2.5} />
                <span>View Photos 2026</span>
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardWinnersParallax2026;
