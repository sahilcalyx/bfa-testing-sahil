import React, { useEffect, useRef } from "react";
import { createTimeline, scrambleText, stagger } from "animejs";
import { buildWinnerRows, THEME } from "./winnersData";

/**
 * Anime.js scramble-text sequence (runs once on mount).
 * Adapted from the official scrambleText CodePen demo for BFA winners.
 */
const ScrambleWinnersOverlay = ({ onComplete, reducedMotion = false }) => {
  const rootRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  const reducedMotionRef = useRef(reducedMotion);
  const rows = buildWinnerRows();

  onCompleteRef.current = onComplete;
  reducedMotionRef.current = reducedMotion;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const slide = root.querySelector(".wb26-scramble__slide");
    const center = root.querySelector(".wb26-scramble__center");
    const subtitle = root.querySelector(".wb26-scramble__subtitle");
    const others = root.querySelectorAll(
      ".wb26-scramble__cell:not(.wb26-scramble__center)"
    );
    const finish = () => onCompleteRef.current?.();

    if (reducedMotionRef.current) {
      if (center) {
        center.textContent = "CONGRATULATIONS";
        center.style.color = THEME.white;
        center.style.transform = "scale(1)";
      }
      if (subtitle) subtitle.textContent = "TO ALL WINNERS 2026";
      others.forEach((el) => {
        el.style.opacity = "0";
      });
      if (slide) slide.style.opacity = "1";
      const t = window.setTimeout(finish, 400);
      return () => window.clearTimeout(t);
    }

    const tl = createTimeline({
      defaults: { ease: "inOut(3)" },
      onComplete: finish,
    });

    // 1) Reveal the grid
    tl.add(slide, {
      opacity: { to: 1, duration: 280, ease: "linear" },
      scale: [{ from: 0.78, to: 1, duration: 1400, ease: "inOut(3.5)" }],
    });

    // 2) Center scramble pop
    tl.add(
      center,
      {
        scale: { from: 2.6, to: 1, duration: 900, ease: "out(3)" },
        color: { from: THEME.goldBright, to: THEME.white },
        innerHTML: scrambleText({
          override: " ",
          ease: "inQuad",
          duration: 520,
          from: "center",
          cursor: "░▒▓█",
        }),
      },
      "<<"
    );

    // 3) Surrounding company names scramble in (staggered from center)
    tl.add(
      others,
      {
        scale: { from: 0.72, to: 1, duration: 1400 },
        color: { to: THEME.gold },
        innerHTML: scrambleText({
          override: " ",
          from: "center",
          duration: 1200,
          revealDelay: 400,
          cursor: "░▒▓",
          perturbation: 0.28,
        }),
      },
      stagger([400, 1800], {
        grid: true,
        from: "center",
        ease: "out(3)",
        start: "<<",
      })
    );

    // 4) Fade surrounding names out via reverse scramble
    tl.add(
      others,
      {
        opacity: { to: 0.15, duration: 700 },
        innerHTML: scrambleText({
          text: "",
          override: false,
          from: "center",
          ease: "outQuad",
          reversed: true,
          duration: 720,
          cursor: "░▒▓",
        }),
      },
      "<+=1180"
    );

    // 5) Center becomes CONGRATULATIONS
    tl.add(
      center,
      {
        scale: 1.35,
        color: { to: THEME.crimson },
        ease: "inOutExpo",
        duration: 1200,
        innerHTML: scrambleText({
          text: "CONGRATULATIONS",
          ease: "inQuad",
          override: false,
          from: "center",
          duration: 900,
          perturbation: 0.22,
          cursor: "░▒▓█",
        }),
      },
      "<<"
    );

    // 6) Subtitle appears below CONGRATULATIONS
    if (subtitle) {
      tl.add(
        subtitle,
        {
          opacity: { from: 0, to: 1, duration: 400, ease: "linear" },
          innerHTML: scrambleText({
            text: "TO ALL WINNERS 2026",
            override: " ",
            from: "center",
            duration: 900,
            ease: "inOut",
            cursor: "░▒▓",
          }),
        },
        "<<"
      );
    }

    // 7) Soft exit before image reveal
    tl.add(
      subtitle ? [center, subtitle] : center,
      {
        opacity: { to: 0, duration: 450, ease: "inOutQuad" },
        scale: { to: 0.94, duration: 450 },
        innerHTML: scrambleText({
          text: "",
          override: false,
          from: "random",
          reversed: true,
          duration: 420,
          perturbation: 0.4,
        }),
      },
      "<+=500"
    );

    tl.add(
      slide,
      {
        opacity: { to: 0, duration: 320, ease: "linear" },
      },
      "<"
    );

    tl.init();

    return () => {
      try {
        tl.pause();
        if (typeof tl.revert === "function") tl.revert();
      } catch {
        /* ignore teardown errors */
      }
    };
  }, []);

  return (
    <div className="wb26-scramble" ref={rootRef} aria-hidden="true">
      <div className="wb26__slide wb26-scramble__slide">
        {rows.map((row, rowIndex) => (
          <div className="wb26__row" key={`row-${rowIndex}`}>
            {row.items.map((item, itemIndex) => {
              const isCenter = typeof item === "object" && item.center;
              const label = isCenter ? item.text : item;
              const tone = (rowIndex + itemIndex) % 6;

              if (isCenter) {
                return (
                  <div
                    className="wb26-scramble__center-wrap"
                    key={`${rowIndex}-${itemIndex}-${label}`}
                  >
                    <p className="wb26__cell wb26-scramble__cell wb26__cell--center wb26-scramble__center">
                      {label}
                    </p>
                    <p className="wb26-scramble__subtitle" />
                  </div>
                );
              }

              return (
                <p
                  key={`${rowIndex}-${itemIndex}-${label}`}
                  className="wb26__cell wb26-scramble__cell"
                  data-tone={tone}
                >
                  {label}
                </p>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrambleWinnersOverlay;
