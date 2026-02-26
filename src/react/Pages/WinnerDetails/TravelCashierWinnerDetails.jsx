import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const TravelCashierWinnerDetails = () => {
    const slides = [
        {
            image: "../assets/img/banner-slider/travel-cashier.webp",
            title: (
              <>
                Progressive Money <br />
                Exchanger MSB 2024
              </>
            ),
            subtitle: "Travel Cashier",
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
                    className="cs-hero cs-style12 cs-center text-center awards-banner-img-2025 cs-gradient_overlay_35 cs-parallax cs-hobble"
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
                <h3>Travel Cashier Ltd : Progressive Money Exchanger MSB of the year 2024  </h3>
                <h5>Overview</h5>
                <p>Travel Cashier Ltd has positioned itself as a forward-thinking and innovative player in the currency exchange industry. Known for embracing technological advancements and continuously improving its services, Travel Cashier Ltd has revolutionised the way currency exchange operates. Our commitment to transparency, customer satisfaction, and cutting-edge solutions makes us a strong contender for the Progressive Money Exchanger in FinTech category at the Brit FinTech Awards. 
                </p>
                <h5>Key Features: 

                </h5>
                <ul>
                    <li><b> Technological Innovation:</b> Travel Cashier Ltd integrates the latest FinTech solutions to offer fast, reliable, and secure currency exchange services. Our user-friendly digital platforms ensure customers have easy access to competitive exchange rates and seamless transactions.</li>
                    <li><b> Customer-Centric Approach:</b> We prioritise customer convenience, offering real-time exchange rates, fast transactions, and transparency in fees. </li>
                    <li><b>Enhanced Conversion:</b> Cardless payment experiences reduce friction for customers.</li>
                    <li><b>Secure and Compliant Transactions:</b> Travel Cashier Ltd adheres strictly to regulatory frameworks, implementing robust compliance measures, including anti-money laundering (AML) protocols and financial regulations. This ensures all transactions are secure, legal, and transparent.</li>
                   

                </ul>
               
                <h5>Why Travel Cashier Ltd Deserves Recognition:
                </h5>
                <p> Travel Cashier Ltd stands out as a progressive force in the FinTech and money exchange industries due to ability to innovate and adapt to the evolving financial landscape. By implementing cutting-edge technology, prioritising customer satisfaction, and maintaining stringent regulatory compliance, the company is redefining the standards for currency exchange services. Our commitment to offering transparent, efficient, and secure services aligns with the goals of the Progressive Money Exchanger category. </p>

                <h5>Conclusion
                </h5>
                <p> Travel Cashier Ltd exemplifies what it means to be a progressive money exchanger in the FinTech sector. With a forward-thinking approach to technology, compliance, and customer service, we are setting new benchmarks for the currency exchange industry. Their vision, commitment to excellence, and innovation make them an ideal candidate for the Progressive Money Exchanger award at the Brit FinTech Awards. </p>
            </div>
            <div className="cs-height_90 cs-height_lg_80" />
        </div>
    )
}

export default TravelCashierWinnerDetails
