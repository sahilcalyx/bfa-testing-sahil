
    import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ScrollToHashElement = () => {
      const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const targetElement = document.getElementById(elementId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;

}

export default ScrollToHashElement
