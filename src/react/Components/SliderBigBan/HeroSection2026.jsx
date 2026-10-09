import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Calendar, Clock, MapPin, Ticket } from "lucide-react";
import { NavLink } from "react-router-dom";
import { ATTENDEE_LOGOS } from "../attendeeLogos";
import { getUkCountdownToEvent } from "./SliderMiniComponents/ukEventTime";

/**
 * Homepage hero (2026):
 * countdown strip + combined venue/date/time strip → centred Full House CTA → full-width Who Attends BFA.
 * Target: Fri 9 Oct 2026, 18:00 Europe/London (real UK time).
 */

const THEME = {
  red: "#c8102e",
  redBright: "#d41430",
  redDeep: "#9e0c22",
  redDark: "#7a0a18",
  black: "#0b0b0c",
  white: "#ffffff",
};

const VENUE_MAPS_URL = "https://maps.app.goo.gl/HTmvq2hv7HkHbqNX9";

/* 7 columns × 4 rows on desktop, 4 columns × 7 rows on mobile */
const LOGOS_PER_PAGE = 28;
const PAGE_HOLD_MS = 7000;
const FLIP_STAGGER_S = 0.04;
const FLIP_HALF_S = 0.28;

/* Pages always hold LOGOS_PER_PAGE cards; a short final page is topped up from the start of the list */
const ATTENDEE_PAGES = Array.from(
  { length: Math.ceil(ATTENDEE_LOGOS.length / LOGOS_PER_PAGE) },
  (_, page) =>
    Array.from(
      { length: LOGOS_PER_PAGE },
      (_, i) => ATTENDEE_LOGOS[(page * LOGOS_PER_PAGE + i) % ATTENDEE_LOGOS.length]
    )
);

const pad = (n) => String(n).padStart(2, "0");

/* ---------- Countdown strip (from CountdownSlider2026Animated) ---------- */

const ThemeAnimatedBg = ({ reduce }) => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(110deg, ${THEME.black} 0%, ${THEME.redDark} 35%, ${THEME.redDeep} 55%, ${THEME.redDark} 75%, ${THEME.black} 100%)`,
      }}
    />

    <motion.div
      className="absolute -left-[12%] top-1/2 h-[220%] w-[48%] -translate-y-1/2 rounded-full blur-[70px]"
      style={{
        background: `radial-gradient(circle, ${THEME.redBright}66 0%, transparent 68%)`,
      }}
      animate={
        reduce
          ? undefined
          : { x: ["0%", "14%", "0%"], scale: [1, 1.12, 1], opacity: [0.55, 0.9, 0.55] }
      }
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -right-[10%] top-1/2 h-[200%] w-[42%] -translate-y-1/2 rounded-full blur-[80px]"
      style={{
        background: `radial-gradient(circle, ${THEME.red}55 0%, transparent 70%)`,
      }}
      animate={
        reduce
          ? undefined
          : { x: ["0%", "-16%", "0%"], scale: [1.08, 0.95, 1.08], opacity: [0.45, 0.8, 0.45] }
      }
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
    />

    <motion.div
      className="absolute left-1/2 top-0 h-full w-[30%] -translate-x-1/2 blur-[60px]"
      style={{
        background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 65%)",
      }}
      animate={reduce ? undefined : { opacity: [0.35, 0.7, 0.35] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
    />

    {!reduce && (
      <motion.div
        className="absolute inset-y-[-50%] w-[26%] skew-x-[-16deg]"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.08), ${THEME.redBright}28, transparent)`,
        }}
        animate={{ left: ["-28%", "115%"] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
      />
    )}

    <div
      className="absolute inset-x-0 top-0 h-[2px]"
      style={{
        background: `linear-gradient(90deg, transparent, ${THEME.redBright}, rgba(255,255,255,0.45), ${THEME.redBright}, transparent)`,
      }}
    />
    <div
      className="absolute inset-x-0 bottom-0 h-[2px]"
      style={{
        background: `linear-gradient(90deg, transparent, ${THEME.redBright}, rgba(255,255,255,0.35), ${THEME.redBright}, transparent)`,
      }}
    />
  </div>
);

