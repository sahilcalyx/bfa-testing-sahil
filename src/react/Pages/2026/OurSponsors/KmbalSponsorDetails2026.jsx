import { Helmet } from "react-helmet";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Award,
  BadgeCheck,
  Building2,
  Clock,
  ExternalLink,
  Eye,
  Fingerprint,
  Globe2,
  Handshake,
  MapPin,
  Medal,
  Scale,
  ScanFace,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

/* TODO: replace with Kmbal 2026 banner when available */
/* TODO: replace with Kmbal 2026 banner when available */
const BANNER_IMG =
  "/assets/img/sponsor-logo/sponsor-banner-strip-2026/kmbal-details-banner-2026.png";
const SITE_URL = "https://en.kmbal.com/";
const PAGE_PATH = "/kmbal-sponsor-details-2026";
const OG_IMAGE = `https://britfintechawards.com${BANNER_IMG}`;

const highlights = [
  {
    icon: Scale,
    title: "FCA & HMRC",
    desc: "Licensed and regulated for trusted transfers",
  },
  {
    icon: MapPin,
    title: "Glasgow & London",
    desc: "UK headquarters with a London branch",
  },
  {
    icon: Award,
    title: "Award Winner 2025",
    desc: "Compliance Innovator of the Year",
  },
  {
    icon: Medal,
    title: "Silver Sponsor 2026",
    desc: "Returning to Brit FinTech Awards",
  },
];

const keyFeatures = [
  {
    icon: BadgeCheck,
    title: "FCA Licensed & HMRC Supervised",
    desc: "Operating under robust regulatory standards for trusted and compliant money transfer services.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "Send money quickly and securely with full regulatory compliance. Kmbal connects underserved communities in Sudan, Yemen, Chad, Ethiopia, and South Sudan while enabling reliable international transfers across the Middle East, Africa, and beyond. Funds can be received in either local or foreign currency, where available.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Security & Compliance",
    desc: "Automated KYC verification, facial recognition, sanctions screening and real-time transaction monitoring provide maximum protection for every transfer.",
  },
  {
    icon: Smartphone,
    title: "Technology-Driven Experience",
    desc: "Modern iOS and Android apps, Open Banking integration, real-time exchange rates, push notifications, and a fully digital transfer journey.",
  },
  {
    icon: Handshake,
    title: "Strategic Global Partnerships",
    desc: "Collaborating with trusted organisations including ClearBank, Trust Payments, Western Union, MoneyGram, Apple Pay, and Open Banking to deliver faster, more reliable payment services.",
  },
  {
    icon: Clock,
    title: "24/7 Sending Money",
    desc: "Transfer money whenever you need, day or night, through the Kmbal mobile app. Cash transfer accepted in branches during working hours only.",
  },
];

const securityFeatures = [
  {
    icon: Scale,
    title: "FCA Licensed",
    desc: "Authorised under strict UK regulatory standards for money transfer services.",
  },
  {
    icon: Building2,
    title: "HMRC Supervised",
    desc: "Supervised for anti-money laundering compliance and financial crime controls.",
  },
  {
    icon: Fingerprint,
    title: "Automated KYC",
    desc: "Streamlined identity verification to onboard customers securely and efficiently.",
  },
  {
    icon: ScanFace,
    title: "Facial Recognition",
    desc: "Biometric checks strengthen account protection and reduce identity fraud.",
  },
  {
    icon: ShieldCheck,
    title: "Sanctions Screening",
    desc: "Every transaction is screened against sanctions lists for compliance assurance.",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    desc: "Continuous transaction monitoring helps detect and prevent suspicious activity.",
  },
];

const partners = [
  "ClearBank",
  "Trust Payments",
  "Western Union",
  "MoneyGram",
  "Apple Pay",
  "Open Banking",
];

