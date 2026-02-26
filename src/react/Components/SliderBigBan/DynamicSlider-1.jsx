import React from "react";

const DynamicSliderVideo = () => {
  return (
    <>
      <style>
        {`
          /* Desktop height */
          .video-banner {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            background: #000;
          }

          /* Mobile height only */
          @media (max-width: 768px) {
            .video-banner {
              height: 35vh; /* SET MOBILE HEIGHT HERE */
            }
            .video-bg-wrap {
              height: 122% !important;
            }
          }

          .video-bg-wrap {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          /* Make video act like background */
          .video-bg-wrap iframe {
            width: 100%;
            height: 100%;
            border: none;
            object-fit: cover;
            pointer-events: none;
          }
        `}
      </style>

      <div className="video-banner">
        <div className="video-bg-wrap">
          <iframe
            src="https://www.youtube.com/embed/tGC-9Z1x174?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0&playsinline=1&iv_load_policy=3&fs=0&playlist=tGC-9Z1x174"
            allow="autoplay; fullscreen"
            allowFullScreen={false}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default DynamicSliderVideo;
