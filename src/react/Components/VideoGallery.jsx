import React, { useState } from "react";
import { Helmet } from "react-helmet";

const VideoGallery = () => {
  const [activeTab, setActiveTab] = useState("event");

  const tabs = [
    { id: "event", label: "Event Highlights" },
    { id: "winners", label: "Winner Highlights" },
    { id: "testimonials", label: "Testimony Highlights" },
    { id: "keynote", label: "Keynote Speaker Highlights" },
    { id: "discussion", label: "Discussion Panel Highlights" },
  ];

  // 🎥 YouTube video data
  const videoGroups = {
    event: [
      {
        title: "How the Brit FinTech Awards 2024 Unfolded",
        link: "https://www.youtube.com/embed/ABaQqJhplMo?start=0&mute=1",
        youtube: "https://youtu.be/ABaQqJhplMo",
      },
    ],
    winners: [
      {
        title:
          "Volume, Winner of FinTech of the Year, Brit Fintech Awards 2024",
        link: "https://www.youtube.com/embed/SRihQb_fnX4?start=0&mute=1",
        youtube: "https://youtu.be/SRihQb_fnX4",
      },
      {
        title:
          "GBG, Winner of ID Verification Innovator, Brit Fintech Awards 2024",
        link: "https://www.youtube.com/embed/7Df3iLrtB5M?start=7&mute=1",
        youtube: "https://youtu.be/7Df3iLrtB5M",
      },
      {
        title:
          "Vyne Technologies Ltd, Winner of Account2Account Payment Processor, Brit FinTech Awards 2024",
        link: "https://www.youtube.com/embed/k3br4DFFewM?start=12&mute=1",
        youtube: "https://youtu.be/k3br4DFFewM",
      },
    ],
    testimonials: [
      {
        title:
          "Haile Seghid, Director of Red Sea Money Transfer, on Networking at Brit FinTech Awards 2024",
        link: "https://www.youtube.com/embed/oEfe9OlnG78?start=22&mute=1",
        youtube: "https://youtu.be/oEfe9OlnG78",
      },
      {
        title:
          "Rick Frenken & Justin Sebok from Volume Share Their Experience at Brit FinTech Awards 2024",
        link: "https://www.youtube.com/embed/95igZBFjDBI?start=22&mute=1",
        youtube: "https://youtu.be/95igZBFjDBI",
      },
      {
        title:
          "Kanayo Agwunobi & Thomas Taraniuk from Sumsub Reflect on Brit FinTech Awards 2024",
        link: "https://www.youtube.com/embed/P5xKxTZdRho?start=22&mute=1",
        youtube: "https://youtu.be/P5xKxTZdRho",
      },
    ],
    keynote: [
      {
        title: "Tomar’s Views on How Open Banking Will Shape the Future of Global Remittance | Part 1",
        link: "https://www.youtube.com/embed/Q6VGjACYJ_Y?si?start=0&mute=1",
        youtube: "https://youtu.be/Q6VGjACYJ_Y",
      },
      {
        title: "The Impact of Digital Revolution on Money Remittance | Insights by Mr. Tomer Shavit | Part 2",
        link: "https://www.youtube.com/embed/BlYpByaBA1k?si?start=0&mute=1",
        youtube: "https://youtu.be/BlYpByaBA1k",
      },
      {
        title: "How Will Open Banking Shape the Future of Global Remittance? | Part 3",
        link: "https://www.youtube.com/embed/yo9hEM7_WU8?si?start=0&mute=1",
        youtube: "https://youtu.be/yo9hEM7_WU8",
      },
    ],
    discussion: [
      {
        title: "Discussion Panel Highlights | Brit FinTech Awards 2024",
        link: "https://www.youtube.com/embed/ZlcWwJjBVyw?start=0&mute=1",
        youtube: "https://youtu.be/ZlcWwJjBVyw",
      },
    ],
  };

  // 🎯 “View More Videos” links per tab
  const moreLinks = {
    event:
      "https://youtube.com/playlist?list=PLrge5A87R3JaDWXm0Z8Ov4qpNKULWjQgw&si=A7c2QnVPest1saCR",
    winners:
      "https://youtube.com/playlist?list=PLrge5A87R3JbA0YIz1qkuPIT9hsZPWVAk&si=jCuRVCF6ComMKa9L",
    testimonials:
      "https://youtube.com/playlist?list=PLrge5A87R3JaRQp2ob6aV8SVsrkkegc8z&si=rcXwGnfvkKeWqIzx",
    keynote:
      "https://youtube.com/playlist?list=PLrge5A87R3JaDWXm0Z8Ov4qpNKULWjQgw&si=A7c2QnVPest1saCR",
    discussion:
      "https://youtube.com/playlist?list=PLrge5A87R3JaDWXm0Z8Ov4qpNKULWjQgw&si=A7c2QnVPest1saCR",
  };

  // 🏷 Dynamic Button Text based on tab
  const buttonLabels = {
    event: "View More Videos",
    winners: "View More Videos",
    testimonials: "View More Videos",
    keynote: "View More Videos",
    discussion: "View More Videos",
  };

  return (
    <div>
      <Helmet>
        <title>Video Gallery 2024 | Brit Fintech Awards</title>
        <meta
          name="description"
          content="Explore the highlights from the Brit Fintech Awards 2024! Watch the videos of the winners, networking moments, and event celebrations."
        />
      </Helmet>

      <div>
        <div className="cs-height_90 cs-height_lg_80" />

        <div
          className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
          style={{
            backgroundImage:
              'url("../assets/img/event-conference/hero-img.jpg")',
          }}
        >
          <div className="container wow fadeInDown" data-wow-delay="0.2s">
            <div className="cs-hero_text text-left">
              <h1 className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-0 mb-2">
                Video Gallery 2024
              </h1>
              <p className="pb-0 mb-0 text-left text-white">
                Let’s celebrate innovation together.
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Tabs Section */}
        <div className="tabs-container mb-5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ✅ Dynamic Videos Section */}
        <div
          className="container wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div
            className={`row ${
              videoGroups[activeTab]?.length === 1
                ? "justify-content-center"
                : ""
            }`}
          >
            {videoGroups[activeTab]?.map((video, index) => {
              const videoSrc =
                index === 0
                  ? `${video.link}&autoplay=1`
                  : `${video.link}&autoplay=0`;

              return (
                <div
                  className={`${
                    videoGroups[activeTab]?.length === 1
                      ? "col-lg-6 col-md-8"
                      : "col-lg-4"
                  }`}
                  key={index}
                >
                  <div
                    className="cs-post cs-style10 position-relative video-box"
                    style={{ height: "400px", cursor: "pointer" }}
                    onClick={() => window.open(video.youtube, "_blank")}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={videoSrc}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="cs-post_thumb cs-bg"
                    ></iframe>
                    <div className="cs-post_info">
                      <h2 className="cs-post_title cs-white cs-white_hover">
                        {video.title}
                      </h2>
                    </div>
                  </div>
                  <div className="cs-height_30 cs-height_lg_30" />
                </div>
              );
            })}
          </div>

          {/* ✅ Dynamic Button Text */}
          <div className="text-center">
            <a
              className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg_2 cs-accent_border_2 cs-white cs-accent_bg_hover cs-white_hover cs-accent_border_hover"
              href={moreLinks[activeTab]}
              target="_blank"
              rel="noreferrer"
            >
              {buttonLabels[activeTab]}
            </a>
          </div>
        </div>

        <div className="cs-height_100 cs-height_lg_50" />
      </div>

      {/* ✅ Styling */}
      <style>{`
        .tabs-container {
          margin-top: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .tab-btn {
          background: transparent;
          border: 2px solid #c8102e;
          color: #c8102e;
          padding: 12px 28px;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          min-width: 200px;
          font-size: 1.1rem;
          cursor: pointer;
        }

        .tab-btn.active {
          background: linear-gradient(90deg, #000000ff, #c8102e, #000000ff);
          color: #fffefeff !important;
          border: none;
          box-shadow: 0 0 15px rgba(86, 87, 87, 0.6);
        }

        .tab-btn:hover {
          transform: translateY(-3px);
        }

        .video-box:hover {
          transform: scale(1.02);
          transition: transform 0.3s ease;
        }

        @media (max-width: 768px) {
          .tabs-container {
            flex-direction: column;
            gap: 12px;
            width: 100%;
            padding: 40px 20px;
          }

          .tab-btn {
            width: 100%;
            min-width: unset;
            font-size: 1rem;
            padding: 12px 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoGallery;
