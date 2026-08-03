import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, Link } from "react-router-dom";
import { FaLinkedin, FaGlobe, FaTicketAlt, FaBuilding, FaMagic, FaQuoteLeft } from "react-icons/fa";

const hostData = {
  name: "Stephen Simmons",
  role: "Official Event Host & MC",
  event: "Brit FinTech Awards 2026",
  company: "Corporate Entertainer Extraordinaire",
  img: "/assets/img/stephen-simmons-host.jpg",
  linkedin: "https://www.linkedin.com/in/stephen-simmons-magic/",
  website: "https://www.stephensimmonsmagic.co.uk/",
  highlights: [
    "Corporate entertainer extraordinaire",
    "One of the UK’s most in-demand magicians",
    "Regular appearances on BBC radio stations",
    "Entertainer of choice for leading global brands",
    "Member of The Magic Circle",
    "Bloody nice bloke"
  ],
  clients: [
    "Adidas",
    "Apple",
    "Google",
    "Hilton",
    "IBM",
    "Lloyds",
    "Paramount Pictures",
    "Rolls Royce"
  ],
  introText: "Younger than the majority of successful performers, and naturally gifted at magic and entertaining, Stephen brings fresh new talent to the table. His approach to entertainment is cheeky but charming, fluid and fearless. And he places top priority on his professionalism and reliability.",
  styleText: "Stephen blends hosting and magic with comedy. He has a gift for engaging with all different levels, making everyone feel included. His sleight-of-hand tricks are polished and different from the norm. And perhaps his forte: mental manipulation. From spellbinding hypnotism to astounding mind reading and persuasion, Stephen’s show gets everyone shrieking at the impossible. He’s been called a mix of \"Derren Brown crossed with Dynamo with a slight Cornish accent\".",
  brochureText: "Stephen Simmons has performed for some of the worlds biggest brands and regularly appears on TV and radio shows performing his spellbinding magic and mind reading. Quick witted and charming, Stephen delivers performances that leave a lasting impression with effects that you may well remember for a lifetime."
};

