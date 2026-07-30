import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const SponsorSection2026 = () => {
  const navigate = useNavigate();
  const sponsors = [
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
      image: "/assets/img/sponsor-logo/kmbal-sponsor-Logo.png",
      link: "/kmbal-sponsor-details-2026",
      external: false,
      tier: "Silver Sponsor",
    },
  ];

  return (
    <SectionContainer>
      <ContentContainer>
        <div className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase" style={{ width: "100%", marginBottom: "40px" }}>
          <div className="cs-section_subtitle cs-primary_font cs-medium cs-accent_color">
            {/* <strong>SUPPORTED BY</strong> */}
          </div>
          <h2 className="cs-section_title cs-extra_bold" style={{ color: "#c8102e" }}>
            Our Sponsors 2026
          </h2>

        </div>

        <SponsorsGrid>
          {sponsors.map((sponsor, index) => (
            <SponsorCard
              key={index}
              to={sponsor.link}
              target={sponsor.external ? "_blank" : undefined}
              rel={sponsor.external ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (!sponsor.external) {
                  e.preventDefault();
                  navigate(sponsor.link);
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
              }}
            >
              {sponsor.video ? (
                <LogoVideo
                  src={sponsor.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label={sponsor.name}
                />
              ) : (
                <LogoImage
                  src={sponsor.image}
                  alt={sponsor.name}
                  style={{ maxHeight: 120, padding: 24 }}
                />
              )}
            </SponsorCard>
          ))}
        </SponsorsGrid>

        <PastSponsorsButton to="/our-sponsors">
        View Sponsors
        </PastSponsorsButton>
      </ContentContainer>
    </SectionContainer>
  );
};

// Styled Components
const SectionContainer = styled.section`
  width: 100%;
  background-color: #fafbfc;
  padding: 60px 20px;
  border-top: 1px solid #eaeef2;
  border-bottom: 1px solid #eaeef2;
  margin-bottom: 60px;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 32px;
  color: #1a1e21;
  text-align: center;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const Underline = styled.div`
  width: 70px;
  height: 4px;
  background: linear-gradient(90deg, #c8102e, #ff3b57);
  border-radius: 2px;
  margin-bottom: 50px;
`;

const SponsorsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
  width: 100%;
`;

const SponsorCard = styled(NavLink)`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 8px;
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  cursor: pointer;
`;

const LogoContainer = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

const LogoVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border-radius: 14px;
  pointer-events: none;
`;

const TierBadge = styled.span`
  background: linear-gradient(135deg, #ffd700 0%, #d4af37 100%);
  color: #000000;
  padding: 4px 14px;
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 3px 8px rgba(212, 175, 55, 0.2);
`;

const PastSponsorsButton = styled(NavLink)`
  display: inline-block;
  background: linear-gradient(135deg, #c8102e, #680014, #171516);
  color: #ffffff;
  padding: 12px 25px;
  border-radius: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none !important;
  margin-top: 45px;
  box-shadow: 0 8px 18px rgba(23, 21, 22, 0.45);
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 12px 26px rgba(200, 16, 46, 0.45),
      0 0 18px rgba(255, 255, 255, 0.25);
    background: linear-gradient(135deg, #d91c39, #7a001a, #1f1c1d);
    color: #ffffff !important;
  }
`;

export default SponsorSection2026;
