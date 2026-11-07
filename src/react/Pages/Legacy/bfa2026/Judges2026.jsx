import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { judges2026List } from "../../2026/JudgesSection/JudgeSection2026";
import { btnGhost, Eyebrow, LinkedInLink } from "./shared";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function JudgeCard({ judge, index }) {
  return (
    <NavLink
      to={judge.id}
      data-judge-card
      className="group flex flex-col rounded-[14px] border-[1px] border-solid border-bfa-line bg-[#fff] p-[12px] text-bfa-ink no-underline [transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),box-shadow_0.5s_ease,border-color_0.3s_ease] hover:-translate-y-[6px] hover:border-bfa-ink hover:text-bfa-ink hover:shadow-[0_24px_48px_-28px_rgba(14,14,16,0.45)]"
    >
      <div
        data-judge-media
        className="relative aspect-[4/5] [overflow:hidden] rounded-[10px] bg-bfa-ink"
      >
        <span className="absolute inset-0 block transition-transform [transition-duration:900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
          <img
            src={judge.img}
            alt={judge.name}
            loading="lazy"
            className="block h-full w-full object-cover object-[center_top]"
          />
        </span>
      </div>

      <div
        data-judge-body
        className="flex flex-1 flex-col px-[6px] pb-[6px] pt-[18px]"
      >
        <span className="flex items-start justify-between gap-[10px]">
          <span className="block text-[20px] font-extrabold leading-[1.2] tracking-[-0.02em]">
            {judge.name}
          </span>
          <LinkedInLink href={judge.linkedin} name={judge.name} nested className="mt-[1px]" />
        </span>
        <span className="mt-[6px] block text-[13.5px] font-bold leading-[1.4] text-bfa-red">
          {judge.role}
        </span>
        <span className="mt-[2px] block text-[13px] font-semibold leading-[1.4] text-bfa-mute">
          {judge.company}
        </span>

        <ul className="mx-[0px] mb-[0px] mt-[16px] grid list-none gap-[10px] border-t border-solid border-t-bfa-line px-[0px] pb-[0px] pt-[16px]">
          {judge.highlights.slice(0, 2).map((item) => (
            <li
              key={item}
              className="grid grid-cols-[14px_1fr] gap-[8px] text-[13px] font-medium leading-[1.5] text-[#3A3A40]"
            >
              <span className="mt-[7px] h-[6px] w-[6px] rounded-[999px] bg-bfa-red" />
              {item}
            </li>
          ))}
        </ul>

        <span className="mt-[auto] flex items-center justify-between pt-[18px] text-[13px] font-extrabold tracking-[0.04em]">
          View profile
          <span className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-[999px] border-[1px] border-solid border-bfa-ink [transition:background_0.3s_ease,color_0.3s_ease,border-color_0.3s_ease,transform_0.3s_ease] group-hover:rotate-45 group-hover:border-bfa-red group-hover:bg-bfa-red group-hover:text-white">
            <ArrowUpRight size={16} />
          </span>
        </span>
      </div>
    </NavLink>
  );
}

function Judges2026() {
  const rootRef = useRef(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;

      gsap.fromTo(
        "[data-judge-mark]",
        { xPercent: 6 },
        {
          xPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        }
      );

      gsap.from("[data-judge-head] > *", {
        autoAlpha: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%", once: true },
      });

      gsap.utils.toArray("[data-judge-card]").forEach((card, i) => {
        const media = card.querySelector("[data-judge-media]");
        const img = media.querySelector("img");
        gsap
          .timeline({
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
            delay: i * 0.14,
          })
          .fromTo(
            card,
            { autoAlpha: 0, y: 60 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            }
          )
          .fromTo(
            media,
            { clipPath: "inset(100% 0% 0% 0% round 10px)" },
            {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              duration: 1.2,
              ease: "expo.inOut",
              clearProps: "clipPath",
            },
            0.1
          )
          .fromTo(
            img,
            { scale: 1.25 },
            { scale: 1, duration: 1.5, ease: "expo.out", clearProps: "transform" },
            0.3
          )
          .from(
            card.querySelector("[data-judge-body]").children,
            {
              autoAlpha: 0,
              y: 14,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.07,
            },
            0.7
          );
      });
    },
    { scope: rootRef, dependencies: [reduced] }
  );

  return (
    <section
      ref={rootRef}
      className="relative [overflow:hidden] border-t border-solid border-t-bfa-line bg-bfa-soft px-[24px] py-[96px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-[24px] [overflow:hidden]"
      >
        <span
          data-judge-mark
          className="block whitespace-nowrap text-[clamp(120px,20vw,300px)] font-black leading-[0.9] tracking-[-0.05em] text-transparent opacity-[0.22] [-webkit-text-stroke:1.5px_#C8102E]"
        >
          THE JURY · THE JURY
        </span>
      </div>

      <div className="relative mx-[auto] max-w-[1120px]">
        <div
          data-judge-head
          className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-end gap-[48px] max-[900px]:grid-cols-1 max-[900px]:gap-[20px]"
        >
          <div>
            <Eyebrow>The jury</Eyebrow>
            <h2 className="mx-[0px] mb-[0px] mt-[14px] text-[clamp(32px,5vw,58px)] font-extrabold leading-none tracking-[-0.04em]">
              Meet the judges
              <span className="mt-[10px] block text-[0.5em] font-semibold leading-[1.2] tracking-[-0.02em] text-bfa-red">
                The experts behind the decisions
              </span>
            </h2>
          </div>
          <div>
            <p className="m-[0px] text-[15.5px] font-medium leading-[1.65] text-bfa-mute">
              A respected panel of industry professionals evaluated nominations
              across all award categories, recognising organisations and
              individuals demonstrating excellence, innovation and contribution
              to the financial services industry.
            </p>
            <div className="mt-[20px] flex [flex-wrap:wrap] items-center gap-[18px]">
              <NavLink to="/judges" className={btnGhost}>
                Meet the BFA26 judges
                <ArrowUpRight size={16} />
              </NavLink>
              <span className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-bfa-ink">
                <span className="text-bfa-red">
                  {String(judges2026List.length).padStart(2, "0")}
                </span>{" "}
                Jury members
              </span>
            </div>
          </div>
        </div>

        <div
          className="mt-[48px] grid grid-cols-[repeat(var(--judge-cols),minmax(0,1fr))] gap-[22px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1"
          style={{ "--judge-cols": judges2026List.length }}
        >
          {judges2026List.map((judge, i) => (
            <JudgeCard key={judge.id} judge={judge} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Judges2026;
