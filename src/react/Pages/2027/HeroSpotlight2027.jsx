"use client";

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const EASE = [0.16, 1, 0.3, 1];
// Web-sized copies (scripts/ri27-web-images.py); the originals are 6000px camera files.
const G = "/assets/img/gallery2026/web";
const WALL = [
  "audience/36",
  "venue/11",
  "discussion/10",
  "keynote/12",
  "host/2",
  "winner-photos/13",
  "red-carpet/26",
  "event-branding/7",
  "networking/19",
  "keynote/19",
  "audience/44",
  "venue/2",
  "venue/3",
  "red-carpet/13",
  "venue/26",
].map((p) => `${G}/${p}.webp`);
// Tiles crop to portrait, so off-centre subjects need their own focal point.
const FOCUS = { [`${G}/keynote/19.webp`]: "80% 50%" };
const YEARS = [4, 5, 6, 7];

// Five columns of three photos. Each track holds the set three times and slides by one set, so the loop never shows a gap even on tall phones.
const COLUMNS = [0, 1, 2, 3, 4].map((c) => ({
  dur: [64, 52, 70, 58, 66][c],
  dir: c % 2 ? "reverse" : "normal",
  photos: WALL.slice(c * 3, c * 3 + 3),
}));

const wallTiles = COLUMNS.map((col, c) => (
  <div key={c} className="col">
    <div className="track" style={{ "--dur": `${col.dur}s`, "--dir": col.dir }}>
      {[0, 1, 2].flatMap((copy) =>
        col.photos.map((src) => (
          <figure key={`${copy}-${src}`}>
            <img src={src} alt="" decoding="async" style={FOCUS[src] ? { objectPosition: FOCUS[src] } : undefined} />
          </figure>
        ))
      )}
    </div>
  </div>
));

