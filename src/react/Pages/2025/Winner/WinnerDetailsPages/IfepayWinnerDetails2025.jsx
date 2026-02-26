import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import confetti from "canvas-confetti"; // 🎉 Import confetti

const IfepayWinnerDetails2025 = () => {
  const slides = [
    {
      image: "../assets/img/banner-slider/Banner.png",
      title: "Startup of the year 2025",
      subtitle: "Ifepay",
      logo: "../assets/img/winners2025/demo2.png",
    },
  ];

   const services2 = [
  {
    icon: "fas fa-shield-alt",
    title: "Early Regulatory Compliance",
    desc: "Fully UK-registered and regulated, adhering to AML and CTF requirements.",
  },
  {
    icon: "fas fa-bolt",
    title: "Affordable, Fast Transfers",
    desc: "Competitive rates and low fees for cost-effective international money transfers.",
  },
  {
    icon: "fas fa-user-check",
    title: "Seamless Digital Onboarding",
    desc: "Quick and secure KYC and verification process for new customers.",
  },
  {
    icon: "fas fa-cogs",
    title: "Technology-Driven Platform",
    desc: "Modern fintech architecture delivering speed, scalability, and security.",
  },
  {
    icon: "fas fa-globe",
    title: "Multi-Currency Capabilities",
    desc: "Supports transactions in multiple currencies for both individuals and businesses.",
  },
  {
    icon: "fas fa-users",
    title: "Customer-Centric Growth",
    desc: "Prioritises transparency, usability, and responsive support.",
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
                  src="../assets/img/winners2025-logs-banner/Ifepay-winner25-banner.png"
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
            Ifepay :{" "}
            <span className="text-dark">Startup of the year 2025 </span>{" "}
          </strong>
        </h3>
        <h4 className="mt-4">Overview</h4>
        <p>
         <strong>IFEPay</strong> is a fast-growing fintech startup delivering <strong>secure, compliant, and efficient cross-border payment solutions</strong>. Focused on innovation and customer care, IFEPay empowers individuals and businesses to send money internationally with speed, transparency, and affordability. As a UK-registered and regulated entity, IFEPay combines modern technology with regulatory compliance to provide a seamless global payment experience.
        </p>

        <h4 className="mt-4">Key Features of IFEPay</h4>
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

        <h4 className="mt-4">Why IFEPay Deserves Recognition?</h4>
        <p>
          IFEPay exemplifies the <strong>startup spirit</strong> innovative, agile, and impact-driven. Within a short time, it has shown the ability to <strong>combine compliance with customer-focused solutions</strong>, delivering faster, more affordable, and transparent international payments. Its platform not only improves access for underserved communities but also enhances trust, financial inclusion, and global connectivity.
        </p>

        <h4 className="mt-4">Conclusion</h4>
        <p>
          IFEPay is more than a fintech startup—it is a <strong>purpose-driven platform</strong> committed to making cross-border transactions fairer, faster, and more inclusive. With its strong regulatory foundation, innovative technology, and customer-first approach, IFEPay is a deserving winner of the <strong>Startup of the Year 2025</strong> award.
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

export default IfepayWinnerDetails2025;
