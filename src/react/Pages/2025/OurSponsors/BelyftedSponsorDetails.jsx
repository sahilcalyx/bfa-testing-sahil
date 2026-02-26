import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import BelyftedTestimonialsSlider from "./SponsorsTestimonials/BelyftedTestimonialsSlider";

const BelyftedSponsorDetails = () => {
  const services1 = [
    {
      icon: " fas fa-paper-plane",
      title: "Fast & Easy Transfers",
      desc: "Belyfted offers a seamless digital experience through its mobile and web platforms, allowing users to send money internationally in just a few clicks",
    },
    {
      icon: " fas fa-wallet",
      title: "Low Fees, No Hidden Costs",
      desc: "Transparent pricing with competitive rates ensures customers always know what they’re paying—no surprises, no hidden charges",
    },
    {
      icon: " fas fa-clock",
      title: "Real-Time Tracking ",
      desc: "Users can track their transactions instantly, with real-time status updates giving full visibility from start to finish",
    },
    {
      icon: " fas fa-globe",
      title: "Global Reach",
      desc: "Belyfted supports a wide range of corridors, making it easy to send money to family, friends, or business partners across the globe",
    },
    {
      icon: " fas fa-shield-alt",
      title: "Secure & Compliant",
      desc: "Fully compliant with UK financial regulations, including FCA and AML standards, Belyfted prioritises security and customer protection",
    },
    {
      icon: " fas fa-user-shield",
      title: "Customer-Centric Approach",
      desc: "Built with the user in mind, the platform is designed for simplicity, clarity, and reliability—ideal for both first-time users and regular senders",
    },
    {
      icon: " fas fa-handshake",
      title: "Ethical & Transparent",
      desc: "Operates with a strong ethical foundation, with clear policies on governance, sustainability, and financial crime prevention",
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
          Belyfted - Moving Money, Building Trust. | Brit FinTech Awards 2025
        </title>
        <meta
          name="description"
          content="Explore Belyfted, a UK-based fintech simplifying global money transfers across 33+ African countries. Sponsor of Brit FinTech Awards 2025."
        />
        <meta
          name="keywords"
          content="Belyfted, Africa remittance, low-cost money transfer, secure fintech, AML compliant MSB, Brit FinTech Awards sponsor, Dagenham fintech"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Belyfted – Trusted Remittance for Africa | Brit Fintech Awards 2025"
        />
        <meta
          property="og:description"
          content="Explore Belyfted, a UK-based fintech simplifying global money transfers across 33+ African countries. Sponsor of Brit FinTech Awards 2025."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/Belyfted-sponsor-Logo.png"
        />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        target="_blank"
        className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/sponsor-logo/Belyfted-sponsor-website-banner.png")',
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
          Belyfted – Moving Money, Building Trust.
        </h2>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          <strong>Belyfted </strong>is an{" "}
          <strong>innovative UK-based fintech and remittance specialist</strong>{" "}
          on a mission to <strong>simplify global money movement.</strong>{" "}
          Founded in 2018 and headquartered in Dagenham, London, Belyfted has
          been making waves by offering{" "}
          <strong>digital-first, low-cost, and user-friendly solutions</strong>{" "}
          for individuals and businesses seeking secure international money
          transfers. Their flagship platform enables{" "}
          <strong>smooth, intuitive remittance via mobile apps and web</strong>{" "}
          - designed for <strong>speed, transparency, and ease</strong>
          —highlighted by features like{" "}
          <strong>
            instant transaction tracking, clear status updates, and no hidden
            fees.
          </strong>
        </p>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Whether you're sending money from <strong>Ghana to Kenya,</strong> or
          anywhere across the continent,{" "}
          <strong>
            Belyfted has you covered — supercharged for 33+ African countries.
          </strong>
        </p>
        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          <strong> Security and compliance</strong> are at the heart of
          Belyfted’s operations. They maintain
          <strong> rigorous anti-money laundering standards,</strong> complying
          with UK regulations such as the{" "}
          <strong>
            Proceeds of Crime Act, Money Laundering Regulations, and Terrorism
            Acts.
          </strong>
        </p>

        {/* Services */}
        <h4
          style={{
            fontWeight: "700",
            fontSize: "1.5 rem",
            margin: "30px 0 15px 0",
            textAlign: "center",
          }}
        >
          Why Choose Belyfted?
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
        {/* <BelyftedTestimonialsSlider /> */}

        {/* Why Choose */}

        <div className="text-center mt-3 pt-3">
          <a
            href="https://belyfted.com/"
            className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
            target="_blank"
          >
            <span style={{ color: "#fff" }}> Visit Belyfted</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BelyftedSponsorDetails;
