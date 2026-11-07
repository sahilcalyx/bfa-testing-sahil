import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Play } from "lucide-react";
import { FOCUS_SESSION_PAGE_URL, focusSession2026 } from "../../2026/FocusSession2026/speakers2026";
import { FOCUS_VIDEO, FOCUS_NOTES, btnBase, VideoFrame, LinkedInLink } from "./shared";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FOCUS_VIEWS = {
  "stefan-binder": "The partner's view",
  "osman-ibrahim": "The operator's view",
};

const FOCUS_PHOTOS = {
  "osman-ibrahim": {
    src: "/assets/img/focus-session-2026/kmbal-profile-new.png",
    position: "object-[44%_center]",
  },
};

const FOCUS_MODERATOR = {
  id: "vishal-patil",
  name: "Vishal Patil",
  designation: "Founder & CEO",
  company: "Calyx Solutions UK Ltd",
  img: "/assets/img/bfa-legacy/vishal-patil-main.png",
  linkedin: "https://www.linkedin.com/in/vishal-patil-78181914",
  slug: FOCUS_SESSION_PAGE_URL,
};

const FOCUS_LOGOS = {
  "stefan-binder": { src: "/assets/img/attendee-logos/fena.png", height: 22 },
  "osman-ibrahim": { src: "/assets/img/attendee-logos/kmbal.png", height: 16 },
  "vishal-patil": {
    src: "/assets/img/sponsor-logo/calyx-2025.png",
    height: 30,
    crop: { x: 125, y: 95, w: 520, h: 190, iw: 767 },
  },
};

function CompanyLogo({ id, alt }) {
  const logo = FOCUS_LOGOS[id];
  if (!logo) return null;
  const { crop } = logo;
  const boxW = crop ? (logo.height * crop.w) / crop.h : undefined;
  return (
    <span className="mt-[12px] inline-flex items-center rounded-[6px] bg-[#fff] px-[12px] py-[8px]">
      {crop ? (
        <span
          className="relative block [overflow:hidden]"
          style={{ width: boxW, height: logo.height }}
        >
          <img
            src={logo.src}
            alt={alt}
            className="absolute h-[auto] max-w-none"
            style={{
              left: (-crop.x * boxW) / crop.w,
              top: (-crop.y * boxW) / crop.w,
              width: (crop.iw * boxW) / crop.w,
            }}
          />
        </span>
      ) : (
        <img
          src={logo.src}
          alt={alt}
          className="block w-[auto]"
          style={{ height: logo.height }}
        />
      )}
    </span>
  );
}

function FocusProfile({ person, tag, moderator = false }) {
  return (
    <NavLink
      to={person.bioSlug || person.slug || FOCUS_SESSION_PAGE_URL}
      data-hr-card
      className={`group block text-[#fff] no-underline hover:text-white max-[600px]:grid max-[600px]:grid-cols-[124px_minmax(0,1fr)] max-[600px]:items-start max-[600px]:gap-[18px]${
        moderator ? " max-[600px]:order-[-1]" : ""
      }`}
    >
      <div
        data-hr-media
        className={`relative aspect-[500/693] [overflow:hidden] rounded-[6px] bg-[#141416] ${
          moderator
            ? "outline outline-2 outline-offset-[5px] outline-bfa-red"
            : "outline-offset-0 [outline:none]"
        }`}
      >
        <span className="absolute inset-0 block transition-transform [transition-duration:900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]">
          <img
            src={FOCUS_PHOTOS[person.id]?.src || person.img}
            alt={person.name}
            loading="lazy"
            className={`block h-full w-full object-cover ${
              FOCUS_PHOTOS[person.id]?.position || "object-[center_25%]"
            }`}
          />
        </span>
        <span
          className={`absolute bottom-[0px] left-0 px-[12px] py-[7px] text-[10px] font-extrabold uppercase tracking-[0.18em] max-[600px]:hidden ${
            moderator ? "bg-[#fff] text-bfa-red" : "bg-bfa-red text-[#fff]"
          }`}
        >
          {tag}
        </span>
      </div>
      <span data-hr-text className="block pt-[18px] max-[600px]:pt-[2px]">
        <span
          className={`mb-[10px] [display:none] px-[9px] py-[5px] text-[9.5px] font-extrabold uppercase tracking-[0.16em] max-[600px]:inline-block ${
            moderator ? "bg-[#fff] text-bfa-red" : "bg-bfa-red text-[#fff]"
          }`}
        >
          {tag}
        </span>
        <span className="flex items-start gap-[10px]">
          <span className="block font-montserrat text-[20px] font-extrabold tracking-[-0.03em] text-[#fff] [transition:color_0.3s_ease] group-hover:text-bfa-red">
            {person.name}
          </span>
          <LinkedInLink href={person.linkedin} name={person.name} nested className="mt-[2px]" />
        </span>
        <span className="mt-[4px] block text-[13px] font-semibold leading-[1.4] text-[rgba(255,255,255,0.62)]">
          {person.designation}
        </span>
        <CompanyLogo id={person.id} alt={person.company} />
        {FOCUS_NOTES[person.id] ? (
          <span className="mt-[14px] block border-l-2 border-solid border-l-bfa-red pl-[10px] text-[12.5px] font-medium leading-[1.55] text-[rgba(255,255,255,0.72)]">
            {FOCUS_NOTES[person.id]}
          </span>
        ) : null}
      </span>
    </NavLink>
  );
}

