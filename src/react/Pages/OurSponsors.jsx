import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const OurSponsors = () => {
  const [activeAccordion, setActiveAccordion] = useState(0); // Set the initial active accordion to the first item

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Example FAQ Data
  const faqData = [
    {
      question: "2025 Sponsors",
      answer: (
        <div className="container py-5">
          {/* Hosted By */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-3 col-md-4 col-10 col-sm-10">
              <div
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-8px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <NavLink target="_blank" to="https://calyx-solutions.com/">
                  <img
                    src="../assets/img/sponsor-logo/calyx-2025.png"
                    alt="Calyx Solutions"
                    style={{
                      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                      borderRadius: "15px",
                    }}
                  />
                </NavLink>
              </div>
            </div>
          </div>

          {/* Middle Sponsors */}
          <div className="row justify-content-center g-4 mb-5">
            {[
              {
                link: "/fast-track-money-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/Fast-track-money-logo.png",
                alt: "Fast Track Money",
              },
              {
                link: "/mercury-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/Mercury-Danati-25.png",
                alt: "Mercury Danati",
              },
              {
                link: "/leatherback-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/leatherback-logo.png",
                alt: "Leatherback",
              },
             
              {
                link: "/volume-pay-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/volume-silver-2025.png",
                alt: "volume-pay",
              },
               {
                link: "/travel-cashier-details-2025",
                img: "../assets/img/sponsor-logo/travel-cashier-2025.png",
                alt: "Travel Cashier",
              },
              {
                link: "/endoz-disbuz-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/endoz-logo-2025.png",
                alt: "Endoz Disbuz",
              },
              {
                link: "/endoz-disbuz-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/disbuz-logo-2025.png",
                alt: "Endoz Disbuz",
              },
               {
                link: "/ecex-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/ECEX-logo.png",
                alt: "ECEX",
              },
              {
                link: "/leftover-currency-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/Leftover-currency-logo.png",
                alt: "leftover currency",
              },
               {
                link: "/qfremit-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/qfremit-sponsor-Logo.png",
                alt: "qfremit",
              },
               {
                link: "/lumine-solicitors-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/Luminelaw-sponsor-Logo.png",
                alt: "Luminelaw",
              },
             
              {
                link: "/clear-junction-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/clear-junction-logo-2025.png",
                alt: "Clear Junction",
              },
              {
                link: "/ifepay-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/IfePay-Strategic-Sponsor-Logo.png",
                alt: "ifepay currency",
              },
              {
                link: "/myremit-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/Myremit-sponsor-Logo.png",
                alt: "MyRemit",
              },
               {
                link: "/kmbal-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/kmbal-sponsor-Logo.png",
                alt: "kmbal ",
              },
              {
                link: "/red-sea-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/red-sea-sponsor-logo.png",
                alt: "red sea ",
              },
                 {
                link: "/chrisborough-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/chrisborough-sponsor-logo.png",
                alt: "chrisborough",
              },
                 {
                link: "/purse-baas-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/Purse-Baas-sponsor-logo.png",
                alt: "Purse Baas",
              },
              {
                link: "/teeparam-exchange-details-2025",
                img: "../assets/img/sponsor-logo/Teeparam-sponsor-Logo.png",
                alt: "teeparam exchange",
              },

              {
                link: "/baazmoney-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/baazmoney-sponsor-Logo.png",
                alt: "baazmoney currency",
              },
              {
                link: "/finestpay-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/finestPay-sponsor-Logo.png",
                alt: "leftover currency",
              },
             
             
              {
                link: "/belyfted-sponsor-details-2025",
                img: "../assets/img/sponsor-logo/Belyfted-sponsor-Logo.png",
                alt: "Belyfted",
              },
              {
                link: "https://necmoney.com/",
                img: "../assets/img/sponsor-logo/Nec-money-sponsor-logo.png",
                alt: "Nec Money Currency",
              },
              {
                link: "https://kmoney.co.uk/",
                img: "../assets/img/sponsor-logo/KMoney-Sponsor-Logo.png",
                alt: "KMoney",
              },
              

              
              
           

            



            ].map((s, index) => (
              <div className="col-lg-3 col-md-4 col-10 col-sm-10" key={index}>
                <div
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-8px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  {s.link === "https://necmoney.com/" || s.link === "https://kmoney.co.uk/" ? (
                    <a href={s.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={s.img}
                        alt={s.alt}
                        style={{
                          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                          borderRadius: "15px",
                        }}
                      />
                    </a>
                  ) : (
                    <NavLink to={s.link}>
                      <img
                        src={s.img}
                        alt={s.alt}
                        style={{
                          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                          borderRadius: "15px",
                        }}
                      />
                    </NavLink>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Sponsor */}
          {/* <div className="row justify-content-center">
    <div className="col-lg-3 col-md-4 col-10 col-sm-10">
      <div
   
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <NavLink to="/teeparam-exchange-details-2025">
          <img
            src="../assets/img/sponsor-logo/Teeparam-sponsor-Logo.png"
            alt="Teeparam Exchange"
      style={{
      
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  borderRadius: "15px"
            }}
          />
        </NavLink>
      </div>
    </div>
  </div> */}
        </div>
      ),
    },
    {
      question: "2024 Sponsors",
      answer: (
        <div className="row justify-content-center">
          <div className="col-lg-2"></div>
          <div className="col-lg-4 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-sponsor-logo cs-center cs-transition_3">
              <a href="https://www.calyx-solutions.com" target="_blank">
                {" "}
                <img src="../assets/img/sponsor-logo/calyx.png" alt="Sponsor" />
              </a>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-accent_bg_2 cs-accent_bg_hover cs-transition_3">
              <NavLink to="/vyne-gold-sponsor">
                <img src="../assets/img/sponsor-logo/Vyne.png" alt="Sponsor" />
              </NavLink>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>
          <div className="col-lg-2"></div>

          <div className="col-lg-3 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-accent_bg_2 cs-accent_bg_hover cs-transition_3">
              <a href="https://www.gbgplc.com/" target="_blank">
                <img src="../assets/img/sponsor-logo/gbg.png" alt="Sponsor" />
              </a>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-accent_bg_2 cs-accent_bg_hover cs-transition_3">
              <NavLink to="/volume-payments-sponsor">
                <img
                  src="../assets/img/sponsor-logo/Volume.png"
                  alt="Sponsor"
                />
              </NavLink>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-transition_3">
              <NavLink to="/travel-cashier-silver-sponsor">
                <img
                  src="../assets/img/sponsor-logo/travel-cashier.png"
                  alt="Sponsor"
                />
              </NavLink>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-sponsor-logo cs-center cs-transition_3">
              <NavLink to="/mtbs-silver-sponsor">
                <img src="../assets/img/sponsor-logo/mtbs.png" alt="Sponsor" />
              </NavLink>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-transition_3">
              <a href="https://baazmoneytransfer.co.uk/" target="_blank">
                <img src="../assets/img/sponsor-logo/baaz.png" alt="Sponsor" />
              </a>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-transition_3">
              <a href="https://fxcurrencyltd.co.uk/" target="_blank">
                <img
                  src="../assets/img/sponsor-logo/fx-cuurency.png"
                  alt="Sponsor"
                />
              </a>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-transition_3">
              <a href="https://kmoney.co.uk/" target="_blank">
                <img
                  src="../assets/img/sponsor-logo/kmoney.png"
                  alt="Sponsor"
                />
              </a>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-transition_3">
              <a href="https://redseamoneytransfer.co.uk/" target="_blank">
                <img
                  src="../assets/img/sponsor-logo/redsea.png"
                  alt="Sponsor"
                />
              </a>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-transition_3">
              <a href="https://supertransfer.co.uk/" target="_blank">
                <img
                  src="../assets/img/sponsor-logo/super-transfer.png"
                  alt="Sponsor"
                />
              </a>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-transition_3">
              <a href="https://sumsub.com/" target="_blank">
                <img
                  src="../assets/img/sponsor-logo/sumsub.png"
                  alt="Sponsor"
                />
              </a>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-transition_3">
              <a href="https://teeparamexchange.co.uk/" target="_blank">
                <img
                  src="../assets/img/sponsor-logo/teeparam.png"
                  alt="Sponsor"
                />
              </a>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-transition_3">
              <a href="https://transferrocket.co.uk/" target="_blank">
                <img
                  src="../assets/img/sponsor-logo/transfer-rocket.png"
                  alt="Sponsor"
                />
              </a>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-transition_3">
              <a href="https://mathbeecom.co.uk/" target="_blank">
                <img
                  src="../assets/img/sponsor-logo/mathbeecom.png"
                  alt="Sponsor"
                />
              </a>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs-logo_carousel cs-style3 cs-center cs-sponsor-logo cs-transition_3">
              <a href="https://www.webuyanycurrency.com/" target="_blank">
                <img
                  src="../assets/img/sponsor-logo/Mercury-Danati.png"
                  alt="Sponsor"
                />
              </a>
            </div>
            <div className="cs-height_50 cs-height_lg_30" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Meet Our Sponsors | Brit Fintech Awards Sponsors</title>
        <meta
          name="description"
          content="Meet our sponsors, the leading Fintech Awards sponsors in the UK, supporting innovation as financial award sponsors at the prestigious Brit Fintech Awards."
        />
        <meta
          name="keywords"
          content="Brit Fintech Awards, Sponsors, Financial Technology, Fintech Sponsors, Supporters, Fintech Innovation, Fintech Awards Sponsors UK, Financial Award Sponsors"
        />
        <meta name="author" content="Brit Fintech Awards" />
        <meta
          property="og:title"
          content="Meet Our Sponsors | Brit Fintech Awards Sponsors"
        />
        <meta
          property="og:description"
          content="Meet our sponsors, the leading Fintech Awards sponsors in the UK, supporting innovation as financial award sponsors at the prestigious Brit Fintech Awards."
        />
      </Helmet>

      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        <div
          className="cs-hero cs-style12 cs-type1 cs-center text-center  cs-parallax cs-hobble"
          style={{
            backgroundImage:
              'url("../assets/img/event-conference/hero-img.jpg")',
          }}
        >
          <div className="cs-hero_pattern cs-hover_layer3" style={{}}>
            <div className="cs-hero_pattern_in cs-bg_parallax" />
          </div>
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
            <div className="cs-hero_text text-left">
              <h1 className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-3 mb-0">
                Our Sponsors
              </h1>

              <p className="text-left text-white mb-0">
                We are honored to collaborate with leading organisations in the
                fintech industry.
              </p>
            </div>
          </div>
          <div
            className="cs-hero_img cs-bg"
            data-src="../assets/img/creative-agency/hero-img.jpg"
            style={{
              backgroundImage:
                'url("../assets/img/creative-agency/hero-img.jpg")',
            }}
          >
            <div className="cs-hero_img_circle" />
          </div>
        </div>

        <div className="cs-height_90 cs-height_lg_80" id="our-sponsors" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cs-accordians cs-style1">
                {faqData.map((faq, index) => (
                  <div
                    className={`cs-accordian ${
                      activeAccordion === index ? "active" : ""
                    }`}
                    key={index}
                  >
                    <div
                      className="cs-accordian_head cs-accent_border_2 cs-white_bg"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h2 className="cs-accordian_title">{faq.question}</h2>
                      <span className="cs-accordian_toggle cs-accent_color_2">
                        <i
                          className={`fa ${
                            activeAccordion === index
                              ? "fa-angle-up"
                              : "fa-angle-down"
                          }`}
                        />
                      </span>
                    </div>
                    <div
                      className="cs-accordian-body"
                      style={{
                        display: activeAccordion === index ? "block" : "none",
                      }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs-height_40 cs-height_lg_40" />
      {/* <div
        className="cs-bg"
        style={{
          backgroundImage:
            'url("../assets/img/event-conference/newsletter-bg.jpg")',
        }}
      >
        <div
          className="cs-bg"
          data-src="../assets/img/event-conference/newsletter-particel.png"
          style={{
            backgroundImage:
              'url("../assets/img/event-conference/newsletter-particel.png")',
          }}
        >
          <div className="cs-height_135 cs-height_lg_75" />
          <div className="container">
            <div className="row">
              <div
                className="col-lg-8 offset-lg-2 wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.2s",
                  animationName: "fadeInDown",
                }}
              >
                <div className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase">
                  <div className="cs-section_subtitle cs-primary_font cs-medium cs-white_80">
                    BRIT FINTECH AWARDS 2024
                  </div>
                  <h2 className="cs-section_title cs-extra_bold cs-white">
                    Are you ready to enter?
                  </h2>
                  <p className="text-white mt-2">
                    Join us in celebrating the best and brightest in UK Fintech
                    Industry.
                  </p>
                </div>
                <div className="cs-height_40 cs-height_lg_30" />
                <div className="cs-toolbox text-center">
                  <NavLink
                    to="/register-now"
                    className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover  text-white"
                  >
                    <span className="cs-btn_text">Register For Awards</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-height_140 cs-height_lg_80" />
        </div>
      </div> */}
    </div>
  );
};

export default OurSponsors;
