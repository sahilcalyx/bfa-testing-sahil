import React from "react";
import { useNavigate } from "react-router-dom";

const discssionPanel = [
  {
    id: "/wayne-foster-discussion-panel-2025",
    name: "Wayne Foster",
    desig: "Ecosystem Support Specialist",
    company: "Open Banking Limited (OBL)",
    img: "../assets/img/discussionpanel/Wayne-Foster-dp.png",
    desc: "",
    companylogo: "../assets/img/discussionpanel/OBL_logotype_darkblu-Large.png",
    
  },
  {
    id: "/mario-van-poppel-discussion-panel-2025",
    name: "Mario Van Poppel",
    desig: "Founder",
    company: "Leftover Currency",
    img: "../assets/img/discussionpanel/mario-van-dp.jpg",
    desc: "",
     companylogo: "../assets/img/discussionpanel/leftover-logo-dp.svg",
  },
  {
    id: "/denis-kalyapin-discussion-panel-2025",
    name: "Denis Kalyapin",
    desig: "Chief Growth Officer",
    company: "Clear Junction",
    img: "../assets/img/discussionpanel/denis-kalyapin-dp.jpg",
    desc: "",
    companylogo: "../assets/img/discussionpanel/clear-junction-dp.svg",
  },
];

const DiscussionPannelSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="discussionpanel-section"
      style={{
        width: "100%",
        backgroundColor: "#f7f8fa",
        padding: "60px 20px",
      }}
    >
      <h2
        className="pt-3"
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "bold",
          letterSpacing: "2px",
          marginBottom: "40px",
          color: "#333",
          position: "relative",
        }}
      >
        OUR DISCUSSION PANEL
        <span
          style={{
            display: "block",
            width: "60px",
            height: "4px",
            margin: "10px auto 0",
            borderRadius: "2px",
            background: "linear-gradient(90deg, #ff2e63, #ff4a91)",
          }}
        ></span>
      </h2>

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "50px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {discssionPanel.map((speaker) => (
          <div
            key={speaker.id}
            style={{
              background: "#fff",
              borderRadius: "25px",
              overflow: "hidden",
              boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
              transition: "all 0.4s ease",
              position: "relative",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.08)";
            }}
          >
            {/* Gradient Top Strip */}
            <div
              style={{
                height: "8px",
                background: "linear-gradient(90deg, #ff2e63, #ff4a91)",
              }}
            ></div>

            {/* Speaker Image */}
            <div
              style={{
                position: "relative",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                margin: "20px auto",
                overflow: "hidden",
                border: "6px solid #fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "transform 0.4s ease",
                border: "4px solid aqua",
              }}
            >
              <img
                src={speaker.img}
                alt={speaker.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
              />
            </div>

            {/* Speaker Details */}
            <div style={{ padding: "30px 20px", textAlign: "center" }}>
              <h3
                style={{
                  fontSize: "26px",
                  fontWeight: "700",
                  color: "#ff2e63",
                  marginBottom: "5px",
                }}
              >
                {speaker.name}
              </h3>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#5a5a5aff",
                  marginBottom: "5px",
                }}
              >
                {speaker.desig}
              </h3>
              <img src={speaker.companylogo} alt={speaker.company} style={{height:"40px", width:"180px", marginBottom: "10px", objectFit: "contain", display: "block", margin: "0 auto 10px" }}>
              </img>
              {/* <p
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "25px",
                }}
              >
                {speaker.desc}
              </p> */}
              <div className="pt-2">
                <button
                  style={{
                    padding: "12px 28px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#fff",
                    background: "linear-gradient(90deg, #ff2e63, #ff4a91)",
                    border: "none",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => navigate(`${speaker.id}`, { state: speaker })}
                  onMouseOver={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  Learn More
                </button>
              </div>
              {/* <div className="text-center mt-3 pt-3">
                <a
                  onClick={() => navigate(`${speaker.id}`, { state: speaker })}
                  className={`cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hove`}
                  target="_blank"
                >
                  <span style={{ color: "#fff" }}> Learn More</span>
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscussionPannelSection;
