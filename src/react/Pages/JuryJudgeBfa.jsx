import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const JuryJudgeBfa = () => {
  return (
    <div>
      <Helmet>
        <title> Meet Our Judge | Mr. Giordano</title>
        <meta
          name="description"
          content="Meet Mr. Giordano, our judge with 20+ years in financial service. His expertise in innovation and growth makes him a key part of the Brit Fintech Awards."
        />
        <meta
          name="keywords"
          content="Brit Fintech Award, UK Fintech Awards, JuryJudgeBfa , Financial Technology Sector UK, Fintech Innovation UK"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta property="og:title" content="Meet Our Judge | Mr. Giordano" />
        <meta
          property="og:description"
          content="Meet Mr. Giordano, our judge with 20+ years in financial service. His expertise in innovation and growth makes him a key part of the Brit Fintech Awards."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/event-conference/JuryJudgeBfa.png"
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
        {/* Start JuryJudgeBfa Seciton */}

        <div className="cs-height_135 cs-height_lg_80" />
        {/* End JuryJudgeBfa Seciton */}
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
                      src="../assets/img/event-conference/bfa-jurry1.png"
                      style={{ maxHeight: "295px", padding: "0 10px" }}
                      alt="Member"
                      className="cs-accent_border cs-transition_3"
                    />
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12 ">
                    <p className="mb-1 pt-3 pb-1">
                      {" "}
                      We are excited to announce that Mr.Giordano is joining us
                      as a judge for the Brit Fintech Awards!
                    </p>
                    <p className="mt-1 pt-1">
                      With over two decades of experience in the financial
                      services industry, Giordano brings a wealth of knowledge
                      and expertise to our panel. His impressive career includes
                      leading strategic initiatives and driving growth and
                      innovation at esteemed organizations such as Euro change,
                      First Rate Exchange Services, iBAN-X, and Retail FSL.{" "}
                      <br /> <br />
                      Giordano’s leadership has been instrumental in forming
                      high-profile partnerships and shaping effective
                      go-to-market strategies, significantly expanding market
                      presence. Known for his forward-thinking approach, he has
                      consistently explored how emerging technologies can
                      enhance business results, operations, and customer
                      experiences.
                    </p>
                  </div>
                </div>
                <p>
                  <p>
                    {" "}
                    From his early academic work on online grocery shopping to
                    his recent advancements in currency exchange systems and ATM
                    enhancements, Giordano’s passion for innovation is evident
                    throughout his career.
                  </p>
                  <p>
                    We are confident that Giordano’s extensive expertise and
                    commitment to innovation make him an exceptional choice to
                    evaluate and celebrate the groundbreaking contributions in
                    the fintech industry.
                  </p>
                  <p>
                    Stay tuned for more updates as we continue to reveal our
                    esteemed judges and prepare for a remarkable Brit Fintech
                    Awards!
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

export default JuryJudgeBfa;
