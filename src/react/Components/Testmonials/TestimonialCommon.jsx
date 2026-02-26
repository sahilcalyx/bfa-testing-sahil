import React, { useState } from "react";
import { Helmet } from "react-helmet";
import TestimonialSlider2025 from "./TestimonialSlider2025";
import Testimonial from "./TestimonialSlider";

const TestimonialCommon = () => {
  // ✅ Set default active tab to 2025
  const [activeTab, setActiveTab] = useState("2025");

  return (
    <div>
    

      {/* Testimonials Tabs Section */}
      <section
        className="cs-section cs-style1"
        style={{
          backgroundColor: "#ffffff",
          padding: "0px 0 40px",
        }}
      >
        <div className="container">
          {/* Tabs */}
          <div
            className="text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <h2
              className="pt-3"
              style={{
                textAlign: "center",
                fontSize: "32px",
                fontWeight: "bold",
                letterSpacing: "2px",
                marginBottom: "40px",
                color: "#333",
                position: "relative",
              }}
            >
              Testimonials
              <span
                style={{
                  display: "block",
                  width: "60px",
                  height: "4px",
                  margin: "10px auto 0",
                  borderRadius: "2px",
                  background: "linear-gradient(90deg, #ff2e63, #ff4a91)",
                }}
              ></span>
            </h2>

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
                  activeTab === "2025" ? "active-tab" : "inactive-tab"
                }`}
                style={{
                  border: "none",
                  borderRadius: "50px",
                  background: activeTab === "2025" ? "#c8102e" : "transparent",
                  color: activeTab === "2025" ? "#fff" : "#333",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onClick={() => setActiveTab("2025")}
              >
                2025
              </button>
              <button
                className={`px-4 py-2 fw-bold text-uppercase ${
                  activeTab === "2024" ? "active-tab" : "inactive-tab"
                }`}
                style={{
                  border: "none",
                  borderRadius: "50px",
                  background: activeTab === "2024" ? "#c8102e" : "transparent",
                  color: activeTab === "2024" ? "#fff" : "#333",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onClick={() => setActiveTab("2024")}
              >
                2024
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div
            className="wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            {activeTab === "2024" && <Testimonial />}
            {activeTab === "2025" && <TestimonialSlider2025 />}
          </div>
        </div>
      </section>

      <div className="cs-height_90 cs-height_lg_80" />
    </div>
  );
};

export default TestimonialCommon;
