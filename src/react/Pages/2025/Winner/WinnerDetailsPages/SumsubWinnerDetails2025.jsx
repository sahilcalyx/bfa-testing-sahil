import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import confetti from "canvas-confetti"; // 🎉 Import confetti

const SumsubWinnerDetails2025 = () => {
  const slides = [
    {
      image: "../assets/img/banner-slider/Banner.png",
      title: "Anti-Fraud Innovator 2025",
      subtitle: "Sumsub",
      logo: "../assets/img/winners2025/demo2.png",
    },
  ];
  const services2 = [
    {
      icon: "fas fa-check-circle",
      title: "Full-Cycle Verification",
      desc: "Covers identity, business verification, and ongoing monitoring.",
    },
    {
      icon: "fas fa-robot",
      title: "AI-Powered Fraud Prevention",
      desc: "Detects account takeovers, multi-accounting, payment fraud, and deepfakes in real time.",
    },
    {
      icon: "fas fa-tachometer-alt",
      title: "High Conversion Rates",
      desc: "Average verification completed in under 20 seconds with industry-leading success rates.",
    },
    {
      icon: "fas fa-id-card",
      title: "Reusable Identity",
      desc: "Secure, cross-platform identity solutions including Reusable KYC and Sumsub ID.",
    },
    {
      icon: "fas fa-coins",
      title: "Travel Rule Compliance",
      desc: "Tailored solutions for crypto companies.",
    },
    {
      icon: "fas fa-sliders-h",
      title: "Adaptive Workflows & No-Code Interface",
      desc: "Easily customizable, scalable, and integrable for businesses of all sizes.",
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
                  src="../assets/img/winners2025-logs-banner/Sumsub-winner25-banner.png"
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
            Sumsub :{" "}
            <span className="text-dark">Anti-Fraud Innovator 2025 </span>{" "}
          </strong>
        </h3>
        <h4 className="mt-4">Overview</h4>
        <p>
          <strong>Sumsub</strong> is a leading full-cycle verification platform
          that enables <strong>fraud-free, scalable compliance</strong> for
          businesses across the globe. Serving over 4,000 clients—including
          Bitpanda, Wirex, Vodafone, Duolingo, and TransferGo—Sumsub combines
          identity verification, business verification, and ongoing monitoring
          in a single, adaptive platform. Recognized by Gartner, Liminal, and
          KuppingerCole, Sumsub empowers fintechs, crypto platforms, gaming
          companies, e-commerce, and sharing economy services to grow securely
          while preventing fraud and ensuring regulatory compliance.
        </p>

        <h4 className="mt-4">Key Features of Sumsub</h4>
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

        <h4 className="mt-4">Why Sumsub Deserves Recognition?</h4>
        <p>
          Sumsub is more than a compliance tool—it is a{" "}
          <strong>strategic enabler for growth and trust</strong>. By combining{" "}
          <strong>AI-driven fraud detection</strong>, adaptive verification
          workflows, and reusable identity solutions, Sumsub allows businesses
          to operate globally with confidence while minimizing risk. Its
          platform not only prevents advanced fraud schemes but also improves
          onboarding conversion, reduces false positives, and provides a
          seamless user experience.
        </p>
        <p>
          Sumsub’s commitment to <strong>digital inclusion</strong> extends
          access to scalable, affordable identity verification for underserved
          regions, helping bridge the digital divide while maintaining strong
          security standards. This unique combination of innovation, fraud
          prevention, compliance, and global reach makes Sumsub the clear choice
          for <strong>Anti-Fraud Innovator of the Year 2025</strong>.
        </p>

        <h4 className="mt-4">Conclusion</h4>
        <p>
          By turning compliance into a competitive advantage, Sumsub empowers
          businesses to{" "}
          <strong>
            prevent fraud, ensure regulatory adherence, and scale globally
          </strong>
          . With its adaptive, AI-driven platform, Sumsub is transforming
          verification and fraud prevention into a seamless, reliable, and
          growth-oriented solution, earning its recognition as the{" "}
          <strong>Anti-Fraud Innovator of the Year 2025</strong>.
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

export default SumsubWinnerDetails2025;
