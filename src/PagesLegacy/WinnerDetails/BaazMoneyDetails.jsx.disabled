import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const BaazMoneyDetails = () => {
    const slides = [
        {
            image: "../assets/img/banner-slider/Baaz.webp",
            title: <>MSB Store 2024</>,
            subtitle: "Baaz Money Exchange",
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
                /> */}
                {/* <img
                    src="../assets/img/event-conference/flying-img2.png"
                    alt="Flying image"
                    className="cs-flying_img cs-posiiton2 cs-to_up"
                /> */}

                <div
                    className="cs-hero cs-style12 cs-center text-center cs-gradient_overlay_35 cs-parallax cs-hobble"
                    style={{
                        backgroundImage: `url(${slides[currentSlide].image})`, // Dynamic background image
                        backgroundPosition: "100% center",
                        backgroundRepeat: "no-repeat",
                        maxHeight: "600px",
                        backgroundSize: "cover",
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
                        <div className="cs-hero_text text-left">
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
                <h3>Baaz Money Exchange Ltd : MSB Store of the year 2024  </h3>
                <h5>Overview</h5>
                <p>Baaz Money Exchange Ltd is a registered money remittance company with the Financial Conduct Authority (FCA) in the UK, operating from our store at Sky Shopping City, London. We are committed to delivering secure and efficient remittance services to our diverse clientele, ensuring compliance with all regulatory standards. 
                </p>
                <h5>Key Points: 

                </h5>
                <ul>
                    <li><b>Store-Based Operations:</b>  Our physical presence at Sky Shopping City enhances accessibility for customers, providing a convenient and welcoming environment for all their money transfer needs. </li>
                    <li><b>Thorough Customer Onboarding:</b>  We prioritise safety by requesting valid documentation during the onboarding process, ensuring that all clients are accurately verified. </li>
                    <li><b>Rigorous Compliance Checks: </b> Each customer is checked against International Sanctions and Politically Exposed Persons (PEP) lists, upholding our commitment to security and regulatory adherence. </li>
                    <li><b>Proactive Risk Management: </b> We have established protocols that require additional valid documents if any ID threshold is breached, reinforcing our dedication to ongoing compliance and customer protection </li>
                   

                </ul>
               
                <h5>Why Baaz Money Exchange Deserves Recognition 
                </h5>
                <p> Baaz Money Exchange Ltd deserves recognition for our unwavering commitment to compliance, security, and exceptional customer service. Our store-based operations not only provide convenience but also foster trust and reliability in the remittance process. By maintaining the highest standards of risk management and regulatory compliance, we contribute to a safer financial environment for our customers. </p>

                <h5>Conclusion
                </h5>
                <p>Given our focus on delivering secure, compliant, and customer-centric services from our store at Sky Shopping City, Baaz Money Exchange Ltd is a strong candidate for the MSB Store 2024 Award. We are proud of our contributions to the remittance industry and look forward to the opportunity for recognition. 
                </p>
            </div>
            <div className="cs-height_90 cs-height_lg_80" />
        </div>
    )
}

export default BaazMoneyDetails
