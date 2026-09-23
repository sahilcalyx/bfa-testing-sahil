import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Ticket } from "lucide-react";
import { NavLink } from "react-router-dom";

const VENUE_MAPS_URL = "https://maps.app.goo.gl/HTmvq2hv7HkHbqNX9";
const APP_STORE_URL =
  "https://apps.apple.com/ng/app/brit-fintech-awards/id6779879087";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.bfa.fintechapp";

const ATTENDEE_LOGOS = [
  { name: "Axcess", logo: "/assets/img/attendee-logos/axcessms.com logo13.png" },
  { name: "Bank of London", logo: "/assets/img/attendee-logos/Frame.png" },
  { name: "Chrisborough", logo: "/assets/img/attendee-logos/chrisborough.png" },
  { name: "Clear Junction", logo: "/assets/img/attendee-logos/clear-junction.png" },
  { name: "Complyport", logo: "/assets/img/attendee-logos/COMPLYPORT_Logo.png" },
  { name: "ECEX Group", logo: "/assets/img/attendee-logos/ecex.png" },
  { name: "Ecommpay", logo: "/assets/img/attendee-logos/ecommpay.png" },
  { name: "eMerchantPay", logo: "/assets/img/attendee-logos/Emarchantpay.png" },
  { name: "Fena", logo: "/assets/img/attendee-logos/fena.png" },
  { name: "GBG", logo: "/assets/img/attendee-logos/gbg.png" },
  { name: "GCC Exchange", logo: "/assets/img/attendee-logos/Group 2.png" },
  { name: "3ribe", logo: "/assets/img/discussionpanel-2026/3ribe-logo-alt.png" },
  { name: "Kani", logo: "/assets/img/attendee-logos/kani.png" },
  { name: "Leatherback", logo: "/assets/img/keynotes/leatherback-logo.png" },
  { name: "Link FX", logo: "/assets/img/attendee-logos/link-fx.png" },
  { name: "Muthoot Global", logo: "/assets/img/attendee-logos/muthoot.png" },
  { name: "Open Banking", logo: "/assets/img/discussionpanel/OBL_logotype_darkblu-Large.png" },
  { name: "Orbital", logo: "/assets/img/attendee-logos/orbital.png" },
  { name: "Payceler", logo: "/assets/img/attendee-logos/payceler.png" },
  { name: "Paysafe", logo: "/assets/img/attendee-logos/paysafe.svg" },
  { name: "Sends", logo: "/assets/img/attendee-logos/sends.png" },
  { name: "Sumsub", logo: "/assets/img/attendee-logos/sumsub 1.png" },
  { name: "Trust Payments", logo: "/assets/img/attendee-logos/trustpayments.com logo11.png" },
  { name: "University of Bristol", logo: "/assets/img/attendee-logos/Bristol.png" },
  { name: "Volume", logo: "/assets/img/attendee-logos/volume.png" },
  { name: "Thunes", logo: "/assets/img/attendee-logos/thunes-logo-dark.svg" },
];

