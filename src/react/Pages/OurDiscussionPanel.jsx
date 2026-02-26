import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import KeynoteSpeakersSection from "./2025/Keynotes/KeynoteSpeakersSection";
import DiscussionPannelSection from "./2025/DiscussionPannel/DiscussionPannelSection";

const OurDiscussionPanel = () => {
  return (
    <div>
   <Helmet>
    <title>Discussion Panel | Brit Fintech Awards UK | Celebrating FinTech Innovation</title>
    <meta
        name="description"
        content="Join Brit FinTech Awards UK, celebrating top innovations and achievements in FinTech, and honouring pioneers who are shaping the future of financial technology."
    />
    <meta
        name="keywords"
        content="Brit Fintech Award, UK Fintech Awards, About Us, Financial Technology Sector UK, Fintech Innovation UK"
    />
    <meta name="author" content="Brit Fintech Award" />
    <meta property="og:title" content="About Brit Fintech Awards UK | Celebrating FinTech Innovation" />
    <meta
        property="og:description"
        content="Join Brit FinTech Awards UK, celebrating top innovations and achievements in FinTech, and honouring pioneers who are shaping the future of financial technology."
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
           Our Discussion Panel
              
            </h1>
            <p className="pb-0 mb-0 text-left text-white"> 
             A Distinguished Panel Showcasing the Future of Fintech
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
        <DiscussionPannelSection />
              </div>
              </div>
    
  );
};

export default OurDiscussionPanel;
