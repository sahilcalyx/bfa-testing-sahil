import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowUpRight, Award, Building2, CalendarDays, Camera, Gift, Handshake,
  MessagesSquare, Mic, Network, Play, Target, Trophy, Users, Utensils, WandSparkles,
} from "lucide-react";
import {
  T, HIGHLIGHTS_VIDEO, VOICES_VIDEO, btnOnDark, Eyebrow, VideoFrame,
} from "./shared";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HIGHLIGHT_STATS = [
  { icon: CalendarDays, value: "3rd", label: "Edition of the Brit FinTech Awards" },
  { icon: Users, value: "150+", label: "Attendees on the night" },
  { icon: Building2, value: "70+", label: "Unique businesses represented" },
  { icon: Mic, value: "10", label: "Speakers sharing industry insights" },
];

const HIGHLIGHT_POINTS = [
  { icon: Camera, label: "Red carpet arrivals" },
  { icon: Mic, label: "Industry keynote addresses" },
  { icon: MessagesSquare, label: "Expert-led discussion panel" },
  { icon: Target, label: "Dedicated focus session" },
  { icon: Trophy, label: "Recognition across multiple MSB and FinTech categories" },
  { icon: Handshake, label: "Sponsor showcases and brand partnerships" },
  { icon: WandSparkles, label: "Magical host" },
  { icon: Network, label: "Meaningful networking and industry connections" },
  { icon: Gift, label: "Exclusive thank-you gifts for guests" },
  { icon: Utensils, label: "Elegant buffet dining experience" },
  { icon: Award, label: "Celebrating excellence across the financial services ecosystem" },
];

const HIGHLIGHT_TABS = [
  {
    id: "highlights",
    label: "Official highlights",
    video: HIGHLIGHTS_VIDEO,
    title: "Brit Fintech Awards 2026 - Event Highlights",
    copy: "Relive the red carpet, the programme and the ceremony in the official BFA26 highlights film.",
    cta: "Open video gallery 2026",
  },
  {
    id: "voices",
    label: "Voices of BFA26",
    video: VOICES_VIDEO,
    title: "Voices of BFA26",
    copy: "The best way to understand the BFA26 experience is through the people who were part of it. Hear from attendees, industry leaders and partners as they share their experiences, reflections and memorable moments from the evening.",
    cta: "Watch Voices of BFA26",
  },
];

const pointHover =
  "[transition:transform_0.35s_cubic-bezier(0.22,1,0.36,1),border-color_0.3s_ease,box-shadow_0.35s_ease] hover:-translate-y-[3px] hover:border-bfa-red hover:shadow-[0_16px_32px_-24px_rgba(200,16,46,0.6)]";

