import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import LeftoverTestimonialsSlider from "./SponsorsTestimonials/LeftoverTestimonialsSlider";

const TrustpilotWidget = () => {
  useEffect(() => {
    // Check if Trustpilot script already exists
    if (!document.querySelector("#trustpilot-script")) {
      const script = document.createElement("script");
      script.id = "trustpilot-script";
      script.src =
        "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.Trustpilot) {
          window.Trustpilot.loadFromElement(
            document.querySelector(".trustpilot-widget"),
            true
          );
        }
      };
    } else {
      // Script already loaded, just reload the widget
      if (window.Trustpilot) {
        window.Trustpilot.loadFromElement(
          document.querySelector(".trustpilot-widget"),
          true
        );
      }
    }
  }, []);

  return (
    <div
      className="trustpilot-widget"
      data-locale="en-GB"
      data-template-id="5419b6ffb0d04a076446a9af"
      data-businessunit-id="50ff68c9000064000521356a"
      data-style-height="20px"
      data-style-width="100%"
      data-theme="light"
      style={{ marginBottom: "40px", paddingTop: "60px" }}
    >
      <a
        href="https://www.trustpilot.com/review/leftovercurrency.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Trustpilot Reviews
      </a>
    </div>
  );
};

const LeftoverCurrency2025 = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#333",
      }}
    >
      <Helmet>
        <title>LeftOver Currency - Where forgotten currency finds new life | Brit FinTech Awards 2025</title>
        <meta
          name="description"
          content="Leftover Currency exchanges unused foreign coins, obsolete banknotes, and old currencies. Trusted UK processor with partner brand Manor FX."
        />
        <meta
          name="keywords"
          content="Leftover Currency, exchange old coins UK, obsolete banknotes, foreign currency exchange UK, Manor FX, Brit Fintech Awards 2025"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Leftover Currency | Exchange Old Coins & Banknotes UK | Brit FinTech Awards 2025"
        />
        <meta
          property="og:description"
          content="Leftover Currency exchanges unused foreign coins, obsolete banknotes, and old currencies. Trusted UK processor with partner brand Manor FX."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/event-conference/TravelCashierDetails.png"
        />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        target="_blank"
        className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/sponsor-logo/Leftover-currency-banner.png")',
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
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 20px" }}>
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
          LeftOver Currency - Where forgotten currency finds new life.
        </h2>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Most people return from holiday with unused foreign currency that often
          gets forgotten. On average, British households have £65 worth of leftover
          currency.{" "}
          <strong>
            Leftover Currency specializes in exchanging these foreign coins,
            out-of-circulation banknotes, and obsolete currencies like German Marks
            and French Francs.
          </strong>{" "}
          This unique niche has allowed them to thrive in the competitive travel
          money industry.
        </p>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          <strong>
            Based in Datchet, Berkshire, Leftover Currency has 25 staff and
            processes over three metric tons of coins and banknotes weekly.
          </strong>{" "}
          These come from airports, in-flight donations, and individuals worldwide
          who mail their currency. The high-volume cash processing center sorts and
          prepares these mixed currencies for repatriation, ensuring they can be
          reused in their countries of origin.
        </p>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          In addition to buying what others won't,{" "}
          <strong>Leftover Currency launched a new brand in 2019 called Manor FX.</strong>{" "}
          This brand sells over <strong>100 different exotic currencies</strong> to
          travelers, ranging from Albanian Lek to Zambian Kwacha, effectively
          covering both ends of the foreign exchange market.
        </p>

        {/* Trustpilot Widget */}
        <TrustpilotWidget />
        <LeftoverTestimonialsSlider />

        <div className="text-center mt-3 pt-3">
           <a
                  href="https://www.leftovercurrency.com/"
                  className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
                  target="_blank"
                >
                  <span style={{ color: "#fff" }}> Visit Leftover Currency Website</span>
                </a>
        </div>
      </div>
    </div>
  );
};

export default LeftoverCurrency2025;
