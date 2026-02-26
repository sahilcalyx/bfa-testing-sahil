import { Helmet } from "react-helmet";
import React from "react";
import { NavLink } from "react-router-dom";

const MercuryDenatiDetails2025 = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#333",
      }}
    >
      <Helmet>
        <title>Mercury Danati | Trusted London Currency Exchange  | Brit FinTech Awards 2025</title>
        <meta
          name="description"
          content="Mercury Danati delivers competitive FX rates, award-winning compliance, and reliable currency exchange across London with 80+ world currencies."
        />
        <meta
          name="keywords"
          content="Mercury Danati, London currency exchange, FX rates UK, money service business, foreign exchange London, Brit Fintech Awards 2025"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Mercury Danati | Trusted London Currency Exchange | Brit FinTech Awards 2025"
        />
        <meta
          property="og:description"
          content="Mercury Danati delivers competitive FX rates, award-winning compliance, and reliable currency exchange across London with 80+ world currencies."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/Mercury-Danati-25.png"
        />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
       
        target="_blank"
        className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/sponsor-logo/mercury-danati-banner-2025.png")',
          height: "300px",
        }}
      >
        <div className="cs-hero_pattern cs-hover_layer3" style={{}}>
          {/* <div
              className="cs-hero_pattern_in cs-bg_parallax"
              data-src="../assets/img/gold-sponsor-banner.png"
              style={{
                backgroundImage:
                  'url("../assets/img/gold-sponsor-banner.png")',
                  backgroundSize: 'center',
                  backgroundRepeat: 'no-repeat',
                backgroundPosition: "center -129.8px",
              }}
            /> */}
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
          Mercury Danati: London’s Trusted Currency Exchange Specialist
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
          Mercury Danati is elevating the currency exchange experience for both
          local and international customers. As a premier MSB with a strong
          reputation in London, Mercury Danati combines competitive rates,
          regulatory excellence, and outstanding customer service to deliver
          best-in-class foreign exchange solutions.
        </p>
        <p style={{ marginBottom: "30px", fontSize: "1rem" }}>
          With three strategically located branches in the London, Mercury
          Danati makes accessing over 80 world currencies simple and convenient
          for travellers and businesses alike.
        </p>

        {/* Services */}
        <h3
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            marginBottom: "20px",
          }}
        >
          Key Features & Benefits:
        </h3>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <p>
            <strong> Award-Winning Compliance:</strong>
            <br />Mercury Danati proudly received the Compliance Innovator
            Award at the Brit Fintech Awards 2024, highlighting their unwavering
            commitment to top-tier regulatory standards and customer trust.
          </p>
        </div>
        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <p>
            <strong> Tailored, Friendly Service: </strong>
            <br />
            Whether you’re a frequent traveller, local resident, or visiting
            from abroad, Mercury Danati ensures each customer enjoys a fast,
            secure, and personal experience.
          </p>
        </div>
        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <p>
            <strong> Transparent, Competitive Rates: </strong>
            <br />
            Customers rely on Mercury Danati for clear, market-leading rates
            that deliver genuine value.
            <br />
            <br />
            Mercury Danati’s vision is simple: to make currency exchange secure,
            straightforward, and accessible — setting the gold standard for MSBs
            in the UK.
          </p>
        </div>

        {/* Address */}
        <h3
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            marginBottom: "10px",
          }}
        >
          Address
        </h3>
        <p style={{ fontSize: "1rem", marginBottom: "30px" }}>
          First Floor, 199 Praed Street, London, England, W2 1RH
        </p>

        {/* Contact */}
        <h3
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            marginBottom: "10px",
          }}
        >
          Email Address
        </h3>
        <p style={{ fontSize: "1rem" }}>
          <a
            href="mailto:jay.a@mercuryfx.com"
            style={{ color: "#f40181", textDecoration: "none" }}
          >
           jay.a@mercuryfx.com
          </a>
        </p>
        {/* <div className="text-center" style={{ fontSize: "1rem", marginTop: "40px" }}>
          <strong>MEET US AT THE EVENT & DISCOVER MORE</strong>
      </div> */}
      </div>
    </div>
  );
};

export default MercuryDenatiDetails2025;
