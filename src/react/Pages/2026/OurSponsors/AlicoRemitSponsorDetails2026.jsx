import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import {
  Calendar,
  Clock,
  CreditCard,
  ExternalLink,
  Globe2,
  Handshake,
  MapPin,
  Medal,
  Banknote,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wallet,
} from "lucide-react";

const BANNER_IMG =
  "/assets/img/sponsor-logo/sponsor-banner-strip-2026/Alico-details-banner-2026.jpg";
const SITE_URL = "https://www.alicoremit.co.uk";
const PAGE_PATH = "/alicoremit-sponsor-details-2026";
const OG_IMAGE = `https://britfintechawards.com${BANNER_IMG}`;
const BANNER_WIDTH = 1920;
const BANNER_HEIGHT = 430;

const highlights = [
  {
    icon: Globe2,
    title: "100+ Countries",
    desc: "International transfer destinations",
  },
  {
    icon: Clock,
    title: "20+ Years",
    desc: "Experience in money transfers",
  },
  {
    icon: ShieldCheck,
    title: "FCA & HMRC",
    desc: "Authorised and registered",
  },
  {
    icon: Wallet,
    title: "Flexible Payouts",
    desc: "Bank transfer & cash pick-up",
  },
];

const keyFeatures = [
  {
    icon: Globe2,
    title: "International Money Transfers",
    desc: "AlicoRemit enables customers to send money internationally across 100+ countries, helping people stay connected with loved ones and communities across borders.",
  },
  {
    icon: CreditCard,
    title: "Bank Transfers",
    desc: "Customers can send money directly to bank accounts, providing a convenient option for international transfers.",
  },
  {
    icon: Banknote,
    title: "Cash Pick-Up",
    desc: "AlicoRemit also offers cash pick-up options, giving recipients an alternative way to receive money in supported locations.",
  },
  {
    icon: Smartphone,
    title: "Convenient Digital Access",
    desc: "Customers can access AlicoRemit's services through its digital platform, making it easier to manage international money transfers.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Regulated Service",
    desc: "AlicoRemit is FCA-authorised and HMRC-registered, supporting its focus on providing secure and compliant international money transfer services.",
  },
  {
    icon: Globe2,
    title: "Wide International Reach",
    desc: "With services covering 100+ countries, AlicoRemit helps customers transfer money to destinations across different regions worldwide.",
  },
  {
    icon: Clock,
    title: "20+ Years of Experience",
    desc: "With more than two decades of experience in international money transfers, AlicoRemit has developed its services around the needs of customers sending money across borders.",
  },
];

