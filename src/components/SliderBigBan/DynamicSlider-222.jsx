import React, { useState, useEffect } from "react";

const DynamicSlider = () => {
  // Define the slides array inside the component
  const slides = [
    {
      image: "../assets/img/banner-slider/Vyne.webp",
      title: (
        <>
          Account2Account <br />
          Payment <br /> Processor 2024
        </>
      ),
      subtitle: "Vyne",
    },
    {
      image: "../assets/img/banner-slider/Volume.webp",
      title: (
        <>
          FinTech of the <br />
          Year 2024
        </>
      ),
      subtitle: "Volume",
    },

    {
      image: "../assets/img/banner-slider/Orbital.webp",
      title: <>Payment Innovator 2024</>,
      subtitle: "Orbital",
    },
    {
      image: "../assets/img/banner-slider/GBG.webp",
      title: (
        <>
          ID Verification <br />
          Innovator 2024
        </>
      ),
      subtitle: "GBG",
    },
    {
      image: "../assets/img/banner-slider/Sumsub.webp",
      title: <>Anti-Fraud Innovator 2024</>,
      subtitle: "Sumsub",
    },
    {
      image: "../assets/img/banner-slider/MTBS.webp",
      title: <>B-A-A-S Innovator 2024</>,
      subtitle: "MTBS",
    },
    {
      image: "../assets/img/banner-slider/transfer-rocket.webp",
      title: <>Pay-Out Innovator 2024</>,
      subtitle: "Transfer Rocket",
    },
    {
      image: "../assets/img/banner-slider/Blessed.webp",
      title: (
        <>
          Woman Entrepreneur <br />
          in FinTech 2024
        </>
      ),
      subtitle: "Blessed Exchange",
    },
    {
      image: "../assets/img/banner-slider/Belyfted.webp",

      title: (
        <>
          Startup of the <br /> Year 2024
        </>
      ),
      subtitle: "Belyfted",
    },
    {
      image: "../assets/img/banner-slider/Mercury.webp",
      title: <>Compliance Innovator 2024</>,
      subtitle: "Mercury Danati",
    },
    {
      image: "../assets/img/banner-slider/MyRemit.webp",
      title: (
        <>
          Best in Customer <br />
          Service MSB 2024
        </>
      ),
      subtitle: "My Remit",
    },
    {
      image: "../assets/img/banner-slider/super-transfer.webp",
      title: (
        <>
          Remittance Innovator <br />
          MSB 2024
        </>
      ),
      subtitle: "Super Transfer",
    },
    {
      image: "../assets/img/banner-slider/travel-cashier.webp",
      title: (
        <>
          Progressive Money <br />
          Exchanger MSB 2024
        </>
      ),
      subtitle: "Travel Cashier",
    },
    {
      image: "../assets/img/banner-slider/Teeparam.webp",
      title: (
        <>
          MSB of the <br />
          Year 2024
        </>
      ),
      subtitle: "Teeparam Exchange",
    },
    {
      image: "../assets/img/banner-slider/Redsea.webp",
      title: <>MSB Disruptor 2024</>,
      subtitle: "Red Sea Money Transfer",
    },
    {
      image: "../assets/img/banner-slider/KMoney.webp",
      title: (
        <>
          MSB App <br />
          2024
        </>
      ),
      subtitle: "KMoney",
    },
    {
      image: "../assets/img/banner-slider/Baaz.webp",
      title: <>MSB Store 2024</>,
      subtitle: "Baaz Money Exchange",
    },

    // Add more slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <div className="cs-flying_img_wrap cs-style5 cs-parallax">
      <img
        src="../assets/img/event-conference/flying-img1.png"
        alt="Flying image"
        className="cs-flying_img cs-posiiton1 cs-to_up"
      />
      <img
        src="../assets/img/event-conference/flying-img2.png"
        alt="Flying image"
        className="cs-flying_img cs-posiiton2 cs-to_up"
      />

      <div
        className="cs-hero cs-style12 cs-center text-center cs-gradient_overlay_35 cs-parallax cs-hobble"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`, // Dynamic background image
          backgroundPosition: "100% center",
          backgroundRepeat: "no-repeat",
          maxHeight: "600px",
          backgroundSize: "cover",
        }}
      >
        <div className="cs-hero_pattern cs-hover_layer3">
          <div
            className="cs-hero_pattern_in cs-bg_parallax"
            style={{
              backgroundImage:
                "url(../assets/img/event-conference/hero-pattern.png)",
            }}
          />
        </div>
        <div
          className="container wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="cs-hero_text text-left">
            <h1 className="cs-hero_title2 cs-extra_bold cs-white text-uppercase">
              {slides[currentSlide].title} {/* Dynamic title */}
              <div className="mt-0"></div>
            </h1>
            <h3
              className="text-white mt-3 p-1 celebration-text-banner text-center"
              style={{ maxWidth: "350px" }}
            >
              {slides[currentSlide].subtitle} {/* Dynamic subtitle */}
            </h3>
          </div>
        </div>
        <div className="cs-hero_img cs-bg">
          <div className="cs-hero_img_circle" />
        </div>
      </div>
    </div>
  );
};

export default DynamicSlider;