const HeroSpotlight2027 = ({ onRegister, reduceMotion }) => {
  const rootRef = useRef(null);

  // Stop the endless column loops once the hero is off screen.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(([entry]) => {
      el.dataset.offscreen = entry.isIntersecting ? "false" : "true";
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Keep the spotlight in a fixed position; scrolling still reveals the full wall.
  useGSAP(
    () => {
      const el = rootRef.current;
      if (!el || reduceMotion) return undefined;

      gsap.fromTo(
        el,
        { "--boot": 0 },
        { "--boot": 1, duration: 2.2, delay: 0.15, ease: "power3.out" }
      );

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 1 },
      });
      tl.fromTo(el, { "--reveal": 0 }, { "--reveal": 1 }, 0)
        .to(el.querySelectorAll("[data-sp-wall]"), { yPercent: -7, scale: 1.04 }, 0)
        .to(el.querySelector("[data-sp-content]"), { y: 90 }, 0);
      return undefined;
    },
    { scope: rootRef, dependencies: [reduceMotion] }
  );

  const rise = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <Stage ref={rootRef} aria-labelledby="ri27-hero-title" $still={!!reduceMotion}>
      <Wall data-sp-wall aria-hidden="true" $tone="ambient">
        {wallTiles}
      </Wall>

      <Darkness aria-hidden="true" />

      {/* Same wall in full colour, visible only inside the spotlight. The mask lives on the untransformed wrapper so it tracks hero coordinates. */}
      <LitLayer aria-hidden="true">
        <Wall data-sp-wall $tone="lit">{wallTiles}</Wall>
      </LitLayer>
      <Glow aria-hidden="true" />
      <Grain aria-hidden="true" />
      <Fade aria-hidden="true" />

      <Content data-sp-content>
        <Year aria-hidden="true">
          <motion.span
            className="glow"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
            animate={reduceMotion ? { opacity: 0.55 } : { opacity: [0, 0.9, 0.55], scale: [0.6, 1.1, 1] }}
            transition={{ duration: 1.4, delay: 2.9, ease: "easeOut" }}
          />
          <motion.span
            className="base"
            initial={reduceMotion ? false : { y: "35%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
          >
            202
          </motion.span>
          <motion.span
            className="reel"
            initial={reduceMotion ? false : { y: "35%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.45, ease: EASE }}
          >
            <motion.span
              className="track"
              initial={reduceMotion ? false : { y: "0%" }}
              animate={reduceMotion ? { y: "-75%" } : { y: ["0%", "0%", "-25%", "-25%", "-50%", "-50%", "-75%"] }}
              transition={{
                duration: 2.3,
                delay: 0.9,
                times: [0, 0.12, 0.3, 0.42, 0.6, 0.72, 1],
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {YEARS.map((y) => (
                <span key={y} className={`d ${y === 7 ? "new" : "old"}`}>
                  {y}
                </span>
              ))}
            </motion.span>
          </motion.span>
        </Year>
        <span className="sr-only">2027</span>

        <motion.span
          className="stage-edge"
          aria-hidden="true"
          initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.9, ease: EASE }}
        />

        <motion.h1 id="ri27-hero-title" {...rise(1.6)}>
          The next chapter of FinTech excellence <em>begins here</em>
        </motion.h1>

        <motion.div className="actions" {...rise(1.95)}>
          <button type="button" className="btn primary" onClick={onRegister}>
            Register your interest
            <span className="ico">
              <ArrowUpRight size={17} strokeWidth={2.5} />
            </span>
          </button>
          <Link to="/award-winners-2026" className="btn ghost">
            Relive 2026
          </Link>
        </motion.div>
      </Content>
    </Stage>
  );
};

/* ---------------------------------------------------------------------- */

const Stage = styled.header`
  --boot: 1;
  --reveal: 0;
  --spot-on: 1;
  --spot: clamp(190px, 24vmax, 420px);
  --mx: 75%;
  --my: 35%;
  --r: calc(var(--spot-on) * var(--spot) + var(--reveal) * 140vmax);
  /* Shade outside the spotlight: fully dark before the lights come up, a dim ambient level after, nearly clear once scrolled. */
  --outer: calc(1 - var(--boot) * 0.62 - var(--reveal) * 0.38);

  position: relative;
  isolation: isolate;
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: 150px 0 110px;
  overflow: hidden;
  background: #050507;
  box-sizing: border-box;

  @media (min-width: 1024px) { padding: 170px 0 120px; }
  @media (max-width: 767px) {
    --mx: 50%;
    --my: 50%;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
`;

const colUp = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(0, calc(-100% / 3), 0); }
`;

const Wall = styled.div`
  position: absolute;
  inset: -14% -6%;
  z-index: -4;
  display: flex;
  gap: 10px;
  transform: rotate(-4deg);
  opacity: 0.82;
  will-change: transform;

  .col {
    flex: 1 1 0;
    min-width: 0;
  }
  .col:nth-child(n + 4) { display: none; }

  .track {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 10px;
    will-change: transform;
    animation: ${colUp} var(--dur) linear infinite;
    animation-direction: var(--dir);
  }
  [data-offscreen="true"] & .track { animation-play-state: paused; }

  figure {
    margin: 0;
    aspect-ratio: 3 / 4;
    overflow: hidden;
    border-radius: 6px;
    background: #111;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: ${(p) =>
      p.$tone === "lit"
        ? "saturate(1.2) contrast(1.08) brightness(1.12)"
        : "grayscale(0.3) saturate(0.9) brightness(0.95)"};
  }

  @media (min-width: 768px) {
    gap: 14px;
    .col:nth-child(n + 4) { display: block; }
    .track { gap: 14px; padding-bottom: 14px; }
    figure { aspect-ratio: 4 / 5; }
  }

  @media (prefers-reduced-motion: reduce) {
    .track { animation: none; }
  }
`;

const spotMask = css`
  -webkit-mask-image: radial-gradient(
    circle at var(--mx, 75%) var(--my, 35%),
    rgba(0, 0, 0, 0.04) 0,
    rgba(0, 0, 0, 0.14) calc(var(--r) * 0.35),
    rgba(0, 0, 0, var(--outer)) var(--r)
  );
  mask-image: radial-gradient(
    circle at var(--mx, 75%) var(--my, 35%),
    rgba(0, 0, 0, 0.04) 0,
    rgba(0, 0, 0, 0.14) calc(var(--r) * 0.35),
    rgba(0, 0, 0, var(--outer)) var(--r)
  );
`;

const LitLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;
  overflow: hidden;
  pointer-events: none;
  -webkit-mask-image: radial-gradient(
    circle at var(--mx, 75%) var(--my, 35%),
    #000 0,
    rgba(0, 0, 0, 0.85) calc(var(--r) * 0.4),
    transparent var(--r)
  );
  mask-image: radial-gradient(
    circle at var(--mx, 75%) var(--my, 35%),
    #000 0,
    rgba(0, 0, 0, 0.85) calc(var(--r) * 0.4),
    transparent var(--r)
  );
`;

