import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Play } from "lucide-react";
import { discussionPanel2026 } from "../../2026/DisscussionPanal2026/panelists2026";
import { PANEL_VIDEO, PANEL_NOTES, VideoFrame } from "./shared";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CLIP_TOP = {
  from: "inset(0% 0% 100% 0%)",
  to: "inset(0% 0% 0% 0%)",
};
const CLIP_BOTTOM = {
  from: "inset(100% 0% 0% 0%)",
  to: "inset(0% 0% 0% 0%)",
};

const PANEL_LOGO_HEIGHT = {
  "gayatri-chadaram": 32,
  "jay-anand": 28,
};

function PanelCard({ person, index }) {
  const clip = index % 2 === 0 ? CLIP_TOP : CLIP_BOTTOM;
  const label = person.role === "moderator" ? "Moderator" : "Panelist";

  return (
    <NavLink
      to={person.slug}
      title={PANEL_NOTES[person.id]}
      data-panel-card
      data-panel-top={index % 2 === 0 ? "1" : "0"}
      className="group block no-underline"
    >
      <div
        data-panel-media
        data-clip-from={clip.from}
        data-clip-to={clip.to}
        className="relative aspect-[500/693] [overflow:hidden] rounded-[4px] bg-bfa-ink [clip-path:inset(0%_0%_0%_0%)]"
      >
        <span className="absolute inset-0 block transition-transform [transition-duration:900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]">
          <img
            src={person.img}
            alt={person.name}
            loading="lazy"
            className="block h-full w-full object-cover"
          />
        </span>
        <span
          data-panel-num
          className="absolute bottom-[0px] left-0 bg-bfa-red px-[12px] pb-[6px] pt-[8px] font-montserrat text-[26px] font-light leading-none tracking-[-0.02em] text-[#fff]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <span
        data-panel-rule
        className="mt-[16px] block h-[2px] origin-left bg-bfa-red"
      />
      <span data-panel-text className="block pt-[14px]">
        <span className="block text-[15px] font-extrabold uppercase leading-[1.2] tracking-[0.02em] text-bfa-ink transition-[color] duration-300 [transition-timing-function:ease] group-hover:text-bfa-red">
          {person.name}
        </span>
        <span className="mt-[6px] block text-[12.5px] font-semibold leading-[1.4] text-bfa-mute">
          {person.designation}
        </span>
        {(person.logoLight || person.logo) ? (
          <span className="mt-[10px] inline-flex h-[42px] items-center rounded-[6px] border-[1px] border-solid border-bfa-line bg-[#fff] px-[12px]">
            <img
              src={person.logoLight || person.logo}
              alt={person.company}
              loading="lazy"
              className="block w-[auto] max-w-[112px] object-contain"
              style={{ height: PANEL_LOGO_HEIGHT[person.id] || 20 }}
            />
          </span>
        ) : (
          <span className="mt-[4px] block text-[12.5px] font-semibold text-bfa-mute">
            {person.company}
          </span>
        )}
        <span className="mt-[8px] block text-[10px] font-extrabold uppercase tracking-[0.18em] text-bfa-red">
          {label}
        </span>
      </span>
    </NavLink>
  );
}

function DiscussionPanel2026({ people }) {
  const rootRef = useRef(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      const cards = gsap.utils.toArray("[data-panel-card]");

      cards.forEach((card, i) => {
        const media = card.querySelector("[data-panel-media]");
        const img = media.querySelector("img");
        gsap
          .timeline({
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
            delay: (i % 5) * 0.12,
          })
          .fromTo(
            media,
            { clipPath: media.dataset.clipFrom },
            {
              clipPath: media.dataset.clipTo,
              duration: 1.3,
              ease: "expo.inOut",
            }
          )
          .fromTo(
            img,
            { scale: 1.3 },
            { scale: 1, duration: 1.6, ease: "expo.out" },
            0.2
          )
          .from(
            card.querySelector("[data-panel-rule]"),
            { scaleX: 0, duration: 1, ease: "power3.inOut" },
            0.5
          )
          .from(
            card.querySelector("[data-panel-num]"),
            { autoAlpha: 0, y: 24, duration: 0.8, ease: "power3.out" },
            0.7
          )
          .from(
            card.querySelector("[data-panel-text]"),
            { autoAlpha: 0, y: 12, duration: 0.7, ease: "power2.out" },
            0.85
          );
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1001px)", () => {
        cards
          .filter((card) => card.dataset.panelTop === "0")
          .forEach((card) => {
            gsap.fromTo(
              card,
              { y: 56 },
              {
                y: 16,
                ease: "none",
                scrollTrigger: {
                  trigger: rootRef.current,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.8,
                },
              }
            );
          });
      });
    },
    { scope: rootRef, dependencies: [reduced] }
  );

  return (
    <div
      ref={rootRef}
      className="grid grid-cols-5 gap-[24px] pb-[64px] max-[1000px]:grid-cols-3 max-[1000px]:gap-y-[40px] max-[1000px]:pb-0 max-[600px]:grid-cols-2 max-[600px]:gap-[16px] max-[600px]:gap-y-[32px]"
    >
      {people.map((person, i) => (
        <PanelCard key={person.id} person={person} index={i} />
      ))}
    </div>
  );
}