const FlipDigit = ({ value, reduce }) => {
  const text = pad(value);
  return (
    <span
      className="relative inline-block overflow-hidden text-center tabular-nums"
      style={{ minWidth: "2ch", height: "1.1em", lineHeight: 1 }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={text}
          initial={reduce ? false : { y: "70%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={reduce ? undefined : { y: "-70%", opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {text}
        </motion.span>
      </AnimatePresence>
      <span className="invisible">{text}</span>
    </span>
  );
};

const Unit = ({ value, label, reduce, delay }) => (
  <motion.div
    initial={reduce ? false : { opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col items-center px-1 sm:px-2"
    style={{ minWidth: "3.5rem" }}
  >
    <span
      className="hs26-digit"
      style={{
        fontFamily: "'Outfit', 'Montserrat', system-ui, sans-serif",
        fontSize: "clamp(1.65rem, 4vw, 2.65rem)",
        fontWeight: 800,
        letterSpacing: "-0.03em",
        color: THEME.white,
        lineHeight: 1,
      }}
    >
      <FlipDigit value={value} reduce={reduce} />
    </span>
    <span
      style={{
        marginTop: 6,
        fontFamily: "'Outfit', system-ui, sans-serif",
        fontSize: "0.58rem",
        fontWeight: 600,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.45)",
      }}
    >
      {label}
    </span>
  </motion.div>
);

const Divider = () => (
  <span
    aria-hidden
    style={{
      alignSelf: "center",
      width: 1,
      height: "2.1rem",
      marginBottom: "1.05rem",
      background: "rgba(255,255,255,0.22)",
      flexShrink: 0,
    }}
  />
);

const CountdownRow = ({ timeLeft, reduce }) => {
  const { days, hours, minutes, seconds } = timeLeft;
  const units = [
    { value: days, label: days === 1 ? "Day" : "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Mins" },
    { value: seconds, label: "Secs" },
  ];

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="hs26-countdown-row"
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 1180,
        margin: "0 auto",
        padding: "16px 24px 16px 28px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px 28px",
      }}
    >
      <h3
        style={{
          margin: 0,
          flex: "1 1 200px",
          minWidth: 0,
          fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
          fontWeight: 800,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: THEME.white,
          lineHeight: 1.25,
        }}
      >
        The countdown is on
      </h3>

      <div
        role="timer"
        aria-live="polite"
        aria-atomic="true"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "clamp(8px, 1.8vw, 16px)",
          flex: "0 1 auto",
        }}
      >
        {units.map((unit, i) => (
          <React.Fragment key={unit.label}>
            {i > 0 && <Divider />}
            <Unit value={unit.value} label={unit.label} reduce={reduce} delay={0.1 + i * 0.08} />
          </React.Fragment>
        ))}
      </div>

      <p
        className="hidden min-[900px]:block"
        style={{
          margin: 0,
          flex: "1 1 220px",
          textAlign: "right",
          fontSize: "0.68rem",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.45,
        }}
      >
        Recognition
        <span style={{ margin: "0 8px", color: "rgba(255,255,255,0.3)" }} aria-hidden>
          |
        </span>
        Networking
        <span style={{ margin: "0 8px", color: "rgba(255,255,255,0.3)" }} aria-hidden>
          |
        </span>
        Celebration
      </p>

      <p
        className="min-[900px]:hidden"
        style={{
          margin: 0,
          width: "100%",
          textAlign: "center",
          fontSize: "0.62rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.5,
        }}
      >
        Recognition · Networking · Celebration
      </p>
    </motion.div>
  );
};

/* ---------- Attendee logo card ---------- */

function AttendeeLogoCard({ item, index, reduceMotion }) {
  const [failed, setFailed] = useState(!item.logo);
  const delay = index * FLIP_STAGGER_S;
  const isForen =
    item.name === "Leatherback" ||
    item.name === "FOREN. formerly Leatherback" ||
    Boolean(item.foren);

  return (
    <motion.div
      className={`hs26-card${item.dark ? " hs26-card--dark" : ""}${
        item.tall || isForen ? " hs26-card--tall" : ""
      }`}
      initial={reduceMotion ? { opacity: 0 } : { rotateY: -90, opacity: 0.4 }}
      animate={
        reduceMotion
          ? { opacity: 1, transition: { duration: 0.3 } }
          : { rotateY: 0, opacity: 1, transition: { duration: FLIP_HALF_S, ease: "easeOut" } }
      }
      exit={
        reduceMotion
          ? { opacity: 0, transition: { duration: 0.3, delay: delay / 2 } }
          : { rotateY: 90, opacity: 0.4, transition: { duration: FLIP_HALF_S, ease: "easeIn", delay } }
      }
    >
      {failed && !isForen ? (
        <span className="hs26-fallback">{item.name}</span>
      ) : isForen ? (
        <span className="hs26-foren" aria-label="FOREN. formerly Leatherback">
          <span className="hs26-foren-name">FOREN.</span>
          <span className="hs26-foren-sub">
            <em>formerly</em> leatherback
          </span>
        </span>
      ) : (
        <img src={item.logo} alt={item.name} decoding="async" onError={() => setFailed(true)} />
      )}
    </motion.div>
  );
}

