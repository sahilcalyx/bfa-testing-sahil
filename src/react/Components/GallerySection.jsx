import React, { useEffect } from "react";
import "lightgallery/css/lightgallery.css"; // Import LightGallery CSS
import lightGallery from "lightgallery"; // Import LightGallery JS
import { NavLink } from "react-router-dom";


const GallerySection = () => {
  useEffect(() => {
    const galleryElement = document.querySelector(".cs-lightgallery");

    if (galleryElement) {
      const gallery = lightGallery(galleryElement, {
        selector: ".cs-lightbox-item",
        download: false, // Disable download option
        subHtmlSelectorRelative: true, // Ensure captions show below the images
        speed: 300, // Adjust for better performance
      });

      return () => {
        if (gallery) {
          gallery.destroy(true);
        }
      };
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const images = Array.from(document.querySelectorAll(".cs-gallery img"));
      if (images.length > 1) {
        const lastImageSrc = images[images.length - 1].src;

        // Add flash class to trigger white background effect
        images.forEach((img) => {
          img.classList.add("flash");
        });

        // Shift all images src down by one position
        for (let i = images.length - 1; i > 0; i--) {
          images[i].src = images[i - 1].src;
        }

        // Set the src of the first image to the last image's src
        images[0].src = lastImageSrc;

        // Remove flash class after the transition
        setTimeout(() => {
          images.forEach((img) => {
            img.classList.remove("flash");
          });
        }, 300); // Match the CSS animation duration
      }
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cs-flying_img_wrap cs-style9 cs-parallax">
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

        .cs-gallery {
          transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
        }

        .cs-gallery:hover {
          transform: scale(1.05);
          filter: brightness(1.2);
        }

        @keyframes flashEffect {
          0% {
            background-color: white;
            opacity: 0.8;
          }
          50% {
            background-color: white;
            opacity: 1;
          }
          100% {
            background-color: transparent;
            opacity: 1;
          }
        }

        .cs-gallery img.flash {
          animation: flashEffect 0.3s ease-in-out;
        }
      `}</style>

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
      <div
        className="container wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="0.2s"
      >
        <div className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase">
          <div className="cs-section_subtitle cs-primary_font cs-medium cs-accent_color">
            Special moments
          </div>
          <h2 className="cs-section_title cs-extra_bold">  Photo Gallery 2024 </h2>
        </div>
        <div className="cs-height_70 cs-height_lg_50"></div>
      </div>

      <div
        className="container wow fadeIn"
        data-wow-duration="1s"
        data-wow-delay="0.3s"
      >
        <div className="cs-isotop row cs-style1 cs-isotop_col_3 cs-has_gutter_30 cs-lightgallery">
          {[
            {
              initialSrc: "../assets/img/gallery/register-home.jpg",
              alt: "Registration",
              caption: "<h4>Registration</h4><p>Brit Fintech Awards UK 2024</p>",
            },
            {
              initialSrc: "../assets/img/gallery/key-note/4.jpg",
              alt: "Key Note Speakers",
              caption: "<h4>Key Note Speakers</h4><p>Industry leaders share insights</p>",
            },
            {
              initialSrc: "../assets/img/gallery/Networking.jpg",
              alt: "Networking",
              caption: "<h4>Networking</h4><p>Opportunity to connect with peers</p>",
            },
            {
              initialSrc: "../assets/img/gallery/10.jpg",
              alt: "Discussion Panel",
              caption: "<h4>Discussion Panel</h4><p>Interactive discussion with experts</p>",
            },
            {
              initialSrc: "../assets/img/gallery/bfa-winner.jpg",
              alt: "Awards Ceremony",
              caption: "<h4>Awards Ceremony</h4><p>Recognising the best in Fintech and MSB</p>",
            },
            {
              initialSrc: "../assets/img/gallery/Dinner.jpg",
              alt: "Dinner",
              caption: "<h4>Dinner</h4><p>Networking and celebration over dinner</p>",
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
     
      <div className="cs-height_50 cs-height_lg_50"></div>
      <div className="text-center">
        <NavLink
          to="/photo-gallery-2024"
          className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg_2 cs-accent_border_2 cs-white cs-accent_bg_hover cs-white_hover cs-accent_border_hover"
        >
          More Photos
        </NavLink>
      </div>
      <div className="cs-height_0 cs-height_lg_80"></div>
    </div>
  );
};

export default GallerySection;
