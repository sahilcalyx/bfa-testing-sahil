import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const GBGWinnerDetails = () => {
    const slides = [
        {
            image: "../assets/img/banner-slider/GBG.webp",
            title: (
              <>
                ID Verification <br />
                Innovator 2024
              </>
            ),
            subtitle: "GBG",
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
                <h3>GBG : ID Verification Innovator of the year 2024  </h3>
                <h5>Overview</h5>
                <p>GB Group Plc (GBG) is a leading identity verification, location intelligence, and fraud prevention company. With a robust suite of software and data solutions, GBG helps organisations validate and verify the identities and locations of their customers. Backed by data from over 200 global partners, GBG’s technology serves as a critical resource for effective identity verification, ensuring businesses can confidently authenticate the identity of approximately 4.4 billion people worldwide. 
                </p>
                <h5>Key Points: 

                </h5>
                <ul>
                    <li><b>Verify: 
                        </b> Ensure customer authenticity with fast, accurate, and secure identity data verification.
                        <ul>
                            <li><b>Accurate:</b> Utilise a globally consistent identity confidence score from 0 to 1000 to optimise customer onboarding. </li>
                            <li><b>Fast:</b> Achieve secure, compliant checks instantly, verifying genuine customers anywhere in the world. </li>
                            <li><b>Effective:</b> Access comprehensive credit data for enhanced KYC pass rates and goldstandard due diligence. </li>
                            <li><b>Reliable:</b> Screen for PEPs and sanctions, maintaining a robust, automated audit trail for regulatory compliance. </li>
                        </ul></li>
                        <br />
                        <li><b>Prove:
                        </b>  Authenticate identities using biometric data and government-issued documents.  
                        <ul>
                            <li><b>Certified: </b>Rapidly scan a global library of IDs to deliver secure identity verification.  </li>
                            <li><b>Biometric: </b> Employ FaceMatch technology to compare IDs with live facial captures, ensuring customer authenticity </li>
                            <li><b>Secure:</b>  Implement liveness assurance to protect against impersonation and spoofing attacks. </li>
                            <li><b>Strong:</b> Detect tampering and other fraud indicators in identity documents for swift onboarding of genuine customers. </li>
                        </ul></li>
                        <br />
                        <li><b>Protect:
                        </b>  Analyse identity data for suspicious anomalies and fraud signals.   
                        <ul>
                            <li><b>Trust: </b> Leverage a network of shared consumer intelligence for deeper insights during onboarding.   </li>
                            <li><b>Match: </b> Authenticate customers by linking them to their personal mobile devices securely.</li>
                            <li><b>Analyse:</b>   Examine transactional and behavioral history to identify potential fraud signals. 
                             </li>
                            <li><b>Detect:</b>  Identify synthetic identities and assess the quality and history of identities during onboarding.  </li>
                        </ul></li>
                        <br />
                        <li><b>Investigate:
                        </b>  Connect people, businesses, and properties for a comprehensive customer view.   
                        <ul>
                            <li><b>Trace: </b>  Use powerful algorithms to link disparate data sources for fraud investigations and crime prevention. </li>
                            <li><b>Visualise: </b> Apply graph technology to uncover hidden relationships and streamline discovery processes. </li>
                            <li><b>Import:</b>    Combine extensive data records with your existing data for a 360-degree view of any subject under investigation. 
                             </li>
                           
                        </ul></li>

                </ul>
               
                <h5>Why GB Group Plc Deserves Recognition 
                </h5>
                <p> GB Group Plc deserves recognition for its commitment to pioneering identity verification solutions that enhance security, compliance, and operational efficiency. Their innovative technologies not only mitigate risks associated with identity fraud but also facilitate smoother customer onboarding processes, making them an invaluable partner for businesses across various sectors.  </p>

                <h5>Conclusion
                </h5>
                <p>As we look ahead to 2024, GB Group Plc continues to lead the charge in identity verification, combining state-of-the-art technology with a customer-centric approach. Their dedication to delivering secure, reliable, and efficient identity solutions positions them as a vital resource for organisations aiming to build trust and navigate the complexities of the digital landscape. </p>
            </div>
            <div className="cs-height_90 cs-height_lg_80" />
        </div>
    )
}

export default GBGWinnerDetails