const KmbalSponsorDetails2026 = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-['Outfit',system-ui,sans-serif]">
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Helmet>
        <title>Kmbal Ltd | Silver Sponsor | Brit FinTech Awards 2026</title>
        <meta
          name="description"
          content="Kmbal Ltd is a UK-based money transfer and financial services company providing secure, fast, and affordable cross-border payment solutions. Silver Sponsor of Brit FinTech Awards 2026."
        />
        <meta
          name="keywords"
          content="Kmbal, Kmbal Ltd, money transfer, FCA licensed, HMRC supervised, remittance, Brit FinTech Awards sponsor 2026, Compliance Innovator of the Year 2025"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://britfintechawards.com${PAGE_PATH}`}
        />
        <meta
          property="og:title"
          content="Kmbal Ltd: Empowering Global Money Transfers with Trust & Technology | Brit FinTech Awards 2026"
        />
        <meta
          property="og:description"
          content="UK-based money transfer company — FCA licensed, HMRC supervised, and Silver Sponsor of the Brit FinTech Awards 2026."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Kmbal Ltd - Silver Sponsor | Brit FinTech Awards 2026"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kmbal Ltd: Empowering Global Money Transfers with Trust & Technology | Brit FinTech Awards 2026"
        />
        <meta
          name="twitter:description"
          content="UK-based money transfer company — FCA licensed, HMRC supervised, and Silver Sponsor of the Brit FinTech Awards 2026."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="cs-height_90 cs-height_lg_80" />

      {/* Banner */}
      <a
        href={SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Kmbal website"
        className="sponsor-banner-2026 relative block w-full overflow-hidden bg-[#2a0a10] h-[130px] sm:h-[160px] md:h-auto"
        style={{ lineHeight: 0 }}
      >
        <img
          src={`${BANNER_IMG}?v=1`}
          alt="Kmbal Ltd — Silver Sponsor | Brit FinTech Awards 2026"
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
            Kmbal Ltd: Empowering Global Money Transfers with Trust &amp; Technology
          </h1>
        </div>

        {/* Body copy */}
        <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.85] text-zinc-600 mb-12">
          <p className="m-0">
            Kmbal Ltd is a UK-based money transfer and financial services company
            dedicated to providing{" "}
            <strong>secure, fast, and affordable cross-border payment solutions</strong>.
            With a strong commitment to trust, innovation, and
            customer-centric service, Kmbal empowers individuals, businesses, and
            communities to send money confidently across the globe.
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
                  Compliance Innovator of the Year 2025
                </span>
              </p>
              <p className="mt-2.5 mb-0 text-[16px] md:text-[17px] leading-[1.7] text-zinc-600">
                Now returning as a Silver Sponsor of the Brit FinTech Awards 2026, Kmbal
                continues to demonstrate its commitment to shaping the future of secure
                and compliant global payments.
              </p>
            </div>
          </div>

          <p className="m-0">
            Licensed and regulated by the <strong>FCA</strong> and supervised by{" "}
            <strong>HMRC</strong>, Kmbal operates under strict compliance standards to
            ensure every transaction is secure and reliable. Headquartered in{" "}
            <strong>Glasgow</strong> with a branch office in <strong>London</strong>,
            Kmbal combines advanced technology with dedicated customer support to deliver
            a seamless international money transfer experience through its mobile
            applications and digital platform.
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
              Why Choose Kmbal
            </h2>
            <p className="mt-2 mb-0 mx-auto max-w-xl text-[15px] text-zinc-500 leading-relaxed">
              Secure cross-border payments backed by regulation, technology,
              partnerships, and 24/7 accessibility.
            </p>
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

        {/* Partners strip */}
        <section className="mb-14">
          <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-6 md:px-8 md:py-7 text-center">
            <p className="m-0 text-[11px] font-extrabold uppercase tracking-[0.2em] text-zinc-400">
              Strategic Global Partnerships
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
              {partners.map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 text-[13px] font-semibold text-zinc-700"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="mb-14 relative overflow-hidden rounded-[24px] bg-zinc-950 px-6 py-8 md:px-9 md:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,16,46,0.28),transparent_50%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-white/[0.04]"
          />
          <div className="relative z-[1]">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#c8102e] text-white">
                <ShieldCheck size={20} strokeWidth={2.25} />
              </span>
              <h2 className="m-0 text-[22px] md:text-[26px] font-extrabold tracking-tight text-white">
                Security, Compliance &amp; Protection
              </h2>
            </div>
            <p className="m-0 mb-7 max-w-2xl text-[15px] md:text-[16px] leading-[1.7] text-zinc-400">
              Automated KYC, facial recognition, sanctions screening, and real-time
              monitoring—so every transfer is secure and reliable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {securityFeatures.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm transition-colors hover:bg-white/[0.08]"
                >
                  <div className="mb-2 flex items-center gap-2.5">
                    <Icon size={18} strokeWidth={2.25} className="text-[#f2a4b0]" />
                    <h3 className="m-0 text-[15px] font-bold text-white">{title}</h3>
                  </div>
                  <p className="m-0 text-[13px] leading-[1.55] text-zinc-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="mb-12 rounded-2xl border-l-[3px] border-[#c8102e] bg-white px-6 py-6 md:px-8 md:py-7 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-2.5 mb-3">
            <Eye size={20} strokeWidth={2.25} className="text-[#c8102e]" />
            <h2 className="m-0 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950">
              Our Vision
            </h2>
          </div>
          <p className="m-0 mb-4 text-[15px] md:text-[16px] leading-[1.8] text-zinc-600">
            Kmbal&apos;s mission is to <strong>empower people and businesses</strong> by
            providing fast, safe, and cost-effective money transfer services through
            cutting-edge technology, global partnerships, strong compliance, and
            customer-centric support.
          </p>
          <p className="m-0 text-[15px] md:text-[16px] leading-[1.8] text-zinc-600">
            As we expand our global network, we welcome partnerships with banks,
            payment institutions, fintech companies, exchange houses, and other
            strategic partners who share our vision of delivering secure and accessible
            financial services worldwide.
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
              Meet Us at the Event &amp; Discover More!
            </h2>
            <p className="m-0 mb-7 text-[14px] md:text-[15px] text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Connect with Kmbal and explore how we are shaping the future of secure,
              compliant global payments.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="!m-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold !text-zinc-950 no-underline transition-all hover:bg-[#c8102e] hover:!text-white"
              >
                Visit Kmbal Website
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
              en.kmbal.com
            </p>
          </div>
        </section>

        {/* Video — muted autoplay; tap opens YouTube */}
        <section className="mt-12 mb-5">
          <h2 className="m-0 mb-5 text-[22px] md:text-[26px] font-extrabold tracking-tight text-zinc-950 text-center">
            Watch Kmbal
          </h2>
          <a
            href="https://youtu.be/Q-HMjPlRk2c?si=P-uz9fMLSenjFlkk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Kmbal video on YouTube"
            className="relative block w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              title="Kmbal video"
              src="https://www.youtube.com/embed/Q-HMjPlRk2c?autoplay=1&mute=1&loop=1&playlist=Q-HMjPlRk2c&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
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

export default KmbalSponsorDetails2026;
