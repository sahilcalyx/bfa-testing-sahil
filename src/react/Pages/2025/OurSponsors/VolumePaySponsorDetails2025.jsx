import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const VolumePaySponsorDetails2025 = () => {
  const services = [
    {
      icon: " fas fa-handshake",
      title: "Instant Pay-ins = No Cards, No Chargebacks",
      desc: "Enable customers to fund transfers in seconds using secure, biometric open banking flows.",
    },
    {
      icon: "fas fa-id-card",
      title: "Virtual IBANs (GBP & EUR)",
      desc: "Assign unique IBANs per user or transaction. Automatically match incoming payments with zero manual work.",
    },
    {
      icon: "fas fa-eye",
      title: "Real-Time Transaction Monitoring",
      desc: "Track every transaction in real time with built-in visibility, fraud screening, and AML compliance tools so you stay ahead of risk, not behind it.",
    },
    {
      icon: "fas fa-chart-area",
      title: "Lower Cost of Collections",
      desc: "Bypass card networks and SWIFT with local open banking rails. Reduce payment fees by up to 80%, and optimize treasury flows with fewer intermediaries.",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>
          Volume Pay | Open Banking Remittance Platform | Brit FinTech Awards 2025
        </title>
        <meta
          name="description"
          content="Volume offers open banking pay-ins, virtual IBANs, and real-time AML monitoring for fast, low-cost, and scalable global money transfers."
        />
        <meta
          name="keywords"
          content="Volume Pay, open banking transfers, remittance UK, virtual IBAN, low-cost money transfers, Brit Fintech Awards 2025"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Volume Pay | Open Banking Remittance Platform | Brit FinTech Awards 2025"
        />
        <meta
          property="og:description"
          content="Volume offers open banking pay-ins, virtual IBANs, and real-time AML monitoring for fast, low-cost, and scalable global money transfers."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/event-conference/VolumeSilverSponsor.png"
        />
      </Helmet>

      <div>
        <div className="cs-height_90 cs-height_lg_80" />

        <div
          className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
          style={{
            backgroundImage:
              'url("../assets/img/sponsor-logo/volume-details-2025.png")',
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
            <div className="cs-hero_text text-left"></div>
            <div className="cs-height_10 cs-height_lg_0" />
          </div>
          <div className="cs-hero_img cs-bg">
            <div className="cs-hero_img_circle" />
          </div>
        </div>

        <div className="cs-height_135 cs-height_lg_80" />

        <div className="container">
          <div style={{ marginBottom: "30px", textAlign: "right" }}>
            <NavLink
              to="/our-sponsors"
              style={{
                textDecoration: "none",
                color: "#f40181",
                fontWeight: "600",
              }}
            >
              <i
                className="fas fa-chevron-left"
                style={{ marginRight: "8px" }}
              />
              Back
            </NavLink>
          </div>
          <div className="cs-blog_details cs-style1">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2
                  style={{
                    fontWeight: "700",
                    fontSize: "2rem",
                    textAlign: "left",
                    color: "#000",
                  }}
                >
                  Volume - Everything Remittance Needs, in One Platform
                </h2>
                <p>
                  Open banking pay-ins. Virtual IBANs. Local payouts. All in one
                  place built to move money globally, faster and cheaper.
                </p>

                <h3
                  className="mt-4 text-center"
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: "1.5rem",
                    marginBottom: "20px",
                    marginTop: "30px",
                  }}
                >
                  {" "}
                  Built for Remittance. Ready to Scale.
                </h3>
                <div className="row justify-content-center mt-4">
                  {services.map((service, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                      <div
                        className="d-grid justify-content-start align-items-center p-3 gap-4  "
                        style={{
                          backgroundColor: "#000000",
                          borderRadius: "10px",
                        }}
                      >
                        <i className={`${service.icon} fa-3x text-aqua `}></i>
                        {/* Right Content */}
                        <div>
                          <h5
                            className="fw-bold text-aqua mb-1"
                            style={{ fontSize: "1.2rem" }}
                          >
                            {service.title}
                          </h5>
                          <p
                            className="mb-0"
                            style={{ fontSize: "1rem", color: "#ccc" }}
                          >
                            {service.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <h3
                  className="mt-4"
                  style={{
                    fontWeight: "700",
                    fontSize: "1.5rem",
                    marginTop: "30px",
                  }}
                >
                  Why Volume?
                </h3>
                <p>
                  With one platform, you get everything you need to{" "}
                  <strong>
                    collect, reconcile, monitor, and pay out—instantly and at
                    lower cost.
                  </strong>
                  Remittance companies using Volume unlock faster operations,
                  better customer experiences, and scalable global growth.
                </p>

                <h3
                  className="mt-4"
                  style={{
                    fontWeight: "700",
                    fontSize: "1.5rem",

                    marginTop: "30px",
                  }}
                >
                  {" "}
                  Our Vision
                </h3>
                <p>
                  A world where sending money is as easy and instant as sending
                  a message. Volume is making that future real today.
                </p>

                <h3
                  className="mt-4"
                  style={{
                    fontWeight: "700",
                    fontSize: "1.5rem",
                    marginTop: "30px",
                  }}
                >
                  {" "}
                  Meet With Us — Before or at the Event
                </h3>
                <p>
                  Let us help you accept and collect payments with the best
                  checkout experience in remittance.{" "}
                  <div className="text-center mt-3 pt-3">
                    <a
                      href="https://calendly.com/d/45s-j89-y4k/demo-with-volume?month=2025-08"
                      className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
                      target="_blank"
                    >
                      <span style={{ color: "#fff" }}> Schedule Demo</span>
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumePaySponsorDetails2025;
