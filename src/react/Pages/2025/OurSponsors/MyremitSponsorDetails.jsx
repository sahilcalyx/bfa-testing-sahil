import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BelyftedTestimonialsSlider from "./SponsorsTestimonials/BelyftedTestimonialsSlider";
import MyRemitTestimonialsSlider from "./SponsorsTestimonials/MyRemitTestimonialsSlider";

const MyremitSponsorDetails = () => {
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
          MyRemit - A Smarter Way to Send Money | Brit FinTech Awards 2025
        </title>
        <meta
          name="description"
          content="MyRemit offers fast, secure, and transparent money transfers to 150+ countries. Strategic sponsor of Brit FinTech Awards 2025. FCA licensed."
        />
        <meta
          name="keywords"
          content="MyRemit, FCA regulated MSB, global money transfer, mobile remittance app, customer rewards, Brit FinTech Awards sponsor, Shepherd’s Bush fintech"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="MyRemit – FCA-Regulated Remittance Platform Sponsor | Brit Fintech Awards 2025"
        />
        <meta
          property="og:description"
          content="MyRemit offers fast, secure, and transparent money transfers to 150+ countries. Strategic sponsor of Brit FinTech Awards 2025. FCA licensed."
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
            'url("../assets/img/sponsor-logo/Myremit-sponsor-website-banner.png")',
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
          MyRemit - A Smarter Way to Send Money
        </h2>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Founded in Shepherd’s Bush, London, in 2018, <strong>MyRemit</strong>{" "}
          was created to offer a modern, secure, and transparent alternative to
          traditional remittance services. It was born from a real-life
          need—simplifying how Londoners sent money to relatives across Africa
          while aligning with fintech standards of governance and clarity.
        </p>

        {/* Services */}
        <h4
          style={{
            fontWeight: "700",
            fontSize: "1.5 rem",
            margin: "30px 0 15px 0",
          }}
        >
          What Sets Us Apart
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
                Fast, user-friendly transfers :
              </span>{" "}
              <br />
              Send money in minutes via web or app with no hidden charges.
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Fully regulated and secure :
              </span>{" "}
              <br />
              Licensed by the Financial Conduct Authority (FCA), with transfers
              backed by a 100% money-back guarantee.
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Low fees and competitive exchange rates :
              </span>{" "}
              <br />
              Well below the global average (7–10%) for maximum client value.
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Wide coverage :
              </span>{" "}
              <br />
              payouts to over 150 countries via bank transfer, cash pickup, or
              mobile money.
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Award-winning customer service :
              </span>{" "}
              <br />
              Honoured as Best in Customer Service MSB at the Brit Fintech
              Awards 2024, demonstrating their commitment to client excellence.
            </li>
          </ul>
        </div>

        <h4
          style={{
            fontWeight: "700",
            fontSize: "1.5 rem",
            margin: "30px 0 15px 0",
          }}
        >
          Special Offers & Rewards
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
                Prize 1 :
              </span>{" "}
              <br />
              Send £4,000 or more to get - Amazon Kindle (16 GB) – Lightest and most compact Kindle with glare-free display, faster page turns, adjustable front light and long battery life – <strong> worth £95.00</strong> – 3 lucky winners.
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Prize 2 :
              </span>{" "}
              <br />
             Send £3,000 or more to get a chance to win Amazon Alexa <strong>worth £25</strong> - 5 lucky winners.
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Prize 3 :
              </span>{" "}
              <br />
              Share your referral link with friends, and when they sign up and make a transfer of at least £100, you can claim <strong>£5 credited to your account.</strong>
            </li>
           
          </ul>
        </div>

        <MyRemitTestimonialsSlider />

        {/* Why Choose */}

       <div className="text-center mt-3 pt-3">
           <a
                  href="https://myremituk.com/home"
                  className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
                  target="_blank"
                >
                  <span style={{ color: "#fff" }}> Visit MyRemit Website</span>
                </a>
        </div>
      </div>
    </div>
  );
};

export default MyremitSponsorDetails;
