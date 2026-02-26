import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const KMoneyWinnerDetails = () => {
    const slides = [
        {
            image: "../assets/img/banner-slider/KMoney.webp",
            title: (
              <>
                MSB App <br />
                2024
              </>
            ),
            subtitle: "KMoney",
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
                <h3>KMoney : MSB App of the year 2024   </h3>
                <h5>Overview</h5>
                <p>At KMoney, we’re pioneering innovation in the remittance industry by enhancing customer experience and providing value beyond traditional money transfer services. Our latest initiative, the Loyalty Points System, exemplifies our commitment to delivering exceptional benefits to our users. 
                </p>
                <h5>Loyalty Points System:  
 

                </h5>
                <p>In a competitive landscape where customer loyalty is paramount, KMoney has launched a unique Loyalty Points System designed to reward users for their ongoing trust and engagement with our services. This program enables customers to accumulate points with every transaction, which can be redeemed for a variety of enticing rewards, including birthday cakes, grocery vouchers, and more. </p>

                <h5> Key Features: </h5>
                <ul>
                    <li><b> Points Accumulation: </b> Customers earn points with every remittance transaction.  </li>
                    <li><b>Diverse Rewards:</b>  Points can be redeemed for birthday cakes, grocery vouchers, and other appealing offers, catering to a wide range of preferences. </li>
                    <li><b>Enhanced Engagement: </b> The system encourages repeat use of KMoney’s services, fostering loyalty and satisfaction among users. </li>
                    <li><b>Personalised Rewards: </b>Customers can select rewards that best fit their individual needs, enhancing the overall experience. 
                    </li>
                   

                </ul>
               
                <h5>Impact:
                </h5>
                <p> The Loyalty Points System has significantly improved the customer experience by offering tangible benefits that extend beyond simple money transfers. By providing rewards that cater to everyday needs and special occasions, KMoney has strengthened its connection with customers, ensuring they feel valued and appreciated. 
                </p>

                <h5>Why KMoney Deserves the MSB App Award: 
                </h5>
                <p>KMoney’s Loyalty Points System showcases our dedication to innovation and customer-centric solutions. By implementing this program, we’re setting a new benchmark in the remittance industry, demonstrating that financial transactions can be both rewarding and enjoyable. Our initiative not only enhances customer retention but also underscores our role as a leader in integrating rewards into financial services. 
                </p>
                <h5>Conclusion: </h5>
                <p>At KMoney, we believe innovation is essential to staying ahead in the competitive remittance market. Our Loyalty Points System reflects our commitment to delivering exceptional service and adding meaningful value to our customers’ lives. We are proud to submit this initiative for the MSB App 2024 awards and look forward to continuing to lead the way in remittance innovation. </p>
                <p>Thank you for considering KMoney for the MSB App 2024 awards. We are excited about the future and remain dedicated to bringing more innovative solutions to our valued customers. </p>
            </div>
            <div className="cs-height_90 cs-height_lg_80" />
        </div>
    )
}

export default KMoneyWinnerDetails
