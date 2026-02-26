import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";


const BaazMoneySponsorDetails = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#333",
      }}
    >
      <Helmet>
        <title>Baaz Money - Smart. Simple. Secure. | Brit FinTech Awards 2025</title>
        <meta
          name="description"
          content="Send money from the UK to Nigeria with Ifepay. FCA regulated, 24/7 service, competitive exchange rates & easy app transfers. Recognized at Brit Fintech Awards 2025."
        />
        <meta
          name="keywords"
          content="Ifepay, money transfer UK to Nigeria, fast money transfer UK Nigeria, secure remittance UK to Nigeria, reliable UK remittance service, international money transfer UK Nigeria, FCA regulated money transfer, digital money transfer UK Nigeria, 24/7 money transfer UK Nigeria, competitive exchange rates UK Nigeria, best money transfer UK to Nigeria, Brit Fintech Awards 2025"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Ifepay Money Transfer | UK to Nigeria | Fast,Secure & Reliable | Brit Fintech Awards 2025"
        />
        <meta
          property="og:description"
          content="Send money from the UK to Nigeria with Ifepay. FCA regulated, 24/7 service, competitive exchange rates & easy app transfers. Recognized at Brit Fintech Awards 2025."
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
            'url("../assets/img/sponsor-logo/baazmoney-sponsor-website-banner.png")',
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
         Baaz Money - Smart. Simple. Secure.  
        </h2>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
        <strong>Baaz Money Exchange Ltd,</strong> established in the UK in 2018, is a trusted and FCA-authorized international money transfer provider. <strong>We offer competitive exchange rates and low fees on 24/7 transfers to Afghanistan.</strong>
         
        </p>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
         Whether you're supporting family, repaying an education loan, or covering travel expenses in Afghanistan, Baaz Money ensures your money gets there quickly and securely.
        </p>
        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
        Start your journey with us by downloading our app - or visit our London branch for in-person service and support.
        </p>

        {/* Services */}
        <h4
          style={{
            fontWeight: "700",
            fontSize: "1.5 rem",
            margin: "30px 0 15px 0",
          }}
        >
          Key Points 
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
                Fast Transfers :  
              </span>{" "}
              <br />
             Send money in minutes - typically delivered within an hour, with a maximum of 24-48 hours. Users get clear timelines up front.
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Transparent Fees & Rates :
              </span>{" "}
              <br />
              No hidden charges - competitive, market-aligned exchange rates and zero transfer fees. New customers enjoy their first transfer completely fee-free.
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Multiple Currency Options :
              </span>{" "}
              <br />
             Funds can be paid out in <strong>AFN, PKR, or USD,</strong> offering flexibility based on recipient needs. 
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Secure & Compliant :
              </span>{" "}
              <br />
             Adheres to strict FCA and HMRC regulations, with robust onboarding that includes ID verification, anti-fraud/sanction checks, and risk assessments. 
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Multiple Access Channels :
              </span>{" "}
              <br />
             Transfers can be made via their intuitive website, mobile app, or at the London branch - offering convenience and personal support. 
           </li>
           
          </ul>
        </div>


        
        {/* Button */}

       <div className="text-center mt-3 pt-3">
           <a
                  href="https://baazmoneytransfer.co.uk/home"
                  className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
                  target="_blank"
                >
                  <span style={{ color: "#fff" }}> Visit Baaz Money Website</span>
                </a>
        </div>
      </div>
    </div>
  );
};

export default BaazMoneySponsorDetails;
