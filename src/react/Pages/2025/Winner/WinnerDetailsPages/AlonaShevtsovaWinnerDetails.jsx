import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import confetti from "canvas-confetti"; // 🎉 Import confetti

const AlonaShevtsovaWinnerDetails = () => {
  const slides = [
    {
      image: "../assets/img/banner-slider/Banner.png",
      title: "Woman Entrepreneur in FinTech 2025",
      subtitle: "Alona Shevtsova (Sends)",
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
                  src="../assets/img/winners2025-logs-banner/Sends-winner25-banner.png"
                  className="mt-5 mb-5"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    maxHeight: "400px",
                    maxWidth: "300px",
                     filter: "invert(1) brightness(2)",
    WebkitFilter: "invert(1) brightness(2)",
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
            Alona Shevtsova (Sends):{" "}
            <span className="text-dark">
              Woman Entrepreneur in FinTech 2025
            </span>
          </strong>
        </h3>

        <h4 className="mt-4">Visionary Leader in Global FinTech</h4>
        <p>
          Alona Shevtsova is a visionary leader in the global fintech space and
          the Founder & CEO of
          <strong> SMARTFLOW PAYMENTS LIMITED (Sends)</strong>, a licensed
          Electronic Money Institution since 2017. With extensive expertise in
          financial technologies, transactional payments, and business
          operations, Alona has successfully built Sends into a trusted
          all-in-one solution provider for money transfers, multi-currency
          accounts, acquiring services, and global transactions in over 180
          countries.
        </p>
        <p>
          Her leadership has fostered collaborations with global payment giants
          including
          <strong>
            {" "}
            Mastercard, Visa, China Union Pay, Apple Pay, Google Pay, and Garmin
            Pay
          </strong>
          , ensuring innovation, security, and seamless user experiences across
          her fintech solutions.
        </p>

        <h4 className="mt-4">Key Features of Alona’s Leadership</h4>
        <ul className="key-features">
          <li>
            <strong>Fintech Innovation:</strong> Pioneered Sends as a
            multi-currency platform delivering fast, secure transactions and
            competitive exchange solutions.
          </li>
          <li>
            <strong>Strategic Partnerships:</strong> Built direct integrations
            with major global payment systems, ensuring reliability and growth
            scalability.
          </li>
          <li>
            <strong>CSR & Humanitarian Focus:</strong>
            <ul>
              <li>
                Founded the <strong>Leo Foundation</strong>, supporting over 500
                families affected by war.
              </li>
              <li>
                Coordinated humanitarian aid during the Russian invasion of
                Ukraine, providing food, clean water, education, and medical
                supplies to thousands.
              </li>
              <li>
                Delivered more than <strong>4,000 aid kits</strong> and{" "}
                <strong>1,000+ sets of essential equipment</strong>
                to families and military personnel.
              </li>
            </ul>
          </li>
          <li>
            <strong>Corporate Social Responsibility Leadership:</strong>{" "}
            Designed CSR strategies within Sends to promote financial inclusion,
            sustainability, and community development.
          </li>
          <li>
            <strong>Employee Empowerment:</strong> Introduced volunteer programs
            that logged over
            <strong> 1,000 hours</strong> in education, disaster relief, and
            environmental initiatives.
          </li>
        </ul>

        <h4 className="mt-4">Why Alona?</h4>
        <p>
          Alona stands out as a fintech entrepreneur because she combines
          business excellence with social responsibility. Her work is not
          limited to advancing digital payments; she actively uses fintech
          innovation as a tool for social impact. From driving financial
          inclusion through Sends to supporting communities in crisis, her
          leadership reflects a balance of profit, purpose, and people.
        </p>

        <h4 className="mt-4">Recognition</h4>
        <ul>
          <li>
            Named among the{" "}
            <strong>Top 50 Most Influential Women in FinTech 2022</strong>.
          </li>
          <li>
            Speaker at leading fintech events, including{" "}
            <strong>Money20/20 Amsterdam</strong> and{" "}
            <strong>PAY360 London (2025)</strong>, sharing panels with
            executives from Monzo and Uber Payments.
          </li>
          <li>
            Recognized for building Sends into a trusted European fintech brand
            with{" "}
            <strong>
              €1.8 billion annual turnover, 50 million yearly transactions,
            </strong>{" "}
            and <strong>€15 million annual revenue</strong>.
          </li>
        </ul>

        <h4 className="mt-4">Conclusion</h4>
        <p>
          Alona Shevtsova exemplifies what it means to be a{" "}
          <strong>Woman Entrepreneur in FinTech</strong>—combining innovation,
          resilience, and compassion. Her ability to scale Sends into a leading
          financial services platform while dedicating resources to humanitarian
          aid, social responsibility, and community empowerment makes her a true
          role model.
        </p>
        <h5 className="text-center">
          <strong>That is why Alona Shevtsova is the well-deserved winner of the “Woman Entrepreneur in FinTech of the Year” award.</strong>
        </h5>
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

export default AlonaShevtsovaWinnerDetails;
