import React, { useEffect, useState } from "react";

const ImageSlider = () => {
  const images = [
    "../assets/img/gallery/1.jpg",
    "../assets/img/gallery/2.jpg",
    "../assets/img/gallery/3.jpg",
    "../assets/img/gallery/4.jpg",
    "../assets/img/gallery/5.jpg",
    "../assets/img/gallery/6.jpg",
    "../assets/img/gallery/7.jpg",
    "../assets/img/gallery/8.jpg",
    "../assets/img/gallery/9.jpg",
    "../assets/img/gallery/10.jpg",
    "../assets/img/gallery/11.jpg",
    "../assets/img/gallery/12.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="cs-counter_4_wrap cs-accent_bg_2 cs-parallax img-container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${images[currentIndex]})`,
        transition: "background-image 1s ease-in-out", // Add transition for smooth fade effect
        height: "600px",
      }}
    >
      <div
        className="text-center d-flex justify-content-center w-100"
        style={{ visibility: "hidden" }}
      >
        bfa winner
      </div>
    </div>
  );
};

export default ImageSlider;
