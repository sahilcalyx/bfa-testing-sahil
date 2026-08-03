import { Helmet } from "react-helmet";
import React from "react";
import { NavLink } from "react-router-dom";

const TigrisPaySponsorDetails = () => {
  const corridors = [
    { name: "Bangladesh", code: "bd" },
    { name: "China", code: "cn" },
    { name: "DR Congo", code: "cd" },
    { name: "Egypt", code: "eg" },
    { name: "Ethiopia", code: "et" },
    { name: "Ghana", code: "gh" },
    { name: "India", code: "in" },
    { name: "Kenya", code: "ke" },
    { name: "Malaysia", code: "my" },
    { name: "Nepal", code: "np" },
    { name: "Pakistan", code: "pk" },
    { name: "Philippines", code: "ph" },
    { name: "Sri Lanka", code: "lk" },
    { name: "Tanzania", code: "tz" },
    { name: "Uganda", code: "ug" }
  ];

  const securityFeatures = [
    { title: "Two-Factor Authentication (2FA)", desc: "Enforce multi-layered security for every login and transaction." },
    { title: "Advanced Data Encryption", desc: "Protect your personal information and transaction details with end-to-end encryption." },
    { title: "Secure Identity Verification", desc: "Industry-standard identity checks to prevent unauthorized access." },
    { title: "Real-Time Fraud Monitoring", desc: "24/7 automated systems to detect and block suspicious activities." },
    { title: "Instant Security Alerts", desc: "Receive immediate notifications of any security-related events on your account." }
  ];

  const notifications = [
    { title: "Transfer Status", desc: "Track your money in real-time from dispatch to delivery." },
    { title: "Exchange Rate Updates", desc: "Get notifications about rate changes to make smarter transfers." },
    { title: "Security Notifications", desc: "Stay informed instantly of logins or password modifications." }
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa", fontFamily: "'Segoe UI', sans-serif", color: "#333" }}>
      <Helmet>
        <title>Tigris Pay | Platinum Sponsor | Brit FinTech Awards 2026</title>
        <meta
          name="description"
          content="Tigris Pay is a UK-based Authorised Payment Institution committed to making international money transfers simple, fast, secure, and affordable."
        />
        <meta
          name="keywords"
          content="Tigris Pay, Tigris Pay money transfer, UK authorised payment institution, international money transfer UK, send money from UK, Brit FinTech Awards sponsor 2026"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://britfintechawards.com/tigris-pay-sponsor-details-2026" />
        <meta
          property="og:title"
          content="Tigris Pay - Fast. Secure. Reliable. | Brit FinTech Awards 2026"
        />
        <meta
          property="og:description"
          content="Tigris Pay is a UK-based Authorised Payment Institution committed to making international money transfers simple, fast, secure, and affordable."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/sponsor-banner-strip-2026/tigrispay-details-banner-2026.png?v=2"
        />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="430" />
        <meta
          property="og:image:alt"
          content="Tigris Pay - Platinum Sponsor | Brit FinTech Awards 2026"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tigris Pay - Fast. Secure. Reliable. | Brit FinTech Awards 2026"
        />
        <meta
          name="twitter:description"
          content="Tigris Pay is a UK-based Authorised Payment Institution committed to making international money transfers simple, fast, secure, and affordable."
        />
        <meta
          name="twitter:image"
          content="https://britfintechawards.com/assets/img/sponsor-logo/sponsor-banner-strip-2026/tigrispay-details-banner-2026.png?v=2"
        />
      </Helmet>

      {/* Banner — mild zoom on mobile; full strip on desktop (same as Mercury) */}
      <div className="cs-height_90 cs-height_lg_80" />
      <a
        href="https://tigrispay.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Tigris Pay website"
        className="sponsor-banner-2026 relative block w-full overflow-hidden bg-[#2a0a10] h-[130px] sm:h-[160px] md:h-auto"
        style={{ lineHeight: 0 }}
      >
        <img
          src="/assets/img/sponsor-logo/sponsor-banner-strip-2026/tigrispay-details-banner-2026.png?v=3"
          alt="Tigris Pay — Platinum Sponsor | Brit FinTech Awards 2026"
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
        {/* Back and Tier Badge */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <div>

          </div>
          <NavLink
            to="/our-sponsors"
            style={{
              textDecoration: "none",
              color: "#c8102e",
              fontWeight: "600",
              fontSize: "16px"
            }}
          >
            <i className="fas fa-chevron-left" style={{ marginRight: "8px" }} />
            Back to Sponsors
          </NavLink>
        </div>

        {/* Intro Header */}
        <div style={{ marginBottom: "40px" }}>
          <h1
            style={{
              fontWeight: "900",
              fontSize: "2.4rem",
              textAlign: "left",
              color: "#000",
              lineHeight: "1.2",
              marginBottom: "10px"
            }}
          >
            Fast Track Money Transfer trading as Tigris Pay
          </h1>
          <h4
            style={{
              fontWeight: "700",
              fontSize: "1.4rem",
              color: "#c8102e",
              letterSpacing: "0.5px",
              marginTop: "5px"
            }}
          >
            Pay – Fast. Secure. Reliable.
          </h4>
        </div>

        {/* Primary Description */}
        <p style={{ fontSize: "1.15rem", lineHeight: "1.8", marginBottom: "30px", color: "#475569", fontWeight: "500" }}>
          Tigris Pay is a UK-based Authorised Payment Institution committed to making international
          money transfers simple, fast, secure, and affordable. Send money from the UK to your loved
          ones around the world with confidence.
        </p>

        {/* Who We Are */}
        <div style={{ backgroundColor: "#ffffff", padding: "30px", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.04)", marginBottom: "40px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ fontWeight: "800", fontSize: "1.6rem", marginBottom: "15px", color: "#0f172a" }}>Who We Are</h3>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#334155", margin: 0 }}>
            Tigris Pay is a trusted international money transfer platform designed to provide fast,
            secure, and convenient transfers from the UK to multiple destinations worldwide. Whether
            you're supporting family, paying for education, managing business payments, or sending
            money home, Tigris Pay ensures a seamless experience with competitive exchange rates
            and reliable service.
          </p>
        </div>

        {/* Why Choose Tigris Pay? */}
        <div style={{ marginBottom: "45px" }}>
          <h3 style={{ fontWeight: "850", fontSize: "1.8rem", marginBottom: "25px", color: "#0f172a", textAlign: "center" }}>
            Why Choose Tigris Pay?
          </h3>
          <div className="row g-4">
            {/* Rates */}
            <div className="col-md-6">
              <div style={{ backgroundColor: "#fff", padding: "25px", borderRadius: "14px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s" }}>
                <h5 style={{ fontWeight: "750", fontSize: "1.15rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <i className="fas fa-hand-holding-usd" style={{ color: "#c8102e", fontSize: "24px" }} />
                  Competitive Exchange Rates
                </h5>
                <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0, lineHeight: "1.6" }}>
                  Get great value on every transfer with competitive exchange rates and transparent pricing.
                </p>
              </div>
            </div>
            {/* Speed */}
            <div className="col-md-6">
              <div style={{ backgroundColor: "#fff", padding: "25px", borderRadius: "14px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s" }}>
                <h5 style={{ fontWeight: "750", fontSize: "1.15rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <i className="fas fa-bolt" style={{ color: "#c8102e", fontSize: "24px" }} />
                  Fast & Secure Transfers
                </h5>
                <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0, lineHeight: "1.6" }}>
                  Send money quickly and securely through our easy-to-use mobile app.
                </p>
              </div>
            </div>
            {/* First Transfer */}
            <div className="col-md-6">
              <div style={{ backgroundColor: "#fff", padding: "25px", borderRadius: "14px", border: "1px solid #e2e8f0", height: "100%" }}>
                <h5 style={{ fontWeight: "750", fontSize: "1.15rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <i className="fas fa-gift" style={{ color: "#c8102e", fontSize: "24px" }} />
                  First Transfer Benefits
                </h5>
                <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0, lineHeight: "1.6" }}>
                  Enjoy zero transfer fees on your first transfer up to £500.
                </p>
              </div>
            </div>
            {/* Wallet Credit */}
            <div className="col-md-6">
              <div style={{ backgroundColor: "#fff", padding: "25px", borderRadius: "14px", border: "1px solid #e2e8f0", height: "100%" }}>
                <h5 style={{ fontWeight: "750", fontSize: "1.15rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <i className="fas fa-wallet" style={{ color: "#c8102e", fontSize: "24px" }} />
                  £3 Instant Wallet Credit
                </h5>
                <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0, lineHeight: "1.6" }}>
                  Register with Tigris Pay and receive a £3 wallet credit. Up to 50% of the wallet credit can be
                  used towards your first transfer.
                </p>
              </div>
            </div>
            {/* Refer a Friend */}
            <div className="col-12">
              <div style={{ backgroundColor: "rgba(200, 16, 46, 0.04)", padding: "25px", borderRadius: "14px", border: "1px dashed rgba(200, 16, 46, 0.3)", display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ color: "#c8102e", fontSize: "32px" }}><i className="fas fa-users" /></div>
                <div>
                  <h5 style={{ fontWeight: "800", fontSize: "1.2rem", marginBottom: "5px", color: "#0f172a" }}>Refer a Friend & Earn Rewards</h5>
                  <p style={{ fontSize: "0.98rem", color: "#475569", margin: 0, lineHeight: "1.6" }}>
                    Invite your friends to join Tigris Pay and earn £5 each when they complete their qualifying transfer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corridors Grid */}
        <div style={{ backgroundColor: "#0f172a", color: "#fff", padding: "35px 30px", borderRadius: "16px", marginBottom: "45px", backgroundImage: "linear-gradient(to right, #0f172a, #1e293b)" }}>
          <h3 style={{ fontWeight: "800", fontSize: "1.6rem", marginBottom: "20px", color: "#fff", display: "flex", alignItems: "center", gap: "10px" }}>
            <i className="fas fa-globe-americas" style={{ color: "#c8102e" }} /> Corridors Supported
          </h3>
          <p style={{ fontSize: "1rem", color: "#94a3b8", marginBottom: "25px" }}>
            Transfer money securely from the UK to these locations worldwide:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: "12px" }}>
            {corridors.map((country, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "12px 15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "12px",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  color: "#f1f5f9"
                }}
              >
                <img
                  src={`https://flagcdn.com/w40/${country.code}.png`}
                  srcSet={`https://flagcdn.com/w80/${country.code}.png 2x`}
                  width="28"
                  alt={country.name}
                  style={{
                    borderRadius: "3px",
                    objectFit: "cover",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}
                />
                <span>{country.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Notifications split */}
        <div className="row g-4 mb-5">
          {/* Advanced Security */}
          <div className="col-md-6">
            <div style={{ backgroundColor: "#ffffff", padding: "30px", borderRadius: "16px", border: "1px solid #e2e8f0", height: "100%" }}>
              <h4 style={{ fontWeight: "800", fontSize: "1.4rem", marginBottom: "20px", color: "#0f172a", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-shield-alt" style={{ color: "#10b981" }} /> Advanced Security
              </h4>
              <p style={{ fontSize: "0.95rem", color: "#64748b", marginBottom: "20px" }}>
                Your security is our priority. Tigris Pay uses industry-leading protective measures:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {securityFeatures.map((sec, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "10px" }}>
                    <div style={{ color: "#10b981", marginTop: "2px" }}><i className="fas fa-check-circle" /></div>
                    <div>
                      <h6 style={{ fontWeight: "700", margin: "0 0 2px 0", fontSize: "0.95rem", color: "#1e293b" }}>{sec.title}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Real-Time Notifications */}
          <div className="col-md-6">
            <div style={{ backgroundColor: "#ffffff", padding: "30px", borderRadius: "16px", border: "1px solid #e2e8f0", height: "100%" }}>
              <h4 style={{ fontWeight: "800", fontSize: "1.4rem", marginBottom: "20px", color: "#0f172a", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-bell" style={{ color: "#3b82f6" }} /> Real-Time Updates
              </h4>
              <p style={{ fontSize: "0.95rem", color: "#64748b", marginBottom: "20px" }}>
                Stay informed every step of the way with instant updates on:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {notifications.map((notif, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "10px" }}>
                    <div style={{ color: "#3b82f6", marginTop: "2px" }}><i className="fas fa-info-circle" /></div>
                    <div>
                      <h6 style={{ fontWeight: "700", margin: "0 0 2px 0", fontSize: "0.95rem", color: "#1e293b" }}>{notif.title}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Area with QR codes and App Badges */}
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#fff",
            padding: "45px 30px",
            borderRadius: "24px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 15px 35px rgba(0,0,0,0.04)"
          }}
        >
          <h3 style={{ fontWeight: "900", fontSize: "2rem", marginBottom: "12px", color: "#0f172a" }}>Download Tigris Pay Today</h3>
          <p style={{ fontSize: "1.05rem", color: "#64748b", marginBottom: "35px", maxWidth: "600px", margin: "0 auto 35px auto", lineHeight: "1.6" }}>
            Scan the QR codes below or click the store buttons to download our easy-to-use mobile app and enjoy your first fee-free transfer.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" }}>
            {/* Google Play */}
            <div
              style={{
                backgroundColor: "#f8fafc",
                padding: "25px",
                borderRadius: "18px",
                border: "1px solid #e2e8f0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
                width: "260px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.02)"
              }}
            >
              <h5 style={{ fontWeight: "750", fontSize: "1.1rem", margin: 0, color: "#1e293b" }}>Get it on Android</h5>

              <a href="https://play.google.com/store/apps/details?id=com.org.tigris" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", transition: "transform 0.2s" }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <img
                  src="https://tigrispay.com/assets/android-PQYCzcD1.png"
                  alt="Get it on Google Play"
                  style={{ height: "45px", objectFit: "contain" }}
                />
              </a>

              <div style={{ padding: "10px", backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #cbd5e1", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
                <img
                  src="https://tigrispay.com/playstoreqr.PNG"
                  alt="Google Play QR Code"
                  style={{ width: "130px", height: "130px", objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Apple App Store */}
            <div
              style={{
                backgroundColor: "#f8fafc",
                padding: "25px",
                borderRadius: "18px",
                border: "1px solid #e2e8f0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
                width: "260px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.02)"
              }}
            >
              <h5 style={{ fontWeight: "750", fontSize: "1.1rem", margin: 0, color: "#1e293b" }}>Get it on iOS</h5>

              <a href="https://apps.apple.com/us/app/tigrispay/id6754586181" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", transition: "transform 0.2s" }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <img
                  src="https://tigrispay.com/assets/apple-BDeh4eff.png"
                  alt="Download on the App Store"
                  style={{ height: "45px", objectFit: "contain" }}
                />
              </a>

              <div style={{ padding: "10px", backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #cbd5e1", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
                <img
                  src="https://tigrispay.com/iphoneqr.PNG"
                  alt="App Store QR Code"
                  style={{ width: "130px", height: "130px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            <a
              href="https://tigrispay.com/"
              className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover cs-white_hover cs-accent_border_2_hover"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              <span style={{ color: "#fff" }}>Visit Tigris Pay Website</span>
            </a>
          </div>
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
            Watch Tigris Pay
          </h3>
          <a
            href="https://youtu.be/H47it0i1iKs?si=VqD_Ge35hn4ZxzY-"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Tigris Pay video on YouTube"
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
              title="Tigris Pay video"
              src="https://www.youtube.com/embed/H47it0i1iKs?autoplay=1&mute=1&loop=1&playlist=H47it0i1iKs&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
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
            {/* Captures taps so click opens YouTube instead of interacting with the iframe */}
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

export default TigrisPaySponsorDetails;
