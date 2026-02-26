import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const MyRemitWinnerDetails = () => {
    const slides = [
        {
            image: "../assets/img/banner-slider/MyRemit.webp",
            title: (
              <>
                Best in Customer <br />
                Service MSB 2024
              </>
            ),
            subtitle: "My Remit",
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
                    className="cs-hero cs-style12 cs-center text-center cs-gradient_overlay_35 cs-parallax cs-hobble awards-banner-img-2025"
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
                            <h1 className="cs-hero_title2  cs-extra_bold cs-white text-uppercase">
                                {slides[currentSlide].title} {/* Dynamic title */}
                                <div className="mt-0"></div>
                            </h1>
                            <h4
                                className="text-white mt-3 p-1 celebration-text-banner text-center"
                                style={{ maxWidth: "350px" }}
                            >
                                {slides[currentSlide].subtitle} {/* Dynamic subtitle */}
                            </h4>
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
                <h4>MyRemit : Best in Customer Service MSB 2024 </h4>
                <h5>Overview</h5>
                <p>MYREMIT LTD (MYREMIT) is a company that provides online international remittance services for individuals who are mainly remitting money to Somalia, Kenya, Uganda, Ethiopia, Europe, USA, and Canada.  
                </p>
               <p>MYREMIT is non-cash-based remittance company which allows UK based individual customers to register through APP and website and make payments through Debit / Credit cards and Bank transfer. All customers are non-face to face and verified by GB Group before onboarding. </p>
            
            <p>
            MYREMIT LTD (MYREMIT) is a trusted provider of international remittance services catering to individuals seeking secure and efficient money transfer solutions. With a specific focus on East African Corridor particularly Somalia and Kenya, Uganda and Ethiopia, MYREMIT LTD is committed to facilitating seamless financial transactions for its valued customers. As a company, MYREMIT LTD is 100% owned by Abdulkadir Daad, further ensuring a personal and dedicated approach to serving the needs of its clientele. 
 
            </p>

            <p>MYREMIT LTD simplify the process and offer peace of mind. With extensive experience in the remittance industry, MYREMIT LTD has built a solid reputation for its commitment to transparency, security, and customer satisfaction. </p>
           
           <p>MYREMIT LTD offers a range of remittance solutions tailored to meet the diverse needs of its customers. Whether you require swift transfers for urgent financial transactions or prefer a costeffective option for regular remittances, MYREMIT LTD provides flexible and customisable services. The company prides itself on offering competitive exchange rates, low fees, and efficient processing times to maximise the value and convenience for its clients. </p>

           <p>The company adheres to strict regulatory and compliance standards, employing cutting-edge security measures to protect your funds and personal information. MYREMIT LTD values trust and strives to maintain the highest level of integrity and confidentiality in all its operations. MYREMIT LTD takes its responsibility in combating money laundering and ensuring compliance with relevant regulations seriously. As part of its commitment to maintaining strong due diligence procedures, the company collaborates with reputable entities such as Dow Jones and utilises other supporting Compliance AML (Anti-Money Laundering) tools. 
           </p>

           <p>By partnering with GB Group, MYREMIT LTD gains access to their extensive databases and expertise in conducting thorough background checks and screening processes. This collaboration allows the company to enhance its due diligence efforts and effectively identify any potential risks or suspicious activities associated with transactions. 
 
 </p>
               <h4>2. Names and positions of the staff that undertake relevant activity </h4>
               <p>Abdulkadir Mahamud Daad is undertaking the relevant activity. </p>
                
                <h4>3. Details of the business services offered: </h4>
                <h5><b>Retail Remittance Services: Process for cross-border trade payment services </b></h5>
            <p>MYREMIT has restarted its regulatory activities in 2023, after spending more time on development of online platforms (APP and WEB) and internal controls in 2022. </p>

            <p>MYREMIT collaborates with esteemed financial institution (EMI), namely Leatherback and liaison with the merchant Trust Payment to receive funds from customers. This strategic partnership enables MYREMIT to receive funds from customer account to MYREMIT account. </p>
            <p>MYREMIT is only dealing with individual online customers who intends to remit money to Somalia, Keyna, Uganda and Ethiopia. </p>
            <h5>Number of Current Clients: </h5>
            <p>At the moment the company has 12 individual Clients. 
            4</p>
            <h4>4. The most recent business risk assessment document</h4>
            <p>Please find the risk assessment document</p>
            <h4>5. The most recent business policy, controls, and procedure document </h4>
            <p>Please find the PCP document. </p>
            <h4>6. Details of any business relationship you have with another Money 
            Service Businesses </h4>
            <p>MYREMIT does not have business relationship with another Money Service Business.  </p>
            </div>
            <div className="cs-height_90 cs-height_lg_80" />
        </div>
    )
}

export default MyRemitWinnerDetails
