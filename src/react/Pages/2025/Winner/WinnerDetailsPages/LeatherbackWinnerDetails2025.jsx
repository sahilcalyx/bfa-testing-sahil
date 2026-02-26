import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import confetti from "canvas-confetti";

const LeatherbackWinnerDetails2025 = () => {
  const slides = [
    {
      image: "../assets/img/banner-slider/Banner.png",
      title: "B-A-A-S Innovator 2025",
      subtitle: "Leatherback",
      logo: "../assets/img/winners2025/demo2.png",
    },
  ];

  const services2 = [
    {
      icon: "fas fa-globe",
      title: "Global Multi-Currency Accounts",
      desc: "Hold and manage funds in over 15 currencies, including GBP, USD, CAD, and NGN.",
    },
    {
      icon: "fas fa-exchange-alt",
      title: "Collections & Payouts",
      desc: "Enable seamless money movement across continents with speed, transparency, and reliability.",
    },
    {
      icon: "fas fa-coins",
      title: "Instant FX Conversions",
      desc: "Competitive exchange rates with real-time currency conversion to optimize efficiency and margins.",
    },
    {
      icon: "fas fa-layer-group",
      title: "One-Stop Infrastructure",
      desc: "Consolidates services typically offered by multiple providers into one streamlined platform.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Regulated & Trusted Base",
      desc: "Operating from the UK, providing credibility, compliance, and stability for global operations.",
    },
  ];
  useEffect(() => {
    const duration = 5 * 1000; // 3 seconds
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []); 
  return (
    <div className="vyne-container-winner25">
      {/* Banner Section */}
      <div className="banner-wrapper-winner25">
        <div
          className="banner-winner25"
          style={{
            backgroundImage: `url(${slides[0].image})`,
          }}
        >
          <div className="row h-100 m-0">
            {/* Left column */}
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
              <div className="banner-overlay-winner25 w-100">
                <div
                  className="container wow fadeInDown"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationDelay: "0.2s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <div className="banner-text-winner25">
                    <h1 className="banner-title-winner25">{slides[0].title}</h1>
                    <h3 className="banner-subtitle-winner25">
                      {slides[0].subtitle}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center text-white">
              <div
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDuration: "2s",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <img
                  src="../assets/img/winners2025-logs-banner/Leatherback-winner25-banner.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    maxHeight: "400px",
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back link */}
      <div className="back-link-winner25">
        <NavLink
          to="/award-winners-2025"
          className=" d-flex gap-2 align-items-right justify-content-end cs-accent_color_2_hover wow fadeIn"
        >
          <i className="fas fa-chevron-circle-left fs-4" /> Back
        </NavLink>
      </div>

      {/* Content Section */}
      <div className="content-winner25">
        <h3>
          <strong>
            Leatherback:{" "}
            <span className="text-dark">B-A-A-S Innovator 2025</span>
          </strong>
        </h3>
        <h4 className="mt-4">Overview</h4>
        <p>
          <strong>Leatherback</strong> was founded with a bold mission: to
          remove the financial barriers that prevent businesses from operating
          globally. As a <strong>Banking-as-a-Service (BaaS) </strong> platform,
          Leatherback provides Money Transfer Operators (MTOs), Payment Service
          Providers (PSPs), Money Service Businesses (MSBs), and SMEs with
          seamless access to world-class cross-border infrastructure. From
          multi-currency accounts to instant FX and global payout networks,
          Leatherback enables businesses to scale without the friction, delays,
          and costs associated with traditional banking.
        </p>
        <p>
          Operating from a regulated base in the UK, Leatherback bridges key
          financial corridors between{" "}
          <strong>Africa, Europe, and North America</strong>, empowering
          businesses to thrive in markets often overlooked by global banks.
        </p>

        <h4 className="mt-4">Key Features of Leatherback</h4>
        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <div className="row justify-content-center mt-4">
            {services2.map((service1, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div
                  className="d-grid justify-content-start align-items-center p-3 border shadow-sm h-100 gap-2"
                  style={{ backgroundColor: "#000000ff", borderRadius: "10px" }}
                >
                  {/* Icon(s) */}
                  <div className="d-flex">
                    {service1.icons ? (
                      service1.icons.map((icon, idx) => (
                        <i
                          key={idx}
                          className={`${icon} fa-3x text-aqua me-3`}
                        ></i>
                      ))
                    ) : (
                      <i
                        className={`${service1.icon} fa-3x text-aqua mb-3`}
                      ></i>
                    )}
                  </div>

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
        </div>

        <h4 className="mt-4">Why Leatherback Deserves Recognition?</h4>
        <p>
          Leatherback has redefined what <strong>Banking-as-a-Service</strong>{" "}
          means for the remittance and payments ecosystem. Its unified platform
          is removing inefficiencies, lowering costs, and empowering businesses
          of all sizes to compete globally.
        </p>
        <p>Key reasons for recognition include:</p>
        <ul>
          <li>
            <strong>Empowering MTOs</strong> with faster and more affordable
            remittances.
          </li>
          <li>
            <strong>Supporting PSPs & MSBs</strong> to expand networks and
            improve profitability.
          </li>
          <li>
            <strong>
              Unlocking global opportunities for SMEs & freelancers
            </strong>{" "}
            through tools once reserved for large corporates.
          </li>
          <li>
            <strong>Democratizing financial infrastructure</strong> by making
            sophisticated services accessible to underserved markets.
          </li>
          <li>
            <strong>Driving corridor expansion</strong> between Africa, Europe,
            and North America with secure, compliant operations.
          </li>
        </ul>
        <p>
          Leatherback’s{" "}
          <strong>
            mission-driven approach, ecosystem innovation, and measurable impact
          </strong>{" "}
          set it apart as a true leader in BaaS innovation.
        </p>

        <h4 className="mt-4">Conclusion</h4>
        <p>
          Leatherback is more than a payments platform—it is a{" "}
          <strong>global financial ecosystem </strong> designed to unlock
          opportunity for businesses and their customers worldwide. By combining
          compliance, infrastructure, and innovation, Leatherback has proven how
          Banking-as-a-Service can reshape the future of cross-border commerce.
          Its recognition as the{" "}
          <strong>BaaS Innovator of the Year 2025</strong> highlights its role
          as a catalyst for growth, inclusion, and transformation in the global
          financial landscape.
        </p>
      </div>

      {/* CSS */}
      <style>{`
        .vyne-container-winner25 {
          font-family: Poppins, sans-serif;
          color: #222;
          line-height: 1.6;
          padding: 20px;
        }

        .banner-wrapper-winner25 {
          display: flex;
          justify-content: center;
          margin-top: 120px;
          margin-bottom: 40px;
        }

        .banner-winner25 {
          width: 100%;
          max-width: 1150px;
          height: 400px;
          background-size: cover;
          background-position: center;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
          padding: 0 20px;
        }

        .banner-overlay-winner25 {
          background: rgba(83, 83, 83, 0.55);
          padding: 10px;
          border-radius: 20px;
          border: 2px solid #c8102e;
        }

        .banner-title-winner25 {
          font-size: 2.5rem;
          font-weight: 700;
          color: aqua;
          margin-bottom: 15px;
        }

        .banner-subtitle-winner25 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #c8102e;
          background: #fff;
          padding: 6px 12px;
          border-radius: 12px;
          display: inline-block;
        }

        /* Back link */
        .back-link-winner25 {
          max-width: 1150px;
          margin: 0 auto 20px;
          text-align: right;
        }

        .back-link-winner25 a {
          text-decoration: none;
          font-weight: 600;
          color: #c8102e;
          transition: color 0.3s ease;
        }

        .back-link-winner25 a:hover {
          color: aqua;
        }

        /* Content */
        .content-winner25 {
          max-width: 1150px;
          margin: 0 auto;
          background: #f9f9f9;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .content-winner25 h3   {
          color: #c8102e;
          margin-bottom: 15px;
        }

        @media (max-width: 768px) {
          .banner-winner25 {
            height: auto;
            padding-top: 40px;
          }
          .banner-title-winner25 {
            font-size: 1.4rem;
          }
          .banner-subtitle-winner25 {
            font-size: 1rem;
          }
    
          
        }
      `}</style>
    </div>
  );
};

export default LeatherbackWinnerDetails2025;
