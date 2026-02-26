import React, { useEffect, useState } from "react";
import { ArrowBack } from "@mui/icons-material"; // Replace with your correct icon import

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past 120% of viewport height
      if (window.scrollY > window.innerHeight * 1.2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        style={{
          position: "fixed",
          right: "30px",
          bottom: "80px",
          background: "#000",
          color: "#fff",
          padding: "10px",
          borderRadius: "50%",
          zIndex: "999999",
          cursor: "pointer",
        }}
      >
        <ArrowBack style={{ transform: "rotate(90deg)" }} />
      </div>
    )
  );
};

export default ScrollToTopButton;
