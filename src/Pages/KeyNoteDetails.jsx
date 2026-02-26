import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const keynoteData = [
  {
    id: "/keynote-speaker-2025/simone-martinelli-volume",
    name: "Simone Martinelli – Founder & CEO, Volume",
    img: "../assets/img/keynote-1.png",
    keywords:
      "Simone Martinelli, Volume CEO, Brit FinTech Awards 2025, keynote speaker, fintech leader, remittance innovation, cross-border payments, MSB solutions, Mastercard, WorldRemit, payment scalability, fintech keynote speaker",
    imgDet: "../assets/img/keynote-details.png",
    desc: "A visionary leader in the world of fintech, Simone Martinelli brings a wealth of expertise and a passion for transforming global remittances..",
    fullDesc: `A visionary leader in the world of fintech, Simone Martinelli brings a wealth of expertise
and a passion for transforming global remittances. With an impressive career spanning
leadership roles at Mastercard and WorldRemit, Simone is a true remittance insider who
understands the complexities and opportunities of cross-border payments.
As the Founder and CEO of Volume, Simone is on a mission to redefine how money moves
worldwide — making cross-border transfers instant, effortless, and cost-efficient. His all-in-
one platform empowers remittance businesses with the speed, compliance, and scalability
they need to thrive in today’s competitive landscape.
Guided by his vision, Volume has become more than just a technology provider — it’s a
partner in growth, helping MSBs and payment companies break boundaries and deliver
exceptional value to customers.
Volume – Everything Remittance Needs, in One Platform`,
    points: [
      "Visionary leader in fintech and remittances",
      "Leadership experience at Mastercard and WorldRemit",
      "Founder & CEO of Volume, redefining cross-border payments",
      "Empowers MSBs and payment companies with speed and compliance",
    ],
    link: "/keynote-speaker-2025/simone-martinelli",
    actions: [
      {
        label: "LinkedIn Profile",
        link: "https://www.linkedin.com/in/simonem88/",
        color: "#0A66C2",
      },
    ],
  },
];

const KeyNoteDetails = () => {
  const navigate = useNavigate();
  const keynote = keynoteData[0]; // Since we are showing only one keynote

  return (
    <>
      {/* Meta Tags */}
      <Helmet>
        <title>
          {keynote.name} - Keynote Speaker | Brit FinTech Awards 2025
        </title>
        <meta
          name="description"
          content={keynote.fullDesc.slice(0, 150)}
        />
        <meta
          property="og:title"
          content={`${keynote.name} Keynote Speaker | Brit FinTech Awards 2025`}
        />
        <meta
          property="og:description"
          content={keynote.fullDesc.slice(0, 150)}
        />
        <meta property="og:image" content={keynote.img} />
        <meta name="twitter:image" content={keynote.img} />
        <meta name="keywords" content={keynote.keywords} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section
        style={{
          width: "100%",
          padding: "60px 20px",
          backgroundColor: "#fff",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <div className="cs-height_90 cs-height_lg_90" />

        {/* Back Button */}
        <div style={{ textAlign: "right", marginBottom: "30px" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "10px 20px",
              fontSize: "15px",
              fontWeight: "600",
              background: "#ff2e63",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
            }}
          >
            ← Back
          </button>
        </div>

        {/* Card Container */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
            display: "flex",
            flexWrap: "wrap",
            overflow: "hidden",
          }}
        >
          {/* Image Section */}
          <div style={{ flex: "1 1 400px", minHeight: "350px" }}>
            <img
              src={keynote.imgDet}
              alt={keynote.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Text Section */}
          <div style={{ flex: "1 1 500px", padding: "30px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "8px",
                color: "#222",
              }}
            >
              {keynote.name}
            </h2>
            <h4
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#ff2e63",
                marginBottom: "16px",
              }}
            >
              Key Note Speaker
            </h4>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#555",
                marginBottom: "20px",
              }}
            >
              {keynote.fullDesc}
            </p>

            {/* Bullet Points */}
            <ul
              style={{
                paddingLeft: "20px",
                marginBottom: "20px",
                color: "#333",
                fontSize: "15px",
                lineHeight: "1.5",
              }}
            >
              {keynote.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            {/* Action Buttons */}
            {keynote.actions.length > 0 && (
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                {keynote.actions.map((btn, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(btn.link, "_blank")}
                    style={{
                      padding: "10px 20px",
                      fontSize: "14px",
                      fontWeight: "600",
                      background: btn.color || "#ff8a00",
                      color: "#fff",
                      border: "none",
                      borderRadius: "50px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyNoteDetails;