function AttendeeLogoCard({ item }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="hero-attendee-card">
      {failed ? (
        <span className="hero-attendee-fallback">{item.name}</span>
      ) : (
        <img
          src={item.logo}
          alt={item.name}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

const InteractiveHero = () => {
  const [ctaIndex, setCtaIndex] = useState(0);

  useEffect(() => {
    const delay = ctaIndex === 0 ? 3400 : 2200;
    const id = setTimeout(() => setCtaIndex((i) => (i + 1) % 2), delay);
    return () => clearTimeout(id);
  }, [ctaIndex]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;600;700;800;900&display=swap');
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        .font-outfit {
          font-family: 'Outfit', sans-serif;
        }
        .hero-panel-slide {
          transition: all 700ms cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        
        @keyframes cta-border-spin {
          to { transform: rotate(360deg); }
        }

        @keyframes cta-sheen {
          0% { transform: translateX(-130%) skewX(-18deg); }
          100% { transform: translateX(240%) skewX(-18deg); }
        }

        @keyframes cta-live {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }

        .hero-cta {
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

        .hero-cta::before {
          content: "";
          position: absolute;
          z-index: 0;
          inset: -80%;
          background: conic-gradient(
            from 0deg,
            #7a0a18 0deg,
            #ffd700 70deg,
            #ffffff 110deg,
            #ffd700 150deg,
            #c8102e 220deg,
            #7a0a18 280deg,
            #ffd700 330deg,
            #7a0a18 360deg
          );
          animation: cta-border-spin 4.2s linear infinite;
        }

        .hero-cta-inner {
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

        .hero-cta-inner::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 42%;
          background: linear-gradient(
            105deg,
            transparent 0%,
            rgba(255, 255, 255, 0.16) 45%,
            transparent 100%
          );
          animation: cta-sheen 4.8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-cta:hover {
          transform: translateY(0);
          box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.28),
                      0 10px 26px rgba(0, 0, 0, 0.35);
        }

        .hero-cta:hover .hero-cta-inner {
          background: #0b0b0c;
        }

        .hero-cta:active {
          transform: translateY(1px);
        }

        .hero-cta-label {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          line-height: 1;
          white-space: nowrap;
        }

        .hero-cta-live {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #ff4d6a;
          animation: cta-live 1.6s ease-in-out infinite;
          box-shadow: 0 0 8px rgba(255, 77, 106, 0.7);
          flex-shrink: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-cta::before,
          .hero-cta-inner::after,
          .hero-cta-live {
            animation: none;
          }
        }

        .hero-app-download {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .hero-app-download-line {
          margin: 0;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          line-height: 1.35;
        }

        .hero-app-download-line em,
        .hero-app-download-line strong {
          font-style: normal;
          font-weight: 800;
          color: #fff;
        }

        .hero-app-row {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          justify-content: center;
          gap: 14px;
        }

        .hero-app-qr {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: 10px;
          background: #fff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
        }

        .hero-app-qr img {
          display: block;
          width: 88px;
          height: 88px;
          object-fit: contain;
        }

        .hero-app-divider {
          width: 1px;
          align-self: stretch;
          background: rgba(255, 255, 255, 0.28);
          flex-shrink: 0;
        }

        .hero-app-stores {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
          gap: 8px;
        }

        .hero-app-store {
          display: inline-flex;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
          opacity: 0.95;
        }

        .hero-app-store:hover {
          transform: translateY(-2px) scale(1.03);
          opacity: 1;
        }

        .hero-app-store:active {
          transform: translateY(0) scale(0.98);
        }

        .hero-app-store img {
          display: block;
          height: 40px;
          width: auto;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
        }

        @media (min-width: 640px) {
          .hero-app-download-line {
            font-size: 15px;
          }

          .hero-app-row {
            gap: 16px;
          }

          .hero-app-qr img {
            width: 96px;
            height: 96px;
          }

          .hero-app-stores {
            gap: 10px;
          }

          .hero-app-store img {
            height: 44px;
          }
        }

        .hero-meta {
          width: 100%;
          background: #ffffff;
          border-radius: 14px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: left;
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.28);
        }

        .hero-meta-col {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
          flex: 0 1 auto;
          min-width: 0;
          text-decoration: none;
          color: inherit;
        }

        .hero-meta-col.hero-meta-venue {
          cursor: pointer;
          border-radius: 8px;
          transition: background-color 0.2s ease;
        }

        .hero-meta-col.hero-meta-venue:hover {
          background-color: rgba(200, 16, 46, 0.06);
        }

        .hero-meta-icon {
          color: #c8102e;
          flex-shrink: 0;
        }

        .hero-meta-copy {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .hero-meta-weekday {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #111;
          line-height: 1.1;
        }

        .hero-meta-date {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #111;
          line-height: 1.2;
        }

        .hero-meta-date sup {
          font-size: 0.6em;
          top: -0.4em;
        }

        .hero-meta-line {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #222;
          line-height: 1.25;
        }

        .hero-meta-divider {
          width: 1px;
          align-self: stretch;
          background: #e4e4e4;
          margin: 0 28px;
          flex-shrink: 0;
        }

        .hero-meta--attendees {
          margin-top: 0.35rem;
          padding: 14px 16px;
        }

        .hero-meta--attendees .hero-meta-divider {
          margin: 0 16px;
        }

        .hero-meta--attendees .hero-meta-weekday {
          font-size: 12px;
        }

        .hero-meta--attendees .hero-meta-date {
          font-size: 14px;
        }

        .hero-meta--attendees .hero-meta-line {
          font-size: 12px;
        }

        @media (min-width: 1024px) {
          .hero-meta--attendees {
            margin-top: 0.5rem;
            padding: 16px 18px;
          }

          .hero-meta--attendees .hero-meta-divider {
            margin: 0 20px;
          }
        }

        @media (max-width: 520px) {
          .hero-meta {
            flex-direction: column;
            padding: 16px 18px;
            gap: 14px;
          }

          .hero-meta-col {
            justify-content: center;
            width: 100%;
          }

          .hero-meta-divider {
            width: 60%;
            height: 1px;
            margin: 0 auto;
          }

          .hero-meta--bridge {
            flex-direction: column;
          }
        }

        .hero-attendees {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: 1.25rem 1rem;
          overflow: hidden;
          /* Executive stage: deep charcoal depth + soft brand spotlight */
          background:
            radial-gradient(ellipse 85% 70% at 12% 8%, rgba(200, 16, 46, 0.28), transparent 58%),
            radial-gradient(ellipse 55% 45% at 78% 88%, rgba(200, 16, 46, 0.1), transparent 55%),
            radial-gradient(ellipse 70% 55% at 50% 42%, rgba(255, 255, 255, 0.04), transparent 62%),
            linear-gradient(180deg, #0c0c0e 0%, #070708 52%, #0e0608 100%);
        }

        /* Soft diagonal light beams (replaces square grid) */
        .hero-attendees::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.55;
          background:
            linear-gradient(
              118deg,
              transparent 0%,
              transparent 38%,
              rgba(200, 16, 46, 0.07) 46%,
              rgba(255, 255, 255, 0.03) 49%,
              rgba(200, 16, 46, 0.05) 52%,
              transparent 62%,
              transparent 100%
            ),
            linear-gradient(
              128deg,
              transparent 0%,
              transparent 52%,
              rgba(200, 16, 46, 0.05) 58%,
              transparent 68%,
              transparent 100%
            ),
            linear-gradient(
              108deg,
              transparent 0%,
              transparent 22%,
              rgba(255, 255, 255, 0.025) 28%,
              transparent 36%,
              transparent 100%
            );
          mask-image: radial-gradient(ellipse 85% 75% at 50% 45%, #000 25%, transparent 80%);
        }

        /* Edge vignette — keep focus on logos + meta */
        .hero-attendees::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background:
            radial-gradient(ellipse 95% 90% at 50% 50%, transparent 42%, rgba(0, 0, 0, 0.55) 100%);
        }

        .hero-attendees-glow {
          position: absolute;
          top: -14%;
          left: -12%;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(200, 16, 46, 0.32) 0%,
            rgba(200, 16, 46, 0.12) 42%,
            transparent 72%
          );
          filter: blur(42px);
          pointer-events: none;
          z-index: 0;
        }

        .hero-attendees-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          width: 100%;
          max-width: 560px;
          margin: 0 auto;
        }

        .hero-attendees-title {
          margin: 0;
          text-align: center;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.35rem, 3.2vw, 2rem);
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #fff;
          line-height: 1.05;
        }

        .hero-attendees-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 8px;
        }

        /* Center incomplete last row on mobile (3-col) */
        .hero-attendees-grid > .hero-attendee-card:nth-child(3n + 1):nth-last-child(2) {
          grid-column: 2;
        }

        .hero-attendee-card {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 8px 10px;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.22);
        }

        .hero-attendee-card img {
          display: block;
          max-height: 28px;
          max-width: 100%;
          width: auto;
          object-fit: contain;
        }

        .hero-attendee-fallback {
          font-family: 'Outfit', sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #c8102e;
          text-align: center;
          line-height: 1.2;
        }

        .hero-meta--bridge {
          position: relative;
          z-index: 30;
          width: calc(100% - 2rem);
          max-width: 720px;
          margin: 1rem auto 1.25rem;
          padding: 10px 14px;
          border-radius: 12px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.4);
        }

        .hero-meta--bridge .hero-meta-col {
          gap: 8px;
        }

        .hero-meta--bridge .hero-meta-copy {
          gap: 0;
        }

        .hero-meta--bridge .hero-meta-divider {
          margin: 0 12px;
          height: 36px;
        }

        .hero-meta--bridge .hero-meta-icon {
          width: 18px;
          height: 18px;
        }

        .hero-attendees-cta {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 100%;
          padding: 0.55rem 0.5rem 0.15rem;
          gap: 4px;
        }

        .hero-attendees-cta span {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          line-height: 1.08;
          font-size: clamp(1.45rem, 3.5vw, 1.85rem);
        }

        .hero-attendees-cta .cta-white {
          color: #fff;
        }

        .hero-attendees-cta .cta-red {
          color: #c8102e;
        }

        @media (min-width: 480px) {
          .hero-attendees-grid {
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 9px;
          }

          .hero-attendees-grid > .hero-attendee-card:nth-child(3n + 1):nth-last-child(2) {
            grid-column: auto;
          }

          /* Center single leftover on last row (Thunes) */
          .hero-attendees-grid > .hero-attendee-card:last-child:nth-child(5n + 1) {
            grid-column: 3;
          }

          .hero-attendee-card {
            min-height: 56px;
          }

          .hero-attendee-card img {
            max-height: 30px;
          }

          .hero-attendees-cta span {
            font-size: clamp(1.55rem, 3vw, 2rem);
          }
        }

        @media (min-width: 1024px) {
          .hero-attendees {
            justify-content: center;
            /* Match left panel: nav clearance top + meta bridge clearance bottom */
            padding: 7rem 1.25rem 6rem;
          }

          .hero-attendees-inner {
            gap: 0.7rem;
            max-width: min(540px, 100%);
            margin-top: 0;
            width: 100%;
          }

          .hero-attendees-grid {
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 8px;
          }

          .hero-attendee-card {
            min-height: 50px;
            padding: 7px 6px;
            border-radius: 10px;
          }

          .hero-attendee-card img {
            max-height: 26px;
          }

          .hero-attendees-cta {
            padding-top: 0.4rem;
            gap: 4px;
            min-height: 0;
          }

          .hero-attendees-cta span {
            font-size: clamp(1.45rem, 2.1vw, 1.9rem);
            letter-spacing: 0.05em;
            line-height: 1.08;
          }

          /* True center across both halves — no transform (avoids Framer conflict) */
          .hero-meta--bridge {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 1.35rem;
            width: min(560px, calc(100% - 3rem));
            max-width: 560px;
            margin-left: auto;
            margin-right: auto;
            padding: 8px 14px;
          }

          .hero-meta--bridge .hero-meta-divider {
            margin: 0 12px;
            height: 34px;
          }

          .hero-meta--bridge .hero-meta-weekday {
            font-size: 11px;
          }

          .hero-meta--bridge .hero-meta-date {
            font-size: 13px;
          }

          .hero-meta--bridge .hero-meta-line {
            font-size: 11px;
            line-height: 1.15;
          }
        }

        @media (min-width: 1400px) {
          .hero-attendees {
            justify-content: center;
            padding: 7.5rem 1.75rem 5.75rem;
          }

          .hero-attendees-inner {
            gap: 1rem;
            max-width: 560px;
            margin-top: 0;
          }

          .hero-attendees-grid {
            gap: 10px;
          }

          .hero-attendee-card {
            min-height: 58px;
            padding: 10px 8px;
            border-radius: 12px;
          }

          .hero-attendee-card img {
            max-height: 32px;
          }

          .hero-attendees-cta span {
            font-size: clamp(2rem, 2.4vw, 2.45rem);
            letter-spacing: 0.06em;
            line-height: 1.05;
          }

          .hero-meta--bridge {
            width: min(620px, calc(100% - 4rem));
            max-width: 620px;
            bottom: 1.5rem;
            padding: 10px 16px;
          }

          .hero-meta--bridge .hero-meta-divider {
            margin: 0 14px;
            height: 36px;
          }

          .hero-meta--bridge .hero-meta-weekday {
            font-size: 13px;
          }

          .hero-meta--bridge .hero-meta-date {
            font-size: 15px;
          }

          .hero-meta--bridge .hero-meta-line {
            font-size: 13px;
          }
        }

        @media (min-width: 1536px) {
          .hero-attendee-card {
            min-height: 64px;
          }

          .hero-attendee-card img {
            max-height: 36px;
          }

          .hero-attendees-cta span {
            font-size: clamp(2.15rem, 2.2vw, 2.65rem);
          }
        }

        /* Laptop overrides LAST so they beat the 1024+/1400+ rules above */
        @media (min-width: 1024px) and (max-width: 1399px) {
          .hero-cta {
            max-width: 240px;
          }

          .hero-cta-inner {
            height: 46px;
          }

          .hero-cta-label {
            font-size: 12.5px;
            letter-spacing: 0.1em;
          }

          .hero-app-download {
            gap: 7px;
          }

          .hero-app-download-line {
            font-size: 12.5px;
          }

          .hero-app-row {
            gap: 10px;
          }

          .hero-app-qr {
            padding: 3px;
          }

          .hero-app-qr img {
            width: 68px;
            height: 68px;
          }

          .hero-app-stores {
            gap: 6px;
          }

          .hero-app-store img {
            height: 32px;
          }

          /* Clear date/venue strip above store buttons */
          .hero-left-panel {
            padding-bottom: 9.25rem !important;
          }

          .hero-attendees {
            justify-content: center;
            padding: 5.75rem 1.35rem 7.25rem;
          }

          .hero-attendees-inner {
            gap: 0.5rem;
            max-width: min(500px, 94%);
            width: 100%;
            padding: 0;
            margin-top: 0;
          }

          .hero-attendees-title {
            font-size: clamp(1.05rem, 1.7vw, 1.3rem);
            letter-spacing: 0.07em;
          }

          .hero-attendees-grid {
            gap: 6px;
          }

          .hero-attendee-card {
            min-height: 40px;
            padding: 4px 5px;
            border-radius: 8px;
          }

          .hero-attendee-card img {
            max-height: 20px;
          }

          .hero-attendees-cta {
            padding: 0.35rem 0.25rem 0;
            gap: 2px;
            min-height: 0;
          }

          .hero-attendees-cta span {
            font-size: clamp(1.15rem, 1.85vw, 1.4rem);
            letter-spacing: 0.045em;
            line-height: 1.08;
          }

          .hero-meta--bridge {
            bottom: 0.75rem;
            width: min(480px, calc(100% - 3rem));
            max-width: 480px;
            padding: 6px 12px;
          }

          .hero-meta--bridge .hero-meta-divider {
            margin: 0 10px;
            height: 30px;
          }

          .hero-meta--bridge .hero-meta-icon {
            width: 16px;
            height: 16px;
          }

          .hero-meta--bridge .hero-meta-weekday {
            font-size: 10px;
          }

          .hero-meta--bridge .hero-meta-date {
            font-size: 12px;
          }

          .hero-meta--bridge .hero-meta-line {
            font-size: 10px;
            line-height: 1.15;
          }
        }

        @media (min-width: 1024px) and (max-height: 860px) {
          .hero-left-panel {
            padding-bottom: 8.5rem !important;
          }

          .hero-attendees {
            justify-content: center;
            padding: 5.25rem 1.15rem 6.75rem;
          }

          .hero-attendees-inner {
            gap: 0.4rem;
            max-width: min(480px, 92%);
            margin-top: 0;
          }

          .hero-attendees-title {
            font-size: 1.05rem;
          }

          .hero-attendees-grid {
            gap: 5px;
          }

          .hero-attendee-card {
            min-height: 36px;
            padding: 3px 4px;
            border-radius: 7px;
          }

          .hero-attendee-card img {
            max-height: 18px;
          }

          .hero-attendees-cta {
            padding-top: 0.25rem;
            min-height: 0;
          }

          .hero-attendees-cta span {
            font-size: 1.15rem;
            letter-spacing: 0.04em;
          }

          .hero-app-download {
            gap: 6px;
          }

          .hero-app-download-line {
            font-size: 12px;
          }

          .hero-app-qr img {
            width: 60px;
            height: 60px;
          }

          .hero-app-store img {
            height: 28px;
          }

          .hero-cta {
            max-width: 220px;
          }

          .hero-cta-inner {
            height: 42px;
          }

          .hero-cta-label {
            font-size: 12px;
          }

          .hero-meta--bridge {
            bottom: 0.55rem;
            padding: 5px 10px;
            width: min(460px, calc(100% - 2.5rem));
          }
        }
      `}</style>

      <section className="relative w-full min-h-screen lg:h-[100svh] flex flex-col lg:flex-row lg:overflow-hidden bg-black text-white font-outfit select-none">

        {/* ================= LEFT HALF: TICKET BOOKING ================= */}
        <div className="hero-left-panel relative bg-black flex flex-col justify-center overflow-hidden hero-panel-slide z-10 w-full lg:w-1/2 min-h-[50vh] lg:min-h-0 pt-28 pb-10 px-5 sm:px-6 md:p-10 lg:px-6 xl:px-12 2xl:px-16 lg:pb-[6.5rem] xl:pb-24 lg:pt-28 xl:pt-32">

          {/* Animated decorative blobs in background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Top-Left Gold Blob */}
            <motion.div
              animate={{
                opacity: [0.12, 0.22, 0.12],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-[15%] -left-[10%] w-[380px] h-[380px] rounded-full bg-gradient-to-br from-[#ffd700]/18 to-transparent blur-[90px] will-change-transform"
            />

            {/* Top-Right Red Blob */}
            <motion.div
              animate={{
                opacity: [0.25, 0.40, 0.25],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-[10%] -right-[10%] w-[380px] h-[380px] rounded-full bg-gradient-to-bl from-[#c8102e]/35 to-transparent blur-[100px] will-change-transform"
            />

            {/* Bottom-Left Red Blob */}
            <motion.div
              animate={{
                opacity: [0.25, 0.40, 0.25],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-[10%] -left-[10%] w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-[#c8102e]/35 to-transparent blur-[100px] will-change-transform"
            />

            {/* Bottom-Right Dark Red Blob */}
            <motion.div
              animate={{
                opacity: [0.12, 0.25, 0.12],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-[15%] -right-[10%] w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-[#c8102e]/20 to-transparent blur-[90px] will-change-transform"
            />

            {/* Top Left SVG on Dark BG */}
            <img
              src="/assets/svgs/download.svg"
              className="absolute top-0 left-0 h-[80%] object-cover w-[40%] opacity-[0.95] -scale-x-100 select-none pointer-events-none z-0 filter drop-shadow-[0_0_10px_rgba(200,16,46,0.6)] brightness-135"
              alt=""
            />

            {/* Bottom Right SVG on Dark BG */}
            <img
              src="/assets/svgs/download.svg"
              className="absolute bottom-0 right-0 h-[80%] object-cover w-[40%] opacity-[0.95] -scale-y-100 select-none pointer-events-none z-0 filter drop-shadow-[0_0_10px_rgba(200,16,46,0.6)] brightness-135"
              alt=""
            />
          </div>

          {/* Central content container */}
          <div className="flex-1 flex flex-col justify-center items-center text-center my-6 lg:my-0 z-10 max-w-2xl mx-auto">


            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-white/70 mb-3 select-none"
            >
              Final days to join the community
            </motion.p>

            <h1 className="leading-[0.95] tracking-tight uppercase text-white font-outfit select-none">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="block text-[2.2rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[1.85rem] xl:text-[2.55rem] 2xl:text-[3.5rem] font-black"
              >
                Secure Your
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                className="block text-[2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[1.7rem] xl:text-[2.3rem] 2xl:text-[3.2rem] font-light"
              >
                Seat At
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                className="block text-[2.8rem] sm:text-[4.4rem] md:text-[5.5rem] lg:text-[2.45rem] xl:text-[3.35rem] 2xl:text-[4.5rem] font-black text-[#c8102e]"
              >
                BFA26
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col items-center gap-1 mt-3 lg:mt-2.5 xl:mt-4 mb-1 select-none font-outfit text-center"
            >
              <span className="text-base sm:text-2xl lg:text-sm xl:text-lg 2xl:text-2xl font-black uppercase tracking-[0.22em] lg:tracking-[0.2em]">
                Awards Night Tickets
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-3 lg:mt-2.5 xl:mt-4 w-full"
            >
              <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-5 lg:gap-4 xl:gap-6">
                <NavLink
                  to="/ticket-booking"
                  className="hero-cta"
                >
                  <span className="hero-cta-inner">
                    <AnimatePresence mode="wait">
                      {ctaIndex === 0 ? (
                        <motion.span
                          key="book"
                          className="hero-cta-label"
                          initial={{ y: 16, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -16, opacity: 0 }}
                          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Ticket className="w-4 h-4" strokeWidth={2.4} />
                          Book Tickets Now
                        </motion.span>
                      ) : (
                        <motion.span
                          key="fast"
                          className="hero-cta-label"
                          initial={{ y: 16, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -16, opacity: 0 }}
                          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <span className="hero-cta-live" aria-hidden="true" />
                          Limited seats left
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </NavLink>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.65 }}
                  className="hero-app-download"
                >
                  <p className="hero-app-download-line">
                    Take <em>BFA26</em> with you — get the <strong>BFA App</strong>
                  </p>
                  <div className="hero-app-row">
                    <div className="hero-app-qr">
                      <img
                        src="/assets/img/download-app-qr.png"
                        alt="QR code to download the BFA App"
                        draggable={false}
                      />
                    </div>
                    <div className="hero-app-divider" aria-hidden="true" />
                    <div className="hero-app-stores">
                      <a
                        href={APP_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-app-store"
                        aria-label="Download the BFA App on the App Store"
                      >
                        <img
                          src="/assets/img/downloadapp-logos/app store.png"
                          alt="Download on the App Store"
                        />
                      </a>
                      <a
                        href={PLAY_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-app-store"
                        aria-label="Get the BFA App on Google Play"
                      >
                        <img
                          src="/assets/img/downloadapp-logos/play store.png"
                          alt="Get it on Google Play"
                        />
                      </a>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* ================= RIGHT HALF: WHO ATTENDS BFA ================= */}
        <div className="relative overflow-hidden hero-panel-slide z-20 w-full lg:w-1/2 min-h-[50vh] lg:h-full">
          <div className="hero-attendees">
            <div className="hero-attendees-glow" aria-hidden="true" />

            <div className="hero-attendees-inner">
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="hero-attendees-title"
              >
                Who Attends BFA
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="hero-attendees-grid"
              >
                {ATTENDEE_LOGOS.map((item) => (
                  <AttendeeLogoCard key={item.name} item={item} />
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.45 }}
                className="hero-attendees-cta"
              >
                <span className="cta-white">Will your company</span>
                <span className="cta-red">be in the room?</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Date / venue — truly centered over the left/right split */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="hero-meta hero-meta--bridge"
        >
          <div className="hero-meta-col">
            <Calendar className="hero-meta-icon w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
            <div className="hero-meta-copy">
              <span className="hero-meta-weekday">Friday</span>
              <span className="hero-meta-date">
                9<sup>th</sup> October 2026
              </span>
            </div>
          </div>

          <div className="hero-meta-divider" aria-hidden="true" />

          <a
            href={VENUE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-meta-col hero-meta-venue"
            aria-label="Open venue location in Google Maps"
          >
            <MapPin className="hero-meta-icon w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
            <div className="hero-meta-copy">
              <span className="hero-meta-line">Landing FortyTwo,</span>
              <span className="hero-meta-line">122 Leadenhall Street,</span>
              <span className="hero-meta-line">London EC3V 4AB</span>
            </div>
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default InteractiveHero;
