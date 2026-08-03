import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import {
  ArrowLeft,
  Award,
  BadgePercent,
  Coins,
  ExternalLink,
  MapPin,
  Sparkles,
  Trophy,
  UserRoundCheck,
  WalletCards,
} from "lucide-react";

const BANNER_IMG =
  "/assets/img/sponsor-logo/sponsor-banner-strip-2026/sponsor-banner-strip-2026-mercury-danati-details-banner-2026.png";
const PAGE_PATH = "/mercury-danati-sponsor-details-2026";
const OG_IMAGE = `https://britfintechawards.com${BANNER_IMG}`;
/** Website not provided yet — leave empty to hide Visit Website CTA */
const SITE_URL = "";

const features = [
  {
    icon: Trophy,
    title: "Award-Winning Excellence",
    desc: "Winner of the Compliance Innovator Award at the Brit FinTech Awards 2024 and MSB Store of the Year at the Brit FinTech Awards 2025.",
  },
  {
    icon: WalletCards,
    title: "80+ Global Currencies",
    desc: "Competitive exchange rates across more than 80 international currencies.",
  },
  {
    icon: UserRoundCheck,
    title: "Fast, Friendly & Personalised Service",
    desc: "Professional, secure, and efficient service for every customer.",
  },
  {
    icon: BadgePercent,
    title: "Transparent Exchange Rates",
    desc: "Competitive pricing with no hidden surprises.",
  },
];

