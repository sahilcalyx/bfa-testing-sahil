import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Camera, Play } from "lucide-react";
import { btnPrimary, btnGhost, Eyebrow } from "./shared";

const PHOTO_GALLERY_URL = "/photo-gallery-2026";
const PICKS_DIR = "/assets/img/bfa-legacy/gallery-picks";

const GALLERY_PICKS = [
  { file: "leadenhall", album: "venue", label: "The venue", alt: "Leadenhall Building, home of Landing FortyTwo" },
  { file: "trophy", album: "venue", label: "The trophy", alt: "Brit FinTech Awards trophy on the red carpet" },
  { file: "red-carpet", album: "red-carpet", label: "Red carpet", alt: "Guest arriving on the BFA26 red carpet" },
  { file: "networking", album: "networking", label: "Networking", alt: "Guests networking at BFA26" },
  { file: "host", album: "host", label: "Host", alt: "Host Stephen Simmons on stage" },
  { file: "keynote", album: "keynote", label: "Keynote", alt: "Keynote address at Brit FinTech Awards 2026" },
  { file: "winners", album: "winner-photos", label: "Winners", alt: "Award winners receiving their trophy" },
  { file: "panel", album: "discussion", label: "Discussion panel", alt: "Panellist speaking during the discussion panel" },
  { file: "winners-2", album: "winner-photos", label: "Winners", alt: "Winners celebrating with the BFA trophy" },
  { file: "panel-2", album: "discussion", label: "Discussion panel", alt: "Panellist sharing insights on stage" },
  { file: "winners-3", album: "winner-photos", label: "Winners", alt: "Winner holding the Brit FinTech Award" },
  { file: "audience", album: "audience", label: "Audience", alt: "Guests in the audience at BFA26" },
  { file: "keynote-2", album: "keynote", label: "Speakers", alt: "Speaker addressing the BFA26 audience" },
];

const STEP_DEG = 13;
const VISIBLE_RANGE = 5;
const AUTOPLAY_MS = 4500;

