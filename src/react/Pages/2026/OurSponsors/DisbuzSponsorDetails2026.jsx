import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import {
  Activity,
  Award,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Code2,
  ExternalLink,
  Globe2,
  Handshake,
  Headphones,
  Landmark,
  MapPin,
  Medal,
  Play,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrendingDown,
  Truck,
  Users,
  Zap,
} from "lucide-react";

const BANNER_IMG =
  "/assets/img/sponsor-logo/sponsor-banner-strip-2026/Disbuz-details-banner-2026.png";
const SITE_URL = "https://disbuz.com/";
const PAGE_PATH = "/disbuz-sponsor-details-2026";
const OG_IMAGE = `https://britfintechawards.com${BANNER_IMG}`;

const highlights = [
  {
    icon: Zap,
    title: "2B+ Payouts",
    desc: "Processed through the platform",
  },
  {
    icon: CheckCircle2,
    title: "99.2% Success",
    desc: "Average payout success rate",
  },
  {
    icon: TrendingDown,
    title: "40% Fewer Failures",
    desc: "Average reduction in payout failures",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated human support",
  },
];

const keyFeatures = [
  {
    icon: RefreshCw,
    title: "Multi-Gateway Payout Infrastructure",
    desc: "Automatically switches between vetted payout gateways to help prevent disruptions and eliminate single points of failure.",
  },
  {
    icon: Zap,
    title: "Near-Instant Payouts",
    desc: "Designed for fast, real-time cross-border payouts without batch processing delays.",
  },
  {
    icon: Globe2,
    title: "Multi-Currency Support",
    desc: "Supports currencies including NGN, GBP and GHS, with additional currencies being added.",
  },
  {
    icon: Activity,
    title: "Real-Time Visibility",
    desc: "Monitor payouts, track transactions, receive failure alerts and gain greater visibility through the dashboard.",
  },
  {
    icon: Code2,
    title: "Developer-Friendly API",
    desc: "Easy-to-integrate APIs and infrastructure designed to help businesses connect their payout operations efficiently.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Resilient Infrastructure",
    desc: "Automatic failover and intelligent routing help businesses maintain payout continuity even when a gateway experiences an issue.",
  },
  {
    icon: Headphones,
    title: "24/7 Human Support",
    desc: "Dedicated support is available around the clock to help businesses manage their payout operations.",
  },
];

const businessTypes = [
  { icon: Landmark, label: "Fintechs and digital finance platforms" },
  { icon: Users, label: "Payroll and HR platforms" },
  { icon: ShoppingBag, label: "Marketplaces" },
  { icon: Truck, label: "Vendor and supplier payment platforms" },
  { icon: Briefcase, label: "Lending and investment businesses" },
];

