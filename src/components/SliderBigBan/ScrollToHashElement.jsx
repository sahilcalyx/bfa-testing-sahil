
    import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      // In Next.js, window.location.hash is the most reliable source of truth
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      if (!hash) return;

      const elementId = hash.replace("#", "");
      let attempts = 0;

      const interval = setInterval(() => {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
          const yOffset = -100; // Account for the sticky header
          const y =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });

          attempts++;
          if (attempts >= 6) {
            // Stop after successful tries (to combat late layout shifts)
            clearInterval(interval);
          }
        } else {
          attempts++;
          if (attempts >= 10) {
            // Give up after failed tries
            clearInterval(interval);
          }
        }
      }, 500);

      return () => clearInterval(interval);
    };

    // Run on mount and location change
    const cleanup = scrollToHash();

    // Also listen to raw window hashchange events for Next.js explicit clicks
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      if (cleanup) cleanup();
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [location]);

  return null;
};

export default ScrollToHashElement;
