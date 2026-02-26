import React, { useState } from "react";
import { Link } from "react-router-dom";

const AwardsTabs = () => {
  const [activeTab, setActiveTab] = useState("tab_one");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="cs-tabs cs-style2 d-flex flex-column row cs-fade_tabs">
      <ul className="cs-tab_links d-flex col-12 text-center justify-content-center align-items-center cs-style5 cs-mp0 text-uppercase">
        <li
          className={`cs-tab_item ${
            activeTab === "tab_one" ? "cs-active_tab" : ""
          }`}
        >
          <button
            onClick={() => handleTabClick("tab_one")}
            className={`cs-tab_button ${
              activeTab === "tab_one"
                ? "cs-accent_bg_active"
                : "cs-accent_bg_hover cs-accent_bg_2"
            }`}
          >
            <h3 className="cs-semi_bold cs-white p-3">Fintech Awards</h3>
          </button>
        </li>
        <li
          className={`cs-tab_item ${
            activeTab === "tab_two" ? "cs-active_tab" : ""
          }`}
        >
          <button
            onClick={() => handleTabClick("tab_two")}
            className={`cs-tab_button ${
              activeTab === "tab_two"
                ? "cs-accent_bg_active"
                : "cs-accent_bg_hover cs-accent_bg_2"
            }`}
          >
            <h3 className="cs-semi_bold cs-white p-3">MSB Awards</h3>
          </button>
        </li>
      </ul>
      <div className="cs-tab_content col-12">
        <div
          id="tab_one"
          className={`cs-tab ${activeTab === "tab_one" ? "active" : ""}`}
        >
          <div className="cs-event cs-style1 cs-white_bg">
            <div className="cs-event_time p-4 row justify-content-center text-uppercase cs-primary_color cs-primary_font">
              <div className="col-lg-4 col-sm-6">
                <Link
                  to="/Startup-of-the-Year"
                  className="cs-icon_box cs-style7 text-center wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationDelay: "0.6s",
                    animationName: "fadeIn",
                  }}
                >
                  <div className="cs-icon_box_icon cs-center">
                    <img
                      src="../assets/img/Fintech/9.png"
                      style={{ height: "300px" }}
                      alt="Award"
                    />
                    <div className="cs-icon_box_shape1" />
                    <div className="cs-icon_box_shape2" />
                  </div>
                  <div className="cs-icon_box_info cs-accent_5_bg_2">
                    <h2 className="cs-icon_box_title cs-bold">
                      Startup of the Year
                    </h2>
                    <div className="cs-icon_box_meta cs-accent_color_2 cs-medium text-uppercase">
                      <Link to="/Startup-of-the-Year">View Criteria</Link>
                    </div>
                  </div>
                </Link>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>

              <div className="col-lg-4 col-sm-6">
                <Link
                  to="/FinTech-of-the-Year"
                  className="cs-icon_box cs-style7 text-center wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationDelay: "0.6s",
                    animationName: "fadeIn",
                  }}
                >
                  <div className="cs-icon_box_icon cs-center">
                    <img
                      src="../assets/img/Fintech/10.png"
                      style={{ height: "300px" }}
                      alt="Award"
                    />
                    <div className="cs-icon_box_shape1" />
                    <div className="cs-icon_box_shape2" />
                  </div>
                  <div className="cs-icon_box_info cs-accent_5_bg_2">
                    <h2 className="cs-icon_box_title cs-bold">
                      FinTech of the Year
                    </h2>
                    <div className="cs-icon_box_meta cs-accent_color_2 cs-medium text-uppercase">
                      <Link to="/FinTech-of-the-Year">View Criteria</Link>
                    </div>
                  </div>
                </Link>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>
              <div className="text-center">
                <Link
                  className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hover"
                  to="/awards"
                >
                  View More Awards
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          id="tab_two"
          className={`cs-tab ${activeTab === "tab_two" ? "active" : ""}`}
        >
          <div className="cs-event cs-style1 cs-white_bg">
            <div className="cs-event_time p-4 row justify-content-center text-uppercase cs-primary_color cs-primary_font">
              <div className="col-lg-4 col-sm-6">
                <Link
                  to="/Compliance-Innovator"
                  className="cs-icon_box cs-style7 text-center wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationDelay: "0.3s",
                    animationName: "fadeIn",
                  }}
                >
                  <div className="cs-icon_box_icon cs-center">
                    <img
                      src="../assets/img/MSB/1.png"
                      style={{ height: "300px" }}
                      alt="Award"
                    />
                    <div className="cs-icon_box_shape1" />
                    <div className="cs-icon_box_shape2" />
                  </div>
                  <div className="cs-icon_box_info cs-accent_5_bg_2">
                    <h2 className="cs-icon_box_title cs-bold">
                      Compliance Innovator of the Year
                    </h2>
                    <div className="cs-icon_box_meta cs-accent_color_2 cs-medium text-uppercase">
                      <Link to="/Compliance-Innovator">View Criteria</Link>
                    </div>
                  </div>
                </Link>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>

              <div className="col-lg-4 col-sm-6">
                <Link
                  to="/Best-in-Customer-Service-MSB"
                  className="cs-icon_box cs-style7 text-center wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationDelay: "0.4s",
                    animationName: "fadeIn",
                  }}
                >
                  <div className="cs-icon_box_icon cs-center">
                    <img
                      src="../assets/img/MSB/2.png"
                      style={{ height: "300px" }}
                      alt="Award"
                    />
                    <div className="cs-icon_box_shape1" />
                    <div className="cs-icon_box_shape2" />
                  </div>
                  <div className="cs-icon_box_info cs-accent_5_bg_2">
                    <h2 className="cs-icon_box_title cs-bold">
                      Best in Customer Service MSB of the Year
                    </h2>
                    <div className="cs-icon_box_meta cs-accent_color_2 cs-medium text-uppercase">
                      <Link to="/Best-in-Customer-Service-MSB">
                        View Criteria
                      </Link>
                    </div>
                  </div>
                </Link>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>
            </div>
            <div className="text-center">
              <Link
                className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hover"
                to="/awards"
              >
                View More Awards
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsTabs;
