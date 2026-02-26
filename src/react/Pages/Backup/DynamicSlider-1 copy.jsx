import React, { useState, useEffect } from "react";

const DynamicSliderVideo = () => {
  const slides = [
    {
      youtube:
        "https://www.youtube.com/embed/syHZBHQIk4o?autoplay=1&mute=1&loop=1&playlist=syHZBHQIk4o",
      title: <>Welcome to Brit FinTech Awards!</>,
    },
    // You can add more YouTube slides here if needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="cs-flying_img_wrap cs-style5 cs-parallax">
      <div
        className="cs-hero cs-style12 cs-center text-center cs-gradient_overlay_35 cs-parallax cs-hobble h46vh"
        style={{ background: "#000" }}
      >
        {slides[currentSlide].youtube && (
          <iframe
            width="100%"
            height="100%"
            src={slides[currentSlide].youtube}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              top: "66px",
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          ></iframe>
        )}

        <div className="cs-hero_pattern cs-hover_layer3"></div>

        <div
          className="container wow fadeIn  video-youtube-bfa"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <h1
            className="video-youtube-bfa cs-extra_bold cs-white text-uppercase sm-d-none"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <div className="mt-0">{slides[currentSlide].title}</div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DynamicSliderVideo;
