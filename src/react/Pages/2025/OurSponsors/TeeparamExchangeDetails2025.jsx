import { Helmet } from "react-helmet";
import React from "react";
import { NavLink } from "react-router-dom";
import TeeparamTestimonialsSlider from "./SponsorsTestimonials/TeeparamTestimonialsSlider";

const TeeparamExchangeDetails2025 = () => {
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
          Teeparam Exchange | Award-Winning UK Remittance MSB | Brit Fintech Awards 2025
        </title>
        <meta
          name="description"
          content="Teeparam Exchange, Brit Fintech Awards MSB of the Year 2024, offers fast remittances, competitive FX, and app-based transfers across 6 UK branches."
        />
        <meta
          name="keywords"
          content="Teeparam Exchange, UK remittance services, money transfers India, MSB UK award, competitive FX UK, Brit Fintech Awards 2025"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Teeparam Exchange | Award-Winning UK Remittance MSB | Brit Fintech Awards 2025"
        />
        <meta
          property="og:description"
          content="Teeparam Exchange, Brit Fintech Awards MSB of the Year 2024, offers fast remittances, competitive FX, and app-based transfers across 6 UK branches."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/Teeparam-sponsor-Logo.png"
        />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        target="_blank"
        className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/sponsor-logo/Logostis-Teeparam-Banner.png")',
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
          Teeparam Exchange: Award-Winning Fintech Excellence
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
        <h3
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            marginBottom: "20px",
            marginTop: "50px",
          }}
        >
          Powering Global Remittances with Trusted Innovation
        </h3>
        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Teeparam Exchange stands as a beacon in the UK remittance
          industry—combining <b>fintech innovation</b>, robust compliance, and a
          customer-first service model. With <b>six branches across the UK</b>,
          we have successfully <b>onboarded over 11K+ customers</b>, processed
          more than <b>95K+ transactions</b> worth{" "}
          <b>£47M Transfers Processed</b> till date. Our seamless, secure, and
          fast platform empowers both individuals and businesses to move money
          worldwide with confidence.
        </p>

        <h3
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            marginBottom: "20px",
          }}
        >
          Brit Fintech Awards Winner: MSB of the Year 2024
        </h3>
        <p style={{ marginBottom: "30px", fontSize: "1rem" }}>
          Teeparam Exchange is honoured to be recognised as the{" "}
          <b>Money Service Business (MSB) of the Year 2024</b> at the Brit
          Fintech Awards. This accolade reflects our unwavering commitment to
          financial stability, technological advancement, and the highest
          standards in customer security and engagement.
        </p>

        {/* Services */}
        <h3
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            marginBottom: "20px",
          }}
        >
          Teeparam Exchange In Numbers
        </h3>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <ul style={{ marginLeft: "20px", lineHeight: "2.1" }}>
            <li>
              {" "}
              <strong>6 UK Branches</strong> – Local expertise, nationwide
              reach.
            </li>
            <li>
              {" "}
              <strong>11K+ Customers </strong> – Trusting us for secure
              transfers.
            </li>
            <li>
              {" "}
              <strong>95K+ Transactions Processed</strong> – Reliability you can
              count on.
            </li>
            <li>
              {" "}
              <strong>£47 Million+ in Transfers Processed </strong> – Delivering
              value at scale.
            </li>
            <li>
              {" "}
              <strong>3K + Android & iOS App Downloads</strong> – Anytime,
              anywhere money transfers.
            </li>
          </ul>
          <p></p>
        </div>
        <h3
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            marginBottom: "20px",
          }}
        >
          Our Core Services
        </h3>
        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <p>
            <strong>International Money Transfers: </strong>
            <br />
            Fast, transparent, and secure remittances to Sri Lanka, India, and
            globally.
          </p>
        </div>
        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <p>
            <strong> Competitive FX Rates: </strong>
            <br />
            Real-time exchange rates ensuring value for every transfer.
          </p>
        </div>
        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <p>
            <strong> App-Based Convenience: </strong>
            <br />
            Android & iOS apps for transfers, tracking, and rate alerts.
          </p>
        </div>
        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <p>
            <strong>Currency Exchange: </strong>
            <br />
            Competitive rates at every branch.
          </p>
        </div>
        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <p>
            <strong>Support: </strong>
            <br />
            Customer-centric support across all touchpoints.
          </p>
        </div>
        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <p>
            <strong>Exclusive Cashbacks & Offers: </strong>
            <br />
            Earn up to £5 for referrals and up to 10% cashback on fees.
          </p>
        </div>

        <h3
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            marginBottom: "20px",
            marginTop: "40px",
          }}
        >
          Introducing: Teeparam Travels & Tours Limited
        </h3>
        <p>
          Teeparam also powers <b>Travels & Tours Limited</b>—serving more than{" "}
          <b>25,000 customers </b>through our <b>six branches</b>. We offer:
        </p>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <ul style={{ marginLeft: "20px", lineHeight: "2.1" }}>
            <li>
              {" "}
              <strong>Custom Tour Packages </strong>for India, Sri Lanka, and
              beyond.
            </li>
            <li>
              {" "}
              <strong>Door-to-Door Collections and Delivery </strong>for travel
              documents and parcels.
            </li>
            <li>
              {" "}
              <strong>Online Booking Facilities</strong>– Easily book trips from
              anywhere.
            </li>
            <li>
              {" "}
              <strong>Personalised Travel Consulting</strong> – Expert
              recommendations for a memorable journey.
            </li>
          </ul>
          <p>
            Explore a world of tailored travel, guided by local expertise and
            seamless logistics.
          </p>
        </div>

        
        <TeeparamTestimonialsSlider />

        <h3
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            marginBottom: "20px",
            marginTop: "40px",
          }}
        >
          Why Teeparam Exchange?
        </h3>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <ul style={{ marginLeft: "20px", lineHeight: "2.1" }}>
            <li>
              {" "}
              <strong>Tech-Driven:</strong> Our app and web platforms provide
              convenience and transparency every step of the way.
            </li>
            <li>
              {" "}
              <strong>Customer-Led Growth:</strong> Our rapidly expanding user
              base and growing suite of fintech products are a testament to
              service excellence.
            </li>
          </ul>
          <p>
            <strong>
              <em>
                Experience the award-winning difference at Teeparam
                Exchange—effortless remittance, innovative travel, and
                industry-leading customer care.
              </em>
            </strong>
          </p>
        </div>

          
        {/* <div className="text-center" style={{ fontSize: "1rem", marginTop: "40px" }}>
          <strong>MEET US AT THE EVENT & DISCOVER MORE</strong>
      </div> */}
      </div>
    </div>
  );
};

export default TeeparamExchangeDetails2025;
