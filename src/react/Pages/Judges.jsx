import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import JudgesSection2025 from "./2025/JudgesSection/JudgeSection2025";

const Judges = () => {
const [activeAccordion, setActiveAccordion] = useState(0); // Set the initial active accordion to the first item

const toggleAccordion = (index) => {
setActiveAccordion(activeAccordion === index ? null : index);
};

// Example FAQ Data
const faqData = [
{
question: "2025 Judges",
answer: (
<>
  {/* Watch this space for more updates */}
   <section
      id="judges-section"
      style={{
        width: "100%",
        // background: "linear-gradient(180deg, #fdfdfd, #f7f7f7)",
        backgroundImage: 'url("../assets/img/event-conference/counter_bg3.webp")',
        backgroundPosition: "center center",
        backgroundSize: "cover",
        paddingTop: "40px",   
      }}
    >
      <div style={{padding:"88px"}}>
      <JudgesSection2025 />
      </div>
    </section>

</>
),
},
{
question: "2024 Judges",
answer: (
<div className="row">
  <div className="col-lg-12">
    <div className="cs-accordians cs-style1">
      <div className="cs-accordian active">
        <div className="cs-accordian-body" style={{ display: "block" }}>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4">
              <div className="cs-team_member cs-style8 text-center cs-white_bg">
                <div
                  className="cs-team_member_in cs-accent_5_bg cs-accent_5_bg_2_hover cs-transition_3 cs-accent_border cs-accent_border_2_hover">
                  <div className="cs-member_image position-relative">
                    <NavLink to="/judges/giordano-cortese">
                      <img src="../assets/img/event-conference/bfa-jurry1.png" alt="Member"
                        className="cs-accent_border cs-transition_3" />
                    </NavLink>
                  </div>
                  <div className="cs-member_info">
                    <h2 className="cs-member_name cs-semi_bold text-uppercase">
                      <NavLink to="/judges/giordano-cortese">
                        Mr. Giordano Cortese{" "}
                      </NavLink>
                    </h2>
                    <div className="cs-member_designation cs-primary_color">
                      Senior Manager of Partnerships & Client
                      Acquisition <br />
                      <strong>First Rate Exchange Services Ltd</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs-height_40 cs-height_lg_30" />
            </div>
            <div className="col-lg-4">
              <div className="cs-team_member cs-style8 text-center cs-white_bg">
                <div
                  className="cs-team_member_in cs-accent_5_bg cs-accent_5_bg_2_hover cs-transition_3 cs-accent_border cs-accent_border_2_hover">
                  <div className="cs-member_image position-relative">
                    <NavLink to="/judges/bharat-rai
">
                      <img src="../assets/img/event-conference/bfa-jurry2.png" alt="Member"
                        className="cs-accent_border cs-transition_3" />
                    </NavLink>
                  </div>
                  <div className="cs-member_info">
                    <h2 className="cs-member_name cs-semi_bold text-uppercase">
                      <NavLink to="/judges/bharat-rai">
                        Mr. Bharat Rai{" "}
                      </NavLink>
                    </h2>

                    <div className="cs-member_designation cs-primary_color">
                      Regional Workplace Manager
                      <br /> <strong> CBRe</strong>
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs-height_40 cs-height_lg_30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

),
},
];
return (
<div>
  <Helmet>
    <title>Fintech Awards Judges | Financial Experts UK</title>
    <meta name="description"
      content="Meet the Fintech Awards judges- leading financial experts in the UK who will recognise outstanding innovations in the finance industry." />
    <meta name="keywords"
      content="Brit Fintech Awards, Judges, Financial Technology Experts, Fintech Leaders, Judges Panel" />
    <meta name="author" content="Brit Fintech Awards" />
    <meta property="og:title" content="Fintech Awards Judges | Financial Experts UK" />
    <meta property="og:description"
      content="Meet the Fintech Awards judges- leading financial experts in the UK who will recognise outstanding innovations in the finance industry." />
    <meta property="og:image" content="https://britfintechawards.com/assets/img/judges.png" />
  </Helmet>

  <div>
    <div className="cs-height_90 cs-height_lg_80" />
    <div className="cs-hero cs-style12 cs-type1 cs-center text-center  cs-parallax cs-hobble" style={{
            backgroundImage:
              'url("../assets/img/event-conference/hero-img.jpg")',
          }}>
      <div className="cs-hero_pattern cs-hover_layer3" style={{}}>
        <div className="cs-hero_pattern_in cs-bg_parallax" />
      </div>
      <div className="container wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s" style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.2s",
              animationName: "fadeInDown",
            }}>
        <div className="cs-hero_text text-left">
          <h1 className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-3 mb-0"
            style={{ marginTop: "40px !important" }}>
            Judges
          </h1>
          <p className="pb-0 mb-0 text-left text-white">
            Meet Our FinTech Jury: Experts in Action
          </p>
          <div className="cs-height_10 cs-height_lg_0" />
        </div>
      </div>
      <div className="cs-hero_img cs-bg" data-src="../assets/img/creative-agency/hero-img.jpg" style={{
              backgroundImage:
                'url("../assets/img/creative-agency/hero-img.jpg")',
            }}>
        <div className="cs-hero_img_circle" />
      </div>
    </div>

    <div className="cs-height_90 cs-height_lg_80" />
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="cs-accordians cs-style1">
            {faqData.map((faq, index) => (
            <div className={`cs-accordian ${ activeAccordion===index ? "active" : "" }`} key={index}>
              <div className="cs-accordian_head cs-accent_border_2 cs-white_bg" onClick={()=> toggleAccordion(index)}
                >
                <h2 className="cs-accordian_title">{faq.question}</h2>
                <span className="cs-accordian_toggle cs-accent_color_2">
                  <i className={`fa ${ activeAccordion===index ? "fa-angle-up" : "fa-angle-down" }`} />
                </span>
              </div>
              <div className="cs-accordian-body" style={{
                        display: activeAccordion === index ? "block" : "none",
                      }}>
                {faq.answer}
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  </div>
  <div className="cs-height_40 cs-height_lg_40" />
  <div className="cs-bg" style={{
          backgroundImage:
            'url("../assets/img/event-conference/newsletter-bg.jpg")',
        }}>
    {/* <div className="cs-bg" data-src="../assets/img/event-conference/newsletter-particel.png" style={{
            backgroundImage:
              'url("../assets/img/event-conference/newsletter-particel.png")',
          }}>
      <div className="cs-height_135 cs-height_lg_75" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s" style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.2s",
                  animationName: "fadeInDown",
                }}>
            <div className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase">
              <div className="cs-section_subtitle cs-primary_font cs-medium cs-white_80">
                BRIT FINTECH AWARDS 2024
              </div>
              <h2 className="cs-section_title cs-extra_bold cs-white">
                Are you ready to enter?
              </h2>
              <p className="text-white mt-2">
                Join us in celebrating the best and brightest in UK Fintech
                Industry.
              </p>
            </div>
            <div className="cs-height_40 cs-height_lg_30" />
            <div className="cs-toolbox text-center">
              <NavLink to="/register-now"
                className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover  text-white">
                <span className="cs-btn_text">Register For Awards</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="cs-height_140 cs-height_lg_80" />
    </div> */}
  </div>
</div>
);
};

export default Judges;