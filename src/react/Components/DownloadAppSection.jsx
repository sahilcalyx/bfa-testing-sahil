import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Pencil, Ticket, Users, MessageSquare, Bell } from "lucide-react";
import DownloadCTASection from "./DownloadCTASection";

const DownloadAppSection = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* Hero Intro */}
      <HeroIntro />
      {/* Features Grid */}
      <FeaturesSection />
      {/* Phone Showcase */}
      <PhoneShowcase />
      {/* Download CTA */}
      <DownloadCTASection />

      <style>{downloadAppStyles}</style>
    </div>
  );
};

/* ─── Hero Intro ─── */
const HeroIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="da-hero-intro">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="da-badge">NEW FOR BFA26</span>
              <h2 className="da-main-title">
                The Official Brit FinTech Awards <span className="da-highlight">App</span>
              </h2>
              <p className="da-subtitle">
                Everything you need for Brit FinTech Awards 2026—all in one place. Nominate, connect, book tickets, schedule meetings and stay updated throughout the event.
              </p>
              <div className="da-store-buttons">
                <a
                  href="https://apps.apple.com/ng/app/brit-fintech-awards/id6779879087"
                  className="da-store-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    style={{ height: 50 }}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bfa.fintechapp"
                  className="da-store-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    style={{ height: 50 }}
                  />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="da-phone-hero-wrap"
            >
              <img
                src="/assets/img/download-app-showcase.png"
                alt="BFA App Mockup"
                className="da-hero-phone-img"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Features ─── */
