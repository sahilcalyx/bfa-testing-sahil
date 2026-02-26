import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import confetti from "canvas-confetti"; // 🎉 Import confetti

const RedSeaMoneyTransferWinnerDetails2025 = () => {
  const slides = [
    {
      image: "../assets/img/banner-slider/Banner.png",
      title: "MSB App of the year 2025",
      subtitle: "Red Sea Money Transfer",
      logo: "../assets/img/winners2025/demo2.png",
    },
  ];
  const services2 = [
    {
      icon: "fas fa-exchange-alt",
      title: "Multi-Channel Transfers",
      desc: "Send funds via online banking, bank cards, phone calls, or in-person transactions.",
    },
    {
      icon: "fas fa-user-plus",
      title: "Instant Onboarding & Beneficiary Management",
      desc: "Quick sign-up and easy management of recipients.",
    },
    {
      icon: "fas fa-clock",
      title: "Real-Time Transfer Tracking",
      desc: "Monitor transaction status from start to finish.",
    },
    {
      icon: "fas fa-wallet",
      title: "Flexible Payout Options",
      desc: "Deliver funds to bank accounts, doorsteps, or cash pickup at hundreds of global agents.",
    },
    {
      icon: "fas fa-tags",
      title: "Transparent & Competitive Pricing",
      desc: "Clear fees and competitive exchange rates with no hidden charges.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Secure App Infrastructure",
      desc: "Safe transactions without storing card details.",
    },
    {
      icon: "fas fa-headset",
      title: "Dedicated Customer Support",
      desc: "Multi-channel assistance ensures smooth and reliable user experience.",
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
                  src="../assets/img/winners2025-logs-banner/RedSea-winner25-banner.png"
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
            Red Sea Money Transfer:{" "}
            <span className="text-dark">MSB App of the year 2025</span>{" "}
          </strong>
        </h3>
        <h4 className="mt-4">Overview</h4>
        <p>
          <strong>RedSea Money Transfer</strong> is a seamless, secure, and
          user-friendly platform that revolutionizes international money
          transfers. The app offers multiple convenient payment and payout
          options, enabling customers to send money online, in person, or via
          phone. RedSea Money emphasizes speed, transparency, and reliability,
          empowering users to manage their transfers efficiently and securely
          across global corridors.
        </p>

        <h4 className="mt-4">Key Features of RedSea Money Transfer</h4>
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

        <h4 className="mt-4">Why RedSea Money Transfer Deserves Recognition?</h4>
        <p>
          RedSea Money Transfer stands out through its combination of
          technological innovation, operational excellence, and customer-first
          approach. Its multi-channel transfer options, real-time tracking, and
          transparent pricing meet the practical needs of a diverse global user
          base. Handling over{" "}
          <strong>120,000 transactions totaling £33M+ in 2024</strong>, the
          platform demonstrates reliability, efficiency, and trustworthiness,
          while promoting financial inclusion and economic empowerment across
          diaspora communities.
        </p>

        <h4 className="mt-4">Conclusion</h4>
        <p>
         RedSea Money Transfer is a trailblazer in the fintech remittance sector, delivering secure, efficient, and customer-centric services through its innovative app. That is why <strong>RedSea Money Transfer is the deserving winner of the MSB App of the Year 2025 award</strong>.
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

export default RedSeaMoneyTransferWinnerDetails2025;
