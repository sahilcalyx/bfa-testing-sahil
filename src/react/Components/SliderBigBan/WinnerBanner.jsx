import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WinnerBanner = () => {
  const navigate = useNavigate();
  const [minHeight, setMinHeight] = useState("600px");
  const [animate, setAnimate] = useState(false); // ✅ control animation timing

  // Adjust height for screen sizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1600) {
        setMinHeight("800px");
      } else if (window.innerWidth >= 1024) {
        setMinHeight("500px");
      } else {
        setMinHeight("230px");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Delay animation until mount to prevent flicker
  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const styles = {
    sliderContainer: {
      width: "100%",
      overflow: "hidden",
      position: "relative",
    },
    slide: {
      minHeight: minHeight,
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
      marginTop: "70px",
      transition: "background-image 0.5s ease-in-out",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,0.3), rgba(0,0,0,0.9))",
      zIndex: 1,
    },
    contentWrapper: {
      position: "absolute",
      bottom: "40px",
      left: "50%",
      transform: animate
        ? "translateX(-50%) translateY(0)"
        : "translateX(-50%) translateY(40px)", // ✅ starts below and fades up
      opacity: animate ? 1 : 0,
      transition: "all 1s ease-in-out",
      zIndex: 2,
      textAlign: "center",
      width: "90%",
      padding: "0 20px",
      color: "#fff",
    },
    glassBox: {
      display: "inline-block",
      padding: "20px 45px",
      borderRadius: "18px",
      background: "rgba(255, 255, 255, 0.12)",
      backdropFilter: "blur(14px) saturate(180%)",
      WebkitBackdropFilter: "blur(14px) saturate(180%)",
      border: "1px solid rgba(255, 255, 255, 0.25)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      transition: "all 0.3s ease-in-out",
    },
    mainTitle: {
      color: "#c8102e",
      fontSize: "64px",
      fontWeight: "700",
      lineHeight: "1.1",
      marginBottom: "10px",
    },
    highlight: {
      fontSize: "46px",
      fontWeight: "600",
      color: "#FFFFFF",
      margin: 0,
      lineHeight: "1.1",
    },
  };

  const slides = [
    {
      image: "../assets/img/banner-slider/groupBanner.webp",
      title: "CONGRATULATIONS",
      highlight: "TO ALL THE WINNERS",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <div style={styles.sliderContainer}>
      <div
        style={{
          ...styles.slide,
          backgroundImage: `url(${slide.image})`,
        }}
      >
        <div style={styles.overlay}></div>

        {/* ✅ Animation fixed here */}
        <div style={styles.contentWrapper} className="contentWrapper">
          <div style={styles.glassBox} className="glassBox">
            <h1 style={styles.mainTitle}>{slide.title}</h1>
            <h2 style={styles.highlight}>{slide.highlight}</h2>
          </div>
        </div>
      </div>

      {/* Keep your existing CSS */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* ================== RESPONSIVE ================== */

        @media (max-width: 1200px) {
          .contentWrapper { bottom: 35px !important; }
          .glassBox { padding: 18px 38px !important; }
          h1 { font-size: 52px !important; }
          h2 { font-size: 36px !important; }
        }

        @media (max-width: 992px) {
          .contentWrapper { bottom: 30px !important; width: 95% !important; }
          .glassBox { padding: 16px 30px !important; border-radius: 14px !important; backdrop-filter: blur(12px) !important; }
          h1 { font-size: 42px !important; }
          h2 { font-size: 28px !important; }
        }

        @media (max-width: 768px) {
          .contentWrapper { bottom: 25px !important; width: 94% !important; }
          .glassBox {
            padding: 14px 22px !important;
            border-radius: 12px !important;
            background: rgba(0, 0, 0, 0.45) !important;
            backdrop-filter: blur(10px) saturate(150%) !important;
          }
          h1 { font-size: 28px !important; margin-bottom: 5px !important; }
          h2 { font-size: 20px !important; }
        }

        @media (max-width: 480px) {
          .contentWrapper { bottom: 18px !important; width: 92% !important; }
          .glassBox {
            padding: 10px 18px !important;
            border-radius: 10px !important;
            background: rgba(0, 0, 0, 0.5) !important;
            backdrop-filter: blur(8px) saturate(120%) !important;
          }
          h1 { font-size: 22px !important; }
          h2 { font-size: 16px !important; }
        }

        @media (max-width: 360px) {
          .contentWrapper { bottom: 15px !important; width: 90% !important; }
          .glassBox { padding: 8px 14px !important; border-radius: 8px !important; }
          h1 { font-size: 18px !important; }
          h2 { font-size: 14px !important; }
        }
      `}</style>
    </div>
  );
};

export default WinnerBanner;
