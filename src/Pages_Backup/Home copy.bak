import React, { useEffect, useState } from "react";
import Odometer from "odometer";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import ErrorBoundary from "../Components/ErrorBoundary";
import GallerySection from "../Components/GallerySection";
import DynamicSlider from "../Components/SliderBigBan/DynamicSlider";
import SponsorsSlider from "../Components/SliderBigBan/SponsorsSlider";
import TestimonialsSlider from "../Components/TestimonialsSlider";
import TestimonialSlider from "../Components/Testmonials/TestimonialSlider";
import AnimatedStats from "../Components/AnimatedStats";

const Home = () => {
  const statsData = [
    { endValue: 120, duration: 2, title: "Business ", plus: '+', className: "before" },
    { endValue: 150, duration: 2, title: "Attendees", plus: '+', className: "before" },
    { endValue: 21, duration: 2, title: "Awards", plus: '' },  // Add 'plus' here
  ];
  
  useEffect(() => {
    // Initialize odometers
    const odometers = document.querySelectorAll(".odometer");
    odometers.forEach((odometer) => {
      new Odometer({
        el: odometer,
        format: "(ddd).dd",
        theme: "default",
        duration: 2000, // Optional: Animation duration in milliseconds
      });
    });

    // Update counters
    const updateCounters = () => {
      // Get current time in milliseconds
      const currentTime = new Date().getTime();

      // Create the event date in UK timezone (BST)
      const eventTime = new Date(Date.UTC(2024, 9, 10, 18, 0, 0)).getTime(); // 10th Oct 2024, 7PM UK is 6PM UTC

      // Calculate time difference
      const timeDifference = eventTime - currentTime;

      // Calculate remaining days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Check if odometers array is defined and not empty
      if (odometers.length > 0) {
        odometers[0].innerHTML = days;
        odometers[1].innerHTML = hours;
        odometers[2].innerHTML = minutes;
        odometers[3].innerHTML = seconds;
      }
    };

    // Update counters initially
    updateCounters();

    // Update counters every second
    const intervalId = setInterval(updateCounters, 1000);

    // Clean up
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Brit Fintech Awards UK</title>
        <meta
          name="description"
          content="Join us at the premier Brit Fintech Awards UK event, recognising excellence in the financial technology sector. Celebrate innovation at the Brit Fintech Awards 2024. "
        />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://britfintechawards.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Brit Fintech Awards UK" />
        <meta
          property="og:description"
          content="Join us at the premier Brit Fintech Awards UK event, recognising excellence in the financial technology sector. Celebrate innovation at the Brit Fintech Awards 2024. "
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/gallery/networking/23.jpg"
        />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="britfintechawards.com" />
        <meta property="twitter:url" content="https://britfintechawards.com/" />
        <meta name="twitter:title" content="Brit Fintech Awards UK" />
        <meta
          name="twitter:description"
          content="Join us at the premier Brit Fintech Awards UK event, recognising excellence in the financial technology sector. Celebrate innovation at the Brit Fintech Awards 2024. "
        />
        <meta
          name="twitter:image"
          content="https://britfintechawards.com/assets/img/gallery/networking/23.jpg"
        />
      </Helmet>

      <div>
        <div className="cs-height_0 cs-height_lg_0" />
        {/* Start Hero Seciton */}
        <DynamicSlider />
        <div className="cs-height_0 cs-height_lg_0" />


        <AnimatedStats stats={statsData} />
        {/* <div className="container">
          <SponsorsSlider />
        </div> */}
        <ErrorBoundary>
          <GallerySection />
        </ErrorBoundary>

        <div className="cs-gradient_bg_2 mt-5" 
            
            style={{
              backgroundImage:
                'url("../assets/img/event-conference/counter_bg2.png")',
              backgroundPosition: "center center",
              backgroundSize: 'cover',
           
            }}>
          <div className="cs-height_35 cs-height_lg_35" />
          <div
            className="container wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div
              className="container cs-bg_parallax"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              bis_skin_checked={1}
           
            >
              <div
                className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase"
                bis_skin_checked={1}
              >
                <div
                  className="cs-section_subtitle cs-primary_font cs-medium cs-accent_color text-white"
                  bis_skin_checked={1}
                >
                  Special moments
                </div>
                <h2 className="cs-section_title cs-extra_bold text-white">
                  Video gallery
                </h2>
              </div>
              <div
                className="cs-height_70 cs-height_lg_50"
                bis_skin_checked={1}
              />
            </div>
          </div>
          <div
            className="container wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="row">
              <div className="col-lg-4">
                <a
                  href="https://www.youtube.com/watch?v=ABaQqJhplMo"
                  target="_blank"
                >
                  <div
                    className="cs-post cs-style10 position-relative"
                    style={{ height: "400px" }}
                  >
                    {" "}
                    {/* Set a fixed height if needed */}
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/ABaQqJhplMo?si=M_ocsL0dlCjSML-l&start=87&autoplay=1&mute=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="cs-post_thumb cs-bg"
                    ></iframe>
                    <div className="cs-post_info">
                      <h2 className="cs-post_title cs-white cs-white_hover">
                        How the Brit FinTech Awards 2024 Unfolded
                      </h2>
                    </div>
                  </div>
                </a>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>

              <div className="col-lg-4">
                <a
                  href="https://www.youtube.com/watch?v=yZ9xW143yR0"
                  target="_blank"
                >
                  <div
                    className="cs-post cs-style10 position-relative"
                    style={{ height: "400px" }}
                  >
                    {" "}
                    {/* Set a fixed height if needed */}
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/yZ9xW143yR0?start=7&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="cs-post_thumb cs-bg"
                    ></iframe>
                    <div className="cs-post_info">
                      <h2 className="cs-post_title cs-white cs-white_hover">
                        Spotlight of success | Brit Fintech Awards 2024 Winner
                        Highlights
                      </h2>
                    </div>
                  </div>
                </a>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>

              <div className="col-lg-4">
                <a
                  href="https://www.youtube.com/watch?v=WlbDj6NNpgY"
                  target="_blank"
                >
                  <div
                    className="cs-post cs-style10 position-relative"
                    style={{ height: "400px" }}
                  >
                    {" "}
                    {/* Set a fixed height if needed */}
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/WlbDj6NNpgY?start=12&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="cs-post_thumb cs-bg"
                    ></iframe>
                    <div className="cs-post_info">
                      <h2 className="cs-post_title cs-white cs-white_hover">
                        Happy Voices Lasting Impact- Moments, Stories, and
                        Testimonials from Brit Fintech Awards 2024
                      </h2>
                    </div>
                  </div>
                </a>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>
            </div>
            <div class="text-center" bis_skin_checked="1">
             <NavLink
                  to="/video-gallery-2024"
                  className="cs-btn cs-style1  cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hover"
                 
                  bis_skin_checked={1}
                >
                  View More Videos
                </NavLink>
            </div>
          </div>
          <div className="cs-height_50 cs-height_lg_50" />
        </div>
       
        {/* End Hero Seciton */}
        {/* Start Counter */}
        {/* <div className="container">
          <div
            className="cs-counter_4_wrap  cs-accent_bg_2 cs-parallax"
            style={{
              backgroundSize: "cover",
              backgroundImage:
                "url(../assets/img/event-conference/counter_bg.png)",
            }}
          >
            <div className="text-center d-flex justify-content-center  w-100">
              <h3
                className="text-white mb-0 p-3 celebration-text-banner text-center"
                style={{
                  maxWidth: "650px",
                  borderRadius: "0 0 10px 10px",
                  overflowX: "hidden",
                }}
              >
                <span className="slide-left-animation">
                  Awards Night - Thursday 10
                  <sup style={{ fontSize: "18px" }}>th</sup> October 2024
                </span>
              </h3>
            </div>
            <div className="cs-counter_4_wrap_in cs-bg_parallax">
              <div className="cs-counter cs-style4 text-center">
                <h3 className="cs-counter_number cs-extra_bold cs-white">
                  <span className="odometer" />
                </h3>
                <div className="cs-counter_seperator cs-accent_bg bg-white " />
                <div className="cs-counter_title cs-medium text-uppercase cs-white cs-primary_font">
                  Days
                </div>
              </div>
              <div className="cs-counter cs-style4 text-center">
                <h3 className="cs-counter_number cs-extra_bold cs-white">
                  <span data-count-to={22} className="odometer" />
                </h3>
                <div className="cs-counter_seperator cs-accent_bg bg-white" />
                <div className="cs-counter_title cs-medium text-uppercase cs-white cs-primary_font">
                  Hours
                </div>
              </div>
              <div className="cs-counter cs-style4 text-center">
                <h3 className="cs-counter_number cs-extra_bold cs-white">
                  <span data-count-to={48} className="odometer" />
                </h3>
                <div className="cs-counter_seperator cs-accent_bg bg-white" />
                <div className="cs-counter_title cs-medium text-uppercase cs-white cs-primary_font">
                  Minutes
                </div>
              </div>
              <div className="cs-counter cs-style4 text-center">
                <h3 className="cs-counter_number cs-extra_bold cs-white">
                  <span className="odometer" />
                </h3>
                <div className="cs-counter_seperator cs-accent_bg bg-white" />
                <div className="cs-counter_title cs-medium text-uppercase cs-white cs-primary_font">
                  Seconds
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="cs-height_60 cs-height_lg_45" />

        <div
          className="container wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase">
            <TestimonialSlider />
          </div>
        </div>

        {/* End Testimonial Section */}
        {/* End Counter */}
        {/* Start About Seciton */}

        {/* End About Seciton */}

        {/* <div className="cs-accent_4_bg cs-flying_img_wrap cs-style6 cs-parallax">
          <img
            src="../assets/img/event-conference/flying-img3.png"
            alt="Flying image"
            className="cs-flying_img cs-posiiton1 cs-to_up"
          />
          <img
            src="../assets/img/event-conference/flying-img4.png"
            alt="Flying image"
            className="cs-flying_img cs-posiiton2 cs-to_up"
          />
          <div className="cs-height_35 cs-height_lg_35" />
          <div
            className="container wow fadeInDown "
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase">
             
              <h2 className="cs-section_title cs-extra_bold">
              By joining the Brit FinTech Awards, <br /> you'll enjoy
              </h2>
            </div>
            <div className="cs-height_70 cs-height_lg_50" />
           <VinyakSlider/>
            <div className="cs-height_70 cs-height_lg_50" />
          </div>
          <div
            className="container wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
           
          </div>
          <div className="cs-height_135 cs-height_lg_80" />
        </div> */}

        {/* Start Gallery Section */}

        {/* End Gallery Section */}

        {/* Start Schedule Section */}
        {/* <div className="cs-accent_4_bg cs-flying_img_wrap cs-style6 cs-parallax">
          <img
            src="../assets/img/event-conference/flying-img3.png"
            alt="Flying image"
            className="cs-flying_img cs-posiiton1 cs-to_up"
          />
          <img
            src="../assets/img/event-conference/flying-img4.png"
            alt="Flying image"
            className="cs-flying_img cs-posiiton2 cs-to_up"
          />
          <div className="cs-height_35 cs-height_lg_35" />
          <div
            className="container wow fadeInDown "
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase">
              <div className="cs-section_subtitle cs-primary_font cs-medium cs-accent_color">
                Our Awards Categories
              </div>
              <h2 className="cs-section_title cs-extra_bold">
                Awards Categories{" "}
              </h2>
            </div>
            <div className="cs-height_70 cs-height_lg_50" />
          </div>
          <div
            className="container wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <AwardsTabs />
          </div>
          <div className="cs-height_135 cs-height_lg_80" />
        </div> */}

        <div
          className="cs-accent_4_bg cs-flying_img_wrap cs-style6 cs-parallax "
          style={{ overflow: "hidden", display: "none" }}
        >
          <img
            src="../assets/img/event-conference/flying-img3.png"
            alt="Flying image"
            className="cs-flying_img cs-posiiton1 cs-to_up"
          />
          {/* <img
            src="../assets/img/event-conference/flying-img4.png"
            alt="Flying image"
            className="cs-flying_img cs-posiiton2 cs-to_up"
          /> */}
          <div className="cs-height_35 cs-height_lg_35" /> *
          <div
            className="cs-bg cs-gradient_overlay_90"
            data-src="../assets/img/event-conference/sponsor_bg.jpg"
            bis_skin_checked={1}
            style={{
              backgroundImage:
                'url("../assets/img/event-conference/sponsor_bg.jpg")',
            }}
          >
            {/* <div
              className="cs-height_135 cs-height_lg_75"
              bis_skin_checked={1}
            /> */}
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
              bis_skin_checked={1}
            >
              <div
                className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase"
                bis_skin_checked={1}
              >
                <div
                  className="cs-section_subtitle cs-primary_font cs-medium cs-white_80"
                  bis_skin_checked={1}
                >
                  Valuable sponsors
                </div>
                <h2 className="cs-section_title cs-extra_bold cs-white">
                  Our Sponsors
                </h2>
              </div>
              <div
                className="cs-height_70 cs-height_lg_50"
                bis_skin_checked={1}
              />
            </div>
            <div
              className="container wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}
              bis_skin_checked={1}
            >
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-4 col-sm-6" bis_skin_checked={1}>
                  <div
                    className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-transition_3"
                    bis_skin_checked={1}
                  >
                    <NavLink to="/">
                      {" "}
                      <img
                        src="../assets/img/sponsor-logo/calyx.png"
                        alt="Sponsor"
                      />
                    </NavLink>
                  </div>
                  <div
                    className="cs-height_50 cs-height_lg_30"
                    bis_skin_checked={1}
                  />
                </div>
                <div className="col-lg-4 col-sm-6" bis_skin_checked={1}>
                  <div
                    className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-transition_3"
                    bis_skin_checked={1}
                  >
                    <NavLink to="/vyne-gold-sponsor">
                      <img
                        src="../assets/img/sponsor-logo/Vyne.png"
                        alt="Sponsor"
                      />
                    </NavLink>
                  </div>
                  <div
                    className="cs-height_50 cs-height_lg_30"
                    bis_skin_checked={1}
                  />
                </div>
                {/* <div className="col-lg-4 col-sm-6" bis_skin_checked={1}>
                  <div
                    className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-transition_3"
                    bis_skin_checked={1}
                  >
                    <NavLink to="/">
                      {" "}
                      <img
                        src="../assets/img/sponsor-logo/Vyne-C.png"
                        alt="Sponsor"
                      />
                    </NavLink>
                  </div>
                  <div
                    className="cs-height_50 cs-height_lg_30"
                    bis_skin_checked={1}
                  />
                </div> */}
              </div>
              <div className="row" bis_skin_checked={1}>
                <div className="col-lg-3 col-sm-6" bis_skin_checked={1}>
                  <div
                    className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-accent_bg_2 cs-accent_bg_hover cs-transition_3"
                    bis_skin_checked={1}
                  >
                    <NavLink to="/">
                      {" "}
                      <img
                        src="../assets/img/sponsor-logo/GBG.png"
                        alt="Sponsor"
                      />
                    </NavLink>
                  </div>
                  <div
                    className="cs-height_50 cs-height_lg_30"
                    bis_skin_checked={1}
                  />
                </div>
                <div className="col-lg-3 col-sm-6" bis_skin_checked={1}>
                  <div
                    className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-accent_bg_2 cs-accent_bg_hover cs-transition_3"
                    bis_skin_checked={1}
                  >
                    <NavLink to="/volume-payments-sponsor">
                      <img
                        src="../assets/img/sponsor-logo/Volume.png"
                        alt="Sponsor"
                      />
                    </NavLink>
                  </div>
                  <div
                    className="cs-height_50 cs-height_lg_30"
                    bis_skin_checked={1}
                  />
                </div>
                <div className="col-lg-3 col-sm-6" bis_skin_checked={1}>
                  <div
                    className="cs-logo_carousel cs-style3 cs-sponsor-logo cs-center cs-transition_3"
                    bis_skin_checked={1}
                  >
                    <NavLink to="/travel-cashier-silver-sponsor">
                      <img
                        src="../assets/img/sponsor-logo/travel-cashier.png"
                        alt="Sponsor"
                      />
                    </NavLink>
                  </div>
                  <div
                    className="cs-height_50 cs-height_lg_30"
                    bis_skin_checked={1}
                  />
                </div>
                <div className="col-lg-3 col-sm-6" bis_skin_checked={1}>
                  <div
                    className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-transition_3"
                    bis_skin_checked={1}
                  >
                    <NavLink to="/mtbs-silver-sponsor">
                      <img
                        src="../assets/img/sponsor-logo/mtbs.png"
                        alt="Sponsor"
                      />
                    </NavLink>
                  </div>
                  <div
                    className="cs-height_50 cs-height_lg_30"
                    bis_skin_checked={1}
                  />
                </div>
              </div>
              <div className="text-center display-sm-flex" bis_skin_checked={1}>
                <NavLink
                  to="/our-sponsors"
                  className="cs-btn cs-style1  cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hover"
                  style={{ background: "#012169" }}
                  bis_skin_checked={1}
                >
                  View More Sponsors
                </NavLink>
                <NavLink
                  to="/sponsors"
                  className="cs-btn cs-style1 ms-4  margin-left-sm cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hover"
                  style={{ background: "#012169" }}
                  bis_skin_checked={1}
                >
                  Become a sponsor
                </NavLink>
              </div>
            </div>
            <div
              className="cs-height_140 cs-height_lg_80"
              bis_skin_checked={1}
            />
          </div>
          {/* <div className="cs-height_135 cs-height_lg_80" /> */}
        </div>

        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Get Supprt Section ++++++++++++++++++++++++++++++++++++++++ */}
        <div className="cs-height_100 cs-height_lg_50" bis_skin_checked={1} />
        <div className="cs-accent_color_2_bg cs-parallax" bis_skin_checked={1}>
          <div
            className="cs-bg_parallax"
            bis_skin_checked={1}
            style={{
              backgroundImage:
                'url("../assets/img/event-conference/counter_bg2.png")',
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <div
              className="cs-height_90 cs-height_lg_90"
              bis_skin_checked={1}
            />
            <div className="container" bis_skin_checked={1}>
              <div
                className="cs-cta cs-style3 text-center wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                bis_skin_checked={1}
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.2s",
                  animationName: "fadeIn",
                }}
              >
                <h2 className="cs-cta_title cs-bold cs-white">Get Support</h2>
                <div
                  className="cs-cta_subtitle cs-white_80"
                  bis_skin_checked={1}
                >
                  <p>
                    {" "}
                    At the Brit Fintech Awards, we are dedicated to ensuring a
                    smooth and enjoyable experience for all our participants,
                    sponsors, and attendees. <br /> If you have any questions,
                    need assistance, or require further information, our team is
                    here to help!
                  </p>
                  <p>
                    Whether you need support with nominations, event details, or
                    any other inquiries, please don't hesitate to reach out.{" "}
                    <br /> Our dedicated team is available to provide prompt and
                    comprehensive assistance.
                  </p>
                </div>
                <div className="d-flex justify-content-center p-2">
                  {/* <h3 class="text-white mt-3  p-1 celebration-text-banner text-center" style={{maxWidth: '500px', borderRadius: '3px'}}> See Your Name in the Spotlight</h3> */}
                </div>
                <div
                  className="cs-height_15 cs-height_lg_15"
                  bis_skin_checked={1}
                />
                <div className="cs-cta_btns cs-center" bis_skin_checked={1}>
                  <a
                    href="tel:442038283277"
                    className="cs-btn cs-style4 cs-white_pg cs-primary_color cs-primary_color_hover get-support-button"
                  >
                    <div className="cs-btn_icon" bis_skin_checked={1}>
                      <i
                        className="fas fa-phone-alt"
                        style={{ fontSize: "25px" }}
                      />
                    </div>
                    <div className="cs-btn_right" bis_skin_checked={1}>
                      <div className="cs-btn_subtext" bis_skin_checked={1}>
                        Call Us at
                      </div>
                      <div
                        className="cs-btn_text fw-bolder font-small"
                        bis_skin_checked={1}
                      >
                        +44 20 3828 3277
                      </div>
                    </div>
                  </a>
                  <a
                    href="mailto:kudos@britfintechawards.com"
                    className="cs-btn cs-style4 cs-white_pg cs-primary_color cs-primary_color_hover get-support-button"
                  >
                    <div className="cs-btn_icon" bis_skin_checked={1}>
                      <i
                        className="fas fa-envelope"
                        style={{ fontSize: "25px" }}
                      />
                    </div>
                    <div className="cs-btn_right" bis_skin_checked={1}>
                      <div className="cs-btn_subtext" bis_skin_checked={1}>
                        Email Us
                      </div>
                      <div
                        className="cs-btn_text fw-bolder font-small"
                        style={{ textTransform: "lowercase" }}
                        bis_skin_checked={1}
                      >
                        kudos@britfintechawards.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cs-height_90 cs-height_lg_90"
              bis_skin_checked={1}
            />
          </div>
        </div>
        {/* End Schedule Section */}
        {/* Start Team Seation */}
        {/* <div className="cs-flying_img_wrap cs-style7 cs-parallax">
<img src="../assets/img/event-conference/flying-img5.png" alt="Flying image" className="cs-flying_img cs-posiiton1 cs-to_up" />
<img src="../assets/img/event-conference/flying-img6.png" alt="Flying image" className="cs-flying_img cs-posiiton2 cs-to_up" />
<div className="cs-height_130 cs-height_lg_70" />
<div className="container wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">
  <div className="cs-section_heading cs-style2 text-center cs-size2 text-uppercase">
    <h2 className="cs-section_title cs-extra_bold">Who’s Speaking</h2>
    <div className="cs-height_5 cs-height_lg_5" />
    <a href="#" className="cs-btn cs-style3 cs-primary_font cs-accent_color cs-accent_color_2_hover cs-medium cs-medium">
      <span className="cs-btn_text">View All Speakers</span>
      <span className="cs-btn_icon cs-center"><i className="fas fa-angle-right" /></span>
    </a>
  </div>
  <div className="cs-height_75 cs-height_lg_55" />
</div>
<div className="container wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
  <div className="row">
    <div className="col-lg-4">
      <div className="cs-team_member cs-style8 text-center cs-white_bg">
        <div className="cs-team_member_in cs-accent_5_bg cs-accent_5_bg_2_hover cs-transition_3 cs-accent_border cs-accent_border_2_hover">
          <div className="cs-member_image position-relative">
            <img src="../assets/img/event-conference/team1.jpg" alt="Member" className="cs-accent_border cs-transition_3" />
            <a href="#" className="cs-member_btn cs-center cs-accent_bg_2 cs-white cs-white_hover cs-accent_bg_hover">+</a>
          </div>
          <div className="cs-member_info">
            <h2 className="cs-member_name cs-semi_bold text-uppercase">
              Gregory Lett
            </h2>
            <div className="cs-member_designation cs-primary_color">
              Founder, Laralink
            </div>
          </div>
        </div>
      </div>
      <div className="cs-height_30 cs-height_lg_30" />
    </div>
    <div className="col-lg-4">
      <div className="cs-team_member cs-style8 text-center cs-white_bg">
        <div className="cs-team_member_in cs-accent_5_bg cs-accent_5_bg_2_hover cs-transition_3 cs-accent_border cs-accent_border_2_hover">
          <div className="cs-member_image position-relative">
            <img src="../assets/img/event-conference/team2.jpg" alt="Member" className="cs-accent_border cs-transition_3" />
            <a href="#" className="cs-member_btn cs-center cs-accent_bg_2 cs-white cs-white_hover cs-accent_bg_hover">+</a>
          </div>
          <div className="cs-member_info">
            <h2 className="cs-member_name cs-semi_bold text-uppercase">
              Opal Boren
            </h2>
            <div className="cs-member_designation cs-primary_color">
              Manager, Laralink
            </div>
          </div>
        </div>
      </div>
      <div className="cs-height_30 cs-height_lg_30" />
    </div>
    <div className="col-lg-4">
      <div className="cs-team_member cs-style8 text-center cs-white_bg">
        <div className="cs-team_member_in cs-accent_5_bg cs-accent_5_bg_2_hover cs-transition_3 cs-accent_border cs-accent_border_2_hover">
          <div className="cs-member_image position-relative">
            <img src="../assets/img/event-conference/team3.jpg" alt="Member" className="cs-accent_border cs-transition_3" />
            <a href="#" className="cs-member_btn cs-center cs-accent_bg_2 cs-white cs-white_hover cs-accent_bg_hover">+</a>
          </div>
          <div className="cs-member_info">
            <h2 className="cs-member_name cs-semi_bold text-uppercase">
              KEVIN MARTIN
            </h2>
            <div className="cs-member_designation cs-primary_color">
              Co-founder, Laralink
            </div>
          </div>
        </div>
      </div>
      <div className="cs-height_30 cs-height_lg_30" />
    </div>
  </div>
</div>
<div className="cs-height_110 cs-height_lg_50" />
</div> */}
        {/* End Team Seation */}
        {/* Start Newsletter Section */}

        {/* End Newsletter Section */}

        {/* Start Gallery Section */}

        {/* Start Team Seation */}
        <div
          className="cs-flying_img_wrap cs-style7 cs-parallax"
          style={{ display: "none" }}
        >
          <div className="cs-height_50 cs-height_lg_50" />
          <img
            src="../assets/img/event-conference/flying-img5.png"
            alt="Flying image"
            className="cs-flying_img cs-posiiton1 cs-to_up"
          />
          <img
            src="../assets/img/event-conference/flying-img6.png"
            alt="Flying image"
            className="cs-flying_img cs-posiiton2 cs-to_up"
          />

          <div
            className="container wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="cs-section_heading cs-style2 text-center cs-size2 text-uppercase">
              <h2 className="cs-section_title cs-extra_bold">Who’s Speaking</h2>
              <div className="cs-height_5 cs-height_lg_5" />
            </div>
            <div className="cs-height_75 cs-height_lg_55" />
          </div>
          <div
            className="container wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="cs-team_member cs-style8 text-center cs-white_bg">
                  <div className="cs-team_member_in cs-accent_5_bg cs-accent_5_bg_2_hover cs-transition_3 cs-accent_border cs-accent_border_2_hover">
                    <div className="cs-member_image position-relative">
                      <img
                        src="../assets/img/event-conference/team1.jpg"
                        alt="Member"
                        className="cs-accent_border cs-transition_3"
                      />
                    </div>
                    <div className="cs-member_info">
                      <h2 className="cs-member_name cs-semi_bold text-uppercase">
                        FCA SPEAKERS
                      </h2>
                      <p className="mb-0 pb-0">( Awaiting Confirmation )</p>
                      <div className="cs-member_designation cs-primary_color"></div>
                    </div>
                  </div>
                </div>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>
              <div className="col-lg-4">
                <div className="cs-team_member cs-style8 text-center cs-white_bg">
                  <div className="cs-team_member_in cs-accent_5_bg cs-accent_5_bg_2_hover cs-transition_3 cs-accent_border cs-accent_border_2_hover">
                    <div className="cs-member_image position-relative">
                      <img
                        src="../assets/img/event-conference/team2.jpg"
                        alt="Member"
                        className="cs-accent_border cs-transition_3"
                      />
                    </div>
                    <div className="cs-member_info">
                      <h2 className="cs-member_name cs-semi_bold text-uppercase">
                        HMRC SPEAKERS
                      </h2>
                      <p></p>
                      <div className="cs-member_designation cs-primary_color"></div>
                    </div>
                  </div>
                </div>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>
              <div className="col-lg-4">
                <div className="cs-team_member cs-style8 text-center cs-white_bg">
                  <div className="cs-team_member_in cs-accent_5_bg cs-accent_5_bg_2_hover cs-transition_3 cs-accent_border cs-accent_border_2_hover">
                    <div className="cs-member_image position-relative">
                      <img
                        src="../assets/img/event-conference/team3.jpg"
                        alt="Member"
                        className="cs-accent_border cs-transition_3"
                      />
                      {/* <a
                        href="#"
                        className="cs-member_btn cs-center cs-accent_bg_2 cs-white cs-white_hover cs-accent_bg_hover"
                      >
                        +
                      </a> */}
                    </div>
                    <div className="cs-member_info">
                      <h2 className="cs-member_name cs-semi_bold text-uppercase">
                        DISCUSSION PANEL
                      </h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-height_50 cs-height_lg_50" />
          </div>
        </div>

        {/* End Team Seation */}
        {/* SPONSOR PAST HERE  */}

        {/* End Gallery Section 
        {/* Start Blog Seciton */}
        {/* <div className="cs-gradient_bg_2">
      <div className="cs-height_35 cs-height_lg_35" />
      <div
        className="container wow fadeInDown"
        data-wow-duration="1s"
        data-wow-delay="0.2s"
      >
        <div className="cs-section_heading cs-style4 cs-size4 text-uppercase">
          <div className="cs-section_heading_left">
            <div className="cs-section_subtitle cs-primary_font cs-medium cs-accent_color">
              Our Blogs
            </div>
            <h2 className="cs-section_title cs-extra_bold">
              Blogs
            </h2>
          </div>
          <div className="cs-section_heading_right">
            <NavLink
              to="blogs"
              className="cs-btn cs-style3 cs-primary_font cs-accent_color_2 cs-medium"
            >
              <span className="cs-btn_text">View more Blogs</span>
              <span className="cs-btn_icon cs-center">
                <i className="fas fa-angle-right" />
              </span>
            </NavLink>
          </div>
        </div>
        <div className="cs-height_75 cs-height_lg_55" />
      </div>
      <div
        className="container wow fadeIn"
        data-wow-duration="1s"
        data-wow-delay="0.3s"
      >
        <div className="row">
          <div className="col-lg-4">
            <div className="cs-post cs-style10 position-relative">
            <NavLink
              to="blogs-details"
                className="cs-post_thumb cs-bg"
                data-src="../assets/img/event-conference/post1.jpg"
                style={{backgroundImage: 'url(../assets/img/event-conference/post1.jpg)'}}
              />
              <div className="cs-post_info">
                <span className="cs-posted_by cs-white cs-accent_60_bg_2 cs-rounded">
                  10 Jan 2023
                </span>
                <h2 className="cs-post_title cs-white cs-white_hover">
                <NavLink
              to="blogs-details">
                    Easy way to design attractive landing pages
                  </NavLink>
                </h2>
              </div>
            </div>
            <div className="cs-height_30 cs-height_lg_30" />
          </div>
          <div className="col-lg-4">
            <div className="cs-post cs-style10 position-relative">
            <NavLink
              to="blogs-details"
                className="cs-post_thumb cs-bg"
                data-src="../assets/img/event-conference/post2.jpg"
                style={{backgroundImage: 'url(../assets/img/event-conference/post2.jpg)'}}
              />
              <div className="cs-post_info">
                <span className="cs-posted_by cs-white cs-accent_60_bg_2 cs-rounded">
                  12 Jan 2023
                </span>
                <h2 className="cs-post_title cs-white cs-white_hover">
                  <NavLink
              to="blogs-details">UI/UX guide gor beginner</NavLink>
                </h2>
              </div>
            </div>
            <div className="cs-height_30 cs-height_lg_30" />
          </div>
          <div className="col-lg-4">
            <div className="cs-post cs-style10 position-relative">
             <NavLink
              to="blogs-details"
                className="cs-post_thumb cs-bg"
                data-src="../assets/img/event-conference/post3.jpg"
                style={{backgroundImage: 'url(../assets/img/event-conference/post3.jpg)'}}
              />
              <div className="cs-post_info">
                <span className="cs-posted_by cs-white cs-accent_60_bg_2 cs-rounded">
                  13 Jan 2023
                </span>
                <h2 className="cs-post_title cs-white cs-white_hover">
                  <NavLink
              to="blogs-details">
                    Easy way to design attractive landing pages
                  </NavLink>
                </h2>
              </div>
            </div>
            <div className="cs-height_30 cs-height_lg_30" />
          </div>
        </div>
      </div>
      <div className="cs-height_110 cs-height_lg_50" />
    </div> */}
        {/* End Blog Seciton */}
        {/* Start Sponsors Section */}

        {/* End Sponsors Section */}
        {/* Start Footer Section */}

        {/* End Footer Section */}
        {/* Start Video Popup */}

        <div className="cs-video_popup">
          <div className="cs-video_popup_overlay" />
          <div className="cs-video_popup_content">
            <div className="cs-video_popup_layer" />
            <div className="cs-video_popup_container">
              <div className="cs-video_popup_align">
                <div className="embed-responsive embed-responsive-16by9">
                  {/* <iframe className="embed-responsive-item" src="about:blank" /> */}
                </div>
              </div>
              <div className="cs-video_popup_close" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
