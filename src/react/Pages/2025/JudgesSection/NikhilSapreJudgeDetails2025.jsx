import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const judgesList = [

  {
    id: "/nikhil-sapre-judge-details-2025",
    name: "Dr. Nikhil Sapre",
    desig: "Lecturer in Finance & Programme Director for MSc Financial Technology",
    company: "University of Bristol Business School",
    img: "../assets/img/judges2025/nikhil-sapare.jpg",
    linkedin: "https://www.linkedin.com/in/nikhilsapre?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app",
  },
];

const keynoteData = [
  {
    name: "Bharat Rai",
    title: "Lecturer in finance and the Programme Director for MSc Financial Technology",
    company: "University of Bristol Business School",
    img: "../assets/img/judges2025/Bharat-Rai.png",
    fullDesc: `
      <p>
  Dr. Sapre is a <strong>lecturer in finance</strong> and the <strong>Programme Director for MSc Financial Technology</strong> at the <strong>University of Bristol Business School, UK,</strong> bringing with him over <strong>15 years of experience</strong> in higher education, banking, and financial services.

      </p>
      <p>
        Before joining the University of Bristol, Dr. Sapre held teaching positions at Coventry University, UK, and previously worked in the financial industry with two multinational banks. He also co-founded and managed a manufacturing start-up in India, adding valuable entrepreneurial experience to his profile.
     <br/>
     <br/>
    His academic research focuses on the <strong>obstacles to and consequences of financial development</strong>, with publications featured in books and journals.

      </p>
      <p>
      Dr. Sapre holds a <strong>PhD in Finance</strong>, MSc in Finance & Accounting, and a Postgraduate Diploma in Research Methods from the <strong>University of Bradford, UK</strong>, along with a BA in Business Management from the <strong>University of Sunderland</strong>. He is also a <strong>Fellow of the Higher Education Academy (UK)</strong>.
      </p>
      <p>
      With his strong background in academia, finance, and entrepreneurship, Dr. Sapre brings unique insights and expertise that will greatly enrich our jury panel.
      </p>
      
   
    `,
    actions: [
      {
        label: "Book A Ticket Now",
        link: "/ticket-booking",
      },
    ],
  },
];

const NikhilSapreJudgeDetails2025 = () => {
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
              > <a href="https://www.bristol.ac.uk/people/person/Nikhil-Sapre-56f31082-4280-4b3f-84ee-17b6f5b0482c/">
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#808080ff",
                    margin: 0,
                    
                  }}
                >
                 
                  {judge.company}
                </p></a>
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

export default NikhilSapreJudgeDetails2025;
