import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const VinyakSlider = () => {
    const slides = [
        {
          title: "Industry recognition and credibility",
          icon: "fa-star",
        },
        {
          title: "Increased visibility and media exposure",
          icon: "fa-star",
        },
        {
          title: "Competitive advantage in the market",
          icon: "fa-star",
        },
        {
          title: "Access to funding and investment opportunities",
          icon: "fa-star",
        },
        {
          title: "Valuable networking and collaboration prospects",
          icon: "fa-star",
        },
    ];
    

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 2 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 2 ? 0 : prevIndex + 1
      );
    } else if (info.offset.x > 100) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 2 : prevIndex - 1
      );
    }
  };

  return (
    <div className="slider-container">
      <motion.div
        className="slider"
        // drag="x"
        dragConstraints={{ left: -300, right: 300 }}
        // onDragEnd={handleDragEnd}
        style={{ x: `-${currentIndex * 50}%` }} // Adjust the position of the current slide
      >
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="slide"
            style={{
              opacity: index === currentIndex || index === currentIndex + 1 ? 1 : 0.5,
              pointerEvents: index === currentIndex || index === currentIndex + 1 ? 'all' : 'none'
            }}
          >
            <div className="card-body text-center d-flex flex-column gap-2 justify-content-center align-items-center">
              <i
                className={`fa ${slide.icon}`}
                style={{ fontSize: "40px", color: "#FFD700" }}
              ></i>
              <h4 className="mt-3">{slide.title}</h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default VinyakSlider;
