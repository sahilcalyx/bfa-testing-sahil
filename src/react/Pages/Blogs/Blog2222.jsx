import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title> Brit Fintech Awards | Blogs </title>
        <meta name="description" content="Description of your page" />
      </Helmet>
      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        <div
        className="cs-hero cs-style12 cs-type1 cs-center text-center  cs-parallax cs-hobble"
        
        style={{
          backgroundImage: 'url("../assets/img/event-conference/hero-img.jpg")',
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
            <h1 className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-3 mb-0" style={{marginTop: '40px !important'}}>
             Blogs
              
            </h1>
            <p className="pb-0 mb-0 text-left text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ipsa.
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
        {/* Start Blog Seation */}
        <div>
          <div className="cs-height_140 cs-height_lg_80" />
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="cs-post cs-style10 position-relative">
                  <img
                    className="cs-post_thumb cs-bg"
                    src="../assets/img/event-conference/post1.jpg"
                  />
                  <div className="cs-post_info">
                    <span className="cs-posted_by cs-white cs-accent_60_bg_2 cs-rounded">
                      10 Jan 2023
                    </span>
                    <h2 className="cs-post_title cs-white cs-white_hover">
                      <NavLink to="/blogs-details">
                        Easy way to design attractive landing pages
                      </NavLink>
                    </h2>
                  </div>
                </div>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>
              <div className="col-lg-4">
                <div className="cs-post cs-style10 position-relative">
                  <img
                    className="cs-post_thumb cs-bg"
                    src="../assets/img/event-conference/post2.jpg"
                  />
                  <div className="cs-post_info">
                    <span className="cs-posted_by cs-white cs-accent_60_bg_2 cs-rounded">
                      12 Jan 2023
                    </span>
                    <h2 className="cs-post_title cs-white cs-white_hover">
                      <NavLink to="/blogs-details">UI/UX guide gor beginner</NavLink>
                    </h2>
                  </div>
                </div>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>
              <div className="col-lg-4">
                <div className="cs-post cs-style10 position-relative">
                  <img
                    className="cs-post_thumb cs-bg"
                    src="../assets/img/event-conference/post3.jpg"
                  />
                  <div className="cs-post_info">
                    <span className="cs-posted_by cs-white cs-accent_60_bg_2 cs-rounded">
                      13 Jan 2023
                    </span>
                    <h2 className="cs-post_title cs-white cs-white_hover">
                      <NavLink to="/blogs-details">
                        Easy way to design attractive landing pages{" "}
                      </NavLink>
                    </h2>
                  </div>
                </div>
                <div className="cs-height_30 cs-height_lg_30" />
              </div>
            </div>
          </div>
          <div className="cs-height_110 cs-height_lg_50" />
        </div>
        {/* End Blog Seation */}
      </div>
    </div>
  );
};

export default Blog;
