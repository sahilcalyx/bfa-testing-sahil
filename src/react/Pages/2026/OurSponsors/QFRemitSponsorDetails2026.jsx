import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import {
  Bell,
  Calendar,
  Coins,
  ExternalLink,
  Globe2,
  MapPin,
  Medal,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

const BANNER_IMG =
  "/assets/img/sponsor-logo/sponsor-banner-strip-2026/QF-sponsor-details-banner-2026.png";
const SITE_URL = "https://qfremit.com/";
const PAGE_PATH = "/qfremit-sponsor-details-2026";
const OG_IMAGE = `https://britfintechawards.com${BANNER_IMG}`;

const highlights = [
  {
    icon: Globe2,
    title: "30+ Countries",
    desc: "Global transfer reach",
  },
  {
    icon: Coins,
    title: "20+ Currencies",
    desc: "Competitive FX rates",
  },
  {
    icon: Medal,
    title: "Innovation Sponsor",
    desc: "Brit FinTech Awards 2026",
  },
  {
    icon: ShieldCheck,
    title: "Secure Technology",
    desc: "Seamless transfers",
  },
];

const ecosystemFeatures = [
  {
    icon: Globe2,
    title: "Global reach",
    desc: "Send money across 30+ countries and 20+ currencies through a connected digital payment ecosystem.",
  },
  {
    icon: Zap,
    title: "Quick transfers",
    desc: "A straightforward way to create an account, set up a transfer and send money without unnecessary complexity.",
  },
  {
    icon: Coins,
    title: "Competitive exchange rates",
    desc: "Competitive exchange rates combined with convenient payment options for better value on every transfer.",
  },
  {
    icon: ShieldCheck,
    title: "Secure technology",
    desc: "Secure technology designed to protect every transaction and create a seamless international transfer experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile remittance",
    desc: "A digital-first remittance experience that makes it simple to send money from your phone.",
  },
  {
    icon: Bell,
    title: "Instant notifications",
    desc: "Stay informed as you track your transaction through to its destination.",
  },
];

const QFRemitSponsorDetails2026 = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-['Outfit',system-ui,sans-serif]">
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Helmet>
        <title>
          QF Remit | Innovation Sponsor | Brit FinTech Awards 2026
        </title>
        <meta
          name="description"
          content="QF Remit is a cross-border money transfer platform making global payments simple, secure and efficient across 30+ countries and 20+ currencies. Innovation Sponsor of Brit FinTech Awards 2026."
        />
        <meta
          name="keywords"
          content="QF Remit, cross-border payments, money transfer, remittance, international payments, Innovation Sponsor 2026, Brit FinTech Awards"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://britfintechawards.com${PAGE_PATH}`}
        />
        <meta
          property="og:title"
          content="QF Remit – Making global money transfers simpler | Brit FinTech Awards 2026"
        />
        <meta
          property="og:description"
          content="QF Remit joins the Brit FinTech Awards 2026 as an Innovation Sponsor, helping make global money transfers simpler, more transparent and more efficient."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="QF Remit - Innovation Sponsor | Brit FinTech Awards 2026"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="QF Remit – Making global money transfers simpler | Brit FinTech Awards 2026"
        />
        <meta
          name="twitter:description"
          content="QF Remit joins the Brit FinTech Awards 2026 as an Innovation Sponsor."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="cs-height_90 cs-height_lg_80" />

      {/* Banner */}
      <a
        href={SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit QF Remit website"
        className="sponsor-banner-2026 relative block w-full overflow-hidden bg-[#4a0e18] min-h-[130px] sm:min-h-[160px] md:min-h-[220px]"
        style={{ lineHeight: 0 }}
      >
        <img
          src={`${BANNER_IMG}?v=1`}
          alt="QF Remit — Innovation Sponsor | Brit FinTech Awards 2026"
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

        {/* Intro Header */}
        <div className="mb-10">
          <h1 className="m-0 text-[20px] sm:text-[24px] md:text-[32px] leading-[1.25] font-extrabold tracking-tight text-zinc-950">
            QF Remit – Making global money transfers simpler
          </h1>
        </div>

        {/* Body copy */}
        <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.85] text-zinc-600 mb-12">
          <p className="m-0">
            We’re delighted to welcome <strong>QF Remit</strong> as an{" "}
            <strong>Innovation Sponsor of the Brit FinTech Awards 2026</strong>.
          </p>

          <p className="m-0">
            <strong>QF Remit</strong> is a cross-border money transfer platform focused on providing simple, secure and efficient international payment solutions. Through its digital payment ecosystem, QF Remit enables customers to send money across 30+ countries and 20+ currencies, combining competitive exchange rates, convenient payment options and secure technology to create a seamless international transfer experience.
          </p>

          <p className="m-0">
            QF Remit is built around the belief that global payments should be hassle-free, transparent and efficient.
          </p>

          <p className="m-0">
            Its platform provides customers with a straightforward way to create an account, set up a transfer, choose a secure payment method and track their transaction through to its destination.
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

        {/* What QF Remit brings */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#c8102e]">
              <Sparkles size={13} strokeWidth={2.5} />
              Key Features
            </span>
            <h2 className="mt-2 text-[24px] md:text-[30px] font-extrabold tracking-tight text-zinc-950">
              What QF Remit brings to the FinTech ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ecosystemFeatures.map(({ icon: Icon, title, desc }) => (
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

        {/* Making international money transfers simpler */}
        <section className="mb-14 rounded-2xl border-l-[4px] border-[#c8102e] bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-3 mb-4">
            <Medal size={22} strokeWidth={2.25} className="text-[#c8102e] shrink-0" />
            <h2 className="m-0 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950">
              Making international money transfers simpler
            </h2>
          </div>
          <p className="m-0 mb-4 text-[16px] md:text-[17px] leading-[1.8] text-zinc-600">
            As an Innovation Sponsor, QF Remit joins a community of forward-thinking businesses helping shape the future of financial services.
          </p>
          <p className="m-0 mb-6 text-[16px] md:text-[17px] leading-[1.8] text-zinc-600 pb-4">
            We’re proud to have QF Remit supporting the Brit FinTech Awards 2026 and look forward to celebrating their contribution alongside the wider FinTech and MSB community.
          </p>

          {/* Event Details Light Banner */}
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
          <div className="text-center mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#c8102e]">
              <Play size={13} strokeWidth={2.5} fill="currentColor" />
              Featured Video
            </span>
            <h2 className="mt-2 text-[24px] md:text-[30px] font-extrabold tracking-tight text-zinc-950">
              Watch QF Remit
            </h2>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl border border-zinc-200/80 bg-zinc-950 shadow-[0_12px_36px_rgba(0,0,0,0.12)]">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/cw7l8D8Fzik"
                title="QF Remit - Brit FinTech Awards"
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
              Discover QF Remit
            </h2>
            <p className="m-0 mb-7 text-[14px] md:text-[15px] text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Connect with QF Remit at the Brit FinTech Awards 2026 and discover how they are making global money transfers simpler.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="!m-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold !text-zinc-950 no-underline transition-all hover:bg-[#c8102e] hover:!text-white"
              >
                Visit QF Remit
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
              https://qfremit.com/
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QFRemitSponsorDetails2026;
