import React, { useEffect, useRef } from "react";
import { createTimeline, scrambleText, stagger } from "animejs";
import { buildWinnerRows, THEME } from "./winnersData";

/**
 * Anime.js scramble-text sequence (runs once on mount).
 * Adapted from the official scrambleText CodePen demo for BFA winners.
 */
const ScrambleWinnersOverlay = ({ onComplete, reducedMotion = false }) => {
  const rootRef = useRef(null);
  const fitRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  const reducedMotionRef = useRef(reducedMotion);
  const rows = buildWinnerRows();

  onCompleteRef.current = onComplete;
  reducedMotionRef.current = reducedMotion;

  useEffect(() => {
    const root = rootRef.current;
    const fit = fitRef.current;
    if (!root || !fit) return undefined;

    const fitToView = () => {
      fit.style.transform = "none";
      const width = fit.scrollWidth;
      const height = fit.scrollHeight;
      const scale = Math.min(
        1,
        (root.clientWidth * 0.92) / Math.max(width, 1),
        (root.clientHeight * 0.84) / Math.max(height, 1)
      );
      fit.style.transform = `scale(${Number.isFinite(scale) ? scale : 1})`;
    };

    fitToView();
    const raf = window.requestAnimationFrame(fitToView);
    window.addEventListener("resize", fitToView);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", fitToView);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const slide = root.querySelector(".wb26-scramble__slide");
    const center = root.querySelector(".wb26-scramble__center");
    const subtitle = root.querySelector(".wb26-scramble__subtitle");
    const others = root.querySelectorAll(
      ".wb26-scramble__cell:not(.wb26-scramble__center)"
    );
    let finished = false;
    let safetyId = 0;
    const finish = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(safetyId);
      onCompleteRef.current?.();
    };
    safetyId = window.setTimeout(finish, 7000);

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
      return () => {
        window.clearTimeout(t);
        window.clearTimeout(safetyId);
      };
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
        scale: { from: 2.6, to: 1, duration: 1000, ease: "out(3)" },
        color: { from: THEME.goldBright, to: THEME.white },
        innerHTML: scrambleText({
          override: " ",
          ease: "inQuad",
          duration: 1000,
          from: "center",
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
          duration: 700,
          revealDelay: 120,
          perturbation: 0.15,
        }),
      },
      stagger([80, 520], {
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
          duration: 480,
        }),
      },
      "<+=720"
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
          duration: 640,
          perturbation: 0.12,
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
            duration: 640,
            ease: "inOut",
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
      window.clearTimeout(safetyId);
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
      <div className="wb26-scramble__fit" ref={fitRef}>
      <div className="wb26__slide wb26-scramble__slide">
        {rows.map((row, rowIndex) => {
          const centerIndex = row.items.findIndex(
            (item) => typeof item === "object" && item.center
          );
          const renderItem = (item, itemIndex) => {
              const isCenter = typeof item === "object" && item.center;
              const rawLabel = isCenter ? item.text : item;
              // anime.js parses text like "3ribe" as number + unit; a zero-width prefix keeps it a string
              const label = /^\d/.test(rawLabel) ? `\u200B${rawLabel}` : rawLabel;
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
          };

          if (centerIndex === -1) {
            return (
              <div className="wb26__row" key={`row-${rowIndex}`}>
                {row.items.map(renderItem)}
              </div>
            );
          }

          return (
            <div className="wb26__row wb26__row--center" key={`row-${rowIndex}`}>
              <div className="wb26__row-side wb26__row-side--left">
                {row.items.slice(0, centerIndex).map(renderItem)}
              </div>
              {renderItem(row.items[centerIndex], centerIndex)}
              <div className="wb26__row-side wb26__row-side--right">
                {row.items
                  .slice(centerIndex + 1)
                  .map((item, i) => renderItem(item, centerIndex + 1 + i))}
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default ScrambleWinnersOverlay;
