import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const LeatherbackSponsorDetails = () => {
  return (
    <div>
      <Helmet>
        <title>Leatherback | Global Cross-Border Payment Solutions</title>
        <meta
          name="description"
          content="Leatherback is a UK-based fintech company revolutionising global financial mobility with innovative cross-border payment solutions for individuals and businesses worldwide."
        />
        <meta
          name="keywords"
          content="Brit Fintech Award, UK Fintech Awards, Leatherback, Cross-Border Payments, Multi-Currency Accounts, Global Financial Mobility, FCA Authorised Fintech"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Leatherback | Global Cross-Border Payment Solutions"
        />
        <meta
          property="og:description"
          content="Leatherback is a UK-based fintech company authorised by the FCA, offering end-to-end cross-border payment solutions, multi-currency accounts, and embedded finance capabilities."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/leatherback-details.png"
        />
      </Helmet>

      <div>
        <div className="cs-height_90 cs-height_lg_80" />

        <div
          className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
          style={{
            backgroundImage:
              'url("../assets/img/sponsor-logo/leatherback-details.png")',
            height: "300px",
          }}
        >
          <div className="cs-hero_pattern cs-hover_layer3"></div>
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
            <div className="cs-hero_text text-left"></div>
            <div className="cs-height_10 cs-height_lg_0" />
          </div>
          <div className="cs-hero_img cs-bg">
            <div className="cs-hero_img_circle" />
          </div>
        </div>

        <div className="cs-height_135 cs-height_lg_80" />

        <div className="container">
               <div style={{ marginBottom: "30px", textAlign: "right" }}>
                      <NavLink
                        to="/our-sponsors"
                        style={{
                          textDecoration: "none",
                          color: "#f40181",
                          fontWeight: "600",
                        }}
                      >
                        <i className="fas fa-chevron-left" style={{ marginRight: "8px" }} />
                        Back
                      </NavLink>
                    </div>
          <div className="cs-blog_details cs-style1">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <p>
                  Leatherback is a UK-based fintech company revolutionising
                  global financial mobility through innovative cross-border
                  payment solutions. Authorised by the Financial Conduct
                  Authority (FCA) in the UK, the company provides end-to-end
                  financial services to individuals and businesses worldwide.
                </p>
                <p>
                  With a mission to offer a single access point that removes
                  financial barriers, Leatherback enables money to move across
                  continents with ease, anytime and almost everywhere. Its
                  vision is to build best-in-class financial and payment
                  solutions that enhance global mobility.
                </p>
                <p>
                  From its London headquarters, Leatherback delivers
                  multi-currency accounts, cross-border payments, and embedded
                  finance capabilities, ensuring seamless international
                  transactions while navigating complex regulatory landscapes.
                  The company maintains a strategic presence in Canada, Nigeria,
                  the UK, Pakistan, and India.
                </p>
                <p>
                  Through its technology-driven approach, Leatherback eliminates
                  traditional barriers to international business, equipping
                  users with the tools to fully participate in the global
                  economy. As a forward-thinking organization, it continues to
                  foster trade relationships and make global commerce more
                  accessible and efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
           <div className="cs-height_90 cs-height_lg_80" />
      </div>
    </div>
  );
};

export default LeatherbackSponsorDetails;
