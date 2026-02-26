import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";


const TruslyPayDetails2025 = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", fontFamily: "'Segoe UI', sans-serif", color: "#333" }}>
      <Helmet>
        <title>TruslyPay | Secure International Money Transfers UK | Brit FinTech Awards 2025</title>
        <meta name="description" content="TruslyPay enables fast, secure, and reliable money transfers from the UK to South Asia. Trusted remittance partner for families and businesses." />
        <meta name="keywords" content="TruslyPay, money transfer UK, send money South Asia, UK remittance services, secure international transfers, Brit Fintech Awards 2025" />
        <meta name="author" content="Brit Fintech Award" />
        <meta property="og:title" content="TruslyPay - Seamless Money Transfers | Brit Fintech Awards 2025" />
        <meta property="og:description" content="TruslyPay enables fast, secure, and reliable money transfers from the UK to South Asia. Trusted remittance partner for families and businesses." />
        <meta property="og:image" content="https://britfintechawards.com/assets/img/sponsor-logo/Fast-track-money-logo.png" />
      </Helmet>

      {/* Banner */}
      <div className="cs-height_90 cs-height_lg_80" />
     <a
        href="https://truslypay.com/"
        target="_blank"
          className="cs-hero sponsor-banner cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
         
          style={{
            backgroundImage:
              'url("../assets/img/sponsor-logo/Fast-track-money-banner.png")',
            height: "300px",
          }}
        >
          <div className="cs-hero_pattern cs-hover_layer3" style={{}}>
            {/* <div
              className="cs-hero_pattern_in cs-bg_parallax"
              data-src="../assets/img/gold-sponsor-banner.png"
              style={{
                backgroundImage:
                  'url("../assets/img/gold-sponsor-banner.png")',
                  backgroundSize: 'center',
                  backgroundRepeat: 'no-repeat',
                backgroundPosition: "center -129.8px",
              }}
            /> */}
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
       
            <div className="cs-hero_text text-left" >
          
         
         
            <div className="cs-height_10 cs-height_lg_0" />
          </div>
          </div>
          <div
            className="cs-hero_img cs-bg"
         
          >
            <div className="cs-hero_img_circle" />
          </div>
        </a>
      {/* Content */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Back */}
        <div style={{ marginBottom: "30px", textAlign: "right" }}>
          <NavLink to="/our-sponsors" style={{ textDecoration: "none", color: "#f40181", fontWeight: "600" }}>
            <i className="fas fa-chevron-left" style={{ marginRight: "8px" }} />
            Back 
          </NavLink>
        </div>

        {/* Intro */}
        <h2 style={{ fontWeight: "700", fontSize: "2rem", textAlign: "left", color: "#000" }}>
         Fast Track Money - Fast. Secure. Reliable.
        </h2>
        <p style={{ textAlign: "left", fontSize: "1.1rem", marginBottom: "40px", color: "#555" }}>
          Empowering seamless money transfers across South Asia and beyond.
        </p>

        {/* Who We Are */}
        <h3 style={{ fontWeight: "700", fontSize: "1.5rem", marginBottom: "10px" }}>Who We Are</h3>
        <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
          <strong>Fast Track Money</strong> is your trusted partner for international money transfers, offering a fast, secure, and user-friendly platform that connects communities across India, Pakistan, Bangladesh, Nepal, Sri Lanka, and Malaysia. Whether you're supporting family, managing business payments, or sending funds abroad,  <strong>Fast Track Money</strong> ensures your money moves safely—anytime, anywhere.
        </p>
       
        {/* Services */}
        <h3 style={{ fontWeight: "700", fontSize: "1.5rem", marginBottom: "20px" }}>Our Services</h3>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <p><strong>International Money Transfers</strong><br />
            Send money globally with real-time exchange rates and instant transaction confirmations. Our smart search and intuitive interface make it easy to find recipients and complete transfers in seconds.</p>
        </div>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <p><strong>Advanced Security</strong><br />
           Your peace of mind is our priority. Fast Track Money uses:</p>
          <ul style={{ marginLeft: "20px", lineHeight: "1.8" }}>
            <li>Two-Factor Authentication (2FA)</li>
            <li>End-to-End Data Encryption</li>
            <li>Secure Profile Verification</li>
            <li>Instant Security Alerts</li>
          </ul>
        </div>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <p> <strong>Real-Time Notifications</strong><br />
            Stay informed with instant alerts on transaction status, exchange rate changes, and successful transfers—so you're always in control.</p>
        </div>

        <div style={{ fontSize: "1rem", marginBottom: "15px" }}>
          <p> <strong>Live Exchange Rate Tracking</strong><br />
            Make smarter financial decisions with up-to-the-minute currency updates, helping you send money at the right time.</p>
        </div>

        <div style={{ fontSize: "1rem", marginBottom: "30px" }}>
          <p> <strong>Transaction Dashboard</strong><br />
            Monitor your transfer history, recipient details, and exchange rates—all in one secure, easy-to-navigate dashboard.</p>
        </div>

      

        {/* Address */}
        <h3 style={{ fontWeight: "700", fontSize: "1.5rem", marginBottom: "10px" }}>Address</h3>
        <p style={{ fontSize: "1rem", marginBottom: "30px" }}>
           25 Cabot Square, Canary Wharf, London, E14 4QZ
        </p>

        {/* Contact */}
        <h3 style={{ fontWeight: "700", fontSize: "1.5rem", marginBottom: "10px" }}>Email Address</h3>
        <p style={{ fontSize: "1rem" }}>
          <a href="mailto:info@truslypay.com" style={{ color: "#f40181", textDecoration: "none" }}>
            info@truslypay.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default TruslyPayDetails2025;
