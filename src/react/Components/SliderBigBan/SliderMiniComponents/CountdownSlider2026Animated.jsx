import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { getUkCountdownToEvent } from "./ukEventTime";

/**
 * Animated countdown strip — hero theme (red / black / white only, no yellow).
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

const getTimeLeft = () => getUkCountdownToEvent();

const pad = (n) => String(n).padStart(2, "0");

/* ---------- Animated theme background ---------- */

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

    {/* Soft white center wash */}
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

/* ---------- Digits ---------- */

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

/* Clean hairline divider — replaces blinking colon dots */
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

/* ---------- Component ---------- */

const CountdownSlider2026Animated = () => {
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
    { value: days, label: days === 1 ? "Day" : "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Mins" },
    { value: seconds, label: "Secs" },
  ];

  return (
    <section
      aria-label="Animated countdown to Brit FinTech Awards 2026"
      className="pt-[88px] md:pt-[96px]"
      style={{
        position: "relative",
        isolation: "isolate",
        overflow: "visible",
        fontFamily: "'Outfit', 'Montserrat', system-ui, sans-serif",
        /* Red fill behind sticky header so no white gap shows through */
        background: `linear-gradient(110deg, ${THEME.black} 0%, ${THEME.redDark} 35%, ${THEME.redDeep} 55%, ${THEME.redDark} 75%, ${THEME.black} 100%)`,
      }}
    >
      {/* Animated countdown row — content clears sticky header */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <ThemeAnimatedBg reduce={reduce} />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1180,
            margin: "0 auto",
            padding: "26px 24px 26px 28px",
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
            The countdown{" "}
            <span style={{ color: THEME.white }}>is on</span>
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
                <Unit
                  value={unit.value}
                  label={unit.label}
                  reduce={reduce}
                  delay={0.1 + i * 0.08}
                />
              </React.Fragment>
            ))}
          </div>

          {/* Tagline — same structure as CountdownSlider2026 */}
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
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.5,
            }}
          >
            Recognition · Networking · Celebration
          </p>
        </motion.div>
      </div>

      {/* Attached venue stripe — curved corners, sits under the red strip */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: -2,
          position: "relative",
          zIndex: 2,
          padding: "0 16px 14px",
          background: "transparent",
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
            background: THEME.white,
            color: THEME.black,
            borderRadius: "0 0 18px 18px",
            boxShadow: "0 10px 28px rgba(200,16,46,0.15)",
            borderLeft: `2px solid ${THEME.redBright}`,
            borderRight: `2px solid ${THEME.redBright}`,
            borderBottom: `2px solid ${THEME.redBright}`,
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
            <span style={{ fontWeight: 700 }}>Landing Forty Two · London</span>
            <span style={{ color: "#8a8a8a", fontWeight: 500 }}>
              {" "}
               · 6:00 PM UK
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSlider2026Animated;
