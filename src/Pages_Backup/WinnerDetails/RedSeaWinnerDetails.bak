import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const RedSeaWinnerDetails = () => {
    const slides = [
        {
            image: "../assets/img/banner-slider/Redsea.webp",
            title: <>MSB Disruptor 2024</>,
            subtitle: "Red Sea Money Transfer",
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
                <h3>Red Sea Ltd : MSB Disruptor of the year 2024 </h3>
                <p><b>Core Mission:</b> Empowering Horn Africans Through Financial Solutions </p>
                
                <h5>Financial Empowerment  

                </h5>
                <ul>
                    <li><b>Best Exchange Rates & Zero Transfer Fees:</b>     Red Sea Money Transfer is dedicated to saving users money, ensuring they keep more of what they send. </li>
                    <li><b>Global Financial Opportunities: </b>   We enhance the financial prospects of the Horn of Africa diaspora worldwide. </li>
                    
                   

                </ul>
               
                <h5> User-Friendly Technology     
                </h5>
                <ul>
                    <li><b>Intuitive Mobile App:</b>   Our app allows users to send, receive, and manage transactions effortlessly from their smartphones. </li>
                    <li><b>Fast & Reliable Transfers:</b>   Utilising cutting-edge technology for same-day transactions, we eliminate the delays of traditional channels. </li>
                    <li><b>Security Focus: </b>  We implement advanced security measures, ensuring the safety of user funds and compliance with legal standards.</li>
                </ul>
                <h5> Community Empowerment  </h5>
                <ul>
                    <li><b>Financial Inclusion: </b>  Our services cater to everyone, promoting financial stability across socio-economic backgrounds</li>
                    <li><b>Economic Growth:  </b> By providing a cost-effective money transfer platform, we contribute to local economic development and job creation. </li>
                    <li><b>Social Impact Initiatives: </b>  We support education, healthcare, and infrastructure projects to improve community well-being. </li>
                    <li><b>Sustainable Development Goals:</b>   We align with the UN’s goals to reduce poverty and inequality while fostering economic growth. </li>
                </ul>

                <h5>Why Red Sea Ltd Deserves Recognition: </h5>
                <ul>
                    <li><b> Innovative Approach: </b>  Red Sea Money Transfer leverages technology to provide a seamless, efficient, and secure service, setting a new standard in the financial landscape. </li>
                    <li><b>Commitment to Community:</b>   Our focus on financial inclusion and support for local initiatives demonstrates a genuine commitment to improving lives in the Horn of Africa. </li>
                    <li><b>Empathetic Service:  </b> We understand and address the unique challenges faced by our users, ensuring our services are tailored to their needs. </li>
                    <li><b>Sustainable Impact:</b>   By promoting economic growth and aligning with sustainable development goals, we contribute to a better future for our communities. </li>
                </ul>

              

                <h5>Conclusion
                </h5>
                <p>Red Sea Money Transfer is not just a financial service; it is a catalyst for change in the Horn of Africa. Our commitment to empowering individuals through innovative technology, financial inclusion, and community impact sets us apart. By choosing Red Sea, users are not only enhancing their financial stability but also contributing to the broader goal of uplifting entire communities. Join us in redefining the future of financial services in the Horn of Africa, where our heart truly lies. </p>
            </div>
            <div className="cs-height_90 cs-height_lg_80" />
        </div>
    )
}

export default RedSeaWinnerDetails
