import React from "react";
import styled, { keyframes } from "styled-components";

/**
 * Keynote Speakers 2026
 * Placeholders ready — replace name / designation / company / logo / img
 * when speakers are announced. Logo expects PNG paths.
 */
const speakers = [
  {
    id: "tba-1",
    name: "John Doe",
    designation: "Chief Executive Officer",
    company: "Company Name",
    logo: "", // e.g. "/assets/img/keynotes/company-logo.png"
    img: "", // e.g. "/assets/img/keynotes/john-doe.png"
    placeholder: true,
  },
  {
    id: "tba-2",
    name: "John Doe",
    designation: "Chief Executive Officer",
    company: "Company Name",
    logo: "",
    img: "",
    placeholder: true,
  },
  {
    id: "tba-3",
    name: "John Doe",
    designation: "Chief Executive Officer",
    company: "Company Name",
    logo: "",
    img: "",
    placeholder: true,
  },
];

const KeynoteSpeaker2026 = () => {
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
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.id} style={{ animationDelay: `${index * 0.12}s` }}>
              <Frame>
                {speaker.img && !speaker.placeholder ? (
                  <Portrait
                    src={speaker.img}
                    alt={speaker.name}
                    loading="lazy"
                  />
                ) : (
                  <PlaceholderPortrait aria-hidden="true">
                    <PlaceholderMark>BFA</PlaceholderMark>
                    <PlaceholderHint>2026</PlaceholderHint>
                  </PlaceholderPortrait>
                )}

                <CardScrim aria-hidden="true" />

                <CardInfo>
                  <InfoTop>
                    <InfoText>
                      <NameText>{speaker.name}</NameText>
                      <Designation>{speaker.designation}</Designation>
                      <Company>{speaker.company}</Company>
                    </InfoText>

                    <LogoWrap title={speaker.company || "Company logo"}>
                      {speaker.logo ? (
                        <LogoImg
                          src={speaker.logo}
                          alt={`${speaker.company || speaker.name} logo`}
                          loading="lazy"
                        />
                      ) : (
                        <LogoPlaceholder>
                          <LogoPlaceholderMark>LOGO</LogoPlaceholderMark>
                          <LogoPlaceholderHint>PNG</LogoPlaceholderHint>
                        </LogoPlaceholder>
                      )}
                    </LogoWrap>
                  </InfoTop>
                </CardInfo>
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
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
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

const InfoTop = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
`;

const InfoText = styled.div`
  min-width: 0;
  flex: 1;
  display: grid;
  gap: 4px;
`;

const NameText = styled.span`
  display: block;
  font-family: "Bebas Neue", "Oswald", sans-serif;
  font-weight: 400;
  font-size: clamp(24px, 2.8vw, 34px);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #f2d8ac;
  line-height: 0.95;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

const LogoWrap = styled.div`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  border: 1px solid rgba(242, 216, 172, 0.45);
  background: rgba(255, 255, 255, 0.96);
  display: grid;
  place-items: center;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 6px;
  display: block;
`;

const LogoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  gap: 2px;
  background: linear-gradient(145deg, #f7f2ea, #ebe3d6);
`;

const LogoPlaceholderMark = styled.span`
  font-family: "Oswald", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #8a6d4a;
  text-align: center;
`;

const LogoPlaceholderHint = styled.span`
  font-family: "Outfit", sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: rgba(138, 109, 74, 0.7);
  text-align: center;
`;

export default KeynoteSpeaker2026;