function useCardWidth() {
  const [width, setWidth] = useState(300);
  useEffect(() => {
    const update = () =>
      setWidth(Math.round(Math.min(300, Math.max(190, window.innerWidth * 0.24))));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return width;
}

function Gallery2026() {
  const rootRef = useRef(null);
  const swipeRef = useRef({ x: 0, moved: false });
  const reduced = useReducedMotion();
  const inView = useInView(rootRef, { once: true, amount: 0.3 });
  const [active, setActive] = useState(Math.floor(GALLERY_PICKS.length / 2));
  const [paused, setPaused] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!inView) return undefined;
    const id = setTimeout(() => setSettled(true), 1400);
    return () => clearTimeout(id);
  }, [inView]);

  const cardW = useCardWidth();
  const cardH = Math.round((cardW * 4) / 3);
  const radius = cardW * 4.65;
  const total = GALLERY_PICKS.length;

  const go = useCallback(
    (dir) => setActive((i) => (i + dir + total) % total),
    [total]
  );

  useEffect(() => {
    if (!inView || paused || reduced) return undefined;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [inView, paused, reduced, go, active]);

  const onPointerDown = (e) => {
    swipeRef.current = { x: e.clientX, moved: false };
  };
  const onPointerUp = (e) => {
    const dx = e.clientX - swipeRef.current.x;
    if (Math.abs(dx) > 40) {
      swipeRef.current.moved = true;
      go(dx < 0 ? 1 : -1);
    }
  };
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  const current = GALLERY_PICKS[active];

  return (
    <section
      ref={rootRef}
      id="gallery"
      className="[overflow:hidden] border-t border-solid border-t-bfa-line bg-bfa-soft pb-[88px] pt-[96px]"
    >
      <div className="mx-[auto] max-w-[760px] px-[24px] [text-align:center]">
        <Eyebrow>Photo gallery</Eyebrow>
        <h2 className="mx-[0px] mb-[0px] mt-[14px] text-[clamp(30px,4.6vw,52px)] font-extrabold leading-[1.04] tracking-[-0.04em]">
          Moments that <span className="text-bfa-red">made the night</span>
        </h2>
        <p className="mx-[auto] mb-[0px] mt-[16px] max-w-[520px] text-[15.5px] font-medium leading-[1.65] text-bfa-mute">
          A few of our favourite frames from BFA26 at Landing FortyTwo.
        </p>
      </div>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected photos from Brit FinTech Awards 2026"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        className="relative mt-[56px] touch-pan-y select-none outline-none"
        style={{ height: cardH + Math.round(radius * 0.09) }}
      >
        {GALLERY_PICKS.map((pick, i) => {
          let offset = (i - active + total) % total;
          if (offset > total / 2) offset -= total;
          const hidden = Math.abs(offset) > VISIBLE_RANGE;
          const spread = inView || reduced ? 1 : 0;
          const angle = offset * STEP_DEG * spread;
          const rad = (angle * Math.PI) / 180;
          const x = Math.sin(rad) * radius;
          const y = (1 - Math.cos(rad)) * radius;
          const isActive = offset === 0;

          return (
            <NavLink
              key={pick.file}
              to={`${PHOTO_GALLERY_URL}#${pick.album}`}
              aria-label={isActive ? `${pick.alt} — open ${pick.label} album` : `Show photo: ${pick.alt}`}
              aria-hidden={hidden}
              tabIndex={hidden ? -1 : undefined}
              draggable={false}
              onClick={(e) => {
                if (swipeRef.current.moved || !isActive) {
                  e.preventDefault();
                  swipeRef.current.moved = false;
                  if (!isActive) setActive(i);
                }
              }}
              className={`absolute left-1/2 top-[0px] block [overflow:hidden] rounded-[18px] bg-bfa-ink shadow-[0_14px_28px_-18px_rgba(14,14,16,0.45)] ${
                reduced
                  ? ""
                  : "[transition:transform_0.9s_cubic-bezier(0.22,1,0.36,1),opacity_0.6s_ease]"
              } ${hidden ? "pointer-events-none" : "cursor-pointer"}`}
              style={{
                width: cardW,
                height: cardH,
                marginLeft: -cardW / 2,
                transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
                opacity: hidden || (!inView && !reduced && !isActive) ? 0 : 1,
                zIndex: 50 - Math.abs(offset),
                transitionDelay: settled ? undefined : `${Math.abs(offset) * 70}ms`,
              }}
            >
              <img
                src={`${PICKS_DIR}/${pick.file}.webp`}
                alt={pick.alt}
                loading="lazy"
                draggable={false}
                className="block h-full w-full object-cover"
              />
            </NavLink>
          );
        })}
      </div>

      <div className="mx-[auto] mt-[28px] flex max-w-[760px] flex-col items-center px-[24px]">
        <p aria-live="polite" className="m-[0px] text-[13px] font-bold uppercase tracking-[0.16em] text-bfa-ink">
          <span className="text-bfa-red">{String(active + 1).padStart(2, "0")}</span>
          <span className="text-bfa-mute"> / {String(total).padStart(2, "0")} · </span>
          {current.label}
        </p>

        <div className="mt-[18px] flex items-center gap-[14px]">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="grid h-[52px] w-[52px] cursor-pointer place-items-center rounded-[50%] border-[0px] bg-bfa-ink text-[#fff] transition-colors duration-300 hover:bg-bfa-red"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="grid h-[52px] w-[52px] cursor-pointer place-items-center rounded-[50%] border-[0px] bg-bfa-ink text-[#fff] transition-colors duration-300 hover:bg-bfa-red"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-[36px] flex [flex-wrap:wrap] justify-center gap-[12px]">
          <NavLink to={PHOTO_GALLERY_URL} className={btnPrimary}>
            <Camera size={16} />
            Open photo gallery
          </NavLink>
          <NavLink to="/video-gallery-2026" className={btnGhost}>
            <Play size={15} fill="currentColor" />
            Video gallery
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Gallery2026;
