import React from "react";
import { useNavigate } from "react-router-dom";

const judges2026List = [
  {
    id: "/james-borley-judge-details-2026",
    name: "Mr. James Borley",
    role: "Director for Payment Services",
    company: "Complyport Limited",
    img: "/assets/img/judges2026/james-borley.jpg",
    linkedin: "https://www.linkedin.com/company/complyport-limited",
    tagline: "Elevating Industry Standards",
    highlights: [
      "23 years of regulatory experience at the Financial Conduct Authority (FCA)",
      "Former Head of Passporting, Authorisations Manager & PSD2 Accountable Executive",
      "Supports clients across payment services, digital assets & Consumer Duty"
    ]
  },
  {
    id: "/nikhil-sapre-judge-details-2026",
    name: "Mr. Nikhil Sapre",
    role: "Lecturer in Finance & Programme Director",
    company: "University of Bristol Business School",
    img: "/assets/img/judges2026/nikhil-sapre.jpg",
    linkedin: "https://www.linkedin.com/in/nikhilsapre?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    tagline: "Setting the Benchmark",
    highlights: [
      "Programme Director for MSc Financial Technology at University of Bristol",
      "15+ years of experience in higher education, banking & financial services",
      "Co-founder of an industrial startup and former teacher at Coventry University"
    ]
  },
  // {
  //   id: "/david-podesta-judge-details-2026",
  //   name: "Mr. David Podesta",
  //   role: "Associate Director, Trust & Safety (Fraud)",
  //   company: "Viator",
  //   img: "/assets/img/judges2026/david-podesta.jpg",
  //   linkedin: "https://www.linkedin.com/in/david-christian-podesta-6677661/",
  //   tagline: "Championing Innovation",
  //   highlights: [
  //     "Specialist in day-zero payment & compliance setups",
  //     "Expertise in online gambling, finance & marketplaces",
  //     "Builder of robust risk & operational safety frameworks"
  //   ]
  // },
  {
    id: "/giordano-cortese-judge-details-2026",
    name: "Mr. Giordano Cortese",
    role: "Senior Product Manager – Cash",
    company: "First Rate Exchange Services Ltd.",
    img: "/assets/img/judges2026/giordano-cortese.jpg",
    linkedin: "https://www.linkedin.com/in/giordanocortese1",
    tagline: "Senior Product Manager – Cash",
    highlights: [
      "20+ years across payments, FX, product & commercial leadership",
      "Senior roles at Eurochange, First Rate Exchange Services, iBAN-X & Retail FSL",
      "Leads cash product development with a focus on customer value",
    ],
  },
];

const JudgesSection2026 = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="w-full max-w-6xl mx-auto py-8 sm:py-12 px-4 rounded-3xl"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: "radial-gradient(#e4e4e7 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
        {/* Title Block - Unboxed Typography */}
        <div className="w-full flex flex-col justify-center p-2 sm:p-6 text-left my-auto">
          <div>
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-zinc-900">
              BRIT FINTECH JURY <span className="text-[#c8102e]">2026</span>
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-zinc-950 tracking-tight leading-[1.08] uppercase mt-3">
              MEET OUR <br className="hidden sm:inline" />
              <span className="text-[#c8102e]">2026 JURY</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-zinc-500 font-medium leading-relaxed max-w-md">
              Leading financial technology experts in the UK committed to recognizing and celebrating pioneering industry innovations.
            </p>
          </div>
        </div>

        {judges2026List.map((judge, index) => (
          <div
            key={index}
            className="w-full flex flex-col sm:flex-row gap-6 p-6 rounded-[28px] bg-white border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.015)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(200,16,46,0.06)] hover:border-[#c8102e]/15 group relative"
          >
            {/* Image Column */}
            <div className="relative w-full sm:w-[210px] md:w-[240px] h-[350px] sm:h-auto rounded-[20px] overflow-hidden bg-zinc-50 flex-shrink-0">
              {/* Image with Grayscale & Zoom */}
              <img
                src={judge.img}
                alt={judge.name}
                className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-all duration-700 ease-out cursor-pointer z-10"
                onClick={() => navigate(judge.id, { state: judge })}
              />
            </div>

            {/* Content Column */}
            <div className="flex-1 flex flex-col justify-between text-left pt-2 sm:pt-0">
              <div>
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#c8102e]">
                    {judge.company}
                  </span>
                  <a
                    href={judge.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-7 h-7 rounded-full bg-zinc-100 text-zinc-600 hover:text-white hover:bg-[#c8102e] flex items-center justify-center transition-all duration-300 shadow-sm"
                  >
                    <span className="fab fa-linkedin text-[13px]" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 mt-1.5 group-hover:text-zinc-800 transition-colors">
                  <a
                    onClick={() => navigate(judge.id, { state: judge })}
                    className="cursor-pointer hover:underline"
                  >
                    {judge.name}
                  </a>
                </h3>

                <div className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mt-1 leading-relaxed">
                  {judge.role}
                </div>

                {/* Highlight Bullets */}
                <ul className="mt-4 space-y-2 text-zinc-600 text-xs">
                  {judge.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#c8102e] font-bold text-[10px] mt-0.5">■</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Bio Link */}
              <div className="mt-6 pt-3.5 border-t border-zinc-100 flex justify-end">
                <a
                  onClick={() => navigate(judge.id, { state: judge })}
                  className="cursor-pointer inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#c8102e] hover:text-zinc-950 transition-colors flex-shrink-0"
                >
                  <span>Full Bio</span>
                  <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JudgesSection2026;
