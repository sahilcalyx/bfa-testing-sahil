"use client";

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { speakers2026 } from "./speakers2026";

const KeynoteAmaBanner2026 = () => {
  const navigate = useNavigate();

  return (
    <Section aria-labelledby="keynote-ama-heading">
      <Glow aria-hidden="true" />

      <Inner>
        <Intro>
          <Pill>Brit FinTech Awards</Pill>
          <Headline id="keynote-ama-heading">
            <Accent>Keynote</Accent>
            <Line>
              Speakers <Accent>2026</Accent>
            </Line>
          </Headline>
          <Sub>
            Meet the voices taking the stage at this year’s awards.
          </Sub>
        </Intro>

        <Cards>
          {speakers2026.map((speaker) => (
              <CardWrap key={speaker.id}>
                <Card
                  onClick={() => speaker.slug && navigate(speaker.slug)}
                  role={speaker.slug ? "link" : undefined}
                  tabIndex={speaker.slug ? 0 : undefined}
                  onKeyDown={(event) => {
                    if (speaker.slug && (event.key === "Enter" || event.key === " ")) {
                      event.preventDefault();
                      navigate(speaker.slug);
                    }
                  }}
                >
                  <ColorBlock />
                  <PhotoWrap>
                    {speaker.img && !speaker.placeholder ? (
                      <Photo src={speaker.img} alt={speaker.name} loading="lazy" />
                    ) : (
                      <Fallback>{speaker.initials}</Fallback>
                    )}
                  </PhotoWrap>
                  <NamePlate>
                    <Name>{speaker.name}</Name>
                    <Role>{speaker.designation}</Role>
                    {speaker.logo && (
                      <CompanyLogo
                        src={speaker.logo}
                        alt={speaker.company}
                        loading="lazy"
                      />
                    )}
                  </NamePlate>
                </Card>
              </CardWrap>
          ))}
        </Cards>
      </Inner>
    </Section>
  );
};

const crimson = "#c8102e";
const mist = "#e8dce0";

const Section = styled.section`
  position: relative;
  overflow: hidden;
  background: #0b0c10;
  font-family: "Outfit", system-ui, sans-serif;
  color: #fff;
`;

const Glow = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse at 12% 40%, rgba(200, 16, 46, 0.22) 0%, transparent 46%),
    radial-gradient(ellipse at 88% 70%, rgba(200, 16, 46, 0.14) 0%, transparent 42%);
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  padding: 96px 24px 108px;
  display: grid;
  grid-template-columns: minmax(220px, 0.85fr) minmax(0, 1.15fr);
  gap: 40px 48px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 72px 20px 80px;
  }
`;

const Intro = styled.div`
  max-width: 420px;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 18px;
`;

const Headline = styled.h2`
  margin: 0 0 14px;
  font-family: "Syne", "Outfit", sans-serif;
  font-weight: 800;
  font-size: clamp(42px, 6vw, 72px);
  line-height: 0.92;
  letter-spacing: -0.04em;
`;

const Accent = styled.span`
  color: ${crimson};
`;

const Line = styled.span`
  display: block;
  color: #fff;
`;

const Sub = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.72);
  max-width: 320px;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    max-width: 320px;
    margin: 0 auto;
  }
`;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 3 / 4;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${crimson};
    outline-offset: 4px;
  }
`;

const ColorBlock = styled.div`
  position: absolute;
  inset: 8% 10% 18% 10%;
  background: ${crimson};
`;

const PhotoWrap = styled.div`
  position: absolute;
  inset: 0 12% 22% 12%;
  z-index: 1;
  overflow: hidden;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
`;

const Fallback = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: #1a1a1a;
  font-family: "Syne", sans-serif;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.35);
`;

const NamePlate = styled.div`
  position: absolute;
  left: 0;
  right: 18%;
  bottom: 0;
  z-index: 2;
  min-height: 92px;
  padding: 12px 14px 12px;
  background: ${mist};
  color: #141416;
`;

const Name = styled.div`
  font-family: "Syne", sans-serif;
  font-weight: 800;
  font-size: 16px;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 4px;
`;

const Role = styled.div`
  font-size: 12px;
  line-height: 1.35;
  opacity: 0.88;
  margin-bottom: 8px;
`;

const CompanyLogo = styled.img`
  display: block;
  height: 22px;
  width: auto;
  max-width: 130px;
  object-fit: contain;
  object-position: left center;
  background: transparent;
`;

export default KeynoteAmaBanner2026;
