import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>
          Blogs Brit Fintech Awards UK | Celebrating FinTech Innovation
        </title>
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="Brit Fintech Award, UK Fintech Awards, Blogs Us, Financial Technology Sector UK, Fintech Innovation UK"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Blogs Brit Fintech Awards UK | Celebrating FinTech Innovation"
        />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/event-conference/about.png"
        />
      </Helmet>
      <div>
        <style>{`
      .cat-item a{
      display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
      }

       .cat-item a:hover{
         color:#000;
      }
        
      `}</style>
        <div className="cs-height_90 cs-height_lg_80" />
        <div
          className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
          style={{
            backgroundImage:
              'url("../assets/img/event-conference/hero-img.jpg")',
          }}
        >
          <div className="cs-hero_pattern cs-hover_layer3" style={{}}>
            <div className="cs-hero_pattern_in cs-bg_parallax" />
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
            <div className="cs-hero_text text-left">
              <h1
                className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-3 mb-0"
                style={{ marginTop: "40px !important" }}
              >
                Blogs
              </h1>
              <p className="pb-0 mb-0 text-left text-white"></p>
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
        <div className="cs-gradient_bg_1">
          <div className="cs-height_140 cs-height_lg_80" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="row">
                   {/* Blog 02 starts here */}

                  <div className="col-lg-4">
                    <div className="cs-icon_box cs-style3">
                      <div className="cs-center">
                         <NavLink to="/ai-in-the-msb-sector" >
                        <img className="rounded-3"
                          src="../assets/img/blogs/ai-in-the-msb-sector.png"
                          alt="AI in the MSB Sector - Friend or Foe?"
                        /></NavLink>
                      </div>
                      <h2 className="cs-icon_box_title cs-semi_bold">
                           <NavLink to="/ai-in-the-msb-sector" >
                        AI in the MSB Sector - Friend or Foe?
                        </NavLink>
                      </h2>
                      <div className="cs-icon_box_subtitle mb-4">
                     Artificial Intelligence (AI) has become one of the most talked-about innovations...
                  </div>
                  <div className='text-center'>
                      <NavLink to="/ai-in-the-msb-sector" className="btn-black">
                        Read More
                      </NavLink>
                      </div>
                    </div>
                  </div>
                  {/* Blog 02 ends here */}
                  {/* Blog 01 starts here */}
                  <div className="col-lg-4">
                    <div className="cs-icon_box cs-style3">
                      <div className="cs-center">
                         <NavLink to="/fintech-in-the-uk" >
                        <img className="rounded-3"
                          src="../assets/img/blogs/fintech-in-the-uk.jpg"
                          alt="FinTech in the UK: 3 Trends to Watch Right Now"
                        /></NavLink>
                      </div>
                      
                      <h2 className="cs-icon_box_title cs-semi_bold">
                         <NavLink to="/fintech-in-the-uk" >FinTech in the UK: 3 Trends to Watch Right Now</NavLink>
                      </h2>
                      <div className="cs-icon_box_subtitle mb-4">
                      The UK fintech scene is heating up with three major trends leading...
                  </div>
                  <div className='text-center'>
                      <NavLink to="/fintech-in-the-uk" className="btn-black">
                        Read More
                      </NavLink>
                      </div>
                    </div>
                  </div>
                  {/* Blog 01 ends here */}
                 
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-12" style={{display:'none'}}>
                <div className="cs-sidebar cs-accent_5_bg_2">
                  <div className="cs-sidebar_item">
                    <h4 className="cs-sidebar_widget_title">Connect with us</h4>
                    <ul>
                      <li className="cat-item ">
                        <NavLink
                          to="https://www.facebook.com/profile.php?id=61562935702047"
                          target="_blank"
                        >
                          Facebook <i className="fab fa-facebook-f" />
                        </NavLink>
                      </li>
                      <li className="cat-item">
                        <NavLink
                          to="https://www.instagram.com/britfintechawards?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                          target="_blank"
                        >
                          Instagram <i className="fab fa-instagram" />
                        </NavLink>
                      </li>
                      <li className="cat-item">
                        <NavLink
                          to="https://www.youtube.com/channel/UCgNc-YNzudiVdnGZPh_4gmQ"
                          target="_blank"
                        >
                          YouTube <i className="fab fa-youtube" />
                        </NavLink>
                      </li>
                      <li className="cat-item">
                        <NavLink
                          to="https://www.linkedin.com/company/britfintechawards/posts/?feedView=all"
                          target="_blank"
                        >
                          Linkedin <i className="fab fa-linkedin" />
                        </NavLink>
                      </li>
                      <li className="cat-item">
                        <NavLink to="https://x.com/BritFintech" target="_blank">
                          Twitter <i className="fab fa-twitter" />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="cs-sidebar_item widget_archive">
    <h4 className="cs-sidebar_widget_title">Archives List</h4>
    <ul>
      <li><NavLink to="#">January 2023</NavLink>&nbsp;(1)</li>
      <li><NavLink to="#">April 2019</NavLink>&nbsp;(1)</li>
      <li><NavLink to="#">January 2013</NavLink>&nbsp;(5)</li>
      <li><NavLink to="#">March 2012</NavLink>&nbsp;(5)</li>
      <li><NavLink to="#">January 2012</NavLink>&nbsp;(6)</li>
    </ul>
  </div> */}
                </div>
                <div className="btn-div-css mt-3">
                  <NavLink
                    to="https://britfintechawards.com/sponsorship-categories#sponsorship-form"
                    className="btn-one mb-2"
                  >
                    Sponsor Now
                  </NavLink>
                  <NavLink
                    to="https://britfintechawards.com/register-now"
                    className="btn-two"
                  >
                    Register For Awards
                  </NavLink>
                </div>
                <div className="mt-3">
                  <img src="../assets/img/Fintech/11.png" alt="BFA" />
                </div>
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
