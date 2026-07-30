import React, { useMemo, useState } from "react";

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

const ALL_TAB = "All";

function LogoCard({ item }) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !item.logo || failed;

  return (
    <div className="flex h-[84px] sm:h-[96px] w-[152px] sm:w-[172px] shrink-0 items-center justify-center rounded-2xl bg-white px-4 border border-zinc-100 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c8102e]/20 hover:shadow-[0_14px_32px_rgba(200,16,46,0.12)]">
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
          className="max-h-[46px] sm:max-h-[54px] w-auto max-w-[140px] object-contain"
        />
      )}
    </div>
  );
}

const WhoAttendsBfaTabsSection = () => {
  const [activeTab, setActiveTab] = useState(ALL_TAB);

  const tabs = useMemo(() => [ALL_TAB, ...ATTENDEE_CATEGORIES.map((c) => c.category)], []);

  const activeCategory = useMemo(
    () => ATTENDEE_CATEGORIES.find((c) => c.category === activeTab) || null,
    [activeTab]
  );

  const visibleItems = useMemo(() => {
    if (activeTab === ALL_TAB) {
      return ATTENDEE_CATEGORIES.flatMap((cat) =>
        cat.items.map((item) => ({
          ...item,
          category: cat.category,
          key: `${cat.category}-${item.name}`,
        }))
      );
    }
    return (activeCategory?.items || []).map((item) => ({
      ...item,
      category: activeCategory.category,
      key: `${activeCategory.category}-${item.name}`,
    }));
  }, [activeTab, activeCategory]);

  const subtitle =
    activeTab === ALL_TAB
      ? "Explore the full network of brands attending BFA across every category."
      : activeCategory?.subtitle;

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-50 to-transparent"
      />

      <div className="container relative z-10">
        {/* Title block */}
        <div className="mx-auto max-w-3xl text-center mb-10 md:mb-12">
          <p className="m-0 mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#c8102e]/70">
            Design Option B — Tabs Layout
          </p>
          <h2 className="m-0 text-3xl sm:text-4xl md:text-[2.75rem] font-black uppercase tracking-tight text-[#c8102e]">
            Who Attends BFA?
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 sm:w-14 rounded-full bg-[#c8102e]/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
            <span className="h-[2px] w-10 sm:w-14 rounded-full bg-[#c8102e]/70" />
          </div>
          <p className="mx-auto mt-5 mb-0 max-w-2xl text-[15px] sm:text-base text-zinc-600 font-medium leading-relaxed">
            Every year, BFA brings senior decision-makers from across financial services.
            Explore attendee brands across banking, payments, acquiring, payouts, and more.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          {/* Tabs bar */}
          <div className="mb-8 md:mb-10 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-2 sm:p-2.5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
            <div
              className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-thin"
              style={{ scrollbarWidth: "thin" }}
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`relative shrink-0 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-2.5 text-[11px] sm:text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? "bg-[#c8102e] text-white shadow-lg shadow-[#c8102e]/30"
                        : "bg-transparent text-zinc-600 hover:bg-white hover:text-[#c8102e] hover:shadow-sm"
                    }`}
                  >
                    {tab}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 -bottom-0.5 mx-auto h-[2px] rounded-full bg-white/50 sm:hidden"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active panel */}
          <div className="rounded-[28px] border border-zinc-200/70 bg-zinc-50/60 px-4 py-8 sm:px-8 sm:py-10 md:px-10">
            <div className="mb-7 text-center">
              <h3 className="m-0 text-lg sm:text-xl md:text-2xl font-black uppercase tracking-[0.06em] text-[#c8102e]">
                {activeTab === ALL_TAB ? "All Categories" : activeTab}
              </h3>
              <p className="mx-auto mt-2.5 mb-0 max-w-xl text-sm text-zinc-500 font-medium leading-relaxed">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3.5 sm:gap-4">
              {visibleItems.map((item) => (
                <LogoCard key={item.key} item={item} />
              ))}
            </div>

            {activeTab === ALL_TAB && (
              <p className="mt-7 mb-0 text-center text-xs sm:text-sm text-zinc-400 font-medium">
                Showing all {visibleItems.length} attendee brands
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAttendsBfaTabsSection;
