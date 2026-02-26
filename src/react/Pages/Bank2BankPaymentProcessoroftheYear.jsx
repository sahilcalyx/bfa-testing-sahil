import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import AwardsTermsAndCondtion from "../Components/AwardsTermsAndCondtion";
import RegisterButton from "./RegisterButton";

const Bank2BankPaymentProcessoroftheYear = () => {
return (
<div>
  <Helmet>
    <title>
      Brit Fintech Awards | Account2Account Payment Processor of the Year
    </title>
    <meta name="description"
      content="Recognizing excellence in bank-to-bank payment processing innovations and services." />
    <meta name="keywords"
      content="Account2Account Payment Processor of the Year, Banking Innovations, Payment Processing Excellence, Fintech Awards" />
    <meta property="og:title" content="Brit Fintech Awards | Account2Account Payment Processor of the Year" />
    <meta property="og:description"
      content="Recognizing excellence in bank-to-bank payment processing innovations and services." />
    <meta property="og:image" content="https://britfintechawards.com/assets/img/aword/Fintech/Account2Account-Payment-Processor-of-the-Year.png" />
  </Helmet>

  <div className="cs-height_90 cs-height_lg_90" />
  <div className="cs-hero cs-style12 cs-type1 cs-center text-center  cs-parallax cs-hobble" style={{
          backgroundImage: 'url("../assets/img/event-conference/hero-img.jpg")',
        }}>
    {/* <div className="cs-hero_pattern cs-hover_layer3" style={{}}>
      <div className="cs-hero_pattern_in cs-bg_parallax" />
    </div> */}
    <div className="container wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s" style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.2s",
            animationName: "fadeInDown",
          }}>
      <div className="cs-hero_text text-left">
        <h1 className="cs-hero_title cs-white text-uppercase pb-3 mb-0" style={{ marginTop: "40px !important" }}>
          <strong>Account2Account Payment Processor</strong> <br /> of the year
        </h1>
        <p className="pb-0 mb-0 text-left" style={{color:'#fff'}}>
          Excellence in facilitating seamless interbank transactions.
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
  <div className="container">
    <div className="p-3 mb-3 ">
      <div>
        <NavLink to="/awards"
          className="cs-previous d-flex gap-2 align-items-center cs-accent_color_2_hover ps-5 fs-6 wow fadeIn"
          data-wow-duration="1s" data-wow-delay="0.3s" style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeIn",
                display: "flex",
                justifyContent: "end",
                fontWeight: "600",
                color: "#f40181",
              }}>
          <i className="fas fa-chevron-circle-left fs-4" /> Back to Awards
        </NavLink>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-5">
        <div className="cs-icon_box cs-style7 text-center wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s"
          style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}>
          <img src="../assets/img/aword/Fintech/Account2Account-Payment-Processor-of-the-Year.png"
            style={{ boxShadow: "3px 0 10px 0 #b3b3b3",borderRadius:'20px' }} alt="Account2Account Payment Processor of the year" />
        </div>
        <div className="cs-height_30 cs-height_lg_30" />
      </div>

      {/* .col */}
      <div className="col-lg-7">
        <div className="cs-vertical_middle">
          <div className="cs-vertical_middle_in">
            <div className="cs-text_box cs-style1 cs-size1 wow fadeIn p-4" data-wow-duration="1s" data-wow-delay="0.3s"
              style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationDelay: "0.3s",
                    animationName: "fadeIn",
                    background: "#efefef",
                    borderRadius: "20px",
                    position:"relative",
                    zIndex:"1"
                  }}>
              {/* <h2 className="cs-text_box_title">
                <b className="cs-accent_color ">
                  Account2Account Payment Processor
                </b>{" "}
                of the Year
              </h2> */}
              {/*
              <div className="cs-height_25 cs-height_lg_25" />
              <div className="cs-text_box_text">
                Excellence in facilitating seamless interbank transactions.
              </div> */}
              <h4>Criteria</h4>
              <ul className="cs-text_box_list cs-mp0 cs-primary_color">
                <li>
                  <i className="fas fa-check cs-accent_color" />
                  Applicants must have been in operation for a minimum of 2 years. The number of years in operation will
                  be verified based on the company's incorporation or registration date.
                </li>
                <li>
                  <i className="fas fa-check cs-accent_color" />
                  The award is open to companies offering account-to-account payment processing services.
                </li>
                <li>
                  <i className="fas fa-check cs-accent_color" />
                  Applicants must demonstrate significant contributions to the industry, innovation, and excellence in
                  the field of OPEN Banking payments.
                </li>
                <li>
                  <i className="fas fa-check cs-accent_color" />
                  The Ultimate Beneficial Owners (UBOs) of the applicant organisation must not have been involved in any
                  legal prosecutions or regulatory actions.
                </li>
                <li>
                  <i className="fas fa-check cs-accent_color" />
                  Applicants must have a registered business and operational presence in the UK.
                </li>
              </ul>
              <p className="mt-3" style={{fontSize:'16px',display:'none'}}>
                <em>
                  *The organisers reserve the right to adjust the award
                  criteria or request additional information from the
                  applicants as deemed necessary.
                </em>
              </p>
            </div>
            <RegisterButton awardName="Account 2 Account Payment Processor of the Year" />
          </div>
        </div>
      </div>
      <div className="cs-height_50 cs-height_lg_50" />
     <AwardsTermsAndCondtion/>
    
      {/* .col */}
    </div>
  </div>
  <div className="cs-height_120 cs-height_lg_120" />
</div>
);
};

export default Bank2BankPaymentProcessoroftheYear;