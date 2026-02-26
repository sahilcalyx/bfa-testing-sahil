import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const VideoGallery = () => {
  return ( 
    <div>
   <Helmet>
    <title>Video Gallery 2024 | Brit Fintech Awards</title>
    <meta
        name="description"
        content="Explore the highlights from the Brit Fintech Awards 2024! Watch the videos of the winners, networking moments, and event celebrations."
    />
    <meta
        name="keywords"
        content="Brit Fintech Award, UK Fintech Awards, About Us, Financial Technology Sector UK, Fintech Innovation UK"
    />
    <meta name="author" content="Brit Fintech Award" />
    <meta property="og:title" content="Video Gallery 2024 | Brit Fintech Awards" />
    <meta
        property="og:description"
        content="Explore the highlights from the Brit Fintech Awards 2024! Watch the videos of the winners, networking moments, and event celebrations."
    />
    <meta property="og:image" content="https://britfintechawards.com/assets/img/event-conference/about.png" />
</Helmet>

      <div>
        <div className="cs-height_90 cs-height_lg_80" />
       
        <div
          className="cs-hero cs-style12 cs-type1 cs-center text-center  cs-parallax cs-hobble"
          
          style={{
            backgroundImage:
              'url("../assets/img/event-conference/hero-img.jpg")',
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
            <h1 className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-0 mb-2" style={{marginTop: '40px !important'}}>
            Video Gallery 2024
              
            </h1>
            <p className="pb-0 mb-0 text-left text-white"> Let’s celebrate innovation together. 
            </p>
         
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
        {/* End Hero Seciton */}
        {/* Start About Seciton */}
        <div className="cs-height_140 cs-height_lg_75" />
    
        <div
            className="container wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="row">
              <div className="col-lg-4">
                <a
                  href="https://www.youtube.com/watch?v=ABaQqJhplMo"
                  target="_blank"
                >
                  <div
                    className="cs-post cs-style10 position-relative"
                    style={{ height: "400px" }}
                  >
                    {" "}
                    {/* Set a fixed height if needed */}
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/ABaQqJhplMo?si=M_ocsL0dlCjSML-l&start=87&autoplay=1&mute=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="cs-post_thumb cs-bg"
                    ></iframe>
                    <div className="cs-post_info">
                      <h2 className="cs-post_title cs-white cs-white_hover">
                        How the Brit FinTech Awards 2024 Unfolded
                      </h2>
                    </div>
                  </div>
                </a>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>

              <div className="col-lg-4">
                <a
                  href="https://www.youtube.com/watch?v=yZ9xW143yR0"
                  target="_blank"
                >
                  <div
                    className="cs-post cs-style10 position-relative"
                    style={{ height: "400px" }}
                  >
                    {" "}
                    {/* Set a fixed height if needed */}
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/yZ9xW143yR0?start=7&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="cs-post_thumb cs-bg"
                    ></iframe>
                    <div className="cs-post_info">
                      <h2 className="cs-post_title cs-white cs-white_hover">
                        Spotlight of success | Brit Fintech Awards 2024 Winner
                        Highlights
                      </h2>
                    </div>
                  </div>
                </a>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>

              <div className="col-lg-4">
                <a
                  href="https://www.youtube.com/watch?v=WlbDj6NNpgY"
                  target="_blank"
                >
                  <div
                    className="cs-post cs-style10 position-relative"
                    style={{ height: "400px" }}
                  >
                    {" "}
                    {/* Set a fixed height if needed */}
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/WlbDj6NNpgY?start=12&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="cs-post_thumb cs-bg"
                    ></iframe>
                    <div className="cs-post_info">
                      <h2 className="cs-post_title cs-white cs-white_hover">
                        Happy Voices Lasting Impact- Moments, Stories, and
                        Testimonials from Brit Fintech Awards 2024
                      </h2>
                    </div>
                  </div>
                </a>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>
            </div>
            <div className="text-center" bis_skin_checked="1">
              <a
                className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg_2 cs-accent_border_2 cs-white cs-accent_bg_hover cs-white_hover cs-accent_border_hover"
                href="https://www.youtube.com/@BritFinTechAwardsUK/videos"
                target="_blank"
              >
                View More Videos
              </a>
            </div>
          </div>
        <div className="cs-height_100 cs-height_lg_50" bis_skin_checked={1} />
  

      </div>
    </div>
  );
};

export default VideoGallery;
