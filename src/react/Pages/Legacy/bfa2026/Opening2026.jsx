import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, CalendarDays, ChevronLeft, Clock } from "lucide-react";
import { T, btnPrimary } from "./shared";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Opening2026() {
  const openingRef = useRef(null);
  const openingPhotoRef = useRef(null);
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroShadeRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero]", {
          y: 28,
          autoAlpha: 0,
          duration: 0.85,
          stagger: 0.08,
        });

      if (openingPhotoRef.current && heroRef.current) {
        const heroScroll = {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        };
        gsap.fromTo(
          openingPhotoRef.current,
          { yPercent: 0 },
          { yPercent: 14, ease: "none", scrollTrigger: heroScroll }
        );
        gsap.fromTo(
          heroContentRef.current,
          { y: 0, autoAlpha: 1 },
          { y: -90, autoAlpha: 0.15, ease: "none", scrollTrigger: heroScroll }
        );
        gsap.fromTo(
          heroShadeRef.current,
          { opacity: 1 },
          { opacity: 0.55, ease: "none", scrollTrigger: heroScroll }
        );
      }
    },
    { scope: openingRef }
  );

  return (
    <section ref={openingRef} className="bg-bfa-paper">
      <div
        ref={heroRef}
        className="relative flex min-h-[min(60vh,540px)] items-end [overflow:hidden] bg-black text-[#fff]"
      >
        <div className="pointer-events-none absolute inset-0 [overflow:hidden]">
          <div
            ref={openingPhotoRef}
            className="absolute right-0 top-[0px] aspect-[1024/685] h-[116%] bg-[url('/assets/img/bfa-legacy/landing-42-hero.jpg')] bg-cover bg-[position:center_top] will-change-transform [-webkit-mask-image:linear-gradient(90deg,transparent_0%,#000_32%)] [mask-image:linear-gradient(90deg,transparent_0%,#000_32%)] max-[600px]:right-[-45%] max-[600px]:opacity-75"
          />
          <div
            ref={heroShadeRef}
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.6)_35%,rgba(0,0,0,0)_56%),linear-gradient(180deg,rgba(0,0,0,0)_65%,rgba(0,0,0,0.4)_100%)]"
          />
        </div>

        <div
          ref={heroContentRef}
          className="relative z-[2] mx-[auto] w-full max-w-[1120px] px-[24px] pb-[48px] pt-[40px]"
        >
          <Link
            data-hero
            to="/bfa-legacy"
            className="mb-[24px] inline-flex items-center gap-[6px] text-[13px] font-semibold tracking-[0.02em] text-[rgba(255,255,255,0.8)] no-underline hover:text-[rgba(255,255,255,0.8)]"
          >
            <ChevronLeft size={15} />
            Legacy
          </Link>

          <p
            data-hero
            className="m-[0px] text-[12px] font-bold uppercase tracking-[0.2em] text-[rgba(255,255,255,0.72)]"
          >
            Third Edition · 2026
          </p>

          <h1
            data-hero
            className="mx-[0px] mb-[0px] mt-[14px] max-w-[780px] font-montserrat text-[clamp(42px,7.5vw,76px)] font-extrabold uppercase leading-[0.96] tracking-[-0.045em] text-[#fff]"
          >
            Brit FinTech
            <br />
            Awards <span className="text-bfa-red">2026</span>
          </h1>

          <p
            data-hero
            className="mx-[0px] mb-[0px] mt-[20px] max-w-[420px] text-[18px] font-medium leading-[1.4] text-[rgba(255,255,255,0.88)]"
          >
            The People. The Progress. The Recognition.
          </p>

          <div
            data-hero
            className="mt-[28px] flex [flex-wrap:wrap] items-center gap-x-[28px] gap-y-[16px]"
          >
            <a href="#winners" className={btnPrimary}>
              View winners
              <ArrowUpRight size={16} />
            </a>
            <span className="text-[13px] font-semibold tracking-[0.03em] text-[rgba(255,255,255,0.7)]">
              9 Oct 2026 · Landing FortyTwo, London
            </span>
          </div>
        </div>
      </div>

      <div className="mx-[auto] grid max-w-[1120px] grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start gap-[clamp(32px,5vw,64px)] border-b border-solid border-b-bfa-line px-[24px] pb-[80px] pt-[72px] max-[900px]:grid-cols-1">
        <div data-reveal>
          <h2 className="m-[0px] font-montserrat text-[clamp(24px,3.2vw,32px)] font-bold leading-[1.2] tracking-[-0.03em] text-bfa-ink">
            Celebrating Excellence.
            <br />
            Advancing FinTech.
            <br />
            Shaping the Future.
          </h2>

          <div className="mt-[32px] flex max-w-[400px] items-stretch [overflow:hidden] rounded-[14px] bg-bfa-ink text-[#fff]">
            <div className="flex w-[96px] shrink-0 flex-col rounded-l-[14px] border-[2px] border-solid border-bfa-ink bg-[#fff] [text-align:center] text-bfa-ink">
              <span className="bg-bfa-red py-[6px] text-[12px] font-extrabold tracking-[0.2em] text-[#fff]">
                OCT
              </span>
              <span className="flex flex-1 flex-col justify-center pb-[10px] pt-[6px]">
                <span className="text-[40px] font-extrabold leading-none tracking-[-0.04em]">
                  09
                </span>
                <span className="mt-[4px] text-[11px] font-bold tracking-[0.2em] text-bfa-mute">
                  FRIDAY
                </span>
              </span>
            </div>

            <div className="grid flex-1 content-center gap-[14px] px-[20px] py-[18px]">
              {[
                { icon: CalendarDays, label: "Date", value: "Friday, 9 October 2026" },
                { icon: Clock, label: "Time", value: "6:00 PM onwards (UK)" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-[12px]">
                  <Icon size={20} strokeWidth={2} color={T.red} />
                  <span>
                    <span className="block text-[10.5px] font-bold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.55)]">
                      {label}
                    </span>
                    <span className="mt-[2px] block text-[15px] font-bold tracking-[-0.01em]">
                      {value}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div data-reveal className="grid gap-[18px]">
          <p className="m-[0px] text-[17px] font-medium leading-[1.7] text-bfa-mute">
            The third edition of Brit FinTech Awards brought together Money
            Service Businesses (MSBs), fintech innovators, payment leaders,
            banking partners, compliance professionals and industry experts
            for an evening dedicated to recognising excellence across the
            financial services ecosystem.
          </p>
          <p className="m-[0px] text-[17px] font-medium leading-[1.7] text-bfa-mute">
            Hosted at the iconic Landing FortyTwo in London&apos;s Leadenhall
            Building, BFA 2026 celebrated the organisations and individuals
            contributing to the growth, innovation and transformation of the
            MSB, fintech and payments sectors.
          </p>
          <p className="m-[0px] text-[17px] font-semibold leading-[1.7] text-bfa-ink">
            More than an awards ceremony, the evening created a platform for
            meaningful conversations, industry connections and recognition of
            the people working behind the scenes to move financial services
            forward.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Opening2026;
