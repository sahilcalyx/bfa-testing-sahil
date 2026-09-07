import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { speakers2026 } from "./speakers2026";

const KeynoteSpeaker2026 = () => {
  const navigate = useNavigate();

  const openSpeaker = (speaker) => {
    if (speaker.slug) navigate(speaker.slug);
  };

  return (
    <Section aria-labelledby="keynote-speakers-heading">
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@500;600;700&family=Outfit:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <Stage>
        <Title id="keynote-speakers-heading">
          <TitleKicker>BFA 2026</TitleKicker>
          <TitleMain>Keynote Speakers</TitleMain>
        </Title>

        <StageGrid>
          {speakers2026.map((speaker, index) => (
            <SpeakerCard key={speaker.id} style={{ animationDelay: `${index * 0.12}s` }}>
              <Frame
                $clickable={Boolean(speaker.slug)}
                onClick={() => openSpeaker(speaker)}
                role={speaker.slug ? "link" : undefined}
                tabIndex={speaker.slug ? 0 : undefined}
                onKeyDown={(event) => {
                  if (speaker.slug && (event.key === "Enter" || event.key === " ")) {
                    event.preventDefault();
                    openSpeaker(speaker);
                  }
                }}
              >
                {speaker.img && !speaker.placeholder ? (
                  <Portrait
                    src={speaker.img}
                    alt={speaker.name}
                    loading="lazy"
                  />
                ) : (
                  <PlaceholderPortrait aria-hidden="true">
                    <PlaceholderMark>
                      {speaker.initials || "BFA"}
                    </PlaceholderMark>
                    <PlaceholderHint>2026</PlaceholderHint>
                  </PlaceholderPortrait>
                )}

                <CardScrim aria-hidden="true" />

                <CardInfo>
                  <InfoText>
                    <NameText>{speaker.name}</NameText>
                    <Designation>{speaker.designation}</Designation>
                    {speaker.logo ? (
                      <CompanyLogo
                        src={speaker.logo}
                        alt={speaker.company}
                        loading="lazy"
                        $onDark={Boolean(speaker.logoOnDark)}
                      />
                    ) : (
                      <Company>{speaker.company}</Company>
                    )}
                  </InfoText>
                </CardInfo>

                {speaker.slug && (
                  <ArrowBtn
                    type="button"
                    aria-label={`View ${speaker.name} profile`}
                    onClick={(event) => {
                      event.stopPropagation();
                      openSpeaker(speaker);
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </ArrowBtn>
                )}
              </Frame>
            </SpeakerCard>
          ))}
        </StageGrid>
      </Stage>
    </Section>
  );
};

const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  --ks-cream: #f2d8ac;
  --ks-ink: #1a080c;
  width: 100%;
  margin: 0 0 60px;
  overflow: hidden;
  font-family: "Outfit", system-ui, sans-serif;
`;

const Stage = styled.div`
  position: relative;
  background: linear-gradient(90deg, #c8102e 0%, #680014 100%);
  padding: clamp(44px, 6vw, 72px) 20px clamp(48px, 6vw, 80px);
  overflow: hidden;
`;

const Title = styled.h2`
  margin: 0 0 clamp(28px, 4vw, 44px);
  text-align: center;
  line-height: 1.05;
  display: grid;
  gap: 8px;
  justify-items: center;
`;

const TitleKicker = styled.span`
  display: block;
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: clamp(12px, 1.6vw, 14px);
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(242, 216, 172, 0.85);
`;

const TitleMain = styled.span`
  display: block;
  font-family: "Oswald", "Bebas Neue", sans-serif;
  font-weight: 700;
  font-size: clamp(36px, 6.5vw, 58px);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ks-cream);
`;

const StageGrid = styled.div`
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(14px, 2.5vw, 28px);
  align-items: stretch;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    max-width: 360px;
  }
`;

const SpeakerCard = styled.article`
  animation: ${rise} 0.55s ease both;
`;

const Frame = styled.div`
  position: relative;
  aspect-ratio: 3 / 4.2;
  border: 1.5px solid var(--ks-cream);
  border-radius: 0 22px 0 22px;
  background: var(--ks-ink);
  overflow: hidden;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
  }
`;

const Portrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  filter: grayscale(1) contrast(1.08);
  display: block;
  transition: filter 0.4s ease, transform 0.5s ease;

  ${Frame}:hover & {
    filter: grayscale(0.25) contrast(1.05);
    transform: scale(1.03);
  }
`;

const PlaceholderPortrait = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  gap: 6px;
  background:
    radial-gradient(ellipse at 50% 35%, #5c1820 0%, transparent 60%),
    linear-gradient(160deg, #2a0c12 0%, #4a1018 55%, #1a080c 100%);
`;

const PlaceholderMark = styled.span`
  font-family: "Oswald", sans-serif;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  letter-spacing: 0.2em;
  color: rgba(242, 216, 172, 0.35);
`;

const PlaceholderHint = styled.span`
  font-family: "Outfit", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(242, 216, 172, 0.28);
  text-align: center;
`;

const CardScrim = styled.div`
  position: absolute;
  inset: auto 0 0 0;
  height: 48%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(10, 4, 6, 0.55) 35%,
    rgba(10, 4, 6, 0.92) 100%
  );
  pointer-events: none;
  z-index: 1;
`;

const CardInfo = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  padding: 16px 16px 18px;
`;

const InfoText = styled.div`
  min-width: 0;
  display: grid;
  justify-items: start;
  gap: 5px;
`;

const NameText = styled.span`
  font-family: "Bebas Neue", "Oswald", sans-serif;
  font-weight: 400;
  font-size: clamp(22px, 2.5vw, 32px);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #f2d8ac;
  line-height: 0.95;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Designation = styled.span`
  display: block;
  font-family: "Outfit", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(242, 216, 172, 0.78);
  line-height: 1.3;
`;

const Company = styled.span`
  display: block;
  font-family: "Outfit", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CompanyLogo = styled.img`
  display: block;
  height: 32px;
  width: auto;
  max-width: 168px;
  object-fit: contain;
  object-position: left center;
  background: ${(p) => (p.$onDark ? "#000" : "transparent")};
  border-radius: ${(p) => (p.$onDark ? "6px" : "0")};
  padding: ${(p) => (p.$onDark ? "0" : "0")};
  margin-top: 2px;
`;

const ArrowBtn = styled.button`
  position: absolute;
  right: 14px;
  bottom: 16px;
  z-index: 3;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(242, 216, 172, 0.7);
  border-radius: 999px;
  background: linear-gradient(135deg, #c8102e 0%, #680014 100%);
  color: #f2d8ac;
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);
  transition: transform 0.25s ease, background 0.25s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    transform: scale(1.08);
    background: linear-gradient(135deg, #e01438 0%, #c8102e 100%);
  }
`;

export default KeynoteSpeaker2026;
