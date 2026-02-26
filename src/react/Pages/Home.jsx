import React, { useEffect, useRef, useState } from "react";
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
import FlipBanner from "../Components/FlipBanner";
import SponsorsSlider2025 from "../Components/SliderBigBan/SponsorsSlider2025";
import DynamicSliderVideo from "../Components/SliderBigBan/DynamicSlider-1";
import KeynoteSpeakersSection from "./2025/Keynotes/KeynoteSpeakersSection";
import DiscussionPannelSection from "./2025/DiscussionPannel/DiscussionPannelSection";
import JudgesSection2025 from "./2025/JudgesSection/JudgeSection2025";
import HeroImageSlider2025 from "../Components/SliderBigBan/HeroImageSlider2025";
import CountdownSlider2025 from "../Components/SliderBigBan/SliderMiniComponents/CountdownSlider2025";
import GallarySection2025 from "./2025/GallarySection25/GallarySection2025";
import TestimonialSlider2025 from "../Components/Testmonials/TestimonialSlider2025";
import WinnerBanner from "../Components/SliderBigBan/WinnerBanner";
import TestimonialCommon from "../Components/Testmonials/TestimonialCommon";
import BFA26Section from "../Components/BFA26Section";
import { color } from "framer-motion";

const Home = () => {
  const deadline = new Date("2025-08-31"); // change date here

  const [daysLeft, setDaysLeft] = useState(null);

  useEffect(() => {
    const updateCountdown = () => {
      const today = new Date();
      const diffTime = deadline.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays > 1) {
        setDaysLeft(`${diffDays} DAYS LEFT TO NOMINATE`);
      } else if (diffDays === 1) {
        setDaysLeft("1 DAY LEFT TO NOMINATE");
      } else if (diffDays === 0) {
        setDaysLeft("LAST DAY TO NOMINATE");
      } else {
        setDaysLeft("AWARDS NOMINATION CLOSED");
      }
    };

    updateCountdown(); // run immediately
    const interval = setInterval(updateCountdown, 1000 * 60 * 60); // check every hour

    return () => clearInterval(interval);
  }, [deadline]);

  const [showOverlay, setShowOverlay] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight + 50) {
        setShowOverlay(true);
      } else {
        setShowOverlay(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const keynoteData = [
    {
      id: "/keynote-speaker-2025/ochebhoya-ekpete-leatherback",
      name: "Ochebhoya Ekpete",
      desig: "CEO, Leatherback UK",
      img: "../assets/img/keynotes/Ochebhoya_Ekpete Sixe_logo.png",
      keywords:
        "Simone Martinelli, Volume CEO, Brit FinTech Awards 2025, keynote speaker, fintech leader, remittance innovation, cross-border payments, MSB solutions, Mastercard, WorldRemit, payment scalability, fintech keynote speaker",
      imgDet: "../assets/img/keynotes/Ochebhoya Ekpete.png",
      desc: "Ochebhoya Ekpete is the CEO of Leatherback, UK, with over 15 years of experience in financial leadership...",
      fullDesc: `A visionary leader in the world of fintech, Simone Martinelli brings a wealth of expertise
and a passion for transforming global remittances. With an impressive career spanning
leadership roles at Mastercard and WorldRemit, Simone is a true remittance insider who
understands the complexities and opportunities of cross-border payments.
As the Founder and CEO of Volume, Simone is on a mission to redefine how money moves
worldwide — making cross-border transfers instant, effortless, and cost-efficient. His all-in-
one platform empowers remittance businesses with the speed, compliance, and scalability
they need to thrive in today’s competitive landscape.
Guided by his vision, Volume has become more than just a technology provider — it’s a
partner in growth, helping MSBs and payment companies break boundaries and deliver
exceptional value to customers.
Volume – Everything Remittance Needs, in One Platform`,
      points: [
        "Visionary leader in fintech and remittances",
        "Leadership experience at Mastercard and WorldRemit",
        "Founder & CEO of Volume, redefining cross-border payments",
        "Empowers MSBs and payment companies with speed and compliance",
      ],
      link: "/keynote-speaker-2025/simone-martinelli",
      actions: [
        {
          label: "LinkedIn Profile",
          link: "https://www.linkedin.com/in/simonem88/",
          color: "#0A66C2",
        },
      ],
    },
    {
      id: "/keynote-speaker-2025/simone-martinelli-volume",
      name: "Simone Martinelli",
      desig: "Founder & CEO, Volume",
      img: "../assets/img/keynotes/Simone-logo.png",
      keywords:
        "Simone Martinelli, Volume CEO, Brit FinTech Awards 2025, keynote speaker, fintech leader, remittance innovation, cross-border payments, MSB solutions, Mastercard, WorldRemit, payment scalability, fintech keynote speaker",
      imgDet: "../assets/img/keynote-details.png",
      desc: "A visionary leader in the world of fintech, Simone Martinelli brings a wealth of expertise and a passion for...",
      fullDesc: `A visionary leader in the world of fintech, Simone Martinelli brings a wealth of expertise
and a passion for transforming global remittances. With an impressive career spanning
leadership roles at Mastercard and WorldRemit, Simone is a true remittance insider who
understands the complexities and opportunities of cross-border payments.
As the Founder and CEO of Volume, Simone is on a mission to redefine how money moves
worldwide — making cross-border transfers instant, effortless, and cost-efficient. His all-in-
one platform empowers remittance businesses with the speed, compliance, and scalability
they need to thrive in today’s competitive landscape.
Guided by his vision, Volume has become more than just a technology provider — it’s a
partner in growth, helping MSBs and payment companies break boundaries and deliver
exceptional value to customers.
Volume – Everything Remittance Needs, in One Platform`,
      points: [
        "Visionary leader in fintech and remittances",
        "Leadership experience at Mastercard and WorldRemit",
        "Founder & CEO of Volume, redefining cross-border payments",
        "Empowers MSBs and payment companies with speed and compliance",
      ],
      link: "/keynote-speaker-2025/simone-martinelli",
      actions: [
        {
          label: "LinkedIn Profile",
          link: "https://www.linkedin.com/in/simonem88/",
          color: "#0A66C2",
        },
      ],
    },
  ];
  const navigate = useNavigate();
  const statsData = [
    {
      endValue: 120,
      duration: 2,
      title: "Businesses ",
      plus: "+",
      className: "before",
    },
    {
      endValue: 150,
      duration: 2,
      title: "Attendees",
      plus: "+",
      className: "before",
    },
    { endValue: 20, duration: 2, title: "Awards", plus: "" }, // Add 'plus' here
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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(heroRef.current); // trigger only once
        }
      },
      { threshold: 0.2 } // 20% visible
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);
  return (
    <div>
      <Helmet>
        <title>Brit Fintech Awards UK 2026</title>
        <meta
          name="description"
          content="Discover the UK’s most prestigious fintech
awards. Nominate, sponsor, or attend the
Brit Fintech Awards 2026."
        />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://britfintechawards.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Brit Fintech
Awards UK
2026"
        />
        <meta
          property="og:description"
          content="Discover the UK’s most prestigious fintech
awards. Nominate, sponsor, or attend the
Brit Fintech Awards 2026."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/event-conference/about.png"
        />

        <meta
          name="twitter:image"
          content="https://britfintechawards.com/assets/img/event-conference/about.png"
        />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="britfintechawards.com" />
        <meta property="twitter:url" content="https://britfintechawards.com/" />
        <meta
          name="twitter:title"
          content="Brit Fintech
Awards UK
2026"
        />
        <meta
          name="twitter:description"
          content="Discover the UK’s most prestigious fintech
awards. Nominate, sponsor, or attend the
Brit Fintech Awards 2026."
        />
      </Helmet>

      <>
        {/* <div className="cs-height_75 cs-height_lg_75" /> */}
        {/* Start Hero Seciton */}

        <DynamicSliderVideo />
        {/* <DynamicSlider/> */}
        {/* <WinnerBanner /> */}
        {/* <HeroImageSlider2025/> */}
        {/* <CountdownSlider2025/> */}

        <div className="cs-height_0 cs-height_lg_0" />
        {/* <SponsorsSlider2025 /> */}

        {/* <div className="cs-height_20 cs-height_lg_20" /> */}
        <AnimatedStats stats={statsData} />
        <BFA26Section />




        {/* <div className="container">
          <SponsorsSlider />
        </div> */}
        {/* 
 <section
      style={{
        width: "100%",
        padding: "20px 20px",
        backgroundColor: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "700",
          marginBottom: "40px",
          color: "#222",
        }}
      >
        Key Notes
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {keynoteData.map((speaker) => (
          <div
            key={speaker.id}
            style={{
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img
              src={speaker.img}
              alt={speaker.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "20px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  color: "#ff2e63",
                }}
              >
                {speaker.name}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "#555",
                }}
              >
                {speaker.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section> */}
        <ErrorBoundary>
          {/* <GallerySection /> */}
          <GallarySection2025 />
        </ErrorBoundary>
        {/* Keynote Speakers Section  */}
        {/* <KeynoteSpeakersSection /> */}

        {/* Discussion Pannel Section  */}

        <section
          id="judges-section"
          className="d-none"
          style={{
            width: "100%",
            // background: "linear-gradient(180deg, #fdfdfd, #f7f7f7)",
            backgroundImage:
              'url("../assets/img/event-conference/counter_bg3.webp")',
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <h2
            className="mb-5"
            style={{
              textAlign: "center",
              fontSize: "36px",
              fontWeight: "800",
              color: "#fff",
              paddingTop: "50px",
            }}
          >
            Meet Our Judges
            <span
              style={{
                display: "block",
                width: "90px",
                height: "4px",
                margin: "15px auto 0",
                borderRadius: "3px",
                background: "linear-gradient( #ff2e63)",
              }}
            ></span>
          </h2>
          {/* <JudgesSection2025 /> */}
        </section>

        {/* <DiscussionPannelSection /> */}

        <div
          className="cs-gradient_bg_2 "
          style={{
            backgroundImage:
              'url("../assets/img/event-conference/counter_bg2.png")',
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
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
                  <span style={{ color: "#c8102e" }}> <strong>VIDEO GALLERY 2025</strong></span>
                </div>
                <h2
                  className="cs-section_title cs-extra_bold "
                  style={{ color: "#ffffffff" }}
                >
                  Highlights That Define Fintech Excellence
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
            <div className="row justify-content-center">
              {/* <div className="col-lg-6">
                <a
                  href="https://youtu.be/efNlqln3hH8?si=9Ryc2Apn59-vtHxk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="cs-post cs-style10 position-relative"
                    style={{ height: "400px" }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/efNlqln3hH8?autoplay=1&mute=1&loop=1&playlist=efNlqln3hH8&controls=0&modestbranding=1&rel=0"
                      loading="lazy"
                      title="Brit FinTech Awards 2025 - Behind the Scenes"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="cs-post_thumb cs-bg"
                    />
                    <div className="cs-post_info">
                      <h2 className="cs-post_title cs-white cs-white_hover">
                        The Visionary Behind the Brit Fintech Awards - Mr.
                        Vishal Patil
                      </h2>
                    </div>
                  </div>
                </a>
                <div className="cs-height_30 cs-height_lg_30" />
              </div> */}
              <div className="col-lg-8">
                <a
                  href="https://youtu.be/x4S3vtaIR-0?si=QEHXLrHd1hC0Fryp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="cs-post cs-style10 position-relative"
                    style={{ height: "400px" }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/x4S3vtaIR-0?autoplay=1&mute=1&loop=1&playlist=x4S3vtaIR-0&controls=0&modestbranding=1&rel=0"
                      loading="lazy"
                      title="2 Minutes. 20 Winners. One Wave of Innovation."
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="cs-post_thumb cs-bg"
                    />
                    <div className="cs-post_info">
                      <h2 className="cs-post_title cs-white cs-white_hover">
                        2 Minutes. 20 Winners. One Wave of Innovation
                      </h2>
                    </div>
                  </div>
                </a>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>

              {/* <div className="col-lg-4">
                <a
                  href="https://youtu.be/U3hWVuR_r_I?si=d2XxZMjJIKM0xh5h"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="cs-post cs-style10 position-relative"
                    style={{ height: "400px" }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/U3hWVuR_r_I?autoplay=1&mute=1&loop=1&playlist=U3hWVuR_r_I&start=15&controls=0&modestbranding=1&rel=0"
                      loading="lazy"
                      title="Top FinTechs in the UK comes together - Brit FinTech Awards 2025"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="cs-post_thumb cs-bg"
                    />
                    <div className="cs-post_info">
                      <h2 className="cs-post_title cs-white cs-white_hover">
                        Top FinTechs in the UK comes together - Brit FinTech
                        Awards 2025
                      </h2>
                    </div>
                  </div>
                </a>
                <div className="cs-height_30 cs-height_lg_30" />
              </div> */}
            </div>
            <div className="text-center" bis_skin_checked="1">
              <NavLink
                to="/video-gallery-2025"
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

        <div className="cs-height_60 cs-height_lg_45" />

        <div
          className="container wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase">
            {/* <TestimonialSlider /> */}
            {/* <TestimonialSlider2025/> */}
            <TestimonialCommon />
          </div>
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
                <div className="d-flex justify-content-center p-2"></div>
                <div
                  className="cs-height_15 cs-height_lg_15"
                  bis_skin_checked={1}
                />
                <div className="cs-cta_btns cs-center" bis_skin_checked={1}>
                  <a
                    href="tel:+442038283277"
                    className="cs-btn cs-style4 btn-pro-1"
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
                    className="cs-btn cs-style4 btn-pro-2"
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

        <div
          className="cs-flying_img_wrap cs-style7 cs-parallax"
          style={{ display: "none" }}
        >
          <div className="cs-height_50 cs-height_lg_50" />
          <img
            src="../assets/img/event-conference/flying-img5.png"
            alt="Flying image"
            className="cs-flying_img cs-posiiton1 cs-to_up"
            loading="lazy"
          />
          <img
            src="../assets/img/event-conference/flying-img6.png"
            alt="Flying image"
            className="cs-flying_img cs-posiiton2 cs-to_up"
            loading="lazy"
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
                        loading="lazy"
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
                        loading="lazy"
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
                        loading="lazy"
                      />
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
      </>
    </div>
  );
};

export default Home;
