import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const TeeparamExchangeWinnerDetails = () => {
    const slides = [
        {
            image: "../assets/img/banner-slider/Teeparam.webp",
            title: (
              <>
                MSB of the <br />
                Year 2024
              </>
            ),
            subtitle: "Teeparam Exchange",
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
                    className="cs-hero cs-style12 cs-center awards-banner-img-2025 text-center cs-gradient_overlay_35 cs-parallax cs-hobble"
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
                <h3>Teeparam Exchange Ltd : MSB of the Year 2024 </h3>
                <h5>Overview</h5>
                <p> Teeparam Exchange Ltd has emerged as a leading Money Service Business (MSB) in the FinTech industry, distinguished by its strong financial stability, innovative technology solutions, and commitment to customer security and engagement. With substantial growth over the years, Teeparam Exchange Ltd has cemented its reputation as a trusted provider of currency exchange and remittance services. These qualities make the company an excellent candidate for the MSB of the Year category at the Brit FinTech Awards. 
                </p>
                <h5>Key Features: 

                </h5>
                <ul>
                    <li><b>Track Record of Financial Stability:</b> Teeparam Exchange Ltd has demonstrated consistent financial stability, even amid global economic fluctuations. This track record of stability instills confidence in customers and partners alike, positioning the company as a trusted and reliable MSB. </li>
                    <li><b>Innovative Contributions to FinTech:</b>  Teeparam Exchange Ltd has contributed significantly to the FinTech space by integrating cutting-edge technologies into its operations. Our platform offers enhanced efficiency, speed, and security for financial transactions, setting new standards for money service businesses. </li>

                    <li><b>Secure Transactions: </b> The company prioritises customer security by using the latest IT tools and encryption technologies to safeguard all online transactions. This dedication to security ensures that clients can conduct business with peace of mind, knowing their data and funds are protected.</li>

                    <li><b>Mobile App:</b> Teeparam Exchange Ltd’s user-friendly mobile app allows customers to access services from anywhere, providing real-time exchange rates, easy money transfers, and transaction tracking. This mobile solution enhances convenience and accessibility for clients on the go. </li>

                    <li><b>Customer Engagement:</b> The company is committed to maintaining high levels of customer engagement, consistently receiving positive feedback and high satisfaction ratings. Our personalised customer service and responsive support teams enhance the overall experience for users. </li>

                    <li><b>Growth Over Years:</b> Teeparam Exchange Ltd has experienced significant growth over the years, expanding its services while increasing market share. This growth reflects the company’s ability to adapt, innovate, and scale in response to market demands.</li>
                   

                </ul>
               
                <h5>Why Teeparam Exchange Ltd Deserves Recognition:
                </h5>
                <p> Teeparam Exchange Ltd exemplifies what it means to be an exceptional MSB in the FinTech sector. With a proven record of financial stability, continuous innovation, top-notch security, and a commitment to customer satisfaction, the company sets itself apart in the highly competitive financial services landscape. Our growth trajectory and customer-focused approach further underscore our leadership and impact in the industry. </p>

                <h5>Conclusion
                </h5>
                <p>Teeparam Exchange Ltd has positioned itself as a pioneering and secure MSB, with a strong commitment to innovation and customer satisfaction. Our financial stability, technological advancements, and global growth make them an ideal candidate for the MSB of the Year award at 
                the Brit FinTech Awards. Our track record reflects a company poised for continued success and leadership in the FinTech space. </p>
            </div>
            <div className="cs-height_90 cs-height_lg_80" />
        </div>
    )
}

export default TeeparamExchangeWinnerDetails
