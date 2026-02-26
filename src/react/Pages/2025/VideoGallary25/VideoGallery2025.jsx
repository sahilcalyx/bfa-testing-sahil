import React, { useState } from "react";
import { Helmet } from "react-helmet";

const VideoGallery2025 = () => {
  const [activeTab, setActiveTab] = useState("event");

  // 🎉 Event Highlights
  const eventVideos = [
    {
      id: 1,
      title: "The Story Beyond the Spotlight: Brit FinTech Awards 2025",
      link: "https://youtu.be/Q1bf7AyvJlc?si=83nc984aJyBzlphG",
      embed: "https://www.youtube.com/embed/Q1bf7AyvJlc",
    },
    {
      id: 2,
      title: "The Visionary Behind the Brit Fintech Awards - Mr. Vishal Patil",
      link: "https://youtu.be/efNlqln3hH8?si=YKqcv3GKuBltWJTh",
      embed: "https://www.youtube.com/embed/efNlqln3hH8",
    },
    {
      id: 3,
      title: "Brit Fintech Awards 2025 - Event Highlights Are Here!",
      link: "https://youtu.be/DnbK2axm36w?si=XlvCUD8eMnFhJmPp",
      embed: "https://www.youtube.com/embed/DnbK2axm36w",
    },
  ];

  // 🎬 Winners Videos
  const winnersVideos = [
    {
      id: 1,
      title: "Volume - Winner of Account 2 Account of the Year 2025",
      link: "https://youtu.be/Ti1rIwk15fk?si=qR4V405VnUIAQPJD",
      embed: "https://www.youtube.com/embed/Ti1rIwk15fk",
    },
    {
      id: 2,
      title:
        "Fast Track Money Transfer Limited - Winner of Payment Innovator of the Year 2025.",
      link: "https://youtu.be/HPaGGeE8cPo?si=Gm0BxW9iMsuSyF3u",
      embed: "https://www.youtube.com/embed/HPaGGeE8cPo",
    },
    {
      id: 3,
      title: "Disbuz - Winner of Pay-Out Innovator of the Year 2025",
      link: "https://youtu.be/Dwp7SokzCFE?si=gqQ7gP3QOGUEE-EX",
      embed: "https://www.youtube.com/embed/Dwp7SokzCFE",
    },
  ];

  // 💬 Testimonies Videos
  const testimoniesVideos = [
    {
      id: 1,
      title: "Lola’s take on the Brit Fintech Awards: A Must-Attend Event!",
      link: "https://youtu.be/U3hWVuR_r_I?si=QWekwlrdaU-cAKhB",
      embed: "https://www.youtube.com/embed/U3hWVuR_r_I",
    },
    {
      id: 2,
      title: "Thomas from Netsible shares his Excitement for BFA 2026",
      link: "https://youtu.be/JTDEg_k5pV0?si=TUO2GOKCNUKyCdTF",
      embed: "https://www.youtube.com/embed/JTDEg_k5pV0",
    },
    {
      id: 3,
      title: "Amazing Topics & Industry Players! – Rose Mary, Marbo Global",
      link: "https://youtu.be/qLixVWCcEps?si=HZ6l62YyjiUKsXjU",
      embed: "https://www.youtube.com/embed/qLixVWCcEps",
    },
  ];

  // 🎤 Keynotes Videos
  const keynotesVideos = [
    {
      id: 1,
      title:
        "Remittance impact one in eight people worldwide yet the system remains slow, costly, and fragmented.",
      link: "https://youtu.be/S_knASu3l5o?si=sIWI98ldBhTp0Vo3",
      embed: "https://www.youtube.com/embed/S_knASu3l5o",
    },
    {
      id: 2,
      title:
        "From Silence to Networks: Building the Future of Global Payments | Mr. Ochebhoya Ekpete, Leatherback",
      link: "https://youtu.be/6vQkv8m5NjQ?si=BkcsjuaVwmqnKC_p",
      embed: "https://www.youtube.com/embed/6vQkv8m5NjQ",
    },
  ];

  // 🔁 Dynamic Tab Handling
  const currentVideos =
    activeTab === "event"
      ? eventVideos
      : activeTab === "winners"
      ? winnersVideos
      : activeTab === "testimonies"
      ? testimoniesVideos
      : keynotesVideos;

  return (
    <div>
      <Helmet>
        <title>Video Gallery 2025 | Brit Fintech Awards</title>
        <meta
          name="description"
          content="Explore the highlights from the Brit Fintech Awards 2025! Watch winners, testimonies, and keynotes celebrating innovation."
        />
      </Helmet>

      {/* ✅ Hero Section */}
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
                Video Gallery 2025
              </h1>
              <p className="pb-0 mb-0 text-left text-white">
                Let’s celebrate innovation together.
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Tabs Section */}
        <div className="container text-center mt-5">
          <div className="tabs-container">
            <button
              className={`tab-btn ${activeTab === "event" ? "active" : ""}`}
              onClick={() => setActiveTab("event")}
            >
              Event Highlights
            </button>
            <button
              className={`tab-btn ${activeTab === "winners" ? "active" : ""}`}
              onClick={() => setActiveTab("winners")}
            >
              Winner Highlights
            </button>
            <button
              className={`tab-btn ${
                activeTab === "testimonies" ? "active" : ""
              }`}
              onClick={() => setActiveTab("testimonies")}
            >
              Testimony Highlights
            </button>
            <button
              className={`tab-btn ${activeTab === "keynotes" ? "active" : ""}`}
              onClick={() => setActiveTab("keynotes")}
            >
              Keynote Speaker Highlights
            </button>
          </div>
        </div>

        {/* ✅ Dynamic Video Section */}
        <div className="cs-height_60" />
        <div
          className="container wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div
            className={`row ${
              activeTab === "keynotes" || activeTab === "event"
                ? "justify-content-center text-center"
                : ""
            }`}
          >
            {currentVideos.map((video, index) => {
              const autoplayUrl =
                index === 0
                  ? `${video.embed}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0`
                  : `${video.embed}?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0`;

              return (
                <div
                  className={`${
                    activeTab === "keynotes" || activeTab === "event"
                      ? "col-lg-4 col-md-6"
                      : "col-lg-4 col-md-6"
                  } mb-4`}
                  key={video.id}
                >
                  <a href={video.link} target="_blank" rel="noreferrer">
                    <div className="video-box position-relative mx-auto">
                      <iframe
                        width="100%"
                        height="100%"
                        src={autoplayUrl}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-3"
                      />
                      <div className="video-overlay">
                        <h5>{video.title}</h5>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          {/* 🎥 View More buttons per tab */}
          <div className="text-center mt-5">
            {activeTab === "event" ? (
              <a
                className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg_2 cs-accent_border_2 cs-white cs-accent_bg_hover cs-white_hover"
                href="https://youtube.com/@BritFinTechAwardsUK/featured"
                target="_blank"
                rel="noreferrer"
              >
                View More Videos
              </a>
            ) : activeTab === "winners" ? (
              <a
                className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg_2 cs-accent_border_2 cs-white cs-accent_bg_hover cs-white_hover"
                href="https://youtube.com/playlist?list=PLrge5A87R3JZu_PzfgXm6EvnSHqk97Ipj&si=j-J06ueFo1szIYso"
                target="_blank"
                rel="noreferrer"
              >
                View More Videos
              </a>
            ) : activeTab === "testimonies" ? (
              <a
                className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg_2 cs-accent_border_2 cs-white cs-accent_bg_hover cs-white_hover"
                href="https://youtube.com/playlist?list=PLrge5A87R3JYMc1tV85MSSkub7dbBess9&si=adVjGVQZgZdY05Gq"
                target="_blank"
                rel="noreferrer"
              >
                View More Videos
              </a>
            ) : (
              <a
                className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg_2 cs-accent_border_2 cs-white cs-accent_bg_hover cs-white_hover"
                href="https://youtube.com/@BritFinTechAwardsUK/featured"
                target="_blank"
                rel="noreferrer"
              >
                View More Videos
              </a>
            )}
          </div>
        </div>

        <div className="cs-height_100 cs-height_lg_50" />
      </div>

      {/* 💅 CSS Section (unchanged) */}
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

        .video-box {
          height: 400px;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          background: #000;
          transition: all 0.4s ease-in-out;
          box-shadow: 0 0 15px rgba(255, 0, 124, 0.25);
        }

        .video-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 25px #c8102e rgba(0, 255, 255, 0.5) ,
            0 0 45px rgba(255, 0, 124, 0.4);
        }

        .video-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(0, 0, 0, 0.85)
          );
          padding: 20px;
          color: #fff;
          transition: background 0.4s ease;
        }

        .video-box:hover .video-overlay {
          background: linear-gradient(
            180deg,
            rgba(0, 255, 255, 0.3),
            rgba(255, 0, 124, 0.7)
          );
        }

        .video-overlay h5 {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
          text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
        }

        @media (max-width: 768px) {
          .video-box {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoGallery2025;
