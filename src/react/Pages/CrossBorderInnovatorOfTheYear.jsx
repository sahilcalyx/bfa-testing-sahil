import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import RegisterButton from "./RegisterButton";

const AWARD_IMG = "/assets/img/aword/2026/Cross-Border-Innovator-of-the-Year.png";

const CrossBorderInnovatorOfTheYear = () => {
  return (
    <>
      <Helmet>
        <title>Brit Fintech Awards | Cross-Border Pay-out Disruptor of the Year</title>
        <meta
          name="description"
          content="Recognising innovation that is transforming the way money and financial services move across borders."
        />
        <meta
          name="keywords"
          content="Cross-Border Pay-out Disruptor of the Year, Cross-Border Payments Award, Remittance Innovation, FinTech Awards, Brit FinTech Awards"
        />
        <meta
          property="og:title"
          content="Brit Fintech Awards | Cross-Border Pay-out Disruptor of the Year"
        />
        <meta
          property="og:description"
          content="Recognising innovation that is transforming the way money and financial services move across borders."
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
              <strong>Cross-Border Pay-out Disruptor</strong> <br /> of the Year
            </h1>
            <p className="pb-0 mb-0 text-left" style={{ color: "#fff" }}>
              Recognising innovation that is transforming the way money and financial services move across borders.
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
                alt="Cross-Border Pay-out Disruptor of the Year"
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
                      Applicants must have been in operation for a minimum of 2 years. The number of years in operation will be verified based on the company&apos;s incorporation or registration date.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants must demonstrate a strong track record of innovation and meaningful impact in cross-border payouts for remittance companies, and a reliable payout network.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants must showcase products, services or technologies that have improved the speed, accessibility, efficiency, security or cost-effectiveness of cross-border transactions.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants must demonstrate consistent growth, market adoption or measurable results from their cross-border solutions.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      The Ultimate Beneficial Owners (UBOs) of the applicant organisation must not have been involved in any legal prosecutions or regulatory actions.
                    </li>
                    <li>
                      <i className="fas fa-check cs-accent_color" />
                      Applicants must have a registered business and operational presence in the UK.
                    </li>
                  </ul>
                </div>
                <RegisterButton awardName="Cross-Border Pay-out Disruptor of the Year" />
              </div>
            </div>
          </div>
          <div className="cs-height_50 cs-height_lg_50" />
          <div className="row">
            <div className="col-12">
              <h4>Terms and Conditions</h4>
              <ul>
                <li>Each company can nominate for up to 3 categories only.</li>
                <li>
                  Nomination is open to FinTech and MSB companies. This includes innovative start-ups, established financial institutions, payment providers and technological disruptors.
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

export default CrossBorderInnovatorOfTheYear;
