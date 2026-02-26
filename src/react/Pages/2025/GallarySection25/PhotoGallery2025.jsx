import React, { useEffect, useState } from "react";
import "lightgallery/css/lightgallery.css";
import lightGallery from "lightgallery";
import { Helmet } from "react-helmet";

const PhotoGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // =================== Helper Function to Generate Unique IDs ===================
  let idCounter = 1;
  const makeImages = (category, count) =>
    Array.from({ length: count }, (_, i) => ({
      id: idCounter++,
      src: `../assets/img/gallery2025/${category}/${i + 1}.webp`,
      category,
      caption:
        category
          .split("-")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ") || "Gallery",
    }));

  // =================== Gallery Data ===================
  const galleryImages = [
    ...makeImages("registration", 7),
    // ...makeImages("candids", 66),
    ...makeImages("networking", 31),
    ...makeImages("discussion", 23),
    ...makeImages("keynote", 14),
    ...makeImages("food-drinks", 18),
    ...makeImages("startup-pitch", 7),
    ...makeImages("venue", 25),
    // ...makeImages("thankyou", 3),
    ...makeImages("winner-photos", 34),
    ...makeImages("team", 14),
    ...makeImages("exhibit", 7),

  ];

  // =================== Filtered Images ===================
  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // =================== LightGallery Init ===================
  useEffect(() => {
    const galleryElement = document.querySelector(".cs-lightgallery");
    const gallery = lightGallery(galleryElement, {
      selector: ".cs-lightbox-item",
      download: false,
      subHtmlSelectorRelative: true,
    });

    return () => {
      if (gallery) gallery.destroy(true);
    };
  }, [activeCategory]);

  // =================== Categories ===================
  const categories = [
    { id: "all", label: "All Photos" },
    { id: "venue", label: "Venue" },
    { id: "registration", label: "Registration" },
    { id: "keynote", label: "Keynote Speakers" },
    { id: "discussion", label: "Discussion Panel" },
    { id: "startup-pitch", label: "Startup Pitch" },
    { id: "winner-photos", label: "Winner Photos" },
    // { id: "candids", label: "Candids" },
    { id: "networking", label: "Networking" },
     { id: "exhibit", label: "Exhibit Space" },
    { id: "food-drinks", label: "Food and Drinks" },
    // { id: "thankyou", label: "Thank You Gifts" },
    { id: "team", label: "Team" },
    
  ];

  return (
    <>
      <div className="cs-flying_img_wrap cs-style9 cs-parallax">
        <Helmet>
          <title>Photo Gallery 2025 | Brit Fintech Awards</title>
          <meta
            name="description"
            content="Explore the stunning moments captured at the Brit Fintech Awards 2025. Discover the highlights, innovative projects, and achievements celebrated at this prestigious event."
          />
        </Helmet>

        {/* --- LightGallery Styles --- */}
        <style>
          {`
          .lg-backdrop, .lg-outer {
            z-index: 9999 !important;
          }
          .lg-outer {
            background-color: rgba(0, 0, 0, 0.9);
          }
          .lg-sub-html {
            font-size: 24px;
            color: #fff;
            padding: 10px;
            text-align: center;
            font-weight: bold;
          }
          .lg-sub-html h4 {
            margin: 0;
            font-size: 21px;
            font-weight: bold;
            color: #ededff;
          }

          /* --- Tabs --- */
          .tab-button {
            position: relative;
            color: #000;
            font-weight: 600;
            text-decoration: none;
            padding: 10px 20px;
            background: #fff;
            border: 2px solid transparent;
            border-radius: 10px;
            transition: all 0.35s ease-in-out;
            cursor: pointer;
            overflow: hidden;
            z-index: 1;
          }
          .tab-button::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(120deg, #c8102e, #171516 );
            transition: all 0.4s ease;
            z-index: -1;
          }
          .tab-button:hover::before { left: 0; }
          .tab-button:hover {
            color: #fff;
            transform: translateY(-3px);
            box-shadow: 0 6px 14px rgba(255, 0, 124, 0.35);
          }
          .tab-button.active {
            background: linear-gradient(120deg, #c8102e, #171516);
            color: #fff !important;
            border: 2px solid #000;
            box-shadow: 0 0 18px rgba(255, 0, 124, 0.5);
            transform: scale(1.05);
            animation: pulseGlow 1.8s infinite alternate;
          }
          @keyframes pulseGlow {
            from { box-shadow: 0 0 10px rgba(255, 0, 124, 0.3); }
            to { box-shadow: 0 0 20px rgba(255, 0, 124, 0.6); }
          }
          `}
        </style>

        {/* --- Hero Section --- */}
        <div className="cs-height_90 cs-height_lg_80" />
        <div
          className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
          style={{
            backgroundImage:
              'url("../assets/img/event-conference/hero-img.jpg")',
          }}
        >
          <div className="container wow fadeInDown">
            <div className="cs-hero_text text-left">
              <h1 className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-3 mb-0">
                Photo Gallery 2025
              </h1>
            </div>
          </div>
        </div>

        {/* --- Tabs --- */}
        <div className="container wow fadeInDown text-center">
          <div
            className="d-flex flex-wrap justify-content-center gap-2"
            style={{
              background: "#ddd",
              padding: "10px",
              textTransform: "uppercase",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`tab-button ${
                  activeCategory === tab.id ? "active" : ""
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- Gallery Section --- */}
        <div className="container wow fadeIn mt-5">
          <div className="cs-isotop row cs-style1 cs-isotop_col_3 cs-has_gutter_30 cs-lightgallery">
            {filteredImages.map((img) => (
              <div className="cs-isotop_item" key={img.id}>
                <a
                  href={img.src}
                  className={`cs-gallery cs-style1 cs-bg ${
                    activeCategory === "winner-photos"
                      ? "cs-gallery_height8"
                      : "cs-gallery_height10"
                  } cs-lightbox-item`}
                  data-sub-html={`<h4>${img.caption}</h4>`}
                >
                  <img src={img.src} alt={img.caption} className="img-fluid" />
                  <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                    <span className="cs-add"></span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-height_70 cs-height_lg_50"></div>
      </div>
    </>
  );
};

export default PhotoGallery;
