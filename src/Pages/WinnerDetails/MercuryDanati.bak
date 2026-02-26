import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const MercuryDanati = () => {
    const slides = [
        {
            image: "../assets/img/banner-slider/Mercury.webp",
            title: <>Compliance Innovator 2024</>,
            subtitle: "Mercury Danati",
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
                <h3>Mercury Danati : Compliance Innovator of the year 2024</h3>
                <h5>Overview</h5>
                <p>Mercury Danati Ltd, trading as WeBuyAnyCurrency, is a leading name in the currency exchange industry, known for its innovative approach to compliance. By maintaining the highest regulatory standards in every transaction, Mercury Danati not only ensures security and transparency but also sets a new benchmark in the financial services space. The firm’s ability to balance efficiency and compliance has made it a trusted leader in the market.
                </p>
                <h5>Key Features:  

                </h5>
                <ul>
                    <li><b> Compliance Innovation:</b>  Mercury Danati ensures that every transaction meets the strictest regulatory standards, demonstrating a deep commitment to maintaining industry-leading compliance practices. </li>
                    <li><b>Cutting-Edge Technology:</b>  By leveraging the latest technologies, Mercury Danati continuously enhances its compliance framework, offering robust security while optimising transaction efficiency. </li>
                    <li><b>Proactive AML Protocols: </b> Mercury Danati’s advanced approach to anti-money laundering (AML) protocols surpasses standard industry practices, ensuring the safety of its clients and adhering to global financial regulations. </li>
                  <li><b>Commitment to Transparency:</b> Mercury Danati's emphasis on transparency fosters trust, giving customers confidence that their currency exchanges are secure and fully compliant with regulatory requirements.</li>
                  <li><b>International Regulatory Adherence:</b> By strictly following international financial regulations, Mercury Danati further establishes itself as a reliable, globally compliant player in the currency exchange market. </li>
               

                </ul>
             
                <h5>Why Mercury Danati Deserves the Brit FinTech Award:
                </h5>
                <p>Mercury Danati’s unique approach to compliance through innovative technology, proactive AML protocols, and unwavering adherence to international regulations positions it as a leader in the currency exchange industry. Their focus on safeguarding clients from financial risks, while ensuring efficient and transparent service, reflects their commitment to regulatory excellence. This level of dedication to compliance sets them apart from competitors, making them highly deserving of the Brit FinTech Award for Compliance Innovator. </p>

                <h5>Conclusion
                </h5>
                <p>With its focus on innovation, security, and transparency, Mercury Danati has redefined compliance in the currency exchange industry. By prioritising regulatory excellence and utilising advanced technology, the firm has set a new standard in the sector. For these reasons, Mercury Danati is a strong contender for the Compliance Innovator award at the Brit FinTech Awards, exemplifying leadership in secure, compliant, and efficient financial services. </p>
            </div>
            <div className="cs-height_90 cs-height_lg_80" />
        </div>
    )
}

export default MercuryDanati
