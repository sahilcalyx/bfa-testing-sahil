import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { schedule2026 } from "../../2026/Schedule2026/schedule2026";
import { Eyebrow } from "./shared";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SCHEDULE_PAGE_URL = "/event-schedule-2026";

const initialsOf = (name = "") =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function SchedulePerson({ person }) {
  const body = (
    <>
      <span className="grid h-[26px] w-[26px] shrink-0 place-items-center [overflow:hidden] rounded-full bg-bfa-line text-[9px] font-extrabold text-bfa-mute">
        {person.img ? (
          <img
            src={person.img}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          initialsOf(person.name)
        )}
      </span>
      <span className="min-w-0 leading-[1.3]">
        <span className="text-[13px] font-bold text-bfa-ink transition-[color] duration-200 [transition-timing-function:ease] group-hover:text-bfa-red">
          {person.name}
        </span>
        {person.role && (
          <span className="text-[12px] font-medium text-bfa-mute">
            {" "}
            · {person.role}
          </span>
        )}
      </span>
    </>
  );

  const personClass = "inline-flex min-w-0 items-center gap-[8px] no-underline";

  return person.slug ? (
    <NavLink to={person.slug} className={`group ${personClass}`}>
      {body}
    </NavLink>
  ) : (
    <span className={personClass}>{body}</span>
  );
}

function Schedule2026() {
  const rootRef = useRef(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;

      gsap.from("[data-sch-intro] > *", {
        autoAlpha: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%", once: true },
      });

      gsap.utils.toArray("[data-sch-item]").forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 62%",
          toggleClass: { targets: item, className: "is-on" },
        });
        gsap.from(item, {
          autoAlpha: 0,
          y: 18,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: item, start: "top 92%", once: true },
        });
      });
    },
    { scope: rootRef, dependencies: [reduced] }
  );

  return (
    <section
      ref={rootRef}
      id="event-schedule"
      className="border-t border-solid border-t-bfa-line bg-bfa-paper px-[24px] py-[96px]"
    >
      <div className="mx-[auto] grid max-w-[1120px] grid-cols-[minmax(0,300px)_minmax(0,1fr)] items-start gap-[80px] max-[900px]:grid-cols-1 max-[900px]:gap-[36px]">
        <div
          data-sch-intro
          className="sticky top-[120px] max-[900px]:static"
        >
          <Eyebrow>Event schedule</Eyebrow>
          <h2 className="mx-[0px] mb-[0px] mt-[14px] text-[clamp(28px,3.4vw,40px)] font-extrabold leading-[1.05] tracking-[-0.04em]">
            The evening,
            <br />
            <span className="text-bfa-red">hour by hour</span>
          </h2>
          <p className="mx-[0px] mb-[0px] mt-[16px] text-[14.5px] font-medium leading-[1.65] text-bfa-mute">
            From welcome drinks to the awards ceremony and dinner — how the
            BFA26 evening unfolded at Landing FortyTwo.
          </p>
          <p className="mx-[0px] mb-[0px] mt-[20px] text-[12px] font-bold uppercase tracking-[0.14em] text-bfa-ink">
            Friday, 9 October 2026
          </p>
          <NavLink
            to={SCHEDULE_PAGE_URL}
            className="mt-[24px] inline-flex items-center gap-[6px] border-b border-solid border-b-bfa-ink pb-[4px] text-[13px] font-bold text-bfa-ink no-underline hover:border-b-bfa-red hover:text-bfa-red"
          >
            Full event schedule
            <ArrowUpRight size={15} />
          </NavLink>
        </div>

        <ol className="m-[0px] list-none border-t border-solid border-t-bfa-line p-[0px]">
          {schedule2026.map((item) => {
            const people = item.people || [];
            const featured = item.id === "ceremony";
            return (
              <li
                key={item.id}
                data-sch-item
                className="relative grid grid-cols-[96px_minmax(0,1fr)] gap-[24px] border-b border-solid border-b-bfa-line py-[20px] pl-[16px] pr-[0px] before:absolute before:bottom-[20px] before:left-0 before:top-[20px] before:w-[2px] before:origin-top before:scale-y-0 before:bg-bfa-red before:content-[''] before:[transition:transform_0.45s_cubic-bezier(0.22,1,0.36,1)] hover:before:scale-y-100 [&.is-on]:before:scale-y-100 max-[600px]:grid-cols-[72px_minmax(0,1fr)] max-[600px]:gap-[14px]"
              >
                <time
                  dateTime={`${item.time} ${item.meridiem}`}
                  className="text-[16px] font-bold tabular-nums tracking-[-0.01em] text-bfa-mute transition-[color] [transition-duration:350ms] [transition-timing-function:ease] [.is-on_&]:text-bfa-red"
                >
                  {item.time}
                  <span className="ml-[5px] text-[10px] font-bold tracking-[0.14em]">
                    {item.meridiem}
                  </span>
                </time>

                <div className="min-w-0">
                  <span
                    className={`block text-[16px] font-bold leading-[1.35] tracking-[-0.01em] ${
                      featured ? "text-bfa-red" : "text-bfa-ink"
                    }`}
                  >
                    {item.title}
                  </span>

                  {people.length > 0 && (
                    <div className="mt-[12px] flex [flex-wrap:wrap] gap-x-[22px] gap-y-[10px]">
                      {people.map((person) => (
                        <SchedulePerson key={person.name} person={person} />
                      ))}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Schedule2026;