/* ---------- Component ---------- */

const HeroSection2026 = () => {
  const reduce = useReducedMotion();
  const [timeLeft, setTimeLeft] = useState(null);
  const [eventStarted, setEventStarted] = useState(false);
  const [ctaIndex, setCtaIndex] = useState(0);
  const [logoPage, setLogoPage] = useState(0);

  useEffect(() => {
    const tick = () => {
      const next = getUkCountdownToEvent();
      setTimeLeft(next);
      setEventStarted(!next);
      return next;
    };
    if (!tick()) return undefined;
    const id = setInterval(() => {
      if (!tick()) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const delay = ctaIndex === 0 ? 3400 : 2200;
    const id = setTimeout(() => setCtaIndex((i) => (i + 1) % 2), delay);
    return () => clearTimeout(id);
  }, [ctaIndex]);

  useEffect(() => {
    ATTENDEE_LOGOS.forEach(({ logo }) => {
      if (logo) new Image().src = logo;
    });
  }, []);

  useEffect(() => {
    if (ATTENDEE_PAGES.length < 2) return undefined;
    const id = setInterval(() => setLogoPage((p) => (p + 1) % ATTENDEE_PAGES.length), PAGE_HOLD_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;600;700;800;900&display=swap');

        @keyframes hs26-border-spin { to { transform: rotate(360deg); } }
        @keyframes hs26-sheen {
          0% { transform: translateX(-130%) skewX(-18deg); }
          100% { transform: translateX(240%) skewX(-18deg); }
        }
        @keyframes hs26-live {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }

        .hs26 {
          position: relative;
          isolation: isolate;
          font-family: 'Outfit', 'Montserrat', system-ui, sans-serif;
          color: #fff;
          background: #070708;
        }

        /* ----- Combined venue / date / time strip ----- */
        .hs26-info-wrap {
          display: flex;
          justify-content: center;
          margin-top: -2px;
          position: relative;
          z-index: 2;
          padding: 0 16px;
        }

        .hs26-info {
          display: flex;
          align-items: stretch;
          justify-content: center;
          width: 100%;
          max-width: 860px;
          background: #fff;
          color: #111;
          border-radius: 0 0 18px 18px;
          border: 2px solid ${THEME.redBright};
          border-top: none;
          box-shadow: 0 12px 32px rgba(200, 16, 46, 0.2);
          overflow: hidden;
        }

        .hs26-info-item {
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 20px 16px;
          min-width: 0;
          text-decoration: none;
          color: inherit;
        }

        a.hs26-info-item { transition: background-color 0.2s ease; }
        a.hs26-info-item:hover { background-color: rgba(200, 16, 46, 0.06); }

        .hs26-info-item + .hs26-info-item { border-left: 1px solid #e6e6e6; }

        .hs26-info-icon {
          color: ${THEME.red};
          flex-shrink: 0;
          width: 22px;
          height: 22px;
        }

        .hs26-info-copy {
          display: flex;
          flex-direction: column;
          min-width: 0;
          line-height: 1.2;
        }

        .hs26-info-main {
          font-size: clamp(0.9rem, 1.4vw, 1.05rem);
          font-weight: 800;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        .hs26-info-sub {
          font-size: 0.72rem;
          font-weight: 500;
          color: #777;
          white-space: nowrap;
        }

        .hs26-info-weekday {
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #111;
        }

        .hs26-info-main sup {
          font-size: 0.6em;
          top: -0.4em;
        }

        /* ----- Body ----- */
        .hs26-body {
          position: relative;
          overflow: hidden;
          padding: 3rem 1rem 3.5rem;
          background:
            radial-gradient(ellipse 35% 60% at 0% 50%, rgba(200, 16, 46, 0.28), transparent 70%),
            radial-gradient(ellipse 35% 60% at 100% 50%, rgba(200, 16, 46, 0.28), transparent 70%),
            radial-gradient(ellipse 70% 50% at 50% 40%, rgba(255, 255, 255, 0.04), transparent 62%),
            linear-gradient(180deg, #0c0c0e 0%, #070708 55%, #0e0608 100%);
        }

        .hs26-body::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(ellipse 100% 90% at 50% 50%, transparent 50%, rgba(0, 0, 0, 0.5) 100%);
        }

        .hs26-deco {
          position: absolute;
          top: 15%;
          height: 70%;
          width: 22%;
          object-fit: cover;
          opacity: 0.6;
          pointer-events: none;
          user-select: none;
          filter: drop-shadow(0 0 10px rgba(200, 16, 46, 0.6)) brightness(1.35);
          z-index: 0;
        }

        .hs26-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.75rem;
        }

        /* ----- Book Your Ticket CTA ----- */
        .hs26-book {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .hs26-eyebrow {
          margin: 0;
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
        }

        .hs26-cta {
          position: relative;
          display: inline-flex;
          isolation: isolate;
          max-width: 280px;
          width: 100%;
          margin: 0 auto;
          padding: 2px;
          border-radius: 14px;
          text-decoration: none;
          color: #fff !important;
          overflow: hidden;
          cursor: pointer;
          transform: translateY(-2px);
          box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.18),
                      0 8px 22px rgba(200, 16, 46, 0.35);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
        }

        .hs26-cta::before {
          content: "";
          position: absolute;
          z-index: 0;
          inset: -80%;
          background: conic-gradient(
            from 0deg,
            #7a0a18 0deg, #ffd700 70deg, #ffffff 110deg, #ffd700 150deg,
            #c8102e 220deg, #7a0a18 280deg, #ffd700 330deg, #7a0a18 360deg
          );
          animation: hs26-border-spin 4.2s linear infinite;
        }

        .hs26-cta-inner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 56px;
          border-radius: 12px;
          background:
            linear-gradient(90deg, transparent 32%, rgba(0, 0, 0, 0.42) 72%, rgba(0, 0, 0, 0.92) 100%),
            linear-gradient(180deg, #d41430 0%, #c8102e 55%, #9e0c22 100%);
          overflow: hidden;
          transition: background 0.35s ease;
        }

        .hs26-cta-inner::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 42%;
          background: linear-gradient(105deg, transparent 0%, rgba(255, 255, 255, 0.16) 45%, transparent 100%);
          animation: hs26-sheen 4.8s ease-in-out infinite;
          pointer-events: none;
        }

        .hs26-cta:hover {
          transform: translateY(0);
          box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.28),
                      0 10px 26px rgba(0, 0, 0, 0.35);
        }

        .hs26-cta:hover .hs26-cta-inner { background: #0b0b0c; }
        .hs26-cta:active { transform: translateY(1px); }

        .hs26-cta-label {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          line-height: 1;
          white-space: nowrap;
        }

        .hs26-cta-label svg {
          width: 16px;
          height: 16px;
        }

        .hs26-cta-live {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #ff4d6a;
          animation: hs26-live 1.6s ease-in-out infinite;
          box-shadow: 0 0 8px rgba(255, 77, 106, 0.7);
          flex-shrink: 0;
        }

        /* ----- Who Attends BFA ----- */
        .hs26-attendees {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .hs26-attendees-title {
          margin: 0;
          text-align: center;
          font-size: clamp(1.6rem, 3.6vw, 2.75rem);
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #fff;
          line-height: 1.05;
        }

        .hs26-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 8px;
        }

        .hs26-slot {
          display: flex;
          perspective: 900px;
        }

        .hs26-card {
          flex: 1 1 auto;
          min-width: 0;
          backface-visibility: hidden;
          transform-style: preserve-3d;
          will-change: transform;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 58px;
          padding: 8px 10px;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);
        }

        .hs26-card img {
          display: block;
          max-height: 30px;
          max-width: 100%;
          width: auto;
          object-fit: contain;
        }

        .hs26-card--dark { background: #000; }
        .hs26-card--tall img { max-height: 42px; }

        .hs26-foren {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1px;
          line-height: 1;
          text-align: center;
          color: #231c16;
          max-width: 100%;
        }

        .hs26-foren-name {
          font-size: clamp(13px, 1.6vw, 20px);
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .hs26-foren-sub {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(7px, 0.8vw, 10px);
          line-height: 1.15;
          white-space: nowrap;
        }

        .hs26-foren-sub em { font-style: italic; margin-right: 0.2em; }

        .hs26-fallback {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: ${THEME.red};
          text-align: center;
          line-height: 1.2;
        }

        .hs26-tagline {
          margin: 0.5rem 0 0;
          text-align: center;
          font-size: clamp(1.35rem, 3vw, 2.4rem);
          font-weight: 900;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          line-height: 1.1;
        }

        .hs26-tagline span { color: ${THEME.red}; }

        @media (min-width: 640px) {
          .hs26-grid {
            grid-template-columns: repeat(7, minmax(0, 1fr));
            gap: 10px;
          }
          .hs26-card { min-height: 64px; }
          .hs26-card img { max-height: 30px; }
        }

        /* Desktop: whole hero fits one viewport; logo cards absorb the remaining height */
        @media (min-width: 1024px) {
          .hs26 {
            --hs26-card-h: clamp(44px, calc((100svh - 560px) / 4), 88px);
            min-height: 100svh;
            display: flex;
            flex-direction: column;
          }
          .hs26-info-item { padding: 9px 20px 11px; }
          .hs26-body {
            flex: 1 1 auto;
            display: flex;
            align-items: center;
            padding: 1.1rem 1.5rem 1.25rem;
          }
          .hs26-inner { gap: clamp(0.9rem, 2.2vh, 1.75rem); }
          .hs26-book { gap: 0.6rem; }
          .hs26-attendees { gap: clamp(0.55rem, 1.3vh, 1rem); }
          .hs26-attendees-title { font-size: clamp(1.4rem, 3.4vh, 2.4rem); }
          .hs26-tagline {
            margin-top: 0.2rem;
            font-size: clamp(1.15rem, 3vh, 2.1rem);
          }
          .hs26-grid { gap: clamp(8px, 1.2vh, 14px); }
          .hs26-card {
            height: var(--hs26-card-h);
            min-height: 0;
            padding: 6px 12px;
            border-radius: 12px;
          }
          .hs26-card img { max-height: calc(var(--hs26-card-h) * 0.5); }
          .hs26-card--tall img { max-height: calc(var(--hs26-card-h) * 0.72); }
        }

        @media (min-width: 1024px) and (max-height: 820px) {
          .hs26 { --hs26-card-h: clamp(34px, calc((100svh - 470px) / 4), 88px); }
          .hs26-countdown-row { padding-top: 8px !important; padding-bottom: 8px !important; }
          .hs26-digit { font-size: clamp(1.4rem, 4.6vh, 2.4rem) !important; }
          .hs26-info-item { padding: 6px 18px 8px; }
          .hs26-info-icon { width: 18px; height: 18px; }
          .hs26-body { padding: 0.75rem 1.5rem 0.9rem; }
          .hs26-eyebrow { display: none; }
          .hs26-cta { max-width: 240px; }
          .hs26-cta-inner { height: 44px; }
          .hs26-cta-label { font-size: 12.5px; letter-spacing: 0.1em; }
        }

        @media (max-width: 720px) {
          .hs26-info {
            flex-direction: column;
            max-width: 420px;
          }
          .hs26-info-item {
            justify-content: flex-start;
            padding: 10px 18px;
          }
          .hs26-info-item + .hs26-info-item {
            border-left: none;
            border-top: 1px solid #eee;
          }
          .hs26-info-main, .hs26-info-sub { white-space: normal; }
        }

        @media (max-width: 480px) {
          .hs26-body { padding: 2.25rem 0.85rem 2.75rem; }
          .hs26-inner { gap: 2rem; }
          .hs26-grid { gap: 7px; }
          .hs26-card {
            min-height: 50px;
            padding: 6px 8px;
            border-radius: 9px;
          }
          .hs26-card img { max-height: 24px; }
          .hs26-card--tall img { max-height: 34px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hs26-cta::before,
          .hs26-cta-inner::after,
          .hs26-cta-live { animation: none; }
        }
      `}</style>

      <section
        aria-label="Brit FinTech Awards 2026 — countdown, tickets and attendees"
        className="hs26 pt-[88px] md:pt-[96px]"
        style={{
          background: `linear-gradient(110deg, ${THEME.black} 0%, ${THEME.redDark} 35%, ${THEME.redDeep} 55%, ${THEME.redDark} 75%, ${THEME.black} 100%)`,
        }}
      >
        {timeLeft && (
          <div style={{ position: "relative", overflow: "hidden" }}>
            <ThemeAnimatedBg reduce={reduce} />
            <CountdownRow timeLeft={timeLeft} reduce={reduce} />
          </div>
        )}

        {eventStarted && (
          <div style={{ position: "relative", overflow: "hidden" }}>
            <ThemeAnimatedBg reduce={reduce} />
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "relative",
                zIndex: 1,
                margin: 0,
                padding: "22px 24px",
                textAlign: "center",
                fontSize: "clamp(1.3rem, 3.4vw, 2.2rem)",
                fontWeight: 900,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: THEME.white,
                lineHeight: 1.2,
              }}
            >
              Brit FinTech Awards 2026
            </motion.h2>
          </div>
        )}

        {/* Venue · date · time — single strip attached under the countdown */}
        <div className="hs26-info-wrap" style={{ background: "#0c0c0e" }}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hs26-info"
          >
            <a
              href={VENUE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hs26-info-item"
              aria-label="Open Landing FortyTwo, 122 Leadenhall Street, London EC3V 4AB in Google Maps"
            >
              <MapPin className="hs26-info-icon" strokeWidth={1.9} />
              <span className="hs26-info-copy">
                <span className="hs26-info-main">Landing FortyTwo,</span>
                <span className="hs26-info-sub">122 Leadenhall Street, London EC3V 4AB</span>
                <span className="hs26-info-sub"></span>
              </span>
            </a>
            <div className="hs26-info-item">
              <Calendar className="hs26-info-icon" strokeWidth={1.9} />
              <span className="hs26-info-copy">
                <span className="hs26-info-sub hs26-info-weekday">Friday</span>
                <span className="hs26-info-main">
                  9<sup>th</sup> October 2026
                </span>
              </span>
            </div>
            <div className="hs26-info-item">
              <Clock className="hs26-info-icon" strokeWidth={1.9} />
              <span className="hs26-info-copy">
                <span className="hs26-info-main">6:00 PM</span>
                <span className="hs26-info-sub hs26-info-weekday">Onwards</span>
              </span>
            </div>
          </motion.div>
        </div>

        <div className="hs26-body">
          <img src="/assets/svgs/download.svg" alt="" className="hs26-deco left-0 -scale-x-100" />
          <img src="/assets/svgs/download.svg" alt="" className="hs26-deco right-0" />

          <div className="hs26-inner">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="hs26-book"
            >
              <p className="hs26-eyebrow">BFA26 IS READY WELCOME THE INDUSTRY!</p>
              <NavLink to="/ticket-booking" className="hs26-cta">
                <span className="hs26-cta-inner">
                  <AnimatePresence mode="wait">
                    {ctaIndex === 0 ? (
                      <motion.span
                        key="book"
                        className="hs26-cta-label"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Ticket strokeWidth={2.4} />
                        House Full
                      </motion.span>
                    ) : (
                      <motion.span
                        key="fast"
                        className="hs26-cta-label"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <span className="hs26-cta-live" aria-hidden="true" />
                        Tickets Sold Out
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </NavLink>
            </motion.div>

            <div className="hs26-attendees">
              <motion.h2
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="hs26-attendees-title"
              >
                Who Attends BFA
              </motion.h2>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hs26-grid"
              >
                {ATTENDEE_PAGES[logoPage].map((item, index) => (
                  <div className="hs26-slot" key={index}>
                    <AnimatePresence mode="wait" initial={false}>
                      <AttendeeLogoCard
                        key={`${logoPage}-${item.name}`}
                        item={item}
                        index={index}
                        reduceMotion={reduce}
                      />
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>

              <p className="hs26-tagline">
                Will your company <span>be in the room?</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection2026;
