import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import confetti from "canvas-confetti"; // 🎉 Import confetti


const ChrisbourghWinnerDetails25 = () => {
  const slides = [
    {
      image: "../assets/img/banner-slider/Banner.png",
      title: "Fintech of the Year 2025 Global",
      subtitle: "Chrisborough Solutions Limited",
      logo: "../assets/img/winners2025/demo2.png",
    },
  ];

  const services2 = [
    {
      icon: "fas fa-plug",
      title: "Seamless API Integration ",
      desc: "A developer-friendly platform enabling quick onboarding and smooth partner integration.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Regulation-Aligned Payouts ",
      desc: "Fully licensed as an International Money Transfer Operator (IMTO) under the Central Bank of Nigeria, ensuring compliance and reliability.",
    },
    {
      icon: "fas fa-exchange-alt",
      title: "Instant & Transparent Settlements ",
      desc: "99% payout reliability, real-time dashboards, and transparent FX spreads for total trust and visibility.",
    },
    {
      icon: "fas fa-cogs",
      title: "Scalable Infrastructure ",
      desc: "From under 100 transactions per month to 51,000+ monthly transactions in just six months, proving Chrisborough’s ability to scale at pace.",
    },
    {
      icon: "fas fa-hands-helping",
      title: "Dedicated Partner Support ",
      desc: "Round-the-clock guidance across time zones, helping partners expand confidently and compliantly.",
    },
    {
      icon: "fas fa-globe-africa",
      title: "Pan-African Vision ",
      desc: "Building a unified payout network that connects remittance providers and financial institutions to multiple African markets via a single integration.",
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
                  src="../assets/img/winners2025-logs-banner/Chrisborough-winner25-banner.png"
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
        <h3 className="">
          {" "}
          <strong>
           Chrisborough Solutions Limited  :{" "}
            <span className="text-dark">
             Fintech of the Year 2025 Global{" "}
            </span>{" "}
          </strong>
        </h3>
        <h4 className="mt-4">Overview</h4>
        <p>
         <strong>Chrisborough Solutions Limited</strong> is a trailblazer in global fintech innovation, providing <strong>compliant and reliable payout solutions</strong> for international remittance providers. With a core focus on <strong>Nigeria</strong> and planned expansion into <strong>Ghana, Kenya, and Uganda</strong>, Chrisborough has rapidly established itself as a trusted partner for money transfer operators and fintechs seeking fast, transparent, and regulation-aligned disbursements.
        </p>
        <p>
          By combining <strong>compliance expertise, cutting-edge technology, and dedicated partner support</strong>, Chrisborough is redefining how cross-border transactions are delivered across Africa, earning its title as <strong>Fintech of the Year 2025 (Global)</strong>.
        </p>
        <h4 className="mt-4">Key Features of Chrisborough Solutions</h4>
        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <div className="row justify-content-center mt-4">
            {services2.map((service1, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div
                  className="d-grid justify-content-start align-items-center p-3 border shadow-sm h-100 gap-2"
                  style={{ backgroundColor: "#000000ff", borderRadius: "10px"}}
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
        <h4 className="mt-4">Why Chrisborough Solutions Deserves Recognition?</h4>
        <p>
         Chrisborough is more than just a payout provider—it is <strong>building the financial infrastructure of the future</strong>. By simplifying compliance, FX management, and settlement, the company empowers global remittance providers to serve their customers faster, more securely, and with complete transparency.
        </p>
        <p>
          Their <strong>rapid growth, strong compliance foundation, and technological excellence</strong> demonstrate not only operational strength but also a clear vision to transform Africa’s financial connectivity. Chrisborough is uniquely positioned to bridge global fintech with Africa’s fast-growing remittance corridors.
        </p>
        <h4 className="mt-4">Conclusion</h4>
        <p>
         With its unmatched blend of <strong>speed, reliability, and regulatory excellence</strong>, Chrisborough Solutions is setting new standards for fintech in Africa and beyond. Its impact in simplifying cross-border payouts, combined with a bold vision for pan-African expansion, makes it a true leader in global financial services.
        </p>
        <p>
          <strong>That is why Chrisborough Solutions Limited is the proud winner of the Fintech of the Year 2025 (Global) Award.</strong>
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

export default ChrisbourghWinnerDetails25;
