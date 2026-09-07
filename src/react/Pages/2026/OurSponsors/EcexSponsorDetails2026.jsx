import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import {
  Calendar,
  Clock,
  Coins,
  ExternalLink,
  Globe2,
  Headphones,
  Languages,
  MapPin,
  Medal,
  Play,
  RefreshCw,
  Sparkles,
  TrendingDown,
  Zap,
} from "lucide-react";

/* TODO: replace with ECEX 2026 banner image path when available */
const BANNER_IMG = "/assets/img/sponsor-logo/sponsor-banner-strip-2026/ecex-sponsor-details-banner-2026.png";
const SITE_URL = "https://ecex.ch/";
const PAGE_PATH = "/ecex-sponsor-details-2026";
const OG_IMAGE = BANNER_IMG
  ? `https://britfintechawards.com${BANNER_IMG}`
  : "https://britfintechawards.com/assets/img/sponsor-logo/ECEX-logo.png";

const highlights = [
  {
    icon: MapPin,
    title: "20+ Locations",
    desc: "Across Switzerland",
  },
  {
    icon: Medal,
    title: "Silver Sponsor 2026",
    desc: "2nd Consecutive Year",
  },
  {
    icon: Zap,
    title: "30-Second Exchange",
    desc: "Fast 3-click process",
  },
  {
    icon: Coins,
    title: "Multi-Currency",
    desc: "Automated FX kiosks",
  },
];

const ecexExperience = [
  {
    icon: Zap,
    title: "Exchange in around 30 seconds",
    desc: "A fast, straightforward process completed in just three clicks.",
  },
  {
    icon: RefreshCw,
    title: "Multi-Currency Capabilities",
    desc: "Supporting a range of international currencies, with availability varying by location.",
  },
  {
    icon: MapPin,
    title: "20+ Locations Across Switzerland",
    desc: "Bringing automated currency exchange to customers across key locations.",
  },
  {
    icon: Languages,
    title: "Multilingual, User-Friendly Technology",
    desc: "Designed to make self-service currency exchange simple for international customers.",
  },
  {
    icon: Headphones,
    title: "24/7 Professional Customer Support",
    desc: "Support available whenever customers need assistance.",
  },
  {
    icon: TrendingDown,
    title: "Low Rates",
    desc: "A convenient exchange solution designed to offer competitive value.",
  },
];

