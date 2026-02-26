import React from "react";
import Slider from "react-slick";

// Add more sponsor images as needed

function SponsorsSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed for auto-scrolling
    arrows: false, // Hides navigation arrows
    dots: false, // Hides dots
    responsive: [
      {
        breakpoint: 1024, // For tablet screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // For small mobile screens
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="sponsors-slider-container" style={{cursor: 'grab'}}>
      <Slider {...settings}>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/1.png"
            alt="Sponsor 1"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/2.png"
            alt="Sponsor 2"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/3.png"
            alt="Sponsor 3"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/4.png"
            alt="Sponsor 3"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/5.png"
            alt="Sponsor 3"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/6.png"
            alt="Sponsor 3"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/7.png"
            alt="Sponsor 3"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/8.png"
            alt="Sponsor 3"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/9.png"
            alt="Sponsor 3"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/10.png"
            alt="Sponsor 3"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/11.png"
            alt="Sponsor 3"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/12.png"
            alt="Sponsor 3"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/13.png"
            alt="Sponsor 3"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/14.png"
            alt="Sponsor 3"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/15.png"
            alt="Sponsor 3"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/16.png"
            alt="Sponsor 3"
          />
        </div>
        <div>
          <img
            src="../assets/img/banner-slider/slidder/17.png"
            alt="Sponsor 3"
          />
        </div>
        {/* Add more sponsor logos here */}
      </Slider>
    </div>
  );
}

export default SponsorsSlider;
