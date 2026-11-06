import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { btnBase } from "./shared";

const HOST_PROFILE_URL = "/stephen-simmons-event-host-2026";

function Host2026() {
  return (
    <section className="[overflow:hidden] bg-bfa-paper px-[24px] py-[96px] text-bfa-ink">
      <div className="mx-[auto] grid max-w-[1120px] grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-center gap-[64px] max-[900px]:grid-cols-[1fr] max-[900px]:gap-[24px]">
        <NavLink
          to={HOST_PROFILE_URL}
          data-reveal
          aria-label="View Stephen Simmons' profile"
          className="group relative block aspect-square [overflow:hidden] rounded-[28px] bg-bfa-red"
        >
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-[6%] -translate-x-1/2 whitespace-nowrap font-montserrat text-[clamp(52px,6.6vw,96px)] font-extrabold leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.45)]"
          >
            HOST
          </span>
          <img
            src="/assets/img/stephen-simmons-host-new.png"
            alt="Mr Stephen Simmons"
            className="absolute bottom-[0px] left-1/2 block h-[auto] w-[88%] -translate-x-1/2 transition-transform [transition-duration:900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
        </NavLink>

        <div data-reveal>
          <p className="m-[0px] flex items-center gap-[12px] text-[12px] font-extrabold uppercase tracking-[0.2em] text-bfa-red">
            <span className="h-px w-[28px] bg-bfa-red" />
            The magic behind the mic
          </p>
          <h2 className="m-[0px] mt-[16px] font-montserrat text-[clamp(32px,4.6vw,56px)] font-extrabold leading-none tracking-[-0.05em] text-bfa-ink">
            Mr Stephen Simmons
          </h2>
          <p className="m-[0px] mt-[12px] text-[13px] font-extrabold uppercase tracking-[0.16em] text-bfa-mute">
            Host · Brit FinTech Awards 2026
          </p>
          <p className="m-[0px] mt-[24px] text-[16px] font-medium leading-[1.75] text-bfa-mute">
            Mr Stephen Simmons took centre stage as the host, adding a touch of
            magic to the evening and bringing his own unique charm and
            charisma to the Brit FinTech Awards 2026.
          </p>
          <p className="m-[0px] mt-[16px] text-[16px] font-medium leading-[1.75] text-bfa-mute">
            From welcoming distinguished guests to keeping the awards ceremony
            engaging and entertaining, he brought{" "}
            <strong className="text-bfa-ink">energy, wit and warmth</strong> to
            every moment, making the BFA26 celebrations even more memorable.
          </p>
          <NavLink
            to={HOST_PROFILE_URL}
            className={`${btnBase} mt-[30px] border-[0px] bg-bfa-ink text-[#fff] hover:text-white`}
          >
            View profile
            <ArrowUpRight size={16} />
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Host2026;