const DisbuzSponsorDetails2026 = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-['Outfit',system-ui,sans-serif]">
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Helmet>
        <title>
          Disbuz by Payceler | Strategic Sponsor | Brit FinTech Awards 2026
        </title>
        <meta
          name="description"
          content="Disbuz by Payceler is a cross-border payout infrastructure with multi-gateway failover, multi-currency support and real-time visibility. Strategic Sponsor of Brit FinTech Awards 2026."
        />
        <meta
          name="keywords"
          content="Disbuz, Payceler, cross-border payouts, multi-gateway payouts, payout infrastructure, gateway failover, NGN, GBP, GHS, Strategic Sponsor 2026, Brit FinTech Awards"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://britfintechawards.com${PAGE_PATH}`}
        />
        <meta
          property="og:title"
          content="Disbuz by Payceler – Simplified Payouts. Anytime. Anywhere. | Brit FinTech Awards 2026"
        />
        <meta
          property="og:description"
          content="Disbuz by Payceler — resilient cross-border payout infrastructure and Strategic Sponsor of Brit FinTech Awards 2026."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Disbuz by Payceler - Strategic Sponsor | Brit FinTech Awards 2026"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Disbuz by Payceler – Simplified Payouts. Anytime. Anywhere. | Brit FinTech Awards 2026"
        />
        <meta
          name="twitter:description"
          content="Disbuz by Payceler — resilient cross-border payout infrastructure and Strategic Sponsor of Brit FinTech Awards 2026."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="cs-height_90 cs-height_lg_80" />

      {/* Banner */}
      <a
        href={SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Disbuz by Payceler website"
        className="sponsor-banner-2026 relative block w-full overflow-hidden bg-[#2a0a10] h-[130px] sm:h-[160px] md:h-auto min-h-[140px] md:min-h-[220px]"
        style={{ lineHeight: 0 }}
      >
        <img
          src={`${BANNER_IMG}?v=1`}
          alt="Disbuz by Payceler — Strategic Sponsor | Brit FinTech Awards 2026"
          width={1920}
          height={430}
          decoding="async"
          className="block w-full h-full md:h-auto object-cover object-center md:object-contain scale-[1.35] sm:scale-[1.25] md:scale-100 origin-center"
          style={{ width: "100%", display: "block" }}
          onError={(e) => {
            e.currentTarget.style.opacity = "0.9";
          }}
        />
      </a>

      <div className="mx-auto w-full max-w-4xl px-4 md:px-6 pt-5 pb-12 md:py-14">
        {/* Back Button */}
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
            Disbuz by Payceler: Simplified Payouts. Anytime. Anywhere.
          </h1>
        </div>

        {/* Body Copy */}
        <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.85] text-zinc-600 mb-12">
          <p className="m-0">
            In 2026, we are delighted to welcome <strong>Disbuz by Payceler</strong>{" "}
            back as a <strong>Strategic Sponsor of the Brit FinTech Awards</strong>.
          </p>

          <p className="m-0">
            Disbuz by Payceler is a cross-border payout infrastructure built to help businesses move money reliably across borders. Its multi-gateway infrastructure provides secure, real-time payouts while automatically switching between payment gateways to reduce failures and keep funds moving.
          </p>

          <p className="m-0">
            With near-instant gateway failover, multi-currency support, real-time visibility and developer-friendly APIs, Disbuz helps fintechs and businesses build more resilient payout operations without relying on a single payment gateway.
          </p>
        </div>

        {/* Key Metrics / Highlights Grid */}
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

        {/* Key Features & Benefits */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#c8102e]">
              <Sparkles size={13} strokeWidth={2.5} />
              Key Features &amp; Benefits
            </span>
            <h2 className="mt-2 text-[24px] md:text-[30px] font-extrabold tracking-tight text-zinc-950">
              Resilient cross-border payout infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyFeatures.map(({ icon: Icon, title, desc }) => (
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

        {/* Built for businesses that move money */}
        <section className="mb-14 rounded-2xl border-l-[4px] border-[#c8102e] bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-2.5 mb-3">
            <Building2 size={22} strokeWidth={2.25} className="text-[#c8102e]" />
            <h2 className="m-0 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950">
              Built for businesses that move money
            </h2>
          </div>
          <p className="m-0 mb-5 text-[16px] md:text-[17px] leading-[1.8] text-zinc-600">
            Disbuz supports a wide range of businesses, including:
          </p>
          <ul className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-3">
            {businessTypes.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50/80 px-4 py-3 text-[15px] md:text-[16px] font-semibold text-zinc-800"
              >
                <Icon size={20} strokeWidth={2.25} className="shrink-0 text-[#c8102e]" />
                {label}
              </li>
            ))}
          </ul>
          <p className="mt-6 mb-0 text-[16px] md:text-[17px] leading-[1.8] text-zinc-600">
            With <strong>2B+ payouts processed</strong>, a{" "}
            <strong>99.2% average payout success rate</strong> and an{" "}
            <strong>average 40% reduction in payout failures</strong>, Disbuz is helping businesses create more reliable cross-border payment infrastructure.
          </p>
        </section>

        {/* Vision */}
        <section className="mb-14 rounded-2xl border-l-[4px] border-[#c8102e] bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-2.5 mb-3">
            <Handshake size={22} strokeWidth={2.25} className="text-[#c8102e]" />
            <h2 className="m-0 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950">
              Our Vision
            </h2>
          </div>
          <p className="m-0 text-[16px] md:text-[17px] leading-[1.8] text-zinc-600">
            Disbuz aims to simplify cross-border payouts by creating a more resilient, connected and reliable payment infrastructure. By combining multiple gateways, intelligent routing and real-time visibility, Disbuz helps businesses move money with greater confidence.
          </p>
        </section>

        {/* Award-winning innovation */}
        <section className="mb-14 rounded-2xl border-2 border-[#c0c0c0] bg-white p-6 md:p-8 shadow-[0_8px_24px_rgba(192,192,192,0.25)]">
          <div className="flex items-center gap-2.5 mb-3">
            <Award size={22} strokeWidth={2.25} className="text-[#c8102e]" />
            <h2 className="m-0 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950">
              Award-Winning Innovation
            </h2>
          </div>
          <p className="m-0 text-[16px] md:text-[17px] leading-[1.8] text-zinc-600">
            Disbuz by Payceler was recognised as the{" "}
            <NavLink
              to="/award-winners-2025/disbuz-pay-out-innovator-2025"
              className="font-bold text-[#c8102e] no-underline hover:opacity-80"
            >
              Pay-Out Innovator 2025
            </NavLink>
            , highlighting its contribution to innovation within the cross-border payments and payout ecosystem.
          </p>
        </section>

        {/* Disbuz at BFA 2026 */}
        <section className="mb-14 rounded-2xl border-l-[4px] border-[#c8102e] bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-3 mb-4">
            <Medal size={22} strokeWidth={2.25} className="text-[#c8102e] shrink-0" />
            <h2 className="m-0 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950">
              Disbuz at BFA 2026
            </h2>
          </div>
          <p className="m-0 mb-6 text-[16px] md:text-[17px] leading-[1.8] text-zinc-600">
            As a returning Strategic Sponsor, Disbuz by Payceler brings its expertise in resilient cross-border payout infrastructure to a community of innovators, operators and leaders shaping the future of fintech, payments and money services.
          </p>

          <div className="rounded-2xl bg-zinc-50/80 p-6 md:p-7 border border-zinc-200/80 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-around gap-6 md:gap-10">
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

              <div className="hidden md:block h-12 w-px bg-zinc-200" />

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
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#c8102e]">
              <Play size={13} strokeWidth={2.5} fill="currentColor" />
              Featured Video
            </span>
            <h2 className="mt-2 text-[24px] md:text-[30px] font-extrabold tracking-tight text-zinc-950">
              Watch Disbuz by Payceler
            </h2>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl border border-zinc-200/80 bg-zinc-950 shadow-[0_12px_36px_rgba(0,0,0,0.12)]">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/eVQiImov5A0"
                title="Disbuz by Payceler - Brit FinTech Awards"
                className="absolute top-0 left-0 w-full h-full rounded-2xl md:rounded-3xl border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Call To Action */}
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
              Connect with Disbuz by Payceler and discover how resilient payout infrastructure can help your business move money anytime, anywhere.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="!m-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold !text-zinc-950 no-underline transition-all hover:bg-[#c8102e] hover:!text-white"
              >
                Visit Disbuz by Payceler
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
              Disbuz by Payceler — Simplified payouts. Anytime. Anywhere.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DisbuzSponsorDetails2026;
