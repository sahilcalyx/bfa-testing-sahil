import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const BlessedExchangeWinnerDetails = () => {
    const slides = [
        {
            image: "../assets/img/banner-slider/Blessed.webp",
            title: (
              <>
                Woman Entrepreneur <br />
                in FinTech 2024
              </>
            ),
            subtitle: "Blessed Exchange",
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
                <h3>Blessed Exchange Ltd : Woman Entrepreneur in FinTech 2024  </h3>
                <h5>Overview</h5>
                <p>Blessed Exchange Ltd, under the leadership of a visionary woman entrepreneur, has emerged as a key player in the FinTech sector, particularly in the money remittance industry. Her innovative approach to blending technology with financial services has not only driven the company's growth but also set new standards for transparency, efficiency, and customer experience. Her entrepreneurial spirit, combined with a keen understanding of the regulatory landscape, positions her as a standout figure in the FinTech world. 
                </p>
                <h5>Key Features: 

                </h5>
                <ul>
                    <li><b> Leadership and Vision:</b>  The founder of Blessed Exchange Ltd has led the company with a clear vision of transforming money remittance services. Her leadership has resulted in the creation of a platform that merges technological innovation with exceptional customer service. </li>
                    <li><b>Innovative FinTech Solutions:</b>  Blessed Exchange has introduced cutting-edge solutions that streamline money remittance processes, ensuring secure, transparent, and cost-effective services for customers. </li>
                    <li><b>Achievements:</b>  In just a few years, Blessed Exchange has achieved significant milestones, including:
                        <ul>
                            <li> <strong>Rapid Growth:</strong> Successfully serving thousands of customers across multiple countries.</li>
                            <li><strong>Strategic Partnerships:</strong> Collaborating with major banks and financial institutions to expand our service offerings and reach</li>
                        </ul>
                    </li>
                    <li><b>Advocacy for Women in FinTech:</b> As a woman entrepreneur in a traditionally maledominated industry, she has been an advocate for greater gender diversity in FinTech, inspiring and mentoring other women to pursue careers in this dynamic field. </li>
                  
                   

                </ul>
               
                <h5>Why Blessed Exchange Ltd Deserves Recognition:
                </h5>
                <p> The founder of Blessed Exchange Ltd has demonstrated exceptional entrepreneurial prowess in the highly competitive FinTech space. Her ability to navigate complex regulatory environments while leveraging technology to enhance customer experiences showcases her forward-thinking approach. As a woman leader, she has not only built a successful business but has also championed gender diversity in the sector, making her a role model for aspiring women entrepreneurs. 
                </p>

                <h5>Conclusion
                </h5>
                <p>Blessed Exchange Ltd's founder embodies the qualities of an outstanding woman entrepreneur in FinTech. Her dedication to innovation, compliance, and fostering inclusivity in the industry makes her an ideal candidate for the Woman Entrepreneur in FinTech award at the Brit FinTech Awards. Her achievements stand as a testament to the impact of strong leadership and a clear vision in driving success in the FinTech landscape. </p>
            </div>
            <div className="cs-height_90 cs-height_lg_80" />
        </div>
    )
}

export default BlessedExchangeWinnerDetails
