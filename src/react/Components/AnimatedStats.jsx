import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
      { threshold: 0.2 }
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
      if (!isVisible) {
        setValue(0);
        return;
      }

      let start = 0;
      const increment = endValue / (duration * 100);
      const interval = 10;

      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setValue(endValue);
          clearInterval(timer);
        } else {
          setValue(Math.floor(start));
        }
      }, interval);

      return () => clearInterval(timer);
    }, [endValue, duration, isVisible]);

    return (
      <StatNumber>
        {value}
        {plus}
      </StatNumber>
    );
  };

  return (
    <StatsContainer>
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          data-index={index}
          ref={(el) => (statsRefs.current[index] = el)}
          $isVisible={visibleIndexes.includes(index)}
        >
          <StatContent>
            <StatValueWrapper>
              <Counter
                endValue={stat.endValue}
                duration={stat.duration}
                isVisible={visibleIndexes.includes(index)}
                plus={stat.plus}
              />
            </StatValueWrapper>
            <StatTitle>{stat.title}</StatTitle>
          </StatContent>
        </StatCard>
      ))}
    </StatsContainer>
  );
};

// Styled Components
const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 40px;
  padding: 40px 20px;
  background-color: #ffffff;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    padding: 60px 15px;
  }
`;

const StatCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: 100%;
  max-width: 300px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.$isVisible ? 0 : "40px")});
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.03);
  z-index: 1;

  /* Gradient Border Effect via Pseudo-element */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #c8102e, #680014);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
    z-index: 2;
  }

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 40px rgba(200, 16, 46, 0.15); /* Colored shadow */
    border-color: rgba(200, 16, 46, 0.1);
  }

  &:hover::before {
    transform: scaleX(1);
  }

  @media (max-width: 1024px) {
    max-width: 280px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StatContent = styled.div`
  padding: 50px 30px 45px;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);

  @media (max-width: 480px) {
    padding: 35px 20px 30px;
  }
`;

const StatValueWrapper = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const StatNumber = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 72px;
  font-weight: bold;
  background: linear-gradient(135deg, #c8102e 0%, #680014 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 5px;
  filter: drop-shadow(0 2px 4px rgba(200, 16, 46, 0.2));

  @media (max-width: 1024px) {
    font-size: 64px;
  }

  @media (max-width: 768px) {
    font-size: 56px;
  }

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

const StatTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #666666;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s ease;

  ${StatCard}:hover & {
    color: #c8102e;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export default AnimatedStats;