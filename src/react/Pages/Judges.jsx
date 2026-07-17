import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import JudgesSection2025 from "./2025/JudgesSection/JudgeSection2025";
import JudgesSection2026 from "./2026/JudgesSection/JudgeSection2026";

const Judges = () => {
  const [activeTab, setActiveTab] = useState("2026");

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Fintech Awards Judges | Financial Experts UK</title>
        <meta
          name="description"
          content="Meet the Fintech Awards judges - leading financial experts in the UK who will recognise outstanding innovations in the finance industry."
        />
        <meta
          name="keywords"
          content="Brit Fintech Awards, Judges, Financial Technology Experts, Fintech Leaders, Judges Panel"
        />
        <meta name="author" content="Brit Fintech Awards" />
        <meta property="og:title" content="Fintech Awards Judges | Financial Experts UK" />
        <meta
          property="og:description"
          content="Meet the Fintech Awards judges - leading financial experts in the UK who will recognise outstanding innovations in the finance industry."
        />
        <meta property="og:image" content="https://britfintechawards.com/assets/img/judges.png" />
      </Helmet>

      {/* Hero Banner Section */}
      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        <div
          className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
          style={{
            backgroundImage: 'url("../assets/img/event-conference/hero-img.jpg")',
          }}
        >
          <div className="cs-hero_pattern cs-hover_layer3">
            <div className="cs-hero_pattern_in cs-bg_parallax" />
          </div>
          <div
            className="container wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.2s",
              animationName: "fadeInDown",
            }}
          >
            <div className="cs-hero_text text-left">
              <h1
                className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-3 mb-0"
                style={{ marginTop: "40px !important" }}
              >
                Judges
              </h1>
              <p className="pb-0 mb-0 text-left text-white">
                Meet Our FinTech Jury: Experts in Action
              </p>
              <div className="cs-height_10 cs-height_lg_0" />
            </div>
          </div>
          <div
            className="cs-hero_img cs-bg"
            data-src="../assets/img/creative-agency/hero-img.jpg"
            style={{
              backgroundImage: 'url("../assets/img/creative-agency/hero-img.jpg")',
            }}
          >
            <div className="cs-hero_img_circle" />
          </div>
        </div>
      </div>

      {/* Tab Switcher & Content Wrapper */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#c8102e]">
              BRIT FINTECH JURY
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight mt-2">
              Meet Our Esteemed Judges
            </h2>
            <p className="mt-3 text-sm text-zinc-500 max-w-md mx-auto leading-relaxed">
              Leading financial technology experts in the UK committed to recognizing and celebrating pioneering industry innovations.
            </p>
          </div>

          {/* Premium Segmented Tab Control */}
          <div className="flex justify-center mb-16 px-4">
            <div className="inline-flex p-1 bg-zinc-100 rounded-full border border-zinc-200/50 shadow-inner z-10 relative">
              {["2026", "2025", "2024"].map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveTab(year)}
                  className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 ${
                    activeTab === year
                      ? "bg-[#c8102e] text-white shadow-lg shadow-[#c8102e]/25"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/40"
                  }`}
                >
                  {year}
                  <span className="hidden sm:inline"> JURY</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Panels */}
          <div className="transition-all duration-500 ease-in-out">
            {activeTab === "2026" && (
              <div className="animate-fadeIn">
                <section
                  id="judges-section-2026"
                  style={{
                    width: "100%",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <JudgesSection2026 />
                </section>
              </div>
            )}

            {activeTab === "2025" && (
              <div className="animate-fadeIn">
                <section
                  id="judges-section-2025"
                  className="rounded-3xl overflow-hidden shadow-xl"
                  style={{
                    width: "100%",
                    backgroundImage: 'url("../assets/img/event-conference/counter_bg3.webp")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                >
                  <div style={{ padding: "88px 24px" }}>
                    <JudgesSection2025 />
                  </div>
                </section>
              </div>
            )}

            {activeTab === "2024" && (
              <div className="animate-fadeIn">
                <div className="row justify-content-center align-items-center bg-white py-12 rounded-3xl border border-stone-100 shadow-sm max-w-4xl mx-auto px-4">
                  <div className="col-lg-12">
                    <div className="row justify-content-center align-items-center">
                      {/* Mr. Giordano Cortese (2024) */}
                      <div className="col-lg-5 col-md-6 mb-8 md:mb-0">
                        <div className="cs-team_member cs-style8 text-center cs-white_bg">
                          <div className="cs-team_member_in cs-accent_5_bg cs-accent_5_bg_2_hover cs-transition_3 cs-accent_border cs-accent_border_2_hover rounded-2xl p-4 shadow-sm border border-stone-200/60">
                            <div className="cs-member_image position-relative overflow-hidden rounded-xl">
                              <NavLink to="/judges/giordano-cortese">
                                <img
                                  src="../assets/img/event-conference/bfa-jurry1.png"
                                  alt="Mr. Giordano Cortese"
                                  className="cs-accent_border cs-transition_3 w-full object-cover h-[260px]"
                                />
                              </NavLink>
                            </div>
                            <div className="cs-member_info mt-4">
                              <h3 className="text-lg font-bold text-zinc-950 uppercase tracking-wide">
                                <NavLink to="/judges/giordano-cortese">
                                  Mr. Giordano Cortese
                                </NavLink>
                              </h3>
                              <div className="text-xs text-zinc-500 font-semibold mt-1">
                                Senior Manager of Partnerships & Client Acquisition
                              </div>
                              <div className="text-xs font-bold text-[#c8102e] mt-1.5">
                                First Rate Exchange Services Ltd
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mr. Bharat Rai (2024) */}
                      <div className="col-lg-5 col-md-6">
                        <div className="cs-team_member cs-style8 text-center cs-white_bg">
                          <div className="cs-team_member_in cs-accent_5_bg cs-accent_5_bg_2_hover cs-transition_3 cs-accent_border cs-accent_border_2_hover rounded-2xl p-4 shadow-sm border border-stone-200/60">
                            <div className="cs-member_image position-relative overflow-hidden rounded-xl">
                              <NavLink to="/judges/bharat-rai">
                                <img
                                  src="../assets/img/event-conference/bfa-jurry2.png"
                                  alt="Mr. Bharat Rai"
                                  className="cs-accent_border cs-transition_3 w-full object-cover h-[260px]"
                                />
                              </NavLink>
                            </div>
                            <div className="cs-member_info mt-4">
                              <h3 className="text-lg font-bold text-zinc-950 uppercase tracking-wide">
                                <NavLink to="/judges/bharat-rai">
                                  Mr. Bharat Rai
                                </NavLink>
                              </h3>
                              <div className="text-xs text-zinc-500 font-semibold mt-1">
                                Regional Workplace Manager
                              </div>
                              <div className="text-xs font-bold text-[#c8102e] mt-1.5">
                                CBRe
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judges;