import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const GalleryButton = () => {
  return (
    <StyledWrapper>
      <NavLink to="/photo-gallery-2025" className="gallery-btn-sm">
        <button className="Btn"></button>
      </NavLink>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    width: 150px;
    height: 57px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(to right, #c8102e, #c8102e, #c8102e, #c8102e, #c8102e, #c8102e);
    background-size: 250%;
    background-position: left;
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 1s;
    overflow: hidden;
    font-size: 14px !important;
    font-weight: 600; 
  }

  .Btn::before {
    position: absolute;
    content: "Gallery 2025";
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 90%;
    border-radius: 8px;
    transition-duration: 1s;
    background-color: rgba(0, 0, 0, 0.842);
    background-size: 200%;
  }

  .Btn:hover {
    background-position: right;
    transition-duration: 1s;
  }

  .Btn:hover::before {
    background-position: right;
    transition-duration: 1s;
  }

  .Btn:active {
    transform: scale(0.95);
  }

  /* 🔽 Mobile-specific styles added below */
  @media (max-width: 768px) {
    .Btn {
      width: 100%;
      max-width: 208px;
      height: 45px;
      font-size: 13px !important;
      background-color: black !important;
      border: none;
      outline: none;
      margin-left: 14px !important;
      margin-top: 1px;
    }

    .Btn::before {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

export default GalleryButton;
