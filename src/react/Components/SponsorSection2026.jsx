import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const SPONSORS_2026 = [
  {
    name: "Calyx Solutions",
    video: "/assets/video/sponsors-logo-2026/sposnsor-logo-2026-Calyx-solutions.webm",
    link: "https://calyx-solutions.com/",
    external: true,
    tier: "Hosted By",
  },
  {
    name: "Tigris Pay",
    video: "/assets/video/sponsors-logo-2026/sposnsor-logo-2026-Tigris-pay.webm",
    link: "/tigris-pay-sponsor-details-2026",
    external: false,
    tier: "Platinum Sponsor",
  },
  {
    name: "Mercury Danati",
    video: "/assets/video/sponsors-logo-2026/sposnsor-logo-2026-mercury-Danati.webm",
    link: "/mercury-danati-sponsor-details-2026",
    external: false,
    tier: "Sponsor Partner",
  },
  {
    name: "Sends",
    video: "/assets/video/sponsors-logo-2026/sposnsor-logo-2026-Sends.webm",
    link: "/sends-sponsor-details-2026",
    external: false,
    tier: "Silver Sponsor",
  },
  {
    name: "Kmbal",
    video: "/assets/video/sponsors-logo-2026/sposnsor-logo-2026-Kmbal.webm",
    link: "/kmbal-sponsor-details-2026",
    external: false,
    tier: "Silver Sponsor",
  },
   {
    name: "Leatherback",
    video: "/assets/video/sponsors-logo-2026/leatherback-logo-sponsor-2026.webm",
    link: "/leatherback-sponsor-details-2026",
    external: false,
    tier: "Silver Sponsor",
    alt: "Leatherback",
    title: "Leatherback",
  },
  {
    name: "Invictus Ventures",
    video: "/assets/video/sponsors-logo-2026/Invictus-sponsor-details-2026.webm",
    link: "/invictus-ventures-sponsor-details-2026",
    external: false,
    tier: "Silver Sponsor",
    alt: "Invictus Ventures",
    title: "Invictus Ventures",
  },
   {
    name: "Grants Payments",
    video: "/assets/video/sponsors-logo-2026/grants-payments-sponsor-details-2026.webm",
    link: "/grants-payments-sponsor-details-2026",
    external: false,
    tier: "Silver Sponsor",
    alt: "Grants Payments",
    title: "Grants Payments",
  },
  {
    name: "Peratera",
    video: "/assets/video/sponsors-logo-2026/peratera-sponsor-details-2026.webm",
    link: "/peratera-sponsor-details-2026",
    external: false,
    tier: "Silver Sponsor",
    alt: "Peratera",
    title: "Peratera",
  },
  // {
  //   name: "ECEX",
  //   video: "/assets/video/sponsors-logo-2026/ecex-sponsor-details-2026.webm",
  //   link: "/ecex-sponsor-details-2026",
  //   external: false,
  //   tier: "Silver Sponsor",
  //   alt: "ECEX",
  //   title: "ECEX",
  // },
  
  
   {
    name: "Leftover Currency",
    video: "/assets/video/sponsors-logo-2026/sposnsor-logo-2026-leftover-currency.webm",
    link: "/leftover-currency-sponsor-details-2026",
    external: false,
    tier: "Innovation Sponsor",
  },
  {
    name: "QF Remit",
    video: "/assets/video/sponsors-logo-2026/sposnsor-logo-2026-qfremit.webm",
    link: "/qfremit-sponsor-details-2026",
    external: false,
    tier: "Innovation Sponsor",
    alt: "QF Remit",
    title: "QF Remit",
  },
  {
    name: "Glory & Honour",
    video: "/assets/video/sponsors-logo-2026/glory-honour-sponsor-details-2026.webm",
    link: "/glory-honour-sponsor-details-2026",
    external: false,
    tier: "Strategic Sponsor",
    alt: "Glory & Honour",
    title: "Glory & Honour",
  },
  {
    name: "MyRemit",
    video: "/assets/video/sponsors-logo-2026/myremit-sponsor-details-2026.webm",
    link: "/myremit-sponsor-details-2026",
    external: false,
    tier: "Strategic Sponsor",
    alt: "MyRemit",
    title: "MyRemit",
  },
  {
    name: "Red Sea Money Transfer",
    video: "/assets/video/sponsors-logo-2026/Redsea-logo-sponsor-details-2026.webm",
    link: "/redsea-sponsor-details-2026",
    external: false,
    tier: "Strategic Sponsor",
    alt: "Red Sea Money Transfer",
    title: "Red Sea Money Transfer",
  },
  
  {
    name: "Teeparam",
    video: "/assets/video/sponsors-logo-2026/Teeparam-logo-sponsor-details-2026.webm",
    link: "/teeparam-sponsor-details-2026",
    external: false,
    tier: "Logistics Sponsor",
    alt: "Teeparam",
    title: "Teeparam",
  },
  {
    name: "Blue Nile Money Transfer",
    video: "/assets/video/sponsors-logo-2026/Bluenile-sponsor-details-2026.webm",
    link: "https://bluenilemoneytransfer.com/",
    external: true,
    alt: "Blue Nile Money Transfer",
    title: "Blue Nile Money Transfer",
  },
  {
    name: "FinestPay",
    video: "/assets/video/sponsors-logo-2026/Fintestpay-sponsor-details-2026.webm",
    link: "https://finestpay.co.uk/",
    external: true,
    alt: "FinestPay",
    title: "FinestPay",
  },
  {
    name: "IfePay",
    video: "/assets/video/sponsors-logo-2026/Ifpay-sponsor-details-2026.webm",
    link: "https://ifepay.co.uk/",
    external: true,
    alt: "IfePay",
    title: "IfePay",
  },
  
];

