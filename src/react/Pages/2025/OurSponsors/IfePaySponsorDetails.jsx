import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const IfePaySponsorDetails = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#333",
      }}
    >
      <Helmet>
        <title>Ifepay Money Transfer — Fast. Secure. Reliable. | Brit FinTech Awards 2025</title>
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
            'url("../assets/img/sponsor-logo/IfePay-Strategic-Sponsor-Website-Banner.png")',
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
          Ifepay Money Transfer - Fast. Secure. Reliable.
        </h2>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Ifepay Money Transfer specialises in{" "}
          <strong>
            fast, secure, and reliable transfers from the UK to Nigeria.
          </strong>{" "}
          Their user-friendly platform, competitive exchange rates, and strong
          focus on both personal and business customers make them a trusted
          player in international remittances. Fully regulated by the UK’s
          Financial Conduct Authority (FCA),{" "}
          <strong>
            they operate 24/7 to ensure clients always have access to their
            transfer services.
          </strong>
        </p>

        {/* Services */}
        <h4
          style={{
            fontWeight: "700",
            fontSize: "1.5 rem",
            margin: "30px 0 15px 0",
          }}
        >
          Features & Benefits:
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
                Core Services :
              </span>{" "}
              Seamless money transfers to Nigeria with user-friendly processes
              and competitive rates.
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Security & Compliance :
              </span>{" "}
              Regulated by the UK’s Financial Conduct Authority (FCA), ensuring
              every transaction meets high security standards.
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Accessibility :
              </span>{" "}
              An intuitive{" "}
              <strong>
                digital platform or app that enables clients to send money
                globally in just minutes.
              </strong>
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Operating Hours :
              </span>{" "}
              <strong>Open 24 hours a day, 7 days a week,</strong> providing
              flexibility and convenience for customers whenever they need it.
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Contact Details :
              </span>{" "}
              They are reachable via phone at{" "}
              <a href="tel:02030061093" style={{ color: "#f40181" }}>
                <strong>020 3006 1093</strong>
              </a>
            </li>
          </ul>
        </div>
        <h4
          style={{
            fontWeight: "700",
            fontSize: "1.5 rem",
            margin: "40px 0 15px 0",
          }}
        >
          Why Choose Ifepay
        </h4>
        <p style={{ marginBottom: "10px", fontSize: "1rem" }}>
          Ifepay is designed for modern life - quick, secure, and always
          available. Whether for family, friends, or business payments, enjoy
          reliable transfers that work when you do.
        </p>
        {/* Refer & Earn */}
        <h4
          style={{
            fontWeight: "700",
            fontSize: "1.5 rem",
            margin: "40px 0 15px 0",
          }}
        >
          Refer & Earn with Ifepay!
        </h4>
        <p style={{ marginBottom: "10px", fontSize: "1rem" }}>
          Ifepay rewards you for sharing the love!
        </p>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <ul style={{ paddingLeft: "40px" }}>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <strong>Share your Ifepay app link</strong> with friends or
              family.
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              When they{" "}
              <strong>
                join and send £250 or more in a single transaction,
              </strong>
            </li>
            <li style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              <strong>You get £10</strong> credited to your account -
              automatically!
            </li>
          </ul>
        </div>

        <p style={{ marginBottom: "10px", fontSize: "1rem" }}>
          It's a simple way to earn while helping others discover a fast,
          trusted way to send money home.
        </p>

        {/* Download App Section */}
        <div
          className="text-center mt-4  d-flex justify-content-center gap-3"
          style={{ marginBottom: "30px" }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.remit.IfePay" // Replace with actual Play Store link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/img/downloadapp-logos/play store.png"
              alt="Download on Google Play"
              style={{ height: "60px", maxWidth: "100%" }}
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/ifepay/id6744351163" // Replace with actual App Store link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/img/downloadapp-logos/app store.png"
              alt="Download on the App Store"
              style={{ height: "60px", maxWidth: "100%" }}
            />
          </a>
        </div>

        {/* Why Choose */}

        <div className="text-center mt-3 pt-3">
           <a
                  href="https://ifepay.co.uk/"
                  className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
                  target="_blank"
                >
                  <span style={{ color: "#fff" }}> Visit IfePay Website</span>
                </a>
        </div>
      </div>
    </div>
  );
};

export default IfePaySponsorDetails;
