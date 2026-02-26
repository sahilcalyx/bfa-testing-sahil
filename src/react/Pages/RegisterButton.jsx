// components/RegisterButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterButton = ({ awardName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/nominate-now?awardId=${encodeURIComponent(awardName)}`);
  };

  return (
    <button
      onClick={handleClick}
      className="cs-toolbox_btn reg-aword-btn d-inline-block cs-accent_bg_2 cs-white_hover cs-accent_bg_hover text-white p-2"
    >
      <span
        style={{
          color: "rgb(255, 255, 255)",
          fontSize: "13px",
        }}
      >
        Register For This Award
      </span>
    </button>
  );
};

export default RegisterButton;
