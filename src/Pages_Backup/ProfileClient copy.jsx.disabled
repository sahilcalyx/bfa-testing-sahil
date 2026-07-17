import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const About = () => {
  const [profileData, setProfileData] = useState(null);
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch("/profiles.json")
      .then((response) => response.json())
      .then((data) => {
        const profile = data.find((item) => item.id === parseInt(id));
        setProfileData(profile);
      })
      .catch((error) => {
        console.error("Error fetching profiles.json:", error);
      });
  }, [id]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     
      <div
        className="cs-hero cs-style12 cs-type1 cs-center text-center bg-adjust  cs-parallax cs-hobble"
        style={{
          backgroundImage: 'url("../assets/img/event-conference/hero-img.jpg")',
        }}
      >
        <div className="cs-hero_pattern cs-hover_layer3">
          <div
            className="cs-hero_pattern_in cs-bg_parallax"
           
          />
        </div>
        <div
          className="container wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="cs-hero_text text-left">
            <h1 className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-0 mb-2">
             ATTENDEE DETAILS
            </h1>
            <div className="cs-height_10 cs-height_lg_0" />
          </div>
        </div>
      </div>

      {/* Profile Details Section */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="cs-team_member cs-style8 text-center cs-white_bg">
              <div className="cs-team_member_in cs-transition_3 cs-accent_border">
                <div className="cs-member_image position-relative">
                  <img
                    src={profileData.img}
                    alt="Profile"
                    className="cs-accent_border cs-transition_3 profile-logo-img"
                  />
                </div>
                <div className="cs-member_info">
                  <h2 className="cs-member_name cs-semi_bold text-uppercase">
                    {profileData.name}
                  </h2>
                  <div className="cs-member_designation cs-primary_color">
                    {profileData.companyName}
                    <br />
                    {profileData.company}
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-height_40 cs-height_lg_30" />
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4">
            <div className="cs-team_member cs-style8 text-center cs-bfa-bg">
              <div className="cs-team_member_in cs-transition_3 cs-accent_border">
                <div className="cs-member_info">
                  <h2 className="cs-member_name cs-semi_bold text-uppercase text-white">
                    Contact No
                  </h2>
                  <div className="cs-member_designation cs-primary_color">
                    <a href={`tel:${profileData.contact}`} className="text-white">
                      {profileData.contact}
                    </a>
                  </div>
                </div>
                <div className="cs-member_info">
                  <h2 className="cs-member_name cs-semi_bold text-uppercase text-white">
                    Email
                  </h2>
                  <div className="cs-member_designation cs-primary_color">
                    <a href={`mailto:${profileData.email}`} className="text-white">
                      {profileData.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-height_40 cs-height_lg_30" />
          </div>
        </div>
      </div>
      <div className="cs-height_135 cs-height_lg_80" />
    </div>
  );
};

export default About;
