import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const VyneWinnerDetails = () => {
    const slides = [
        {
            image: "../assets/img/banner-slider/Vyne.webp",
            title: (
                <>
                    Account2Account <br />
                    Payment <br /> Processor 2024
                </>
            ),
            subtitle: "Vyne",
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
                <h3>Vyne Technologies Ltd : Account2Account Payment Processor 2024</h3>
                <h5>Overview</h5>
                <p>Vyne Technologies Ltd revolutionises payment processing for businesses with its innovative Open
                    Banking-powered account-to-account solution. By enabling seamless transactions, Vyne helps
                    businesses save up to 80% on processing fees compared to traditional card payments. With instant
                    settlement, companies can significantly enhance cash flow, allowing for faster reinvestment and
                    improved operational efficiency.
                </p>
                <h5>Key features of Vyne include:

                </h5>
                <ul>
                    <li><b>Cost Efficiency:</b> Businesses can save up to 80% on processing fees</li>
                    <li><b>Instant Settlement:</b> Accelerated cash flow through immediate transaction processing.</li>
                    <li><b>Enhanced Conversion:</b> Cardless payment experiences reduce friction for customers.</li>
                    <li><b>Operational Improvement: </b>Lower fees and quicker settlements streamline business
                        operations.</li>
                    <li><b>Fraud Reduction:</b> Benefit from bank-level security, minimising risks associated with payment
                        fraud.</li>

                </ul>
                <p>In a landscape where speed, safety, and savings are paramount, Vyne offers a quicker, easier, and
                    safer alternative to manual payment entry, making it an invaluable partner for businesses looking to
                    thrive in 2024.</p>
                <h5>Why Vyne Technologies Ltd Deserves Recognition
                </h5>
                <p>Vyne Technologies Ltd deserves recognition for its pioneering role in the payment processing sector.
                    By leveraging Open Banking technology, Vyne not only enhances cost efficiency and operational
                    effectiveness but also prioritises user experience and security. Our commitment to innovation has
                    positioned us as a leader in account-to-account payments, empowering businesses to thrive in an
                    increasingly competitive landscape.</p>

                <h5>Conclusion
                </h5>
                <p>With Vyne Technologies Ltd, businesses can embrace the future of payments—efficient, secure, and
                    cost-effective. As we look ahead to 2024, Vyne stands out as a leader in account-to-account
                    payment processing, empowering businesses to optimise our financial operations and achieve
                    greater success.</p>
            </div>
            <div className="cs-height_90 cs-height_lg_80" />
        </div>
    )
}

export default VyneWinnerDetails
