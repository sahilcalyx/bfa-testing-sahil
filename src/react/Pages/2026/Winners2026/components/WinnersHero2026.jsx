import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const TITLE_WORDS = ["Winners", "of", "Brit", "FinTech", "Awards", "2026"];

const WinnersHero2026 = ({ reduceMotion }) => {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      if (reduceMotion) return;

      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .from(".wh-word", { yPercent: 115, duration: 1, stagger: 0.06 })
        .from(".wh-rule", { scaleX: 0, duration: 1.1 }, "-=0.6");

      gsap.to(".wh-orb", {
        xPercent: 12,
        duration: 8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: rootRef, dependencies: [reduceMotion] }
  );

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-[#0d0507] text-white mt-[80px] py-5 md:py-6 px-5 md:px-8"
    >
      <div className="wh-orb pointer-events-none absolute -top-24 right-[5%] w-[420px] h-[260px] rounded-full bg-[#c8102e] opacity-30 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-24 left-[5%] w-[360px] h-[220px] rounded-full bg-[#680014] opacity-40 blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="m-0 font-[Oswald,sans-serif] font-bold uppercase leading-[1.1] tracking-[-0.01em] text-white text-[1.6rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[2.9rem]">
          {TITLE_WORDS.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom pb-1 mx-[0.12em]">
              <span className="wh-word inline-block">
                {word}
              </span>
            </span>
          ))}
        </h1>
        <div className="wh-rule mx-auto mt-3 h-px w-40 md:w-64 bg-gradient-to-r from-transparent via-[#c8102e] to-transparent" />
      </div>
    </section>
  );
};

export default WinnersHero2026;