const AlicoRemitSponsorDetails2026 = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-['Outfit',system-ui,sans-serif]">
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Helmet>
        <title>
          AlicoRemit | Travel Sponsor | Brit FinTech Awards 2026
        </title>
        <meta
          name="description"
          content="AlicoRemit is an international money transfer service helping customers send money across 100+ countries. FCA-authorised and HMRC-registered. Travel Sponsor of Brit FinTech Awards 2026."
        />
        <meta
          name="keywords"
          content="AlicoRemit, Alico Remit, Travel Sponsor, international money transfer, remittance, FCA authorised, HMRC registered, cash pick-up, bank transfer, Brit FinTech Awards 2026"
        />
        <meta name="author" content="Brit Fintech Award" />
        <link rel="canonical" href={`https://britfintechawards.com${PAGE_PATH}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://britfintechawards.com${PAGE_PATH}`}
        />
        <meta
          property="og:title"
          content="AlicoRemit: Connecting people across borders | Travel Sponsor | Brit FinTech Awards 2026"
        />
        <meta
          property="og:description"
          content="AlicoRemit — Making international money transfers simple and accessible. Travel Sponsor of Brit FinTech Awards 2026."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content={String(BANNER_WIDTH)} />
        <meta property="og:image:height" content={String(BANNER_HEIGHT)} />
        <meta
          property="og:image:alt"
          content="AlicoRemit — Travel Sponsor | Brit FinTech Awards 2026"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AlicoRemit: Connecting people across borders | Travel Sponsor | Brit FinTech Awards 2026"
        />
        <meta
          name="twitter:description"
          content="AlicoRemit — Making international money transfers simple and accessible. Travel Sponsor of Brit FinTech Awards 2026."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:src" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="AlicoRemit — Travel Sponsor | Brit FinTech Awards 2026"
        />
        <link rel="image_src" href={OG_IMAGE} />
      </Helmet>

      <div className="cs-height_90 cs-height_lg_80" />

      {/* Banner */}
      <a
        href={SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit AlicoRemit website"
        className="sponsor-banner-2026 relative block w-full overflow-hidden bg-[#2a0a10]"
        style={{ lineHeight: 0 }}
      >
        <img
          src={`${BANNER_IMG}?v=3`}
          alt="AlicoRemit — Travel Sponsor | Brit FinTech Awards 2026"
          width={BANNER_WIDTH}
          height={BANNER_HEIGHT}
          decoding="async"
          fetchPriority="high"
          loading="eager"
          className="block w-full h-auto object-contain object-center"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            imageRendering: "auto",
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
            AlicoRemit: Connecting people across borders
          </h1>
          <p className="mt-3 mb-0 text-[15px] md:text-[16px] font-semibold text-[#c8102e]">
            Business profile
          </p>
          <p className="mt-2 mb-0 text-[17px] md:text-[19px] font-bold text-zinc-800 leading-snug">
            AlicoRemit: Making international money transfers simple and accessible
          </p>
        </div>

        {/* Body Copy */}
        <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.85] text-zinc-600 mb-12">
          <p className="m-0">
            <strong>AlicoRemit</strong> is an international money transfer service
            focused on helping customers send money across borders with convenient
            and reliable transfer solutions.
          </p>

          <p className="m-0">
            With more than <strong>20 years of experience</strong>, AlicoRemit
            supports customers sending money to <strong>100+ countries</strong>,
            offering a range of transfer options designed to make international
            payments more accessible.
          </p>

          <p className="m-0">
            From bank transfers to cash pick-up services, AlicoRemit provides
            customers with flexible ways to send money internationally and stay
            connected with family, friends and communities around the world.
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
              Simple, accessible international money transfers
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

        {/* Vision */}
        <section className="mb-14 rounded-2xl border-l-[4px] border-[#c8102e] bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-2.5 mb-3">
            <Handshake size={22} strokeWidth={2.25} className="text-[#c8102e]" />
            <h2 className="m-0 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950">
              Our Vision
            </h2>
          </div>
          <p className="m-0 mb-4 text-[16px] md:text-[17px] leading-[1.8] text-zinc-600">
            AlicoRemit focuses on making international money transfers more
            accessible and convenient for customers around the world.
          </p>
          <p className="m-0 text-[16px] md:text-[17px] leading-[1.8] text-zinc-600">
            Through its combination of digital services, international reach and
            customer-focused solutions, AlicoRemit continues to support the
            movement of money and connections across borders.
          </p>
        </section>

        {/* AlicoRemit at BFA 2026 */}
        <section className="mb-14 rounded-2xl border-l-[4px] border-[#c8102e] bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-3 mb-4">
            <Medal size={22} strokeWidth={2.25} className="text-[#c8102e] shrink-0" />
            <h2 className="m-0 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950">
              Meet AlicoRemit at the Event
            </h2>
          </div>
          <p className="m-0 mb-6 text-[16px] md:text-[17px] leading-[1.8] text-zinc-600">
            Connect with the AlicoRemit team and discover more about their
            international money transfer services and approach to cross-border
            financial connectivity.
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
                    London
                  </span>
                </div>
              </div>
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
              MEET ALICOREMIT AT THE EVENT!
            </h2>
            <p className="m-0 mb-7 text-[14px] md:text-[15px] text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Connect with the AlicoRemit team and discover more about their
              international money transfer services and approach to cross-border
              financial connectivity.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="!m-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold !text-zinc-950 no-underline transition-all hover:bg-[#c8102e] hover:!text-white"
              >
                Visit AlicoRemit Website
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
              AlicoRemit — Connecting people across borders · www.alicoremit.co.uk
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AlicoRemitSponsorDetails2026;