function SponsorSlide({ sponsor, onNavigate }) {
  const media = sponsor.video ? (
    <LogoVideo
      src={sponsor.video}
      autoPlay
      loop
      muted
      playsInline
      aria-label={sponsor.name}
    />
  ) : (
    <img
      src={sponsor.image}
      alt={sponsor.name}
      style={{ width: "100%", maxHeight: "140px", objectFit: "contain", padding: "16px", borderRadius: "12px" }}
    />
  );

  if (sponsor.external) {
    return (
      <SponsorCard
        as="a"
        href={sponsor.link}
        target="_blank"
        rel="noopener noreferrer"
        title={sponsor.name}
      >
        {media}
      </SponsorCard>
    );
  }

  return (
    <SponsorCard
      to={sponsor.link}
      title={sponsor.name}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(sponsor.link);
      }}
    >
      {media}
    </SponsorCard>
  );
}

const SponsorSection2026 = () => {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const [inView, setInView] = useState(true);
  const [hoverPaused, setHoverPaused] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "80px 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const paused = hoverPaused || !inView;
  const loop = [...SPONSORS_2026, ...SPONSORS_2026];

  return (
    <SectionContainer>
      <ContentContainer>
        <div
          className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase"
          style={{ width: "100%", marginBottom: "36px" }}
        >
          <h2 className="cs-section_title cs-extra_bold" style={{ color: "#c8102e" }}>
            Our Sponsors 2026
          </h2>
        </div>
      </ContentContainer>

      <MarqueeViewport
        ref={rootRef}
        onMouseEnter={() => setHoverPaused(true)}
        onMouseLeave={() => setHoverPaused(false)}
        onTouchStart={() => setHoverPaused(true)}
        onTouchEnd={() => setHoverPaused(false)}
      >
        <FadeEdge $side="left" />
        <FadeEdge $side="right" />

        <MarqueeTrack $paused={paused}>
          <MarqueeGroup>
            {loop.map((sponsor, index) => (
              <SponsorSlide
                key={`${sponsor.name}-${index}`}
                sponsor={sponsor}
                onNavigate={navigate}
              />
            ))}
          </MarqueeGroup>
        </MarqueeTrack>
      </MarqueeViewport>

      <ContentContainer>
        <PastSponsorsButton to="/our-sponsors">View Sponsors</PastSponsorsButton>
      </ContentContainer>
    </SectionContainer>
  );
};

const marqueeX = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-50%, 0, 0); }
`;

const SectionContainer = styled.section`
  width: 100%;
  background-color: #fafbfc;
  padding: 56px 0 60px;
  border-top: 1px solid #eaeef2;
  border-bottom: 1px solid #eaeef2;
  margin-bottom: 0;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const MarqueeViewport = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 8px 0 4px;

  &:hover .bfa-sponsor-marquee-track {
    animation-play-state: paused !important;
  }
`;

const FadeEdge = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  width: min(72px, 12vw);
  z-index: 2;
  ${(p) =>
    p.$side === "left"
      ? `left: 0; background: linear-gradient(to right, #fafbfc, transparent);`
      : `right: 0; background: linear-gradient(to left, #fafbfc, transparent);`}
`;

const MarqueeTrack = styled.div.attrs({ className: "bfa-sponsor-marquee-track" })`
  display: flex;
  width: max-content;
  animation: ${marqueeX} 60s linear infinite;
  animation-play-state: ${(p) => (p.$paused ? "paused" : "running")};
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);

  @media (max-width: 768px) {
    animation-duration: 48s;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
  }
`;

const MarqueeGroup = styled.div`
  display: flex;
  align-items: stretch;
  gap: 18px;
  padding-right: 18px;

  @media (max-width: 640px) {
    gap: 12px;
    padding-right: 12px;
  }
`;

const SponsorCard = styled(NavLink)`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 8px;
  width: min(380px, 72vw);
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.08);
  }

  @media (min-width: 768px) {
    width: 420px;
  }

  @media (min-width: 1200px) {
    width: 460px;
  }
`;

const LogoVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border-radius: 12px;
  pointer-events: none;
`;

const PastSponsorsButton = styled(NavLink)`
  display: inline-block;
  background: linear-gradient(135deg, #c8102e, #680014, #171516);
  color: #ffffff;
  padding: 12px 25px;
  border-radius: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none !important;
  margin-top: 36px;
  box-shadow: 0 8px 18px rgba(23, 21, 22, 0.45);
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 26px rgba(200, 16, 46, 0.45), 0 0 18px rgba(255, 255, 255, 0.25);
    background: linear-gradient(135deg, #d91c39, #7a001a, #1f1c1d);
    color: #ffffff !important;
  }
`;

export default SponsorSection2026;
