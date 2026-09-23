import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import RegisterButton from "./RegisterButton";

const AWARD_IMG = "/assets/img/aword/2026/MSB-Leader-of-the-Year-new.png";

const MsbLeader = () => {
  return (
    <>
      <Helmet>
        <title>Brit Fintech Awards | MSB Leader of the Year</title>
        <meta
          name="description"
          content="Recognising an individual who has demonstrated exceptional leadership, vision and influence within the money services industry."
        />
        <meta
          name="keywords"
          content="MSB Leader of the Year, Money Service Business Awards, Leadership Award, Brit FinTech Awards"
        />
        <meta property="og:title" content="Brit Fintech Awards | MSB Leader of the Year" />
        <meta
          property="og:description"
          content="Recognising an individual who has demonstrated exceptional leadership, vision and influence within the money services industry."
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
              <strong>MSB Leader</strong> <br /> of the Year
            </h1>
            <p className="pb-0 mb-0 text-left" style={{ color: "#fff" }}>
              Recognising an individual who has demonstrated exceptional leadership, vision and influence within the money services industry.
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
                alt="MSB Leader of the Year"
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
                      Applicants must have a minimum of 5 years of professional experience within the money services, remittance, payments or related financial services industry.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      The Applicants must currently hold, or have held, a leadership or senior management position within an MSB or related financial services organisation.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants must demonstrate exceptional leadership, vision and strategic decision-making that has contributed to the success and development of their organisation.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants must demonstrate a meaningful contribution to the wider money services industry, through innovation, industry initiatives, partnerships, knowledge sharing or other significant contributions.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants should demonstrate a strong commitment to compliance, responsible financial services and high industry standards.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      The Applicants should demonstrate their ability to inspire, develop and lead teams, contributing to a positive organisational culture.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      The Applicants must have a registered business and operational presence in the UK, or be a leader of an organisation with a registered and operational presence in the UK.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      The Applicants and the organisation they represent must not have been involved in any relevant legal prosecutions or regulatory actions that would affect their eligibility for the award.
                    </li>
                  </ul>
                </div>
                <RegisterButton awardName="MSB Leader of the Year" />
              </div>
            </div>
          </div>
          <div className="cs-height_50 cs-height_lg_50" />
          <div className="row">
            <div className="col-12">
              <h4>Terms and Conditions</h4>
              <ul>
                {/* <li>Each company can nominate up to 3 categories only.</li> */}
                <li>
                  The nomination is open to individuals working within the MSB and money services industry, including founders, directors, business owners, senior executives and industry professionals.
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

export default MsbLeader;
