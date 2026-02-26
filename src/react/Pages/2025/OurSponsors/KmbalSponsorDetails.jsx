import { Helmet } from "react-helmet";
import React from "react";
import { NavLink } from "react-router-dom";
import KmbalTestimonialsSlider from "./SponsorsTestimonials/KmbalTestimonialsSlider";

const KmbalSponsorDetails = () => {
  const services2 = [
    {
      icon: "fas fa-globe-americas",
      title: "170+ Payout Countries",
      desc: "Global reach with fast and reliable transfers wherever your loved ones are.",
    },
    {
      icon: "fas fa-wallet",
      title: "17+ Currencies Supported",
      desc: "Flexible and convenient remittances across multiple currencies.",
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Customer Care",
      desc: "Always available to support you—anytime, anywhere.",
    },
    {
      icon: "fas fa-paper-plane",
      title: "Fast, Secure, Effortless Transfers",
      desc: "Built for smooth, worry-free remittances—so you can “send money, send love”",
    },
    {
      icon: "fas fa-exchange-alt",
      title: "Low Fees & Great Rates",
      desc: "Enjoy minimized costs and competitive exchange rates for maximum value.",
    },
    {
      icons: ["fab fa-google-pay", "fab fa-apple-pay"],
      title: "Multiple Payment Options",
      desc: "Pay with trusted tools like Google Pay and Apple Pay for added convenience.",
    },
    {
      icon: "fas fa-handshake",
      title: "Trusted Partnerships",
      desc: "Collaborating with major networks like Western Union to ensure accessibility and reliability.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Simple Mobile Experience",
      desc: "Control transfers in seconds via our easy-to-use app.",
    },
    {
      icon: "fas fa-user-shield",
      title: "Strong Ethical Core",
      desc: "Guided by values of innovation, transparency, reliability, and security.",
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
        <title>Kmbal - Moving Money, Building Trust. | Brit FinTech Awards 2025</title>
        <meta
          name="description"
          content="Explore Kmbal, a UK-based fintech simplifying global money transfers across 33+ African countries. Sponsor of Brit FinTech Awards 2025."
        />
        <meta
          name="keywords"
          content="Kmbal, Africa remittance, low-cost money transfer, secure fintech, AML compliant MSB, Brit FinTech Awards sponsor, Dagenham fintech"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Kmbal - Trusted Remittance for Africa | Brit FinTech Awards 2025"
        />
        <meta
          property="og:description"
          content="Explore Kmbal, a UK-based fintech simplifying global money transfers across 33+ African countries. Sponsor of Brit FinTech Awards 2025."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/kmbal-Sponsor-website-banner.png"
        />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        target="_blank"
        className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/sponsor-logo/kmbal-Sponsor-website-banner.png")',
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
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 20px" }}>
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
          Kmbal - Send Money, Send Love
        </h2>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Kmbal Ltd is a dynamic financial services provider headquartered in
          Glasgow, committed to bridging the gap between developing economies
          and the global financial system. Our innovative, secure, and borderless
          platform empowers <strong>seamless transfers to over 170 countries, combining
          low fees, competitive rates, 24/7 customer support, and full fund
          security</strong> - all through a <strong>user-friendly mobile app</strong>. Whether it’s sending
          money for education, health, or support, Kmbal ensures your transfers
          are <strong>fast, reliable, and transparent</strong>.
        </p>

        {/* Services */}
        <h4 
         className="text-center"
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            margin: "30px 0 15px 0",
          }}
        >
          Why Choose Kmbal?
        </h4>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <div className="row justify-content-center mt-4">
            {services2.map((service1, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div
                  className="d-grid justify-content-start align-items-center p-3 border shadow-sm h-100 gap-2"
                  style={{ backgroundColor: "#000000", borderRadius: "10px" }}
                >
                  {/* Icon(s) */}
                  <div className="d-flex">
                    {service1.icons
                      ? service1.icons.map((icon, idx) => (
                          <i
                            key={idx}
                            className={`${icon} fa-3x text-aqua me-3`}
                          ></i>
                        ))
                      : (
                        <i
                          className={`${service1.icon} fa-3x text-aqua mb-3`}
                        ></i>
                        )}
                  </div>

                  {/* Right Content */}
                  <div>
                    <h5
                      className="fw-bold text-aqua mb-1"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {service1.title}
                    </h5>
                    <p className="mb-0" style={{ color: "#ccc" }}>
                      {service1.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
         
        </div>
        
        {/* Why Choose */}
        <div className="text-center mt-3 pt-3">
          <a
            href="https://en.kmbal.com/"
            className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
            target="_blank"
            rel="noreferrer"
          >
            <span style={{ color: "#fff" }}> Visit Kmbal Website</span>
          </a>
        </div>

        <KmbalTestimonialsSlider />

      </div>
    </div>
  );
};

export default KmbalSponsorDetails;
