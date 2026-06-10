import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const JurySecondJudgeBfa = () => {
  return (
    <div>
      <Helmet>
        <title> Meet Our Judge | Mr. Bharat Rai</title>
        <meta
          name="description"
          content="Meet our judge, Mr. Bharat Rai, with top roles at PwC and Deutsche Bank. His expertise in optimizing customer journeys adds value to the Brit Fintech Awards 2024."
        />
        <meta
          name="keywords"
          content="Brit Fintech Award, UK Fintech Awards, JurySecondJudgeBfa , Financial Technology Sector UK, Fintech Innovation UK"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta property="og:title" content="Meet Our Judge | Mr. Bharat Rai" />
        <meta
          property="og:description"
          content="Meet our judge, Mr. Bharat Rai, with top roles at PwC and Deutsche Bank. His expertise in optimizing customer journeys adds value to the Brit Fintech Awards 2024."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/event-conference/JurySecondJudgeBfa.png"
        />
      </Helmet>

      <div>
        <div className="cs-height_90 cs-height_lg_80" />

        <div
          className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
          style={{
            backgroundImage:
              'url("../assets/img/sponsor-logo/meet-our-juery-member.png")',
            height: "300px",
          }}
        >
          <div className="cs-hero_pattern cs-hover_layer3" style={{}}>
            {/* <div
              className="cs-hero_pattern_in cs-bg_parallax"
              data-src="../assets/img/gold-sponsor-banner.png"
              style={{
                backgroundImage:
                  'url("../assets/img/gold-sponsor-banner.png")',
                  backgroundSize: 'center',
                  backgroundRepeat: 'no-repeat',
                backgroundPosition: "center -129.8px",
              }}
            /> */}
          </div>
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
        </div>
        {/* End Hero Seciton */}
        {/* Start JurySecondJudgeBfa Seciton */}

        <div className="cs-height_135 cs-height_lg_80" />
        {/* End JurySecondJudgeBfa Seciton */}
        <div className="container" bis_skin_checked={1}>
          <div className="col-12 mb-5 pb-4">
            <NavLink
              to="/judges"
              className="cs-previous d-flex gap-2 align-items-center cs-accent_color_2_hover ps-5 fs-6 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              bis_skin_checked={1}
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}
            >
              <i className="fas fa-chevron-circle-left fs-4" /> Back to Judges
            </NavLink>
          </div>
          <div className="cs-blog_details cs-style1" bis_skin_checked={1}>
            <div
              className="row justify-content-center align-items-center"
              bis_skin_checked={1}
            >
              <div className="col-lg-10">
                {/* <h5>Dear Valued Customer,</h5>  */}
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12 text-center">
                    <br />
                    <img
                      src="../assets/img/event-conference/bfa-jurry2.png"
                      style={{ maxHeight: "295px", padding: "0 10px" }}
                      alt="Member"
                      className="cs-accent_border cs-transition_3"
                    />
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12 ">
                    <p className="mb-1 pt-3 pb-1">
                      {" "}
                      <span className="fw-bolder">Bharat Rai&#39;s </span>{" "}
                      distinguished career includes leadership roles in luxury
                      hotels and consulting for top financial clients like PwC,
                      Aviva, Marsh, Nomura, and Deutsche Bank. At CBRE, he
                      currently leads workplace strategy for a major finance
                      client, enhancing service for 14,000 employees across
                      Europe. His expertise in hospitality and corporate
                      environments provides him with unique insights into
                      creating seamless customer journeys.
                    </p>
                    <p className="mt-1 pt-1">
                      Bharat enhances customer and employee experiences by
                      identifying gaps in products and services through detailed
                      user experience analysis. He creates strategies that align
                      with business goals, refines service offerings, and drives
                      growth by transforming the end-user journey to meet
                      evolving demands.
                    </p>
                  </div>
                </div>
                <p>
                  <p>
                    {" "}
                    Bharat’s success stems from using data-driven decisions,
                    team collaboration, and personalized service to elevate
                    client and employee experiences. His leadership has
                    consistently boosted customer satisfaction and business
                    performance, making him a trusted expert in optimizing
                    service journeys and organizational efficiency.
                  </p>
                  <p>
                    As a judge, Bharat brings extensive experience from top
                    financial institutions and high-stakes environments. His
                    strategic insights into enhancing customer journeys and
                    achieving business outcomes make him a valuable voice in
                    fintech.
                  </p>
                  <p className="fw-bolder">
                    Stay tuned for more update and get ready for an
                    extraordinary celebration of fintech excellence!
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JurySecondJudgeBfa;
