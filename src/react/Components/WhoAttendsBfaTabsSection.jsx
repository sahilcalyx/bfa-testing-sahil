import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ATTENDEE_CATEGORIES, ATTENDEE_LOGOS } from "./attendeeLogos";

const ALL_TAB = "All";

const FOREN_FORMERLY_LEATHERBACK_LOGO =
  "/assets/img/attendee-logos/FOREN-formerly-LEATHERBACK.svg";

const withForenLogo = (item) =>
  item.name === "Leatherback" || item.name === "FOREN. formerly Leatherback" || item.foren
    ? {
        ...item,
        name: "FOREN. formerly Leatherback",
        logo: FOREN_FORMERLY_LEATHERBACK_LOGO,
        tall: true,
        foren: true,
      }
    : item;

const MSB_CATEGORY = {
  category: "MSB",
  subtitle: "Money Services Businesses — money transfer, remittance and currency exchange",
};

const TAB_CATEGORIES = [...ATTENDEE_CATEGORIES, MSB_CATEGORY];

/* Companies can appear in several tabs, so each tab lists its logos by name in display order */
const TAB_LOGO_NAMES = {
  MSB: [
    "Baaz Money",
    "Belyfted",
    "Blue Nile",
    "Finest Pay",
    "IFEPay",
    "K Money",
    "Kmbal",
    "Muthoot Global",
    "MyRemit",
    "NEC Money",
    "QF Remit",
    "Red Sea Money Transfer",
    "Super Transfer",
    "Teeparam",
    "Glory & Honour",
    "Mercury Danati",
    "Tigris Pay",
  ],
  Others: ["Complyport", "Kani", "Lumine Solicitors", "University of Bristol"],
  "Payout Companies": ["Chrisborough Group", "Disbuz", "Thunes", "GCC Exchange"],
  "Card Acquirers": ["Axcess Merchant Services", "Ecommpay", "Emerchantpay", "Trust Payments"],
  Payments: ["Orbital", "Sends", "LinkFX", "3ribe", "ECEX Group"],
  "Open Banking": ["Fena", "Volume", "Payceler"],
  "Identity Verification": ["GBG", "Sumsub"],
  Banking: ["Bank of London", "Clear Junction", "PURSE BAAS", "Peratera", "IFX Payments"],
};

const LOGOS_BY_NAME = new Map(ATTENDEE_LOGOS.map((item) => [item.name, item]));

/* On sm+ the tab bar breaks onto a second row starting at this tab */
const SECOND_ROW_START = "Identity Verification";

function LogoCard({ item }) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !item.logo || failed;

  return (
    <div className="flex h-[76px] sm:h-[96px] w-[calc(50%-0.3125rem)] sm:w-[168px] md:w-[172px] shrink-0 items-center justify-center rounded-2xl bg-white px-3 sm:px-4 border border-zinc-100 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c8102e]/20 hover:shadow-[0_14px_32px_rgba(200,16,46,0.12)]">
      {showPlaceholder ? (
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-[#c8102e] text-center leading-tight">
          {item.name}
        </span>
      ) : (
        <img
          src={item.logo}
          alt={item.name}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={`${
            item.tall ? "max-h-[58px] sm:max-h-[78px]" : "max-h-[40px] sm:max-h-[54px]"
          } w-auto max-w-full object-contain`}
        />
      )}
    </div>
  );
}

/**
 * @param {"home" | "page"} variant
 *  - home: homepage section with link to full page
 *  - page: dedicated /who-attends-bfa page (tighter top padding for fixed header)
 */
const WhoAttendsBfaTabsSection = ({ variant = "home" }) => {
  const [activeTab, setActiveTab] = useState(ALL_TAB);
  const isPage = variant === "page";

  const tabs = useMemo(() => [ALL_TAB, ...TAB_CATEGORIES.map((c) => c.category)], []);

  const activeCategory = useMemo(
    () => TAB_CATEGORIES.find((c) => c.category === activeTab) || null,
    [activeTab]
  );

  const visibleItems = useMemo(() => {
    const items =
      activeTab === ALL_TAB
        ? ATTENDEE_LOGOS
        : (TAB_LOGO_NAMES[activeTab] || []).map((name) => LOGOS_BY_NAME.get(name)).filter(Boolean);
    return items.map(withForenLogo);
  }, [activeTab]);

  const subtitle =
    activeTab === ALL_TAB
      ? "Featuring some of the leading names that have been part of the Brit FinTech Awards."
      : activeCategory?.subtitle;

  return (
    <section
      className={`relative overflow-hidden bg-white ${
        isPage ? "pt-24 pb-16 md:pt-28 md:pb-24" : "py-16 md:py-24"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-50 to-transparent"
      />

      <div className="container relative z-10">
        {/* Title block */}
        <div className="mx-auto max-w-3xl text-center mb-10 md:mb-12">
          <h2 className="m-0 text-3xl sm:text-4xl md:text-[2.75rem] font-black uppercase tracking-tight text-[#c8102e]">
            Who Attends BFA?
          </h2>

          <p className="mx-auto mt-5 mb-0 max-w-2xl text-[15px] sm:text-base text-zinc-600 font-medium leading-relaxed">
            Every year, BFA brings senior decision-makers from across financial services.
            Explore attendee brands across banking, payments, acquiring, payouts, and more.
          </p>

          {!isPage && (
            <div className="mt-6">
              <Link
                to="/who-attends-bfa"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#c8102e] hover:text-[#a00d25] transition-colors duration-200"
              >
                <span>View full page</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}
        </div>

        <div className="mx-auto max-w-6xl">
          {/* Tabs bar */}
          <div className="mb-6 md:mb-10 grid grid-cols-2 xs:grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <React.Fragment key={tab}>
                  {tab === SECOND_ROW_START && (
                    <span aria-hidden="true" className="hidden sm:block basis-full h-0" />
                  )}
                  <button
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-xl px-3 py-2.5 sm:px-4 sm:py-2.5 text-[11px] sm:text-sm font-bold tracking-wide transition-colors duration-200 whitespace-nowrap border text-center ${
                      isActive
                        ? "bg-[#c8102e] text-white border-[#c8102e] shadow-md shadow-[#c8102e]/25"
                        : "bg-white text-zinc-600 border-zinc-200 hover:border-[#c8102e]/40 hover:text-[#c8102e]"
                    }`}
                  >
                    {tab}
                  </button>
                </React.Fragment>
              );
            })}
          </div>

          {/* Active panel */}
          <div className="rounded-[24px] sm:rounded-[28px] border border-zinc-200/70 bg-zinc-50/60 px-3 py-6 sm:px-8 sm:py-10 md:px-10">
            <div className="mb-5 sm:mb-7 text-center">
              <h3 className="m-0 text-base sm:text-xl md:text-2xl font-black uppercase tracking-[0.06em] text-[#c8102e]">
                {activeTab === ALL_TAB ? "All Categories" : activeTab}
              </h3>
              <p className="mx-auto mt-2 mb-0 max-w-xl text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4">
              {visibleItems.map((item) => (
                <LogoCard key={item.name} item={item} />
              ))}
            </div>

            {activeTab === ALL_TAB && (
              <p className="mt-5 sm:mt-7 mb-0 text-center text-xs sm:text-sm text-zinc-400 font-medium">
                And many more.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAttendsBfaTabsSection;
