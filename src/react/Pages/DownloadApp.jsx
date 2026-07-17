import React from "react";
import { Helmet } from "react-helmet";
import DownloadAppSection from "../Components/DownloadAppSection";

const DownloadApp = () => {
  return (
    <div>
      <Helmet>
        <title>Download the BFA App | Brit FinTech Awards 2026</title>
        <meta
          name="description"
          content="Download the official Brit FinTech Awards app. Access event schedules, networking tools, live updates, and more — all from your phone."
        />
        <meta
          name="keywords"
          content="BFA App, Brit Fintech Awards App, Download BFA, Event App, FinTech Awards 2026"
        />
        <meta name="author" content="Brit Fintech Awards" />
        <meta
          property="og:title"
          content="Download the BFA App | Brit FinTech Awards 2026"
        />
        <meta
          property="og:description"
          content="Get the official BFA event app for schedules, networking, live updates and more."
        />
      </Helmet>

      {/* HERO SECTION */}
      <div className="cs-height_90 cs-height_lg_80" />
      <div
        className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage: 'url("/assets/img/event-conference/hero-img.jpg")',
        }}
      >
        <div className="cs-hero_pattern cs-hover_layer3">
          <div className="cs-hero_pattern_in cs-bg_parallax" />
        </div>
        <div className="container wow fadeInDown">
          <div className="cs-hero_text text-left">
            <h1
              className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-3 mb-0"
              style={{ marginTop: "40px" }}
            >
              Download the BFA App
            </h1>
            <p className="cs-white" style={{ fontSize: "18px", maxWidth: 600 }}>
              Your companion for the Brit FinTech Awards 2026
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <DownloadAppSection />
    </div>
  );
};

export default DownloadApp;
