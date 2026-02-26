import React, { useEffect, useState } from "react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookieConsent");
    if (savedConsent) {
      const parsed = JSON.parse(savedConsent);
      setConsent(parsed);
      applyConsent(parsed);
    } else {
      setShowBanner(true);
    }
  }, []);

  const applyConsent = (consent) => {
    if (consent.analytics) loadGoogleAnalytics();
    if (consent.marketing) loadMarketingScript();
  };

  const handleToggle = (type) => {
    setConsent((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleAcceptAll = () => {
    const allConsent = { analytics: true, marketing: true };
    setConsent(allConsent);
    localStorage.setItem("cookieConsent", JSON.stringify(allConsent));
    applyConsent(allConsent);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const noConsent = { analytics: false, marketing: false };
    setConsent(noConsent);
    localStorage.setItem("cookieConsent", JSON.stringify(noConsent));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    applyConsent(consent);
    setShowBanner(false);
  };

  const loadGoogleAnalytics = () => {
    if (window.gtag) return;
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-441877791";
    script1.async = true;
    document.head.appendChild(script1);

    script1.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "G-441877791");
    };
  };

  const loadMarketingScript = () => {
    // Example: Facebook Pixel or any ad script
    if (document.getElementById("marketing-script")) return;
    const script = document.createElement("script");
    script.src = "https://example.com/marketing.js"; // Replace with real script
    script.id = "marketing-script";
    script.async = true;
    document.body.appendChild(script);
  };

  if (!showBanner) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <h3 style={styles.heading}>We Value Your Privacy 🍪</h3>
        <p style={styles.description}>
          We use cookies to enhance your experience. You can accept all, reject all, or manage preferences.
        </p>

        <div style={styles.toggleContainer}>
          <div style={styles.toggleRow}>
            <span>Analytics Cookies</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={() => handleToggle("analytics")}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div style={styles.toggleRow}>
            <span>Marketing Cookies</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={() => handleToggle("marketing")}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div style={styles.buttons}>
          <button style={styles.secondaryBtn} onClick={handleRejectAll}>
            Reject All
          </button>
          <button style={styles.secondaryBtn} onClick={handleSavePreferences}>
            Save Preferences
          </button>
          <button style={styles.primaryBtn} onClick={handleAcceptAll}>
            Accept All
          </button>
        </div>
      </div>

      <style>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          border-radius: 34px;
          transition: 0.4s;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          border-radius: 50%;
          transition: 0.4s;
        }
        input:checked + .slider {
          background-color: #4caf50;
        }
        input:checked + .slider:before {
          transform: translateX(20px);
        }
      `}</style>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "20px",
    background: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(10px)",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
  },
  card: {
    maxWidth: "600px",
    background: "#fff",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
    textAlign: "center",
    width: "100%",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "12px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px",
  },
  toggleContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginBottom: "24px",
  },
  toggleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "500",
    padding: "0 10px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    fontWeight: "500",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "10px 20px",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    fontWeight: "500",
    cursor: "pointer",
  },
};

export default CookieConsent;
