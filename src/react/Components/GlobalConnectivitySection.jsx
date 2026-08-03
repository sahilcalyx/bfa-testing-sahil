"use client";

import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import "./GlobalConnectivitySection.css";

gsap.registerPlugin(useGSAP, CustomEase, SplitText);

const ROWS = [
  { id: "nominate", text: "NOMINATE" },
  { id: "network", text: "NETWORK" },
  { id: "celebrate", text: "CELEBRATE" },
];

const FLOAT_WORDS = [
  "BFA26",
  "FOUNDERS",
  "LEADERS",
  "KEYNOTES",
  "AGENDA",
  "CONNECT",
  "MEETINGS",
  "TICKETS",
  "LIVE",
  "AWARDS",
  "LONDON",
  "NOMINATE",
  "FINTECH",
  "EXCELLENCE",
];

const APP_STORE_URL =
  "https://apps.apple.com/ng/app/brit-fintech-awards/id6779879087";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.bfa.fintechapp";

const GlobalConnectivitySection = () => {
  const rootRef = useRef(null);
  const overlayRef = useRef(null);
  const kineticRef = useRef(null);
  const playedRef = useRef(false);
  const [settled, setSettled] = useState(false);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return undefined;

      try {
        CustomEase.create("bfaEase", "0.86, 0, 0.07, 1");
      } catch {
        // already registered
      }

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const overlay = overlayRef.current;
      const kineticType = kineticRef.current;
      const layout = root.querySelector(".bfa-app__inner");
      const floats = root.querySelectorAll(".bfa-app__float");
      const typeLines = root.querySelectorAll(".bfa-app__type-line");
      const rows = root.querySelectorAll(".bfa-app__row");

      const splits = [];
      rows.forEach((row) => {
        const content = row.querySelector(".bfa-app__word");
        if (!content) return;
        const split = new SplitText(content, {
          type: "chars",
          charsClass: "char",
          reduceWhiteSpace: false,
        });
        splits.push(split);
        content.style.visibility = "visible";
        split.chars.forEach((char, i) => {
          const text = char.textContent || "";
          if (!text) return;
          char.textContent = "";
          const inner = document.createElement("span");
          inner.className = "char-inner";
          inner.textContent = text;
          char.appendChild(inner);
          char.style.setProperty("--char-index", String(i));
        });
      });

      gsap.set(layout, { opacity: 0, y: 24, pointerEvents: "none" });
      gsap.set(floats, { opacity: 0 });
      gsap.set(kineticType, {
        display: "grid",
        opacity: 0,
        scale: 1,
        rotation: 0,
      });

      const revealLayout = () => {
        const tl = gsap.timeline({
          onComplete: () => {
            setSettled(true);
            if (overlay) {
              overlay.style.pointerEvents = "none";
              overlay.style.visibility = "hidden";
            }
          },
        });

        tl.to(overlay, { opacity: 0, duration: 0.8, ease: "bfaEase" }, 0);
        tl.to(
          kineticType,
          { opacity: 0, scale: 0.9, duration: 0.45, ease: "bfaEase" },
          0
        );
        tl.to(
          layout,
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: "bfaEase",
            pointerEvents: "auto",
          },
          0.3
        );
      };

      const playOnce = () => {
        if (playedRef.current) return;
        playedRef.current = true;

        if (reducedMotion) {
          gsap.set(overlay, { opacity: 0, visibility: "hidden" });
          gsap.set(layout, { opacity: 1, y: 0, pointerEvents: "auto" });
          setSettled(true);
          return;
        }

        const allChars = splits.flatMap((s) => s.chars);
        const allInners = root.querySelectorAll(".char-inner");

        gsap.set(allChars, { opacity: 0, filter: "blur(14px)" });
        gsap.set(allInners, { scale: 0.88, transformOrigin: "center center" });

        const master = gsap.timeline({ onComplete: revealLayout });

        master.to(allChars, {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.7,
          stagger: 0.03,
          ease: "bfaEase",
        });

        master.to(
          floats,
          {
            opacity: 0.85,
            duration: 0.55,
            stagger: 0.035,
            ease: "bfaEase",
          },
          0.25
        );

        master.to(
          allInners,
          {
            scale: 1,
            duration: 0.7,
            stagger: 0.02,
            ease: "bfaEase",
          },
          0.85
        );

        typeLines.forEach((line) => {
          line.textContent =
            "BRIT FINTECH AWARDS 2026 • OFFICIAL APP • NOMINATE • NETWORK • CELEBRATE";
        });

        master.set(
          kineticType,
          { opacity: 1, visibility: "visible", display: "grid" },
          1.35
        );

        master.to(
          kineticType,
          {
            scale: 2.35,
            rotation: -90,
            duration: 1.3,
            ease: "bfaEase",
          },
          1.35
        );

        master.to(
          typeLines,
          {
            keyframes: [
              { opacity: 0.85, duration: 0.5, ease: "bfaEase" },
              { opacity: 0, duration: 0.75, ease: "bfaEase" },
            ],
            stagger: 0.04,
          },
          1.35
        );

        master.to({}, { duration: 0.35 });
      };

      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            playOnce();
            io.disconnect();
          }
        },
        { threshold: 0.28 }
      );
      io.observe(root);

      return () => {
        io.disconnect();
        splits.forEach((s) => s?.revert?.());
      };
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className={`bfa-app${settled ? " is-settled" : ""}`}
      aria-label="Brit FinTech Awards App"
    >
      <div className="bfa-app__watermark" aria-hidden="true">
        <span>BFA26</span>
        <span>NETWORK</span>
        <span>CELEBRATE</span>
      </div>
      <div className="bfa-app__glow" aria-hidden="true" />

      {/* Kinetic text animation overlay */}
      <div className="bfa-app__overlay" ref={overlayRef} aria-hidden="true">
        <div className="bfa-app__floats">
          {FLOAT_WORDS.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="bfa-app__float"
              style={{
                top: `${7 + ((i * 13) % 80)}%`,
                left: i % 2 === 0 ? `${3 + (i % 5) * 7}%` : "auto",
                right: i % 2 === 1 ? `${3 + (i % 4) * 8}%` : "auto",
              }}
            >
              {word}
            </span>
          ))}
        </div>

        <div className="bfa-app__kinetic">
          {ROWS.map((row) => (
            <div key={row.id} className="bfa-app__row" data-row-id={row.id}>
              <div className="bfa-app__word" data-text={row.text}>
                {row.text}
              </div>
            </div>
          ))}
        </div>

        <div className="bfa-app__type" ref={kineticRef}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`bfa-app__type-line ${i % 2 === 0 ? "odd" : "even"}`}
            >
              BRIT FINTECH AWARDS 2026 • OFFICIAL APP • NOMINATE • NETWORK • CELEBRATE
            </div>
          ))}
        </div>
      </div>

      {/* Two-column product layout */}
      <div className="bfa-app__inner">
        <div className="bfa-app__copy">
          <span className="bfa-app__badge">BFA26 Official Mobile App</span>

          <h2 className="bfa-app__title">
            The Official Brit FinTech Awards <span>App</span>
          </h2>

          <p className="bfa-app__sub">
            Your essential companion for Brit FinTech Awards 2026 in London—submit
            nominations, network with leading fintech founders, schedule 1-on-1
            meetings, access live keynote schedules, and celebrate industry excellence.
          </p>

          <div className="bfa-app__actions">
            <NavLink to="/download-app" className="bfa-app__cta">
              Get Started
              <ArrowRight size={15} />
            </NavLink>
          </div>

          <div className="bfa-app__chips">
            <span className="bfa-app__chip">Nominate Fintechs</span>
            <span className="bfa-app__chip">1-on-1 Networking</span>
            <span className="bfa-app__chip">Live Event Agenda</span>
            <span className="bfa-app__chip">Celebrate Winners</span>
          </div>

          <div className="bfa-app__download">
            <div className="bfa-app__qr">
              <p className="bfa-app__qr-label">Scan to Download</p>
              <div className="bfa-app__qr-box">
                <img
                  src="/assets/img/download-app-qr.png"
                  alt="QR code to download the BFA App"
                />
              </div>
            </div>

            <div className="bfa-app__stores">
              <a
                href={APP_STORE_URL}
                className="bfa-app__store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                />
              </a>
              <a
                href={PLAY_STORE_URL}
                className="bfa-app__store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="bfa-app__phone">
          <div className="bfa-app__phone-glow" aria-hidden="true" />
          <img
            src="/assets/img/download-app-hero.png"
            alt="Brit FinTech Awards App mockup"
            className="bfa-app__phone-img"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalConnectivitySection;
