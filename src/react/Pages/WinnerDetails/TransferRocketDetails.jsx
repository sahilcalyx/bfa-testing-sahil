import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const TransferRocketDetails = () => {
    const slides = [
        {
            image: "../assets/img/banner-slider/transfer-rocket.webp",
            title: <>Pay-Out Innovator 2024</>,
            subtitle: "Transfer Rocket",
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
                <h3>Transfer Rocket Ltd : Pay-Out Innovator of the year 2024 </h3>
                <p>We are excited to submit Transfer Rocket Ltd as a candidate for the Pay-Out Innovator category at the Brit FinTech Awards. Our innovative approach to financial transactions is not only transforming how individuals and businesses manage their payouts but is also setting new standards in speed, security, and user experience. 
                </p>
                <h5>Overview of Transfer Rocket Ltd </h5>
                <p>Transfer Rocket is a cutting-edge platform that streamlines the payout process for both businesses and consumers. By leveraging advanced technology, we offer a seamless, real-time payment solution that enhances efficiency and reduces costs associated with traditional payout methods. 
                </p>
                <h5>Key Innovations and Features: 

                </h5>
                <ul>
                    <li><b>Rate Promise:</b>  We provide our customers with the assurance of a guaranteed exchange rate at the moment of transaction. This promise eliminates uncertainty and allows users to plan their finances without worrying about fluctuating rates.  </li>

                    <li><b>Payments We Accept – Bank Transfer Only: </b> By exclusively accepting bank transfers, we streamline the payment process. This approach enhances security and reduces the risk of fraud, giving our users peace of mind. 
                     </li>
                    <li><b>Instant Deposit: </b> Our platform ensures that deposits are processed instantly, allowing recipients to access their funds without delay. This feature is crucial for users who need immediate access to their money.  </li>
                    <li><b>You Pay What We Display: </b>We believe in straightforward pricing. Our users can trust that the amount displayed during the transaction is the amount they will pay, with no hidden fees or surprises. </li>
                    <li><b>No Hidden Fees or Charges: </b>Transparency is at the heart of our operations. We pride ourselves on a fee structure that is clear and upfront, allowing users to understand exactly what they’re paying for, fostering trust and satisfaction. </li>
                    <li><b>Transparency in Communication: </b>Our commitment to clear communication means users are always informed about the status of their transactions. We provide timely updates, so customers know exactly when their money is sent and received. </li>
                    <li><b>Recipient Receives Money as Per Schedule: </b>We guarantee that recipients will receive their funds according to the scheduled time, ensuring that our users can plan their finances effectively. This reliability sets us apart in the industry. </li>
                   
                   

                </ul>
               
              
                <h5>Conclusion
                </h5>
                <p>Transfer Rocket embodies the spirit of innovation that the Brit FinTech Awards celebrate. Our commitment to enhancing the payout process through technology, security, and user experience makes us a strong contender for the Pay-Out Innovator category. We are dedicated to driving the future of financial technology and believe our achievements merit recognition. Thank you for considering our submission. We look forward to the opportunity to showcase how Transfer Rocket is reshaping the payout landscape.</p>
            </div>
            <div className="cs-height_90 cs-height_lg_80" />
        </div>
    )
}

export default TransferRocketDetails
