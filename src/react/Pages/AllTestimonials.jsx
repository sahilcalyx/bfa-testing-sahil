import React, { useState } from "react";
import { Helmet } from "react-helmet";
import TestimonialSlider2025 from "../Components/Testmonials/TestimonialSlider2025";
import Testimonial from "../Components/Testmonials/TestimonialSlider";

const AllTestimonials = () => {
  const [activeTab, setActiveTab] = useState("2024");

  return (
    <div>
      <Helmet>
        <title>
          All Testimonials | Brit Fintech Awards UK | Celebrating FinTech Innovation
        </title>
        <meta
          name="description"
          content="Discover what FinTech leaders, innovators, and partners say about the Brit FinTech Awards UK. Explore testimonials from 2024 and 2025 editions."
        />
        <meta
          name="keywords"
          content="Brit Fintech Award, UK Fintech Awards, Testimonials, Financial Technology, Fintech Innovation UK"
        />
        <meta property="og:title" content="All Testimonials | Brit Fintech Awards UK" />
        <meta
          property="og:description"
          content="Read testimonials from the 2024 and 2025 Brit FinTech Awards — celebrating excellence and innovation in FinTech."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/event-conference/about.png"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="cs-height_90 cs-height_lg_80" />
      <div
        className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/event-conference/hero-img.jpg")',
        }}
      >
        <div className="cs-hero_pattern cs-hover_layer3">
          <div className="cs-hero_pattern_in cs-bg_parallax" />
        </div>

        <div
          className="container wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="cs-hero_text text-left">
            <h1
              className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-0 mb-2"
              style={{ marginTop: "40px" }}
            >
              All Testimonials
            </h1>
            <p className="pb-0 mb-0 text-left text-white">
              Celebrating innovation and excellence in FinTech.
            </p>
            <div className="cs-height_10 cs-height_lg_0" />
          </div>
        </div>
      </div>

      {/* Testimonials Tabs Section */}
      <section
        className="cs-section cs-style1"
        style={{
          backgroundColor: "#ffffff",
          padding: "40px 0 80px",
        }}
      >
        <div className="container">
          {/* Tabs */}
          <div
            className="text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
           
            <div
              className="d-inline-flex justify-content-center align-items-center border rounded-pill overflow-hidden shadow-sm"
              style={{
                backgroundColor: "#f8f9fa",
                padding: "5px",
                border: "2px solid #eee",
              }}
            >
              <button 
                className={`px-4 py-2 fw-bold text-uppercase ${
                  activeTab === "2024"
                    ? "active-tab"
                    : "inactive-tab"
                }`}
                style={{
                  border: "none",
                  borderRadius: "50px",
                  background:
                    activeTab === "2024" ? "#c8102e" : "transparent",
                  color: activeTab === "2024" ? "#fff" : "#333",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onClick={() => setActiveTab("2024")}
              >
                2024
              </button>
              <button
                className={`px-4 py-2 fw-bold text-uppercase ${
                  activeTab === "2025"
                    ? "active-tab"
                    : "inactive-tab"
                }`}
                style={{
                  border: "none",
                  borderRadius: "50px",
                  background:
                    activeTab === "2025" ? "#c8102e" : "transparent",
                  color: activeTab === "2025" ? "#ffffffff" : "#333",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onClick={() => setActiveTab("2025")}
              >
                2025
              </button>
            </div>
          </div>

          

          {/* Tab Content */}
          <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
            {activeTab === "2024" && (
              <>
               
                <Testimonial />
              </>
            )}

            {activeTab === "2025" && (
              <>
                
                <TestimonialSlider2025 />
              </>
            )}
          </div>
        </div>
      </section>

      <div className="cs-height_90 cs-height_lg_80" />
    </div>
  );
};

export default AllTestimonials;
