import React from "react";
import { useNavigate } from "react-router-dom";

const judgesList = [
  {
    id: "/giordano-cortese-judge-details-2025",
    name: "Mr. Giordano Cortese",
    desig: "Partnerships & Acquisitions Senior Manager",
    company: "First Rate Exchange Services Ltd",
    img: "../assets/img/judges2025/giordano-cortese.jpg",
    linkdinlink: "https://www.linkedin.com/in/giordanocortese1",
  },
  {
    id: "/david-podesta-judge-details-2025",
    name: "Mr. David Podesta",
    desig: "Associate Director, Trust & Safety (Fraud)",
    company: "Viator",
    img: "../assets/img/judges2025/david-podesta.jpg",
    linkdinlink: "https://www.linkedin.com/in/david-christian-podesta-6677661/",
  },
  {
    id: "/bharat-rai-judge-details-2025",
    name: "Mr. Bharat Rai",
    desig: "Workplace Strategy Lead ",
    company: "CBRe",
    img: "../assets/img/judges2025/Bharat-Rai.png",
    linkdinlink: "https://www.linkedin.com/in/bharat-rai-mih-3b531157",
  },
  {
    id: "/nikhil-sapre-judge-details-2025",
    name: "Dr. Nikhil Sapre",
    desig: "Lecturer in Finance & Programme Director",
    company: "University of Bristol Business School",
    img: "../assets/img/judges2025/nikhil-sapare.jpg",
    linkdinlink: "https://www.linkedin.com/in/nikhilsapre?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app",
  },
  
 
];

const JudgesSection2025 = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Judges Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // ✅ allows wrapping
          gap: "15px",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {judgesList.map((judge, index) => (
          <div
            key={index}
            className="speaker-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
            style={{
              visibility: "visible",
              animationName: "fadeInUp",
              flex: "1 1 300px", // ✅ responsive width
              maxWidth: "350px", // keeps design intact
            }}
          >
            <div className="inner-box text-center">
              <div className="image-box">
                <figure className="image">
                  <a
                    onClick={() => navigate(judge.id, { state: judge })}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={judge.img} alt={judge.name} />
                  </a>
                </figure>
                <a className="plus-icon" href={judge.linkdinlink}target="_blank" rel="noreferrer">
                  <span className="fab fa-linkedin" />
                </a>
              </div>
              <div className="info-box">
                <h4 className="name mb-1 text-white">
                  <a
                    onClick={() => navigate(judge.id, { state: judge })}
                    style={{ cursor: "pointer" }}
                  >
                    {judge.name}
                  </a>
                </h4>
                <span className="designation">{judge.desig}</span>
                <br />
                <small style={{ fontSize: "14px", color: "#aaa" }}>
                  {judge.company}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default JudgesSection2025;
