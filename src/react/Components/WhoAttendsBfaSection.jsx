import React, { useState } from "react";

const ATTENDEE_CATEGORIES = [
  {
    category: "Banking",
    subtitle: "Banks, FX, treasury and infrastructure leaders",
    items: [
      { name: "IFX Payments", logo: "/assets/img/attendee-logos/IFX.svg" },
      { name: "Clear Junction", logo: "/assets/img/attendee-logos/clear-junction.png" },
      { name: "Leatherback", logo: "/assets/img/keynotes/leatherback-logo.png" },
      { name: "Grants Payments", logo: "/assets/img/attendee-logos/Grants-Payment.png" },
      { name: "Orbital", logo: "/assets/img/attendee-logos/orbital.png" },
    ],
  },
  {
    category: "Open Banking",
    subtitle: "API-first innovators and open finance enablers",
    items: [
      { name: "Volume", logo: "/assets/img/attendee-logos/volume.png" },
      { name: "Fena", logo: "/assets/img/attendee-logos/fena.png" },
      { name: "Yapily", logo: "/assets/img/attendee-logos/yapily.com logo49.png" },
      { name: "Open Banking", logo: "/assets/img/discussionpanel/OBL_logotype_darkblu-Large.png" },
    ],
  },
  {
    category: "Payments",
    subtitle: "Processors, gateways, issuing and acquiring players",
    items: [
      { name: "Sends", logo: "/assets/img/attendee-logos/sends.png" },
      { name: "Payceler", logo: "/assets/img/attendee-logos/payceler.png" },
      { name: "Kani Payments", logo: "/assets/img/attendee-logos/kani.png" },
      { name: "Ecommpay", logo: "/assets/img/attendee-logos/ecommpay.png" },
      { name: "Paysafe", logo: "/assets/img/attendee-logos/paysafe.svg" },
    ],
  },
  {
    category: "Card Acquirers",
    subtitle: "Merchant acquiring and card payment specialists",
    items: [
      { name: "Trust Payments", logo: "/assets/img/attendee-logos/trustpayments.com logo11.png" },
      { name: "eMerchantPay", logo: "/assets/img/attendee-logos/Emarchantpay.png" },
      { name: "Axcess Merchant Services", logo: "/assets/img/attendee-logos/axcessms.com logo13.png" },
    ],
  },
  {
    category: "Payout Companies",
    subtitle: "Cross-border payout and remittance partners",
    items: [
      { name: "GCC Exchange", logo: "/assets/img/attendee-logos/Group 2.png" },
      { name: "Chrisborough Group", logo: "/assets/img/attendee-logos/chrisborough.png" },
    ],
  },
  {
    category: "Identity Verification",
    subtitle: "KYC, AML and digital identity solutions",
    items: [
      { name: "Sumsub", logo: "/assets/img/attendee-logos/sumsub 1.png" },
      { name: "GBG", logo: "/assets/img/attendee-logos/gbg.png" },
    ],
  },
  {
    category: "Others",
    subtitle: "Industry partners shaping the wider ecosystem",
    items: [
      { name: "Muthoot Finance", logo: "/assets/img/attendee-logos/muthoot.png" },
      { name: "Link FX", logo: "/assets/img/attendee-logos/link-fx.png" },
      { name: "ECEX Group", logo: "/assets/img/attendee-logos/ecex.png" },
    ],
  },
];

function LogoCard({ item }) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !item.logo || failed;

  return (
    <div className="flex h-[76px] sm:h-[84px] w-[152px] sm:w-[172px] shrink-0 items-center justify-center rounded-2xl bg-white px-4 ring-1 ring-zinc-200/80 shadow-[0_6px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:ring-[#c8102e]/25 hover:shadow-[0_12px_28px_rgba(200,16,46,0.10)]">
      {showPlaceholder ? (
        <span className="text-[11px] font-bold uppercase tracking-wide text-[#c8102e] text-center leading-tight">
          {item.name}
        </span>
      ) : (
        <img
          src={item.logo}
          alt={item.name}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="max-h-[42px] sm:max-h-[48px] w-auto max-w-[132px] object-contain"
        />
      )}
    </div>
  );
}

function CategoryDivider() {
  return (
    <div aria-hidden="true" className="flex items-center gap-3 py-1">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c8102e]/55 to-[#c8102e]/80" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c8102e]/55 to-[#c8102e]/80" />
    </div>
  );
}

function CategoryRow({ category, subtitle, items, fromLeft = true }) {
  return (
    <div
      className={`flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12 py-9 md:py-11 ${
        fromLeft ? "" : "lg:flex-row-reverse"
      }`}
    >
      <div
        className={`shrink-0 lg:w-[250px] xl:w-[290px] ${
          fromLeft ? "text-left" : "text-left lg:text-right"
        }`}
      >
        <h3 className="m-0 text-[1.55rem] sm:text-[1.8rem] md:text-[2rem] font-black uppercase tracking-[0.04em] leading-[1.1] text-[#c8102e]">
          {category}
        </h3>
        <p className="mt-3 mb-0 text-sm text-zinc-500 font-medium leading-relaxed max-w-[260px] lg:max-w-none">
          {subtitle}
        </p>
      </div>

      <div
        aria-hidden="true"
        className="hidden lg:block shrink-0 w-px self-stretch min-h-[88px] bg-gradient-to-b from-transparent via-zinc-200 to-transparent"
      />

      <div className="min-w-0 flex-1">
        <div
          className={`flex flex-wrap gap-3.5 sm:gap-4 ${
            fromLeft ? "justify-start" : "justify-start lg:justify-end"
          }`}
        >
          {items.map((item) => (
            <LogoCard key={`${category}-${item.name}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

const WhoAttendsBfaSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-14">
          <p className="m-0 text-xs font-bold uppercase tracking-[0.28em] text-[#c8102e]/80">
            Industry Network
          </p>
          <h2 className="mt-3 mb-0 text-3xl sm:text-4xl md:text-[2.65rem] font-black uppercase tracking-tight text-[#c8102e]">
            Who Attends BFA?
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-14 rounded-full bg-[#c8102e]" />
          <p className="mx-auto mt-5 mb-0 max-w-2xl text-[15px] sm:text-base text-zinc-600 font-medium leading-relaxed">
            Every year, BFA brings senior decision-makers from across financial services.
            Explore attendee brands across banking, payments, acquiring, payouts, and more.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          {ATTENDEE_CATEGORIES.map((row, index) => (
            <React.Fragment key={row.category}>
              <CategoryRow
                category={row.category}
                subtitle={row.subtitle}
                items={row.items}
                fromLeft={index % 2 === 0}
              />
              {index < ATTENDEE_CATEGORIES.length - 1 && <CategoryDivider />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAttendsBfaSection;
