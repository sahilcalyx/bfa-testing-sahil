import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../Components/profile.css";
import { EmailOutlined, Language, PhoneOutlined } from "@mui/icons-material";
import { Link } from "@mui/material";

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
    return (
      <div>
        <div id="loading-indicator">
          <div className="lds-hourglass"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="body-profile ">
      <div className="phone">
        <div className="screen">
          <div className="cover" />
          <div className="content">
            <img
              className="user-avatar"
              wclassNameth={120}
              height={120}
              src={profileData.img}
              alt="Avatar"
            />
            <p className="user-name text-white">{profileData.name}</p>
            <p className="user-location">{profileData.company}</p>

            <div className="user-general-values d-flex justify-content-center">
              <p>
                <a
                  href={`tel:${profileData.contact}`}
                  className="profile-icons"
                >
                  <PhoneOutlined />
                </a>
              </p>

              <p>
                <a
                  href={`mailto:${profileData.email}`}
                  className="profile-icons"
                >
                  <EmailOutlined className="profile-icons" />
                </a>
              </p>
              <p>
                <a
                  href={`${profileData.website}`}
                  target="_blank"
                  className="profile-icons"
                >
                  <Language className="profile-icons" />
                </a>
              </p>
            </div>

            <div className="card w-75 mt-5">
              <div className="card-body h-100">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <h5 className="mb-0 pb-0" style={{ fontWeight: "600" }}>
                    NAME
                  </h5>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p className="pt-0 mt-0">{profileData.name}</p>
                  </div>

                  <h5 className="mb-0 pb-0" style={{ fontWeight: "600" }}>
                    MOBILE
                  </h5>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p className="pt-0 mt-0">{profileData.contact}</p>
                  </div>

                  <h5 className="mb-0 pb-0" style={{ fontWeight: "600" }}>
                    EMAIL
                  </h5>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p className="pt-0 mt-0">{profileData.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