function DiscussionSection2026() {
  const moderator = discussionPanel2026.find((p) => p.role === "moderator");
  const panelists = discussionPanel2026.filter((p) => p.role !== "moderator");

  return (
    <section className="relative [overflow:hidden] bg-bfa-soft px-[24px] pb-[88px] pt-[96px] text-bfa-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/assets/svgs/download.svg')] bg-cover bg-center bg-no-repeat opacity-60 [-webkit-mask-image:radial-gradient(ellipse_75%_70%_at_50%_50%,rgba(0,0,0,0.35)_0%,#000_100%)] [mask-image:radial-gradient(ellipse_75%_70%_at_50%_50%,rgba(0,0,0,0.35)_0%,#000_100%)]"
      />
      <div className="relative mx-[auto] max-w-[1120px]">
        <div
          data-reveal
          className="mb-[64px] grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-end gap-[48px] max-[900px]:grid-cols-1 max-[900px]:gap-[24px]"
        >
          <div>
            <p className="m-[0px] flex items-center gap-[12px] text-[12px] font-extrabold uppercase tracking-[0.2em] text-bfa-red">
              <span className="h-px w-[28px] bg-bfa-red" />
              Discussion panel
            </p>
            <h2 className="mx-[0px] mb-[0px] mt-[16px] font-montserrat text-[clamp(30px,4.6vw,54px)] font-extrabold leading-none tracking-[-0.05em] text-bfa-ink">
              Can Fintechs and MSBs Afford to{" "}
              <span className="whitespace-nowrap text-bfa-red">
                Ignore AI?
              </span>
            </h2>
          </div>
          <div>
            <p className="m-[0px] text-[15px] font-medium leading-[1.7] text-bfa-mute">
              Moderated by Alona Shevtsova, industry leaders discussed AI
              adoption, evolving customer expectations, fraud prevention,
              compliance and the importance of human oversight in an
              AI-driven financial ecosystem.
            </p>
            <NavLink
              to="/discussion-panel-2026"
              className="mt-[18px] inline-flex items-center gap-[8px] border-b border-solid border-b-bfa-ink pb-[4px] text-[14px] font-extrabold text-bfa-ink no-underline hover:text-bfa-ink"
            >
              Discussion panel page
              <ArrowUpRight size={16} />
            </NavLink>
          </div>
        </div>

        <DiscussionPanel2026
          people={[moderator, ...panelists].filter(Boolean)}
        />

        <div
          data-reveal
          className="mt-[24px] grid grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] items-center gap-[48px] border-t border-solid border-t-bfa-line pt-[48px] max-[900px]:grid-cols-1 max-[900px]:gap-[24px]"
        >
          <div>
            <span className="grid h-[52px] w-[52px] place-items-center rounded-full bg-bfa-red text-[#fff]">
              <Play size={18} fill="currentColor" />
            </span>
            <h3 className="mx-[0px] mb-[0px] mt-[18px] font-montserrat text-[clamp(22px,2.4vw,28px)] font-extrabold leading-[1.1] tracking-[-0.035em] text-bfa-ink">
              Watch the full discussion
            </h3>
            <p className="mx-[0px] mb-[0px] mt-[12px] text-[14px] font-medium leading-[1.65] text-bfa-mute">
              Five voices from payments, compliance and remittance on where
              AI helps — and where human judgement still leads.
            </p>
          </div>
          <VideoFrame
            id={PANEL_VIDEO}
            title="Can FinTech & MSBs Afford to Ignore AI? | BFA26 Discussion Panel"
          />
        </div>
      </div>
    </section>
  );
}

export default DiscussionSection2026;
