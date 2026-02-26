import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import FinestPayTestimonialsSlider from "./SponsorsTestimonials/FinestPayTestimonialsSlider";

const FinestPaySponsorDetails = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#333",
      }}
    >
      <Helmet>
        <title>FinestPay — Fast. Secure. Borderless | Brit FinTech Awards 2025</title>
        <meta
          name="description"
          content="Discover FinestPay, a strategic sponsor of Brit FinTech Awards 2025. Offering fast, secure, and user-friendly cross-border money transfers via mobile."
        />
        <meta
          name="keywords"
          content="FinestPay, global remittance, cross-border payments, mobile money transfer, Finseta Payment Solutions, secure fintech app, Brit FinTech Awards sponsor 2025"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="FinestPay – Fast, Secure Global Remittance | Brit Fintech Awards 2025"
        />
        <meta
          property="og:description"
          content="Discover FinestPay, a strategic sponsor of Brit FinTech Awards 2025. Offering fast, secure, and user-friendly cross-border money transfers via mobile."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/IfePay-Strategic-Sponsor-Logo.png"
        />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        target="_blank"
        className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/sponsor-logo/finestPay-sponsor-website-banner.png")',
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
         FinestPay - Fast. Secure. Borderless. 
        </h2>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
         FinestPay is a modern digital remittance platform offering a <strong> fast, secure, and user-friendly way to send money across borders.</strong> Designed with convenience in mind, the mobile app allows users to easily <strong>add beneficiaries, initiate transfers, and track their transaction history in real time.</strong> With built-in features like biometric authentication and regular app updates, FinestPay places a strong emphasis on both functionality and security. The service is operated by Finseta Payment Solutions Limited, a UK-registered financial company with over a decade of experience in the payments industry. Combining innovation with reliability, FinestPay is reshaping how individuals and businesses manage international money transfers.
         
        </p>

        {/* Services */}
        <h4
          style={{
            fontWeight: "700",
            fontSize: "1.5 rem",
            margin: "30px 0 15px 0",
          }}
        >
          Key points:
        </h4>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <ul style={{ paddingLeft: "30px" }}>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Seamless Global Money Transfers :
              </span>{" "}
              <br />
              FinestPay offers a secure and efficient platform for sending and tracking funds - whether domestic or international.
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                User-Friendly Features :
              </span>{" "}
              <br />
              Emphasize the intuitive dashboard, easy beneficiary management, transfer history visibility, and customizable settings.
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Modern, Secure Mobile Access :
              </span>{" "}
              <br />
              Mention the use of biometric authentication, network integration, camera and location access - indicative of advanced and secure functionality.
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Always Up to Date :
              </span>{" "}
              <br />
             The app’s recent update (July 2025) shows it’s actively maintained, reinforcing trust and commitment to user experience.
            </li>
           
          </ul>
        </div>

        <FinestPayTestimonialsSlider />
        
        {/* Why Choose */}

        <div className="text-center mt-3 pt-3">
           <a
                  href="https://finestpay.co.uk/"
                  className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
                  target="_blank"
                >
                  <span style={{ color: "#fff" }}> Visit FinestPay</span>
                </a>
        </div>
      </div>
    </div>
  );
};

export default FinestPaySponsorDetails;
