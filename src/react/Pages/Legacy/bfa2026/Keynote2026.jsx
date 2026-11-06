import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import { daljitYoung } from "../../2026/KeynoteSpeaker2026/speakers2026";
import { KEYNOTE_VIDEO, KEYNOTE_POINTERS } from "./shared";

function Keynote2026() {
  return (
    <section className="bg-bfa-paper px-[24px] py-[72px]">
      <div
        data-reveal
        className="mx-[auto] max-w-[1120px] [overflow:hidden] rounded-[28px] bg-bfa-ink"
      >
        <div className="relative z-[1] grid grid-cols-[minmax(0,1fr)_auto] items-end gap-[24px] rounded-[28px] bg-bfa-red px-[44px] pb-[40px] pt-[44px] text-bfa-ink max-[900px]:grid-cols-1 max-[900px]:px-[26px] max-[900px]:pb-[28px] max-[900px]:pt-[32px]">
          <h2 className="m-[0px] font-montserrat text-[clamp(48px,7.4vw,104px)] font-extrabold leading-[0.86] tracking-[-0.06em] text-bfa-ink">
            Keynote
            <br />
            Speaker
          </h2>
          <div className="pb-[6px] text-right max-[900px]:text-left">
            <p className="m-[0px] font-montserrat text-[clamp(28px,3.4vw,46px)] font-extrabold leading-none tracking-[-0.045em] text-[#fff]">
              Ms Daljit Young
            </p>
            <p className="mx-[0px] mb-[0px] mt-[12px] text-[16px] font-bold text-[#fff]">
              Chief Financial Officer
            </p>
            <span className="mt-[14px] inline-flex items-center rounded-[10px] bg-[#fff] px-[16px] py-[10px] shadow-[0_10px_24px_-14px_rgba(14,14,16,0.5)]">
              <img
                src={daljitYoung.logo}
                alt="Peratera UK Ltd"
                className="block h-[26px] w-[auto]"
              />
            </span>
          </div>
        </div>

        <div className="-mt-[28px] grid grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] max-[900px]:grid-cols-1">
          <div className="flex flex-col justify-end px-[44px] pb-[40px] pt-[64px] text-[#fff] max-[900px]:px-[26px] max-[900px]:pb-[32px] max-[900px]:pt-[56px]">
            <p className="m-[0px] text-[12px] font-extrabold uppercase tracking-[0.2em] text-bfa-red">
              The keynote
            </p>
            <h3 className="mx-[0px] mb-[0px] mt-[14px] max-w-[520px] font-montserrat text-[clamp(24px,2.8vw,34px)] font-bold leading-[1.1] tracking-[-0.035em] text-[#fff]">
              The AI-Augmented CFO — Inside a Next-Gen EMI&apos;s Financial
              Engine Room
            </h3>
            <ul className="mx-[0px] mb-[0px] mt-[22px] flex list-none [flex-wrap:wrap] gap-[8px] p-[0px]">
              {KEYNOTE_POINTERS.map((item) => (
                <li
                  key={item}
                  className="rounded-[999px] border-[1px] border-solid border-[rgba(255,255,255,0.18)] px-[12px] py-[6px] text-[12.5px] font-semibold text-[rgba(255,255,255,0.82)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-[32px] flex items-center gap-[10px]">
              <a
                href={`https://www.youtube.com/watch?v=${KEYNOTE_VIDEO}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[10px] rounded-[10px] bg-bfa-red px-[22px] py-[13px] text-[14px] font-bold text-[#fff] no-underline hover:text-white"
              >
                <Play size={15} fill="currentColor" />
                Watch keynote
              </a>
              <NavLink
                to={daljitYoung.slug}
                aria-label="Read Daljit Young's profile"
                title="Read the profile"
                className="grid h-[46px] w-[46px] place-items-center rounded-[10px] border-[1px] border-solid border-[rgba(255,255,255,0.4)] text-[#fff] hover:text-white"
              >
                <ArrowUpRight size={18} />
              </NavLink>
            </div>
          </div>

          <NavLink
            to={daljitYoung.slug}
            className="group relative block min-h-[400px] [overflow:hidden] bg-[#1A1A1D] max-[900px]:min-h-[360px]"
          >
            <img
              src={daljitYoung.img}
              alt="Ms Daljit Young"
              className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[center_top] transition-transform [transition-duration:800ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
            <span className="absolute inset-x-0 bottom-[0px] top-auto bg-[linear-gradient(0deg,rgba(14,14,16,0.92),rgba(14,14,16,0))] px-[24px] pb-[22px] pt-[56px] font-montserrat text-[15px] font-bold leading-[1.4] tracking-[-0.01em] text-[#fff]">
              “Accountability remains with the human decision-maker.”
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Keynote2026;
