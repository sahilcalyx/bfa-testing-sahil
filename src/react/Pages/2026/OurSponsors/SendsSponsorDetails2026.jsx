import { Helmet } from "react-helmet";
import React from "react";
import { NavLink } from "react-router-dom";

const BANNER_IMG =
  "/assets/img/sponsor-logo/sponsor-banner-strip-2026/sends-details-banner-2026.png";
const LOGO_IMG = "/assets/img/testimonial25/sends25-logo.png";
const SITE_URL = "https://sends.co";
const PAGE_PATH = "/sends-sponsor-details-2026";
const OG_IMAGE = `https://britfintechawards.com${BANNER_IMG}`;

const SendsSponsorDetails2026 = () => {
  const individualFeatures = [
    {
      icon: "fa-user-check",
      title: "Digital Onboarding",
      desc: "Open your account quickly with a streamlined, fully digital onboarding experience.",
    },
    {
      icon: "fa-coins",
      title: "Multi-Currency Accounts",
      desc: "Hold and manage funds across currencies with dedicated IBANs in one place.",
    },
    {
      icon: "fa-credit-card",
      title: "Virtual Payment Cards",
      desc: "Access virtual cards for flexible everyday spending and online payments.",
    },
    {
      icon: "fa-mobile-alt",
      title: "Apple Pay & Google Pay",
      desc: "Spend seamlessly through Apple Pay and Google Pay with complete visibility and control.",
    },
  ];

  const businessFeatures = [
    {
      icon: "fa-store",
      title: "Online Card Acquiring",
      desc: "Accept online card payments through integrated acquiring services built for growth.",
    },
    {
      icon: "fa-tachometer-alt",
      title: "Merchant Dashboards",
      desc: "Manage transactions, payouts, and payment workflows from dedicated merchant dashboards.",
    },
    {
      icon: "fa-paper-plane",
      title: "Global Payouts",
      desc: "Make fast payouts to cards and bank accounts worldwide from a single platform.",
    },
    {
      icon: "fa-briefcase",
      title: "Corporate Cards & Treasury",
      desc: "Issue corporate payment cards and streamline treasury operations across teams.",
    },
  ];

  const networks = [
    { icon: "fa-university", title: "SEPA", desc: "European payments access" },
    { icon: "fa-globe", title: "SWIFT", desc: "International transfers" },
    { icon: "fa-landmark", title: "UK Local Payments", desc: "Domestic UK rails" },
    { icon: "fa-id-card", title: "Dedicated IBANs", desc: "Multi-currency accounts" },
  ];

  const securityFeatures = [
    {
      title: "FCA-Authorised EMI",
      desc: "Operated by Smartflow Payments Limited as an FCA-authorised Electronic Money Institution.",
    },
    {
      title: "PCI DSS 4.0 Compliance",
      desc: "Maintains robust card data security standards across the payments platform.",
    },
    {
      title: "Advanced Encryption",
      desc: "Protects sensitive data with modern encryption technologies end to end.",
    },
    {
      title: "Fraud Prevention",
      desc: "Built-in fraud prevention measures help protect accounts and transactions.",
    },
    {
      title: "Multi-Factor Authentication",
      desc: "Adds an extra layer of protection for secure account access and operations.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#333",
      }}
    >
      <Helmet>
        <title>Sends | Silver Sponsor | Brit FinTech Awards 2026</title>
        <meta
          name="description"
          content="Sends is a UK-based fintech platform by Smartflow Payments Limited offering multi-currency accounts, international payments, cards, and payment acceptance in one secure ecosystem."
        />
        <meta
          name="keywords"
          content="Sends, Smartflow Payments Limited, FCA EMI, multi-currency accounts, SEPA, SWIFT, UK payments, Brit FinTech Awards sponsor 2026"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://britfintechawards.com${PAGE_PATH}`}
        />
        <meta
          property="og:title"
          content="Sends — Modern Payments for a Borderless Economy | Brit FinTech Awards 2026"
        />
        <meta
          property="og:description"
          content="Sends combines multi-currency accounts, international payments, card solutions, and payment acceptance in a single secure ecosystem."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Sends - Silver Sponsor | Brit FinTech Awards 2026"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sends — Modern Payments for a Borderless Economy | Brit FinTech Awards 2026"
        />
        <meta
          name="twitter:description"
          content="Sends combines multi-currency accounts, international payments, card solutions, and payment acceptance in a single secure ecosystem."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      {/* Banner — mild zoom on mobile; full strip on desktop (same as Mercury) */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        href={SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Sends website"
        className="sponsor-banner-2026 relative block w-full overflow-hidden bg-[#2a0a10] h-[130px] sm:h-[160px] md:h-auto"
        style={{ lineHeight: 0 }}
      >
        <img
          src={`${BANNER_IMG}?v=3`}
          alt="Sends — Silver Sponsor | Brit FinTech Awards 2026"
          width={1920}
          height={430}
          decoding="async"
          className="block w-full h-full md:h-auto object-cover object-center md:object-contain scale-[1.35] sm:scale-[1.25] md:scale-100 origin-center"
          style={{
            width: "100%",
            display: "block",
          }}
        />
      </a>

      {/* Content */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div />
          <NavLink
            to="/our-sponsors"
            style={{
              textDecoration: "none",
              color: "#c8102e",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            <i className="fas fa-chevron-left" style={{ marginRight: "8px" }} />
            Back to Sponsors
          </NavLink>
        </div>

        {/* Intro */}
        <div style={{ marginBottom: "40px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              marginBottom: "16px",
              flexWrap: "wrap",
            }}
          >
            <img
              src={LOGO_IMG}
              alt="Sends"
              style={{
                height: "56px",
                width: "auto",
                objectFit: "contain",
                borderRadius: "10px",
                background: "#fff",
                padding: "8px 12px",
                border: "1px solid #e2e8f0",
              }}
            />
            <div>
              <h1
                style={{
                  fontWeight: "900",
                  fontSize: "2.4rem",
                  textAlign: "left",
                  color: "#000",
                  lineHeight: "1.2",
                  margin: 0,
                }}
              >
                Sends
              </h1>
              <p
                style={{
                  margin: "6px 0 0",
                  color: "#64748b",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                Operated by Smartflow Payments Limited
              </p>
            </div>
          </div>
          <h4
            style={{
              fontWeight: "700",
              fontSize: "1.4rem",
              color: "#c8102e",
              letterSpacing: "0.5px",
              marginTop: "5px",
            }}
          >
            Modern payments for a borderless economy
          </h4>
        </div>

        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: "1.8",
            marginBottom: "30px",
            color: "#475569",
            fontWeight: "500",
          }}
        >
          Sends is a UK-based fintech company providing a modern payments platform for
          businesses and individuals who need to move, manage, and receive money globally.
          Operated by Smartflow Payments Limited, Sends combines multi-currency accounts,
          international payments, card solutions, and payment acceptance capabilities within a
          single secure ecosystem.
        </p>

        {/* Who We Are */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
            marginBottom: "40px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3
            style={{
              fontWeight: "800",
              fontSize: "1.6rem",
              marginBottom: "15px",
              color: "#0f172a",
            }}
          >
            Who We Are
          </h3>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#334155", margin: 0 }}>
            Designed for today&apos;s borderless economy, Sends enables customers to open
            multi-currency accounts with dedicated IBANs and access major payment networks,
            including SEPA, SWIFT, and UK Local Payments. Through its intuitive web platform and
            mobile app, users can send, receive, hold, and exchange funds while maintaining
            complete visibility and control over their finances.
          </p>
        </div>

        {/* Networks */}
        <div style={{ marginBottom: "45px" }}>
          <h3
            style={{
              fontWeight: "850",
              fontSize: "1.8rem",
              marginBottom: "25px",
              color: "#0f172a",
              textAlign: "center",
            }}
          >
            Built for Global Money Movement
          </h3>
          <div className="row g-4">
            {networks.map((item) => (
              <div className="col-md-6 col-lg-3" key={item.title}>
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "22px 18px",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                    height: "100%",
                    textAlign: "center",
                  }}
                >
                  <i
                    className={`fas ${item.icon}`}
                    style={{ color: "#c8102e", fontSize: "26px", marginBottom: "12px" }}
                  />
                  <h5
                    style={{
                      fontWeight: "750",
                      fontSize: "1.05rem",
                      marginBottom: "6px",
                      color: "#0f172a",
                    }}
                  >
                    {item.title}
                  </h5>
                  <p style={{ fontSize: "0.9rem", color: "#64748b", margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For Individuals */}
        <div style={{ marginBottom: "45px" }}>
          <h3
            style={{
              fontWeight: "850",
              fontSize: "1.8rem",
              marginBottom: "12px",
              color: "#0f172a",
              textAlign: "center",
            }}
          >
            For Individuals
          </h3>
          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              maxWidth: "720px",
              margin: "0 auto 25px",
              lineHeight: 1.7,
            }}
          >
            Sends offers digital onboarding, multi-currency accounts, virtual payment cards, and
            seamless spending through Apple Pay and Google Pay—making international payments and
            everyday finances simple, fast, and secure.
          </p>
          <div className="row g-4">
            {individualFeatures.map((item) => (
              <div className="col-md-6" key={item.title}>
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "25px",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                    height: "100%",
                  }}
                >
                  <h5
                    style={{
                      fontWeight: "750",
                      fontSize: "1.15rem",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i
                      className={`fas ${item.icon}`}
                      style={{ color: "#c8102e", fontSize: "22px" }}
                    />
                    {item.title}
                  </h5>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#64748b",
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For Businesses */}
        <div style={{ marginBottom: "45px" }}>
          <h3
            style={{
              fontWeight: "850",
              fontSize: "1.8rem",
              marginBottom: "12px",
              color: "#0f172a",
              textAlign: "center",
            }}
          >
            For Businesses
          </h3>
          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              maxWidth: "760px",
              margin: "0 auto 25px",
              lineHeight: 1.7,
            }}
          >
            Sends delivers a comprehensive suite of payment solutions designed to support growth
            and international expansion—from acquiring and payouts to corporate cards and treasury
            workflows on one platform.
          </p>
          <div className="row g-4">
            {businessFeatures.map((item) => (
              <div className="col-md-6" key={item.title}>
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "25px",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                    height: "100%",
                  }}
                >
                  <h5
                    style={{
                      fontWeight: "750",
                      fontSize: "1.15rem",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i
                      className={`fas ${item.icon}`}
                      style={{ color: "#c8102e", fontSize: "22px" }}
                    />
                    {item.title}
                  </h5>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#64748b",
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div
          style={{
            backgroundColor: "#0f172a",
            color: "#fff",
            padding: "35px 30px",
            borderRadius: "16px",
            marginBottom: "45px",
            backgroundImage: "linear-gradient(to right, #0f172a, #1e293b)",
          }}
        >
          <h3
            style={{
              fontWeight: "800",
              fontSize: "1.6rem",
              marginBottom: "12px",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <i className="fas fa-shield-alt" style={{ color: "#c8102e" }} />
            Security, Compliance & Transparency
          </h3>
          <p style={{ fontSize: "1rem", color: "#94a3b8", marginBottom: "25px", lineHeight: 1.7 }}>
            Security, compliance, and transparency are at the core of the Sends offering. The
            company is FCA-authorised as an Electronic Money Institution and maintains robust
            security standards across the platform.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "12px",
            }}
          >
            {securityFeatures.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  padding: "16px 18px",
                }}
              >
                <h6
                  style={{
                    fontWeight: 700,
                    margin: "0 0 8px",
                    color: "#fff",
                    fontSize: "0.98rem",
                  }}
                >
                  {item.title}
                </h6>
                <p style={{ margin: 0, color: "#cbd5e1", fontSize: "0.88rem", lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing + CTA */}
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#fff",
            padding: "45px 30px",
            borderRadius: "24px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 15px 35px rgba(0,0,0,0.04)",
          }}
        >
          <h3
            style={{
              fontWeight: "900",
              fontSize: "1.85rem",
              marginBottom: "12px",
              color: "#0f172a",
            }}
          >
            One Platform. Complete Financial Control.
          </h3>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748b",
              marginBottom: "30px",
              maxWidth: "680px",
              margin: "0 auto 30px",
              lineHeight: "1.7",
            }}
          >
            By bringing together accounts, payments, acquiring, payouts, and card issuing under one
            roof, Sends helps individuals, entrepreneurs, and growing businesses simplify financial
            operations, reduce complexity, and operate confidently across borders.
          </p>
          <a
            href={SITE_URL}
            className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hover"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            <span style={{ color: "#fff" }}>Visit Sends Website</span>
          </a>
          <p style={{ marginTop: "18px", color: "#94a3b8", fontSize: "0.9rem" }}>
            For more information, visit{" "}
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c8102e", fontWeight: 600 }}
            >
              sends.co
            </a>
          </p>
        </div>

        {/* Video — muted autoplay; tap opens YouTube */}
        <div style={{ marginTop: "45px", marginBottom: "20px" }}>
          <h3
            style={{
              fontWeight: "850",
              fontSize: "1.8rem",
              marginBottom: "20px",
              color: "#0f172a",
              textAlign: "center",
            }}
          >
            Watch Sends
          </h3>
          <a
            href="https://youtu.be/aJVQa_SnnMY?si=HY3Y-pPi-ttXawxZ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Sends video on YouTube"
            style={{
              display: "block",
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#0f172a",
              boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
              border: "1px solid #e2e8f0",
              cursor: "pointer",
            }}
          >
            <iframe
              title="Sends video"
              src="https://www.youtube.com/embed/aJVQa_SnnMY?autoplay=1&mute=1&loop=1&playlist=aJVQa_SnnMY&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
                pointerEvents: "none",
              }}
            />
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                background: "transparent",
              }}
            />
          </a>
          <p
            style={{
              textAlign: "center",
              marginTop: "12px",
              fontSize: "0.9rem",
              color: "#64748b",
            }}
          >
            Tap the video to watch on YouTube
          </p>
        </div>
      </div>
    </div>
  );
};

export default SendsSponsorDetails2026;
