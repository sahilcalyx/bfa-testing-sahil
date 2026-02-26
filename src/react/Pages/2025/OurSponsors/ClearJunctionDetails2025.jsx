import { Helmet } from "react-helmet";
import React from "react";
import { NavLink } from "react-router-dom";

const ClearJunctionDetails2025 = () => {
  const services = [
   
    {
      icon: "fas fa-university",
      title: "Correspondent Accounts",
    },
   
    {
      icon: "fas fa-id-card",
      title: "Virtual IBANs",
    },
    {
      icon: "fas fa-coins",
      title: "FIAT and Stablecoins Payouts",
    },
    {
      icon: "fas fa-hand-holding",
      title: "FIAT Collection ",
    },
  ];
  const services2 = [
    {
      icon: "fas fa-globe",
      title: "Global Reach",
      desc: "Access​ tо major payment rails across the UK, Europe and beyond",
    },
    {
      icon: "fas fa-rocket",
      title: "Speed​ & Efficiency",
      desc: "Real-time, 24/7 services via Faster Payments and SEPA Instant",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Compliance​ & Security",
      desc: "Operating under strict regulatory frameworks with robust risk management",
    },
    {
      icon: "fas fa-cogs",
      title: "Seamless Integration",
      desc: "Our API integrates effortlessly with existing systems",
    },
    {
      icon: "fas fa-headset",
      title: "Dedicated Support",
      desc: "A team​ оf fintech professionals providing tailored service and expertise",
    }
   
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
        <title>
          Clear Junction - Global Payment Infrastructure | Brit FinTech Awards
          2025
        </title>
        <meta
          name="description"
          content=": Clear Junction powers financial institutions with real-time payments, FX, and virtual IBANs. Sponsor of Brit FinTech Awards 2025. FCA & EU licensed."
        />
        <meta
          name="keywords"
          content="Clear Junction, payment rails UK, virtual IBANs, SEPA Instant, Faster Payments, fintech infrastructure, Brit FinTech Awards sponsor 2025"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Clear Junction - Global Payment Infrastructure  | Brit FinTech Awards 2025"
        />
        <meta
          property="og:description"
          content=": Clear Junction powers financial institutions with real-time payments, FX, and virtual IBANs. Sponsor of Brit FinTech Awards 2025. FCA & EU licensed."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/clear-junction-logo-2025.png"
        />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        target="_blank"
        className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/sponsor-logo/clear-junction-banner-2025.png")',
          height: "300px",
        }}
      >
        <div className="cs-hero_pattern cs-hover_layer3" style={{}}>
          
        </div>
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
          Clear Junction : Global provider of payment services to financial
          institutions
        </h2>
        {/* <p style={{ textAlign: "left", fontSize: "1.1rem", marginBottom: "40px", color: "#555" }}>
          Empowering seamless money transfers across South Asia and beyond.
        </p> */}

        {/* Who We Are */}
        {/* <h3
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            marginBottom: "10px",
          }}
        >
          Who We Are
        </h3> */}
        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
         Clear Junction is an FCA-authorised Electronic Money Institution. We deliver compliance-first payments infrastructure that bridges the gaps left by traditional providers, helping financial institutions operate more efficiently and expand globally.
        </p>

        {/* Services */}
        <h3 className="text-center "
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
           Clear Junction's  Proprietary Technology Enables
        </h3>

       
         <div className="row justify-content-center mt-4">
                {services.map((service, index) => (
                  <div className="col-md-6 mb-4" key={index}>
                    <div className="d-flex justify-content-start align-items-center p-3 gap-4  " style={{ backgroundColor: "#000000", borderRadius: "10px" }}>
                     
                     <i className={`${service.icon} fa-2x text-aqua `}></i>
                      {/* Right Content */}
                      <div>
                        <h5 className="fw-bold text-aqua mb-1" style={{ fontSize: "1.2rem" }}>
                          {service.title}
                        </h5>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center" >All backed by a robust regulatory framework and global reach.</p>

        <h3
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: "1.5rem",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          Why Work With Clear Junction?
        </h3>
       
         <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <div className="row justify-content-center mt-4">
            {services2.map((service1, index) => (
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
                    <p className="mb-0" style={{ color: "#ccc" }}>
                      {service1.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
           <p className="text-center" 
           >
            We help businesses bridge the gaps left​ by traditional providers
            and navigate global finance with confidence and agility.
          </p>
        </div>

        {/* Button */}

        <div className="text-center mt-3 pt-3">
          <a
            href="https://clearjunction.com/"
            className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
            target="_blank"
          >
            <span style={{ color: "#fff" }}> Visit Clear Junction Website</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClearJunctionDetails2025;
