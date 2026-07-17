import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const HowToEnter = () => {
  const [activeAccordion, setActiveAccordion] = useState(0); // Set the initial active accordion to the first item

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Example FAQ Data
  const faqData = [
    {
      question: "Guide to register",
      answer: (
        <ol className="" style={{ lineHeight: "2", fontWeight: "500" }}>
          <p style={{ marginLeft: "-30px" }}>
            ⨀ Read the award entry guidelines and eligibility for your
            reference.
          </p>

          <li>
                Please read the award entry guidelines and eligibility criteria carefully before submitting your nomination.
              </li>
              <li>
              Fill in your company information and entrant details accurately.
              </li>
             <li>
             Any Company registered in the UK or outside UK and operate within payments or banking sectors.
             </li>
             <li>
             Global FintTech companies can apply for Fintech of the Year – Global.
             </li>
              <li>
             Non-UK MSBs can enter the MSB of the Year – Global category.
              </li>
              <li>
              Annual turnover must exceed £2 million (this does not apply to startups).
              </li>

              <li>Directors or Ultimate Beneficial Owners (UBOs) must have no criminal charges or penalties from any regulatory body.</li>
              <li>Nominations are open to Fintech companies and MSBs only.</li>
              <li> Each company can submit nominations for up to 3 categories only.</li>
              <li>
                All nominations will be reviewed and judged by a panel of industry experts.
              </li>

              <li>Please note that each nomination incurs a fee.</li>
              <li> 1 free attendee with each nomination!
Your first additional attendee joins at just £95, and every attendee thereafter at £195.</li>
              <li>
                If your supporting photos or documents are not ready at the time of submission, you can email them later to kudos@britfintechawards.com.
              </li>
              <li>
                If you experience any difficulties with the nomination process, please contact us at {" "}
                <a href="tel:442038283277">+44 20 3828 3277</a>
              </li>
        </ol>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Participate in UK Financial Awards | How to Enter Fintech Awards
        </title>
        <meta
          name="description"
          content="Learn how to enter the Fintech Awards 2024 and participate in celebrating innovation. Discover the steps to showcase your achievements in the UK financial awards."
        />
        <meta
          name="keywords"
          content="Brit Fintech Awards, How To Enter, Participation Guidelines, Fintech Innovation, Award Submission"
        />
        <meta name="author" content="Brit Fintech Awards" />
        <meta
          property="og:title"
          content="Participate in UK Financial Awards | How to Enter Fintech Awards"
        />
        <meta
          property="og:description"
          content="Learn how to enter the Fintech Awards 2024 and participate in celebrating innovation. Discover the steps to showcase your achievements in the UK financial awards."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/how-to-enter.png"
        />
      </Helmet>

      <div>
        {/* Start Hero Section */}
        <div className="cs-height_90 cs-height_lg_90" />
        <div
          className="cs-hero cs-style12 cs-type1 cs-center text-center  cs-parallax cs-hobble"
          
          style={{
            backgroundImage:
              'url("../assets/img/event-conference/hero-img.jpg")',
            height: "300px",
          }}
        >
          <div className="cs-hero_pattern cs-hover_layer3" style={{}}>
            <div
              className="cs-hero_pattern_in cs-bg_parallax"
            
             
            />
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
              <h1
                className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-3 mb-0"
                style={{ marginTop: "40px !important" }}
              >
                How To Enter
              </h1>
              <p className="pb-0 mb-0 text-left text-white">
                Ready, Set, Enter: Join the Competition
              </p>
              <div className="cs-height_10 cs-height_lg_0" />
            </div>
          </div>
          <div
            className="cs-hero_img cs-bg"
            data-src="../assets/img/creative-agency/hero-img.jpg"
            style={{
              backgroundImage:
                'url("../assets/img/creative-agency/hero-img.jpg")',
            }}
          >
            <div className="cs-hero_img_circle" />
          </div>
        </div>
        {/* End Hero Section */}
      </div>
      <div className="cs-height_60 cs-height_lg_60" />
      <div className="container">
        {/* FAQ Section */}
        <h2>Ready to participate? Here's what you need to know! </h2>
        <h4>
          ⨁ The deadline to Enter the Brit FinTech Awards is 15th Sep 2024.
        </h4>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cs-accordians cs-style1">
                {faqData.map((faq, index) => (
                  <div
                    className={`cs-accordian ${
                      activeAccordion === index ? "active " : ""
                    }`}
                    style={{ color: "#000" }}
                    key={index}
                  >
                    <div
                      className="cs-accordian_head cs-accent_border_2 text-dark cs-white_bg"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h2 className="cs-accordian_title">{faq.question}</h2>
                      <span className="cs-accordian_toggle cs-accent_color_2">
                        <i
                          className={`fa ${
                            activeAccordion === index
                              ? "fa-angle-up"
                              : "fa-angle-down"
                          }`}
                        />
                      </span>
                    </div>
                    <div
                      className="cs-accordian-body"
                      style={{
                        display: activeAccordion === index ? "block" : "none",
                      }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* End FAQ Section */}
      </div>
      {/* Counter and Newsletter Section */}
      <div className="cs-height_40 cs-height_lg_40" />
      <div
        className="cs-bg"
        style={{
          backgroundImage:
            'url("../assets/img/event-conference/newsletter-bg.jpg")',
        }}
      >
        {/* <div
            className="cs-bg"
            data-src="../assets/img/event-conference/newsletter-particel.png"
            style={{
              backgroundImage:
                'url("../assets/img/event-conference/newsletter-particel.png")',
            }}
          >
            <div className="cs-height_135 cs-height_lg_75" />
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-8 offset-lg-2 wow fadeInDown"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationDelay: "0.2s",
                    animationName: "fadeInDown",
                  }}
                >
                  <div className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase">
                    <div className="cs-section_subtitle cs-primary_font cs-medium cs-white_80">
                       BRIT FINTECH AWARDS 2024
                    </div>
                    <h2 className="cs-section_title cs-extra_bold cs-white">
                      Are you ready to enter?
                    </h2>
                    <p className="text-white mt-2">
                      Join us in celebrating the best and brightest in UK
                      Fintech Industry.
                    </p>
                  </div>
                  <div className="cs-height_40 cs-height_lg_30" />
                  <div className="cs-toolbox text-center" bis_skin_checked={1}>
                    <NavLink
                      to="/register-now"
                      className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover  text-white"
                    >
                      <span className="cs-btn_text">Register For Awards</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-height_140 cs-height_lg_80" />
          </div> */}
      </div>
    </>
  );
};

export default HowToEnter;
