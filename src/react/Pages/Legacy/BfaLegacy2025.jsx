import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import {
  Calendar,
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
  Eye,
  ArrowUpRight,
  ShieldCheck,
  MessageSquare,
  Camera,
  LayoutGrid,
} from "lucide-react";

const CTA_PRIMARY =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-sm no-underline transition-all duration-300 hover:scale-[1.03] bg-[#f40181] text-white shadow-md shadow-[#f40181]/20 hover:shadow-lg hover:bg-[#d0026e]";
const CTA_GHOST =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-sm no-underline transition-all duration-300 hover:scale-[1.03] bg-white text-zinc-900 border border-zinc-200/90 shadow-sm hover:border-[#f40181] hover:text-[#f40181]";

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
        <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#f40181]/40 to-[#00ffff]" />

        <div className="relative shrink-0 inline-flex items-center gap-2.5 rounded-full border border-[#f40181]/30 bg-white px-6 py-2.5 text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#f40181] shadow-sm mx-3">
          {Icon ? (
            <Icon size={16} strokeWidth={2.5} className="text-[#f40181] shrink-0" />
          ) : (
            <span className="w-2 h-2 rounded-full bg-[#00ffff] ring-2 ring-[#f40181]/30" />
          )}
          <span>{tag || "BFA 2025"}</span>
        </div>

        <div className="flex-1 h-[2px] bg-gradient-to-r from-[#00ffff] via-[#f40181]/40 to-transparent" />
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
      className={`${sizeClass} grid place-items-center rounded-2xl bg-[#f40181] text-white font-black tracking-wider shrink-0 text-3xl md:text-4xl shadow-md border-2 border-[#00ffff]/50`}
    >
      {initials(name)}
    </div>
  );
}

