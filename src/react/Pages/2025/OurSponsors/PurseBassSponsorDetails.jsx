import { Helmet } from "react-helmet";
import React from "react";
import { NavLink } from "react-router-dom";

const PurseBassSponsorDetails = () => {

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
          Purse BAAS - Your Gateway to Banking Innovation. | Brit FinTech Awards
          2025
        </title>
        <meta
          name="description"
          content="Discover Purse BAAS, a leading Banking-as-a-Service provider enabling SPIs and financial platforms to offer seamless banking solutions. Sponsor of Brit FinTech Awards 2025."
        />
        <meta
          name="keywords"
          content="Purse BAAS, Banking-as-a-Service, BaaS provider, SPIs, financial platforms, banking solutions, fintech, Brit FinTech Awards 2025"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Purse BAAS - Your Gateway to Banking Innovation. | Brit FinTech Awards 2025"
        />
        <meta
          property="og:description"
          content="Discover Purse BAAS, a leading Banking-as-a-Service provider enabling SPIs and financial platforms to offer seamless banking solutions. Sponsor of Brit FinTech Awards 2025."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/Purse-Baas-sponsor-logo.png"
        />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        target="_blank"
        className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/sponsor-logo/Purse-Baas-sponsor-banner.png")',
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
          Purse BAAS - Your Gateway to Banking Innovation.
        </h2>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Purse BAAS is a pioneering <strong>Banking-as-a-Service (BaaS) provider</strong> that
          empowers SPIs and financial platforms to <strong>offer banking services
          directly to their customers—without the burden of building or
          maintaining banking infrastructure.</strong>
        </p>

        {/* Services */}
        <h4
          className=""
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            margin: "30px 0 15px 0",
          }}
        >
          Why Purse BAAS
        </h4>

        <ul style={{ marginBottom: "16px", fontSize: "1rem", paddingLeft: "40px" }}>
          <li style={{ marginBottom: "10px" }}>
           <strong>Deliver seamless banking solutions</strong> that meet modern customer expectations
            </li>
          <li style={{ marginBottom: "10px" }}>
           <strong>Expand your service offerings</strong> with ease and flexibility
            </li>
          <li style={{ marginBottom: "10px" }}>
           <strong>Grow and compete</strong> in today’s rapidly evolving financial ecosystem
            </li>
            </ul>

             <h4
          className=""
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            margin: "30px 0 15px 0",
          }}
        >
          Register Your Interest
        </h4>

         <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
         Are you an SPI or financial platform looking to bring banking to your customers?
Express your interest today for Purse BAAS.

        </p>
        {/* Why Choose */}
        <div className="text-center mt-3 pt-3">
          <a
            href="https://forms.gle/zu7yjTgUKFiixmZs8/"
            className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
            target="_blank"
            rel="noreferrer"
          >
            <span style={{ color: "#fff" }}> Register Your Interest</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PurseBassSponsorDetails;
