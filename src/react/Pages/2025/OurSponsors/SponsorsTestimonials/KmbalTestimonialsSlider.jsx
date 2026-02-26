import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const KmbalTestimonialsSlider = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: `Exchange rates beat everyone else’s. The service is professional and reliable—highly recommend!`,
      name: 'Khansa Kamal',
      
     
    },
    {
      id: 2,
      text: `Has become my trusted partner for all my currency exchange needs. Excellent rates and exceptional service.`,
      name: 'Joorey',
      
    
    },
    
    {
    id: 3,
      text: `It's quick, and the fees are lower than other services I've tried. Plus, their customer support is always ready to help.`,
      name: 'Suliman Siddiq',
      
   
    },
   
    {
     id: 4,
      text: `The process is smooth and hassle-free. I especially like their competitive exchange rates. Highly recommended!`,
      name: 'Ryan Ibrahim',
      
   
    },
    
    
  ];

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  };

  return (
    <div className="container">
      <div className="row">
        {/* Left Section */}
        <div
          className="col-lg-5 wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="cs-vertical_middle">
            <div className="cs-vertical_middle_in">
              <div
                className="cs-section_heading cs-style2"
                style={{ textAlign: "left" }}
              >
                <div className="cs-section_subtitle cs-primary_font cs-medium cs-accent_color">Our Testimonials</div>
                <h2 className="cs-section_title cs-extra_bold">
                   What Our  <br />
                  <span>
                    <b
                      className="cs-extra_bold cs-accent_color"
                      style={{ color: "#c8102e" }}
                    >
                     Customers 
                    </b>
                  </span>
                </h2>
                <h2 className="cs-section_title cs-extra_bold">Say</h2>
                <div className="cs-height_30 cs-height_lg_0"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section with Slider */}
        <div
          className="col-lg-7 wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="cs-shape_bg cs-style1">
            <div className="cs-height_100 cs-height_lg_10"></div>
            <Slider {...sliderSettings} ref={sliderRef} className="cs-slider">
              {testimonials.map((testimonial, index) => (
                <div className="cs-slide" key={index}>
                  <div
                    className="cs-testimonial cs-style1"
                    style={{ textAlign: "left" }}
                  >
                    <div
                      className="cs-testimonial_icon cs-accent_color"
                      style={{ rotate: "180deg" }}
                    >
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <div className="cs-testimonial_info">
                     
                      <div className="cs-testimonial_meta">
                        <h3 className="cs-testimonial_avatar_name">
                          {testimonial.name}
                        </h3>
                       
                      </div>
                    </div>
                    <div
                      style={{
                        textDecoration: "none",
                        textTransform: "capitalize",
                      }}
                      dangerouslySetInnerHTML={{ __html: testimonial.text }}
                    ></div>
                  </div>
                  
                </div>
                
              ))}
            </Slider>
            {/* Custom arrow controls */}
            <div className="cs-slider_arrows cs-style1 cs-type6 cs-center">
              <div
                className="cs-left_arrow cs-center cs-accent_color_2 slick-arrow"
                onClick={() => sliderRef.current.slickPrev()} // Previous slide
              >
                <i className="fas fa-angle-left" />
              </div>
              <div
                className="cs-right_arrow cs-center cs-accent_color_2 slick-arrow"
                onClick={() => sliderRef.current.slickNext()} // Next slide
              >
                <i className="fas fa-angle-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KmbalTestimonialsSlider;
