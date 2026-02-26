import { Helmet } from "react-helmet";
import React from "react";
import { NavLink } from "react-router-dom";
import KmbalTestimonialsSlider from "./SponsorsTestimonials/KmbalTestimonialsSlider";

const ECEXSponsorDetails = () => {
  const services2 = [
    {
      icon: " fas fa-globe-americas",
      title: "Two-click exchanges ",
      desc: "Exchange in seconds with only a couple of taps.",
    },
    {
      icon: "fas fa-coins",
      title: "Multicurrency coverage ",
      desc: "Support for USD, EUR, GBP, JPY and more.",
    },
    {
      icon: "fas fa-percent",
      title: "Low rates & real-time pricing ",
      desc: "Transparent, cost-efficient conversion.",
    },
    {
      icon: "fas fa-headset",
      title: "24/7 professional support & multilingual interface",
      desc: "Designed for international customers.",
    },
  ];
  const services3 = [
    {
      icon: "fas fa-clock",
      title: "Saves Time  ",
      desc: "The instant two-click exchanges mean no queues or lengthy processes.",
    },
    {
      icon: "fas fa-globe",
      title: "Global Confidence ",
      desc: "Exchange seamlessly whether you’re a tourist, student, or business traveller.",
    },
    {
      icon: "fas fa-wallet",
      title: "Saves Money ",
      desc: "Highly competitive rates and no hidden costs.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "User-Friendly ",
      desc: "Intuitive platform accessible to anyone, anywhere.",
    },

    {
      icon: "fas fa-shield-alt",
      title: "Trust & Security ",
      desc: "Fully compliant, transparent, and backed by years of financial expertise.",
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
          ECEX — Currency Exchange, Effortless in Two Clicks. | Brit FinTech
          Awards 2025
        </title>
        <meta
          name="description"
          content="Discover ECEX, a UK-based fintech simplifying global money transfers across 33+ African countries. Sponsor of Brit FinTech Awards 2025."
        />
        <meta
          name="keywords"
          content="ECEX, currency exchange, automated currency exchange, ACE platform, low-rate exchanges, fintech, global money transfers, Brit FinTech Awards sponsor 2025"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="ECEX — Currency Exchange, Effortless in Two Clicks. | Brit FinTech Awards 2025"
        />
        <meta
          property="og:description"
          content="Discover ECEX, a UK-based fintech simplifying global money transfers across 33+ African countries. Sponsor of Brit FinTech Awards 2025."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/ECEX-logo.png"
        />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        target="_blank"
        className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/sponsor-logo/ECEX-sponsor-banner.png")',
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
          ECEX — Currency Exchange, Effortless in Two Clicks.
        </h2>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          ECEX is transforming everyday currency exchange with an automated,
          user-first approach. Their{" "}
          <strong>ACE (Automated Currency Exchange)</strong> platform delivers
          intuitive, low-rate exchanges in seconds — ideal for modern
          travellers, businesses, and fintech partners.
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
          What Makes ACE Different
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
                    {service1.icons ? (
                      service1.icons.map((icon, idx) => (
                        <i
                          key={idx}
                          className={`${icon} fa-3x text-aqua me-3`}
                        ></i>
                      ))
                    ) : (
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
        {/* Responsive Image Section */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "24px 0",
          }}
        >
          <img
            src="../assets/img/sponsor-logo/ATM-Machine-ECEX.jpg"
            alt="ECEX Locations"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "16px",
              objectFit: "cover",
              border: "2px solid #f40181",
              boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
            }}
            className="img-fluid"
          />
        </div>
        <h4
          className="text-center pt-4"
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            margin: "30px 0 15px 0",
          }}
        >
          Benefits of Choosing ECEX
        </h4>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <div className="row justify-content-center mt-4">
            {services3.map((service3, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div
                  className="d-grid justify-content-start align-items-center p-3 border shadow-sm h-100 gap-2"
                  style={{ backgroundColor: "#000000", borderRadius: "10px" }}
                >
                  {/* Icon(s) */}
                  <div className="d-flex">
                    {service3.icons ? (
                      service3.icons.map((icon, idx) => (
                        <i
                          key={idx}
                          className={`${icon} fa-3x text-aqua me-3`}
                        ></i>
                      ))
                    ) : (
                      <i
                        className={`${service3.icon} fa-3x text-aqua mb-3`}
                      ></i>
                    )}
                  </div>

                  {/* Right Content */}
                  <div>
                    <h5
                      className="fw-bold text-aqua mb-1"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {service3.title}
                    </h5>
                    <p className="mb-0" style={{ color: "#ccc" }}>
                      {service3.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h4
          className=""
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            margin: "30px 0 15px 0",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <i
            className="fas fa-map-marker-alt "
            style={{ fontSize: "1.5rem", color: "#f40181" }}
          ></i>
          Our Locations
        </h4>
        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Meet us at{" "}
          <strong>
            over 20 locations across Switzerland, including Geneva, Lausanne,
            Zurich, Lucerne, Interlaken and more
          </strong>
          .
          <br />
          📍 <strong>Check the rate at each location</strong> before you travel
          — always get the best deal, wherever you are.
        </p>

        {/* Why Choose */}
        <div className="text-center mt-3 pt-3">
          <a
            href="https://ecex.ch/#rec656038669"
            className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
            target="_blank"
            rel="noreferrer"
          >
            <span style={{ color: "#fff" }}> Visit ECEX Website</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ECEXSponsorDetails;
