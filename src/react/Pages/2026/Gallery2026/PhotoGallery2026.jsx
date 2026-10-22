import React, { useCallback, useEffect, useRef, useState } from "react";
import "lightgallery/css/lightgallery.css";
import lightGallery from "lightgallery";
import { Helmet } from "react-helmet";
import Image from "next/image";
import { useLocation, useNavigate } from "react-router-dom";
import { GALLERY_CARDS_2026 } from "./galleryData";

const fileNumber = (src) => Number(src.match(/(\d+)\.webp$/)?.[1] ?? 0);

const CATEGORY_IDS = new Set([
  "all",
  "venue",
  "registration",
  "red-carpet",
  "keynote",
  "discussion",
  "focus-session",
  "winner-photos",
  "networking",
  "audience",
  "event-branding",
  "food-drinks",
  "thank-you-gifts",
  "host",
  "team",
]);

const hashToCategory = (hash) => {
  const id = (hash || "").replace(/^#/, "");
  return id && CATEGORY_IDS.has(id) ? id : "all";
};

const PhotoGallery2026 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(() =>
    hashToCategory(location.hash)
  );
  const [indicator, setIndicator] = useState(null);
  const railRef = useRef(null);
  const gallerySectionRef = useRef(null);
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
    ...makeImages("red-carpet", 161),
    ...makeImages("networking", 173),
    ...makeImages("discussion", 39),
    ...makeImages("keynote", 21),
    ...makeImages("food-drinks", 59),
    ...makeImages("focus-session", 15),
    ...makeImages("venue", 44),
    ...makeImages("winner-photos", 112),
    ...makeImages("team", 15),
    ...makeImages("event-branding", 23),
    ...makeImages("audience", 45),
    ...makeImages("host", 27),
    ...makeImages("thank-you-gifts", 16),
    ...makeImages("others", 0),
  ];

  // the home page "Moments That Matter" photos lead the All Photos tab, in file order
  const featuredImages = GALLERY_CARDS_2026.map((card) => card.item)
    .sort((a, b) => fileNumber(a.src) - fileNumber(b.src))
    .map((item) => ({
      id: idCounter++,
      src: item.src,
      category: "featured",
      caption: item.alt,
    }));

  // =================== Filtered Images ===================
  const filteredImages =
    activeCategory === "all"
      ? [...featuredImages, ...galleryImages]
      : galleryImages.filter((img) => img.category === activeCategory);

  // =================== LightGallery Init ===================
  useEffect(() => {
    const galleryElement = document.querySelector(".cs-lightgallery");
    if (!galleryElement) return;
    const gallery = lightGallery(galleryElement, {
      selector: ".cs-lightbox-item",
      download: false,
      subHtmlSelectorRelative: true,
      hideBarsDelay: 0,
      // lightGallery disables close + arrows on mobile by default
      mobileSettings: {
        controls: true,
        showCloseIcon: true,
        download: false,
      },
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

  const selectCategory = (id) => {
    setActiveCategory(id);
    navigate(
      {
        pathname: location.pathname,
        search: location.search,
        hash: id === "all" ? "" : id,
      },
      { replace: true, preventScrollReset: true, state: { fromTab: true } }
    );
  };

  // Keep tab in sync with #hash (e.g. #thank-you-gifts)
  useEffect(() => {
    const next = hashToCategory(location.hash);
    setActiveCategory((prev) => (prev === next ? prev : next));
  }, [location.hash]);

  // Deep-link: #category scrolls to gallery section (hero stays visible)
  useEffect(() => {
    const category = hashToCategory(location.hash);
    if (category === "all") return;
    if (location.state?.fromTab) return;

    const scrollToGallery = () => {
      const el =
        gallerySectionRef.current ||
        document.getElementById(category) ||
        document.getElementById("gallery-photos");
      if (!el) return;
      const headerOffset = 100;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    };

    scrollToGallery();
    const timers = [100, 400, 800, 1200].map((ms) =>
      window.setTimeout(scrollToGallery, ms)
    );
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [location.hash, location.state]);

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
    { id: "red-carpet", label: "Red Carpet" },
    
    { id: "keynote", label: "Speakers" },
    { id: "discussion", label: "Discussion Panel" },
    { id: "focus-session", label: "Focus Session" },
    { id: "winner-photos", label: "Winner Photos" },
    { id: "networking", label: "Networking" },
    { id: "audience", label: "Audience" },
    { id: "event-branding", label: "Brand Showcase" },
    { id: "food-drinks", label: "Food and Drinks" },
    { id: "thank-you-gifts", label: "Thank You Gifts" },
    { id: "host", label: "Host" },
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

          /* Keep controls visible (override auto-hide) */
          .lg-outer.lg-show-in .lg-toolbar,
          .lg-outer.lg-show-in .lg-prev,
          .lg-outer.lg-show-in .lg-next,
          .lg-outer.lg-show-in.lg-hide-items .lg-toolbar,
          .lg-outer.lg-show-in.lg-hide-items .lg-prev,
          .lg-outer.lg-show-in.lg-hide-items .lg-next {
            opacity: 1 !important;
            transform: none !important;
            pointer-events: auto !important;
          }

          /* Close: system × (no icon font) — always top-right */
          .lg-toolbar {
            z-index: 1085 !important;
            pointer-events: none;
          }
          .lg-toolbar .lg-close {
            pointer-events: auto !important;
            position: fixed !important;
            top: max(10px, env(safe-area-inset-top, 0px)) !important;
            right: max(10px, env(safe-area-inset-right, 0px)) !important;
            float: none !important;
            z-index: 1090 !important;
            display: flex !important;
            align-items: center;
            justify-content: center;
            width: 44px !important;
            height: 44px !important;
            padding: 0 !important;
            margin: 0 !important;
            border: 0 !important;
            border-radius: 50% !important;
            background: rgba(0, 0, 0, 0.7) !important;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.45) !important;
            color: #fff !important;
            cursor: pointer !important;
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
          }
          .lg-toolbar .lg-close:before,
          .lg-toolbar .lg-close:after {
            font-family: Arial, Helvetica, sans-serif !important;
          }
          .lg-toolbar .lg-close:after {
            content: "×" !important;
            font-size: 34px !important;
            font-weight: 400 !important;
            line-height: 1 !important;
            color: #fff !important;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
          }
          .lg-toolbar .lg-close:hover,
          .lg-toolbar .lg-close:focus {
            background: rgba(224, 25, 58, 0.95) !important;
            color: #fff !important;
          }

          /* Prev/next: system arrows (no icon font) */
          .lg-prev,
          .lg-next {
            font-family: Arial, Helvetica, sans-serif !important;
            background: rgba(0, 0, 0, 0.65) !important;
            color: #fff !important;
            border-radius: 50% !important;
            width: 44px !important;
            height: 44px !important;
            padding: 0 !important;
            margin: 0 !important;
            display: flex !important;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
          }
          .lg-prev:after,
          .lg-next:before {
            font-family: Arial, Helvetica, sans-serif !important;
            font-size: 28px !important;
            font-weight: 700 !important;
            line-height: 1 !important;
            color: #fff !important;
          }
          .lg-prev:after { content: "‹" !important; }
          .lg-next:before { content: "›" !important; }

          @media (max-width: 767px) {
            /* Real phones: old lightgallery.min.css + dynamic browser chrome
               leave the image stuck at the top — force true middle centering */
            .lg-container,
            .lg-outer {
              height: 100% !important;
              height: 100dvh !important;
              max-height: 100dvh !important;
            }
            .lg-outer .lg-content,
            .lg-outer .lg-inner {
              top: 0 !important;
              bottom: 0 !important;
              height: 100% !important;
            }
            .lg-outer .lg-item,
            .lg-outer .lg-img-wrap {
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              width: 100% !important;
              height: 100% !important;
              padding: 56px 12px 110px !important;
              box-sizing: border-box !important;
              white-space: normal !important;
              font-size: 0 !important;
            }
            .lg-outer .lg-item:before,
            .lg-outer .lg-img-wrap:before {
              content: none !important;
              display: none !important;
            }
            .lg-outer .lg-object,
            .lg-outer .lg-image {
              display: block !important;
              position: relative !important;
              width: auto !important;
              height: auto !important;
              max-width: 100% !important;
              max-height: calc(100dvh - 170px) !important;
              margin: 0 auto !important;
              vertical-align: middle !important;
            }

            .lg-toolbar .lg-close {
              top: max(12px, env(safe-area-inset-top, 0px)) !important;
              right: max(12px, env(safe-area-inset-right, 0px)) !important;
              width: 48px !important;
              height: 48px !important;
            }
            .lg-toolbar .lg-close:after {
              font-size: 38px !important;
            }

            /* Left/right just under the image (not stuck at screen bottom) */
            .lg-prev,
            .lg-next {
              top: auto !important;
              bottom: max(78px, calc(env(safe-area-inset-bottom, 0px) + 70px)) !important;
              width: 48px !important;
              height: 48px !important;
              margin-top: 0 !important;
            }
            .lg-prev { left: 20px !important; right: auto !important; }
            .lg-next { right: 20px !important; left: auto !important; }
            .lg-prev:after,
            .lg-next:before {
              font-size: 32px !important;
            }

            .lg-sub-html {
              font-size: 14px;
              padding: 8px 56px 14px;
              padding-bottom: max(14px, env(safe-area-inset-bottom, 0px));
            }
            .lg-sub-html h4 {
              font-size: 15px;
            }
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
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.01em;
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
              font-size: 12.5px;
              letter-spacing: 0;
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
            .pg26-indicator, .pg26-tab { transition: none; }
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

        {/* --- Tabs (id matches #hash so e.g. #thank-you-gifts scrolls here) --- */}
        <div
          className="container"
          ref={gallerySectionRef}
          id={activeCategory !== "all" ? activeCategory : "gallery-photos"}
        >
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
