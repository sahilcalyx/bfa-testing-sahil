import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const MTBSWinnerDetails = () => {
    const slides = [
        {
            image: "../assets/img/banner-slider/MTBS.webp",
            title: <>B-A-A-S Innovator 2024</>,
            subtitle: "MTBS",
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
                    className="cs-hero cs-style12 cs-center text-center awards-banner-img-2025  cs-gradient_overlay_35 cs-parallax cs-hobble"
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
                <h3>MTBS : Banking as a Service (B-A-A-S) innovator of the year 2024 </h3>
                <h5>Overview</h5>
                <p>MTBS is a leading provider of Banking as a Service (BaaS), offering businesses a streamlined platform to integrate comprehensive banking solutions effortlessly. By leveraging cutting-edge technology, MTBS empowers organisations to enhance the financial service offerings and improve customer experiences. 
                </p>
                <h5>Key Points: 

                </h5>
                <ul>
                    <li><b>API-Driven Integration:</b>  Seamlessly incorporate banking services into your existing platform with robust, secure, and scalable APIs. </li>
                    <li><b>Customisable Solutions:</b>  Tailor financial services to meet the unique needs of your customers, enhancing overall experience.</li>
                    <li><b>Compliance and Security: </b> Benefit from built-in compliance with industry standards and regulations, ensuring the highest level of data security and privacy. </li>
                    <li><b>Scalability: </b>Quickly grow your offerings and expand into new markets with flexible, cloudbased infrastructure. </li>
                   

                </ul>
               
                <h5>Why MTBS Deserves Recognition 
                </h5>
                <p> MTBS deserves recognition for its innovative approach to BaaS, which enables rapid deployment of financial services without the need for complex infrastructure. Our focus on user experience, compliance, and scalability allows businesses to remain competitive in a fast-evolving market.</p>

                <h5>Conclusion
                </h5>
                <p>In a dynamic financial landscape, MTBS stands out as a trusted partner for businesses seeking to enhance banking capabilities. By providing a robust, flexible, and secure platform, MTBS enables organisations to deliver exceptional financial services, driving growth and customer satisfaction. </p>
            </div>
            <div className="cs-height_90 cs-height_lg_80" />
        </div>
    )
}

export default MTBSWinnerDetails
