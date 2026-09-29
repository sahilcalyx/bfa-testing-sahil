import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import RegisterButton from "./RegisterButton";

const AWARD_IMG = "/assets/img/aword/2026/MSB-Community-Champion-of-the-year.png";

const MsbCommunityChampion = () => {
  return (
    <>
      <Helmet>
        <title>Brit Fintech Awards | MSB Community Champion of the Year</title>
        <meta
          name="description"
          content="Recognising companies making a lasting impact across the MSB community."
        />
        <meta
          name="keywords"
          content="MSB Community Champion of the Year, Money Service Business Awards, Community Impact, Brit FinTech Awards"
        />
        <meta property="og:title" content="Brit Fintech Awards | MSB Community Champion of the Year" />
        <meta
          property="og:description"
          content="Recognising companies making a lasting impact across the MSB community."
        />
        <meta property="og:image" content={`https://britfintechawards.com${AWARD_IMG}`} />
      </Helmet>

      <div className="cs-height_90 cs-height_lg_90" />
      <div
        className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage: 'url("../assets/img/event-conference/hero-img.jpg")',
        }}
      >
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
            <h1
              className="cs-hero_title cs-white text-uppercase pb-3 mb-0"
              style={{ marginTop: "40px !important" }}
            >
              <strong>MSB Community Champion</strong> <br /> of the Year
            </h1>
            <p className="pb-0 mb-0 text-left" style={{ color: "#fff" }}>
              Recognising companies making a lasting impact across the MSB community.
            </p>
            <div className="cs-height_10 cs-height_lg_0" />
          </div>
        </div>
        <div
          className="cs-hero_img cs-bg"
          data-src="../assets/img/creative-agency/hero-img.jpg"
          style={{
            backgroundImage: 'url("../assets/img/creative-agency/hero-img.jpg")',
          }}
        >
          <div className="cs-hero_img_circle" />
        </div>
      </div>
      <div className="container">
        <div className="p-3 mb-3">
          <NavLink
            to="/awards"
            className="cs-previous d-flex gap-2 align-items-center cs-accent_color_2_hover ps-5 fs-6 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeIn",
              display: "flex",
              justifyContent: "end",
              fontWeight: "600",
              color: "#c61633",
            }}
          >
            <i className="fas fa-chevron-circle-left fs-4" /> Back to Awards
          </NavLink>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div
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
              <img
                src={AWARD_IMG}
                style={{ boxShadow: "3px 0 10px 0 #b3b3b3", borderRadius: "20px" }}
                alt="MSB Community Champion of the Year"
              />
            </div>
            <div className="cs-height_30 cs-height_lg_30" />
          </div>
          <div className="col-lg-7">
            <div className="cs-vertical_middle">
              <div className="cs-vertical_middle_in">
                <div
                  className="cs-text_box cs-style1 cs-size1 wow fadeIn p-4"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationDelay: "0.3s",
                    animationName: "fadeIn",
                    background: "#efefef",
                    borderRadius: "20px",
                    position: "relative",
                    zIndex: "1",
                  }}
                >
                  <h4>Criteria</h4>
                  <ul className="cs-text_box_list cs-mp0 cs-primary_color">
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants must have been in operation for a minimum of 2 years. The number of years in operation will be verified based on the company's incorporation or registration date.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants must demonstrate a strong commitment to supporting and strengthening the MSB community.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants must demonstrate meaningful contributions through industry engagement, collaboration, knowledge sharing, education, mentoring, community initiatives or other industry-focused activities.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants must demonstrate a positive and measurable impact on MSB businesses, professionals, customers or the wider community.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants should demonstrate a commitment to responsible financial services, compliance and high industry standards.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      The Ultimate Beneficial Owners (UBOs) of the applicant organisation must not have been involved in any relevant legal prosecutions or regulatory actions.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants must have a registered business and operational presence in the UK.
                    </li>
                  </ul>
                </div>
                <RegisterButton awardName="MSB Community Champion of the Year" />
              </div>
            </div>
          </div>
          <div className="cs-height_50 cs-height_lg_50" />
          <div className="row">
            <div className="col-12">
              <h4>Terms and Conditions</h4>
              <ul>
                <li>
                  Each company can nominate for up to 3 categories only.
                </li>
                <li>
                  Nomination is open to MSB companies, money service businesses, remittance companies, payments businesses and related financial services organisations.
                </li>
                <li>
                  Awards will be judged by an expert panel of industry professionals based on the nominations received.
                </li>
                <li>
                  Each nomination form is valid for one entry only. If you are nominating in multiple categories, a separate entry must be submitted for each. A fee applies for each nomination.
                </li>
                <li>
                  Supporting photos and/or documents can be sent directly to{" "}
                  <NavLink to="mailto:kudos@britfintechawards.com">
                    kudos@britfintechawards.com
                  </NavLink>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cs-height_120 cs-height_lg_120" />
    </>
  );
};

export default MsbCommunityChampion;
