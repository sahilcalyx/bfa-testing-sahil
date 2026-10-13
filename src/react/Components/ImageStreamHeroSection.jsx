"use client";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ImageStreamHero } from "@/components/ui/image-stream-hero";

const DESKTOP_PATH = {
  cardWidth: 18,
  cardHeight: 25,
  cardRadius: 0.45,
  birthHeight: 6,
  // Equal to cardHeight, so cards finish exactly in the trophy's plane or
  // behind it and never paint over the glass.
  exitHeight: 25,
  railBirth: -4,
  railExit: 33,
  fan: 1.6,
  turnBirth: 6,
  turnExit: 14,
  // The curve runs for the first part of the trip. After that each card holds
  // its size and slides straight out, side by side with the next one.
  hold: 0.65,
};

const MOBILE_PATH = {
  cardWidth: 22,
  cardHeight: 25,
  cardRadius: 0.5,
  birthHeight: 8,
  exitHeight: 23,
  railBirth: -4,
  railExit: 28,
  fan: 1.5,
  turnBirth: 2,
  turnExit: 6,
  hold: 0.65,
};

const CIRCUIT = "/assets/svgs/download.svg";
const CIRCUIT_GLOW =
  "drop-shadow(0 0 12px rgba(200,16,46,0.85)) brightness(1.85)";

const PORTRAIT_BACKDROP =
  "/assets/img/discussionpanel-2026/BG-demo-profile-images.jpg";

const trophy = (file, alt) => ({
  src: `/assets/img/winner-logos-26/winners-with-trophy-2026/${encodeURIComponent(file)}`,
  alt,
  fit: "contain",
  backdrop: PORTRAIT_BACKDROP,
});

// Trophy cutouts from each winner's detail hero. Winners without a portrait
// (Alona Shevtsova/Sends, Shufti Pro, ECEX, Teeparam) are left out so the
// corridor only ever shows people.
const IMAGES = [
  trophy("Fena.png", "Fena winner holding the Account-to-Account trophy"),
  trophy("Payment Innovator 2026 Neema.png", "Neema winner holding the Payment Innovator trophy"),
  trophy("Tunde.png", "Tunde Ayo Fabiyi holding the FinTech CTO trophy"),
  trophy("Visionary-Woman-in-AI-2026.png", "Daljit Young holding the Visionary Woman in AI trophy"),
  trophy("FinTech-of-the-Year-2026.png", "Emerchantpay winner holding the FinTech of the Year trophy"),
  trophy("LA-CEDRI.png", "La Cedri winner holding the global MSB of the Year trophy"),
  trophy("Leftover.png", "Leftover Currency winner holding the MSB Leader trophy"),
  trophy("Pay-Out-Innovator-2026.png", "Invictus winner holding the Pay-Out Innovator trophy"),
  trophy("Cross-Border Pay-Out-Disruptor-of-the-Year.png", "Disbuz winner holding the Cross-Border Pay-Out Disruptor trophy"),
  trophy("B-A-A-S-Innovator-2026.png", "Foren winner holding the BaaS Innovator trophy"),
  trophy("Anti-Fraud-Innovator.png", "GBG winner holding the Anti-Fraud Innovator trophy"),
  trophy("Redsea.png", "Red Sea Money Transfer winner holding the Remittance Innovator trophy"),
  trophy("Payment-Acquirer-2026.png", "DECTA winner holding the Payment Acquirer trophy"),
  trophy("Startup-of-the-Year-2026.png", "3ribe winner holding the Startup of the Year trophy"),
  trophy("Payment Gateway 2026.png", "TrustUK Payments winner holding the Payment Gateway trophy"),
  trophy("Kambal.png", "Kmbal winner holding the Compliance Innovator trophy"),
  trophy("Myremit.png", "Myremit winner holding the Best in Customer Service trophy"),
  trophy("Tasapay.png", "Tassa Pay winner holding the MSB Disruptor trophy"),
  trophy("MD.png", "Mercury Danati winner holding the MSB Store of the Year trophy"),
  trophy("TigrisPay.png", "Tigris Pay winner holding the MSB App of the Year trophy"),
  trophy("Starzz-buz.png", "Starrz Money winner holding the MSB Community Champion trophy"),
  trophy("QF.png", "QF Remit winner holding the MSB Rising Star trophy"),
];

export default function ImageStreamHeroSection() {
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = () => setNarrow(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section aria-label="Brit Fintech Awards 2026 winners">
      <ImageStreamHero
        images={IMAGES}
        cards={narrow ? 6 : 9}
        speed={20}
        axis={narrow ? 46 : 55}
        path={narrow ? MOBILE_PATH : DESKTOP_PATH}
        cardClassName="bg-[#141418] ring-1 ring-inset ring-white/10"
        focal={{
          src: "/assets/img/winner-logos-26/bfa-trophy-2026.png",
          alt: "Brit Fintech Awards trophy",
          height: narrow ? 37 : 41,
        }}
        edgeFade={narrow ? 9 : 0}
        className="isolate h-[600px] w-full bg-[#070709] sm:h-[760px] xl:h-[880px]"
      >
        {/* Circuit artwork background (sits behind the card corridor) */}
        <img
          src={CIRCUIT}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-[-1] h-full w-[48%] -scale-x-100 object-cover opacity-90"
          style={{ filter: CIRCUIT_GLOW }}
        />
        <img
          src={CIRCUIT}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-[-1] h-full w-[48%] object-cover object-right opacity-90"
          style={{ filter: CIRCUIT_GLOW }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,7,9,0.9) 0%, rgba(7,7,9,0.28) 16%, rgba(7,7,9,0) 38%, rgba(7,7,9,0) 68%, rgba(7,7,9,0.45) 86%, rgba(7,7,9,0.92) 100%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-between px-5 pb-8 pt-8 text-center sm:px-6 sm:pb-10 sm:pt-12 xl:pt-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#c8102e] sm:mb-4">
              Award winners 2026
            </p>
            <h2 className="text-balance text-[1.85rem] font-medium leading-[1.05] tracking-tight text-white sm:text-5xl">
            Excellence recognised. 
              <br />
              Achievement celebrated.
            </h2>
          </div>
          <div
            className="flex flex-col items-center"
            style={{ gap: narrow ? 14 : 10 }}
          >
            <p
              className="max-w-md text-balance text-sm leading-relaxed text-white/70"
              style={{ marginBottom: 0 }}
            >
             Celebrating the innovators and businesses setting new benchmarks across FinTech, payments and MSBs.
            </p>
            <NavLink to="/award-winners-2026" className="btn-pro-1 inline-block no-underline">
              <span> Meet BFA26 Winners</span>
            </NavLink>
          </div>
        </div>
      </ImageStreamHero>
    </section>
  );
}
