import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const EndozDisbuzDetails2025 = () => {
  const services1 = [
    {
      icon: "fas fa-paper-plane",
      title: "Instant Bank Transfers",
      desc: "Real-time payment processing via  bank-to-bank channels",
    },
    {
      icon: "fas fa-university",
      title: "Multi-Bank Integration",
      desc: "Compatible with UK banks and building societies",
    },
    {
      icon: "fas fa-business-time",
      title: "Subscription & Recurring Billing Support",
      desc: "Perfect for SaaS, memberships, and subscription services",
    },
    {
      icon: "fas fa-user-shield",
      title: "Customer Account Verification ",
      desc: "Minimises fraud by validating customer details before transactions",
    },
    {
      icon: "fas fa-cogs",
      title: "Customisable Payment Flows",
      desc: "Flexible APIs for tailored payment experiences",
    },
    {
      icon: "fas fa-file-invoice",
      title: "Regulatory Compliance",
      desc: "Fully FCA and PSD2 compliant",
    },
    {
      icon: "fas fa-chart-line",
      title: "Payment on Demand",
      desc: "Gives merchants the flexibility to request and receive payments anytime, without relying on rigid billing cycles",
    },
  ];

  const services2 = [
    {
      icon: "fas fa-wallet",
      title: "Multiple Bank & Mobile Money Integrations",
      desc: "Connects seamlessly with major Nigerian banks and mobile wallets",
    },
    {
      icon: "fas fa-clock",
      title: "Real-Time Disbursements",
      desc: "Instant transfers for salaries, vendors, loans, and refunds",
    },
    {
      icon: "fas fa-layer-group",
      title: "Scalable Architecture",
      desc: "Handles large transaction volumes with reliability",
    },
    {
      icon: "fas fa-laptop-code",
      title: "Automated Processing",
      desc: "Supports both batch and real-time bulk payments",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Fraud Prevention & Security",
      desc: "Advanced monitoring tools and multi-level transaction validation",
    },
    {
      icon: "fas fa-code-branch",
      title: "Flexible API Integration",
      desc: "Easy adoption for fintechs, remittance firms, and digital platforms",
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
        <title>Endoz | Disbuz | Brit FinTech Awards 2025</title>
        <meta
          name="description"
          content="Explore Endoz, a UK-based fintech simplifying global money transfers across 33+ African countries. Sponsor of Brit FinTech Awards 2025."
        />
        <meta
          name="keywords"
          content="Endoz, Africa remittance, low-cost money transfer, secure fintech, AML compliant MSB, Brit FinTech Awards sponsor, Dagenham fintech"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content=" Endoz-Disbuz | Brit Fintech Awards 2025"
        />
        <meta
          property="og:description"
          content="Explore Endoz, a UK-based fintech simplifying global money transfers across 33+ African countries. Sponsor of Brit FinTech Awards 2025."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/endoz-disbuz-banner-2025.png"
        />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        target="_blank"
        className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/sponsor-logo/endoz-disbuz-banner-2025.png")',
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
          Endoz & Disbuz - Powering Seamless Collections & Instant Disbursements
        </h2>

        <h3
          style={{
            fontWeight: "700",
            fontSize: "2 rem",
            margin: "30px 0 15px 0",
          }}
        >
          Endoz – Open Banking Solution, Simplified
        </h3>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Endoz is a proprietary Open Banking product, from Payceler, designed
          to transform how UK businesses collect and manage customer payments.
          By leveraging secure Open Banking APIs, it seamlessly connects with{" "}
          <strong>50+ major UK financial institutions,</strong> offering a
          direct, secure, and cost-effective payment channel.
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
          Key Features
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
                    <p className="mb-0" style={{ color: "#ccc" }}>
                      {service1.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ borderTop: "1px solid #ddd", margin: "40px 0" }} />

        <h3
          style={{
            fontWeight: "700",
            fontSize: "2 rem",
            textAlign: "left",
            color: "#000",
          }}
        >
          Disbuz – Multi-Gateway Payout Engine (Naira Disbursements)
        </h3>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Disbuz is a powerful payout platform, from Payceler, tailored for
          instant FX & Naira disbursements (last mile settlements). Designed for
          remittance providers, employers, and financial institutions, it
          integrates with Nigerian banks and mobile wallets to ensure real-time,
          secure, and scalable disbursements.
        </p>

        <h4
          className="text-center mt-5 mb-4"
          style={{
            fontWeight: "700",
            fontSize: "1.5 rem",
            margin: "30px 0 15px 0",
          }}
        >
          Key Features
        </h4>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <div className="row justify-content-center mt-4">
            {services2.map((service2, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div
                  className="d-grid justify-content-start align-items-center p-3 border shadow-sm h-100 gap-2 "
                  style={{ backgroundColor: "#000000", borderRadius: "10px" }}
                >
                  <i className={`${service2.icon} fa-3x text-aqua mb-3`}></i>
                  {/* Right Content */}
                  <div>
                    <h5
                      className="fw-bold text-aqua mb-1"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {service2.title}
                    </h5>
                    <p className="mb-0" style={{ color: "#ccc" }}>
                      {service2.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h3
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            marginBottom: "10px",
          }}
        >
          Contact Us
        </h3>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Endoz. Disbuz. Two powerful solutions, one goal — helping your
          business move money smarter. Don’t wait, contact us now and start
          transforming your payments today.
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          <a
            href="mailto:business@payceler.com"
            style={{ color: "#f40181", textDecoration: "none" }}
          >
            <i className="fas fa-envelope" style={{ marginRight: "8px" }}></i>
            Email: business@payceler.com
          </a>
        </p>
        {/* <div className="text-start mt-3 pt-3">
          <a
            href="tel:+447725105989"
            className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
            target="_blank"
          >
            <span style={{ color: "#fff" }}>
              {" "}
              <i
                className="fas fa-phone"
                style={{ marginRight: "8px" }}
              ></i>{" "}
              Call Us{" "}
            </span>
          </a>
        </div> */}
        <div className="text-start mt-3 pt-3">
          <a
            href="https://wa.me/447909970928"
            className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ color: "#fff" }}>
              <i className="fab fa-whatsapp" style={{ marginRight: "8px" }}></i>
              Chat With Us (+44 7909 970928)
            </span>
          </a>
        </div>
        <div className="text-start  pt-3">
          <a
            href="https://wa.me/447918441127"
            className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <span style={{ color: "#fff" }}>
              <i className="fab fa-whatsapp" style={{ marginRight: "8px" }}></i>
              Chat With Us (+44 7918 441127)
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EndozDisbuzDetails2025;
