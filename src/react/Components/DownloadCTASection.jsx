import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DownloadCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="da-cta">
      <motion.div
        className="da-cta-inner"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 text-left da-cta-left">
              <motion.h2
                className="da-cta-title"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Ready to <span className="da-highlight">Experience BFA26?</span>
              </motion.h2>
              <motion.p
                className="da-cta-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                Download the official Brit FinTech Awards App today and unlock a smarter way to nominate, connect and experience the UK's premier fintech awards.
              </motion.p>
              <motion.div
                className="da-cta-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <a
                  href="https://apps.apple.com/ng/app/brit-fintech-awards/id6779879087"
                  className="da-cta-badge"
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
                  className="da-cta-badge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    style={{ height: 50 }}
                  />
                </a>
              </motion.div>
            </div>
            
            <div className="col-lg-5 text-center da-cta-right">
              <motion.div
                className="da-qr-section"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.65 }}
              >
                <h3 className="da-qr-title">Scan to Download</h3>
                <div className="da-qr-box">
                  <img
                    src="/assets/img/download-app-qr.png"
                    alt="Scan to Download BFA App"
                    className="da-qr-img"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <style>{downloadCtaStyles}</style>
    </section>
  );
};

const downloadCtaStyles = `
  .da-cta {
    padding: 80px 0;
    background: url("/assets/img/event-conference/hero-img.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    z-index: 2;
  }

  .da-cta-inner {
    position: relative;
  }

  .da-cta-title {
    font-family: 'Poppins', sans-serif;
    font-size: 38px;
    font-weight: 800;
    color: #fff;
    margin-bottom: 15px;
  }

  .da-highlight {
    background: linear-gradient(135deg, #c8102e, #ff4d6d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .da-cta-subtitle {
    font-size: 16px;
    color: rgba(255,255,255,0.7);
    margin-bottom: 40px;
    max-width: 580px;
    line-height: 1.6;
  }

  .da-cta-buttons {
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    flex-wrap: wrap;
  }

  .da-qr-title {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 15px;
    font-family: 'Poppins', sans-serif;
  }

  .da-cta-badge {
    display: inline-block;
    transition: transform 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    background: #000;
    padding: 1px;
    line-height: 0;
  }

  .da-cta-badge:hover {
    transform: translateY(-3px);
  }

  .da-qr-section {
    margin-top: 45px;
  }

  .da-qr-box {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .da-qr-img {
    width: 120px;
    height: 120px;
    background: #fff;
    border-radius: 16px;
    padding: 8px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    object-fit: contain;
  }

  /* Responsive */
  @media (max-width: 991px) {
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

    .da-qr-section {
      display: none;
    }
  }

  @media (max-width: 575px) {
    .da-cta {
      padding: 50px 0;
    }

    .da-cta-title {
      font-size: 24px;
    }
  }
`;

export default DownloadCTASection;
