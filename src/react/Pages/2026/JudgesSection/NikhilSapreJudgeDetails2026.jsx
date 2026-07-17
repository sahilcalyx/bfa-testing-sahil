import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const judgeData = {
  name: "Dr. Nikhil Sapre",
  role: "Lecturer in Finance & Programme Director",
  company: "University of Bristol Business School",
  img: "../assets/img/judges2026/nikhil-sapre.jpg",
  linkedin: "https://www.linkedin.com/in/nikhilsapre?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  tagline: "Setting the Benchmark",
  highlights: [
    "Programme Director for MSc Financial Technology at University of Bristol",
    "15+ years of experience in higher education, banking & financial services",
    "Co-founder of an industrial startup and former teacher at Coventry University",
    "PhD in Finance researching obstacles to financial development"
  ],
  bioParagraphs: [
    "Dr. Sapre is a <strong>lecturer in finance</strong> and the <strong>Programme Director for MSc Financial Technology</strong> at the <strong>University of Bristol Business School, UK</strong>, bringing with him over 15 years of experience in higher education, banking, and financial services.",
    "Before joining the University of Bristol, Dr. Sapre held teaching positions at <strong>Coventry University, UK</strong>. Prior to academia, his industry experience includes two multinational banks, financial markets research and co-founding a startup.",
    "His academic research focuses on the <strong>obstacles to and consequences of financial development</strong>, with publications featured in books and journals.",
    "With his strong background in academia, finance, and entrepreneurship, Dr. Sapre brings unique insights and expertise that will greatly enrich our jury panel."
  ]
};

const NikhilSapreJudgeDetails2026 = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{judgeData.name} - Judge | Brit FinTech Awards 2026</title>
        <meta
          name="description"
          content={`Meet ${judgeData.name}, ${judgeData.role} at ${judgeData.company}, judge at Brit FinTech Awards 2026.`}
        />
        <meta property="og:image" content={judgeData.img} />
      </Helmet>

      <div 
        className="w-full min-h-screen py-32 px-4 md:px-8 bg-zinc-50"
        style={{
          backgroundImage: "radial-gradient(#e4e4e7 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Elegant Back Button */}
          <button
            onClick={() => {
              if (window.history.state && window.history.state.idx > 0) {
                navigate(-1);
              } else {
                navigate("/judges");
              }
            }}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white text-zinc-600 hover:text-[#c8102e] hover:border-[#c8102e]/25 shadow-sm transition-all duration-300 text-xs font-black uppercase tracking-wider mb-10 cursor-pointer"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span>Back to Judges</span>
          </button>

          {/* Responsive Profile Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* Left Column - Sidebar Info Card */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-white border border-zinc-100 rounded-[32px] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.025)] flex flex-col items-center text-center">
                
                {/* Profile Picture Frame */}
                <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden mb-6 bg-zinc-50 border border-zinc-100 shadow-inner group">
                  <img
                    src={judgeData.img}
                    alt={judgeData.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Main Identity */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  {judgeData.name}
                </h2>
                
                <div className="text-zinc-400 text-[10px] font-extrabold uppercase tracking-[0.2em] mt-1.5 leading-relaxed">
                  {judgeData.role}
                </div>
                
                <div className="text-[#c8102e] text-sm font-bold mt-1">
                  {judgeData.company}
                </div>

                <div className="w-full h-px bg-zinc-100 my-6" />

                {/* Quick Metadata Dashboard */}
                <div className="w-full space-y-3.5 text-left mb-6">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400 font-medium">Domain</span>
                    <span className="text-zinc-800 font-bold">Finance & FinTech</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400 font-medium">Association</span>
                    <span className="text-zinc-800 font-bold">2026 Jury Panel</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400 font-medium">Degree</span>
                    <span className="text-zinc-800 font-bold">PhD in Finance</span>
                  </div>
                </div>

                {/* LinkedIn Button */}
                <a
                  href={judgeData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-zinc-950 text-white font-bold text-xs uppercase tracking-widest hover:bg-[#c8102e] flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-zinc-950/5 hover:shadow-[#c8102e]/20"
                >
                  <FaLinkedin size={16} />
                  <span>LinkedIn Profile</span>
                </a>

              </div>
            </div>

            {/* Right Column - Quote, Biography, Highlights */}
            <div className="lg:col-span-8 flex flex-col">


              {/* Biography Section */}
              <div className="bg-white border border-zinc-100 rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.015)] mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 block mb-6">
                  BIOGRAPHY
                </span>
                
                <div className="text-zinc-600 text-sm md:text-base leading-loose space-y-6">
                  {judgeData.bioParagraphs.map((para, idx) => (
                    <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
                  ))}
                </div>
              </div>

              {/* Professional Highlights Cards */}
              <div className="bg-white border border-zinc-100 rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.015)]">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#c8102e] block mb-6">
                  KEY HIGHLIGHTS
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {judgeData.highlights.map((highlight, idx) => (
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

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default NikhilSapreJudgeDetails2026;
