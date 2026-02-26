import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa"; // <-- import LinkedIn icon

const keynoteData = [
  {
    name: "Mario Van Poppel",
    title: "Founder, Leftover Currency",
    company: "Open Banking Limited (OBL)",
    companylogo: "../assets/img/discussionpanel/leftover-logo-dp.svg",
    img: "../assets/img/discussionpanel/mario-van-dp.jpg",
    imgDet: "../assets/img/keynotes/mario-van-dp.jpg",
    keywords: " ",
    desc: "A visionary leader in the world of fintech, Simone Martinelli brings a wealth of expertise and a passion for transforming global remittances..",
    fullDesc: `
  <p>
   After moving from Belgium to London, <strong>Mario Van Poppel</strong> founded <strong>Leftover Currency</strong> in 2012, inspired by his experience as a Digital Marketing Analyst at <strong>Thomas Cook</strong> and a clear gap in the market for exchanging foreign coins, old banknotes, and obsolete currencies.
 

  </p>

  <p>
Today, Leftover Currency is the <strong>UK's top-rated currency exchange company on TrustPilot, processing over three metric tons of coins and banknotes weekly</strong> from airports, in-flight donations, and individuals worldwide. Based in <strong>Datchet, Berkshire,</strong> the company employs 25 staff and offers a unique service to both individuals and businesses.

  </p>

  <p>
   In 2019, Mario expanded with <strong>Manor FX,</strong> a brand offering over <strong>100 exotic currencies</strong> to travelers - from <strong>Albanian Lek to Zambian Kwacha</strong> - covering both sides of the foreign exchange market. His vision has transformed forgotten money into a thriving fintech niche.
 
  </p>


  

`,

    points: [
      "Visionary leader in fintech and remittances",
      "Leadership experience at Mastercard and WorldRemit",
      "Founder & CEO of Volume, redefining cross-border payments",
      "Empowers MSBs and payment companies with speed and compliance",
    ],
    link: "/keynote-speaker-2025/simone-martinelli",
    actions: [
      {
        label: "Book A Ticket Now",
        link: "/ticket-booking",
        color: "#007bff",
      },
    ],
  },
];

const MarioVanPoppelDPDetails = () => {
  const navigate = useNavigate();
  const keynote = keynoteData[0];

  return (
    <>
      {/* Meta Tags */}
      <Helmet>
        <title>
          {keynote.name} - Discussion Panel | Brit FinTech Awards 2025
        </title>
        <meta
          name="description"
          content="Meet Wayne Foster, Ecosystem Support Specialist at Open Banking Limited and discussion panelist at Brit FinTech Awards 2025. Explore his impact on secure, compliant, and innovative financial ecosystems through open banking and smart data."
        />
        <meta
          property="og:title"
          content={`${keynote.name} Discussion Panel Speaker | Brit FinTech Awards 2025`}
        />
        <meta
          property="og:description"
          content="Meet Wayne Foster, Ecosystem Support Specialist at Open Banking Limited and discussion panelist at Brit FinTech Awards 2025. Explore his impact on secure, compliant, and innovative financial ecosystems through open banking and smart data."
        />
        <meta property="og:image" content={keynote.img} />
        <meta name="twitter:image" content={keynote.img} />
        <meta
          name="keywords"
          content=" Wayne Foster, Open Banking Limited, Brit FinTech Awards 2025, discussion panel, fintech expert UK, open banking specialist, financial compliance, smart data, fintech innovation, secure payments, FCA regulated, PSD2, UK finance events, fintech leadership, MSB inclusion"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section
        style={{
          width: "100%",
          backgroundColor: "#f0f0f0",

          padding: "140px 20px",
        }}
      >
        {/* Header Card (Photo + Name + Role + Back button) */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            backgroundImage: "url('/assets/img/keynotes/keynote banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "10px 10px 0 0",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* Photo + Details */}
          <div
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <img
              src={keynote.img}
              alt={keynote.name}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "#ccc",
                marginRight: "20px",
                flexShrink: 0,
                marginBottom: "20px",
                border: "2px solid aqua",
              }}
            />

            <div style={{ flex: 1, minWidth: "250px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  margin: "0",
                  color: "#ffffffff",
                  fontWeight: "700",
                }}
              >
                {keynote.name}
              </h2>
              <h4
                style={{
                  fontSize: "18px",
                  margin: "5px 0",
                  color: "#cac5c5ff",
                }}
              >
                {keynote.title}
              </h4>
              <div className="align-items-center d-flex ">
                <a
                  href="https://www.leftovercurrency.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={keynote.companylogo}
                    alt="Company Logo"
                    style={{
                      height: "50px",
                      width: "120px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "600",
                      marginTop: "10px",
                      backgroundColor: "#f5f5f5", // highlight background
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)", // shadow effect
                      padding: "5px", // adds spacing so background is visible
                    }}
                  ></img>
                </a>

                <a
                  href="https://www.linkedin.com/in/mariovanpoppel" // ochebhoya’s LinkedIn
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    // LinkedIn blue
                    color: "#ffffffff",
                    fontSize: "30px",
                    textDecoration: "none",
                    marginTop: "10px",
                    marginLeft: "1px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#0077B5")}
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "#ffffffff")
                  }
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <button
            onClick={() => {
              if (window.history.state && window.history.state.idx > 0) {
                navigate(-1);
              } else {
                navigate("/our-discussion-panel-2025"); // fallback route (homepage or desired page)
              }
            }}
            style={{
              padding: "10px 20px",
              fontSize: "15px",
              fontWeight: "600",
              background: "linear-gradient(135deg, #ff6a95, #ff2e63)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              position: "absolute",
              top: "20px",
              right: "20px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.opacity = "0.9")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            ← Back
          </button>
        </div>

        {/* Description Section */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0px auto 0 auto",
            background: "#fff",
            borderRadius: "0 0 10px 10px", // ✅ only bottom corners rounded
            padding: "30px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <p
            style={{
              lineHeight: "1.6",
              color: "#333",
              marginBottom: "10px",
            }}
            dangerouslySetInnerHTML={{ __html: keynote.fullDesc }}
          />

          {/* Bullet Points */}
          {/* <ul
            style={{
              paddingLeft: "20px",
              marginBottom: "30px",
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.6",
            }}
          >
            {keynote.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul> */}

          {/* Action Buttons */}
          {/* <div>
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
                  textAlign: "center",
                  cursor: "pointer",
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

export default MarioVanPoppelDPDetails;
