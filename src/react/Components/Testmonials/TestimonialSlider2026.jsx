import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// `image` is optional. When a company logo is not available yet, a branded
// initials badge is shown instead. `logoBg` sets the tile colour behind a logo.
const testimonials = [
  {
    id: 1,
    text: "Nice event",
    name: "Mustapha Ajisafe",
    designation: "(Disbuz by Payceler)",
    image: "/assets/img/attendee-logos/disbuz.png",
  },
  {
    id: 2,
    text: "Many thanks great evening met few colleagues after long time",
    name: "Mohammad",
    designation: "(Asiana Remit)",
    initials: "AR",
  },
  {
    id: 3,
    text: "It was a fantastic event and a great evening connecting with everyone in Fintech and MSB space. Looking forward to the next one!",
    name: "Ayobami Adeagbo",
    designation: "(Ifepay Services)",
    image: "/assets/img/attendee-logos/ifepay.png",
  },
  {
    id: 4,
    text: "A fabulous night had by all, plenty of worthy nominees and winners and a great evening in a lovely venue!",
    name: "Chris Sheath",
    designation: "(Emerchantpay)",
    image: "/assets/img/attendee-logos/Emarchantpay.png",
  },
  {
    id: 5,
    text: "Was great last night, good work",
    name: "Moshe Freed",
    designation: "(Lion Global Money Limited)",
    initials: "LG",
  },
  {
    id: 6,
    text: "Very beautiful Vishal, congratulations! The event was amazing.",
    name: "SAMPAIO MARQUES",
    designation: "(GCC Exchange UK Limited)",
    image: "/assets/img/attendee-logos/Group%202.png",
  },
  {
    id: 7,
    text: "The evening was incredible.\nThe organization was spotless.",
    name: "Maicon Caltiano",
    designation: "(Decta)",
    image: "/assets/img/winner-logos-26/Winners-logo-white/Decta.png",
    logoBg: "#111111",
  },
  {
    id: 8,
    text: "Enjoyed the event and came away having had some good conversations.",
    name: "Billy Coplestone Grant",
    designation: "(Corpay)",
    initials: "CP",
  },
  {
    id: 9,
    text: "It was a great event - well done to all involved!",
    name: "Sam Trutch",
    designation: "(GBG)",
    image: "/assets/img/attendee-logos/gbg.png",
  },
  {
    id: 10,
    text: "We were impressed by the level of event preparation and the overall atmosphere.\nWe thank you for this incredible evening and your attention to every detail.",
    name: "Katy Matiashvili",
    designation: "(Sends)",
    image: "/assets/img/attendee-logos/sends.png",
  },
];

const avatarBoxStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  border: "1px solid #eee",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const TestimonialSlider2026 = () => {
  const sliderRef = useRef(null);
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
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
                <div className="cs-section_subtitle cs-primary_font cs-medium cs-accent_color">
                  Testimonials{" "}
                  <span style={{ color: "#c8102e" }}>
                    <strong> 2026</strong>
                  </span>
                </div>
                <h2 className="cs-section_title cs-extra_bold">
                  Celebrating the <br />
                  <span
                    className="cs-extra_bold cs-accent_color"
                    style={{ color: "#c8102e" }}
                  >
                    experiences
                  </span>
                </h2>
                <h2 className="cs-section_title cs-extra_bold">
                  of our guests
                </h2>
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
              {testimonials.map((testimonial, index) => {
                const isExpanded = expandedIndexes.includes(index);
                const shouldTruncate = testimonial.text.length > 220;
                const shortText = testimonial.text.slice(0, 220) + "...";

                return (
                  <div className="cs-slide" key={testimonial.id}>
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
                        <div className="cs-testimonial_avatar">
                          {testimonial.image ? (
                            <div
                              style={{
                                ...avatarBoxStyle,
                                background: testimonial.logoBg || "#ffffff",
                                padding: "8px",
                              }}
                            >
                              <img
                                src={testimonial.image}
                                alt={testimonial.designation}
                                loading="lazy"
                                style={{
                                  objectFit: "contain",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: 0,
                                }}
                              />
                            </div>
                          ) : (
                            <div
                              style={{
                                ...avatarBoxStyle,
                                background:
                                  "linear-gradient(135deg, #c8102e, #8f0a20)",
                                color: "#fff",
                                fontWeight: 700,
                                fontSize: testimonial.initials.length > 2 ? 24 : 30,
                                letterSpacing: "1px",
                              }}
                              aria-label={testimonial.designation}
                            >
                              {testimonial.initials}
                            </div>
                          )}
                        </div>
                        <div className="cs-testimonial_meta">
                          <h3 className="cs-testimonial_avatar_name">
                            {testimonial.name}
                          </h3>
                          <div className="cs-testimonial_avatar_designation">
                            {testimonial.designation}
                          </div>
                        </div>
                      </div>

                      {/* Text with Read More */}
                      <div
                        className="cs-testimonial_text"
                        style={{
                          textDecoration: "none",
                          textTransform: "none",
                          position: "relative",
                        }}
                      >
                        <div style={{ whiteSpace: "pre-line" }}>
                          {isExpanded || !shouldTruncate
                            ? testimonial.text
                            : shortText}
                        </div>

                        {shouldTruncate && (
                          <button
                            className="read-more-btn"
                            onClick={() => toggleExpand(index)}
                            style={{
                              color: "#c8102e",
                              background: "none",
                              border: "none",
                              fontWeight: "600",
                              padding: "0",
                              marginTop: "6px",
                              cursor: "pointer",
                            }}
                          >
                            {isExpanded ? "Read Less" : "Read More"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>

            {/* Custom arrows */}
            <div className="cs-slider_arrows cs-style1 cs-type6 cs-center">
              <div
                className="cs-left_arrow cs-center cs-accent_color_2 slick-arrow"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <i className="fas fa-angle-left" />
              </div>
              <div
                className="cs-right_arrow cs-center cs-accent_color_2 slick-arrow"
                onClick={() => sliderRef.current.slickNext()}
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

export default TestimonialSlider2026;
