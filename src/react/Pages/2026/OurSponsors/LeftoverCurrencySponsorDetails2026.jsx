import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import {
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Coins,
  ExternalLink,
  Globe2,
  Handshake,
  Medal,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";

const BANNER_IMG =
  "/assets/img/sponsor-logo/sponsor-banner-strip-2026/kmbal-details-banner-2026.png";
const SITE_URL = "https://www.leftovercurrency.com/";
const PAGE_PATH = "/leftover-currency-sponsor-details-2026";
const OG_IMAGE = `https://britfintechawards.com${BANNER_IMG}`;

const highlights = [
  {
    icon: Coins,
    title: "Leftover Currency",
    desc: "Transforming foreign currency into value",
  },
  {
    icon: Users,
    title: "50,000+ Customers",
    desc: "Trusted by thousands worldwide",
  },
  {
    icon: Award,
    title: "Award Winner 2025",
    desc: "MSB Disruptor of the Year",
  },
  {
    icon: Medal,
    title: "Innovation Sponsor 2026",
    desc: "Brit FinTech Awards 2026",
  },
];

const keyFeatures = [
  {
    icon: Coins,
    title: "Exchange foreign coins & obsolete banknotes",
    desc: "Convert foreign coins, withdrawn banknotes, and discontinued currencies into cash.",
  },
  {
    icon: UserCheck,
    title: "Trusted by thousands",
    desc: "Serving 50,000+ customers worldwide with an excellent reputation for reliability and customer service.",
  },
  {
    icon: Zap,
    title: "Fast & convenient online service",
    desc: "Simple online exchange process with quick payment once your currency has been received and verified.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent exchange process",
    desc: "Competitive exchange rates with no hidden fees or unexpected charges.",
  },
  {
    icon: Sparkles,
    title: "Specialists in hard-to-exchange currency",
    desc: "A unique service for currencies that many banks and traditional exchange providers no longer accept.",
  },
  {
    icon: Building2,
    title: "Trusted by leading organisations",
    desc: "Providing foreign currency exchange services for charities, museums, airports, travel organisations, and corporate clients.",
  },
];

const LeftoverCurrencySponsorDetails2026 = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-['Outfit',system-ui,sans-serif]">
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Helmet>
        <title>
          Leftover Currency | Innovation Sponsor | Brit FinTech Awards 2026
        </title>
        <meta
          name="description"
          content="Leftover Currency is a UK leading specialist in exchanging foreign coins, obsolete banknotes, and leftover travel money into value. Innovation Sponsor of Brit FinTech Awards 2026."
        />
        <meta
          name="keywords"
          content="Leftover Currency, foreign currency exchange, obsolete banknotes, foreign coins, travel money, MSB Disruptor of the Year 2025, Brit FinTech Awards sponsor 2026"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://britfintechawards.com${PAGE_PATH}`}
        />
        <meta
          property="og:title"
          content="Leftover Currency: Transforming Leftover Travel Money into Value | Brit FinTech Awards 2026"
        />
        <meta
          property="og:description"
          content="Leftover Currency — UK specialist in foreign currency exchange and Innovation Sponsor of the Brit FinTech Awards 2026."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Leftover Currency - Innovation Sponsor | Brit FinTech Awards 2026"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Leftover Currency: Transforming Leftover Travel Money into Value | Brit FinTech Awards 2026"
        />
        <meta
          name="twitter:description"
          content="Leftover Currency — UK specialist in foreign currency exchange and Innovation Sponsor of the Brit FinTech Awards 2026."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="cs-height_90 cs-height_lg_80" />

      {/* Banner */}
      <a
        href={SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Leftover Currency website"
        className="sponsor-banner-2026 relative block w-full overflow-hidden bg-[#2a0a10] h-[130px] sm:h-[160px] md:h-auto"
        style={{ lineHeight: 0 }}
      >
        <img
          src={`${BANNER_IMG}?v=1`}
          alt="Leftover Currency — Innovation Sponsor | Brit FinTech Awards 2026"
          width={1920}
          height={430}
          decoding="async"
          className="block w-full h-full md:h-auto object-cover object-center md:object-contain scale-[1.35] sm:scale-[1.25] md:scale-100 origin-center"
          style={{ width: "100%", display: "block" }}
        />
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

        {/* Intro */}
        <div className="mb-10">
          <h1 className="m-0 text-[20px] sm:text-[24px] md:text-[32px] leading-[1.25] font-extrabold tracking-tight text-zinc-950">
            Leftover Currency: Transforming Leftover Travel Money into Value
          </h1>
        </div>

        {/* Body copy */}
        <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.85] text-zinc-600 mb-12">
          <p className="m-0">
            We are delighted to welcome <strong>Leftover Currency Limited</strong> back as an{" "}
            <strong>Innovation Sponsor of the Brit FinTech Awards 2026</strong>.
          </p>

          <p className="m-0">
            After joining us as an Innovation Sponsor in 2025, Leftover Currency continues to lead the way with an innovative approach to foreign currency exchange. Their commitment to solving a real customer challenge—helping people exchange foreign coins, obsolete banknotes, and leftover travel money that many banks and bureaux de change won&apos;t accept—earned them the prestigious:
          </p>

          <div className="relative overflow-hidden rounded-2xl border-2 border-[#c0c0c0] bg-gradient-to-br from-[#f8f8f8] via-white to-[#f0f0f0] px-5 py-5 md:px-7 md:py-6 shadow-[0_8px_24px_rgba(192,192,192,0.2)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#a8a8a8] via-[#c0c0c0] to-[#e8e8e8]"
            />
            <div className="pl-2 md:pl-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-zinc-500">
                <Award size={13} strokeWidth={2.5} className="text-[#c8102e]" />
                Brit FinTech Awards
              </span>
              <p className="m-0 mt-2 text-[18px] md:text-[20px] font-extrabold leading-snug text-zinc-950">
                Recognised as the{" "}
                <span className="text-[#c8102e]">
                  MSB Disruptor of the Year 2025
                </span>
              </p>
            </div>
          </div>

          <p className="m-0">
            Founded in the UK, Leftover Currency has become one of the country&apos;s leading specialists in exchanging foreign currency that would otherwise go unused. Through its secure online platform, transparent exchange process, and customer-first approach, the company has helped 50,000+ customers recover value from their leftover travel money while making foreign currency exchange simpler and more accessible.
          </p>
        </div>

        {/* Highlights */}
        <section className="mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl bg-white px-4 py-5 text-center border-2 border-[#c0c0c0] shadow-[0_8px_24px_rgba(192,192,192,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#a8a8a8] hover:shadow-[0_12px_28px_rgba(192,192,192,0.35)]"
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

        {/* Key Features */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#c8102e]">
              <Sparkles size={13} strokeWidth={2.5} />
              Key Features &amp; Benefits
            </span>
            <h2 className="mt-2 text-[24px] md:text-[30px] font-extrabold tracking-tight text-zinc-950">
              Why Choose Leftover Currency
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyFeatures.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group rounded-[16px] border border-zinc-200 bg-white p-6 h-full transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c8102e]/25 hover:shadow-[0_14px_32px_rgba(15,23,42,0.08)]"
              >
                <h3 className="m-0 mb-2 flex items-center gap-2.5 text-[1.1rem] font-bold text-zinc-950 leading-snug">
                  <Icon
                    size={22}
                    strokeWidth={2.25}
                    className="shrink-0 text-[#c8102e]"
                  />
                  {title}
                </h3>
                <p className="m-0 text-[0.95rem] leading-[1.65] text-zinc-500">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="mb-12 rounded-2xl border-l-[3px] border-[#c8102e] bg-white px-6 py-6 md:px-8 md:py-7 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-2.5 mb-3">
            <Globe2 size={20} strokeWidth={2.25} className="text-[#c8102e]" />
            <h2 className="m-0 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950">
              Our Vision
            </h2>
          </div>
          <p className="m-0 mb-4 text-[15px] md:text-[16px] leading-[1.8] text-zinc-600">
            Leftover Currency is committed to making every coin and banknote count by providing an innovative, transparent, and trusted currency exchange service. Through continuous innovation and customer-focused solutions, the company is transforming the way people recover value from unused foreign currency.
          </p>
          <p className="m-0 text-[15px] md:text-[16px] leading-[1.8] text-zinc-600 font-semibold">
            We are proud to welcome Leftover Currency back as an Innovation Sponsor and thank them for their continued support of the Brit FinTech Awards 2026.
          </p>
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
              MEET US AT THE EVENT &amp; DISCOVER MORE!
            </h2>
            <p className="m-0 mb-7 text-[14px] md:text-[15px] text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Connect with Leftover Currency and explore how they are transforming leftover travel money into value.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="!m-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold !text-zinc-950 no-underline transition-all hover:bg-[#c8102e] hover:!text-white"
              >
                Visit Leftover Currency Website
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
              www.leftovercurrency.com
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LeftoverCurrencySponsorDetails2026;