const featuresData = [
  {
    icon: <Trophy size={28} strokeWidth={1.5} />,
    title: "Browse Categories",
    desc: "Explore all award categories and find your perfect fit.",
  },
  {
    icon: <Pencil size={28} strokeWidth={1.5} />,
    title: "Nominate",
    desc: "Submit and manage your nominations with ease.",
  },
  {
    icon: <Ticket size={28} strokeWidth={1.5} />,
    title: "Book Tickets",
    desc: "Secure your seat for the Awards Night in seconds.",
  },
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    title: "Network",
    desc: "Connect with industry leaders, sponsors and peers.",
  },
  {
    icon: <MessageSquare size={28} strokeWidth={1.5} />,
    title: "Meet & Chat",
    desc: "Request meetings and chat with confirmed attendees.",
  },
  {
    icon: <Bell size={28} strokeWidth={1.5} />,
    title: "Stay Updated",
    desc: "Get real-time alerts, agenda updates and important news.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="da-features">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="da-section-title">
            One App for your entire <span className="da-highlight">BFA 26 experience</span>
          </h2>
          <p className="da-section-subtitle">
            Designed to power every moment of your BFA26 journey.          </p>
        </motion.div>

        <div className="row da-features-grid">
          {featuresData.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <motion.div
                className="da-feature-card"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 60px rgba(200,16,46,0.15)",
                }}
              >
                <div className="da-feature-header">
                  <div className="da-feature-icon-wrap">{feature.icon}</div>
                  <h3 className="da-feature-title">{feature.title}</h3>
                </div>
                <p className="da-feature-desc">{feature.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Phone Showcase (parallax-like) ─── */
const PhoneShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="da-showcase">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 text-center">
            <motion.div
              initial={{ opacity: 0, x: -80, scale: 0.95 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="da-showcase-img-wrap"
            >
              <img
                src="/assets/img/download-app-hero.png"
                alt="BFA App Showcase"
                className="da-showcase-phone-img"
              />
            </motion.div>
          </div>
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="da-showcase-text"
            >
              <h2 className="da-section-title">
                Plan Your <span className="da-highlight">Perfect Evening</span>
              </h2>
              <p className="da-showcase-desc">
                The BFA app puts the entire event at your fingertips. From the
                moment you arrive to the final toast, every detail is organised
                and accessible.
              </p>
              <div className="da-checklist-grid">
                <div className="da-checklist-col">
                  <motion.div
                    className="da-check-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <span className="da-check-icon">✓</span>
                    <span>Digital ID pass for the event day</span>
                  </motion.div>
                  <motion.div
                    className="da-check-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <span className="da-check-icon">✓</span>
                    <span>One-to-one chat with attendees</span>
                  </motion.div>
                  <motion.div
                    className="da-check-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <span className="da-check-icon">✓</span>
                    <span>Book & schedule meetings</span>
                  </motion.div>
                </div>
                <div className="da-checklist-col">
                  <motion.div
                    className="da-check-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <span className="da-check-icon">✓</span>
                    <span>Instant event notifications</span>
                  </motion.div>
                  <motion.div
                    className="da-check-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <span className="da-check-icon">✓</span>
                    <span>Feedback for app & event</span>
                  </motion.div>
                  <motion.div
                    className="da-check-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <span className="da-check-icon">✓</span>
                    <span>Explore speakers & sponsors</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// DownloadCTA has been moved to a separate component: DownloadCTASection.jsx

/* ─── Styles ─── */
const downloadAppStyles = `
  /* Hero Intro */
  .da-hero-intro {
    padding: 80px 0 60px;
    background: #fff;
  }

  .da-badge {
    display: inline-block;
    background: linear-gradient(135deg, #c8102e, #900b21);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 6px 18px;
    border-radius: 50px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .da-main-title {
    font-family: 'Poppins', sans-serif;
    font-size: 42px;
    font-weight: 800;
    color: #1a1a2e;
    line-height: 1.15;
    margin-bottom: 20px;
  }

  .da-highlight {
    background: linear-gradient(135deg, #c8102e, #ff4d6d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .da-subtitle {
    font-size: 17px;
    color: #555;
    line-height: 1.7;
    max-width: 480px;
    margin-bottom: 30px;
  }

  .da-store-buttons {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
  }

  .da-store-btn {
    transition: transform 0.3s ease;
  }

  .da-store-btn:hover {
    transform: translateY(-3px);
  }

  /* Phone Mockup */
  .da-phone-hero-wrap {
    position: relative;
    padding: 40px 0;
  }

  .da-phone-hero-wrap::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    height: 320px;
    background: radial-gradient(circle, rgba(200, 16, 46, 0.15) 0%, rgba(200, 16, 46, 0) 70%);
    z-index: 1;
    pointer-events: none;
  }

  .da-hero-phone-img {
    max-width: 320px;
    width: 100%;
    height: auto;
    object-fit: contain;
    margin: 0 auto;
    display: block;
    filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.2));
    position: relative;
    z-index: 2;
  }

  .da-phone-mockup {
    width: 280px;
    height: 560px;
    background: #1a1a2e;
    border-radius: 36px;
    padding: 12px;
    margin: 0 auto;
    box-shadow: 0 30px 80px rgba(26,26,46,0.3), 0 0 0 2px rgba(255,255,255,0.1);
    position: relative;
    z-index: 2;
  }

  .da-phone-screen {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #f8f9fa, #ffffff);
    border-radius: 26px;
    overflow: hidden;
  }

  .da-screen-header {
    background: linear-gradient(135deg, #c8102e, #900b21);
    padding: 30px 20px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .da-screen-logo {
    width: 32px;
    height: 32px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  .da-screen-title {
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
  }

  .da-screen-content {
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .da-screen-card {
    background: #fff;
    border-radius: 14px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 14px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }

  .da-screen-card-icon {
    font-size: 28px;
    flex-shrink: 0;
  }

  .da-screen-card strong {
    display: block;
    font-size: 14px;
    color: #1a1a2e;
    font-family: 'Poppins', sans-serif;
  }

  .da-screen-card p {
    margin: 0;
    font-size: 12px;
    color: #888;
  }

  /* Features Section */
  .da-features {
    padding: 80px 0;
    background: #f8f9fb;
  }

  .da-section-title {
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    font-weight: 800;
    color: #1a1a2e;
    margin-bottom: 15px;
    text-align: center;
  }

  .da-section-subtitle {
    font-size: 17px;
    color: #666;
    margin-bottom: 50px;
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .da-features-grid {
    margin-top: 20px;
  }

  .da-feature-card {
    background: #fff;
    border-radius: 20px;
    padding: 36px 28px;
    margin-bottom: 24px;
    border: 1px solid rgba(0,0,0,0.04);
    box-shadow: 0 4px 24px rgba(0,0,0,0.04);
    transition: all 0.4s ease;
    cursor: default;
  }

  .da-feature-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }

  .da-feature-icon-wrap {
    color: #c8102e;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  .da-feature-card:hover .da-feature-icon-wrap {
    transform: scale(1.1);
  }

  .da-feature-title {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0;
  }

  .da-feature-desc {
    font-size: 15px;
    color: #666;
    line-height: 1.6;
    margin: 0;
  }

  /* Showcase Section */
  .da-showcase {
    padding: 80px 0;
    background: #fff;
  }

  .da-showcase-img-wrap {
    position: relative;
    max-width: 420px;
    width: 100%;
    margin: 0 auto;
  }

  .da-showcase-img-wrap::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 340px;
    height: 340px;
    background: radial-gradient(circle, rgba(200, 16, 46, 0.12) 0%, rgba(200, 16, 46, 0) 70%);
    z-index: 1;
    pointer-events: none;
  }

  .da-showcase-phone-img {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    height: auto;
    display: block;
    object-fit: contain;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.18));
    position: relative;
    z-index: 2;
  }

  .da-showcase-phone-back {
    background: #2d2d44;
    top: 30px;
    left: 0;
    z-index: 1;
    transform: rotate(-6deg);
  }

  .da-showcase-phone-front {
    background: #1a1a2e;
    top: 0;
    right: 0;
    z-index: 2;
    transform: rotate(4deg);
  }

  .da-sp-screen {
    width: 100%;
    height: 100%;
    border-radius: 22px;
    overflow: hidden;
  }

  .da-sp-screen-schedule {
    background: linear-gradient(180deg, #fff, #f5f5f8);
  }

  .da-sp-screen-networking {
    background: linear-gradient(180deg, #fff, #f5f5f8);
  }

  .da-sp-topbar {
    background: linear-gradient(135deg, #c8102e, #900b21);
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    padding: 20px 16px 14px;
    font-family: 'Poppins', sans-serif;
  }

  .da-sp-timeline {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .da-sp-event {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 12px;
    border-radius: 10px;
    background: #fff;
    border: 1px solid #eee;
  }

  .da-sp-event-active {
    background: linear-gradient(135deg, #c8102e, #d42e4a);
    border-color: transparent;
  }

  .da-sp-event-active .da-sp-time,
  .da-sp-event-active .da-sp-label {
    color: #fff !important;
  }

  .da-sp-time {
    font-size: 11px;
    font-weight: 700;
    color: #c8102e;
    white-space: nowrap;
    font-family: 'Poppins', sans-serif;
  }

  .da-sp-label {
    font-size: 11px;
    color: #444;
  }

  .da-sp-list {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .da-sp-list-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #eee;
  }

  .da-sp-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #c8102e, #ff6b81);
    flex-shrink: 0;
  }

  .da-sp-name {
    font-size: 13px;
    font-weight: 600;
    color: #333;
    font-family: 'Poppins', sans-serif;
  }

  .da-showcase-text {
    padding-left: 40px;
  }

  .da-showcase-text .da-section-title {
    text-align: left;
  }

  .da-showcase-desc {
    font-size: 16px;
    color: #555;
    line-height: 1.7;
    margin-bottom: 30px;
  }

  .da-checklist-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px 30px;
    margin-top: 25px;
  }

  .da-checklist-col {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .da-check-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 15px;
    color: #333;
  }

  .da-check-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: linear-gradient(135deg, #c8102e, #ff4d6d);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    flex-shrink: 0;
  }

  /* Download CTA styles moved to DownloadCTASection.jsx */

  /* Responsive */
  @media (max-width: 991px) {
    .da-main-title {
      font-size: 32px;
    }

    .da-section-title {
      font-size: 28px;
    }

    .da-hero-intro {
      text-align: center;
    }

    .da-subtitle {
      margin-left: auto;
      margin-right: auto;
    }

    .da-store-buttons {
      justify-content: center;
    }

    .da-showcase-text {
      padding-left: 0;
      margin-top: 40px;
      text-align: center;
    }

    .da-showcase-text .da-section-title {
      text-align: center;
    }

    .da-checklist {
      align-items: flex-start;
      max-width: 480px;
      margin: 0 auto;
    }

    .da-qr-section {
      display: none;
    }

    .da-showcase-img-wrap {
      max-width: 340px;
    }

    .da-cta-title {
      font-size: 28px;
    }

    .da-cta-left {
      text-align: center;
      margin-bottom: 40px;
    }

    .da-cta-subtitle {
      margin-left: auto;
      margin-right: auto;
    }

    .da-cta-buttons {
      justify-content: center;
    }

    .da-qr-title {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 575px) {
    .da-hero-intro {
      padding: 50px 0 40px;
    }

    .da-main-title {
      font-size: 28px;
    }

    .da-section-title {
      font-size: 24px;
    }

    .da-features {
      padding: 50px 0;
    }

    .da-showcase {
      padding: 50px 0;
    }

    .da-cta {
      padding: 50px 0;
    }

    .da-cta-title {
      font-size: 24px;
    }

    .da-phone-mockup {
      width: 240px;
      height: 480px;
    }

    .da-checklist-grid {
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .da-showcase-img-wrap {
      max-width: 280px;
    }
  }
`;

export default DownloadAppSection;
