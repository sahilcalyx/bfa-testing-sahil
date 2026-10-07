import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { getUkCountdownToEvent } from "./ukEventTime";

/**
 * Minimal countdown strip — Brit FinTech Awards 2026
 * Quiet contrast band under the dark hero: white surface, black type, brand red accent.
 * Target: Fri 9 Oct 2026, 18:00 Europe/London (real UK time).
 */

const RED = "#c8102e";

const getTimeLeft = () => getUkCountdownToEvent();

const pad = (n) => String(n).padStart(2, "0");

/* ---------- Digit ---------- */

const Digit = ({ value, reduce }) => {
  const text = pad(value);
  return (
    <span
      className="relative inline-block overflow-hidden text-center tabular-nums"
      style={{ minWidth: "2ch", height: "1.1em", lineHeight: 1 }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={text}
          initial={reduce ? false : { y: "55%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={reduce ? undefined : { y: "-55%", opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {text}
        </motion.span>
      </AnimatePresence>
      <span style={{ visibility: "hidden" }}>{text}</span>
    </span>
  );
};

const Unit = ({ value, label, accent, reduce }) => (
  <div
    className="flex flex-col items-center"
    style={{ minWidth: "3.75rem" }}
  >
    <span
      style={{
        fontFamily: "'Outfit', 'Montserrat', system-ui, sans-serif",
        fontSize: "clamp(1.75rem, 4.2vw, 2.75rem)",
        fontWeight: 700,
        letterSpacing: "-0.03em",
        color: accent ? RED : "#111111",
        lineHeight: 1,
      }}
    >
      <Digit value={value} reduce={reduce} />
    </span>
    <span
      style={{
        marginTop: 6,
        fontFamily: "'Outfit', system-ui, sans-serif",
        fontSize: "0.625rem",
        fontWeight: 500,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#8a8a8a",
      }}
    >
      {label}
    </span>
  </div>
);

const Divider = () => (
  <span
    aria-hidden
    style={{
      alignSelf: "center",
      width: 1,
      height: "2.25rem",
      marginBottom: "1.1rem",
      background: "rgba(0,0,0,0.1)",
    }}
  />
);

/* ---------- Component ---------- */

const CountdownSlider2026 = () => {
  const reduce = useReducedMotion();
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const tick = () => {
      const next = getTimeLeft();
      setTimeLeft(next);
      return next;
    };
    if (!tick()) return undefined;
    const id = setInterval(() => {
      if (!tick()) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (!timeLeft) return null;

  const { days, hours, minutes, seconds } = timeLeft;
  const units = [
    { value: days, label: days === 1 ? "Day" : "Days", accent: true },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Mins" },
    { value: seconds, label: "Secs" },
  ];

  return (
    <section
      aria-label="Countdown to Brit FinTech Awards 2026"
      style={{
        position: "relative",
        isolation: "isolate",
        overflow: "visible",
        fontFamily: "'Outfit', 'Montserrat', system-ui, sans-serif",
      }}
    >
      {/* Lead line — white band only */}
      <div
        style={{
          background: "#ffffff",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          padding: "18px 24px",
        }}
      >
        <p
          style={{
            margin: 0,
            maxWidth: 780,
            marginInline: "auto",
            textAlign: "center",
            fontSize: "clamp(1.15rem, 2.6vw, 1.55rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#111111",
            lineHeight: 1.35,
          }}
        >
          Join us for an unforgettable evening celebrating the FinTech &amp; MSB
          industry.
        </p>
      </div>

      {/* Countdown row */}
      <div
        style={{
          position: "relative",
          background: "#ffffff",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
      {/* Left brand accent — the only continuous color mark */}
      <motion.div
        aria-hidden
        initial={reduce ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          background: RED,
          transformOrigin: "top",
        }}
      />

      {/* Soft red wash — barely there, slowly drifts */}
      {!reduce && (
        <motion.div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 50% 120% at 70% 50%, ${RED}0d 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1120,
          margin: "0 auto",
          padding: "22px 24px 22px 28px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px 28px",
        }}
      >
        {/* Headline */}
        <h3
          style={{
            margin: 0,
            flex: "1 1 200px",
            minWidth: 0,
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#111111",
            lineHeight: 1.2,
          }}
        >
          The countdown{" "}
          <span style={{ color: RED }}>is on</span>
        </h3>

        {/* Timer */}
        <div
          role="timer"
          aria-live="polite"
          aria-atomic="true"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "clamp(8px, 2vw, 18px)",
            flex: "0 1 auto",
          }}
        >
          {units.map((unit, i) => (
            <React.Fragment key={unit.label}>
              {i > 0 && <Divider />}
              <Unit
                value={unit.value}
                label={unit.label}
                accent={unit.accent}
                reduce={reduce}
              />
            </React.Fragment>
          ))}
        </div>

        {/* Tagline */}
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
            color: "#6b6b6b",
            lineHeight: 1.45,
          }}
        >
          Big conversations
          <span style={{ margin: "0 8px", color: "rgba(0,0,0,0.2)" }} aria-hidden>
            |
          </span>
          Industry leaders
          <span style={{ margin: "0 8px", color: "rgba(0,0,0,0.2)" }} aria-hidden>
            |
          </span>
          Celebrated innovation
        </p>

        {/* Mobile tagline */}
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
            color: "#6b6b6b",
            lineHeight: 1.5,
          }}
        >
          Big conversations · Industry leaders · Celebrated innovation
        </p>
      </motion.div>
      </div>

      {/* Attached venue stripe — curved corners under the countdown strip */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: -1,
          position: "relative",
          zIndex: 2,
          padding: "0 16px 14px",
          background: "#ffffff",
        }}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "100%",
            padding: "12px 28px 14px",
            background: "#ffffff",
            color: "#111111",
            borderRadius: "0 0 18px 18px",
            boxShadow: "0 10px 24px rgba(200,16,46,0.12)",
            borderLeft: `2px solid ${RED}`,
            borderRight: `2px solid ${RED}`,
            borderBottom: `2px solid ${RED}`,
            borderTop: "none",
          }}
        >
          <p
            style={{
              margin: 0,
              textAlign: "center",
              fontSize: "clamp(0.82rem, 1.6vw, 0.95rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#1a1a1a",
              lineHeight: 1.35,
            }}
          >
            See you at{" "}
            <span style={{ fontWeight: 700 }}>Landing Forty Two</span>
            <span style={{ color: "#8a8a8a", fontWeight: 500 }}>
              {" "}
              · London · 6:00 PM UK
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSlider2026;
