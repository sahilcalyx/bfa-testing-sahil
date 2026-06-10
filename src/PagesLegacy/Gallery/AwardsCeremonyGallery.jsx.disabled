import React, { useEffect } from "react";
import "lightgallery/css/lightgallery.css"; // Import LightGallery CSS
import lightGallery from "lightgallery"; // Import LightGallery JS
import { NavLink } from "react-router-dom";

const AwardsCeremonyGallery = () => {
  useEffect(() => {
    // Initialize LightGallery
    const galleryElement = document.querySelector(".cs-lightgallery");

    const gallery = lightGallery(galleryElement, {
      selector: ".cs-lightbox-item",
      download: false, // Disable download option
      subHtmlSelectorRelative: true, // Ensure that the captions show below the images
    });

    return () => {
      if (gallery) {
        gallery.destroy(true);
      }
    };
  }, []);

  return (
    <>
      <div className="cs-flying_img_wrap cs-style9 cs-parallax">
        {/* Internal CSS */}
        <style>{`
  /* Ensure LightGallery modal is on top */
  .lg-backdrop,
  .lg-outer {
    z-index: 9999 !important; /* Ensure modal is above all other elements */
  }

  /* Ensure the modal has the proper background color */
  .lg-outer {
    background-color: rgba(0, 0, 0, 0.9); /* Dark background for the modal */
  }

  /* LightGallery caption styling */
  .lg-sub-html {
    font-size: 24px; /* Increase font size to 24px */
    color: #fff; /* White color for better readability */
    padding: 10px;
    text-align: center;
    font-weight: bold; /* Make the font bold */
  }

  /* Style for the close button to fix any double-click issues */
  .lg-close {
    cursor: pointer;
  }

  .lg-sub-html h4 {
    margin: 0;
    font-size: 21px;
    font-weight: bold;
    color: #ededff;
}
.cs-hero.cs-style12.cs-type1 {
    height: 235px !important;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    padding-bottom: 20px;}
`}</style>

<div
          className="cs-hero cs-style12 cs-type1 cs-center text-center  cs-parallax cs-hobble"
          
          style={{
            backgroundImage:
              'url("../assets/img/event-conference/hero-img.jpg")',
            height: "300px",
          }}
        >
          <div className="cs-hero_pattern cs-hover_layer3" style={{}}>
            <div
              className="cs-hero_pattern_in cs-bg_parallax"
            
             
            />
          </div>
          <div
            className="container wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.2s",
              animationName: "fadeInDown",
            }}
          >
       
            <div className="cs-hero_text text-left" >
            <h1 className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-0 mb-2" style={{marginTop: '60px !important'}}>
            Photo Gallery 2024
              
            </h1>
            {/* <p className="pb-0 mb-0 text-left text-white"> Let’s celebrate innovation together. 
            </p> */}
         
            <div className="cs-height_10 cs-height_lg_0" />
          </div>
          </div>
          <div
            className="cs-hero_img cs-bg"
            data-src="../assets/img/creative-agency/hero-img.jpg"
            style={{
              backgroundImage:
                'url("../assets/img/creative-agency/hero-img.jpg")',
            }}
          >
            <div className="cs-hero_img_circle" />
          </div>
        </div>

        <img
          src="../assets/img/event-conference/flying-img9.png"
          alt="Flying image"
          className="cs-flying_img cs-posiiton1 cs-to_left_up"
        />
        <img
          src="../assets/img/event-conference/flying-img6.png"
          alt="Flying image"
          className="cs-flying_img cs-posiiton2 cs-to_up"
        />
        <div className="cs-height_35 cs-height_lg_75"></div>
        <div
          className="container wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase">
            {/* <h2 className="cs-section_title cs-extra_bold">Photo Gallery </h2> */}
            <div className=" cs-primary_font cs-medium cs-accent_color">
              {/* Brit Fintech Awards UK 2024 */}
              <br />
              <div
                className="d-flex flex-small-column gap-2 "
                style={{
                  background: "#ddd",
                  padding: "10px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
              >
                <NavLink to="/photo-gallery-2024" className="font-gallery ">
                  All Photos
                </NavLink>
                <NavLink to="/register-awards-2024" className="font-gallery ">
                  Registration
                </NavLink>
                <NavLink to="/key-notes-gallery-2024" className="font-gallery ">
                  Key Note Speakers
                </NavLink>
                <NavLink to="/networking-gallery-2024" className="font-gallery">
                  Networking
                </NavLink>
                <NavLink to="/discussion-panel-2024" className="font-gallery">
                  Discussion Panel
                </NavLink>
                <NavLink
                  to="/awards-ceremoney-2024"
                  className="font-gallery active-gallery"
                >
                  Awards Ceremony
                </NavLink>
                <NavLink to="/dinner-2024" className="font-gallery ">
                  Dinner
                </NavLink>
              </div>
            </div>
          </div>
          <div className="cs-height_70 cs-height_lg_50"></div>
        </div>
        <div
          className="container wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="cs-isotop row cs-style1 cs-isotop_col_3 cs-has_gutter_30 cs-lightgallery">
         

            {/* Image 1 */}
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/1.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
                data-src="../assets/img/gallery/awards/1.jpg"
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/1.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            {/* .cs-isotop_item */}

            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/1.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/1.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/2.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/2.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/3.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/3.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/4.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/4.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/5.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/5.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/6.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/6.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/7.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/7.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/8.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/8.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/9.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/9.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/10.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/10.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/11.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/11.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/12.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/12.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/13.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/13.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/14.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/14.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/15.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/15.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/16.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/16.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            <div className="cs-isotop_item">
              <a
                href="../assets/img/gallery/awards/17.jpg"
              className="cs-gallery cs-style1 cs-bg cs-gallery_height6 cs-lightbox-item"
               
                data-sub-html="<h4>Awards</h4>"
              >
                        <img
                src="../assets/img/gallery/awards/17.jpg"
                alt="Awards"
                className="img-fluid"
              />
                <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                  <span className="cs-add"></span>
                </div>
              </a>
            </div>
            
            {/* .cs-isotop_item */}
          </div>

          {/* .isotop */}
        </div>
        <div className="cs-height_50 cs-height_lg_50"></div>

        <div className="cs-height_70 cs-height_lg_50"></div>
      </div>
    </>
  );
};

export default AwardsCeremonyGallery;
