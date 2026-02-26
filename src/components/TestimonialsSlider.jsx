import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSlider = () => {
  const sliderRef = useRef(null); // Reference to access slider methods

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    loop: true,
    speed: 600,
    slidesToShow: 1,
    fade: true,
    dots: false,
    arrows: false, // Disable default arrows to use custom ones
  };

  const testimonials = [
    {
      id: 1,
      text: `Congratulations on a great event! I’ve had glowing feedback from the team. <br> Thank you from me, for all the hard work that went into creating it!!`,
      name: 'Mitch Broadstock (Vyne)',
      img: '../assets/img/test-img/Mitch_Vyne.jpg',
    },
    {
      id: 2,
      text: `Dear team Calyx, A big thank you for organizing this event. We enjoyed every minute of it. <br> You all have worked so hard meticulously with high attention to detail. <br> Big congratulations to you guys. Awaiting next year’s event.`,
      name: 'Shamil and Mubassir (Quick Currency Exchange Ltd)',
      img: '../assets/img/test-img/Shamil_Quick-currency.jpg',
    },
    // {
    //   id: 3,
    //   text: `Hi Vishal and Apurva, <br> Thank you for inviting us to the Brit Fintech Awards. It was a wonderful event, and we enjoyed being a part of it. <br> Thanks once again, and I look forward to future gatherings.`,
    //   name: 'A. Satheesh (Global Exchange Limited)',
    //   img: '../assets/img/profile/13.png',
    // },
    {
      id: 4,
      text: `Hi Vishal and team, <br> Congratulations on a great event last week. Great place, generous hospitality, and great to catch up and meet with old and new connections. <br> Thank you all very much! I think it was well received and the idea of the new trade association looks very promising.`,
      name: 'Harry Deans (Link FX)',
      img: '../assets/img/profile/20.png',
    },
    // {
    //   id: 5,
    //   text: `Hi Vishal, <br> I wanted to say a big thank you for arranging such a great event last night. It was so good to meet you and the team in person finally and to have so many positive conversations with existing and potentially new merchants.`,
    //   name: 'A. Satheesh (Global Exchange Limited)',
    //   img: '../assets/img/profile/13.png',
    // },
    {
      id: 6,
      text: `Thanks for the opportunity to participate in the event, and I hope we will have more in the future, and I will do my best to sponsor you.`,
      name: 'SAMPAIO MARQUES (GCC)',
      img: '../assets/img/test-img/Sampaio.jpg',
    }
  ];

  return (
    <div className="container wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s" style={{ cursor: 'grab' }}>
     <div style={{background: '#000', borderRadius: '20px 20px 0 0 '}}>
     <div className="cs-section_subtitle text-white cs-primary_font cs-medium cs-accent_color pt-3">
    testimonials 2024
  </div>
  <h2 className="cs-section_title cs-extra_bold text-white">Celebrating the experiences of our guests</h2>
     </div>
      <Slider ref={sliderRef} {...settings} className="cs-slider cs-style1 cs-remove_overflow">
        
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="cs-slide">
            <div className="cs-testimonial cs-style9">
              <div className="cs-testimonial_left">
                <div className="cs-testimonial_avatar">
                  <img src={testimonial.img} alt="Testimonial" className="cs-testimonial_img" />
                </div>
              </div>
              <div className="cs-testimonial_right cs-vertical_middle">
                <div className="cs-vertical_middle_in">
                  <div className="cs-testimonial_icon cs-accent_20_color"></div>
                  <div className="cs-testimonial_icon cs-accent_20_color">
                    <img src="../assets/img/event-conference/icons/icon1.png" alt="" />
                  </div>
                  <div className="cs-section_subtitle cs-primary_font cs-medium cs-accent_color text-left" style={{ textTransform: 'capitalize', letterSpacing: '0px', lineHeight: '1.6' }}>
                    <p dangerouslySetInnerHTML={{ __html: testimonial.text }}></p>
                  </div>
                  <h3 className="cs-testimonial_avatar_name cs-medium text-left">{testimonial.name}</h3>
                </div>
              </div>
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
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
