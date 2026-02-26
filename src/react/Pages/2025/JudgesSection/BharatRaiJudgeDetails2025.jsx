import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const judgesList = [

  {
    id: "/bharat-rai-judge-details-2025",
    name: "Mr. Bharat Rai",
    desig: "Workplace Strategy Lead",
    company: "CBRe",
    img: "../assets/img/judges2025/Bharat-Rai.png",
    linkedin: "https://www.linkedin.com/in/bharat-rai-mih-3b531157",
  },
];

const keynoteData = [
  {
    name: "Bharat Rai",
    title: "Workplace Strategy Lead , CBRe",
    company: "CBRe",
    img: "../assets/img/judges2025/Bharat-Rai.png",
    fullDesc: `
      <p>
    <strong>Bharat Rai</strong> brings over <strong>22 years of expertise</strong> in shaping hospitality and workplace strategies, with a career that spans some of the world’s most dynamic industries.

      </p>
      <p>
       Previously with <strong>CBRE</strong>, Bharat oversaw employee engagement and workplace strategy for a <strong>Fortune 500 financial client</strong>, driving innovation in service delivery and workplace efficiency. Today, he leads workplace strategy for one of the <strong>world’s largest pharmaceutical companies</strong>, covering <strong>47 countries</strong> and supporting <strong>14,000 employees across Europe.</strong>
     <br/>
     <br/>
     What sets Bharat apart is his ability to <strong>identify and remove friction from customer journeys</strong> — whether digital, physical, or operational. By transforming gaps into <strong>seamless, human-centric experiences</strong>, he ensures organisations deliver meaningful outcomes for both employees and customers.
      </p>
      <p>
      With a proven track record in <strong>financial services and pharma</strong>, Bharat is recognised as a <strong>trusted voice in elevating customer and employee experiences</strong>, blending strategic insight with a passion for innovation.
      </p>
      <p>At the <strong>Brit Fintech Awards 2025</strong>, Bharat brings his global perspective and sharp eye for excellence to the jury panel — ensuring fair, impactful, and inspiring recognition for the leaders shaping the future of FinTech and MSBs.</p>
   
    `,
    actions: [
      {
        label: "Book A Ticket Now",
        link: "/ticket-booking",
      },
    ],
  },
];

const BharatRaiJudgeDetails2025 = () => {
  const navigate = useNavigate();
  const keynote = keynoteData[0];
  const judge = judgesList[0];

  // Split first two vs remaining paragraphs
  const parser = new DOMParser();
  const doc = parser.parseFromString(keynote.fullDesc, "text/html");
  const paragraphs = Array.from(doc.querySelectorAll("p"));
  const firstTwo = paragraphs
    .slice(0, 2)
    .map((p) => p.outerHTML)
    .join("");
  const rest = paragraphs
    .slice(2)
    .map((p) => p.outerHTML)
    .join("");

  return (
    <>
      <Helmet>
        <title>{keynote.name} - Judge | Brit FinTech Awards 2025</title>
        <meta
          name="description"
          content={`Meet ${keynote.name}, ${keynote.title}, judge at Brit FinTech Awards 2025.`}
        />
        <meta property="og:image" content={keynote.img} />
      </Helmet>

      <section
        style={{
          width: "100%",
          backgroundColor: "#f0f0f0",
          padding: "150px 20px 70px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "10px",
            padding: "40px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          {/* Back Button */}
          <button
            onClick={() => {
              if (window.history.state && window.history.state.idx > 0) {
                navigate(-1);
              } else {
                navigate("/judges");
              }
            }}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              padding: "10px 18px",
              fontSize: "14px",
              fontWeight: "600",
              background: "linear-gradient(135deg, #ff6a95, #ff2e63)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              zIndex: 10,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ← Back
          </button>

          {/* Top Section (Image + Info + 2 paras) */}
          <div
            style={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
              marginBottom: "30px",
            }}
          >
            {/* Image */}
            <div style={{ flex: "1 1 300px", textAlign: "center" }}>
              <img
                src={judge.img}
                alt={judge.name}
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  borderRadius: "0 0 250px 250px", // ✅ bottom half-circle style
                  objectFit: "cover",
                  border: "5px solid rgb(255 70 119)", // ✅ no semicolon
                  WebkitBoxShadow: "0 14px 20px rgba(0, 0, 0, 0.20)", // ✅ camelCase
                  boxShadow: "0 14px 20px rgba(0, 0, 0, 0.20)",
                }}
              />
            </div>

            {/* Info + First Two paras */}
            <div style={{ flex: "2 1 500px",  }}>
              {/* Judge Info */}
              <h2 style={{ marginBottom: "10px", color: "#222" }}>
                {judge.name}
              </h2>
              <h5 style={{ marginBottom: "5px", color: "#666" }}>
                {judge.desig}
              </h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#808080ff",
                    margin: 0,
                    
                  }}
                >
                  {judge.company}
                </p>
                {judge.linkedin && (
                  <a
                    href={judge.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#0077b5",
                      color: "#fff",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#0a66c2";
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 16px rgba(0,0,0,0.4)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "#0077b5";
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0,0,0,0.3)";
                    }}
                  >
                    <FaLinkedin size={22} />
                  </a>
                )}
              </div>

              {/* First two paragraphs */}
              <div
                style={{ lineHeight: "1.6", color: "#333",paddingTop: "20px" }}
                dangerouslySetInnerHTML={{ __html: firstTwo }}
              />
            </div>
          </div>

          {/* Remaining paragraphs (full width) */}
          <div
            style={{ lineHeight: "1.6", color: "#333", marginBottom: "20px" }}
            dangerouslySetInnerHTML={{ __html: rest }}
          />

          {/* Action Buttons */}
          {/* <div className="text-center">
            {keynote.actions.map((btn, index) => (
              <button
                key={index}
                onClick={() => window.open(btn.link, "_blank")}
                style={{
                  padding: "12px 24px",
                  fontSize: "16px",
                  fontWeight: "600",
                  background: "linear-gradient(135deg, #ff6a95, #ff2e63)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {btn.label}
              </button>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default BharatRaiJudgeDetails2025;
