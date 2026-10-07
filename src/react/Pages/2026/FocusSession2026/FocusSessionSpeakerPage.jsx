import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import {
  focusSession2026,
  focusSessionMeta2026,
  FOCUS_SESSION_PAGE_URL,
} from "./speakers2026";

const FocusSessionSpeakerPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const speaker = focusSession2026.find(
    (person) => person.bioSlug === pathname || person.slug === pathname
  );
  const [imgFailed, setImgFailed] = useState(!speaker?.img);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!speaker) return null;

  const showPhoto = Boolean(speaker.img) && !speaker.placeholder && !imgFailed;
  const portrait = showPhoto ? speaker.img : speaker.geometricImg;
  const hasStats = Boolean(
    speaker.stats &&
      (speaker.stats.domain || speaker.stats.association || speaker.stats.experience)
  );
  const bioParagraphs = Array.isArray(speaker.bioParagraphs) ? speaker.bioParagraphs : [];
  const highlights = Array.isArray(speaker.highlights) ? speaker.highlights : [];
  const pageTitle = `${speaker.name} - Focus Session | Brit FinTech Awards 2026`;
  const pageDescription = `${speaker.name}, ${speaker.designation} of ${speaker.company}, joins the What is High Risk focus session at the Brit FinTech Awards 2026.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <div
        className="w-full min-h-screen py-24 md:py-32 px-4 md:px-8 bg-zinc-50"
        style={{
          backgroundImage: "radial-gradient(#e4e4e7 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <button
            type="button"
            onClick={() => navigate(FOCUS_SESSION_PAGE_URL)}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white text-zinc-600 hover:text-[#c8102e] hover:border-[#c8102e]/25 shadow-sm transition-all duration-300 text-xs font-black uppercase tracking-wider mb-10 cursor-pointer"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span>Back to session</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-white border border-zinc-100 rounded-[32px] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.025)] flex flex-col items-center text-center lg:sticky lg:top-28">
                <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden mb-6 bg-[#1a080c] border border-zinc-100 shadow-inner">
                  {portrait ? (
                    <img
                      src={portrait}
                      alt={speaker.name}
                      className="w-full h-full object-cover object-top"
                      onError={() => setImgFailed(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[linear-gradient(160deg,#2a0c12_0%,#4a1018_55%,#1a080c_100%)]">
                      <span className="font-[Oswald,sans-serif] text-5xl tracking-[0.18em] text-white/80 font-bold">
                        {speaker.initials}
                      </span>
                    </div>
                  )}
                </div>

                <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  {speaker.name}
                </h1>

                <div className="text-zinc-400 text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] mt-1.5 leading-relaxed">
                  {speaker.designation}
                </div>

                {speaker.logo ? (
                  <img
                    src={speaker.logo}
                    alt={speaker.brand || speaker.company}
                    className="h-10 w-auto max-w-[180px] object-contain mt-4"
                  />
                ) : (
                  <div className="text-[#c8102e] text-sm font-bold mt-2">
                    {speaker.company}
                  </div>
                )}

                {hasStats ? (
                  <>
                    <div className="w-full h-px bg-zinc-100 my-6" />
                    <div className="w-full space-y-3.5 text-left mb-6">
                      {speaker.stats.domain ? (
                        <div className="flex justify-between items-center text-xs gap-4">
                          <span className="text-zinc-400 font-medium">Domain</span>
                          <span className="text-zinc-800 font-bold text-right">{speaker.stats.domain}</span>
                        </div>
                      ) : null}
                      {speaker.stats.association ? (
                        <div className="flex justify-between items-center text-xs gap-4">
                          <span className="text-zinc-400 font-medium">Association</span>
                          <span className="text-zinc-800 font-bold text-right">{speaker.stats.association}</span>
                        </div>
                      ) : null}
                      {speaker.stats.experience ? (
                        <div className="flex justify-between items-center text-xs gap-4">
                          <span className="text-zinc-400 font-medium">Experience</span>
                          <span className="text-zinc-800 font-bold text-right">{speaker.stats.experience}</span>
                        </div>
                      ) : null}
                    </div>
                  </>
                ) : null}

                {speaker.linkedin ? (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-6 py-3.5 rounded-2xl bg-zinc-950 text-white font-bold text-xs uppercase tracking-widest hover:bg-[#c8102e] flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <FaLinkedin size={16} />
                    <span>LinkedIn Profile</span>
                  </a>
                ) : null}
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col">
              <div className="bg-gradient-to-r from-[#c8102e] to-[#680014] rounded-[32px] p-8 md:p-10 mb-8 text-white">
                <span className="text-xs font-black tracking-[0.1em] text-white/75 block mb-3">
                  BFA 2026 · Focus Session on
                </span>
                <p className="text-xl md:text-2xl font-semibold leading-snug tracking-tight">
                  {focusSessionMeta2026.topic}
                </p>
              </div>

              {bioParagraphs.length > 0 ? (
                <div className="bg-white border border-zinc-100 rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.015)] mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 block mb-6">
                    Biography
                  </span>
                  <div className="text-zinc-600 text-sm md:text-base leading-loose space-y-6">
                    {bioParagraphs.map((para, idx) => (
                      <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white border border-zinc-100 rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.015)] mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 block mb-6">
                    The session
                  </span>
                  <div className="text-zinc-600 text-sm md:text-base leading-loose space-y-6">
                    <p>
                      A focused conversation exploring the question of what “high risk” means in today’s financial services landscape.
                    </p>
                    <p>
                      {speaker.name}, {speaker.designation} of {speaker.company}, is one of two industry voices in this conversation on the challenges facing today’s FinTech and MSB businesses.
                    </p>
                  </div>
                </div>
              )}

              {highlights.length > 0 ? (
                <div className="bg-white border border-zinc-100 rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.015)]">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#c8102e] block mb-6">
                    Key Highlights
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-[24px] bg-white border border-zinc-200/60 flex gap-4"
                      >
                        <span className="w-8 h-8 rounded-xl bg-[#c8102e]/5 border border-[#c8102e]/10 text-[#c8102e] flex items-center justify-center text-xs font-black flex-shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-zinc-700 text-xs md:text-sm leading-relaxed font-semibold">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FocusSessionSpeakerPage;
