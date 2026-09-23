import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import RegisterButton from "./RegisterButton";

const AWARD_IMG = "/assets/img/aword/2026/Woman-in-AI-of-the-Year-new.png";

const WomenInAi = () => {
  return (
    <>
      <Helmet>
        <title>Brit Fintech Awards | Woman in AI of the Year</title>
        <meta
          name="description"
          content="Recognising a woman who has demonstrated outstanding leadership, innovation and impact in the field of Artificial Intelligence across the fintech or technology industry."
        />
        <meta
          name="keywords"
          content="Woman in AI of the Year, Artificial Intelligence Award, FinTech Awards, Female Leadership in AI, Brit FinTech Awards"
        />
        <meta property="og:title" content="Brit Fintech Awards | Woman in AI of the Year" />
        <meta
          property="og:description"
          content="Recognising a woman who has demonstrated outstanding leadership, innovation and impact in the field of Artificial Intelligence."
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
              <strong>Woman in AI</strong> <br /> of the Year
            </h1>
            <p className="pb-0 mb-0 text-left" style={{ color: "#fff" }}>
              Recognising a woman who has demonstrated outstanding leadership, innovation and impact in the field of Artificial Intelligence, driving meaningful advancements across the fintech or technology industry.
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
                alt="Woman in AI of the Year"
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
                      Applicants must have a minimum of 2 years of professional experience in AI, technology, fintech, or a related field.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      The award is open to women professionals demonstrating significant achievement, innovation, or leadership in AI.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants must demonstrate a meaningful impact through the development, implementation, or application of AI within their organisation or industry.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants should demonstrate a commitment to the responsible, ethical, and secure use of AI.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants must have a professional or operational presence in the UK, either personally or through their organisation.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants and the organisation they represent must not have been involved in any relevant legal prosecutions or regulatory actions.
                    </li>
                  </ul>
                </div>
                <RegisterButton awardName="Woman in AI of the Year" />
              </div>
            </div>
          </div>
          <div className="cs-height_50 cs-height_lg_50" />
          <div className="row">
            <div className="col-12">
              <h4>Terms and Conditions</h4>
              <ul>
                <li>
                  Nomination is open to women professionals working across AI, FinTech, technology, financial services, and related industries.
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

export default WomenInAi;
