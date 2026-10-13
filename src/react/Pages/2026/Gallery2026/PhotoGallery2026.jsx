import React, { useCallback, useEffect, useRef, useState } from "react";
import "lightgallery/css/lightgallery.css";
import lightGallery from "lightgallery";
import { Helmet } from "react-helmet";
import Image from "next/image";

const PhotoGallery2026 = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [indicator, setIndicator] = useState(null);
  const railRef = useRef(null);
  const tabRefs = useRef({});

  // =================== Helper Function to Generate Unique IDs ===================
  let idCounter = 1;
  const makeImages = (category, count) =>
    Array.from({ length: count }, (_, i) => ({
      id: idCounter++,
      src: `/assets/img/gallery2026/${category}/${i + 1}.webp`,
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
  // Set each count to the number of photos in /public/assets/img/gallery2026/<category>/ (named 1.webp, 2.webp, ...)
  const galleryImages = [
    ...makeImages("registration", 24),
    ...makeImages("networking", 87),
    ...makeImages("discussion", 27),
    ...makeImages("keynote", 7),
    ...makeImages("food-drinks", 51),
    ...makeImages("focus-session", 16),
    ...makeImages("venue", 42),
    ...makeImages("winner-photos", 85),
    ...makeImages("team", 37),
    ...makeImages("event-branding", 11),
    ...makeImages("audience", 15),
    ...makeImages("host", 21),
    ...makeImages("thank-you-gifts", 18),
    ...makeImages("others", 0),
  ];

  // =================== Filtered Images ===================
  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const countFor = (id) =>
    id === "all"
      ? galleryImages.length
      : galleryImages.filter((img) => img.category === id).length;

  // =================== LightGallery Init ===================
  useEffect(() => {
    const galleryElement = document.querySelector(".cs-lightgallery");
    if (!galleryElement) return;
    const gallery = lightGallery(galleryElement, {
      selector: ".cs-lightbox-item",
      download: false,
      subHtmlSelectorRelative: true,
    });

    return () => {
      if (gallery) gallery.destroy(true);
    };
  }, [activeCategory]);

  // =================== Sliding Tab Indicator ===================
  const syncIndicator = useCallback(() => {
    const tab = tabRefs.current[activeCategory];
    if (!tab) return;
    setIndicator({
      left: tab.offsetLeft,
      top: tab.offsetTop,
      width: tab.offsetWidth,
      height: tab.offsetHeight,
    });
  }, [activeCategory]);

  useEffect(() => {
    syncIndicator();
    const rail = railRef.current;
    if (!rail || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(syncIndicator);
    observer.observe(rail);
    return () => observer.disconnect();
  }, [syncIndicator]);

  const selectCategory = (id) => setActiveCategory(id);

  const handleTabKeyDown = (e, index) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = categories[(index + step + categories.length) % categories.length];
    selectCategory(next.id);
    tabRefs.current[next.id]?.focus();
  };

  // =================== Categories ===================
  const categories = [
    { id: "all", label: "All Photos" },
    { id: "venue", label: "Venue" },
    { id: "registration", label: "Registration" },
    { id: "host", label: "Host" },
    { id: "keynote", label: "Keynote Speaker" },
    { id: "discussion", label: "Discussion Panel" },
    { id: "focus-session", label: "Focus Session" },
    { id: "winner-photos", label: "Winner Photos" },
    { id: "networking", label: "Networking" },
    { id: "audience", label: "Audience" },
    { id: "event-branding", label: "Brand Exposure" },
    { id: "food-drinks", label: "Food and Drinks" },
    { id: "thank-you-gifts", label: "Thank You Gifts" },
    { id: "team", label: "Team" },
    // { id: "others", label: "Others" },
  ];

  const activeLabel = categories.find((c) => c.id === activeCategory)?.label;

  return (
    <>
      <div className="cs-flying_img_wrap cs-style9 cs-parallax">
        <Helmet>
          <title>Photo Gallery 2026 | Brit Fintech Awards</title>
          <meta
            name="description"
            content="Explore the stunning moments captured at the Brit Fintech Awards 2026. Discover the highlights, innovative projects, and achievements celebrated at this prestigious event."
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
          .pg26-rail-wrap {
            margin-top: 28px;
            position: relative;
          }
          .pg26-rail {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 4px;
            padding: 6px;
            background: #171516;
            border-radius: 16px;
            box-shadow: 0 18px 40px -22px rgba(23, 21, 22, 0.7);
          }
          .pg26-indicator {
            position: absolute;
            z-index: 0;
            border-radius: 11px;
            background: linear-gradient(120deg, #e0193a, #c8102e 45%, #8a0a1f);
            box-shadow: 0 8px 22px -6px rgba(200, 16, 46, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.25);
            transition:
              left 0.5s cubic-bezier(0.34, 1.3, 0.64, 1),
              top 0.5s cubic-bezier(0.34, 1.3, 0.64, 1),
              width 0.5s cubic-bezier(0.34, 1.3, 0.64, 1),
              height 0.5s cubic-bezier(0.34, 1.3, 0.64, 1);
            pointer-events: none;
          }
          .pg26-tab {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 11px 18px;
            border: 0;
            border-radius: 11px;
            background: transparent;
            color: rgba(255, 255, 255, 0.62);
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            white-space: nowrap;
            cursor: pointer;
            transition: color 0.25s ease, background-color 0.25s ease;
            animation: pg26-tab-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
          }
          .pg26-tab:hover {
            color: #fff;
            background-color: rgba(255, 255, 255, 0.07);
          }
          .pg26-tab.is-active {
            color: #fff;
            background-color: transparent;
          }
          .pg26-tab:focus-visible {
            outline: 2px solid #fff;
            outline-offset: 2px;
          }
          .pg26-count {
            min-width: 22px;
            padding: 2px 7px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.1);
            font-size: 11px;
            letter-spacing: 0;
            line-height: 1.4;
            transition: background-color 0.25s ease;
          }
          .pg26-tab.is-active .pg26-count {
            background: rgba(0, 0, 0, 0.28);
          }
          @keyframes pg26-tab-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* Winner photos mix 3:2, 16:9, square and portrait shots, so every card shares one frame */
          .pg26-winner-frame {
            display: block;
            height: auto;
            aspect-ratio: 4 / 3;
            overflow: hidden;
          }
          .pg26-winner-frame .pg26-thumb {
            object-fit: cover;
            object-position: 50% 30%;
          }

          /* --- Grid & empty state --- */
          .pg26-item {
            animation: pg26-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
          }
          @keyframes pg26-rise {
            from { opacity: 0; transform: translateY(24px) scale(0.97); }
            to { opacity: 1; transform: none; }
          }
          .pg26-empty {
            margin: 10px auto 0;
            max-width: 520px;
            padding: 56px 24px;
            text-align: center;
            border: 1.5px dashed rgba(23, 21, 22, 0.2);
            border-radius: 16px;
            animation: pg26-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
          }
          .pg26-empty h3 {
            margin: 0 0 8px;
            font-size: 22px;
            font-weight: 700;
            color: #171516;
          }
          .pg26-empty p {
            margin: 0;
            color: rgba(23, 21, 22, 0.6);
          }

          .pg26-tab { -webkit-tap-highlight-color: transparent; }
          .pg26-tab:focus:not(:focus-visible) {
            outline: none;
            box-shadow: none;
          }

          @media (max-width: 767px) {
            .pg26-rail-wrap { margin-top: 20px; }
            .pg26-rail {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 4px;
              padding: 5px;
              border-radius: 14px;
            }
            .pg26-tab {
              justify-content: center;
              min-height: 44px;
              padding: 8px 6px;
              font-size: 11.5px;
              letter-spacing: 0.05em;
              white-space: normal;
              text-align: center;
              line-height: 1.25;
            }
            .pg26-tab:first-of-type,
            .pg26-tab:last-of-type:nth-of-type(even) { grid-column: 1 / -1; }
            .pg26-tab,
            .pg26-tab:hover { background-color: rgba(255, 255, 255, 0.05); }
            .pg26-tab.is-active { background-color: transparent; }
          }

          @media (prefers-reduced-motion: reduce) {
            .pg26-indicator, .pg26-tab, .pg26-count { transition: none; }
            .pg26-tab, .pg26-item, .pg26-empty { animation: none; }
          }
          `}
        </style>

        {/* --- Hero Section --- */}
        <div className="cs-height_90 cs-height_lg_80" />
        <div
          className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
          style={{
            backgroundImage:
              'url("/assets/img/event-conference/hero-img.jpg")',
          }}
        >
          <div className="container wow fadeInDown">
            <div className="cs-hero_text text-left">
              <h1 className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-3 mb-0">
                Photo Gallery 2026
              </h1>
            </div>
          </div>
        </div>

        {/* --- Tabs --- */}
        <div className="container">
          <div className="pg26-rail-wrap">
            <div
              ref={railRef}
              className="pg26-rail"
              role="tablist"
              aria-label="Photo categories"
            >
              {indicator && (
                <span
                  className="pg26-indicator"
                  aria-hidden="true"
                  style={indicator}
                />
              )}
              {categories.map((tab, index) => {
                const isActive = activeCategory === tab.id;
                const count = countFor(tab.id);
                return (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[tab.id] = el;
                    }}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => selectCategory(tab.id)}
                    onKeyDown={(e) => handleTabKeyDown(e, index)}
                    className={`pg26-tab ${isActive ? "is-active" : ""}`}
                    style={{ animationDelay: `${index * 45}ms` }}
                  >
                    {tab.label}
                    {count > 0 && <span className="pg26-count">{count}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- Gallery Section --- */}
        <div className="container mt-5" role="tabpanel" aria-label={activeLabel}>
          {filteredImages.length === 0 ? (
            <div className="pg26-empty" key={`empty-${activeCategory}`}>
              <h3>{activeCategory === "all" ? "Photos coming soon" : `${activeLabel} photos coming soon`}</h3>
              <p>Check back after the Brit Fintech Awards 2026 for the full photo set.</p>
            </div>
          ) : (
            <div
              key={activeCategory}
              className="cs-isotop row cs-style1 cs-isotop_col_3 cs-has_gutter_30 cs-lightgallery"
            >
              {filteredImages.map((img, index) => (
                <div
                  className="cs-isotop_item pg26-item"
                  key={img.id}
                  style={{ animationDelay: `${Math.min(index, 12) * 50}ms` }}
                >
                  <a
                    href={img.src}
                    className={`cs-gallery cs-style1 cs-bg ${activeCategory === "winner-photos"
                        ? "pg26-winner-frame"
                        : "cs-gallery_height10"
                      } cs-lightbox-item`}
                    data-sub-html={`<h4>${img.caption}</h4>`}
                  >
                    {activeCategory === "winner-photos" ? (
                      <Image
                        src={img.src}
                        alt={img.caption}
                        fill
                        // object-fit: cover crops 16:9 shots into the 4:3 frame, so ask for ~1.4x the card width
                        sizes="(max-width: 575px) 140vw, (max-width: 991px) 70vw, 47vw"
                        className="pg26-thumb"
                      />
                    ) : (
                      <img src={img.src} alt={img.caption} className="img-fluid" />
                    )}
                    <div className="cs-gallery_hover cs-center cs-accent_80_bg">
                      <span className="cs-add"></span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cs-height_70 cs-height_lg_50"></div>
      </div>
    </>
  );
};

export default PhotoGallery2026;
