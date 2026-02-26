import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const RedSeaDetails2025 = () => {
  const services1 = [
    {
      icon: " fas fa-shield-alt",
      title: "Trust & Reliability",
      desc: "Your funds are safeguarded from the moment you send until they reach the recipient",
    },
    {
      icon: " fas fa-paper-plane",
      title: "Fast, Real-Time Transfers",
      desc: "Send money swiftly and confidently - no delays, no stress",
    },
    {
      icon: " fas fa-handshake",
      title: "Convenient Options to Send & Receive",
      desc: "Enjoy excellent rates with clear pricing - no hidden costs.",
    },
    {
      icon: " fas fa-user-shield",
      title: "Convenient Options to Send & Receive",
      desc: "<strong>Send</strong>- via phone, online platform, or in-person at the London office & <strong>Receive-</strong> funds via cash delivery, bank deposit, or pickup at agent location ",
    },
    {
      icon: " fas fa-headset",
      title: "24/7 Customer Support",
      desc: "Immediate assistance whenever you need it - day or night",
    },
    {
      icon: " fas fa-undo",
      title: "Money-Back Guarantee",
      desc: "If your recipient doesn't receive their funds, you'll get a full refund - no questions asked",
    },
    
  ];

  
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#333",
      }}
    >
      <Helmet>
        <title>Red Sea - Send with Confidence, Receive with Ease | Brit FinTech Awards 2025</title>
        <meta
          name="description"
          content= " Discover Red Sea, a strategic sponsor of Brit FinTech Awards 2025. Offering fast, secure, and user-friendly cross-border money transfers via mobile."
        />
        <meta
          name="keywords"
          content="Red Sea, Africa remittance, low-cost money transfer, secure fintech, AML compliant MSB, Brit FinTech Awards sponsor, Dagenham fintech"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Red Sea - Send with Confidence, Receive with Ease | Brit Fintech Awards 2025"
        />
        <meta
          property="og:description"
          content="Discover Red Sea, a strategic sponsor of Brit FinTech Awards 2025. Offering fast, secure, and user-friendly cross-border money transfers via mobile."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/red-sea-sponsor-logo.png"
        />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        target="_blank"
        className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/sponsor-logo/red-sea-banner-2025.png")',
          height: "300px",
        }}
      >
        <div className="cs-hero_pattern cs-hover_layer3"></div>
        <div
          className="container wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.2s",
            animationName: "fadeInDown",
          }}
        >
          <div className="cs-hero_text text-left">
            <div className="cs-height_10 cs-height_lg_0" />
          </div>
        </div>
        <div className="cs-hero_img cs-bg">
          <div className="cs-hero_img_circle" />
        </div>
      </a>

      {/* Content */}
      <div
        style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 20px" }}
      >
        {/* Back */}
        <div style={{ marginBottom: "30px", textAlign: "right" }}>
          <NavLink
            to="/our-sponsors"
            style={{
              textDecoration: "none",
              color: "#f40181",
              fontWeight: "600",
            }}
          >
            <i className="fas fa-chevron-left" style={{ marginRight: "8px" }} />
            Back
          </NavLink>
        </div>

        {/* Intro */}
        <h2
          style={{
            fontWeight: "700",
            fontSize: "2rem",
            textAlign: "left",
            color: "#000",
          }}
        >
          Red Sea - Send with Confidence, Receive with Ease.
        </h2>

        

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
         Red Sea Money Transfer is a trusted FCA-registered remittance provider based in London, delivering fast, secure, and transparent money transfers to more than 50 countries and territories, with a special focus on the Horn of Africa. Winner of the MSB Disruptor 2024 award, Red Sea combines real-time transfers with 24/7 customer support and a variety of payment and delivery options to suit every need.
        </p>

        {/* Services */}
        <h4
          className="text-center mt-5 mb-4"
          style={{
            fontWeight: "700",
            fontSize: "1.5 rem",
            margin: "30px 0 15px 0",
          }}
        >
         Why Choose Red Sea?
        </h4>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <div className="row justify-content-center mt-4">
            {services1.map((service1, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div
                  className="d-grid justify-content-start align-items-center p-3 border shadow-sm h-100 gap-2 "
                  style={{ backgroundColor: "#000000", borderRadius: "10px" }}
                >
                  <i className={`${service1.icon} fa-3x text-aqua mb-3`}></i>
                  {/* Right Content */}
                  <div>
                    <h5
                      className="fw-bold text-aqua mb-1"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {service1.title}
                    </h5>
                    <p
                     className="mb-0"
                     style={{ color: "#ccc" }}
                      dangerouslySetInnerHTML={{ __html: service1.desc }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      

        
       

        <h4
          className=" mt-5 mb-4"
          style={{
            fontWeight: "700",
            fontSize: "1.5 rem",
            margin: "30px 0 15px 0",
          }}
        >
          Refer a Friend & Earn Rewards :
        </h4>

        

        <p style={{ marginBottom: "18px", fontSize: "1rem" }}>
          Red Sea’s Refer-A-Friend program rewards both you and your friends:
        </p>
        <ul style={{ marginBottom: "16px", fontSize: "1rem",listStyleType:"Number", paddingLeft:"30px" }}>
          <li style={{ marginBottom: "8px", fontSize: "1rem" }}>
            	Share your referral link by logging in and visiting the Refer-A-Friend page.
          </li>
          <li style={{ marginBottom: "8px", fontSize: "1rem" }}>
            	Once your friend signs up with your link and sends a minimum transfer of £50, you receive £5 credited to your account for your next transfer. 
              </li>
              <li>Your friend also benefits by joining a trusted remittance provider with efficient, secure service.</li>
        </ul>

       
       
        
         <div className="text-center mt-3 pt-3">
           <a
                  href="https://redseamoneytransfer.co.uk/home"
                  className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
                  target="_blank"
                >
                  <span style={{ color: "#fff" }}> Visit RedSea</span>
                </a>
        </div>
      </div>
    </div>
  );
};

export default RedSeaDetails2025;
