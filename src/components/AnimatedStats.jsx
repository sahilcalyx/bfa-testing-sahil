import React, { useEffect, useRef, useState } from "react";

const AnimatedStats = ({ stats }) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const statsRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    statsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      statsRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const Counter = ({ endValue, duration, isVisible, plus = "" }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const increment = endValue / (duration * 100);
      const interval = 10;
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setValue(endValue);
          clearInterval(timer);
        } else {
          setValue(Math.ceil(start));
        }
      }, interval);

      return () => clearInterval(timer);
    }, [endValue, duration, isVisible]);

    return (
      <div className="animated-number">
        {value}
        {plus}
      </div>
    );
  };

  return (
    <div className="stats-wrapper">
      {stats.map((stat, index) => (
        <div
          className="stat-card-modern"
          key={index}
          data-index={index}
          ref={(el) => (statsRefs.current[index] = el)}
        >
          <div className="stat-card-header">
            <Counter
              endValue={stat.endValue}
              duration={stat.duration}
              isVisible={visibleIndexes.includes(index)}
              plus={stat.plus}
            />
          </div>
          <div className="stat-card-body">
            <div className="stat-title-modern">{stat.title}</div>
          </div>
        </div>
      ))}

      {/* Internal CSS */}
      <style>{`
        .stats-wrapper {
          background: #f9f9f9;
          min-height: 50vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 40px;
        }

        .stat-card-modern {
          background: #ffffff;
          border-radius: 15px;
          overflow: hidden;
          width: 100%;
          max-width: 350px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
          position: relative;
        }

        .stat-card-modern:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
        }

        .stat-card-header {
          background: linear-gradient(135deg, #ff007c, #00f0ff);
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
          padding: 30px 0;
          text-align: center;
          transition: background 0.5s ease;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-number {
          font-size: 64px;
          font-weight: 800;
          color: #ffffff;
          transition: transform 0.3s ease;
        }

        .stat-card-modern:hover .animated-number {
          transform: scale(1.1);
        }

        .stat-card-body {
          padding: 30px 20px;
          text-align: center;
        }

        .stat-title-modern {
          font-size: 26px;
          font-weight: 700;
          color: #333333;
          letter-spacing: 0.5px;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .stat-card-modern:hover .stat-title-modern {
          color: #ff007c;
          transform: translateY(-4px);
        }

        @media (max-width: 768px) {
          .stat-card-modern {
            width: 90%;
          }

             .stats-wrapper {
          background: #f9f9f9;
          min-height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }
          .animated-number {
            font-size: 48px;
          }

          .stat-title-modern {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedStats;
