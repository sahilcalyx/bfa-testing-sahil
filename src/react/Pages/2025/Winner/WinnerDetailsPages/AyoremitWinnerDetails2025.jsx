import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import confetti from "canvas-confetti"; // 🎉 Import confetti


const AyoremitWinnerDetails2025 = () => {
  const slides = [
    {
      image: "../assets/img/banner-slider/Banner.png",
      title: "MSB of the Year 2025 Global",
      subtitle: "Ayoremit",
      logo: "../assets/img/winners2025/demo2.png",
    },
  ];

 const services2 = [
    {
      icon: "fas fa-globe",
      title: "Global Reach ",
      desc: "Secure transfers to 150+ countries, ensuring access for diverse communities worldwide.",
    },
    {
      icon: "fas fa-arrow-alt-circle-down",
      title: "Low Fees & Upfront Rates",
      desc: "Competitive FX rates and transparent, no-hidden-cost pricing.",
    },
    {
      icon: "fas fa-paper-plane",
      title: "Fast & Secure Transactions ",
      desc: "Most payments are processed in minutes with robust security protocols and encrypted data handling.",
    },
    {
      icon: "fas fa-robot",
      title: "Tech-Driven Experience ",
      desc: "AI-powered processes, smart verification, and user-friendly mobile apps deliver seamless remittances.",
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Multilingual Support ",
      desc: "Around-the-clock customer care ensures peace of mind for a global user base.",
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
                  src="../assets/img/winners2025-logs-banner/AYORemit-winner25-banner.png"
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
             AYOREMIT AU PTY LTD:{" "}
            <span className="text-dark">
             MSB of the Year 2025 Global{" "}
            </span>{" "}
          </strong>
        </h3>
        <h4 className="mt-4">Overview</h4>
        <p>
          <strong>AYORemit AU Pty Ltd</strong> has emerged as a global leader in money services, offering <strong>fast, secure, and affordable remittance solutions</strong> across more than 150 countries. By combining <strong>cutting-edge technology, transparent pricing, and customer-first service</strong>, AYORemit has become a trusted financial partner for migrants, families, and international workers worldwide.
        </p>
        <p>
          With strong transaction volumes, positive customer feedback, and a commitment to financial inclusion, AYORemit is redefining the future of global remittance and rightfully earns the title of <strong>MSB of the Year (Global)</strong>.
        </p>
        <h4 className="mt-4">Key Features of AYORemit</h4>
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
        <h4 className="mt-4">Why AYORemit Deserves Recognition?</h4>
        <p>
         AYORemit goes beyond being a remittance provider—it is a global fintech innovator driving inclusion, trust, and accessibility. Its achievements include:
        </p>

        <ul>
          <li>Enabling <strong>3,000–5,000 monthly transactions</strong>, supported by loyal repeat users.</li>
          <li>Delivering an annual remittance volume of approximately <strong>£26 million</strong>, showcasing scale and trust.</li>
          <li>Supporting families across borders with <strong>affordable transfers for education, healthcare, and livelihoods</strong>.</li>
          <li>Consistently earning <strong>positive independent reviews</strong> for speed, ease of use, and top rates.</li>
          <li>Standing out through <strong>regulatory compliance, AI-driven automation, and scalable infrastructure</strong>.</li>



          </ul>
        <p>
          These milestones highlight AYORemit’s pivotal role in shaping a more connected and financially inclusive world.
        </p>
        <h4 className="mt-4">Conclusion</h4>
        <p>
         AYORemit is more than a money transfer service—it is a <strong>lifeline for global communities</strong>, a <strong>driver of economic connectivity</strong>, and a <strong>pioneer in fintech innovation</strong>. By merging advanced technology with trust, transparency, and customer care, AYORemit has set new benchmarks in the MSB sector.
        </p>
        <p><strong>
          That is why AYORemit AU Pty Ltd is the proud winner of the MSB of the Year (Global) Award at the Brit Fintech Awards 2025.
          </strong>
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

export default AyoremitWinnerDetails2025;