const EventHostDetails2026 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{hostData.name} - Official Host | Brit FinTech Awards 2026</title>
        <meta
          name="description"
          content="Corporate entertainer extraordinaire Stephen Simmons is the official host for the Brit FinTech Awards 2026 in London."
        />
        <meta property="og:image" content={hostData.img} />
      </Helmet>

      {/* Main Content Container with Dot Matrix Pattern */}
      <div 
        className="w-full min-h-screen py-24 md:py-32 px-4 md:px-8 bg-zinc-50"
        style={{
          backgroundImage: "radial-gradient(#e4e4e7 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Elegant Back Button */}
          <button
            onClick={() => navigate("/")}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white text-zinc-600 hover:text-[#c8102e] hover:border-[#c8102e]/25 shadow-sm transition-all duration-300 text-xs font-black uppercase tracking-wider mb-10 cursor-pointer"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span>Back to Home</span>
          </button>

          {/* Responsive Profile Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* Left Column - Sidebar Info Card */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-white border border-zinc-100 rounded-[32px] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.025)] flex flex-col items-center text-center sticky top-28">
                
                {/* Profile Picture Frame */}
                <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden mb-6 bg-zinc-50 border border-zinc-100 shadow-inner group">
                  <img
                    src={hostData.img}
                    alt={hostData.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-[#c8102e]/90 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                    BFA 2026 HOST
                  </div>
                </div>

                {/* Main Identity */}
                <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  {hostData.name}
                </h1>
                
                <div className="text-zinc-400 text-[10px] font-extrabold uppercase tracking-[0.2em] mt-1.5 leading-relaxed">
                  {hostData.role}
                </div>
                
                <div className="text-[#c8102e] text-xs md:text-sm font-bold mt-1">
                  {hostData.company}
                </div>

                <div className="w-full h-px bg-zinc-100 my-6" />

                {/* Quick Metadata Dashboard */}
                <div className="w-full space-y-3.5 text-left mb-6">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400 font-medium">Role</span>
                    <span className="text-zinc-800 font-bold">Official Event Host</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400 font-medium">Affiliation</span>
                    <span className="text-zinc-800 font-bold">The Magic Circle</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400 font-medium">Speciality</span>
                    <span className="text-zinc-800 font-bold">Mind Reading & Magic</span>
                  </div>
                </div>

                {/* Social & Action Links Below Profile Image */}
                <div className="w-full space-y-3">
                  {/* LinkedIn Profile Button */}
                  <a
                    href={hostData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-2xl bg-zinc-950 text-white font-bold text-xs uppercase tracking-widest hover:bg-[#0077b5] flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-zinc-950/5 hover:shadow-[#0077b5]/20"
                  >
                    <FaLinkedin size={16} />
                    <span>LinkedIn Profile</span>
                  </a>

                  {/* Visit Official Website Button */}
                  <a
                    href={hostData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-2xl border border-zinc-200 bg-white text-zinc-800 font-bold text-xs uppercase tracking-widest hover:bg-zinc-100 hover:border-zinc-300 flex items-center justify-center gap-2 transition-all duration-300 shadow-xs"
                  >
                    <FaGlobe size={15} className="text-[#c8102e]" />
                    <span>Visit Website</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Right Column - Biography, Highlights, Program Brochure */}
            <div className="lg:col-span-8 flex flex-col gap-8">

              {/* Overview & Performance Style */}
              <div className="bg-white border border-zinc-100 rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.015)]">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#c8102e] block mb-2">
                  WHO IS STEPHEN SIMMONS?
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mb-6">
                  Corporate Entertainer Extraordinaire
                </h2>
                
                <div className="text-zinc-650 text-sm md:text-base leading-loose space-y-6">
                  <p className="text-zinc-700 font-medium">{hostData.introText}</p>
                  <p className="text-zinc-600">{hostData.styleText}</p>
                </div>
              </div>

              {/* Program / Brochure Quote Card */}
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-[32px] p-8 md:p-10 shadow-xl relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 text-zinc-800/40 opacity-40">
                  <FaQuoteLeft size={160} />
                </div>

                <blockquote className="relative z-10 text-base md:text-lg italic leading-relaxed text-zinc-200 font-serif">
                  "{hostData.brochureText}"
                </blockquote>

                <div className="mt-4 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-semibold uppercase tracking-wider relative z-10">
                  <span>Brit FinTech Awards 2026 Host</span>
                  <span className="text-[#d4af37]">Stephen Simmons</span>
                </div>
              </div>

              {/* Key Highlights & Credentials */}
              <div className="bg-white border border-zinc-100 rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.015)]">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#c8102e] block mb-6">
                  KEY HIGHLIGHTS
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {hostData.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-[24px] bg-white border border-zinc-200/60 hover:bg-zinc-50/50 hover:border-[#c8102e]/30 hover:shadow-[0_15px_35px_rgba(200,16,46,0.06)] transition-all duration-500 flex gap-4 group"
                    >
                      <span className="w-8 h-8 rounded-xl bg-[#c8102e]/5 border border-[#c8102e]/10 text-[#c8102e] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5 group-hover:bg-[#c8102e] group-hover:text-white group-hover:border-[#c8102e] transition-all duration-300">
                        {idx + 1}
                      </span>
                      <p className="text-zinc-650 text-xs md:text-sm leading-relaxed font-semibold group-hover:text-zinc-900 transition-colors duration-300">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Entertainer of Choice (Clients Grid) */}
              <div className="bg-white border border-zinc-100 rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.015)]">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#c8102e] block mb-2">
                  ENTERTAINER OF CHOICE FOR
                </span>
                <h4 className="text-xl font-extrabold text-zinc-900 mb-6 flex items-center gap-2.5">
                  <FaBuilding className="text-[#c8102e]" />
                  <span>Trusted by Global Brands</span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  {hostData.clients.map((client, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/70 text-zinc-800 text-xs md:text-sm font-extrabold flex items-center justify-center text-center shadow-xs hover:bg-white hover:border-[#c8102e]/35 hover:text-[#c8102e] hover:shadow-[0_10px_25px_rgba(200,16,46,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-default"
                    >
                      <span>{client}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default EventHostDetails2026;
