import React, { useState, useRef, useEffect, Children, cloneElement, isValidElement } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import {
  Award,
  Calendar,
  MapPin,
  Mic2,
  Users,
  Trophy,
  Handshake,
  Sparkles,
  PlayCircle,
  Building2,
  Utensils,
  Network,
  Lightbulb,
  Camera,
  ArrowUpRight,
  ShieldCheck,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const CTA_PRIMARY =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-sm no-underline transition-all duration-300 hover:scale-[1.03] bg-[#b49966] text-[#000132] shadow-lg shadow-[#b49966]/30 hover:shadow-xl hover:shadow-[#b49966]/45 hover:bg-[#c4ad7a]";
const CTA_GHOST =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-sm no-underline transition-all duration-300 hover:scale-[1.03] bg-white text-[#000132] border border-[#b49966]/40 shadow-sm hover:border-[#b49966] hover:text-[#b49966]";

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function SectionTitle({ tag, title, subtitle, icon: Icon }) {
  return (
    <div className="mb-10 md:mb-14 text-center relative z-10">
      {/* Horizontal Line Extending Directly From Left & Right of the Pill */}
      <div className="flex items-center justify-center w-full my-3">
        <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#b49966] to-[#b49966]" />

        <div className="relative shrink-0 inline-flex items-center gap-2.5 rounded-full border border-[#b49966]/60 bg-[#000132] px-6 py-2.5 text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#b49966] shadow-lg shadow-[#000132]/30 mx-3">
          {Icon ? (
            <Icon size={16} strokeWidth={2.5} className="text-[#b49966] shrink-0" />
          ) : (
            <span className="w-2 h-2 rounded-full bg-[#b49966] animate-pulse" />
          )}
          <span>{tag || "BFA 2024"}</span>
        </div>

        <div className="flex-1 h-[2px] bg-gradient-to-r from-[#b49966] via-[#b49966] to-transparent" />
      </div>

      {/* Main Title */}
      {title && (
        <h2 className="mt-4 mb-0 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 leading-[1.15]">
          {title}
        </h2>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-zinc-600 font-medium max-w-2xl mx-auto leading-relaxed m-0">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function initials(name = "") {
  const parts = String(name)
    .replace(/^Mr\.?\s*|^Ms\.?\s*|^Dr\.?\s*/i, "")
    .trim()
    .split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return (parts[0] || "?").slice(0, 2).toUpperCase();
}

function Avatar({ name, img, sizeClass = "w-28 h-28 md:w-32 md:h-32" }) {
  const [failed, setFailed] = useState(false);
  if (img && !failed) {
    return (
      <img
        src={img}
        alt={name}
        onError={() => setFailed(true)}
        className={`${sizeClass} rounded-2xl object-cover object-top border-2 border-white shadow-lg block shrink-0 transition-transform duration-300 hover:scale-105`}
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className={`${sizeClass} grid place-items-center rounded-2xl bg-[#000132] text-[#b49966] font-black tracking-wider shrink-0 text-3xl md:text-4xl shadow-lg border border-[#b49966]/40`}
    >
      {initials(name)}
    </div>
  );
}

const AWARD_GALLERY_2024 = Array.from({ length: 17 }, (_, i) => ({
  src: `/assets/img/gallery/awards/${i + 1}.jpg`,
  alt: `Brit FinTech Awards 2024 moment ${i + 1}`,
})).filter((photo) => !photo.src.endsWith("/4.jpg"));

let marqueeCssReady = false;
function ensureMarqueeCss() {
  if (marqueeCssReady || typeof document === "undefined") return;
  marqueeCssReady = true;
  const style = document.createElement("style");
  style.setAttribute("data-bfa-marquee", "true");
  style.textContent = `
@keyframes bfa-marquee-x {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-50%, 0, 0); }
}
.bfa-marquee-track {
  display: flex;
  width: max-content;
  animation: bfa-marquee-x var(--bfa-marquee-duration, 30s) linear infinite;
  animation-direction: var(--bfa-marquee-direction, normal);
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}
.bfa-marquee-paused .bfa-marquee-track {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .bfa-marquee-track { animation: none !important; }
}
`;
  document.head.appendChild(style);
}

/** CSS GPU marquee — pauses on hover / off-screen to avoid scroll jank */
function InfiniteMarqueeRow({ children, duration = 28, reverse = false }) {
  const rootRef = useRef(null);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    ensureMarqueeCss();
    const el = rootRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "80px 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const paused = hoverPaused || !inView;

  const cloneSet = (suffix) =>
    Children.map(children, (child, i) => {
      if (!isValidElement(child)) return child;
      return cloneElement(child, { key: `${String(child.key ?? i)}-${suffix}` });
    });

  return (
    <div
      ref={rootRef}
      className={`overflow-hidden ${paused ? "bfa-marquee-paused" : ""}`}
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onTouchStart={() => setHoverPaused(true)}
      onTouchEnd={() => setHoverPaused(false)}
    >
      <div
        className="bfa-marquee-track gap-3 sm:gap-3.5"
        style={{
          ["--bfa-marquee-duration"]: `${duration}s`,
          ["--bfa-marquee-direction"]: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 gap-3 sm:gap-3.5">{cloneSet("a")}</div>
        <div className="flex shrink-0 gap-3 sm:gap-3.5" aria-hidden="true">
          {cloneSet("b")}
        </div>
      </div>
    </div>
  );
}

function AwardsMarqueeRow({ items, duration = 32, reverse = false }) {
  return (
    <InfiniteMarqueeRow duration={duration} reverse={reverse}>
      {items.map((photo) => (
        <div
          key={photo.src}
          className="shrink-0 w-[160px] sm:w-[200px] md:w-[220px] aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#b49966] bg-zinc-900"
          style={{ contain: "layout paint style" }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            decoding="async"
            width={220}
            height={165}
            draggable={false}
            className="h-full w-full object-cover select-none pointer-events-none"
          />
        </div>
      ))}
    </InfiniteMarqueeRow>
  );
}

function AwardWinnersShowcase() {
  const mid = Math.ceil(AWARD_GALLERY_2024.length / 2);
  const rowA = AWARD_GALLERY_2024.slice(0, mid);
  const rowB = AWARD_GALLERY_2024.slice(mid);

  return (
    <section className="mb-20 md:mb-28">
      <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-[#000132] border-2 border-[#b49966] shadow-2xl shadow-[#000132]/20">
        <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 md:px-12 pt-8 md:pt-12 lg:pt-14 pb-6 md:pb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#b49966]/40 bg-[#b49966]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.22em] text-[#b49966] mb-4">
            <Trophy size={14} strokeWidth={2.5} className="text-[#b49966]" />
            Inaugural Award Ceremony
          </span>
          <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Award Winners 2024
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-zinc-300 font-medium leading-relaxed m-0 max-w-2xl mx-auto">
            See who took home the industry’s most coveted honours at the inaugural Brit FinTech Awards.
          </p>
          <div className="mt-6 md:mt-7">
            <NavLink to="/award-winners-2024" className={CTA_PRIMARY}>
              <Trophy size={18} strokeWidth={2.5} className="shrink-0" />
              <span>View Award Winners 2024</span>
              <ArrowUpRight size={18} strokeWidth={2.5} className="shrink-0" />
            </NavLink>
          </div>
        </div>

        <div className="relative z-10 pb-8 md:pb-12 space-y-3 sm:space-y-3.5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 sm:w-16 md:w-24 bg-gradient-to-r from-[#000132] to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 sm:w-16 md:w-24 bg-gradient-to-l from-[#000132] to-transparent"
          />
          <AwardsMarqueeRow items={rowA} duration={28} />
          <AwardsMarqueeRow items={rowB} duration={34} reverse />
        </div>
      </div>
    </section>
  );
}

const SPONSORS_2024 = [
  {
    link: "https://www.calyx-solutions.com",
    img: "/assets/img/sponsor-logo/calyx.png",
    alt: "Calyx Solutions",
    external: true,
  },
  {
    link: "/vyne-gold-sponsor",
    img: "/assets/img/sponsor-logo/Vyne.png",
    alt: "Vyne",
  },
  {
    link: "https://www.gbgplc.com/",
    img: "/assets/img/sponsor-logo/gbg.png",
    alt: "GBG",
    external: true,
  },
  {
    link: "/volume-payments-sponsor",
    img: "/assets/img/sponsor-logo/Volume.png",
    alt: "Volume",
  },
  {
    link: "/travel-cashier-silver-sponsor",
    img: "/assets/img/sponsor-logo/travel-cashier.png",
    alt: "Travel Cashier",
  },
  {
    link: "https://baazmoneytransfer.co.uk/",
    img: "/assets/img/sponsor-logo/baaz.png",
    alt: "Baaz Money",
    external: true,
  },
  {
    link: "https://fxcurrencyltd.co.uk/",
    img: "/assets/img/sponsor-logo/fx-cuurency.png",
    alt: "FX Currency",
    external: true,
  },
  {
    link: "https://kmoney.co.uk/",
    img: "/assets/img/sponsor-logo/kmoney.png",
    alt: "KMoney",
    external: true,
  },
  {
    link: "https://redseamoneytransfer.co.uk/",
    img: "/assets/img/sponsor-logo/redsea.png",
    alt: "Red Sea Money Transfer",
    external: true,
  },
  {
    link: "https://supertransfer.co.uk/",
    img: "/assets/img/sponsor-logo/super-transfer.png",
    alt: "Super Transfer",
    external: true,
  },
  {
    link: "https://sumsub.com/",
    img: "/assets/img/sponsor-logo/sumsub.png",
    alt: "Sumsub",
    external: true,
  },
  {
    link: "https://teeparamexchange.co.uk/",
    img: "/assets/img/sponsor-logo/teeparam.png",
    alt: "Teeparam Exchange",
    external: true,
  },
  {
    link: "https://transferrocket.co.uk/",
    img: "/assets/img/sponsor-logo/transfer-rocket.png",
    alt: "Transfer Rocket",
    external: true,
  },
  {
    link: "https://mathbeecom.co.uk/",
    img: "/assets/img/sponsor-logo/mathbeecom.png",
    alt: "Mathbeecom",
    external: true,
  },
  {
    link: "https://www.webuyanycurrency.com/",
    img: "/assets/img/sponsor-logo/Mercury-Danati.png",
    alt: "Mercury Danati",
    external: true,
  },
];

function SponsorLogoLink({ sponsor }) {
  const className =
    "shrink-0 w-[140px] sm:w-[160px] md:w-[170px] h-[84px] sm:h-[92px] md:h-[96px] rounded-2xl bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center px-3 transition-colors duration-200 hover:border-[#b49966]/50";

  const img = (
    <img
      src={sponsor.img}
      alt={sponsor.alt}
      loading="lazy"
      decoding="async"
      draggable={false}
      className="max-h-[60px] sm:max-h-[64px] max-w-full object-contain pointer-events-none"
    />
  );

  if (sponsor.external) {
    return (
      <a
        href={sponsor.link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        title={sponsor.alt}
      >
        {img}
      </a>
    );
  }

  return (
    <NavLink to={sponsor.link} className={className} title={sponsor.alt}>
      {img}
    </NavLink>
  );
}

function SponsorMarqueeRow({ items, duration = 28, reverse = false }) {
  return (
    <InfiniteMarqueeRow duration={duration} reverse={reverse}>
      {items.map((sponsor) => (
        <SponsorLogoLink key={sponsor.alt} sponsor={sponsor} />
      ))}
    </InfiniteMarqueeRow>
  );
}

function SponsorsShowcase2024() {
  const mid = Math.ceil(SPONSORS_2024.length / 2);
  const rowA = SPONSORS_2024.slice(0, mid);
  const rowB = SPONSORS_2024.slice(mid);

  return (
    <section className="relative mb-20 md:mb-28 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center mb-8 md:mb-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#b49966]/30 bg-[#b49966]/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.22em] text-[#b49966] mb-4">
          <Handshake size={14} strokeWidth={2.5} className="text-[#b49966]" />
          Supporting Partners
        </span>
        <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950">
          Supporting FinTech Excellence
        </h2>
        <p className="mt-3 md:mt-4 text-base md:text-lg text-zinc-600 font-medium leading-relaxed m-0 max-w-2xl mx-auto">
          Brit FinTech Awards 2024 was supported by organisations committed to fostering innovation, excellence, and collaboration across financial services.
        </p>
        <div className="mt-6 md:mt-7">
          <NavLink to="/our-sponsors" className={CTA_PRIMARY}>
            <span>View 2024 sponsors</span>
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </NavLink>
        </div>
      </div>

      <div className="relative space-y-3 sm:space-y-3.5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-zinc-50 via-zinc-50/85 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-zinc-50 via-zinc-50/85 to-transparent"
        />
        <SponsorMarqueeRow items={rowA} duration={26} />
        <SponsorMarqueeRow items={rowB} duration={30} reverse />
      </div>
    </section>
  );
}

const keynotes = [
  {
    name: "Mr. Vishal Patil",
    role: "Founder & CEO",
    company: "Calyx Solutions, Brit FinTech Awards & MSB Association",
    img: "/assets/img/bfa-legacy/vishal-patil-2.png",
    quote:
      "From industry solutions to industry recognition: the journey behind Calyx, the MSB Association UK, and the creation of Brit FinTech Awards.",
    points: [
      "The evolution of CEBS, CS Remit & Calyx Money",
      "Supporting the growth of the MSB sector",
      "The vision behind the MSB Association UK",
      "Why Brit FinTech Awards was created",
    ],
  },
  {
    name: "Mr. Tomer Shavit",
    role: "VP Revenue & Country Manager",
    company: "Vyne",
    img: "/assets/img/bfa-legacy/Tomer-Shavit.png",
    quote:
      "Reimagining international money transfers through Open Banking and digital innovation.",
    points: [
      "Reducing the cost of international transfers",
      "The growth of Open Banking payments",
      "Financial inclusion through digital innovation",
      "Smarter and more seamless payment experiences",
    ],
  },
];

const panelists = [
  {
    name: "Mr. Richard Spink",
    role: "Director of Channel & Partnerships, IDV & Fraud",
    company: "GBG",
    img: "/assets/img/bfa-legacy/Richard-Spink.png",
    bio: "Shared insights on digital identity, fraud prevention, and building trust in an increasingly cashless world.",
    linkedin: "https://www.linkedin.com/in/richardspink/",
  },
  {
    name: "Mr. Simone Martinelli",
    role: "Co-Founder & CEO",
    company: "Volume",
    img: "/assets/img/bfa-legacy/Simone-Martinelli-2024.png",
    bio: "Spoke on the shift towards digital payments and the future of banking infrastructure for MSBs.",
    cta: "/simone-martinelli-volume",
    linkedin: "https://www.linkedin.com/in/simonem88/",
  },
];

const judges = [
  {
    name: "Mr. Giordano Cortese",
    role: "Partnerships & Acquisition Senior Manager",
    company: "First Rate Exchange Services Ltd",
    img: "/assets/img/event-conference/bfa-jurry1.png",
    cta: "/judges/giordano-cortese",
    linkedin: "https://www.linkedin.com/in/giordano-cortese-b5a86a11/",
  },
  {
    name: "Mr. Bharat Rai",
    role: "Regional Workplace Manager",
    company: "CBRe",
    img: "/assets/img/event-conference/bfa-jurry2.png",
    cta: "/judges/bharat-rai",
    linkedin: "https://www.linkedin.com/in/bharat-rai-9a674512/",
  },
];

const highlights = [
  { icon: Users, label: "70+ Industry Professionals in Attendance" },
  { icon: Award, label: "Inaugural Brit FinTech Awards Ceremony" },
  { icon: Mic2, label: "Thought-Provoking Keynote Sessions" },
  { icon: Lightbulb, label: "Engaging Industry Panel Discussions" },
  { icon: Handshake, label: "Sponsor Showcases & Industry Spotlights" },
  { icon: Network, label: "Meaningful Networking & Community Building" },
  { icon: Sparkles, label: "Celebrating Success Across the FinTech Ecosystem" },
  { icon: Utensils, label: "Elegant Buffet Dining Experience" },
];

const BfaLegacy2024 = () => {
  return (
    <div className="min-h-[60vh] bg-zinc-50 text-zinc-900 font-['Outfit',system-ui,sans-serif]">
      <Helmet>
        <title>Brit FinTech Awards 2024 Legacy | BFA</title>
        <meta
          name="description"
          content="Relive the inaugural Brit FinTech Awards 2024 at Level39, Canary Wharf — keynotes, panel, judges, winners and highlights."
        />
      </Helmet>

      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Page header - preserved 100% untouched */}
      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        <div
          className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble bfa-legacy-hero"
          style={{
            backgroundImage:
              'url("/assets/img/event-conference/hero-img.jpg")',
          }}
        >
          <div className="cs-hero_pattern cs-hover_layer3">
            <div className="cs-hero_pattern_in cs-bg_parallax" />
          </div>
          <div className="container wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">
            <div className="cs-hero_text text-left">
              <h1 className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-3 mb-0">
                Brit FinTech Awards 2024
              </h1>
              <p className="text-left text-white mb-0">
                The inaugural evening celebrating FinTech innovation and excellence.
              </p>
            </div>
          </div>
          <div
            className="cs-hero_img cs-bg"
            style={{
              backgroundImage:
                'url("/assets/img/creative-agency/hero-img.jpg")',
            }}
          >
            <div className="cs-hero_img_circle" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative overflow-hidden">
        {/* Diagonal Gradient Blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#b49966]/10 via-[#000132]/5 to-transparent rounded-full blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-[#b49966]/10 via-[#b49966]/15 to-transparent rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-wrap justify-center gap-3.5 mb-14">
            <NavLink to="/bfa-legacy" className={CTA_GHOST}>
              <ChevronLeft size={18} strokeWidth={2.5} className="shrink-0" />
              Back to Legacy
            </NavLink>
            <NavLink to="/bfa-legacy/2025" className={CTA_GHOST}>
              View 2025
              <ChevronRight size={18} strokeWidth={2.5} className="shrink-0" />
            </NavLink>
          </div>

          {/* Section 1: The Venue & Setting */}
          <section className="mb-20 md:mb-28">
            <SectionTitle
              tag="The Venue"
              title="Hosted at Level39"
              subtitle="Where Innovation Met Recognition · 10 October 2024 | Canary Wharf, London"
              icon={Building2}
            />

            {/* Core Mission Banner */}
            <div className="relative overflow-hidden rounded-[32px] bg-[#000132] p-8 md:p-12 text-white shadow-xl shadow-[#000132]/30 mb-8 border border-[#b49966]/30">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#b49966]/25 to-transparent rounded-full blur-3xl"
              />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#b49966]/50 bg-[#b49966]/10 px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] text-[#b49966] mb-3 backdrop-blur-md">
                  <Sparkles size={13} className="text-[#b49966]" />
                  Inaugural BFA 2024 Platform
                </span>
                <h3 className="m-0 text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                  Building the Foundation for FinTech Excellence.
                </h3>
                <p className="mt-3.5 mb-0 text-base md:text-lg text-[#b49966]/90 font-medium leading-relaxed">
                  Brit FinTech Awards 2024 marked the beginning of a premier platform dedicated to bringing the financial services community together.
                </p>
              </div>
            </div>

            {/* Story + Image */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              <div className="flex-1 min-w-0 space-y-5 text-base md:text-lg leading-[1.85] text-zinc-700 font-normal">
                <p className="m-0">
                  Hosted at Level39, one of Europe’s leading fintech innovation hubs, Brit FinTech Awards 2024 brought together fintech pioneers, payment specialists, regulators, compliance experts, and industry leaders at the heart of London’s thriving financial ecosystem.
                </p>
                <p className="m-0">
                  Located within Canary Wharf, the venue reflected the innovative spirit of the event, providing the ideal setting to celebrate organisations and individuals shaping the future of financial services through technology, collaboration, and forward-thinking solutions.
                </p>
                <p className="m-0">
                  Brit FinTech Awards 2024 marked the beginning of a platform dedicated to bringing the financial services community together. From industry discussions to award celebrations, the evening set the tone for what was to come.
                </p>
              </div>

              <div className="w-full max-w-[480px] lg:w-[480px] lg:max-w-[480px] lg:shrink-0 mx-auto lg:mx-0 aspect-[5/4] overflow-hidden rounded-2xl">
                <img
                  src="/assets/img/one-canada-square.jpg"
                  alt="One Canada Square, Canary Wharf — home of Level39 for Brit FinTech Awards 2024"
                  className="w-full h-full object-cover object-[center_65%] scale-110 block"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Award Winners 2024 */}
          <AwardWinnersShowcase />

          {/* Section 3: Sponsors */}
          <SponsorsShowcase2024 />

          {/* Section 4: Keynote Speakers */}
          <section className="mb-20 md:mb-28">
            <SectionTitle
              tag="Keynote Speakers"
              title="Voices of FinTech"
              subtitle="Industry leaders shared their perspectives on innovation, growth, and the future of financial services."
              icon={Mic2}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {keynotes.map((person) => (
                <article
                  key={person.name}
                  className="group relative overflow-hidden rounded-[36px] border border-zinc-200/90 bg-white p-7 sm:p-9 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-zinc-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Speaker Image Container — square photos fill 1:1 frame */}
                    <div className="relative mb-6 mx-auto w-full max-w-[300px] sm:max-w-[320px]">
                      <div className="relative overflow-hidden rounded-3xl border-[3px] border-[#b49966] bg-[#000132] shadow-xl shadow-[#b49966]/20 aspect-square ring-1 ring-[#b49966]/40">
                        <Avatar
                          name={person.name}
                          img={person.img}
                          sizeClass="absolute inset-0 w-full h-full object-cover object-center !rounded-none !border-0 !shadow-none hover:!scale-105"
                        />
                      </div>
                    </div>

                    {/* Speaker Header & LinkedIn */}
                    <div className="text-center mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#000132] text-[#b49966] border border-[#b49966]/50 text-xs font-black uppercase tracking-widest mb-3 shadow-md">
                        <Mic2 size={13} className="text-[#b49966]" />
                        Keynote Speaker
                      </span>

                      <div className="flex items-center justify-center gap-2.5">
                        <h3 className="m-0 text-2xl md:text-3xl font-black text-zinc-950 group-hover:text-[#b49966] transition-colors">
                          {person.name}
                        </h3>
                      </div>

                      <p className="mt-1.5 mb-0 text-xs md:text-sm font-extrabold text-[#b49966] uppercase tracking-wider">
                        {person.role}
                      </p>
                      <p className="mt-0.5 mb-0 text-xs md:text-sm text-zinc-500 font-semibold">
                        {person.company}
                      </p>
                    </div>

                    {/* Dark Obsidian Featured Quote Box */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-950 via-[#000132] to-zinc-950 p-6 text-white shadow-xl border border-[#b49966]/30 my-6 text-center min-h-[148px] md:min-h-[168px] flex items-center justify-center">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 bg-[#b49966]/30 rounded-full blur-2xl"
                      />
                      <blockquote className="relative z-10 m-0 text-sm md:text-base font-semibold leading-relaxed text-zinc-100 italic">
                        “{person.quote}”
                      </blockquote>
                    </div>

                    {/* Styled Keynote Takeaways List */}
                    <div className="space-y-2.5 my-6">
                      <span className="text-xs font-black uppercase tracking-wider text-zinc-400 block mb-3">
                        Key Discussion Points:
                      </span>
                      {person.points.map((p) => (
                        <div
                          key={p}
                          className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-100/80 text-xs sm:text-sm font-semibold text-zinc-800 leading-snug"
                        >
                          <Sparkles size={15} className="text-[#b49966] shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </article>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3.5">
              <NavLink to="/key-notes-gallery-2024" className={CTA_PRIMARY}>
                Keynote gallery
              </NavLink>
            </div>
          </section>

          {/* Section 5: Industry Discussion Panel */}
          <section className="mb-20 md:mb-28">
            <SectionTitle
              tag="Industry Discussion Panel"
              title="Exploring the Future of FinTech"
              subtitle="The 2024 discussion panel highlighted the realities of cashless payments, banking access challenges, and the future of financial services."
              icon={Users}
            />

            {/* Theme-Colored Framed Speaker Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 max-w-4xl mx-auto justify-items-center">
              {panelists.map((person) => (
                <article
                  key={person.name}
                  className="group relative rounded-[32px] border border-zinc-200/90 bg-white p-7 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-zinc-300 flex flex-col justify-between"
                >
                  {/* Top Image Container */}
                  <div className="relative mb-6 mx-auto w-full max-w-[260px]">
                    <div className="relative overflow-hidden rounded-2xl border-[3px] border-[#b49966] bg-[#000132] shadow-md shadow-[#b49966]/20 aspect-square flex items-center justify-center">
                      <Avatar
                        name={person.name}
                        img={person.img}
                        sizeClass="w-full h-full object-cover object-top !rounded-none !border-0 !shadow-none"
                      />
                    </div>
                  </div>

                  {/* Speaker Name, Inline LinkedIn Icon & Role Metadata */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center gap-2">
                      <h3 className="m-0 text-xl font-black text-zinc-950 group-hover:text-[#b49966] transition-colors">
                        {person.name}
                      </h3>
                      {person.linkedin && (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`${person.name}'s LinkedIn`}
                          className="h-6 w-6 grid place-items-center rounded-md bg-[#0077b5] text-white hover:scale-110 transition-transform shadow-sm shrink-0"
                        >
                          <LinkedinIcon size={13} />
                        </a>
                      )}
                    </div>

                    <p className="mt-1.5 mb-0 text-xs font-extrabold text-[#b49966] uppercase tracking-wider">
                      {person.role}
                    </p>
                    <p className="mt-0.5 mb-0 text-xs text-zinc-500 font-semibold">
                      {person.company}
                    </p>
                  </div>

                  {/* Bottom Quote / Topic Row with Theme-Colored Circular Icon Badge */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center gap-3.5 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#b49966] to-[#000132] text-white grid place-items-center shrink-0 shadow-md shadow-[#b49966]/20">
                      <Mic2 size={18} strokeWidth={2.25} />
                    </div>

                    <blockquote className="m-0 text-xs md:text-sm font-bold text-zinc-900 leading-snug">
                      “{person.bio}”
                    </blockquote>
                  </div>

                </article>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3.5">
              <NavLink to="/discussion-panel-2024" className={CTA_PRIMARY}>
                Discussion gallery
              </NavLink>
            </div>
          </section>

          {/* Section 6: Event Highlights */}
          <section className="mb-20 md:mb-28">
            <SectionTitle
              tag="Event Highlights"
              title="Celebrating Innovation Across Financial Services"
              icon={Sparkles}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex gap-4 items-center p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 text-xs md:text-sm font-bold text-zinc-900 shadow-sm transition-all duration-300 hover:border-[#b49966]/40 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Icon size={24} strokeWidth={2.25} className="text-[#b49966] shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Judges */}
          <section className="mb-20 md:mb-28">
            <SectionTitle
              tag="Judging Panel"
              title="Meet the Judges"
              subtitle="A distinguished judging panel reviewed nominations from organisations across the fintech ecosystem."
              icon={ShieldCheck}
            />

            <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto mb-10">
              {judges.map((person) => (
                <article
                  key={person.name}
                  className="group relative overflow-hidden rounded-[32px] border border-zinc-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-zinc-300 flex flex-col justify-between w-full sm:w-[360px] md:w-[400px] shrink-0"
                >
                  {/* Executive Header Banner Accent */}
                  <div className="h-28 md:h-32 bg-[#000132] relative overflow-hidden border-b-2 border-[#b49966]">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-xl"
                    />
                  </div>

                  <div className="px-6 pb-7 pt-0 text-center flex-1 flex flex-col justify-between">
                    {/* Centered Avatar Overlapping Header */}
                    <div className="relative -mt-16 md:-mt-[4.5rem] mb-5 flex justify-center">
                      <Avatar
                        name={person.name}
                        img={person.img}
                        sizeClass="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white shadow-xl ring-[3px] ring-[#b49966] object-cover object-top"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="m-0 text-xl md:text-2xl font-black text-zinc-950 group-hover:text-[#b49966] transition-colors">
                        {person.name}
                      </h3>
                      <p className="mt-2 mb-0 text-xs md:text-sm font-extrabold leading-tight text-[#b49966] uppercase tracking-wider">
                        {person.role}
                      </p>
                      <p className="mt-1.5 mb-0 text-xs md:text-sm font-medium text-zinc-500">
                        {person.company}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 flex items-center justify-between border-t border-zinc-100">
                      <NavLink
                        to={person.cta}
                        className="inline-flex items-center gap-1 text-xs font-extrabold text-[#b49966] no-underline hover:translate-x-1 transition-transform"
                      >
                        View profile <ArrowUpRight size={14} />
                      </NavLink>
                      {person.linkedin && (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`${person.name}'s LinkedIn`}
                          className="h-8 w-8 grid place-items-center rounded-xl bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-sm"
                        >
                          <LinkedinIcon size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3.5">
              <NavLink to="/judges" className={CTA_PRIMARY}>
                View all judges
              </NavLink>
            </div>
          </section>

          {/* Section 8: Video & Media Playlists */}
          <section className="mb-20 md:mb-28">
            <SectionTitle
              tag="YouTube Highlights"
              title="Watch Brit FinTech Awards 2024 Playlists"
              subtitle="Explore video highlights, winner celebrations, and attendee testimonials from BFA 2024."
              icon={PlayCircle}
            />

            {/* 3 YouTube Playlists Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
              {/* Playlist 1: Brit FinTech Awards 2024 */}
              <div className="group relative overflow-hidden rounded-[32px] border border-zinc-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-zinc-300 flex flex-col justify-between">
                <div>
                  <h3 className="m-0 text-xl font-black text-zinc-950 mb-4 group-hover:text-[#b49966] transition-colors min-h-[56px] flex items-center">
                    Brit FinTech Awards 2024
                  </h3>
                  <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden border border-zinc-200/80 bg-zinc-950 shadow-md mb-6">
                    <iframe
                      className="absolute inset-0 w-full h-full border-0"
                      src="https://www.youtube.com/embed/videoseries?list=PLrge5A87R3JaDWXm0Z8Ov4qpNKULWjQgw"
                      title="Brit FinTech Awards 2024 Playlist"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100 flex justify-center">
                  <a
                    href="https://youtube.com/playlist?list=PLrge5A87R3JaDWXm0Z8Ov4qpNKULWjQgw&si=2AQEagw42YvKbrev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black text-[#b49966] uppercase tracking-wider no-underline hover:translate-x-1 transition-transform"
                  >
                    <PlayCircle size={16} />
                    <span>Watch BFA 2024 Playlist</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Playlist 2: Brit Fintech Award 2024 Winners */}
              <div className="group relative overflow-hidden rounded-[32px] border border-zinc-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-zinc-300 flex flex-col justify-between">
                <div>
                  <h3 className="m-0 text-xl font-black text-zinc-950 mb-4 group-hover:text-[#b49966] transition-colors min-h-[56px] flex items-center">
                    Brit Fintech Award 2024 Winners
                  </h3>
                  <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden border border-zinc-200/80 bg-zinc-950 shadow-md mb-6">
                    <iframe
                      className="absolute inset-0 w-full h-full border-0"
                      src="https://www.youtube.com/embed/videoseries?list=PLrge5A87R3JbA0YIz1qkuPIT9hsZPWVAk"
                      title="Brit Fintech Award 2024 Winners Playlist"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100 flex justify-center">
                  <a
                    href="https://youtube.com/playlist?list=PLrge5A87R3JbA0YIz1qkuPIT9hsZPWVAk&si=vdyZn2xE9jQ_Tjk7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black text-[#b49966] uppercase tracking-wider no-underline hover:translate-x-1 transition-transform"
                  >
                    <PlayCircle size={16} />
                    <span>Watch Winners Playlist</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Playlist 3: Brit Fintech Awards 2024 - Testimonials */}
              <div className="group relative overflow-hidden rounded-[32px] border border-zinc-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-zinc-300 flex flex-col justify-between">
                <div>
                  <h3 className="m-0 text-xl font-black text-zinc-950 mb-4 group-hover:text-[#b49966] transition-colors min-h-[56px] flex items-center">
                    Brit Fintech Awards 2024 - Testimonials
                  </h3>
                  <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden border border-zinc-200/80 bg-zinc-950 shadow-md mb-6">
                    <iframe
                      className="absolute inset-0 w-full h-full border-0"
                      src="https://www.youtube.com/embed/videoseries?list=PLrge5A87R3JaRQp2ob6aV8SVsrkkegc8z"
                      title="Brit Fintech Awards 2024 Testimonials Playlist"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100 flex justify-center">
                  <a
                    href="https://youtube.com/playlist?list=PLrge5A87R3JaRQp2ob6aV8SVsrkkegc8z&si=7LesTe20DKRxCmWa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black text-[#b49966] uppercase tracking-wider no-underline hover:translate-x-1 transition-transform"
                  >
                    <PlayCircle size={16} />
                    <span>Watch Testimonials Playlist</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3.5">
              <NavLink to="/photo-gallery-2024" className={CTA_PRIMARY}>
                <Camera size={18} /> Open photo gallery
              </NavLink>
              <NavLink to="/video-gallery-2024" className={CTA_GHOST}>
                Open video gallery
              </NavLink>
            </div>
          </section>

          {/* Section 9: Looking Ahead / Legacy Hub */}
          <section className="relative overflow-hidden rounded-[36px] bg-[#000132] px-8 py-16 md:px-14 md:py-20 text-center shadow-[0_24px_60px_rgba(0,1,50,0.35)] border border-[#b49966]/25">
            {/* Diagonal Gradient Blobs */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-[#b49966]/35 to-transparent rounded-full blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-16 w-80 h-80 bg-gradient-to-tr from-[#b49966]/20 via-[#b49966]/10 to-transparent rounded-full blur-3xl"
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#b49966]/40 bg-[#b49966]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#b49966] mb-6">
                <Sparkles size={14} className="text-[#b49966]" />
                Legacy & Impact
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white m-0 leading-tight">
                Building the Foundation for the Future
              </h2>
              <p className="mt-5 text-base md:text-lg text-zinc-300 font-medium leading-relaxed max-w-2xl mx-auto m-0">
                As the inaugural chapter of the BFA story, 2024 brought the community together and paved the way for an even bigger celebration in 2025.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <NavLink to="/bfa-legacy/2025" className={CTA_PRIMARY}>
                  <span>Explore 2025 legacy</span>
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </NavLink>
                <NavLink to="/bfa-legacy" className={CTA_GHOST}>
                  Back to Legacy hub
                </NavLink>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BfaLegacy2024;
