import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const TravelCashierDetails2025 = () => {
  const services = [
    {
      icon: "fas fa-exchange-alt",
      title: "Best Exchange Rates",
      desc: "We provide competitive exchange rates to ensure you get the most value for your money. No hidden fees or unfavourable rates - just transparent and fair pricing. Travel Cashier offers the availability of almost all major currencies without pre booking requirement.",
    },
    {
      icon: "fas fa-laptop",
      title: "Convenient Online Services",
      desc: "Travel Cashier offers exclusive online exchange rates and a very easy to use interface for its customers. You can pre book your purchases from our website and select from one of our locations to pick up your currencies.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Fast and Secure Transactions",
      desc: "With advanced security measures and quick processing times, you can trust that your transactions are safe and efficient.",
    },
    {
      icon: "fas fa-globe",
      title: "Global Reach ",
      desc: "No matter where you’re headed, Travel Cashier supports a wide range of currencies and provides global coverage to meet your needs.",
    },
    {
      icon: "fas fa-headset",
      title: "Expert Support",
      desc: "Our dedicated customer support team is here to assist you with any questions or issues, ensuring a smooth experience from start to finish.",
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
        <title>
          Travel Cashier | Brit FinTech Awards 2025
        </title>
        <meta
          name="description"
          content=" Travel Cashier, a UK-based fintech simplifying global money transfers across 33+ African countries. Sponsor of Brit FinTech Awards 2025."
        />
        <meta
          name="keywords"
          content="Travel Cashier, Africa remittance, low-cost money transfer, secure fintech, AML compliant MSB, Brit FinTech Awards sponsor, Dagenham fintech"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Travel Cashier | Brit FinTech Awards 2025"
        />
        <meta
          property="og:description"
          content="Travel Cashier, a UK-based fintech simplifying global money transfers across 33+ African countries. Sponsor of Brit FinTech Awards 2025."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/travel-cashier-2025.png"
        />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        target="_blank"
        className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage:
            'url("../assets/img/sponsor-logo/travel-cashier-details-2025.png")',
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
          Discover Seamless Travel with Travel Cashier
        </h2>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Travel Cashier enhances your travel experience by offering superior
          Travel Money Solutions. Whether you’re a seasoned traveller or
          preparing for your dream vacation, Travel Cashier has everything you
          need!
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
          Experience the benefits with Travel Cashier
        </h4>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <div className="row justify-content-center mt-4">
            {services.map((service, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div
                  className="d-grid justify-content-center align-items-center p-3 border shadow-sm h-100 gap-2 "
                  style={{ backgroundColor: "#000000", borderRadius: "10px" }}
                >
                  <i className={`${service.icon} fa-3x text-aqua mb-3`}></i>
                  {/* Right Content */}
                  <div>
                    <h5
                      className="fw-bold text-aqua mb-1"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {service.title}
                    </h5>
                    <p className="mb-0" style={{ color: "#ccc" }}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <h4
          style={{
            fontWeight: "700",
            fontSize: "1.5 rem",
            margin: "30px 0 15px 0",
          }}
        >
          Fast & Secure Remittance services
        </h4>
        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Travel Cashier provides remittance services in collaboration with WU
          and RIA offering special promotional rates and offers.
        </p>

        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          Send money to over 200 countries with our fast, secure, and
          cost-effective International Money Transfer service. We ensure that
          your recipient receives the funds efficiently.
        </p>
        {/* Button */}

        <div className="text-center mt-3 pt-3 d-flex justify-content-center gap-3">
          <a
            href="https://travelcashier.com/how-to-order"
            className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
            target="_blank"
          >
            <span style={{ color: "#fff" }}> How to order</span>
          </a>
          <a
            href="https://travelcashier.com/money-transfer"
            className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
            target="_blank"
          >
            <span style={{ color: "#fff" }}> Money Transfer</span>
          </a>
        </div>

        <h4 className="text-center mt-5 mb-4"
          style={{
            fontWeight: "700",
            fontSize: "1.5 rem",
            margin: "30px 0 15px 0",
          }}
        >
          Visit our stores
        </h4>
        <div className="container my-4">
      <div className="row justify-content-center">
        {/* East Ham Card */}
        <div className="col-md-6 col-lg-6 d-flex mb-4">
          <div className="card shadow border-0 rounded-3 w-100 h-100 ">
            <img
              src="https://travelcashier.com/storage/seeder-files/east-ham.jpeg"
              alt="East Ham"
              className="card-img-top"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-bold " style={{ fontSize: "1.2rem" }}>East Ham</h5>
              <p className="card-text mb-2">
                <i className="bi bi-geo-alt-fill text-danger"></i>
                127A, High Street North, East Ham, London, E6 1HZ
              </p>
              <p
                className="card-text text-muted small mt-auto"
                style={{ marginBottom: "0" }}
              >
                Monday to Saturday: 10:00 AM – 7:00 PM <br />
                Sunday: 10:00 AM – 4:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Travel Cashier WF Card */}
        <div className="col-md-6 col-lg-6 d-flex mb-4">
          <div className="card shadow border-0 rounded-3 w-100 h-100 ">
            <img
              src="https://travelcashier.com/storage/seeder-files/travel-cashier-wf.jpeg"
              alt="Travel Cashier WF"
              className="card-img-top"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-bold" style={{ fontSize: "1.2rem" }}>Travel Cashier WF</h5>
              <p className="card-text mb-2">
                <i className="bi bi-geo-alt-fill text-danger"></i>
                30, Westfield Stratford, City Montfichet Road, London, E20 1EJ
              </p>
              <p
                className="card-text text-muted small mt-auto"
                style={{ marginBottom: "0" }}
              >
                Monday to Saturday: 10:00 AM – 9:00 PM <br />
                Sunday: 12:00 PM – 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        <p
          style={{
            marginBottom: "16px",
            fontSize: "1rem",
            textAlign: "center",
          }}
        >
          <strong>
            We are delighted to welcome Travel Cashier as our Travel Sponsor.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default TravelCashierDetails2025;
