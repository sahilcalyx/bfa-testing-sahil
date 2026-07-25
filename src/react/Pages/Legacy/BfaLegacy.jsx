import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  Calendar,
  Eye,
  MapPin,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

function SectionTitle({ tag, title, subtitle, icon: Icon }) {
  return (
    <div className="mb-10 md:mb-14 text-center relative z-10">
      {/* Horizontal Line Extending Directly From Left & Right of the Pill */}
      <div className="flex items-center justify-center w-full my-3">
        <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#c8102e] to-[#c8102e]" />

        <div className="relative shrink-0 inline-flex items-center gap-2.5 rounded-full border border-[#f2d8ac]/50 bg-gradient-to-r from-[#680014] via-[#c8102e] to-[#680014] px-6 py-2.5 text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#f2d8ac] shadow-lg shadow-[#c8102e]/25 mx-3">
          {Icon ? (
            <Icon size={16} strokeWidth={2.5} className="text-[#f2d8ac] shrink-0" />
          ) : (
            <span className="w-2 h-2 rounded-full bg-[#f2d8ac] animate-pulse" />
          )}
          <span>{tag || "BFA Legacy"}</span>
        </div>

        <div className="flex-1 h-[2px] bg-gradient-to-r from-[#c8102e] via-[#c8102e] to-transparent" />
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

const years = [
  {
    to: "/bfa-legacy/2025",
    year: "2025",
    title: "Brit FinTech Awards 2025",
    date: "3 October 2025",
    venue: "One Great George Street, London",
    bg: "/assets/img/event-conference/about.png",
  },
  {
    to: "/bfa-legacy/2024",
    year: "2024",
    title: "Brit FinTech Awards 2024",
    date: "10 October 2024",
    venue: "Level39, Canary Wharf, London",
    bg: "/assets/img/one-canada-square.jpg",
  },
];

const founders = [
  {
    name: "Mr. Vishal Patil",
    role: "Founder, Calyx Solutions, Brit Fintech Awards & MSB Association.",
    bio: "With deep roots across fintech, payments, and financial services, Vishal founded Brit FinTech Awards with a clear mission to recognise excellence and strengthen the industry's connections. His vision continues to drive the growth and impact of BFA year after year.",
  },
  {
    name: "Ms. Renu Nimbalkar",
    role: "COO, Calyx Solutions",
    bio: "A driving force behind the growth of the BFA community. Working closely alongside the founder's vision, Renu has played a vital role in cultivating partnerships, engaging stakeholders, and expanding the BFA community.",
  },
];

const BfaLegacy = () => {
  return (
    <div className="min-h-[60vh] bg-zinc-50 text-zinc-900 font-['Outfit',system-ui,sans-serif]">
      <Helmet>
        <title>BFA Legacy | Brit FinTech Awards</title>
        <meta
          name="description"
          content="Explore the Brit FinTech Awards legacy — Our Legacy of Excellence across 2024 and 2025 editions."
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
          <div
            className="container wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="cs-hero_text text-left">
              <h1 className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-3 mb-0">
                Our Legacy of Excellence
              </h1>
              <p className="text-left text-white mb-0 max-w-3xl text-base md:text-lg leading-relaxed opacity-95">
                From pioneering fintech startups to established industry
                leaders, Brit FinTech Awards has celebrated the organisations,
                innovators, and visionaries shaping the future of financial
                services.
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

      {/* Body Section */}
      <div
        className="py-14 md:py-24"
        style={{
          backgroundImage:
            "radial-gradient(#e4e4e7 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">

          {/* Section 1: Select a Year */}
          <section className="mb-20 md:mb-28">
            <SectionTitle
              tag="Select a Year"
              title="Past Editions"
              subtitle="Choose an edition to explore speakers, panels, judges, winners, and partners."
              icon={Trophy}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
              {years.map((item) => (
                <NavLink
                  key={item.year}
                  to={item.to}
                  className="group relative isolate flex flex-col min-h-[360px] md:min-h-[400px] overflow-hidden no-underline !text-white rounded-[32px] border border-zinc-800/20 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_36px_80px_-15px_rgba(200,16,46,0.35)] hover:border-[#c8102e]/50"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1000ms] ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url("${item.bg}")` }}
                  />
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(200,16,46,0.4),transparent_60%)]" />

                  {/* Shine Effect */}
                  <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />

                  <div className="relative z-[1] flex flex-col flex-1 p-7 sm:p-8 md:p-9">
                    {/* Top Year Number */}
                    <div className="flex justify-end">
                      <span className="select-none text-6xl md:text-7xl leading-none font-black tracking-tighter text-white/[0.15] transition-colors duration-300 group-hover:text-white/[0.25]">
                        {item.year}
                      </span>
                    </div>

                    {/* Bottom Details */}
                    <div className="mt-auto pt-6">
                      <h3 className="text-2xl sm:text-3xl md:text-3xl leading-tight font-black tracking-tight text-white mb-4">
                        {item.title}
                      </h3>

                      <div className="mb-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/40 backdrop-blur-md px-4 py-2 text-xs md:text-sm font-semibold text-white/95">
                          <Calendar
                            size={15}
                            className="text-[#f2d8ac] shrink-0"
                            strokeWidth={2.25}
                          />
                          {item.date}
                        </span>
                        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/40 backdrop-blur-md px-4 py-2 text-xs md:text-sm font-semibold text-white/95">
                          <MapPin
                            size={15}
                            className="text-[#f2d8ac] shrink-0"
                            strokeWidth={2.25}
                          />
                          {item.venue}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-3 rounded-full bg-white text-zinc-950 px-6 py-3 text-sm font-extrabold shadow-xl transition-all duration-300 group-hover:!bg-[#c8102e] group-hover:!text-white">
                        Explore {item.year}
                        <ArrowUpRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </section>

          {/* Section 2: Vision */}
          <section className="mb-20 md:mb-28">
            <SectionTitle
              tag="More Than an Awards Night"
              title="Where Innovation Met Recognition"
              subtitle="A Legacy Built on Vision"
              icon={Sparkles}
            />

            <div className="relative overflow-hidden rounded-[36px] border border-zinc-200/80 bg-white p-8 md:p-14 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.035)]">
              {/* Diagonal Gradient Blobs */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-[#c8102e]/20 via-[#680014]/10 to-transparent rounded-full blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -left-16 w-80 h-80 bg-gradient-to-tr from-[#c8102e]/15 via-[#f2d8ac]/25 to-transparent rounded-full blur-3xl"
              />

              <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg leading-[1.85] text-zinc-600 font-normal relative z-10">
                <p className="m-0">
                  Every great platform begins with a vision : a vision to
                  recognise excellence, inspire innovation, and bring people
                  together.
                </p>
                <p className="m-0">
                  Brit FinTech Awards was founded to celebrate the
                  organisations, leaders, and innovators transforming the
                  financial services industry. What began with recognition has
                  grown into something far bigger - a platform where the UK&apos;s
                  fintech ecosystem genuinely comes together.
                </p>
                <p className="m-0 font-medium text-zinc-800">
                  At its heart, BFA is about more than awards. It is about the
                  conversations, the connections, and the changemakers driving
                  finance forward.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Leadership */}
          <section className="mb-20 md:mb-28">
            <SectionTitle
              tag="The People Behind the Vision"
              title="Leadership"
              icon={Users}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {founders.map((person) => (
                <article
                  key={person.name}
                  className="relative overflow-hidden rounded-[32px] border border-zinc-200/80 bg-white p-8 md:p-10 shadow-[0_16px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-15px_rgba(0,0,0,0.12)] hover:border-zinc-300"
                >
                  {/* Diagonal Gradient Blobs */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-[#c8102e]/10 to-transparent rounded-full blur-2xl"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 bg-gradient-to-tr from-[#f2d8ac]/20 to-transparent rounded-full blur-2xl"
                  />

                  <div className="relative z-10">
                    <div className="flex items-start gap-5 mb-6">
                      <div
                        aria-hidden="true"
                        className="h-16 w-16 md:h-20 md:w-20 shrink-0 grid place-items-center rounded-2xl bg-gradient-to-br from-[#c8102e] via-[#900a20] to-[#50000e] text-[#f2d8ac] text-2xl font-black tracking-wider shadow-lg shadow-[#c8102e]/25 border border-white/20"
                      >
                        {initials(person.name)}
                      </div>
                      <div className="pt-1">
                        <h3 className="m-0 text-xl md:text-2xl font-black tracking-tight text-zinc-950">
                          {person.name}
                        </h3>
                        <p className="mt-2 mb-0 text-xs md:text-sm font-bold leading-relaxed text-[#c8102e]">
                          {person.role}
                        </p>
                      </div>
                    </div>
                    <p className="m-0 text-sm md:text-base leading-[1.8] text-zinc-600">
                      {person.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 4: Looking Ahead */}
          <section className="relative overflow-hidden rounded-[36px] bg-zinc-950 px-8 py-16 md:px-14 md:py-20 text-center shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
            {/* Diagonal Gradient Blobs */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-[#c8102e]/45 to-transparent rounded-full blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-16 w-80 h-80 bg-gradient-to-tr from-[#c8102e]/30 via-[#f2d8ac]/20 to-transparent rounded-full blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:32px_32px]"
            />
            <div className="relative z-[1] max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#f2d8ac]">
                <Eye size={14} strokeWidth={2.5} />
                Looking Ahead
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-white">
                The Journey Continues
              </h2>
              <p className="mt-4 mb-0 text-base md:text-lg leading-relaxed text-zinc-300 font-medium">
                The journey continues and the legacy grows stronger with every
                edition.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default BfaLegacy;
