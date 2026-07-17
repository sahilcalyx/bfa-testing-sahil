import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const VolumePaySponsorDetails2025 = () => {
  return (
    <div>
      <Helmet>
        <title>Open Banking Solutions | Open Banking Payments</title>
        <meta
          name="description"
          content="Volume Pay offers seamless Open Banking Payments through a secure Open Banking Solution, providing businesses with fast and efficient payment services."
        />
        <meta
          name="keywords"
          content="Brit Fintech Award, UK Fintech Awards, VolumeSilverSponsor, Financial Technology Sector UK, Fintech Innovation UK"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Vyne- Leading Open Banking Solutions | Open Banking Payments"
        />
        <meta
          property="og:description"
          content="Volume Pay offers seamless Open Banking Payments through a secure Open Banking Solution, providing businesses with fast and efficient payment services."
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
                      <i className="fas fa-chevron-left" style={{ marginRight: "8px" }} />
                      Back
                    </NavLink>
                  </div>
          <div className="cs-blog_details cs-style1">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h3 className="mb-4">
                  Volume – Everything Remittance Needs, in One Platform
                </h3>
                <p>
                  Open banking pay-ins. Virtual IBANs. Local payouts. All in one
                  place built to move money globally, faster and cheaper.
                </p>

                <h4 className="mt-4"> Built for Remittance. Ready to Scale.</h4>
                <h5> Instant Pay-ins = No Cards, No Chargebacks</h5>
                <p>
                  Enable customers to fund transfers in seconds using secure,
                  biometric open banking flows.
                </p>

                <h5> Virtual IBANs (GBP & EUR)</h5>
                <p>
                  Assign unique IBANs per user or transaction. Automatically
                  match incoming payments with zero manual work.
                </p>

                <h5> Real-Time Transaction Monitoring</h5>
                <p>
                  Track every transaction in real time with built-in visibility,
                  fraud screening, and AML compliance tools so you stay ahead of
                  risk, not behind it.
                </p>

                <h5> Lower Cost of Collections</h5>
                <p>
                  Bypass card networks and SWIFT with local open banking rails.
                  Reduce payment fees by up to 80%, and optimize treasury flows
                  with fewer intermediaries.
                </p>

                <h4 className="mt-4">Why Volume?</h4>
                <p>
                  With one platform, you get everything you need to <strong>collect,
                  reconcile, monitor, and pay out—instantly and at lower cost.</strong>
                  Remittance companies using Volume unlock faster operations,
                  better customer experiences, and scalable global growth.
                </p>

                <h4 className="mt-4"> Our Vision</h4>
                <p>
                  A world where sending money is as easy and instant as sending
                  a message. Volume is making that future real today.
                </p>

                <h4 className="mt-4"> Meet With Us — Before or at the Event</h4>
                <p>
                  Let us help you accept and collect payments with the best
                  checkout experience in remittance.{" "}
                 <div className="text-center mt-4">
  <a
    href="https://calendly.com/d/45s-j89-y4k/demo-with-volume?month=2025-08"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      padding: "10px 25px",
      backgroundColor: "#ff007f", // pink color
      color: "#fff",
      borderRadius: "5px",
      fontWeight: "600",
      textDecoration: "none",
      transition: "background-color 0.3s ease",
    }}
    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e60073")}
    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ff007f")}
  >
    Schedule a Demo
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