/* The dark is the layer that moves: a full-bleed shade with a soft hole cut where the light falls. */
const Darkness = styled.div`
  position: absolute;
  inset: 0;
  z-index: -3;
  background: rgba(5, 5, 7, 0.9);
  ${spotMask}
`;

const Glow = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  mix-blend-mode: soft-light;
  background: radial-gradient(
    circle at var(--mx, 75%) var(--my, 35%),
    rgba(242, 216, 172, 0.55) 0,
    rgba(200, 16, 46, 0.18) calc(var(--r) * 0.7),
    transparent var(--r)
  );
`;

const Grain = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.16;
  mix-blend-mode: overlay;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
`;

const Fade = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(ellipse 50% 44% at 50% 54%, rgba(5, 5, 7, 0.78) 0%, rgba(5, 5, 7, 0.45) 55%, transparent 100%),
    linear-gradient(180deg, rgba(5, 5, 7, 0.75) 0%, transparent 22%, transparent 72%, var(--bg, #07070a) 100%);

  @media (max-width: 767px) {
    background:
      radial-gradient(ellipse 90% 50% at 50% 55%, rgba(5, 5, 7, 0.85) 0%, rgba(5, 5, 7, 0.5) 60%, transparent 100%),
      linear-gradient(180deg, rgba(5, 5, 7, 0.75) 0%, transparent 22%, transparent 72%, var(--bg, #07070a) 100%);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  padding: 0 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  will-change: transform, opacity;

  .stage-edge {
    display: block;
    width: min(520px, 70%);
    height: 2px;
    margin-top: clamp(4px, 1vw, 12px);
    margin-bottom: clamp(28px, 4vw, 40px);
    flex-shrink: 0;
    background: linear-gradient(90deg, transparent, var(--crimson, #c8102e) 25%, var(--gold, #f2d8ac) 50%, var(--crimson, #c8102e) 75%, transparent);
    box-shadow: 0 0 24px rgba(200, 16, 46, 0.7);
    transform-origin: 50% 50%;
  }

  h1 {
    max-width: 22ch;
    font-weight: 800;
    font-size: clamp(1.55rem, 3.4vw, 2.85rem);
    line-height: 1.04;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    text-wrap: balance;
  }
  h1 em { color: var(--crimson, #c8102e); }

  .actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 34px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    border-radius: 999px;
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

    &:hover { transform: translateY(-2px); }
    &:focus-visible { outline: 2px solid var(--gold, #f2d8ac); outline-offset: 3px; }
  }
  .primary {
    padding: 8px 8px 8px 26px;
    border: 0;
    background: #fff;
    color: #0a0a0a;
    box-shadow: 0 18px 50px rgba(255, 255, 255, 0.14);
  }
  .primary .ico {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--crimson, #c8102e);
    color: #fff;
    transition: transform 0.35s ease;
  }
  .primary:hover {
    background: var(--crimson, #c8102e);
    color: #fff;
    box-shadow: 0 18px 50px rgba(200, 16, 46, 0.45);
  }
  .primary:hover .ico { background: #fff; color: var(--crimson, #c8102e); transform: rotate(45deg); }
  .ghost {
    padding: 0 26px;
    min-height: 56px;
    border: 1px solid rgba(255, 255, 255, 0.26);
    background: rgba(5, 5, 7, 0.4);
    backdrop-filter: blur(8px);
    color: #fff;
  }
  .ghost:hover { border-color: #fff; color: #fff; background: rgba(255, 255, 255, 0.08); }
`;

const Year = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: clamp(10px, 2vw, 22px);
  font-weight: 900;
  font-size: clamp(7.25rem, 21vw, 16.5rem);
  line-height: 1;
  letter-spacing: -0.065em;
  user-select: none;

  .base,
  .reel { display: inline-block; }

  .base {
    padding-right: 0.04em;
    background: linear-gradient(180deg, #ffffff 30%, rgba(255, 255, 255, 0.55) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .reel {
    height: 1em;
    overflow: hidden;
  }
  .track {
    display: flex;
    flex-direction: column;
  }
  .d { display: block; height: 1em; }
  .old {
    color: transparent;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.55);
  }
  .new {
    color: var(--crimson, #c8102e);
    text-shadow: 0 0 60px rgba(200, 16, 46, 0.55);
  }

  .glow {
    position: absolute;
    right: 2%;
    top: 12%;
    width: 0.9em;
    height: 0.8em;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200, 16, 46, 0.65), transparent 70%);
    filter: blur(28px);
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 767px) {
    .old { -webkit-text-stroke-width: 1.4px; }
  }
`;

export default HeroSpotlight2027;