const MercuryDanatiSponsorDetails2026 = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-['Outfit',system-ui,sans-serif]">
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Helmet>
        <title>
          Mercury Danati | London&apos;s Trusted Currency Exchange | Brit
          FinTech Awards 2026
        </title>
        <meta
          name="description"
          content="Mercury Danati continues to redefine foreign currency exchange in London with competitive rates, regulatory excellence, and exceptional customer care. MSB Store of the Year 2025."
        />
        <meta
          name="keywords"
          content="Mercury Danati, London currency exchange, MSB Store of the Year 2025, foreign exchange London, Brit FinTech Awards sponsor 2026"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://britfintechawards.com${PAGE_PATH}`}
        />
        <meta
          property="og:title"
          content="Mercury Danati: London's Trusted Currency Exchange Specialist | Brit FinTech Awards 2026"
        />
        <meta
          property="og:description"
          content="Recognised as MSB Store of the Year 2025 — competitive rates, 80+ currencies, and trusted FX services across London."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mercury Danati: London's Trusted Currency Exchange Specialist"
        />
        <meta
          name="twitter:description"
          content="Recognised as MSB Store of the Year 2025 — competitive rates, 80+ currencies, and trusted FX services across London."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="cs-height_90 cs-height_lg_80" />

      {/* Banner — mild zoom on mobile; full strip on desktop */}
      <div
        className="sponsor-banner-2026 relative w-full overflow-hidden bg-[#2a0a10] h-[130px] sm:h-[160px] md:h-auto"
        style={{ lineHeight: 0 }}
      >
        <img
          src={`${BANNER_IMG}?v=5`}
          alt="Mercury Danati — Gold Sponsor | Brit FinTech Awards 2026"
          width={1920}
          height={430}
          decoding="async"
          className="block w-full h-full md:h-auto object-cover object-center md:object-contain scale-[1.35] sm:scale-[1.25] md:scale-100 origin-center"
          style={{
            width: "100%",
            display: "block",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-4xl px-4 md:px-6 pt-5 pb-10 md:py-14">
        {/* Back */}
        <div className="flex justify-start sm:justify-end mb-6 md:mb-8">
          <NavLink
            to="/our-sponsors"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#c8102e] no-underline "
          >
            <i className="fas fa-chevron-left" style={{ marginRight: "2px" }} />
            Back to Sponsors
          </NavLink>
        </div>

        {/* Intro */}
        <div className="mb-10">
          <h1 className="m-0 text-[20px] sm:text-[24px] md:text-[32px] leading-[1.25] font-extrabold tracking-tight text-zinc-950">
            Mercury Danati: London&apos;s Trusted Currency Exchange Specialist
          </h1>
        </div>

        {/* Body copy */}
        <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.85] text-zinc-600 mb-12">
          <p className="m-0">
            Mercury Danati continues to redefine the foreign currency exchange
            experience for both local and international customers. As one of
            London&apos;s trusted MSBs, Mercury Danati combines competitive
            exchange rates, regulatory excellence, and exceptional customer care
            to deliver reliable, secure, and convenient foreign exchange
            services.
          </p>

          <div className="border-l-[3px] border-[#c8102e] pl-5 py-1">
            <p className="m-0 text-[18px] md:text-[20px] font-extrabold leading-snug text-[#c8102e]">
              Recognised as the MSB Store of the Year 2025
            </p>
            <p className="mt-2 mb-0 text-[17px] md:text-[18px] leading-[1.7] text-zinc-700">
              Mercury Danati continues to set the benchmark for excellence in
              the UK currency exchange industry.
            </p>
          </div>

          <p className="m-0">
            With three conveniently located branches in Paddington, customers
            can buy and sell over 80 global currencies with confidence. Whether
            travelling for business, leisure, or exchanging leftover foreign
            currency, Mercury Danati offers a fast, transparent, and
            hassle-free experience.
          </p>
        </div>

        {/* Key Features */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#c8102e]">
              <Sparkles size={13} strokeWidth={2.5} />
              Key Features & Benefits
            </span>
            <h2 className="mt-2 text-[24px] md:text-[30px] font-extrabold tracking-tight text-zinc-950">
              Why Choose Mercury Danati
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="rounded-[14px] border border-[#e2e8f0] bg-white p-[25px] h-full"
              >
                <h3 className="m-0 mb-2 flex items-center gap-2.5 text-[1.15rem] font-bold text-zinc-950 leading-snug">
                  <Icon
                    size={22}
                    strokeWidth={2.25}
                    className="shrink-0 text-[#c8102e]"
                  />
                  {title}
                </h3>
                <p className="m-0 text-[0.95rem] leading-[1.6] text-[#64748b]">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Quick highlights */}
        <section className="mb-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Coins, label: "80+ Currencies", sub: "Buy & sell worldwide" },
            { icon: MapPin, label: "3 Paddington Branches", sub: "Convenient London access" },
            {
              icon: Award,
              label: "BFA Winner",
              sub: "MSB Store of the Year 2025\nCompliance Innovator Award 2024",
            },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="rounded-2xl bg-white px-5 py-6 text-center border-2 border-[#d4af37] shadow-[0_8px_24px_rgba(212,175,55,0.2)]"
            >
              <span className="inline-flex items-center justify-center text-[#c8102e] mb-3">
                <Icon size={32} strokeWidth={2} />
              </span>
              <p className="m-0 text-[15px] font-extrabold text-zinc-950">{label}</p>
              <p className="mt-1 mb-0 text-[15px] text-zinc-500 whitespace-pre-line leading-snug">
                {sub}
              </p>
            </div>
          ))}
        </section>

        {/* Vision */}
        <section className="mb-12">
          <h2 className="m-0 mb-3 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950">
            Our Vision
          </h2>
          <p className="m-0 text-[15px] md:text-[16px] leading-[1.8] text-zinc-600">
            Mercury Danati is committed to making currency exchange simple,
            secure, transparent, and accessible, while continuing to set the
            benchmark for trusted Money Service Businesses across the UK.
          </p>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden rounded-[28px] bg-zinc-950 px-7 py-10 md:px-10 md:py-12 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.3),transparent_55%)]"
          />
          <div className="relative z-[1]">
            <p className="m-0 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#f2d8ac]">
              Brit FinTech Awards 2026
            </p>
            <h2 className="mt-3 mb-3 text-[22px] md:text-[28px] font-extrabold tracking-tight text-white">
              Meet Us at the Event & Discover More!
            </h2>
            <p className="m-0 mb-3 text-[14px] md:text-[15px] text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Connect with Mercury Danati and explore trusted currency exchange
              services built for travellers and local customers alike.
            </p>
            <div className="mt-0 flex flex-wrap items-center justify-center gap-3">
              {SITE_URL ? (
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!m-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold !text-zinc-950 no-underline transition-all hover:bg-[#c8102e] hover:!text-white"
                >
                  Visit Website
                  <ExternalLink size={16} />
                </a>
              ) : null}
              <NavLink
                to="/our-sponsors"
                className="!m-0 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-extrabold text-white no-underline transition-all hover:bg-white/15"
              >
                View All Sponsors
              </NavLink>
            </div>
          </div>
        </section>

        {/* Video — muted autoplay; tap opens YouTube */}
        <section className="mt-12 mb-5">
          <h2 className="m-0 mb-5 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950 text-center">
            Watch Mercury Danati
          </h2>
          <a
            href="https://youtu.be/Zl0_bcYDJPA?si=4jBSG_p6FBtdo3ge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Mercury Danati video on YouTube"
            className="relative block w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              title="Mercury Danati video"
              src="https://www.youtube.com/embed/Zl0_bcYDJPA?autoplay=1&mute=1&loop=1&playlist=Zl0_bcYDJPA&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0 pointer-events-none"
            />
            <span aria-hidden="true" className="absolute inset-0 z-[2]" />
          </a>
          <p className="mt-3 mb-0 text-center text-[14px] text-zinc-500">
            Tap the video to watch on YouTube
          </p>
        </section>
      </div>
    </div>
  );
};

export default MercuryDanatiSponsorDetails2026;
