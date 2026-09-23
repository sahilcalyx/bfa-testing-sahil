import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { speakers2026 } from "./speakers2026";

const bioSnippet = (speaker) => {
  const source = speaker.bioParagraphs?.[0] || speaker.tagline || "";
  return source.replace(/<[^>]+>/g, "").trim();
};

const KeynoteSpeaker2026 = () => {
  const navigate = useNavigate();

  const openSpeaker = (speaker) => {
    if (speaker.slug) navigate(speaker.slug);
  };

  return (
    <Section aria-labelledby="keynote-speakers-heading">
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Outfit:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <Stage>
        <Header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase"
            style={{ width: "100%" }}
          >
            <h2
              id="keynote-speakers-heading"
              className="cs-section_title cs-extra_bold"
              style={{ color: "#c8102e" }}
            >
              Keynote Speakers 2026
            </h2>
          </div>
        </Header>

        <Rows>
          {speakers2026.map((speaker, index) => {
            const reverse = index % 2 === 1;

            return (
              <SpeakerRow
                key={speaker.id}
                $reverse={reverse}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <PhotoCol>
                  <PhotoFrame
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
                      <Portrait src={speaker.img} alt={speaker.name} loading="lazy" />
                    ) : (
                      <Placeholder aria-hidden="true">{speaker.initials || "BFA"}</Placeholder>
                    )}
                  </PhotoFrame>
                  <PhotoRule />
                </PhotoCol>

                <Copy $end={reverse}>
                  <NameText
                    $clickable={Boolean(speaker.slug)}
                    onClick={() => openSpeaker(speaker)}
                  >
                    {speaker.name}
                  </NameText>
                  <RoleLine>
                    {speaker.designation}, {speaker.company}
                  </RoleLine>

                  {speaker.logo && (
                    <CompanyLogo
                      src={speaker.logo}
                      alt={speaker.company}
                      loading="lazy"
                      $onDark={Boolean(speaker.logoOnDark)}
                    />
                  )}

                  <Bio>{bioSnippet(speaker)}</Bio>

                  {speaker.slug && (
                    <ProfileBtn
                      type="button"
                      onClick={() => openSpeaker(speaker)}
                    >
                      View profile
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </ProfileBtn>
                  )}
                </Copy>
              </SpeakerRow>
            );
          })}
        </Rows>
      </Stage>
    </Section>
  );
};

const Section = styled.section`
  --ks-crimson: #c8102e;
  --ks-ink: #1a1a1a;
  --ks-mute: #5a5f6a;
  width: 100%;
  margin: 0;
  background: #ffffff;
  font-family: "Outfit", system-ui, sans-serif;
  color: var(--ks-ink);
`;

const Stage = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 36px 24px 40px;
`;

const Header = styled(motion.header)`
  text-align: center;
  margin: 0 0 36px;
`;

const Rows = styled.div`
  display: grid;
  gap: 32px;
`;

const SpeakerRow = styled(motion.article)`
  display: flex;
  flex-direction: ${(p) => (p.$reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: flex-start;
  gap: 28px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
`;

const PhotoCol = styled.div`
  flex: 0 0 auto;
  width: 200px;

  @media (max-width: 768px) {
    width: 180px;
  }
`;

const PhotoFrame = styled.div`
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: #111;
  cursor: ${(p) => (p.$clickable ? "pointer" : "default")};

  &:focus-visible {
    outline: 2px solid var(--ks-crimson);
    outline-offset: 4px;
  }
`;

const Portrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-family: "Sora", sans-serif;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: rgba(255, 255, 255, 0.35);
  background: linear-gradient(160deg, #2a1016 0%, #111318 100%);
`;

const PhotoRule = styled.div`
  height: 2px;
  width: 100%;
  margin-top: 10px;
  background: var(--ks-crimson);
`;

const Copy = styled.div`
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: ${(p) => (p.$end ? "flex-end" : "flex-start")};
  text-align: ${(p) => (p.$end ? "right" : "left")};

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const NameText = styled.h3`
  margin: 0 0 8px;
  font-family: "Sora", "Outfit", sans-serif;
  font-weight: 800;
  font-size: clamp(26px, 3.4vw, 38px);
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--ks-crimson);
  cursor: ${(p) => (p.$clickable ? "pointer" : "default")};

  &:hover {
    color: ${(p) => (p.$clickable ? "#9b0d24" : "var(--ks-crimson)")};
  }
`;

const RoleLine = styled.p`
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ks-ink);
`;

const CompanyLogo = styled.img`
  display: block;
  height: 32px;
  width: auto;
  max-width: 170px;
  object-fit: contain;
  background: ${(p) => (p.$onDark ? "#000" : "transparent")};
  border-radius: ${(p) => (p.$onDark ? "5px" : "0")};
  padding: ${(p) => (p.$onDark ? "4px 8px" : "0")};
  margin-bottom: 10px;
`;

const Bio = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: var(--ks-mute);
`;

const ProfileBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  padding: 0;
  border: 0;
  background: none;
  color: var(--ks-crimson);
  font-family: "Outfit", sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;

  svg {
    width: 13px;
    height: 13px;
  }

  &:hover {
    color: #9b0d24;
  }
`;

export default KeynoteSpeaker2026;