function Highlights2026() {
  const rootRef = useRef(null);
  const reduced = useReducedMotion();
  const [activeTab, setActiveTab] = useState(HIGHLIGHT_TABS[0].id);
  const tab = HIGHLIGHT_TABS.find((t) => t.id === activeTab);

  useGSAP(
    () => {
      if (reduced) return;

      gsap.from("[data-hl-head] > *", {
        autoAlpha: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%", once: true },
      });

      gsap.from("[data-hl-stat]", {
        autoAlpha: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: "[data-hl-stats]", start: "top 85%", once: true },
      });

      gsap.utils.toArray("[data-hl-value]").forEach((el) => {
        const target = parseInt(el.dataset.hlValue, 10);
        const counter = { v: 0 };
        gsap.to(counter, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(counter.v));
          },
        });
      });

      gsap.from("[data-hl-point]", {
        autoAlpha: 0,
        y: 24,
        scale: 0.96,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.06,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: "[data-hl-points]", start: "top 85%", once: true },
      });

      gsap.from("[data-hl-icon]", {
        rotate: -90,
        scale: 0,
        duration: 0.7,
        ease: "back.out(2)",
        stagger: 0.06,
        delay: 0.2,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: "[data-hl-points]", start: "top 85%", once: true },
      });

      gsap.fromTo(
        "[data-hl-video]",
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: "[data-hl-video]", start: "top 85%", once: true },
        }
      );
    },
    { scope: rootRef, dependencies: [reduced] }
  );

  return (
    <section
      ref={rootRef}
      className="border-t border-solid border-t-bfa-line bg-bfa-paper px-[24px] py-[96px]"
    >
      <div className="mx-[auto] max-w-[1120px]">
        <div
          data-hl-head
          className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-end gap-[48px] max-[900px]:grid-cols-1 max-[900px]:gap-[20px]"
        >
          <div>
            <Eyebrow>Event highlights</Eyebrow>
            <h2 className="mx-[0px] mb-[0px] mt-[14px] text-[clamp(30px,4.6vw,52px)] font-extrabold leading-[1.04] tracking-[-0.04em]">
              A night that put{" "}
              <span className="text-bfa-red">FinTech &amp; MSBs</span> in focus
            </h2>
          </div>
          <p className="m-[0px] text-[15.5px] font-medium leading-[1.65] text-bfa-mute">
            An evening of recognition, meaningful conversations and connections
            at Landing FortyTwo, London.
          </p>
        </div>

        <div
          data-hl-stats
          className="mt-[44px] grid grid-cols-4 [overflow:hidden] rounded-[16px] bg-bfa-ink max-[900px]:grid-cols-2"
        >
          {HIGHLIGHT_STATS.map(({ icon: Icon, value, label }, i) => {
            const num = parseInt(value, 10);
            const suffix = value.replace(String(num), "");
            return (
              <div
                key={label}
                data-hl-stat
                className={`px-[24px] py-[28px] text-[#fff] max-[900px]:[&:nth-child(3)]:border-l-0 max-[900px]:[&:nth-child(n+3)]:border-t max-[900px]:[&:nth-child(n+3)]:border-solid max-[900px]:[&:nth-child(n+3)]:border-t-[rgba(255,255,255,0.12)]${
                  i === 0
                    ? ""
                    : " border-l border-solid border-l-[rgba(255,255,255,0.12)]"
                }`}
              >
                <Icon size={22} strokeWidth={2} color={T.red} />
                <span className="mt-[16px] block text-[clamp(34px,4vw,48px)] font-extrabold leading-none tracking-[-0.04em]">
                  <span data-hl-value={num}>{num}</span>
                  {/^[a-z]+$/i.test(suffix) ? (
                    <sup className="relative top-[0.15em] ml-[2px] [vertical-align:top] text-[0.42em] font-bold tracking-[0]">
                      {suffix}
                    </sup>
                  ) : (
                    suffix
                  )}
                </span>
                <span className="mt-[8px] block text-[13px] font-semibold leading-[1.45] text-[rgba(255,255,255,0.7)]">
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <div
          data-hl-points
          className="mt-[18px] grid grid-cols-4 gap-[14px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1"
        >
          {HIGHLIGHT_POINTS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              data-hl-point
              className={`group flex items-center gap-[14px] rounded-[14px] border-[1px] border-solid border-bfa-line bg-[#fff] px-[18px] py-[16px] text-[13.5px] font-bold leading-[1.4] text-bfa-ink ${pointHover}`}
            >
              <span
                data-hl-icon
                className="inline-flex shrink-0 text-bfa-red [transition:transform_0.35s_cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.15]"
              >
                <Icon size={24} strokeWidth={2} />
              </span>
              {label}
            </div>
          ))}
          <NavLink
            to="/photo-gallery-2026"
            data-hl-point
            className={`flex items-center justify-between gap-[14px] rounded-[14px] bg-bfa-red px-[18px] py-[16px] text-[13.5px] font-extrabold text-[#fff] no-underline hover:bg-bfa-ink hover:text-white ${pointHover}`}
          >
            See the night in photos
            <ArrowUpRight size={18} />
          </NavLink>
        </div>

        <div
          data-hl-video
          className="mt-[56px] grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-center gap-[36px] rounded-[20px] bg-bfa-ink p-[28px] text-[#fff] max-[900px]:grid-cols-1 max-[900px]:gap-[20px] max-[900px]:p-[18px]"
        >
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-bfa-red">
              Watch the evening
            </span>
            <div role="tablist" className="mt-[16px] grid gap-[10px]">
              {HIGHLIGHT_TABS.map((t, i) => {
                const active = t.id === activeTab;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(t.id)}
                    className={`flex w-full cursor-pointer items-center gap-[14px] rounded-[12px] border-[1px] border-solid px-[16px] py-[14px] [text-align:left] text-[15px] font-extrabold text-[#fff] [font-family:inherit] [transition:background_0.3s_ease,border-color_0.3s_ease] ${
                      active
                        ? "border-bfa-red bg-bfa-red"
                        : "border-[rgba(255,255,255,0.14)] bg-[transparent]"
                    }`}
                  >
                    <span className="text-[12px] font-bold opacity-70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {t.label}
                    <Play size={14} fill="currentColor" className="ml-auto" />
                  </button>
                );
              })}
            </div>
            <p className="mx-[0px] mb-[0px] mt-[18px] text-[14.5px] font-medium leading-[1.6] text-[rgba(255,255,255,0.72)]">
              {tab.copy}
            </p>
            <div className="mt-[20px] flex [flex-wrap:wrap] gap-[12px]">
              <NavLink to="/video-gallery-2026" className={btnOnDark}>
                <Play size={15} fill="currentColor" />
                {tab.cta}
              </NavLink>
            </div>
          </div>
          <VideoFrame id={tab.video} title={tab.title} />
        </div>
      </div>
    </section>
  );
}

export default Highlights2026;