function FocusSession2026() {
  const rootRef = useRef(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      const root = rootRef.current;

      [
        ["[data-hr-line='1']", -60, 40],
        ["[data-hr-line='2']", 60, -40],
      ].forEach(([sel, from, to]) => {
        gsap.fromTo(
          sel,
          { x: from },
          {
            x: to,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      });

      const row = root.querySelector("[data-hr-row]");
      const tl = gsap.timeline({
        scrollTrigger: { trigger: row, start: "top 80%", once: true },
      });
      gsap.utils.toArray("[data-hr-card]", root).forEach((card, i) => {
        const at = [0.15, 0, 0.15][i];
        tl.fromTo(
          card.querySelector("[data-hr-media]"),
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.1,
            ease: "expo.inOut",
            clearProps: "clipPath",
          },
          at
        )
          .fromTo(
            card.querySelector("img"),
            { scale: 1.3 },
            { scale: 1, duration: 1.5, ease: "expo.out" },
            at + 0.15
          )
          .from(
            card.querySelector("[data-hr-text]"),
            { autoAlpha: 0, y: 18, duration: 0.8, ease: "power3.out" },
            at + 0.55
          );
      });
    },
    { scope: rootRef, dependencies: [reduced] }
  );

  const [left, right] = focusSession2026;

  return (
    <section
      ref={rootRef}
      className="relative [overflow:hidden] bg-bfa-ink px-[24px] py-[88px] text-[#fff]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/assets/svgs/download.svg')] bg-cover bg-center bg-no-repeat opacity-[0.55] [-webkit-mask-image:radial-gradient(ellipse_75%_70%_at_50%_50%,rgba(0,0,0,0.3)_0%,#000_100%)] [mask-image:radial-gradient(ellipse_75%_70%_at_50%_50%,rgba(0,0,0,0.3)_0%,#000_100%)]"
      />
      <div className="relative mx-[auto] max-w-[1120px]">
        <div
          data-reveal
          className="flex items-center justify-between gap-[24px] border-b border-solid border-b-[rgba(255,255,255,0.12)] pb-[18px] max-[900px]:flex-col max-[900px]:items-start"
        >
          <p className="m-[0px] text-[12px] font-extrabold uppercase tracking-[0.22em] text-bfa-red">
            Focus session · BFA26
          </p>
          <p className="m-[0px] text-[13px] font-semibold text-[rgba(255,255,255,0.6)]">
            One important question, two industry perspectives
          </p>
        </div>

        <div className="mt-[30px] grid grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] items-end gap-[40px] max-[900px]:grid-cols-1 max-[900px]:gap-[20px]">
          <h2
            aria-label="What is High Risk?"
            className="m-[0px] font-montserrat text-[clamp(46px,7.4vw,104px)] font-extrabold leading-[0.9] tracking-[-0.06em] text-[#fff]"
          >
            <span
              data-hr-line="1"
              aria-hidden="true"
              className="block text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.75)]"
            >
              What is
            </span>
            <span
              data-hr-line="2"
              aria-hidden="true"
              className="block text-bfa-red"
            >
              High Risk?
            </span>
          </h2>
          <div data-reveal>
            <p className="m-[0px] text-[15px] font-medium leading-[1.75] text-[rgba(255,255,255,0.7)]">
              A dedicated focus session on{" "}
              <strong className="text-[#fff]">
                understanding and managing high-risk businesses and
                transactions
              </strong>{" "}
              — risk assessment, compliance controls, high-risk corridors and
              the challenges faced by FinTechs and MSBs.
            </p>
          </div>
        </div>

        <div
          data-hr-row
          className="relative mt-[64px] grid grid-cols-[repeat(3,minmax(0,250px))] justify-center gap-[48px] max-[900px]:grid-cols-[repeat(3,minmax(0,1fr))] max-[900px]:gap-[18px] max-[600px]:mt-[44px] max-[600px]:grid-cols-[minmax(0,1fr)] max-[600px]:gap-[36px]"
        >
          <FocusProfile person={left} tag={`01 · ${FOCUS_VIEWS[left.id]}`} />
          <FocusProfile person={FOCUS_MODERATOR} tag="Moderator" moderator />
          <FocusProfile person={right} tag={`02 · ${FOCUS_VIEWS[right.id]}`} />
        </div>

        <div
          data-reveal
          className="mt-[72px] grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-center gap-[48px] border-t border-solid border-t-[rgba(255,255,255,0.12)] pt-[48px] max-[900px]:grid-cols-1 max-[900px]:gap-[24px]"
        >
          <div>
            <span className="grid h-[52px] w-[52px] place-items-center rounded-full bg-bfa-red text-[#fff]">
              <Play size={18} fill="currentColor" />
            </span>
            <h3 className="mx-[0px] mb-[0px] mt-[18px] font-montserrat text-[clamp(22px,2.4vw,28px)] font-extrabold leading-[1.1] tracking-[-0.035em] text-[#fff]">
              Watch the full focus session
            </h3>
            <p className="mx-[0px] mb-[0px] mt-[12px] text-[14px] font-medium leading-[1.65] text-[rgba(255,255,255,0.65)]">
              What high risk really means for FinTech and MSB businesses, and
              why collaboration, technology and effective compliance controls
              matter.
            </p>
            <NavLink
              to={FOCUS_SESSION_PAGE_URL}
              className={`${btnBase} mt-[24px] border-[1px] border-solid border-[rgba(255,255,255,0.4)] bg-[transparent] text-[#fff] hover:text-white`}
            >
              Focus session page
              <ArrowUpRight size={16} />
            </NavLink>
          </div>
          <VideoFrame id={FOCUS_VIDEO} title="What is High Risk? Session Highlight" />
        </div>
      </div>
    </section>
  );
}

export default FocusSession2026;
