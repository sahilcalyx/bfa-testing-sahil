import React, { useId } from "react";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import {
  focusSession2026,
  focusSessionMeta2026,
} from "./speakers2026";

const EASE = [0.16, 1, 0.3, 1];

const Portrait = ({ person }) => {
  const showPhoto = Boolean(person.img) && !person.placeholder;

  return (
    <PhotoSurface>
      {showPhoto ? (
        <PortraitImg src={person.img} alt="" loading="lazy" />
      ) : (
        <Placeholder aria-hidden="true">
          <Initials>{person.initials || "BFA"}</Initials>
        </Placeholder>
      )}
    </PhotoSurface>
  );
};

const SpeakerCard = ({ person, index, reduceMotion, onOpen }) => {
  const profileUrl = person.bioSlug || person.slug || focusSessionMeta2026.pageSlug;

  return (
  <Card
    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{
      duration: 0.5,
      delay: reduceMotion ? 0 : index * 0.1,
      ease: EASE,
    }}
    onClick={() => onOpen(profileUrl)}
    style={{ cursor: "pointer" }}
    role="link"
    tabIndex={0}
    aria-label={`View ${person.name} profile`}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onOpen(profileUrl);
      }
    }}
  >
    <PhotoFrame>
      <Portrait person={person} />
    </PhotoFrame>

    <CardBody>
      <Name>
        {person.name}
        <FiArrowUpRight className="inline-block ml-1 text-xs opacity-60" aria-hidden="true" />
      </Name>
      <RoleLine>{person.designation}</RoleLine>

      <LogoRow>
        {person.logo ? (
          <CompanyLogo
            src={person.logo}
            alt={person.company}
            loading="lazy"
            $onDark={Boolean(person.logoOnDark)}
          />
        ) : (
          <LogoFallback>{person.company}</LogoFallback>
        )}
      </LogoRow>
      <ViewProfile className="fs-view-profile">View profile</ViewProfile>
    </CardBody>
  </Card>
  );
};

const FocusSession2026 = () => {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const speakers = focusSession2026.filter(
    (person) => person.name && person.name !== "To be announced"
  );

  const handleOpen = (slug) => {
    if (slug) navigate(slug);
  };

  return (
    <Section aria-labelledby={titleId}>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <Inner>
        <Split
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <TitlePanel>
            <Title id={titleId}>{focusSessionMeta2026.title}</Title>
            <Topic>
              <TopicLabel>{focusSessionMeta2026.topicLabel}</TopicLabel>
              {" — "}
              {focusSessionMeta2026.topic}
            </Topic>
            <SpeakersLabel>{focusSessionMeta2026.speakersLabel}</SpeakersLabel>

            <ExploreSessionLink to={focusSessionMeta2026.pageSlug}>
              <span>View details</span>
              <FiArrowUpRight aria-hidden="true" />
            </ExploreSessionLink>
          </TitlePanel>

          <CardsPanel>
            <Grid>
              {speakers.map((person, index) => (
                <SpeakerCard
                  key={person.id}
                  person={person}
                  index={index}
                  reduceMotion={reduceMotion}
                  onOpen={handleOpen}
                />
              ))}
            </Grid>
          </CardsPanel>
        </Split>
      </Inner>
    </Section>
  );
};

const Section = styled.section`
  --fs-ink: #1a1a1a;
  --fs-mute: #5a5f6a;
  --fs-mark: #c8102e;
  --fs-line: #e4e6ea;
  --fs-plate: #121416;
  width: 100%;
  margin: 0;
  padding: 36px 0;
  background: #ffffff;
  font-family: "IBM Plex Sans", system-ui, sans-serif;
  color: var(--fs-ink);
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Split = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(240px, 0.95fr) minmax(0, 1.35fr);
  align-items: stretch;
  min-height: 320px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 8px 32px rgba(26, 26, 26, 0.08);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    min-height: 0;
  }
`;

const TitlePanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 36px 32px;
  background:
    radial-gradient(ellipse at 0% 50%, rgba(0, 0, 0, 0.55) 0%, transparent 58%),
    linear-gradient(115deg, #1a0609 0%, #5c0a16 28%, #c8102e 62%, #e11d3a 100%);
  color: #fff;

  @media (max-width: 860px) {
    padding: 28px 24px;
    align-items: center;
    text-align: center;
    background:
      radial-gradient(ellipse at 50% 0%, rgba(0, 0, 0, 0.4) 0%, transparent 55%),
      linear-gradient(180deg, #1a0609 0%, #5c0a16 28%, #c8102e 70%, #e11d3a 100%);
  }
`;

const Title = styled.h2`
  margin: 0 0 14px;
  font-family: "Oswald", "IBM Plex Sans", sans-serif;
  font-weight: 700;
  font-size: clamp(34px, 4.6vw, 52px);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 0.95;
  color: #fff;
`;

const Topic = styled.p`
  margin: 0 0 28px;
  max-width: 16em;
  font-size: clamp(15px, 1.9vw, 18px);
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 860px) {
    max-width: none;
    margin-bottom: 20px;
  }
`;

const TopicLabel = styled.span`
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ffffff;
`;

const SpeakersLabel = styled.p`
  margin: 0 0 16px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
`;

const ExploreSessionLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  backdrop-filter: blur(4px);
  transition: all 0.25s ease;

  svg {
    font-size: 14px;
    transition: transform 0.25s ease;
  }

  &:hover {
    background: #ffffff;
    color: #c8102e;
    border-color: #ffffff;
    transform: translateY(-1px);

    svg {
      transform: translate(2px, -2px);
    }
  }
`;

const CardsPanel = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 28px;
  background: #ffffff;

  @media (max-width: 860px) {
    padding: 24px 20px 28px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  width: 100%;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const Card = styled(motion.article)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  border: 1px solid var(--fs-line);
  box-shadow: 0 2px 12px rgba(26, 26, 26, 0.05);

  &:focus-visible {
    outline: 2px solid var(--fs-ink);
    outline-offset: 3px;
  }

  &:hover .fs-view-profile {
    color: var(--fs-mark);
  }
`;

const PhotoFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  max-height: 220px;
  overflow: hidden;
  background: var(--fs-plate);

  img {
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

const PhotoSurface = styled.div`
  width: 100%;
  height: 100%;
`;

const PortraitImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #2a2e34 0%, #14171b 100%);
`;

const Initials = styled.span`
  font-family: "Oswald", sans-serif;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: rgba(236, 232, 225, 0.45);
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 14px 12px 16px;
`;

const Name = styled.h3`
  margin: 0 0 5px;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: clamp(15px, 1.6vw, 18px);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  line-height: 1.15;
  color: var(--fs-ink);
`;

const RoleLine = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.35;
  color: var(--fs-ink);
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-height: 36px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--fs-line);
`;

const CompanyLogo = styled.img`
  display: block;
  height: 26px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  object-position: center;
  background: ${(p) => (p.$onDark ? "#000" : "transparent")};
  border-radius: ${(p) => (p.$onDark ? "3px" : "0")};
  padding: ${(p) => (p.$onDark ? "4px 6px" : "0")};
`;

const LogoFallback = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--fs-mute);
`;

const ViewProfile = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--fs-mute);
  transition: color 0.2s ease;
`;

export default FocusSession2026;
