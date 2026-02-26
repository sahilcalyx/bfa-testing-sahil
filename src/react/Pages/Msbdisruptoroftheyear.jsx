import React from 'react'
import AwardsTermsAndCondtion from '../Components/AwardsTermsAndCondtion'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import RegisterButton from './RegisterButton'

const Msbdisruptoroftheyear = () => {
return (
<>
  <Helmet>
    <title>Brit Fintech Awards | MSB Disruptor of the Year</title>
    <meta name="description" content="" />
    <meta name="keywords"
      content="MSB Disruptor of the Year, Payment Payout Innovations, Fintech Awards, Financial Services Innovations" />

    <meta property="og:title" content="Brit Fintech Awards | MSB Disruptor of the Year" />
    <meta property="og:description" content="" />
    <meta property="og:image" content="https://britfintechawards.com/assets/img/aword/MSB/msb-disruptor-of-the-year.png" />
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
          <strong> MSB Disruptor</strong> <br /> of the year
        </h1>
        <p className="pb-0 mb-0 text-left" style={{color:'#fff'}}>
        Innovate, Disrupt, Dominate - Honoring the Masters of Disruption in the Money Service Businesses.
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
  <div className="container" bis_skin_checked={1}>
    <div className="p-3 mb-3 ">
      <div bis_skin_checked={1}>
        <NavLink to="/awards"
          className="cs-previous d-flex gap-2 align-items-center cs-accent_color_2_hover ps-5 fs-6 wow fadeIn"
          data-wow-duration="1s" data-wow-delay="0.3s"style={{
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
    <div className="row" bis_skin_checked={1}>
      <div className="col-lg-5" bis_skin_checked={1}>
        <div className="cs-icon_box cs-style7 text-center wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s"
         style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}>
          <img src="../assets/img/aword/MSB/msb-disruptor-of-the-year.png"
            style={{ boxShadow: "3px 0 10px 0 #b3b3b3",borderRadius:'20px' }} alt=" MSB Disruptor of the year" />
        </div>
        <div className="cs-height_30 cs-height_lg_30"/>
      </div>

      {/* .col */}
      <div className="col-lg-7" bis_skin_checked={1}>
        <div className="cs-vertical_middle" bis_skin_checked={1}>
          <div className="cs-vertical_middle_in" bis_skin_checked={1}>
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
              <div className="cs-height_25 cs-height_lg_25"/>
              <div className="cs-text_box_text" bis_skin_checked={1}>
                Excellence in facilitating seamless interbank transactions.
              </div> */}
              <h4>Criteria</h4>
              <ul className="cs-text_box_list cs-mp0 cs-primary_color">
                <li>
                  <i className="fas fa-check cs-accent_color" />
                  Applicants must have been in operation for a minimum of 2 years. The number of years in operation will be verified based on the company's incorporation or registration date.
                </li>
                <li>
                  <i className="fas fa-check cs-accent_color" />
                  The Applicants must be an individual or organisation actively operating as a Money Services Business.
                </li>
                <li>
                  <i className="fas fa-check cs-accent_color" />
                  The Applicants disruption should be evidenced by innovative practices, technologies, or approaches introduced within the last two years.
                </li>
                <li>
                  <i className="fas fa-check cs-accent_color" />
                  The business must hold all relevant licenses and comply with applicable financial regulations in UK.
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
              <p className="mt-3" style={{fontSize:'16px',display:'none'}}>
                <em>
                  *The organisers reserve the right to adjust the award
                  criteria or request additional information from the
                  applicants as deemed necessary.
                </em>
              </p>
            </div>
             <RegisterButton awardName="MSB Disruptor of the Year" />
          </div>
        </div>
      </div>
      <div className="cs-height_50 cs-height_lg_50" />
      <AwardsTermsAndCondtion />

      {/* .col */}
    </div>
  </div>
  <div className="cs-height_120 cs-height_lg_120" />
</>
)
}

export default Msbdisruptoroftheyear