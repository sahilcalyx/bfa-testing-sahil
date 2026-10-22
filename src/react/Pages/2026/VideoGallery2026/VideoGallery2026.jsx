import React, { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import {
  SPONSOR_TIERS_2026,
  VIDEO_CATEGORIES_2026,
  VIDEOS_2026,
} from "./videoData2026";

const categoryLabel = (id) =>
  VIDEO_CATEGORIES_2026.find((c) => c.id === id)?.label;

const tierLabel = (id) => SPONSOR_TIERS_2026.find((t) => t.id === id)?.label;

const badgeLabel = (video) =>
  video.tier ? tierLabel(video.tier) : categoryLabel(video.category);

const VideoCard = ({ video, showBadge, index }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`${
        video.short ? "col-lg-3 col-md-4 col-6" : "col-lg-4 col-md-6"
      } mb-4 vg26-item`}
      style={{ animationDelay: `${Math.min(index, 12) * 50}ms` }}
    >
      <div className="vg26-card">
        <div className={`vg26-frame${video.short ? " is-short" : ""}`}>
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&controls=1&modestbranding=1&rel=0&playsinline=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className="vg26-poster"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${video.title}`}
            >
              <img
                src={
                  video.thumbnail ||
                  `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
                }
                alt={video.title}
                loading="lazy"
              />
              <span className="vg26-play" aria-hidden="true" />
            </button>
          )}
        </div>
        <div className="vg26-info">
          {showBadge && (
            <span className="vg26-badge">{badgeLabel(video)}</span>
          )}
          <h5>{video.title}</h5>
          {video.profile && (
            <NavLink to={video.profile} className="vg26-link">
              {video.category === "winners" ? "View Winner" : "View Profile"}{" "}
              &rarr;
            </NavLink>
          )}
          {video.website && (
            <a
              href={video.website}
              target="_blank"
              rel="noreferrer"
              className="vg26-link"
            >
              Visit Website &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const VideoGallery2026 = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [indicator, setIndicator] = useState(null);
  const railRef = useRef(null);
  const tabRefs = useRef({});

  const filteredVideos =
    activeCategory === "all"
      ? VIDEOS_2026.filter((video) => !video.short)
      : VIDEOS_2026.filter((video) => video.category === activeCategory);

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

  const handleTabKeyDown = (e, index) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next =
      VIDEO_CATEGORIES_2026[
        (index + step + VIDEO_CATEGORIES_2026.length) %
          VIDEO_CATEGORIES_2026.length
      ];
    setActiveCategory(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <div>
      <Helmet>
        <title>Video Gallery 2026 | Brit Fintech Awards</title>
        <meta
          name="description"
          content="Watch the Brit Fintech Awards 2026 videos - event highlights, keynote speaker, discussion panelists, sponsors and jury."
        />
      </Helmet>

      <style>
        {`
        .vg26-rail-wrap {
          margin-top: 28px;
          position: relative;
        }
        .vg26-rail {
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
        .vg26-indicator {
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
        .vg26-tab {
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
          white-space: nowrap;
          cursor: pointer;
          transition: color 0.25s ease, background-color 0.25s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .vg26-break { flex-basis: 100%; height: 0; margin-top: -4px; }
        .vg26-tab:hover { color: #fff; background-color: rgba(255, 255, 255, 0.07); }
        .vg26-tab.is-active { color: #fff; background-color: transparent; }
        .vg26-tab:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
        .vg26-tab:focus:not(:focus-visible) { outline: none; box-shadow: none; }

        .vg26-item {
          animation: vg26-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes vg26-rise {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to { opacity: 1; transform: none; }
        }
        .vg26-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          overflow: hidden;
          background: #171516;
          box-shadow: 0 14px 34px -20px rgba(23, 21, 22, 0.8);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .vg26-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -18px rgba(200, 16, 46, 0.6);
        }
        .vg26-frame {
          position: relative;
          aspect-ratio: 16 / 9;
          background: #000;
        }
        .vg26-frame.is-short { aspect-ratio: 9 / 16; }
        .vg26-frame iframe,
        .vg26-poster {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .vg26-poster {
          padding: 0;
          border: 0;
          background: #000;
          cursor: pointer;
        }
        .vg26-poster img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.85;
          transition: opacity 0.3s ease, transform 0.5s ease;
        }
        .vg26-poster:hover img { opacity: 1; transform: scale(1.04); }
        .vg26-play {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 64px;
          height: 64px;
          margin: -32px 0 0 -32px;
          border-radius: 50%;
          background: linear-gradient(120deg, #e0193a, #c8102e 45%, #8a0a1f);
          box-shadow: 0 0 0 8px rgba(200, 16, 46, 0.25);
          transition: transform 0.3s ease;
        }
        .vg26-play::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -10px 0 0 -6px;
          border-style: solid;
          border-width: 10px 0 10px 17px;
          border-color: transparent transparent transparent #fff;
        }
        .vg26-poster:hover .vg26-play { transform: scale(1.1); }
        .vg26-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 16px 18px 18px;
        }
        .vg26-badge {
          align-self: flex-start;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #ff4d67;
        }
        .vg26-info h5 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
          color: #fff;
        }
        .vg26-link {
          margin-top: auto;
          font-size: 13px;
          font-weight: 600;
          color: #ff4d67;
        }
        .vg26-link:hover { color: #fff; }

        .vg26-tier + .vg26-tier { margin-top: 24px; }
        .vg26-tier-title {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 0 0 20px;
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #171516;
        }
        .vg26-tier-title::before {
          content: "";
          width: 6px;
          height: 26px;
          border-radius: 3px;
          background: var(--vg26-tier, #c8102e);
        }
        .vg26-tier-title::after {
          content: "";
          flex: 1;
          height: 1px;
          background: rgba(23, 21, 22, 0.12);
        }
        .vg26-tier-platinum { --vg26-tier: linear-gradient(180deg, #f2f4f7, #9aa3ad); }
        .vg26-tier-gold { --vg26-tier: linear-gradient(180deg, #f7d774, #b8860b); }
        .vg26-tier-silver { --vg26-tier: linear-gradient(180deg, #e3e3e3, #8e8e8e); }
        .vg26-tier-innovation { --vg26-tier: linear-gradient(180deg, #e0193a, #8a0a1f); }
        .vg26-tier-strategic { --vg26-tier: linear-gradient(180deg, #4a4a4a, #171516); }
        .vg26-tier-travel { --vg26-tier: linear-gradient(180deg, #3d7ea6, #1d4e89); }
        .vg26-tier-logistics { --vg26-tier: linear-gradient(180deg, #c47b2b, #8a4b12); }
        .vg26-tier-partner { --vg26-tier: linear-gradient(180deg, #e0193a, #8a0a1f); }

        .vg26-empty {
          margin: 10px auto 0;
          max-width: 520px;
          padding: 56px 24px;
          text-align: center;
          border: 1.5px dashed rgba(23, 21, 22, 0.2);
          border-radius: 16px;
        }

        @media (max-width: 767px) {
          .vg26-rail-wrap { margin-top: 20px; }
          .vg26-rail {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 5px;
            border-radius: 14px;
          }
          .vg26-tab {
            justify-content: center;
            min-height: 44px;
            padding: 8px 6px;
            font-size: 12.5px;
            white-space: normal;
            text-align: center;
            line-height: 1.25;
            background-color: rgba(255, 255, 255, 0.05);
          }
          .vg26-tab.is-active { background-color: transparent; }
          .vg26-break { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .vg26-indicator, .vg26-tab { transition: none; }
          .vg26-item { animation: none; }
        }
        `}
      </style>

      <div className="cs-height_90 cs-height_lg_80" />
      <div
        className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage: 'url("/assets/img/event-conference/hero-img.jpg")',
        }}
      >
        <div className="container wow fadeInDown">
          <div className="cs-hero_text text-left">
            <h1 className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-0 mb-2">
              Video Gallery 2026
            </h1>
            <p className="pb-0 mb-0 text-left text-white">
              Highlights that define fintech excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="vg26-rail-wrap">
          <div
            ref={railRef}
            className="vg26-rail"
            role="tablist"
            aria-label="Video categories"
          >
            {indicator && (
              <span className="vg26-indicator" aria-hidden="true" style={indicator} />
            )}
            {VIDEO_CATEGORIES_2026.map((tab, index) => {
              const isActive = activeCategory === tab.id;
              return (
                <React.Fragment key={tab.id}>
                {tab.id === "jury" && (
                  <span className="vg26-break" aria-hidden="true" />
                )}
                <button
                  ref={(el) => {
                    tabRefs.current[tab.id] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveCategory(tab.id)}
                  onKeyDown={(e) => handleTabKeyDown(e, index)}
                  className={`vg26-tab ${isActive ? "is-active" : ""}`}
                >
                  {tab.label}
                </button>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="container mt-5"
        role="tabpanel"
        aria-label={categoryLabel(activeCategory)}
      >
        {filteredVideos.length === 0 ? (
          <div className="vg26-empty">
            <h3>{categoryLabel(activeCategory)} coming soon</h3>
          </div>
        ) : activeCategory === "sponsor" ? (
          <div key={activeCategory}>
            {SPONSOR_TIERS_2026.map((tier) => {
              const tierVideos = filteredVideos.filter(
                (video) => video.tier === tier.id
              );
              if (tierVideos.length === 0) return null;
              return (
                <section key={tier.id} className="vg26-tier">
                  <h3 className={`vg26-tier-title vg26-tier-${tier.id}`}>
                    {tier.label}
                  </h3>
                  <div className="row">
                    {tierVideos.map((video, index) => (
                      <VideoCard key={video.id} video={video} index={index} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="row" key={activeCategory}>
            {filteredVideos.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                index={index}
                showBadge={activeCategory === "all"}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-4">
          <a
            className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg_2 cs-accent_border_2 cs-white cs-accent_bg_hover cs-white_hover"
            href="https://youtube.com/@BritFinTechAwardsUK/featured"
            target="_blank"
            rel="noreferrer"
          >
            View More Videos
          </a>
        </div>
      </div>

      <div className="cs-height_100 cs-height_lg_50" />
    </div>
  );
};

export default VideoGallery2026;
