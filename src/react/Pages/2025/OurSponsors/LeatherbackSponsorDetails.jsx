import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const LeatherbackSponsorDetails = () => {
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
          Leatherback | FCA-Authorised Cross-Border Payments | Brit FinTech
          Awards 2025
        </title>
        <meta
          name="description"
          content="Leatherback simplifies global finance with FCA-approved cross-border transfers, multi-currency accounts, and embedded fintech solutions."
        />
        <meta
          name="keywords"
          content="Leatherback, FCA payments UK, cross-border transfers, multi-currency accounts, fintech remittance UK, Brit Fintech Awards 2025"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content=" Leatherback | FCA-Authorised Cross-Border Payments | Brit FinTech Awards 2025"
        />
        <meta
          property="og:description"
          content="Leatherback simplifies global finance with FCA-approved cross-border transfers, multi-currency accounts, and embedded fintech solutions."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/leatherback-logo.png"
        />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        target="_blank"
        className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/sponsor-logo/leatherback-details.png")',
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
          Leatherback - One platform. Endless global possibilities.
        </h2>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Leatherback is a UK-based fintech company revolutionising global
          financial mobility through innovative cross-border payment solutions.
          Authorised by the Financial Conduct Authority (FCA) in the UK, the
          company provides end-to-end financial services to individuals and
          businesses worldwide.
        </p>
        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          <strong>
            With a mission to offer a single access point that removes financial
            barriers, Leatherback enables money to move across continents with
            ease, anytime and almost everywhere. Its vision is to build
            best-in-class financial and payment solutions that enhance global
            mobility.
          </strong>
        </p>
        <p style={{ marginBottom: "10px", fontSize: "1rem" }}>
          From its London headquarters, Leatherback delivers multi-currency
          accounts, cross-border payments, and embedded finance capabilities,
          ensuring seamless international transactions while navigating complex
          regulatory landscapes.{" "}
          {/* Canada, Nigeria, the UK, Pakistan, and India. */}
        </p>
        <p className="mb-2 text-center">
          <strong>Leatherback maintains a strategic presence in</strong>
        </p>
        <div className="flag-container mb-4 text-center">
          <img src="https://flagcdn.com/w40/ca.png" alt="Canada Flag" />
          <img src="https://flagcdn.com/w40/ng.png" alt="Nigeria Flag" />
          <img src="https://flagcdn.com/w40/gb.png" alt="UK Flag" />
          <img src="https://flagcdn.com/w40/pk.png" alt="Pakistan Flag" />
          <img src="https://flagcdn.com/w40/in.png" alt="India Flag" />
        </div>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Through its technology-driven approach, Leatherback eliminates
          traditional barriers to international business, equipping users with
          the tools to fully participate in the global economy. As a
          forward-thinking organization, it continues to foster trade
          relationships and make global commerce more accessible and efficient.
        </p>

        <div className="text-center mt-3 pt-3">
          <a
            href="https://leatherback.co/"
            className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
            target="_blank"
          >
            <span style={{ color: "#fff" }}> Visit Leatherback Website</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeatherbackSponsorDetails;
