import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti"; // 🎉 Confetti library
const Winner2025 = () => {
  const [activeTab, setActiveTab] = useState("fintech");
 // 🎊 Confetti Effect
  useEffect(() => {
    // Launch a burst when page loads
    const end = Date.now() + 3 * 1000;

    const colors = ["#c8102e", "#FFFACD", "#c8102e", "#fff", "#FFA500"]; // gold, pink, cyan, etc.

    // const frame = () => {
    //   confetti({
    //     particleCount: 6,
    //     startVelocity: 20,
    //     spread: 360,
    //     ticks: 10,
    //     origin: {
    //       x: Math.random(),
    //       y: Math.random() - 0.2,
    //     },
    //     colors,
    //     shapes: ["star", "circle"],
    //     scalar: 1.2,
    //     zIndex: 2000,
    //   });

    //   if (Date.now() < end) {
    //     requestAnimationFrame(frame);
    //   }
    // };
    // frame();

    // Ribbons burst (larger)
    const interval = setInterval(() => {
      confetti({
        particleCount: 80,
        angle: 10,
        spread: 100,
        origin: { x: 0 },
        colors: ["#FFD700", "#c8102e", "#F9BB1D"],
        ticks: 50,
        scalar: 1.6,
      });
      confetti({
        particleCount: 80,
        angle: 180,
        spread: 100,
        origin: { x: 1 },
        colors: ["#FFD700", "#c8102e", "#F9BB1D"],
        ticks: 50,
        scalar: 1.6,
      });
    }, 700);

    // Stop after a few seconds
    setTimeout(() => clearInterval(interval), 1500);
}, [activeTab]);


  // =================== Awards Data ===================
  const fintechAwards = [
    {
      title: "Account 2 Account Payment Processor of the Year 2025",
      name: "Volume",
      img: "/assets/img/winners2025-logs-banner/volume-winner25.png",
      link: "/award-winners-2025/volume-account2account-payment-processor-2025",
    },
    {
      title: "Payment Innovator of the Year 2025",
      name: "Fast Track Money",
      img: "/assets/img/winners2025-logs-banner/FastTrack-winner25.png",
      link: "/award-winners-2025/fast-track-payment-innovator-2025",
    },
    {
      title: "Pay-Out Innovator of the Year 2025",
      name: "Disbuz",
      img: "/assets/img/winners2025-logs-banner/Disbuz-winner25.png",
      link: "/award-winners-2025/disbuz-pay-out-innovator-2025",
    },
    {
      title: "B-A-A-S Innovator of the Year 2025",
      name: "Leatherback ",
      img: "/assets/img/winners2025-logs-banner/Leatherback-winner25.png",
      link: "/award-winners-2025/Leatherback-B-A-A-S-innovator-2025",
    },
    {
      title: "Payment Acquirer of the Year 2025",
      name: "eMerchantpay ",
      img: "/assets/img/winners2025-logs-banner/Emerchant-winner25.png",
      link: "/award-winners-2025/emerchantpay-payment-acquirer-2025",
    },
    {
      title: "Startup of the Year 2025",
      name: "Ifepay",
      img: "/assets/img/winners2025-logs-banner/Efepay-winner25.png",
      link: "/award-winners-2025/ifepay-startup-of-the-year-2025",
    },
    {
      title: "Woman Entrepreneur in FinTech of the Year 2025",
      name: "Alona Shevtsova (Sends)",
      img: "/assets/img/winners2025-logs-banner/sends-winner25.png",
      link: "/award-winners-2025/alona-shevtsova-woman-entrepreneur-in-finTech-2025",
    },
    {
      title: "Anti-Fraud Innovator of the Year 2025",
      name: "Sumsub",
      img: "/assets/img/winners2025-logs-banner/Sumsub-winner25.png",
      link: "/award-winners-2025/sumsub-anti-fraud-innovator-2025",
    },
    {
      title: "ID Verification Innovator of the Year 2025", 
      name: "Shufti Pro",
      img: "/assets/img/winners2025-logs-banner/Shufti-winner25.png",
      link: "/award-winners-2025/shufti-pro-id-verification-innovator-2025",
    },
    {
      title: "FinTech of the Year 2025",
      name: "Kani Payments",
      img: "/assets/img/winners2025-logs-banner/Kani-winner25.png",
      link: "/award-winners-2025/kani-payments-finTech-of-the-year-2025",
    },
  ];

  const msbAwards = [
    {
      title: "Compliance Innovator MSB of the Year 2025",
      name: "Kmbal",
      img: "/assets/img/winners2025-logs-banner/Kmbal-winner25.png",
      link: "/award-winners-2025/kmbal-compliance-innovator-of-the-year-2025",
    },
    {
      title: "Best in Customer Service MSB of the Year 2025",
      name: "MyRemit",
      img: "/assets/img/winners2025-logs-banner/Myremit-winner25.png",
      link: "/award-winners-2025/myremit-best-in-customer-service-msb-2025",
    },
    {
      title: "Remittance Innovator MSB of the Year 2025",
      name: "Belyfted",
      img: "/assets/img/winners2025-logs-banner/Belyfted-winner25.png",
      link: "/award-winners-2025/belyfted-remittance-innovator-msb-2025",
    },
    {
      title: "Progressive Money Exchanger MSB of the Year 2025",
      name: "Travel Cashier",
      img: "/assets/img/winners2025-logs-banner/TravelCashier-winner25.png",
      link: "/award-winners-2025/travel-cashier-ltd-money-exchanger-msb-of-the-year-2025",
    },
    {
      title: "MSB Disruptor of the Year 2025",
      name: "Leftover Currency",
      img: "/assets/img/winners2025-logs-banner/Leftover-winner25.png",
      link: "/award-winners-2025/leftover-msb-disruptor-of-the-year-2025",
    },
    {
      title: "MSB Store of the Year 2025",
      name: "Mercury Danati",
      img: "/assets/img/winners2025-logs-banner/MercuryDanati-winner25.png",
      link: "/award-winners-2025/mercury-danati-ltd-msb-store-of-the-year-2025",
    },
    {
      title: "MSB App of the Year 2025",
      name: "Redsea Money Transfer",
      img: "/assets/img/winners2025-logs-banner/Redsea-winner25.png",
      link: "/award-winners-2025/red-sea-money-transfer-msb-app-of-the-year-2025",
    },
    {
      title: "MSB of the Year 2025",
      name: "Teeparam",
      img: "/assets/img/winners2025-logs-banner/Teeparam-winner25.png",
      link: "/award-winners-2025/teeparam-exchange-ltd-msb-of-the-year-2025",
    },
  ];

  const globalAwards = [
    {
      title: "FinTech of the Year 2025",
      name: "Chrisborough Solutions",
      img: "/assets/img/winners2025-logs-banner/Chrisborough-winner25.png",
      link: "/award-winners-2025/chrisborough-fintech-of-the-year-2025",
     
    },
    {
      title: "MSB of the Year 2025",
      name: "AYORemit",
      img: "/assets/img/winners2025-logs-banner/Ayoremit-winner25.png",
       link: "/award-winners-2025/ayoremit-msb-of-the-year-2025",
     
    },
  ];

  // =================== Render Function ===================
  const renderAwards = (awards) => (
    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="row g-4 justify-content-center"
    >
      {awards.map((award, idx) => (
        <div className="col-sm-6 col-md-4" key={idx}>
          <NavLink to={award.link} className="text-decoration-none">
            <div className="award-card h-100 animate__animated animate__fadeInUp">
              <img src={award.img} alt={award.name} style={{ borderRadius: "20px" }}/>
              <div className="award-card-body">
                <h3 className="text-center ">{award.title}</h3>
                {/* <p className="text-center" >{award.name}</p> */}
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </motion.div>
  );

  return (
    <div>
      <Helmet>
        <title>Winner of the Brit Fintech Awards 2025</title>
        <meta
          name="description"
          content="Explore the Winner2025s of the Brit Fintech Awards 2024 celebrating innovation across the UK financial technology sector."
        />
      </Helmet>

      <style>
        {`
          .Winner2025-hero-title  {
            font-size: 3rem;
            font-weight: 800;
            text-transform: uppercase;
            margin-bottom: 20px;
            background: linear-gradient(90deg, #c8102e, #fff, #c8102e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          /* Tabs */
          .tabs-container {
            margin-top: 50px;
            text-align: center;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
          }
          .tab-btn {
            background: transparent;
            border: 2px solid #c8102e;
            color: #c8102e;
            padding: 12px 25px;
            border-radius: 30px;
            font-weight: 600;
            transition: all 0.3s ease;
            flex: 1 1 auto;
            min-width: 180px;
            font-size: 1.4rem;
          }
          .tab-btn.active {
          background: linear-gradient(90deg, #000000ff, #c8102e, #000000ff);
            color: #fffefeff !important;
            border: none;
            box-shadow: 0 0 15px rgba(86, 87, 87, 0.6);
          }
          .tab-btn:hover {
            transform: translateY(-3px);
          }

          .award-section {
            padding: 60px 20px;
          }
          .award-card {
            border-radius: 16px;
            background: #fff;
            box-shadow: 0 6px 18px rgba(0,0,0,0.12);
            transition: all 0.3s ease;
          }
          .award-card:hover {
            transform: translateY(-10px) scale(1.03);
          }
          .award-card img {
            width: 100%;
            // max-height: 180px;
            object-fit: contain;
            // border-bottom: 3px solid #c8102e;
          }
          .award-card-body {
            padding: 20px;
          }
          .award-card-body h3 {
            font-size: 1.2rem;
            font-weight: 600;
            color: #222;
          }
          .award-card-body p {
            margin: 0;
            font-size: 1rem;
            font-weight: 600;
            background:  #c8102e;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>

      {/* Hero Section (untouched from your code) */}
      <div className="cs-height_90 cs-height_lg_80" />
      <div
        className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage: 'url("/assets/img/event-conference/hero-img.jpg")',
        }}
      >
        <div className="cs-hero_pattern cs-hover_layer3">
          <div className="cs-hero_pattern_in cs-bg_parallax" />
        </div>
        <div
          className="container wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="cs-hero_text text-left">
            <h1 className="Winner2025-hero-title cs-hero_title cs-extra_bold cs-white text-uppercase pb-0 mb-2 text-center">
              Winners of Brit Fintech Awards 2025
            </h1>
            <div className="cs-height_10 cs-height_lg_0" />
          </div>
        </div>
        <div
          className="cs-hero_img cs-bg"
          data-src="/assets/img/event-conference/hero-img.jpg"
          style={{
            backgroundImage:
              'url("/assets/img/event-conference/hero-img.jpg")',
          }}
        >
          <div className="cs-hero_img_circle" />
        </div>
      </div>
      <div className="cs-height_70 cs-height_lg_75" />

      {/* Tabs Section */}
      <div className="container tabs-container">
        <button
          className={`tab-btn ${activeTab === "fintech" ? "active" : ""}`}
          onClick={() => setActiveTab("fintech")}
        >
           Fintech Awards
        </button>
        <button
          className={`tab-btn ${activeTab === "msb" ? "active" : ""}`}
          onClick={() => setActiveTab("msb")}
        >
           MSB Awards
        </button>
        <button
          className={`tab-btn ${activeTab === "global" ? "active" : ""}`}
          onClick={() => setActiveTab("global")}
        >
           Global Awards
        </button>
      </div>

      {/* Award Cards Section */}
      <section className="award-section">
        <div className="container">
          <AnimatePresence mode="wait">
            {activeTab === "fintech" && renderAwards(fintechAwards)}
            {activeTab === "msb" && renderAwards(msbAwards)}
            {activeTab === "global" && renderAwards(globalAwards)}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Winner2025;

 