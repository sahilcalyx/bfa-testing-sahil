import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const SumsubWinnerDetails = () => {
    const slides = [
        {
            image: "../assets/img/banner-slider/Sumsub.webp",
            title: <>Anti-Fraud <br /> Innovator 2024</>,
            subtitle: "Sumsub",
          },

        // Add more slides as needed
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Automatically switch slides every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [slides.length]);
    return (
        <div>
            <div className="cs-height_90 cs-height_lg_80" />
            <div className="cs-flying_img_wrap cs-style5 cs-parallax">
                {/* <img
                    src="../assets/img/event-conference/flying-img1.png"
                    alt="Flying image"
                    className="cs-flying_img cs-posiiton1 cs-to_up"
                />
                <img
                    src="../assets/img/event-conference/flying-img2.png"
                    alt="Flying image"
                    className="cs-flying_img cs-posiiton2 cs-to_up"
                /> */}

                <div
                    className="cs-hero cs-style12 awards-banner-img-2025 cs-center text-center cs-gradient_overlay_35 cs-parallax cs-hobble"
                    style={{
                        backgroundImage: `url(${slides[currentSlide].image})`, // Dynamic background image
                      
                    }}
                >
                    <div className="cs-hero_pattern cs-hover_layer3">
                        <div
                            className="cs-hero_pattern_in cs-bg_parallax"
                            style={{
                                backgroundImage:
                                    "url(../assets/img/event-conference/hero-pattern.png)",
                            }}
                        />
                    </div>
                    <div
                        className="container wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0.2s"
                    >
                        <div className="cs-hero_text text-left bfa-25-winnner-banner-text">
                            <h1 className="cs-hero_title2 cs-extra_bold cs-white text-uppercase">
                                {slides[currentSlide].title} {/* Dynamic title */}
                                <div className="mt-0"></div>
                            </h1>
                            <h3
                                className="text-white mt-3 p-1 celebration-text-banner text-center"
                                style={{ maxWidth: "350px" }}
                            >
                                {slides[currentSlide].subtitle} {/* Dynamic subtitle */}
                            </h3>
                        </div>
                    </div>
                    <div className="cs-hero_img cs-bg">
                        <div className="cs-hero_img_circle" />



                    </div>
                </div>
            </div>
            <div className="cs-height_90 cs-height_lg_80" />
            <div className="container">
            <div className="p-3 mb-4 ">
          <div bis_skin_checked={1}>
            <NavLink
              to="/award-winners-2024"
              className="cs-previous d-flex gap-2 align-items-center cs-accent_color_2_hover wow fadeIn"
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
              <i className="fas fa-chevron-circle-left fs-4" /> Back to winners list 2024
            </NavLink>
          </div>
        </div>
                <h3>Sumsub : Anti-Fraud Innovator of the Year 2024 </h3>
                <h5>Overview</h5>
                <p>Sumsub is a leading contender for Anti-Fraud Innovator of the Year 2024,
recognised for its comprehensive, AI-powered verification platform that empowers businesses to
combat fraud at every stage of the customer journey.
                </p>
                <h5>Key Points: 

                </h5>
                <ul>
                    <li><b>Full-Cycle Verification Platform:</b>   Sumsub provides an all-in-one solution that enables
                    businesses to verify users, businesses, and transactions seamlessly, while managing cases
                    and customising verification flows.</li>
                    <li><b>Global Fraud Monitoring:</b>  The platform assists clients in monitoring fraud worldwide,
ensuring a secure and accessible digital experience for users, regardless of their location
or technical skills.</li>
                   
                   

                </ul>
               
                <h5>Why Sumsub Deserves Recognition:
                </h5>
                <p> Sumsub's commitment to creating a safe and inclusive
                digital environment, combined with its innovative fraud prevention capabilities, positions it as a
                leader in the fintech space. Its ability to adapt and evolve in response to the ever-changing fraud
                landscape makes it a deserving nominee for Anti-Fraud Innovator of the Year 2024. </p>

                                <h5>Conclusion
                                </h5>
                                <p>By revolutionising the way businesses verify identities and transactions, Sumsub
                sets a new standard in fraud prevention, empowering organisations to thrive in the digital finance
                era while ensuring user trust and security.</p>
            </div>
            <div className="cs-height_90 cs-height_lg_80" />
        </div>
    )
}

export default SumsubWinnerDetails
