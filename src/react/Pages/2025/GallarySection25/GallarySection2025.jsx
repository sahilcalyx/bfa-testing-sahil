import React, { useEffect } from "react";
import "lightgallery/css/lightgallery.css"; // Import LightGallery CSS
import lightGallery from "lightgallery"; // Import LightGallery JS
import { NavLink } from "react-router-dom";

const GallarySection2025 = () => {
  useEffect(() => {
    const galleryElement = document.querySelector(".cs-lightgallery");

    if (galleryElement) {
      const gallery = lightGallery(galleryElement, {
        selector: ".cs-lightbox-item",
        download: false,
        subHtmlSelectorRelative: true,
        speed: 300,
      });

      return () => {
        if (gallery) {
          gallery.destroy(true);
        }
      };
    }
  }, []);

  return (
    <div className="cs-flying_img_wrap cs-style9 cs-parallax mb-5">
      {/* Internal CSS */}
      <style>{`
        .lg-backdrop,
        .lg-outer {
          z-index: 9999 !important;
          transform: translate3d(0, 0, 0);
        }

        .lg-outer {
          background-color: rgba(0, 0, 0, 0.9);
          backface-visibility: hidden;
        }

        .lg-sub-html {
          font-size: 24px;
          color: #fff;
          padding: 10px;
          text-align: center;
          font-weight: bold;
        }

        .lg-close {
          cursor: pointer;
        }

        .lg-sub-html h4 {
          margin: 0;
          font-size: 21px;
          font-weight: bold;
          color: #ededff;
        }

        /* Hover zoom effect */
        .cs-gallery {
          transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
        }

        .cs-gallery:hover {
          transform: scale(1.05);
          filter: brightness(1.2);
        }

        .cs-gallery img {
          transition: opacity 0.6s ease-in-out;
          opacity: 1;
        }
      `}</style>

      {/* Flying Images */}
      <img
        src="../assets/img/event-conference/flying-img9.png"
        alt="Flying image"
        className="cs-flying_img cs-posiiton1 cs-to_left_up"
        loading="lazy"
      />
      <img
        src="../assets/img/event-conference/flying-img6.png"
        alt="Flying image"
        className="cs-flying_img cs-posiiton2 cs-to_up"
        loading="lazy"
      />
      <div className="cs-height_45 cs-height_lg_40"></div>

      {/* Section Heading */}
      <div
        className="container wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="0.2s"
      >
        <div className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase">
          <div className="cs-section_subtitle cs-primary_font cs-medium cs-accent_color">
            <strong>Special moments</strong>
          </div>
          <h2 className="cs-section_title cs-extra_bold" style={{ color: "#c8102e" }}>
            Photo Gallery 2025
          </h2>
        </div>
        <div className="cs-height_70 cs-height_lg_50"></div>
      </div>

      {/* Gallery Grid */}
      <div
        className="container wow fadeIn"
        data-wow-duration="1s"
        data-wow-delay="0.3s"
      >
        <div className="cs-isotop row cs-style1 cs-isotop_col_3 cs-has_gutter_30 cs-lightgallery">
          {[
            {
              initialSrc: "../assets/img/gallery2025/registration/5.webp",
              alt: "Registration",
              caption: "<h4>Registration</h4><p>Brit Fintech Awards UK 2025</p>",
            },
            {
              initialSrc: "../assets/img/gallery2025/venue/25.webp",
              alt: "Venue",
              caption: "<h4>Venue</h4><p>Brit Fintech Awards UK 2025</p>",
            },
            {
              initialSrc: "../assets/img/gallery2025/homesection/03.webp",
              alt: "Brit Fintech Awards UK 2025",
              caption:
                "<h4>Words that inspire. Vision that leads.</h4>",
            },
            {
              initialSrc: "../assets/img/gallery2025/keynote/1.webp",
              alt: "Key Note Speakers",
              caption:
                "<h4>Key Note Speakers</h4><p>Industry leaders share insights</p>",
            },
             {
              initialSrc: "../assets/img/gallery2025/homesection/02.webp",
              alt: "Key Note Speakers",
              caption:
                "<h4>Key Note Speakers</h4><p>Industry leaders share insights</p>",
            },
             {
              initialSrc: "../assets/img/gallery2025/homesection/01.webp",
              alt: "Discussion Panel",
              caption:
                "<h4>Discussion Panel</h4><p>Interactive discussion with experts</p>",
            },
             {
              initialSrc: "../assets/img/gallery2025/food-drinks/2.webp",
              alt: "Dinner",
              caption:
                "<h4>Dinner</h4><p>Networking and celebration over dinner</p>",
            },
           
          
            {
              initialSrc: "../assets/img/gallery2025/venue/13.webp",
              alt: "Brit Fintech Awards UK 2025",
              caption:
                "<h4>Brit Fintech Awards UK 2025</h4><p>Networking and Opportunity to connect with peers</p>",
            },
             {
              initialSrc: "../assets/img/gallery2025/networking/17.webp",
              alt: "Networking",
              caption:
                "<h4>Networking</h4><p>Opportunity to connect with peers</p>",
            },
           
          ].map((item, index) => (
            <div className="cs-isotop_item" key={index}>
              <a
                href={item.initialSrc}
                className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
                data-src={item.initialSrc}
                data-sub-html={item.caption}
              >
                <img
                  src={item.initialSrc}
                  alt={item.alt}
                  className="img-fluid"
                  loading="lazy"
                />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="cs-height_50 cs-height_lg_50"></div>
      <div className="text-center">
        <NavLink
          to="/photo-gallery-2025"
          className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg_2 cs-accent_border_2 cs-white cs-accent_bg_hover cs-white_hover cs-accent_border_hover"
        >
          More Photos
        </NavLink>
      </div>
      <div className="cs-height_0 cs-height_lg_80"></div>
    </div>
  );
};

export default GallarySection2025;
