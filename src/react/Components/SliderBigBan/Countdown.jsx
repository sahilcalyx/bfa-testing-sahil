import React, { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDateBST = new Date("2025-07-31T22:59:59Z"); 
    // 22:59:59 UTC == 23:59:59 BST

    const nowUTC = new Date(
      new Date().getTime() + new Date().getTimezoneOffset() * 60000
    );

    // Add 1 hour for BST
    const nowBST = new Date(nowUTC.getTime() + 60 * 60 * 1000);

    const difference = targetDateBST - nowBST;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h2
        style={{
          color: "#fff",
          fontSize: "48px",
          fontWeight: "bold",
          margin: "20px 0 0 0",
          textAlign: "center",
          fontFamily: "'Orbitron', sans-serif",
        }}
      > 
         {timeLeft.hours}h:{timeLeft.minutes}m:{timeLeft.seconds}s Left
      </h2>

      <div className="mt-3 d-none mb-3">
        <span
          style={{
            color: "#fff",
            fontSize: "20px",
            fontWeight: "bold",
            background: "#000",
            padding: "8px 16px",
            borderRadius: "8px",
            textAlign: "center",
            fontFamily: "'Orbitron', sans-serif",
          }}
        >
          {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s left 
        </span>
      </div>
    </>
  );
};

export default Countdown;