function AwardWinnersParallax() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.05, 1.12]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full mb-20 md:mb-28 overflow-hidden bg-zinc-950"
    >
      <div className="relative min-h-[460px] sm:min-h-[520px] md:min-h-[600px] lg:min-h-[680px]">
        <motion.div
          style={{ y, scale }}
          className="absolute inset-x-0 -top-[25%] h-[150%] w-full will-change-transform"
        >
          <img
            src="/assets/img/banner-slider/groupBanner.webp"
            alt="Brit FinTech Awards 2025 winners"
            className="w-full h-full object-cover object-center pointer-events-none select-none"
          />
        </motion.div>

        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950/80"
          aria-hidden="true"
        />

        <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center pb-8 sm:pb-10 md:pb-14 pt-24">
          <div className="relative w-full max-w-3xl mx-auto px-4 md:px-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[140%] rounded-full bg-zinc-950/70 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[70%] h-[80%] rounded-full bg-[#f40181]/15 blur-2xl"
            />

            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#f40181]/40 bg-black/40 px-4 py-1.5 text-xs font-black uppercase tracking-[0.22em] text-[#f40181] mb-3 backdrop-blur-sm">
                  <Trophy size={14} strokeWidth={2.5} className="text-[#f40181]" />
                  Celebrating Excellence
                </span>
                <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                  Award Winners 2025
                </h2>
                <p className="mt-3 text-base md:text-lg text-zinc-200 font-medium leading-relaxed m-0">
                  Meet the trailblazers, innovators, and industry leaders recognised on the night across payments, fintech, compliance, and digital banking.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5">
                <NavLink
                  to="/award-winners-2025"
                  className={`${CTA_PRIMARY}`}
                >
                  <Trophy size={16} strokeWidth={2.5} className="text-[#00ffff]" />
                  <span>View Award Winners 2025</span>
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </NavLink>
                <NavLink
                  to="/photo-gallery-2025"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-sm no-underline transition-all duration-300 hover:scale-[1.03] bg-white text-zinc-950 shadow-md hover:bg-[#00ffff]"
                >
                  <Camera size={16} strokeWidth={2.5} />
                  <span>View Photos 2025</span>
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SPONSORS_2025 = [
  {
    link: "https://calyx-solutions.com/",
    img: "/assets/img/sponsor-logo/calyx-2025.png",
    alt: "Calyx Solutions",
    external: true,
  },
  {
    link: "/fast-track-money-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/Fast-track-money-logo.png",
    alt: "Fast Track Money",
  },
  {
    link: "/mercury-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/Mercury-Danati-25.png",
    alt: "Mercury Danati",
  },
  {
    link: "/leatherback-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/leatherback-logo.png",
    alt: "Leatherback",
  },
  {
    link: "/volume-pay-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/volume-silver-2025.png",
    alt: "Volume Pay",
  },
  {
    link: "/travel-cashier-details-2025",
    img: "/assets/img/sponsor-logo/travel-cashier-2025.png",
    alt: "Travel Cashier",
  },
  {
    link: "/endoz-disbuz-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/endoz-logo-2025.png",
    alt: "Endoz",
  },
  {
    link: "/endoz-disbuz-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/disbuz-logo-2025.png",
    alt: "Disbuz",
  },
  {
    link: "/ecex-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/ECEX-logo.png",
    alt: "ECEX",
  },
  {
    link: "/leftover-currency-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/Leftover-currency-logo.png",
    alt: "Leftover Currency",
  },
  {
    link: "/qfremit-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/qfremit-sponsor-Logo.png",
    alt: "QF Remit",
  },
  {
    link: "/lumine-solicitors-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/Luminelaw-sponsor-Logo.png",
    alt: "Lumine Law",
  },
  {
    link: "/clear-junction-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/clear-junction-logo-2025.png",
    alt: "Clear Junction",
  },
  {
    link: "/ifepay-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/IfePay-Strategic-Sponsor-Logo.png",
    alt: "IfePay",
  },
  {
    link: "/myremit-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/Myremit-sponsor-Logo.png",
    alt: "MyRemit",
  },
  {
    link: "/kmbal-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/kmbal-sponsor-Logo.png",
    alt: "KMBAL",
  },
  {
    link: "/red-sea-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/red-sea-sponsor-logo.png",
    alt: "Red Sea",
  },
  {
    link: "/chrisborough-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/chrisborough-sponsor-logo.png",
    alt: "Chrisborough",
  },
  {
    link: "/purse-baas-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/Purse-Baas-sponsor-logo.png",
    alt: "Purse Baas",
  },
  {
    link: "/teeparam-exchange-details-2025",
    img: "/assets/img/sponsor-logo/Teeparam-sponsor-Logo.png",
    alt: "Teeparam Exchange",
  },
  {
    link: "/baazmoney-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/baazmoney-sponsor-Logo.png",
    alt: "BaazMoney",
  },
  {
    link: "/finestpay-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/finestPay-sponsor-Logo.png",
    alt: "FinestPay",
  },
  {
    link: "/belyfted-sponsor-details-2025",
    img: "/assets/img/sponsor-logo/Belyfted-sponsor-Logo.png",
    alt: "Belyfted",
  },
  {
    link: "https://necmoney.com/",
    img: "/assets/img/sponsor-logo/Nec-money-sponsor-logo.png",
    alt: "Nec Money",
    external: true,
  },
  {
    link: "https://kmoney.co.uk/",
    img: "/assets/img/sponsor-logo/KMoney-Sponsor-Logo.png",
    alt: "KMoney",
    external: true,
  },
];

function SponsorLogoLink({ sponsor }) {
  const className =
    "shrink-0 w-[150px] sm:w-[170px] h-[88px] sm:h-[96px] rounded-2xl bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center px-3 transition-all duration-300 hover:border-[#f40181]/40 hover:shadow-md hover:-translate-y-0.5";

  const img = (
    <img
      src={sponsor.img}
      alt={sponsor.alt}
      className="max-h-[64px] max-w-full object-contain"
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

function SponsorMarqueeRow({ items, speed = 45, reverse = false }) {
  const x = useMotionValue(0);
  const paused = useRef(false);
  const contentRef = useRef(null);
  const loop = [...items, ...items];

  useAnimationFrame((_, delta) => {
    if (paused.current) return;
    const width = contentRef.current ? contentRef.current.scrollWidth / 2 : 0;
    if (!width) return;
    let next = x.get();
    if (reverse && next === 0) {
      x.set(-width);
      return;
    }
    const move = (speed * delta) / 1000;
    next += reverse ? move : -move;
    if (!reverse && next <= -width) next += width;
    if (reverse && next >= 0) next -= width;
    x.set(next);
  });

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      <motion.div ref={contentRef} style={{ x }} className="flex w-max gap-3.5">
        {loop.map((sponsor, i) => (
          <SponsorLogoLink key={`${sponsor.alt}-${i}`} sponsor={sponsor} />
        ))}
      </motion.div>
    </div>
  );
}

function SponsorsShowcase() {
  const mid = Math.ceil(SPONSORS_2025.length / 2);
  const rowA = SPONSORS_2025.slice(0, mid);
  const rowB = SPONSORS_2025.slice(mid);

  return (
    <section className="relative mb-20 md:mb-28 overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] gap-10 lg:gap-12 items-center">
        <div className="text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f40181]/25 bg-[#f40181]/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.22em] text-[#f40181] mb-4">
            <Handshake size={14} strokeWidth={2.5} className="text-[#f40181]" />
            Strategic Partnerships
          </span>
          <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950">
            Driving <span className="text-[#f40181]">Innovation</span> Together
          </h2>
          <p className="mt-4 text-base md:text-lg text-zinc-600 font-medium leading-relaxed m-0 max-w-xl">
            BFA 2025 came to life through the conviction of sponsors and strategic partners who see the future of financial services and are actively building it.
          </p>
          <div className="mt-7 flex flex-wrap justify-start gap-3">
            <NavLink to="/our-sponsors" className={CTA_PRIMARY}>
              <span>View 2025 sponsors</span>
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </NavLink>
          </div>
        </div>

        <div className="relative min-w-0 space-y-3.5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-14 bg-gradient-to-r from-zinc-50 to-transparent z-10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-14 bg-gradient-to-l from-zinc-50 to-transparent z-10"
          />
          <SponsorMarqueeRow items={rowA} speed={42} />
          <SponsorMarqueeRow items={rowB} speed={38} reverse />
        </div>
      </div>
    </section>
  );
}

const keynotes = [
  {
    name: "Mr. Ochebhoya Ekpete",
    role: "CEO",
    company: "Leatherback UK",
    companyLogo: "/assets/img/keynotes/leatherback-logo.png",
    companyUrl: "https://leatherback.co/",
    img: "/assets/img/keynotes/Ochebhoya Ekpete.png",
    quote:
      "From Silence to Networks: Building Infrastructure That Enables Global Payments and Banking.",
    points: [
      "How to build resilient payment networks across regions",
      "The role of infrastructure in financial inclusion",
      "Why innovation thrives through connection and community",
    ],
    cta: "/ochebhoya-ekpete-leatherback",
    linkedin: "https://www.linkedin.com/in/ochebhoya-ekpete/",
    youtubeUrl: "https://youtu.be/6vQkv8m5NjQ?si=ZVbqm9-mOr1e-Yt5",
  },
  {
    name: "Mr. Simone Martinelli",
    role: "Founder & CEO",
    company: "Volume",
    companyLogo: "/assets/img/keynotes/volume-logo.png",
    companyUrl: "https://www.getvolume.com/",
    companyLogoClass: "h-6 md:h-7 max-w-[120px]",
    img: "/assets/img/keynotes/Simone-detail.png",
    quote:
      "Remittance impact one in eight people worldwide yet the system remains slow, costly, and fragmented.",
    points: [
      "The Future of Remittances",
      "Smarter Cross-Border Payments",
      "Stablecoins & Financial Infrastructure",
      "AI-Driven Innovation",
    ],
    cta: "/simone-martinelli-volume",
    linkedin: "https://www.linkedin.com/in/simonem88/",
    youtubeUrl: "https://youtu.be/S_knASu3l5o?si=qEiZbiiMHbrZ_1yo",
  },
];

const panelists = [
  {
    name: "Mr. Wayne Foster",
    role: "Ecosystem Support Specialist",
    company: "Open Banking",
    companyLogo: "/assets/img/discussionpanel/OBL_logotype_darkblu-Large.png",
    img: "/assets/img/discussionpanel/Wayne-Foster-dp.png",
    bio: "Discussed how Open Banking is transforming trust, transparency, and payments.",
    cta: "/wayne-foster-discussion-panel-2025",
    linkedin: "https://www.linkedin.com/in/waynefoster2/",
  },
  {
    name: "Mr. Mario Van Poppel",
    role: "Founder",
    company: "Leftover Currency",
    companyLogo: "/assets/img/discussionpanel/leftover-logo-dp.svg",
    img: "/assets/img/discussionpanel/mario-van-dp.jpg",
    bio: "Spoke on the evolving role of cash in an increasingly digital economy.",
    cta: "/mario-van-poppel-discussion-panel-2025",
    linkedin: "https://www.linkedin.com/in/mariovanpoppel",
  },
  {
    name: "Mr. Denis Kalyapin",
    role: "Chief Growth Officer",
    company: "Clear Junction",
    companyLogo: "/assets/img/discussionpanel/clear-junction-dp.svg",
    img: "/assets/img/discussionpanel/denis-kalyapin-dp.jpg",
    bio: "Shared insights on the rise of stablecoins and the future of borderless finance.",
    cta: "/denis-kalyapin-discussion-panel-2025",
    linkedin: "https://www.linkedin.com/in/denis-kalyapin-8760338/",
  },
];

const judges = [
  {
    name: "Mr. Giordano Cortese",
    role: "Partnerships & Acquisition Senior Manager",
    company: "First Rate Exchange Services Ltd",
    img: "/assets/img/judges2025/giordano-cortese.jpg",
    cta: "/judges/giordano-cortese",
    linkedin: "https://www.linkedin.com/in/giordanocortese1",
  },
  {
    name: "Mr. David Podesta",
    role: "Associate Director, Trust & Safety (Fraud)",
    company: "Viator",
    img: "/assets/img/judges2025/david-podesta.jpg",
    cta: "/david-podesta-judge-details-2025",
    linkedin: "https://www.linkedin.com/in/david-christian-podesta-6677661/",
  },
  {
    name: "Mr. Bharat Rai",
    role: "Workplace Strategy Lead",
    company: "CBRe",
    img: "/assets/img/judges2025/Bharat-Rai.png",
    cta: "/judges/bharat-rai",
    linkedin: "https://www.linkedin.com/in/bharat-rai-mih-3b531157",
  },
  {
    name: "Dr. Nikhil Sapre",
    role: "Lecturer in Finance & Programme Director",
    company: "University of Bristol Business School",
    img: "/assets/img/judges2025/nikhil-sapare.jpg",
    cta: "/nikhil-sapre-judge-details-2025",
    linkedin: "https://www.linkedin.com/in/nikhilsapre",
  },
];

const highlights = [
  { icon: Users, label: "100+ fintech and industry professionals in attendance" },
  { icon: LayoutGrid, label: "Fintech & MSB Exhibit Spaces" },
  { icon: Mic2, label: "Inspiring keynote sessions from industry leaders" },
  { icon: Lightbulb, label: "Expert discussion panel on the future of money" },
  { icon: Trophy, label: "Recognition across multiple award categories" },
  { icon: Network, label: "Meaningful networking and industry connections" },
  { icon: Eye, label: "Insights shaping the future of financial services" },
  { icon: Sparkles, label: "A celebration of innovation and excellence" },
  { icon: Building2, label: "Exclusive FinTech Hub Venue" },
  { icon: Utensils, label: "Elegant Buffet Dining Experience" },
];

const BfaLegacy2025 = () => {
  return (
    <div className="min-h-[60vh] bg-zinc-50 text-zinc-900 font-['Outfit',system-ui,sans-serif]">
      <Helmet>
        <title>Brit FinTech Awards 2025 Legacy | BFA</title>
        <meta
          name="description"
          content="Relive Brit FinTech Awards 2025 at One Great George Street — keynotes, panel, judges, winners, sponsors and highlights."
        />
      </Helmet>

      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Page header */}
      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        <div
          className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
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
                Brit FinTech Awards 2025
              </h1>
              <p className="text-left text-white mb-0">
                More than an Awards Night, it was a celebration of innovation and excellence.
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

      {/* Body content */}
      <div
        className="py-12 md:py-20"
        style={{
          backgroundImage:
            "radial-gradient(#e4e4e7 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Navigation Bar */}
          <div className="flex flex-wrap gap-3 mb-12">
            <NavLink to="/bfa-legacy" className={CTA_GHOST}>
              ← Back to Legacy
            </NavLink>
            <NavLink to="/bfa-legacy/2024" className={CTA_GHOST}>
              View 2024 →
            </NavLink>
          </div>

          {/* Section 1: Evening + Venue */}
          <section className="mb-20 md:mb-28">
            <SectionTitle
              tag="The Evening"
              title="Where Innovation Met Recognition"
              subtitle="Hosted at One Great George Street · 3 October 2025 | London SW1P 3AA | 6PM"
              icon={Calendar}
            />

            {/* Core Mission Banner */}
            <div className="relative mb-10 md:mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f40181]/25 bg-[#f40181]/5 px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] text-[#f40181] mb-3">
                <Sparkles size={13} className="text-[#f40181]" />
                BFA 2025 Mission Statement
              </span>
              <h3 className="m-0 text-2xl sm:text-3xl md:text-4xl font-black text-zinc-950 leading-tight tracking-tight">
                Recognising Innovation.{" "}
                <span className="text-[#f40181]">Celebrating Excellence.</span>{" "}
                Driving the Future of Finance.
              </h3>
              <p className="mt-3.5 mb-0 text-base md:text-lg text-zinc-600 font-medium leading-relaxed max-w-4xl">
                Returning for its second year, Brit FinTech Awards 2025 continued its mission of spotlighting the people and organisations shaping the future of financial services.
              </p>
            </div>

            {/* Story + Image */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              <div className="flex-1 min-w-0 space-y-5 text-base md:text-lg leading-[1.85] text-zinc-700 font-normal">
                <p className="m-0">
                  Set in one of Westminster’s most distinguished event venues, Brit FinTech Awards 2025 welcomed fintech innovators, payment leaders, Money Service Businesses (MSBs), banking partners, regulators, compliance specialists, and technology providers for an evening dedicated to celebrating excellence across financial services.
                </p>
                <p className="m-0">
                  The historic setting of One Great George Street provided the perfect backdrop for an event that recognised the organisations and individuals driving transformation across fintech, payments, remittance, compliance, and digital banking.
                </p>
                <p className="m-0">
                  Brit FinTech Awards 2025 was more than an awards ceremony — it was a gathering of industry leaders, innovators, and changemakers united by a shared vision for the future of finance.
                </p>
              </div>

              <div className="w-full max-w-[480px] lg:w-[480px] lg:max-w-[480px] lg:shrink-0 mx-auto lg:mx-0">
                <img
                  src="/assets/img/event-conference/about.png"
                  alt="Brit FinTech Awards 2025 at One Great George Street"
                  className="w-full h-auto max-h-[420px] object-cover object-center rounded-2xl block"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Keynotes */}
          <section className="mb-20 md:mb-28">
            <SectionTitle
              tag="Keynote Speakers"
              title="Insights From Industry Leaders"
              subtitle="Leading voices from the fintech ecosystem shared perspectives on the trends shaping the future of finance."
              icon={Mic2}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {keynotes.map((person) => (
                <article
                  key={person.name}
                  className="group relative overflow-hidden rounded-[36px] border border-zinc-200/90 bg-white p-7 sm:p-9 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#f40181]/50 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Speaker Image Container */}
                    <div className="relative mb-6 mx-auto w-full max-w-[280px]">
                      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-xl aspect-[4/4] flex items-center justify-center">
                        <Avatar
                          name={person.name}
                          img={person.img}
                          sizeClass="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* Speaker Header & LinkedIn */}
                    <div className="text-center mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f40181] text-white text-xs font-black uppercase tracking-widest mb-3">
                        <Mic2 size={13} className="text-[#00ffff]" />
                        Keynote Speaker
                      </span>

                      <div className="flex items-center justify-center gap-2.5">
                        <h3 className="m-0 text-2xl md:text-3xl font-black text-zinc-950 group-hover:text-[#f40181] transition-colors">
                          {person.name}
                        </h3>
                        {person.linkedin && (
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`${person.name}'s LinkedIn`}
                            className="h-7 w-7 grid place-items-center rounded-lg bg-[#f40181]/10 text-[#f40181] hover:bg-[#f40181] hover:text-white hover:scale-110 transition-all shadow-sm shrink-0 border border-[#f40181]/20"
                          >
                            <LinkedinIcon size={14} />
                          </a>
                        )}
                      </div>

                      <p className="mt-1.5 mb-0 text-xs md:text-sm font-extrabold text-[#f40181] uppercase tracking-wider">
                        {person.role}
                      </p>
                      {person.companyLogo ? (
                        person.companyUrl ? (
                          <a
                            href={person.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={person.company}
                            className="mt-2 inline-flex mx-auto no-underline"
                          >
                            <img
                              src={person.companyLogo}
                              alt={person.company}
                              className={`w-auto object-contain transition-opacity hover:opacity-80 ${person.companyLogoClass || "h-8 md:h-9 max-w-[160px]"}`}
                            />
                          </a>
                        ) : (
                          <img
                            src={person.companyLogo}
                            alt={person.company}
                            className={`mt-2 mx-auto w-auto object-contain ${person.companyLogoClass || "h-8 md:h-9 max-w-[160px]"}`}
                          />
                        )
                      ) : (
                        <p className="mt-0.5 mb-0 text-xs md:text-sm text-zinc-500 font-semibold">
                          {person.company}
                        </p>
                      )}
                    </div>

                    {/* Dark Obsidian Featured Quote Box */}
                    <div className="relative overflow-hidden rounded-2xl bg-zinc-950 p-6 text-white shadow-xl border border-[#f40181]/40 my-6 text-center">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 bg-[#00ffff]/15 rounded-full blur-2xl"
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
                          <Sparkles size={15} className="text-[#f40181] shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <NavLink
                      to={person.cta}
                      className="inline-flex items-center gap-2 text-xs md:text-sm font-black text-[#f40181] uppercase tracking-wider no-underline hover:translate-x-1 transition-transform"
                    >
                      <span>View Keynote Profile</span>
                      <ArrowUpRight size={16} />
                    </NavLink>
                    {person.youtubeUrl && (
                      <a
                        href={person.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-extrabold text-xs no-underline transition-all duration-300 hover:scale-[1.02] bg-white text-[#FF0000] border-2 border-[#FF0000] hover:bg-[#FF0000]/5"
                      >
                        <img
                          src="/assets/img/Youtube_logo.png"
                          alt=""
                          className="w-6 h-6 object-contain mix-blend-multiply shrink-0"
                        />
                        <span>Watch full video</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3.5">
              <NavLink to="/our-keynote-speaker-2025" className={CTA_PRIMARY}>
                View all keynote speakers
              </NavLink>
            </div>
          </section>

          {/* Section 3: Discussion Panel */}
          <section className="mb-20 md:mb-28">
            <SectionTitle
              tag="Industry Discussion Panel"
              title="Conversations Shaping the Future of Finance"
              subtitle="One of the most engaging segments of BFA 2025 was the expert discussion panel."
              icon={Users}
            />

            {/* Theme-Colored Framed Speaker Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
              {panelists.map((person) => (
                <article
                  key={person.name}
                  className="group relative rounded-[32px] border border-zinc-200/90 bg-white p-7 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#f40181]/50 flex flex-col justify-between"
                >
                  {/* Top Image Container */}
                  <div className="relative mb-6 mx-auto w-full max-w-[260px]">
                    {/* Main Portrait Image Container */}
                    <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-md aspect-[4/4] flex items-center justify-center">
                      <Avatar
                        name={person.name}
                        img={person.img}
                        sizeClass="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Speaker Name, Inline LinkedIn Icon & Role Metadata */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center gap-2">
                      <h3 className="m-0 text-xl font-black text-zinc-950 group-hover:text-[#f40181] transition-colors">
                        {person.name}
                      </h3>
                      {person.linkedin && (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`${person.name}'s LinkedIn`}
                          className="h-6 w-6 grid place-items-center rounded-md bg-[#f40181]/10 text-[#f40181] hover:bg-[#f40181] hover:text-white hover:scale-110 transition-all shadow-sm shrink-0 border border-[#f40181]/20"
                        >
                          <LinkedinIcon size={13} />
                        </a>
                      )}
                    </div>

                    <p className="mt-1.5 mb-0 text-xs font-extrabold text-[#f40181] uppercase tracking-wider">
                      {person.role}
                    </p>
                    {person.companyLogo ? (
                      <img
                        src={person.companyLogo}
                        alt={person.company}
                        className="mt-2 mx-auto h-7 md:h-8 w-auto max-w-[140px] object-contain"
                      />
                    ) : (
                      <p className="mt-0.5 mb-0 text-xs text-zinc-500 font-semibold">
                        {person.company}
                      </p>
                    )}
                  </div>

                  {/* Bottom Quote / Topic Row with Theme-Colored Circular Icon Badge */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center gap-3.5 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-[#f40181] text-[#00ffff] grid place-items-center shrink-0">
                      <Mic2 size={18} strokeWidth={2.25} />
                    </div>

                    <blockquote className="m-0 text-xs md:text-sm font-bold text-zinc-900 leading-snug">
                      “{person.bio}”
                    </blockquote>
                  </div>

                  {/* Profile Action Link */}
                  <div className="mt-4 pt-3 flex justify-center border-t border-zinc-50">
                    <NavLink
                      to={person.cta}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#f40181] uppercase tracking-wider no-underline hover:translate-x-1 transition-transform"
                    >
                      <span>View Profile</span>
                      <ArrowUpRight size={14} />
                    </NavLink>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3.5">
              <NavLink to="/our-discussion-panel-2025" className={CTA_PRIMARY}>
                Meet the panelists
              </NavLink>
              <a
                href="https://youtu.be/W0Mrw6FUsrs?si=KE7hqQKEpEVTqwWf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-extrabold text-sm no-underline transition-all duration-300 hover:scale-[1.03] bg-white text-[#FF0000] border-2 border-[#FF0000] hover:bg-[#FF0000]/5"
              >
                <img
                  src="/assets/img/Youtube_logo.png"
                  alt=""
                  className="w-7 h-7 object-contain mix-blend-multiply shrink-0"
                />
                Watch full discussion
              </a>
            </div>
          </section>

          {/* Section 4: Judges */}
          <section className="mb-20 md:mb-28">
            <SectionTitle
              tag="Judging Panel"
              title="Meet the Judges"
              subtitle="A respected panel of industry professionals evaluated nominations across all award categories."
              icon={ShieldCheck}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {judges.map((person) => (
                <article
                  key={person.name}
                  className="group relative overflow-hidden rounded-[32px] border border-zinc-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#f40181]/50 flex flex-col justify-between"
                >
                  {/* Executive Header Banner Accent */}
                  <div className="h-24 bg-[#f40181] relative overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 bg-[#00ffff]/25 rounded-full blur-xl"
                    />
                  </div>

                  <div className="px-6 pb-6 pt-0 text-center flex-1 flex flex-col justify-between">
                    {/* Centered Avatar Overlapping Header */}
                    <div className="relative -mt-14 mb-4 flex justify-center">
                      <Avatar
                        name={person.name}
                        img={person.img}
                        sizeClass="w-28 h-28 md:w-30 md:h-30 rounded-full border-4 border-white shadow-xl ring-2 ring-[#00ffff]/50"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="m-0 text-lg font-black text-zinc-950 group-hover:text-[#f40181] transition-colors">
                        {person.name}
                      </h3>
                      <p className="mt-1.5 mb-0 text-xs font-extrabold leading-tight text-[#f40181] uppercase tracking-wider">
                        {person.role}
                      </p>
                      <p className="mt-1 mb-0 text-xs font-medium text-zinc-500">
                        {person.company}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 flex items-center justify-between border-t border-zinc-100">
                      <NavLink
                        to={person.cta}
                        className="inline-flex items-center gap-1 text-xs font-extrabold text-[#f40181] no-underline hover:translate-x-1 transition-transform"
                      >
                        View profile <ArrowUpRight size={14} />
                      </NavLink>
                      {person.linkedin && (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`${person.name}'s LinkedIn`}
                          className="h-8 w-8 grid place-items-center rounded-xl bg-[#f40181]/10 text-[#f40181] hover:bg-[#f40181] hover:text-white transition-all duration-300 shadow-sm border border-[#f40181]/20"
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

        </div>

          {/* Section 5: Award Winners — Framer Motion scroll parallax */}
          <AwardWinnersParallax />

          <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Section 6: Sponsors */}
          <SponsorsShowcase />

          {/* Section 7: Event Highlights */}
          <section className="mb-20 md:mb-28">
            <SectionTitle
              tag="Event Highlights"
              title="A Night of Recognition & Connection"
              icon={Sparkles}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex gap-4 items-center p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 text-xs md:text-sm font-bold text-zinc-900 shadow-sm transition-all duration-300 hover:border-[#f40181] hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Icon size={24} strokeWidth={2.25} className="text-[#f40181] shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: Video Embed & Playlists */}
          <section className="mb-20 md:mb-28">
            <SectionTitle
              tag="Video Highlights"
              title="YouTube Highlights"
              icon={PlayCircle}
            />

            {/* 2-Column Side-by-Side YouTube Playlists */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 items-stretch">
              {[
                {
                  title: "Brit Fintech Awards 2025 Testimonials",
                  embed:
                    "https://www.youtube.com/embed/videoseries?list=PLrge5A87R3JYMc1tV85MSSkub7dbBess9",
                  playlist:
                    "https://youtube.com/playlist?list=PLrge5A87R3JYMc1tV85MSSkub7dbBess9",
                  cta: "Watch Testimonials Playlist",
                },
                {
                  title: "Brit Fintech Awards 2025 Winners",
                  embed:
                    "https://www.youtube.com/embed/videoseries?list=PLrge5A87R3JZu_PzfgXm6EvnSHqk97Ipj",
                  playlist:
                    "https://youtube.com/playlist?list=PLrge5A87R3JZu_PzfgXm6EvnSHqk97Ipj",
                  cta: "Watch Winners Playlist",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[32px] border border-zinc-200/80 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-zinc-300 flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-5 min-h-[48px]">
                    <img
                      src="/assets/img/Youtube_logo.png"
                      alt=""
                      className="w-12 h-12 object-contain shrink-0 mix-blend-multiply"
                    />
                    <h3 className="m-0 text-lg md:text-xl font-black text-zinc-950 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800/20 bg-zinc-950 shadow-inner mb-6">
                    <iframe
                      className="absolute inset-0 w-full h-full border-0"
                      src={item.embed}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <a
                    href={item.playlist}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-fit mx-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-2xl font-extrabold text-sm no-underline transition-all duration-300 hover:scale-[1.02] bg-white text-[#FF0000] border-2 border-[#FF0000] hover:bg-[#FF0000]/5"
                  >
                    <img
                      src="/assets/img/Youtube_logo.png"
                      alt=""
                      className="w-8 h-8 object-contain mix-blend-multiply shrink-0"
                    />
                    <span>{item.cta}</span>
                    <ArrowUpRight size={16} />
                  </a>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3.5">
              <NavLink
                to="/video-gallery-2025"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[56px] rounded-2xl font-extrabold text-sm no-underline transition-all duration-300 hover:scale-[1.03] bg-[#f40181] text-white shadow-md shadow-[#f40181]/30 hover:bg-[#d0026e]"
              >
                <PlayCircle size={18} className="text-[#00ffff]" />
                Open video gallery
              </NavLink>
              <NavLink
                to="/photo-gallery-2025"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[56px] rounded-2xl font-extrabold text-sm no-underline transition-all duration-300 hover:scale-[1.03] bg-zinc-950 text-[#00ffff] border-2 border-[#00ffff] shadow-md shadow-[#00ffff]/20 hover:bg-[#00ffff] hover:text-zinc-950"
              >
                <Camera size={18} />
                Open photo gallery
              </NavLink>
            </div>
          </section>

          {/* Section 9: Looking Ahead */}
          <section className="relative overflow-hidden rounded-[36px] bg-zinc-950 px-8 py-16 md:px-14 md:py-20 text-center border border-zinc-800 shadow-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-16 w-72 h-72 bg-[#f40181]/20 rounded-full blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-16 w-72 h-72 bg-[#00ffff]/10 rounded-full blur-3xl"
            />

            <div className="relative z-[1] max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#f40181]">
                <Eye size={14} strokeWidth={2.5} className="text-[#00ffff]" />
                Looking Ahead
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-white">
                The Journey Continues
              </h2>
              <p className="mt-4 mb-8 text-base md:text-lg leading-relaxed text-zinc-300 font-medium">
                Brit FinTech Awards continues to grow as one of the UK’s leading
                platforms in the FinTech ecosystem. We look forward to welcoming
                the industry once again for Brit FinTech Awards 2026.
              </p>

              <div className="flex flex-wrap justify-center gap-3.5">
                <NavLink to="/" className={CTA_PRIMARY}>
                  Explore BFA 2026
                </NavLink>
                <NavLink
                  to="/bfa-legacy/2024"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-sm no-underline transition-all duration-300 hover:scale-[1.03] bg-white/5 text-white border border-white/20 hover:border-[#00ffff] hover:text-[#00ffff]"
                >
                  Relive 2024 →
                </NavLink>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default BfaLegacy2025;
