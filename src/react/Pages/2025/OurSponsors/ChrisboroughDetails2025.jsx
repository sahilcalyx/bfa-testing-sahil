import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const ChrisboroughDetails2025 = () => {
  const services1 = [
    {
      icon: "fas fa-shield-alt",
      title: "Instant, Secure Naira Payouts",
      desc: "Process transfers in minutes with bank-grade security and rigorous regulatory compliance",
    },
    {
      icon: "fas fa-wallet",
      title: "Competitive Pricing & Higher Margins",
      desc: "Enjoy transparent rates, minimal fees, and no hidden costs—ensuring better profitability for your business",
    },
    {
      icon: " fas fa-rocket",
      title: "Scalable and Robust Technology",
      desc: "Built for growth, Chrisborough’s infrastructure supports remittance platforms, fintechs, and enterprises handling large cross-border volumes",
    },
    {
      icon: " fas fa-code",
      title: "Developer-Friendly APIs & SDKs",
      desc: "Integrate quickly with easy-to-use APIs and plug-and-play SDKs, complete with webhook support for real-time updates",
    },
    {
      icon: " fas fa-user-shield",
      title: "Transparent, Supportive, Customer-Centric",
      desc: "The “CIVIL” ethos drives their values—Customer-centric, Integrity, Values, Information, Leadership. This means no surprises, 24/7 support, and real-time insights",
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
        <title>
          Chrisborough - Instant Naira Payouts. Globally Connected. | Brit FinTech Awards 2025
        </title>
        <meta
          name="description"
          content="Discover Chrisborough, a strategic sponsor of Brit FinTech Awards 2025. Offering fast, secure, and user-friendly cross-border money transfers via mobile."
        />
        <meta
          name="keywords"
          content=" chrisborough, Instant Naira Payouts, Globally Connected, Brit Fintech Awards 2025"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Chrisborough - Instant Naira Payouts. Globally Connected. | Brit Fintech Awards 2025"
        />
        <meta
          property="og:description"
          content="Discover Chrisborough, a strategic sponsor of Brit FinTech Awards 2025. Offering fast, secure, and user-friendly cross-border money transfers via mobile."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/chrisborough-sponsor-logo.png"
        />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        target="_blank"
        className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/sponsor-logo/chrisborough-banner-2025.png")',
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
          Chrisborough - Instant Naira Payouts. Globally Connected.
        </h2>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          <strong>Chrisborough</strong> is a licensed International Money
          Transfer Operator that makes international remittances effortless for
          businesses. Designed to handle cross-border Naira payouts seamlessly,
          it offers real-time, secure, and compliant services—letting you focus
          on scaling your fintech or remittance operations, not worrying about
          infrastructure.
        </p>

        {/* Services */}
        <h4
          className="text-center mt-5 mb-4"
          style={{
            fontWeight: "700",
            fontSize: "1.5 rem",
            margin: "30px 0 15px 0",
          }}
        >
          Why Choose Chrisborough?
        </h4>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <div className="row justify-content-center mt-4">
            {services1.map((service1, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div
                  className="d-grid justify-content-start align-items-center p-3 border shadow-sm h-100 gap-2 "
                  style={{ backgroundColor: "#000000", borderRadius: "10px" }}
                >
                  <i className={`${service1.icon} fa-3x text-aqua mb-3`}></i>
                  {/* Right Content */}
                  <div>
                    <h5
                      className="fw-bold text-aqua mb-1"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {service1.title}
                    </h5>
                    <p
                      className="mb-0"
                      style={{ color: "#ccc" }}
                      dangerouslySetInnerHTML={{ __html: service1.desc }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-3 pt-3">
          <a
            href="https://chrisborough.com/"
            className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
            target="_blank"
          >
            <span style={{ color: "#fff" }}> Visit Chrisborough</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChrisboroughDetails2025;
