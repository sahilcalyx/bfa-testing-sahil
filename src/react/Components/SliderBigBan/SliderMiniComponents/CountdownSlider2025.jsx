import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "./AppIcon";
import { NavLink } from "react-router-dom";

const CountdownSlider2025 = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isEventActive, setIsEventActive] = useState(false);

  // 👉 Event date: 3 October 2025, 6PM BST (London) → 17:00 UTC
  const targetDate = new Date(Date.UTC(2025, 9, 3, 17, 0, 0));

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
        setIsEventActive(true);
      } else {
        setIsEventActive(false); // hide countdown after event
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const countdownItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  // ❌ If event is over → hide everything
  if (!isEventActive) return null;

  return (
    <>
      <style>{`
        .countdown-strip {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 20px 40px;
          background: linear-gradient(90deg, #000000ff, #ff007b8c, #000000ff);
          color: #fff;
          flex-wrap: wrap;
        }
        .countdown-heading {
          flex: 1;
          min-width: 200px;
        }
        .countdown-heading h3 {
          margin: 0;
          font-size: 1.6rem;
          font-weight: bold;
        }
        .countdown-heading p {
          margin: 0;
          font-size: 0.95rem;
          opacity: 0.85;
        }
        /* ✅ Default: 4 in one line */
        .countdown-center {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: nowrap;
          padding: 5px 20px;
        }
        .countdown-item {
          text-align: center;
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #fff;
          box-sizing: border-box;
        }
        .countdown-value {
          font-size: 2rem;
          font-weight: bold;
          color: #000;
          margin-bottom: 0.3rem;
        }
        .countdown-label {
          font-size: 1rem;
          text-transform: uppercase;
          font-weight: 600;
          color: #000;
        }
        .countdown-right {
          flex: 1;
          min-width: 220px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          gap: 0.6rem;
        }
        .book-ticket-btn {
          height: 46px;
          padding: 0 28px;
          font-size: 14px;
          font-weight: bold;
          color: #c8102e;
          border: 2px solid #fff;
          border-radius: 8px;
          background: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        .book-ticket-btn:hover {
          background: transparent;
          color: #fff !important;
        }
        .spots-remaining {
          display: inline-flex;
          align-items: center;
          padding: 5px 12px;
          border: 1px solid #fff;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #fff;
        }
        .spots-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
          margin-right: 6px;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* ✅ Responsive for tablet & small desktop */
        @media (max-width: 991px) {
          .countdown-strip {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .countdown-heading {
            text-align: center;
          }
          .countdown-right {
            align-items: center;
          }
        }

        /* ✅ Responsive for all Android & iPhone (2x2 grid) */
        @media (max-width: 767px) {
          .countdown-center {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
            justify-items: center;
          }
          .countdown-item {
            width: 120px;
            height: 100px;
          }
        }
      `}</style>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="countdown-strip"
        >
          {/* Left: Heading */}
          <div className="countdown-heading">
            <h3 className="text-white">Time to Awards Night</h3>
            <p>Don’t miss this incredible opportunity</p>
          </div>

          {/* Center: Countdown */}
          <div className="countdown-center">
            {countdownItems.map((item, idx) => (
              <div key={idx} className="countdown-item">
                <div className="countdown-value">
                  {item.value?.toString().padStart(2, "0")}
                </div>
                <div className="countdown-label">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Right: Button + Spots */}
          <div className="countdown-right text-center ">
            <NavLink
              to="/ticket-booking#ticket-booking"
              className="text-decoration-none d-none"
            >
              <button className="book-ticket-btn ">
                <Icon name="Ticket" size={18} className="me-2" />
                Book Your Ticket
              </button>
            </NavLink>
            <div className="spots-remaining"
             style={{fontSize: "1rem", fontWeight: "600", color: "#fff", marginTop: "10px"}}>
              <span className="spots-dot" />
             The Brit FinTech Awards 2025 is officially a full house!
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default CountdownSlider2025;
