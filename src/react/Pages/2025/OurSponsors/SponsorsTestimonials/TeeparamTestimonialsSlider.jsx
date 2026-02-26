import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeeparamTestimonialsSlider = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: `Having used Teeparam logistics and travel services, engaged in providing Parcel Services, Package Tourism, Money Transfers and Flight Ticketing in UK for over three years, they have always offered efficient, reliable, fully automated and comprehensive courier and cargo solution.`,
      name: 'Brian Robinson ',
      designation: '- Bristol',
      image: '../assets/img/test-img/Mitch_Vyne.jpg',
    },
    {
      id: 2,
      text: `Teeparam is a very reliable and professional courier and cargo service company in UK, providing services like Parcel Services, Package Tourism, Money Transfers and Flight Ticketing who are always ready to help you with their flexible and cutting age solution to best of your satisfaction.`,
      name: 'Nick Hartley ',
      designation: '-Barmingham',
      image: '../assets/img/test-img/Shamil_Quick-currency.jpg',
    },
    
    {
    id: 4,
      text: `We are very obliged to Teeparam and its team for going the extra mile and working sincerely for delivering our important and confidential documents in timely and secured manner. That helped us to expedite our programme on-time. Great to have you as our reliable courier partner.`,
      name: 'Stella Macpherson',
      designation: '- London',
      image: '../assets/img/test-img/Shamil_Quick-currency.jpg',
    },
    {
    id: 5,
      text: `Great piece of work done by Teeparam for delivering money on-time so that my family members were deeply benefited. We feel really humbled and gratified the service offered. It’s really commendable and comprehensive in many ways.`,
      name: 'Maria Lisa',
      designation: '- London',
      image: '../assets/img/test-img/Shamil_Quick-currency.jpg',
    },
    // {
    //   id: 3,
    //   text: `Hi Vishal and Apurva, <br> Thank you for inviting us to the Brit Fintech Awards. It was a wonderful event, and we enjoyed being a part of it. <br> Thanks once again, and I look forward to future gatherings.`,
    //   name: 'A. Satheesh (Global Exchange Limited)',
    //   img: '../assets/img/profile/13.png',
    // },
    
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
                        <div className="cs-testimonial_avatar_designation">
                          {testimonial.designation}
                        </div>
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

export default TeeparamTestimonialsSlider;
