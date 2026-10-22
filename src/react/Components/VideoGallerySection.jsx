import React from "react";
import { NavLink } from "react-router-dom";

const btnClass =
  "cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hover";

const VideoGallerySection = ({
  videos = [],
  subtitle = "BFA26 • FOCUS SESSION",
  heading = `What Does "High Risk" Really Mean?`,
  deck = "Understanding Risk in Today's FinTech Landscape",
  viewMoreLink = "/focus-session-2026",
  viewMoreLabel = "Watch Full Session",
  secondaryLink = "/video-gallery-2026",
  secondaryLabel = "Watch All Videos",
}) => {
  const isSingle = videos.length === 1;

  return (
  <div
    className="cs-gradient_bg_2 "
    style={{
      backgroundImage: 'url("../assets/img/event-conference/counter_bg2.png")',
      backgroundPosition: "center center",
      backgroundSize: "cover",
    }}
  >
    <div className="cs-height_35 cs-height_lg_35" />
    <div
      className="container wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay="0.2s"
    >
      <div
        className="container cs-bg_parallax"
        data-wow-duration="1s"
        data-wow-delay="0.2s"
      >
        <div
          className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase"
          style={{ marginBottom: 0 }}
        >
          <div
            className="cs-section_subtitle cs-primary_font cs-medium cs-accent_color text-white"
            style={{ marginBottom: "4px" }}
          >
            <span style={{ color: "#c8102e" }}>
              {" "}
              <strong>{subtitle}</strong>
            </span>
          </div>
          <h2
            className="cs-section_title cs-extra_bold "
            style={{ color: "#ffffffff", margin: "0 0 6px" }}
          >
            {heading}
          </h2>
          {deck ? (
            <p
              className="cs-m0"
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.85)",
                fontSize: "clamp(18px, 2.2vw, 22px)",
                fontWeight: 500,
                letterSpacing: "0.02em",
                lineHeight: 1.35,
                textTransform: "none",
              }}
            >
              {deck}
            </p>
          ) : null}
        </div>
        <div className="cs-height_40 cs-height_lg_30" />
      </div>
    </div>
    <div
      className="container wow fadeIn"
      data-wow-duration="1s"
      data-wow-delay="0.3s"
    >
      <div className="row justify-content-center">
        {videos.map((video) => (
          <div
            className={isSingle ? "col-lg-10 col-xl-9" : "col-lg-4"}
            key={video.id}
          >
            <a
              href={`https://youtu.be/${video.id}`}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="cs-post cs-style10 position-relative"
                style={{
                  height: isSingle ? "auto" : "400px",
                  aspectRatio: isSingle ? "16 / 9" : undefined,
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&modestbranding=1&rel=0`}
                  loading="lazy"
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="cs-post_thumb cs-bg"
                />
                <div className="cs-post_info">
                  <h2 className="cs-post_title cs-white cs-white_hover">
                    {video.title}
                  </h2>
                </div>
              </div>
            </a>
            <div className="cs-height_30 cs-height_lg_30" />
          </div>
        ))}
      </div>
      <div
        className="text-center"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px 16px",
        }}
      >
        <NavLink to={viewMoreLink} className={btnClass}>
          {viewMoreLabel}
        </NavLink>
        {secondaryLink && secondaryLabel ? (
          <NavLink to={secondaryLink} className={btnClass}>
            {secondaryLabel}
          </NavLink>
        ) : null}
      </div>
    </div>
    <div className="cs-height_50 cs-height_lg_50" />
  </div>
  );
};

export default VideoGallerySection;
