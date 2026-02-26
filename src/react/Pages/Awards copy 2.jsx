import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
const Awards24 = () => {
  return (
    <>
      <Helmet>
        <title> Fintech Awards UK 2024 | Financial Awards UK </title>
        <meta
          name="description"
          content="Join our Brit Fintech Awards UK 2024, the leading financial awards in the UK celebrating top innovators and achievements in the fintech industry. "
        />
      </Helmet>
      <div className="cs-height_90 cs-height_lg_80" />

      <div
        className="cs-hero cs-style12 cs-type1 cs-center text-center  cs-parallax cs-hobble"
        
        style={{
          backgroundImage: 'url("../assets/img/event-conference/hero-img.jpg")',
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
              Awards Category
            </h1>
            <p className="pb-0 mb-0 text-left text-white">
              Innovation Rewarded: Our Awards
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

      <div className="cs-gradient_bg_1 cs-flying_img_wrap cs-style8 cs-parallax">
        <img
          src="../assets/img/event-conference/flying-img8.png"
          alt="Flying image"
          className="cs-flying_img cs-posiiton1 cs-to_up"
          style={{ transform: "translateY(-73.5844px)" }}
        />
        <img
          src="../assets/img/event-conference/flying-img7.png"
          alt="Flying image"
          className="cs-flying_img cs-posiiton2 cs-to_right_up"
          style={{ transform: "translate(73.5844px, -73.5844px)" }}
        />
        <div className="cs-height_35 cs-height_lg_75" />
        <div className="container" bis_skin_checked={1}>
          <div className="row " bis_skin_checked={1}>
            <div
              className="col-lg-12  wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.2s",
                animationName: "fadeIn",
              }}
            >
              <div className="cs-text_box cs-style1 cs-type1 text-center">
                {/* <div className="cs-text_box_subtitle cs-medium cs-accent_color">
                  OUR CATEGORIES
                </div> */}
                <h2 className="cs-text_box_title text-uppercase cs-bold">
                  Fintech Awards
                </h2>
                <div className="cs-height_35 cs-height_lg_35" />
                <div className="cs-text_box_text ">
                  Join us in celebrating fintech innovation through our Awards
                  Category, where we honour the pioneers and visionaries driving
                  innovation and transformation in finance.
                </div>
                <div className="cs-height_10 cs-height_lg_10" />
                <div className="row  pb-0 pt-3" style={{textAlign: 'left'}}>
                <ul className="card card-body mb-0 fs-6" style={{listStyle: 'none', fontWeight: '600', lineHeight: "3", height: 'auto'}}>
                    <li>▶ Account 2 Account Payment Processor of the Year</li>
                    <li>▶ Payment Innovator of the Year</li>
                    <li>▶ Pay-Out Innovator of the Year</li>
                    <li>▶ B-A-A-S Innovator of the Year</li>
                    <li>▶ Startup of the Year</li>
                    <li>▶ Woman Entrepreneur in FinTech of the Year </li>
                    <li>▶ Anti-Fraud Innovator of the Year</li>
                    <li>▶ ID Verification Innovator of the Year</li>
                    <li>▶ Payment Acquirer of the Year</li>
                  </ul>
                </div>
              </div>
              <div className="cs-height_50 cs-height_lg_50" />
            </div>
        
          </div>
       
        </div>
        <div className="cs-height_40 cs-height_lg_40" />

        <div className="container" bis_skin_checked={1}>
          <div className="row" bis_skin_checked={1}>
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.2s",
                animationName: "fadeIn",
              }}
            >
              <div className="cs-text_box cs-style1 cs-type1 text-center">
                {/* <div className="cs-text_box_subtitle cs-medium cs-accent_color">
                  OUR CATEGORIES
                </div> */}
                <h2 className="cs-text_box_title text-uppercase cs-bold">
                  MSB Awards
                </h2>
                <div className="cs-height_10 cs-height_lg_10" />
                <div className="cs-text_box_text ">
                  Join us in celebrating the outstanding achievements,
                  innovations, and excellence of leaders in the money service
                  business industry.
                </div>
                <div className="cs-height_10 cs-height_lg_10" />
                <div className="row  pb-0 pt-3" style={{textAlign: 'left'}}>
                <ul className="card card-body mb-0 fs-6" style={{listStyle: 'none', fontWeight: '600', lineHeight: "3", height: 'auto'}}>
                    <li>▶ Compliance Innovator MSB of the Year</li>
                    <li>▶ Best in Customer Service MSB of the Year</li>
                    <li>▶ Remittance Innovator MSB of the Year</li>
                    <li>▶ Progressive Money Exchanger MSB of the Year</li>
                    <li>▶ MSB Disruptor of the Year</li>
                    <li>▶ MSB Store of the Year </li>
                    
                  </ul>
                </div>
              </div>
              <div className="cs-height_50 cs-height_lg_50" />
            </div>
        
        
          </div>
        </div>
        <div className="cs-height_40 cs-height_lg_40" />
            <div className="container" bis_skin_checked={1}>
          <div className="row" bis_skin_checked={1}>
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.2s",
                animationName: "fadeIn",
              }}
            >
              <div className="cs-text_box cs-style1 cs-type1 text-center">
                {/* <div className="cs-text_box_subtitle cs-medium cs-accent_color">
                  OUR CATEGORIES
                </div> */}
                <h2 className="cs-text_box_title text-uppercase cs-bold">
                GLOBAL AWARDS
                </h2>
                <div className="cs-height_35 cs-height_lg_35" />
                <div className="cs-text_box_text ">
                Join us in celebrating the leaders and innovators who are making a global impact with their exceptional contributions.
                </div>
                <div className="cs-height_10 cs-height_lg_10" />
                <div className="row  pb-0 pt-3" style={{textAlign: 'left'}}>
                  <ul className="card card-body mb-0 fs-6" style={{listStyle: 'none', fontWeight: '600', lineHeight: "3", height: 'auto'}}>
                    <li>▶ MSB of the Year</li>
                    <li>▶ FinTech of the Year</li>
                   
                    
                  </ul>
                </div>
              </div>
              <div className="cs-height_50 cs-height_lg_50" />
            </div>
        
        
          </div>
        </div>
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
      </div>
    </>
  );
};

export default Awards24;
