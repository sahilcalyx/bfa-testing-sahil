import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import {
  ArrowRightLeft,
  Award,
  BadgeCheck,
  Calendar,
  CheckCircle2,
  Coins,
  ExternalLink,
  Globe2,
  MapPin,
  Medal,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const BANNER_IMG =
  "/assets/img/sponsor-logo/sponsor-banner-strip-2026/myremit-details-banner-2026.png";
const SITE_URL = "https://myremituk.com/";
const PAGE_PATH = "/myremit-sponsor-details-2026";
const OG_IMAGE = `https://britfintechawards.com${BANNER_IMG}`;

const highlights = [
  {
    icon: Globe2,
    title: "150+ Destinations",
    desc: "Global money transfers worldwide",
  },
  {
    icon: Users,
    title: "Since 2018",
    desc: "Fast, simple & convenient",
  },
  {
    icon: Award,
    title: "Award winner 2025",
    desc: "Best in Customer Service MSB",
  },
  {
    icon: Medal,
    title: "Strategic sponsor 2026",
    desc: "Brit FinTech Awards 2026",
  },
];

const keyFeatures = [
  {
    icon: Globe2,
    title: "150+ Global destinations",
    desc: "Send money internationally to more than 150 countries through convenient payout options.",
  },
  {
    icon: Zap,
    title: "Fast & secure transfers",
    desc: "Reliable international money transfers designed to provide customers with a secure and convenient experience.",
  },
  {
    icon: ArrowRightLeft,
    title: "Multiple payout options",
    desc: "Recipients can receive funds through bank transfers, cash pickup, and mobile money.",
  },
  {
    icon: Smartphone,
    title: "Easy digital experience",
    desc: "A user-friendly web platform and mobile app make sending and managing transfers simple.",
  },
  {
    icon: Coins,
    title: "Competitive & transparent rates",
    desc: "Competitive fees and transparent exchange rates help customers get greater value from their transfers.",
  },
  {
    icon: ShieldCheck,
    title: "FCA authorised & regulated",
    desc: "Operating under FCA regulation to provide secure and compliant money transfer services.",
  },
];

const MyRemitSponsorDetails2026 = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-['Outfit',system-ui,sans-serif]">
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Helmet>
        <title>
          MyRemit | Strategic Sponsor | Brit FinTech Awards 2026
        </title>
        <meta
          name="description"
          content="MyRemit is a trusted global money transfer service, offering fast, secure, and transparent international transfers to 150+ countries. Strategic Sponsor of Brit FinTech Awards 2026."
        />
        <meta
          name="keywords"
          content="MyRemit, global money transfers, international money transfer, Best in Customer Service MSB 2025, FCA authorised, Brit FinTech Awards sponsor 2026"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://britfintechawards.com${PAGE_PATH}`}
        />
        <meta
          property="og:title"
          content="MyRemit: Fast, Secure & Trusted Global Money Transfers | Brit FinTech Awards 2026"
        />
        <meta
          property="og:description"
          content="MyRemit — Trusted international money transfer service and Strategic Sponsor of the Brit FinTech Awards 2026."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="MyRemit - Strategic Sponsor | Brit FinTech Awards 2026"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MyRemit: Fast, Secure & Trusted Global Money Transfers | Brit FinTech Awards 2026"
        />
        <meta
          name="twitter:description"
          content="MyRemit — Trusted international money transfer service and Strategic Sponsor of the Brit FinTech Awards 2026."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="cs-height_90 cs-height_lg_80" />

      {/* Banner */}
      <a
        href={SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit MyRemit website"
        className="sponsor-banner-2026 relative block w-full overflow-hidden bg-[#2a0a10] h-[130px] sm:h-[160px] md:h-auto"
        style={{ lineHeight: 0 }}
      >
        <img
          src={`${BANNER_IMG}?v=1`}
          alt="MyRemit — Strategic Sponsor | Brit FinTech Awards 2026"
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
            MyRemit: Fast, secure &amp; trusted global money transfers
          </h1>
        </div>

        {/* Body copy */}
        <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.85] text-zinc-600 mb-12">
          <p className="m-0">
            We are delighted to welcome <strong>MyRemit Ltd</strong> back as a{" "}
            <strong>Strategic Sponsor of the Brit FinTech Awards 2026</strong>.
          </p>

          <p className="m-0">
            After joining us as a Strategic Sponsor in 2025, MyRemit continues to demonstrate its commitment to secure, reliable, and customer-focused international money transfers. Their dedication to exceptional customer service earned them the prestigious:
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
                  Best in Customer Service MSB 2025
                </span>
              </p>
              <p className="m-0 mt-2 text-[14px] md:text-[15px] text-zinc-600 leading-relaxed">
                MyRemit&apos;s recognition at the Brit FinTech Awards 2025 reflects its continued focus on delivering a customer-first money transfer experience.
              </p>
            </div>
          </div>

          <p className="m-0">
            Since launching in 2018, MyRemit has focused on making international money transfers simple, fast, and convenient. Through its easy-to-use web platform and mobile app, customers can send money worldwide using bank transfers, cash pickup, and mobile money services.
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
              Why choose MyRemit
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
        <section className="mb-14 rounded-2xl border-l-[3px] border-[#c8102e] bg-white px-6 py-6 md:px-8 md:py-7 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-2.5 mb-3">
            <Globe2 size={20} strokeWidth={2.25} className="text-[#c8102e]" />
            <h2 className="m-0 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950">
              Our vision
            </h2>
          </div>
          <p className="m-0 text-[15px] md:text-[16px] leading-[1.8] text-zinc-600">
            MyRemit is committed to making international money transfers fast, secure, accessible, and convenient, while delivering a trusted experience for customers around the world.
          </p>
        </section>

        {/* MyRemit at BFA 2026 */}
        <section className="mb-14 rounded-2xl border-l-[4px] border-[#c8102e] bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-3 mb-4">
            <Medal size={22} strokeWidth={2.25} className="text-[#c8102e] shrink-0" />
            <h2 className="m-0 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950">
              MyRemit at BFA 2026
            </h2>
          </div>
          <p className="m-0 mb-6 text-[16px] md:text-[17px] leading-[1.8] text-zinc-600">
            We are pleased to welcome MyRemit back to the Brit FinTech Awards 2026 as a Strategic Sponsor and look forward to celebrating their continued contribution to the fintech and payments industry.
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
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#c8102e]">
              <Play size={13} strokeWidth={2.5} fill="currentColor" />
              Featured Video
            </span>
            <h2 className="mt-2 text-[24px] md:text-[30px] font-extrabold tracking-tight text-zinc-950">
              Watch MyRemit
            </h2>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl border border-zinc-200/80 bg-zinc-950 shadow-[0_12px_36px_rgba(0,0,0,0.12)]">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/nLziGknAmiA"
                title="MyRemit - Brit FinTech Awards"
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
              MEET US AT THE EVENT &amp; DISCOVER MORE!
            </h2>
            <p className="m-0 mb-7 text-[14px] md:text-[15px] text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Connect with MyRemit and explore their fast, secure, and trusted global money transfer services.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="!m-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold !text-zinc-950 no-underline transition-all hover:bg-[#c8102e] hover:!text-white"
              >
                Visit MyRemit Website
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
              https://myremituk.com/
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyRemitSponsorDetails2026;
