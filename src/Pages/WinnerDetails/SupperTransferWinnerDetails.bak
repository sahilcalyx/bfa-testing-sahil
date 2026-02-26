import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const SupperTransferWinnerDetails = () => {
    const slides = [
        {
            image: "../assets/img/banner-slider/super-transfer.webp",
            title: (
              <>
                Remittance Innovator <br />
                MSB 2024
              </>
            ),
            subtitle: "Super Transfer",
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
                <h3>Super Transfer UK LTD : Remittance Innovator MSB 2024 </h3>
         
                <p>
                Super Transfer UK Ltd has established itself as a leader in the remittance industry through its innovative solutions and customer-focused initiatives. Our commitment to compliance, security, and customer engagement makes us a prime candidate for the Remittance Innovator MSB 2024 Award. 
                </p>
                <h5>Key Points: 

                </h5>
                <ul>
                    <li><b> Exciting Offers for Customers:</b> Super Transfer UK Ltd enhances customer engagement with attractive offers such as:
                        <ul>
                            <li><b>Spin the Wheel and Win Jackpot: </b>
                            Customers have the chance to win exciting rewards, increasing user interaction and satisfaction.
                            </li>
                            <li><b>Refer and Earn: </b>This referral program rewards customers for bringing in new users, fostering a loyal customer base. </li>
                        </ul>
                     </li>
                     <li><b>Mobile App:</b> Our intuitive mobile app provides a seamless user experience, enabling quick and easy money transfers with real-time tracking.</li>
                    <li>
                    <b>Strict Compliance:</b> The company adheres to rigorous regulatory standards, ensuring all transactions are compliant and secure. Every customer is checked against National Sanction list and PEP list. 
                    </li>
                    <b>Safe and Secure:</b> With advanced security measures, Super Transfer UK Ltd guarantees the safety of all transactions, protecting customers’ funds and personal information.


                </ul>
               
                <h5>Why Super Transfer Deserves Recognition 
                </h5>
                <p> Super Transfer UK Ltd deserves the Remittance Innovator MSB 2024 Award for its dedication to transforming the remittance landscape. Our innovative mobile app simplifies the transfer process, making it accessible and convenient for users. By offering engaging customer programs like “Spin the Wheel” and “Refer and Earn,” they significantly enhance customer satisfaction and loyalty. Additionally, our strict compliance with regulations and robust security measures ensure that customers’ transactions are always safe and secure. </p>

                <h5>Conclusion
                </h5>
                <p>In conclusion, Super Transfer UK Ltd stands out in the remittance industry due to its innovative customer engagement strategies, user-friendly mobile app, and unwavering commitment to compliance and security. Our efforts to provide a superior remittance experience make us a deserving candidate for the Remittance Innovator MSB 2024 Award.</p>
            </div>
            <div className="cs-height_90 cs-height_lg_80" />
        </div>
    )
}

export default SupperTransferWinnerDetails
