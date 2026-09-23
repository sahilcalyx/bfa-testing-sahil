import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const speaker = {
  id: "daljit-young",
  slug: "/daljit-young-keynote-speaker-2026",
  initials: "DY",
  name: "Daljit Young",
  designation: "Chief Financial Officer",
  company: "Peratera UK Ltd",
  logo: "/assets/img/keynote-speakers-2026/Peratera-logo-black.png",
  logoOnDark: false,
  img: "/assets/img/keynote-speakers-2026/Daljeet-profile-image.jpg",
  placeholder: false,
  tagline: "Building finance, regulation and AI into everyday operations",
  linkedin: "https://www.linkedin.com/in/daljityoung24658999",
  videoUrl: "https://www.youtube.com/embed/Wpr0WqzpmyY",
  stats: {
    domain: "Finance & Regulatory Fintech",
    association: "2026 Keynote Speaker",
    experience: "20+ Years",
  },
  highlights: [
    "CFO of Peratera UK Ltd, an FCA-authorised electronic money institution",
    "Joined shortly after authorisation to build the finance function and regulatory framework",
    "20+ years across investment banking, travel, payments and regulated fintech",
    "Former CFO and COO of a CAA-regulated travel scale-up",
    "Built finance functions from the ground up and led teams of 80+",
    "Delivering over £320,000 a year in AI-driven cost avoidance, now scaling across the business",
  ],
  bioParagraphs: [
    "Daljit Young is <strong>Chief Financial Officer of Peratera UK Ltd</strong>, an FCA-authorised electronic money institution, which she joined shortly after authorisation to <strong>build its finance function and regulatory framework</strong>.",
    "She has spent <strong>over twenty years</strong> across investment banking, travel, payments and regulated fintech, including as <strong>CFO and COO of a CAA-regulated travel scale-up</strong>. She has built finance functions from the ground up and led teams of more than 80 across finance and other business functions.",
    "Daljit treats <strong>AI as a normal part of running a finance function</strong> rather than a separate project. She is already delivering over <strong>£320,000 a year in cost avoidance</strong> and is now scaling it across the wider business.",
  ],
};

const DaljitYoungKeynoteDetails2026 = () => {
  const navigate = useNavigate();
  const [imgFailed, setImgFailed] = useState(!speaker.img);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showPhoto = speaker.img && !speaker.placeholder && !imgFailed;

  return (
    <>
      <Helmet>
        <title>{speaker.name} - Keynote Speaker | Brit FinTech Awards 2026</title>
        <meta
          name="description"
          content={`${speaker.name} is ${speaker.designation} at ${speaker.company} and a keynote speaker at the Brit FinTech Awards 2026.`}
        />
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
            onClick={() => navigate("/")}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white text-zinc-600 hover:text-[#c8102e] hover:border-[#c8102e]/25 shadow-sm transition-all duration-300 text-xs font-black uppercase tracking-wider mb-10 cursor-pointer"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span>Back to Home</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-white border border-zinc-100 rounded-[32px] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.025)] flex flex-col items-center text-center sticky top-28">
                <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden mb-6 bg-[#1a080c] border border-[#f2d8ac]/30 shadow-inner group">
                  {showPhoto ? (
                    <img
                      src={speaker.img}
                      alt={speaker.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      onError={() => setImgFailed(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[radial-gradient(ellipse_at_50%_35%,#5c1820_0%,transparent_60%),linear-gradient(160deg,#2a0c12_0%,#4a1018_55%,#1a080c_100%)]">
                      <span className="font-[Oswald,sans-serif] text-5xl tracking-[0.18em] text-[#f2d8ac]/80 font-bold">
                        DY
                      </span>
                      <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#f2d8ac]/45">
                        BFA 2026
                      </span>
                    </div>
                  )}
                </div>

                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#c8102e] mb-2">
                  Keynote Speaker
                </span>

                <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  {speaker.name}
                </h1>

                <div className="text-zinc-400 text-[10px] font-extrabold uppercase tracking-[0.2em] mt-1.5 leading-relaxed">
                  {speaker.designation}
                </div>

                <img
                  src={speaker.logo}
                  alt={speaker.company}
                  className={`h-10 w-auto max-w-[180px] object-contain rounded-md px-2 py-1 mt-3 ${
                    speaker.logoOnDark ? "bg-black" : "bg-white border border-zinc-100"
                  }`}
                />

                <div className="w-full h-px bg-zinc-100 my-6" />

                <div className="w-full space-y-3.5 text-left mb-6">
                  <div className="flex justify-between items-center text-xs gap-4">
                    <span className="text-zinc-400 font-medium">Domain</span>
                    <span className="text-zinc-800 font-bold text-right">{speaker.stats.domain}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs gap-4">
                    <span className="text-zinc-400 font-medium">Association</span>
                    <span className="text-zinc-800 font-bold text-right">{speaker.stats.association}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs gap-4">
                    <span className="text-zinc-400 font-medium">Experience</span>
                    <span className="text-zinc-800 font-bold text-right">{speaker.stats.experience}</span>
                  </div>
                </div>

                {speaker.linkedin ? (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-2xl bg-zinc-950 text-white font-bold text-xs uppercase tracking-widest hover:bg-[#c8102e] flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-zinc-950/5 hover:shadow-[#c8102e]/20"
                  >
                    <FaLinkedin size={16} />
                    <span>LinkedIn Profile</span>
                  </a>
                ) : (
                  <div className="text-[#c8102e] text-sm font-bold">
                    {speaker.company}
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col">
              <div className="bg-gradient-to-r from-[#c8102e] to-[#680014] rounded-[32px] p-8 md:p-10 mb-8 text-[#f2d8ac]">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#f2d8ac]/75 block mb-3">
                  BFA 2026 · Keynote
                </span>
                <p className="text-xl md:text-2xl font-semibold leading-snug tracking-tight">
                  {speaker.tagline}
                </p>
              </div>

              <div className="bg-white border border-zinc-100 rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.015)] mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 block mb-6">
                  Biography
                </span>
                <div className="text-zinc-600 text-sm md:text-base leading-loose space-y-6">
                  {speaker.bioParagraphs.map((para, idx) => (
                    <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
                  ))}
                </div>
              </div>

              <div className="bg-white border border-zinc-100 rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.015)] mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#c8102e] block mb-6">
                  Key Highlights
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {speaker.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-[24px] bg-white border border-zinc-200/60 hover:bg-zinc-50/50 hover:border-[#c8102e]/30 hover:shadow-[0_15px_35px_rgba(200,16,46,0.06)] transition-all duration-500 flex gap-4 group"
                    >
                      <span className="w-8 h-8 rounded-xl bg-[#c8102e]/5 border border-[#c8102e]/10 text-[#c8102e] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5 group-hover:bg-[#c8102e] group-hover:text-white group-hover:border-[#c8102e] transition-all duration-300">
                        {idx + 1}
                      </span>
                      <p className="text-zinc-700 text-xs md:text-sm leading-relaxed font-semibold group-hover:text-zinc-900 transition-colors duration-300">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-zinc-100 rounded-[32px] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.015)]">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#c8102e] block mb-6">
                  Featured Video
                </span>
                <div className="relative w-full overflow-hidden rounded-[24px] border border-zinc-200/80 bg-zinc-950 shadow-[0_12px_36px_rgba(0,0,0,0.12)]">
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={speaker.videoUrl}
                      title={`${speaker.name} - Brit FinTech Awards 2026`}
                      className="absolute top-0 left-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaljitYoungKeynoteDetails2026;
