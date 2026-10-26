import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import { FiVolume2 } from "react-icons/fi";
import KeynoteSpeakersSection from "./2025/Keynotes/KeynoteSpeakersSection";
import KeynoteSpeaker2026 from "./2026/KeynoteSpeaker2026/KeynoteSpeaker2026";

const KEYNOTE_VIDEO_ID = "CB6UjQOcQ4g";
const KEYNOTE_VIDEO_TITLE = "The AI-Augmented CFO | Daljit Young";
const KEYNOTE_VIDEO_DECK = "The AI-Augmented CFO — Inside a Next-Gen EMI’s Financial Engine Room";

const mutedKeynoteEmbedSrc =
  `https://www.youtube.com/embed/${KEYNOTE_VIDEO_ID}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${KEYNOTE_VIDEO_ID}`;
const unmutedKeynoteEmbedSrc =
  `https://www.youtube.com/embed/${KEYNOTE_VIDEO_ID}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&playsinline=1`;

const TAB_ROUTES = {
  "2026": "/keynote-speakers-2026",
  "2025": "/keynote-speakers-2025",
};

const getTabFromPath = (pathname = "") =>
  pathname.includes("2026") ? "2026" : "2025";

const OurKeyNoteSpeakers = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = getTabFromPath(location.pathname);
  const [unmuted, setUnmuted] = useState(false);

  const setActiveTab = (year) => {
    const route = TAB_ROUTES[year];
    if (route && route !== location.pathname) {
      navigate(route);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Keynote Speakers {activeTab} | Brit FinTech Awards UK</title>
        <meta
          name="description"
          content="Meet the Brit FinTech Awards keynote speakers — industry leaders taking the stage to share insights shaping the future of financial technology."
        />
        <meta
          name="keywords"
          content="Brit Fintech Awards, Keynote Speakers, FinTech Leaders, 2025, 2026"
        />
        <meta name="author" content="Brit Fintech Awards" />
        <meta
          property="og:title"
          content={`Keynote Speakers ${activeTab} | Brit FinTech Awards UK`}
        />
        <meta
          property="og:description"
          content="Meet the Brit FinTech Awards keynote speakers — industry leaders taking the stage to share insights shaping the future of financial technology."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/event-conference/about.png"
        />
      </Helmet>

      {/* Attractive compact strip */}
      <div
        className="relative overflow-hidden border-b border-black/10 pt-[88px] md:pt-[96px] bg-[#0f1419] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("/assets/img/event-conference/hero-img.jpg")',
        }}
      >
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/78 to-[#1c0f12]/82"
            aria-hidden="true"
          />
          <div
            className="absolute inset-y-0 left-0 z-[1] w-1 md:w-1.5 bg-[#c8102e]"
            aria-hidden="true"
          />

          <div className="container relative z-[1] px-4 py-5 md:py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2.5">
                  <span className="inline-block h-px w-6 bg-[#c8102e]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#e8a0ab]">
                    Brit FinTech Awards
                  </span>
                </div>
                <h1 className="mt-2 font-[Oswald,sans-serif] text-[28px] leading-none font-semibold tracking-[0.04em] text-white uppercase md:text-[34px]">
                  Keynote Speakers
                </h1>
                <p className="mt-2 max-w-md text-[13px] leading-snug text-white/55">
                  Fintech&apos;s and MSBs&apos; finest taking the stage.
                </p>
              </div>

              <div
                className="inline-flex self-start sm:self-auto rounded-lg border border-white/12 bg-black/35 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm"
                role="tablist"
                aria-label="Keynote speakers year"
              >
                {[
                  { year: "2026", note: "Current" },
                  { year: "2025", note: "Archive" },
                ].map(({ year, note }) => {
                  const active = activeTab === year;
                  return (
                    <button
                      key={year}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveTab(year)}
                      className={`min-w-[88px] rounded-md px-4 py-2 text-center transition-all duration-200 ${
                        active
                          ? "bg-[#c8102e] text-white shadow-md shadow-[#c8102e]/35"
                          : "text-white/50 hover:bg-white/5 hover:text-white/85"
                      }`}
                    >
                      <span className="block text-[9px] font-bold uppercase tracking-[0.16em] opacity-80">
                        {note}
                      </span>
                      <span className="mt-0.5 block font-[Oswald,sans-serif] text-[22px] font-semibold leading-none tracking-wide">
                        {year}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
      </div>

      <div className="py-8 md:py-10 bg-white">
        <div className="container px-4">
          <div className="transition-all duration-500 ease-in-out">
            {activeTab === "2026" && (
              <div className="animate-fadeIn rounded-2xl overflow-hidden shadow-lg">
                <KeynoteSpeaker2026 />
              </div>
            )}

            {activeTab === "2025" && (
              <div className="animate-fadeIn rounded-2xl overflow-hidden shadow-lg">
                <KeynoteSpeakersSection />
              </div>
            )}
          </div>

          {activeTab === "2026" && (
            <section
              aria-labelledby="keynote-session-heading"
              className="mt-10 border-t border-zinc-200 pt-8 md:mt-12 md:pt-10"
            >
              <div className="mb-5 grid grid-cols-1 gap-2.5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-7">
                <h2
                  id="keynote-session-heading"
                  className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#c8102e] md:mt-1"
                >
                  Watch the keynote
                </h2>
                <p className="max-w-[42em] text-[15px] leading-relaxed text-[#3a454f] md:text-base">
                  {KEYNOTE_VIDEO_DECK}
                </p>
              </div>

              <div className="overflow-hidden border border-zinc-300 bg-[#0a0406]">
                <div className="relative aspect-video">
                  <iframe
                    key={unmuted ? "unmuted" : "muted"}
                    src={unmuted ? unmutedKeynoteEmbedSrc : mutedKeynoteEmbedSrc}
                    title={KEYNOTE_VIDEO_TITLE}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  {!unmuted && (
                    <button
                      type="button"
                      onClick={() => setUnmuted(true)}
                      aria-label="Unmute and play the keynote with sound"
                      className="group absolute inset-0 flex h-full w-full cursor-pointer items-end justify-start border-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent p-4 md:p-5"
                    >
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#161616] px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors duration-200 group-hover:border-[#c8102e] group-hover:bg-[#c8102e]">
                        <FiVolume2 aria-hidden="true" className="text-[15px]" />
                        <span>Tap for sound</span>
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurKeyNoteSpeakers;
