import React, { useState, useEffect, useRef } from "react";

const sponsors = [
  { href: "https://calyx-solutions.com/", img: "../assets/img/sponsor-logo/calyx-2025.png", alt: "Sponsor 1" },
  { href: "/truslypay-sponsor-details-2025", img: "../assets/img/sponsor-logo/Truslypay-25.png", alt: "Sponsor 2" },
  { href: "/mercury-sponsor-details-2025", img: "../assets/img/sponsor-logo/Mercury-Danati-25.png", alt: "Sponsor 3" },
  { href: "/leatherback-sponsor-details-2025", img: "../assets/img/sponsor-logo/leatherback-logo.png", alt: "Sponsor 4" },
  { href: "/teeparam-exchange-details-2025", img: "../assets/img/sponsor-logo/Teeparam-sponsor-Logo.png", alt: "Sponsor 5" },
  { href: "/volume-pay-sponsor-details-2025", img: "../assets/img/sponsor-logo/volume-silver-2025.png", alt: "Sponsor 6" },
];

export default function SponsorsSlider2025() {
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const lastTimeRef = useRef(0);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    let animationFrame;

    const speed = 50; // pixels per second

    const animate = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      posRef.current -= speed * delta;
      const trackWidth = trackRef.current.scrollWidth / 2;

      if (Math.abs(posRef.current) >= trackWidth) {
        posRef.current = 0;
      }

      trackRef.current.style.transform = `translateX(${posRef.current}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Trigger animation for title after mount
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTitleVisible(true);
    }, 300); // slight delay for smooth effect
    return () => clearTimeout(timeout);
  }, []);

  const outerContainerStyles = {
    width: "100%",
    background: "#fff",
    padding: "20px 0",
    overflow: "hidden",
  };

  const trackStyles = {
    display: "flex",
    gap: "40px",
    flexWrap: "nowrap",
    whiteSpace: "nowrap",
    willChange: "transform",
  };

  const linkStyles = {
    display: "inline-block",
    flex: "0 0 auto",
  };

  const imgStyles = {
    height: "80px",
    width: "auto",
    display: "block",
    transition: "transform 0.3s ease",
  };

  const titleStyles = {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    letterSpacing: "2px",
    marginBottom: "20px",
    opacity: titleVisible ? 1 : 0,
    transform: titleVisible ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.8s ease, transform 0.8s ease",
  };

  return (
    <div style={{ background: "#fff", padding: "30px 0" }}>
      <h2 style={titleStyles}>OUR SPONSORS</h2>
      <div style={outerContainerStyles}>
        <div ref={trackRef} style={trackStyles}>
          {[...sponsors, ...sponsors].map((s, index) => (
            <a
              key={index}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyles}
            >
              <img src={s.img} alt={s.alt} style={imgStyles} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
