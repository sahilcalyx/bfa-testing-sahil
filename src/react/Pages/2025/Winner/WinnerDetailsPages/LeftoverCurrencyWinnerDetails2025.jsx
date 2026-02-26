import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import confetti from "canvas-confetti"; // 🎉 Import confetti

const LeftoverCurrencyWinnerDetails2025 = () => {
  const slides = [
    {
      image: "../assets/img/banner-slider/Banner.png",
      title: "MSB Disruptor of the year 2025",
      subtitle: "Leftover Currency",
      logo: "../assets/img/winners2025/demo2.png",
    },
  ];
  // 🎉 Trigger Confetti when page loads
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
  const services2 = [
    {
      icon: "fas fa-coins",
      title: "Comprehensive Currency Conversion",
      desc: "Accepts a wide range of foreign coins and banknotes, including withdrawn and non-circulating currencies.",
    },
    {
      icon: "fas fa-laptop",
      title: "User-Friendly Digital Platform",
      desc: "Online wallet, easy order creation, and instant rate calculation for transparent transactions.",
    },
    {
      icon: "fas fa-bolt",
      title: "Fast, Secure Payments",
      desc: "Receive funds within 5 working days via bank transfer, PayPal, or cheque.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Exceptional Transparency & Regulation",
      desc: "Fully HMRC-registered, compliant with Money Laundering Regulations, and ensures data protection.",
    },
    {
      icon: "fas fa-star",
      title: "Customer Trust",
      desc: "Thousands of 5-star reviews, with clear guidance, proactive communication, and excellent support.",
    },
  ];

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
                  src="../assets/img/winners2025-logs-banner/Leftover-winner25-banner.png"
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
          {" "}
          <strong>
            Leftover Currency:{" "}
            <span className="text-dark">MSB Disruptor of the year 2025</span>{" "}
          </strong>
        </h3>
        <h4 className="mt-4">Overview</h4>
        <p>
          <strong>Leftover Currency</strong> is a pioneering digital platform that transforms otherwise unusable foreign coins and banknotes into real value. Accepting currencies from over 170 countries—including obsolete and non-circulating notes—Leftover Currency empowers individuals, businesses, schools, and nonprofits to unlock hidden financial potential while promoting sustainability and inclusion.
        </p>

        <h4 className="mt-4">Key Features of Leftover Currency</h4>
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

        <h4 className="mt-4">Why Leftover Currency Deserves Recognition?</h4>
        <p>
          Leftover Currency <strong>disrupts the traditional MSB model</strong> by converting dormant or obsolete currencies into usable capital. Its digitally enabled, scalable platform delivers accessibility, speed, and transparency, while integrating philanthropy into every transaction. By combining sustainability, financial inclusion, and regulatory compliance, Leftover Currency sets new standards for the remittance and money exchange sector.
        </p>

        <h4 className="mt-4">Conclusion</h4>
        <p>
          Leftover Currency transforms financial “waste” into real value, driving a <strong>disruptive, customer-centric, and socially responsible model</strong>. That is why Leftover Currency is the deserving winner of the MSB Disruptor of the Year 2025 award.
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

export default LeftoverCurrencyWinnerDetails2025;