const EcexSponsorDetails2026 = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-['Outfit',system-ui,sans-serif]">
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Helmet>
        <title>
          ECEX | Silver Sponsor | Brit FinTech Awards 2026
        </title>
        <meta
          name="description"
          content="ECEX is transforming traditional currency exchange through automated technology across 20+ locations in Switzerland. Silver Sponsor of Brit FinTech Awards 2026."
        />
        <meta
          name="keywords"
          content="ECEX, ECEX currency exchange, automated currency exchange, FX technology, Switzerland currency exchange, Silver Sponsor 2026, Brit FinTech Awards"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://britfintechawards.com${PAGE_PATH}`}
        />
        <meta
          property="og:title"
          content="ECEX – A new way of exchanging money | Brit FinTech Awards 2026"
        />
        <meta
          property="og:description"
          content="ECEX returns as Silver Sponsor of the Brit FinTech Awards 2026, bringing automated currency exchange innovation to modern travellers and customers across Switzerland."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="ECEX - Silver Sponsor | Brit FinTech Awards 2026"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ECEX – A new way of exchanging money | Brit FinTech Awards 2026"
        />
        <meta
          name="twitter:description"
          content="ECEX returns as Silver Sponsor of the Brit FinTech Awards 2026."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="cs-height_90 cs-height_lg_80" />

      {/* Banner */}
      <a
        href={SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit ECEX website"
        className="sponsor-banner-2026 relative block w-full overflow-hidden bg-[#18181b] min-h-[130px] sm:min-h-[160px] md:min-h-[220px]"
        style={{ lineHeight: 0 }}
      >
        {BANNER_IMG ? (
          <img
            src={`${BANNER_IMG}?v=1`}
            alt="ECEX — Silver Sponsor | Brit FinTech Awards 2026"
            width={1920}
            height={430}
            decoding="async"
            className="block w-full h-full md:h-auto object-cover object-center md:object-contain scale-[1.35] sm:scale-[1.25] md:scale-100 origin-center"
            style={{ width: "100%", display: "block" }}
          />
        ) : (
          <div className="w-full h-full min-h-[160px] md:min-h-[220px] flex items-center justify-center bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-400 font-semibold text-lg border-b border-zinc-800">
            {/* Banner image slot (left blank as requested) */}
          </div>
        )}
      </a>

      <div className="mx-auto w-full max-w-4xl px-4 md:px-6 pt-5 pb-12 md:py-14">
        {/* Back */}
        <div className="flex justify-start sm:justify-end mb-6 md:mb-8">
          <NavLink
            to="/our-sponsors"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#c8102e] no-underline hover:opacity-80 transition-opacity"
          >
            <i className="fas fa-chevron-left" style={{ marginRight: "2px" }} />
            Back to Sponsors
          </NavLink>
        </div>

        {/* Intro Header */}
        <div className="mb-10">
          <h1 className="m-0 text-[20px] sm:text-[24px] md:text-[32px] leading-[1.25] font-extrabold tracking-tight text-zinc-950">
            ECEX – A new way of exchanging money
          </h1>
        </div>

        {/* Body copy */}
        <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.85] text-zinc-600 mb-12">
          <p className="m-0">
            We’re delighted to welcome <strong>ECEX</strong> as a{" "}
            <strong>Silver Sponsor of the Brit FinTech Awards 2026</strong> for the second consecutive year.
          </p>

          <p className="m-0">
            ECEX is transforming the traditional currency exchange experience through automated exchange technology, making it easier for customers to exchange money quickly, conveniently and independently.
          </p>

          <p className="m-0">
            With a growing network of 20+ locations across Switzerland, ECEX has built a simple self-service experience where customers can exchange currency in around 30 seconds with just three clicks.
          </p>
        </div>

        {/* Highlights Bar */}
        <section className="mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl bg-white px-4 py-5 text-center border-2 border-[#c0c0c0] shadow-[0_0_20px_rgba(192,192,192,0.55),0_8px_24px_rgba(160,160,175,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-[#a0a0a0] hover:shadow-[0_0_30px_rgba(192,192,192,0.9),0_0_15px_rgba(210,210,225,0.7)]"
              >
                <span className="inline-flex items-center justify-center text-[#c8102e] mb-3 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={28} strokeWidth={2} />
                </span>
                <p className="m-0 text-[14px] md:text-[15px] font-extrabold text-zinc-950">
                  {title}
                </p>
                <p className="mt-1 mb-0 text-[12px] md:text-[13px] text-zinc-500 leading-snug">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Fast. Simple. Built for Modern Currency Exchange */}
        <section className="mb-14 rounded-2xl border-l-[4px] border-[#c8102e] bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-2.5 mb-3">
            <Zap size={22} strokeWidth={2.25} className="text-[#c8102e]" />
            <h2 className="m-0 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950">
              Fast. Simple. Built for Modern Currency Exchange.
            </h2>
          </div>
          <p className="m-0 text-[16px] md:text-[17px] leading-[1.8] text-zinc-600">
            From tourists and international travellers to anyone needing quick access to foreign currency, ECEX combines technology with everyday convenience.
          </p>
        </section>

        {/* The ECEX Experience Includes */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#c8102e]">
              <Sparkles size={13} strokeWidth={2.5} />
              Key Features
            </span>
            <h2 className="mt-2 text-[24px] md:text-[30px] font-extrabold tracking-tight text-zinc-950">
              The ECEX experience includes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ecexExperience.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group rounded-[16px] border border-zinc-200 bg-white p-6 h-full transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c8102e]/25 hover:shadow-[0_14px_32px_rgba(15,23,42,0.08)]"
              >
                <h3 className="m-0 mb-2.5 flex items-center gap-2.5 text-[1.1rem] font-bold text-zinc-950 leading-snug">
                  <Icon
                    size={22}
                    strokeWidth={2.25}
                    className="shrink-0 text-[#c8102e]"
                  />
                  {title}
                </h3>
                <p className="m-0 text-[0.95rem] leading-[1.65] text-zinc-600">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ECEX Kiosk Showcase & Visual Gallery */}
        <section className="mb-14 rounded-3xl bg-white p-6 md:p-8 border border-zinc-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#c8102e]">
              <MapPin size={13} strokeWidth={2.5} />
              Automated Currency Exchange Kiosks
            </span>
            <h2 className="mt-2 text-[24px] md:text-[30px] font-extrabold tracking-tight text-zinc-950">
              ECEX self-service terminals in action
            </h2>
            <p className="mt-2 text-[15px] md:text-[16px] text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              Delivering automated, contactless, and fast 30-second multi-currency exchange across 20+ key locations in Switzerland.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 items-center">
            {/* Featured ATM Main Kiosk Card */}
            <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-sm flex items-center justify-center p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:border-zinc-300">
              <img
                src="/assets/img/ecex/ATM-Machine-ECEX.jpg"
                alt="ECEX Automated Currency Exchange ATM Machine"
                className="w-auto h-auto max-h-[300px] md:max-h-[340px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* 4-Grid Image Gallery (Clean, No Text Overlays) */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-3.5 md:gap-4">
              {[
                {
                  src: "/assets/img/ecex/ecex-1.webp",
                  alt: "ECEX Kiosk Interface Screen",
                },
                {
                  src: "/assets/img/ecex/ecex-2.webp",
                  alt: "ECEX Multi-Currency Selection Screen",
                },
                {
                  src: "/assets/img/ecex/ecex-3.webp",
                  alt: "ECEX Touchscreen Exchange Kiosk",
                },
                {
                  src: "/assets/img/ecex/ecex-4.webp",
                  alt: "ECEX Coin & Cash Dispenser",
                },
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-sm aspect-[4/3] transition-all duration-300 hover:shadow-md hover:border-zinc-300"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology that simplifies currency exchange */}
        <section className="mb-14 rounded-2xl border-l-[4px] border-[#c8102e] bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-3 mb-4">
            <Medal size={22} strokeWidth={2.25} className="text-[#c8102e] shrink-0" />
            <h2 className="m-0 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950">
              Technology that Simplifies Currency Exchange
            </h2>
          </div>
          <p className="m-0 mb-4 text-[16px] md:text-[17px] leading-[1.8] text-zinc-600">
            ECEX demonstrates how technology can modernise a traditional financial service — turning currency exchange into a faster, simpler and more accessible experience.
          </p>
          <p className="m-0 mb-4 text-[16px] md:text-[17px] leading-[1.8] text-zinc-600">
            Its continued partnership with BFA reflects the innovation taking place across the wider FX, payments and financial services ecosystem.
          </p>
          <p className="m-0 mb-6 text-[16px] md:text-[17px] leading-[1.8] text-zinc-600 font-semibold">
            ECEX returns as a Silver Sponsor for BFA 2026 — bringing another year of currency exchange innovation to the room.
          </p>

          {/* Event Details Light Banner */}
          <div className="rounded-2xl bg-zinc-50/80 p-6 md:p-7 border border-zinc-200/80 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-around gap-6 md:gap-10">
              {/* Date Item */}
              <div className="flex items-center gap-4">
                <Calendar size={32} strokeWidth={2} className="text-[#c8102e] shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[17px] md:text-[19px] font-bold text-zinc-800 leading-snug">
                    Friday
                  </span>
                  <span className="text-[17px] md:text-[19px] font-extrabold text-zinc-950 leading-snug">
                    9<sup>th</sup> October 2026
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-12 w-px bg-zinc-200" />

              {/* Venue Item */}
              <div className="flex items-center gap-4">
                <MapPin size={32} strokeWidth={2} className="text-[#c8102e] shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[17px] md:text-[19px] font-bold text-zinc-950 leading-snug">
                    Landing FortyTwo,
                  </span>
                  <span className="text-[16px] md:text-[18px] font-bold text-zinc-800 leading-snug">
                    122 Leadenhall Street,
                  </span>
                  <span className="text-[16px] md:text-[18px] font-bold text-zinc-800 leading-snug">
                    London EC3V 4AB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Video */}
        <section className="mb-14">
          <div className="text-center mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#c8102e]">
              <Play size={13} strokeWidth={2.5} fill="currentColor" />
              Featured Video
            </span>
            <h2 className="mt-2 text-[24px] md:text-[30px] font-extrabold tracking-tight text-zinc-950">
              Watch ECEX
            </h2>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl border border-zinc-200/80 bg-zinc-950 shadow-[0_12px_36px_rgba(0,0,0,0.12)]">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/GwqN1MKLTZM"
                title="ECEX - Brit FinTech Awards"
                className="absolute top-0 left-0 w-full h-full rounded-2xl md:rounded-3xl border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden rounded-[28px] bg-zinc-950 px-7 py-10 md:px-10 md:py-12 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.32),transparent_55%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          <div className="relative z-[1]">
            <p className="m-0 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#c9cdd4]">
              Brit FinTech Awards 2026
            </p>
            <h2 className="mt-3 mb-3 text-[22px] md:text-[28px] font-extrabold tracking-tight text-white">
              Learn More About ECEX
            </h2>
            <p className="m-0 mb-7 text-[14px] md:text-[15px] text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Connect with ECEX at the Brit FinTech Awards 2026 and discover their automated currency exchange technology.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="!m-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold !text-zinc-950 no-underline transition-all hover:bg-[#c8102e] hover:!text-white"
              >
                Visit ECEX Website
                <ExternalLink size={16} />
              </a>
              <NavLink
                to="/our-sponsors"
                className="!m-0 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-extrabold text-white no-underline transition-all hover:bg-white/15"
              >
                View All Sponsors
              </NavLink>
            </div>
            <p className="mt-5 mb-0 text-[13px] text-zinc-500">
              https://ecex.ch/
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EcexSponsorDetails2026;
