import React from "react";
import { useNavigate } from "react-router-dom";

const keynoteData = [
  {
    id: "/ochebhoya-ekpete-leatherback",
    name: "Ochebhoya Ekpete",
    desig: "CEO, Leatherback UK",
    img: "../assets/img/keynotes/Ochebhoya_Ekpete Sixe_logo.png",
    desc: "Ochebhoya Ekpete is the CEO of Leatherback, UK, with over 15 years of experience in financial leadership...",
    link: "/keynote-speaker-2025/simone-martinelli",
  },
  {
    id: "/simone-martinelli-volume",
    name: "Simone Martinelli",
    desig: "Founder & CEO, Volume",
    img: "../assets/img/keynotes/Simone-logo.png",
    desc: "A visionary leader in the world of fintech, Simone Martinelli brings a wealth of expertise and a passion for...",
    link: "/keynote-speaker-2025/simone-martinelli",
  },
];

const KeynoteSpeakersSection = () => {
  const navigate = useNavigate();

  return (
    <section
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
        OUR KEYNOTE SPEAKERS
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
        {keynoteData.map((speaker) => (
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
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#5a5a5aff",
                  marginBottom: "5px",
                }}
              >
                {speaker.desig}
              </h3>
              <p
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "25px",
                }}
              >
                {speaker.desc}
              </p>
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
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeynoteSpeakersSection;
