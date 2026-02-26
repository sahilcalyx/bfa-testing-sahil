import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BelyftedTestimonialsSlider from "./SponsorsTestimonials/BelyftedTestimonialsSlider";
import { icon } from "@fortawesome/fontawesome-svg-core";

const QFRemitSponsorDetails = () => {
    const services = [
    {
      icon: "fas fa-paper-plane",
      title: "Quick Transfers",
      desc: "Effortlessly send money worldwide with speed, security, and convenience."
    },
    {
      icon: "fas fa-percentage",
      title: "Competitive Rates",
      desc: "Enjoy the best value for your money through our affordable and transparent services."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Safe & Secure",
      desc: "Our platform uses advanced encryption and multi-layer security to keep every transaction protected."
    },
    {
      icon: "fas fa-bell",
      title: "Instant Notifications",
      desc: "Stay informed with real-time updates on your transfers for complete peace of mind."
    },
    {
      icon: "fas fa-user-shield",
      title: "Robust Security & Privacy Controls",
      desc: "Every transaction is encrypted, your personal data remains private, and you can request full data deletion anytime."
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#333",
      }}
    >
      <Helmet>
        <title>QF Remit - Fast, Secure, and Transparent Money Transfers Worldwide.  | Brit FinTech Awards 2025</title>
        <meta
          name="description"
          content="Discover QF Remit, a strategic sponsor of Brit FinTech Awards 2025. Offering fast, secure, and transparent money transfers across the globe."
        />
        <meta
          name="keywords"
          content=" QF Remit, global remittance, cross-border payments, mobile money transfer, Finseta Payment Solutions, secure fintech app, Brit FinTech Awards sponsor 2025"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="QF Remit - Fast, Secure, and Transparent Money Transfers Worldwide. | Brit Fintech Awards 2025"
        />
        <meta
          property="og:description"
          content="Discover QF Remit, a strategic sponsor of Brit FinTech Awards 2025. Offering fast, secure, and transparent money transfers across the globe."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/qfremit-sponsor-Logo.png"
        />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        target="_blank"
        className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/sponsor-logo/qfremit-sponsor-website-banner.png")',
          height: "300px",
        }}
      >
        <div className="cs-hero_pattern cs-hover_layer3"></div>
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
            <div className="cs-height_10 cs-height_lg_0" />
          </div>
        </div>
        <div className="cs-hero_img cs-bg">
          <div className="cs-hero_img_circle" />
        </div>
      </a>

      {/* Content */}
      <div
        style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 20px" }}
      >
        {/* Back */}
        <div style={{ marginBottom: "30px", textAlign: "right" }}>
          <NavLink
            to="/our-sponsors"
            style={{
              textDecoration: "none",
              color: "#f40181",
              fontWeight: "600",
            }}
          >
            <i className="fas fa-chevron-left" style={{ marginRight: "8px" }} />
            Back
          </NavLink>
        </div>

        {/* Intro */}
        <h2
          style={{
            fontWeight: "700",
            fontSize: "2rem",
            textAlign: "left",
            color: "#000",
          }}
        >
         QF Remit - Fast, Secure, and Transparent Money Transfers Worldwide. 
        </h2>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
       QF Remit is a UK FCA-registered online money transfer platform that enables <strong>fast, secure, and transparent cross-border remittances.</strong> Unlike banks, it operates as a Money Service Business (MSB), focusing on seamless transfers without hidden charges. <strong>Their mobile app allows users to register, add beneficiaries, send money, track transfers in real-time, and even earn referral bonuses.</strong> With strong data protection—encrypted transactions, no data sharing, and full user control over data deletion—QF Remit offers peace of mind and reliability for global money transfers.
         
        </p>

       
        {/* Services */}
       

         <div className="row justify-content-center mt-4">
                {services.map((service, index) => (
                  <div className="col-md-6 mb-4" key={index}>
                    <div className="d-flex justify-content-center align-items-center p-3 border shadow-sm h-100 gap-4 " style={{ backgroundColor: "#000000", borderRadius: "10px" }}>
                     
                     <i className={`${service.icon} fa-3x text-aqua mb-3`}></i>
                      {/* Right Content */}
                      <div>
                        <h5 className="fw-bold text-aqua mb-1" style={{fontSize: "1.2rem"}}>
                          {service.title}
                        </h5>
                        <p className="mb-0" style={{ color: "#ccc" }}>{service.desc}</p>

                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>

       
        
        {/* Why Choose */}

       <div className="text-center mt-3 pt-3">
           <a
                  href="https://qfremit.com/"
                  className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
                  target="_blank"
                >
                  <span style={{ color: "#fff" }}> Visit QF Remit Website</span>
                </a>
        </div>
      </div>
    </div>
  );
};

export default QFRemitSponsorDetails;
