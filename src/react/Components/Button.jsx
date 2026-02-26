import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <NavLink to="/award-winners-2025" className="Btn"> 
       Winners 2025
      </NavLink>
    </StyledWrapper>
  );
};

// Aqua flash animation
const flash = keyframes`
  0% {
    left: -100%;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    left: 120%;
    opacity: 0;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .Btn {
    height: 55px;
    padding: 0 25px;
    font-size: 14px;
    font-weight: bold;
    color: white !important;
    text-decoration: none;
    border: 2px solid #fff;
    border-radius: 12px;
    background: transparent;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    transition: transform 0.2s ease-in-out, background-color 0.3s, color 0.3s;
    box-shadow: 0 0 5px rgba(0, 255, 255, 0.7),
                0 0 5px rgba(0, 255, 255, 0.4),
                0 0 5px rgba(0, 255, 255, 0.2);
    max-width: 100%;
  }

  .Btn::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    height: 100%;
    width: 60%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(0, 255, 255, 0.4),
      transparent
    );
    transform: skewX(-20deg);
    animation: ${flash} 2.5s ease-in-out infinite;
    z-index: 0;
  }

  .Btn:hover {
    transform: scale(1.05);
  }

  .Btn:active {
    transform: scale(0.95);
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 768px) {
   @media (max-width: 768px) {
  .Btn {
    background-color: black !important;
    color: white !important;
    max-width: 211px;
    width: 100%;
    margin-left: -154px !important;
    margin-bottom: 0;
    padding-bottom: 0 !important;
    height: 45px;
    border: none !important;
    outline: none !important;
  }

  .Btn::after {
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
  }
}

  }
`;

export default Button;
