import React, { useId } from "react";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { discussionPanel2026 } from "./panelists2026";

const ROLE_LABEL = {
  moderator: "Moderator",
  panelist: "Panelist",
};

const bioSnippet = (person) => {
  const source = person.bioParagraphs?.[0] || person.tagline || "";
  return source.replace(/<[^>]+>/g, "").trim();
};

const PortraitBlock = ({ person }) => {
  const hasPhoto = Boolean(person.img);

  return (
    <PhotoSurface>
      {hasPhoto ? (
        <Portrait src={person.img} alt="" loading="lazy" />
      ) : (
        <Placeholder aria-hidden="true">
          <CircuitFill src="/assets/svgs/download.svg" alt="" />
        </Placeholder>
      )}
      {person.placeholder && (
        <InitialsOverlay aria-hidden="true">{person.initials || "BFA"}</InitialsOverlay>
      )}
    </PhotoSurface>
  );
};

const LogoBlock = ({ person, $onDark, $featured }) => {
  const src = $onDark ? person.logo : person.logoLight || person.logo;
  if (!src) {
    return <LogoFallback $invert={$onDark}>{person.company}</LogoFallback>;
  }

  return (
    <LogoSlot $featured={$featured}>
      <CompanyLogo
        src={src}
        alt={person.company}
        loading="lazy"
        $onDark={Boolean($onDark && person.logoOnDark)}
        $featured={$featured}
        $size={!$featured ? person.logoSize : undefined}
      />
    </LogoSlot>
  );
};

const FeaturedPerson = ({ person, reduceMotion, onOpen }) => {
  const clickable = Boolean(person.slug);

  return (
    <Feature
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <FeaturePhoto
        $clickable={clickable}
        onClick={() => clickable && onOpen(person)}
        role={clickable ? "link" : undefined}
        tabIndex={clickable ? 0 : undefined}
        onKeyDown={(event) => {
          if (clickable && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            onOpen(person);
          }
        }}
        aria-label={clickable ? `View ${person.name} profile` : undefined}
      >
        <PortraitBlock person={person} />
      </FeaturePhoto>

      <FeatureCopy>
        <RoleLine>{ROLE_LABEL[person.role] || "Panelist"}</RoleLine>
        <FeatureName>{person.name}</FeatureName>
        <TitleLine>
          {person.designation}
        </TitleLine>
        <LogoBlock person={person} $onDark $featured />
        {person.tagline && <Tagline>{person.tagline}</Tagline>}
        <Bio>{bioSnippet(person)}</Bio>
        {clickable && (
          <ProfileBtn type="button" onClick={() => onOpen(person)}>
            View profile
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </ProfileBtn>
        )}
      </FeatureCopy>
    </Feature>
  );
};

const PersonCard = ({ person, index, reduceMotion, onOpen }) => {
  const clickable = Boolean(person.slug);

  return (
    <Poster
      type="button"
      $clickable={clickable}
      onClick={() => clickable && onOpen(person)}
      aria-label={clickable ? `View ${person.name} profile` : undefined}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduceMotion || !clickable ? undefined : { y: -8 }}
      whileTap={reduceMotion || !clickable ? undefined : { scale: 0.985 }}
    >
      <PosterPhoto>
        <PortraitBlock person={person} />
      </PosterPhoto>
      <Caption>
        <RoleLine>{ROLE_LABEL[person.role] || "Panelist"}</RoleLine>
        <Name>{person.name}</Name>
        <TitleLine>
          {person.designation}
          {person.company ? ` · ${person.company}` : ""}
        </TitleLine>
        <LogoBlock person={person} $onDark />
        {clickable && <TapNote>View profile</TapNote>}
      </Caption>
    </Poster>
  );
};

const DiscussionPanel2026 = () => {
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const titleId = useId();
  const people = discussionPanel2026.filter(
    (person) => person.name && person.name !== "To be announced"
  );
  const featured = people.length === 1;

  const openPerson = (person) => {
    if (person.slug) navigate(person.slug);
  };

  return (
    <Section aria-labelledby={titleId}>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <Glow $pos="tl" aria-hidden="true" />
      <Glow $pos="br" aria-hidden="true" />
      <Circuit
        src="/assets/svgs/download.svg"
        alt=""
        $place="tl"
        aria-hidden="true"
      />
      <Circuit
        src="/assets/svgs/download.svg"
        alt=""
        $place="br"
        aria-hidden="true"
      />

      <Inner>
        <Intro>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Kicker>Brit FinTech Awards 2026</Kicker>
            <Title id={titleId}>Discussion Panelists </Title>
          </motion.div>
        </Intro>

        {featured ? (
          <FeaturedPerson
            person={people[0]}
            reduceMotion={reduceMotion}
            onOpen={openPerson}
          />
        ) : (
          <Wall $count={people.length}>
            {people.map((person, index) => (
              <PersonCard
                key={person.id}
                person={person}
                index={index}
                reduceMotion={reduceMotion}
                onOpen={openPerson}
              />
            ))}
          </Wall>
        )}
      </Inner>
    </Section>
  );
};

const Section = styled.section`
  --dp-ink: #ece8e1;
  --dp-mute: #9a948c;
  --dp-crimson: #c8102e;
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 0;
  background: #121416;
  font-family: "IBM Plex Sans", system-ui, sans-serif;
  color: var(--dp-ink);
`;

const Glow = styled.div`
  pointer-events: none;
  position: absolute;
  z-index: 0;
  width: min(420px, 55vw);
  height: min(420px, 55vw);
  border-radius: 50%;
  filter: blur(90px);
  ${(p) =>
    p.$pos === "tl"
      ? `
    top: -12%;
    left: -8%;
    background: radial-gradient(circle, rgba(200, 16, 46, 0.32) 0%, transparent 70%);
  `
      : `
    right: -10%;
    bottom: -16%;
    background: radial-gradient(circle, rgba(200, 16, 46, 0.22) 0%, transparent 70%);
  `}
`;

const Circuit = styled.img`
  pointer-events: none;
  user-select: none;
  position: absolute;
  z-index: 0;
  object-fit: cover;
  opacity: 0.92;
  filter: drop-shadow(0 0 10px rgba(200, 16, 46, 0.55)) brightness(1.35);

  ${(p) =>
    p.$place === "tl"
      ? `
    top: 0;
    left: 0;
    width: 42%;
    height: 78%;
    transform: scaleX(-1);
  `
      : `
    right: 0;
    bottom: 0;
    width: 42%;
    height: 78%;
    transform: scaleY(-1);
  `}

  @media (max-width: 720px) {
    width: 70%;
    height: 55%;
    opacity: 0.7;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 20px 32px;
`;

const Intro = styled.header`
  margin-bottom: 16px;
  text-align: center;
`;

const Kicker = styled.div`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--dp-crimson);
  margin-bottom: 8px;
`;

const Title = styled.h2`
  margin: 0;
  font-family: "Oswald", "IBM Plex Sans", sans-serif;
  font-weight: 600;
  font-size: clamp(30px, 4.6vw, 48px);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 0.95;
  color: #fff;
`;

const Feature = styled(motion.article)`
  display: grid;
  grid-template-columns: minmax(260px, 360px) minmax(0, 1fr);
  align-items: stretch;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    max-width: 420px;
  }
`;

const FeaturePhoto = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: #0e1013;
  cursor: ${(p) => (p.$clickable ? "pointer" : "default")};
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.55);

  img {
    transition: transform 0.7s ease;
  }

  &:hover img {
    transform: ${(p) => (p.$clickable ? "scale(1.04)" : "none")};
  }

  &:focus-visible {
    outline: ${(p) => (p.$clickable ? "2px solid #fff" : "none")};
    outline-offset: 4px;
  }
`;

const FeatureCopy = styled.div`
  position: relative;
  z-index: 1;
  margin-left: -40px;
  padding: 48px 48px 48px 88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #000;
  min-height: 100%;

  @media (max-width: 720px) {
    margin-left: 0;
    margin-top: -52px;
    padding: 68px 20px 28px;
  }
`;

const FeatureName = styled.h3`
  margin: 0 0 6px;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: clamp(28px, 4vw, 42px);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  line-height: 1.05;
  color: #fff;
`;

const Tagline = styled.p`
  margin: 0 0 14px;
  max-width: 38em;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
`;

const Bio = styled.p`
  margin: 0 0 18px;
  max-width: 42em;
  font-size: 13px;
  line-height: 1.65;
  color: var(--dp-mute);
`;

const ProfileBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #fff;

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover {
    color: var(--dp-crimson);
  }
`;

const Wall = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => Math.min(p.$count || 4, 4)}, minmax(0, 1fr));
  gap: 12px;
  max-width: ${(p) => (p.$count <= 2 ? "720px" : "100%")};
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(${(p) => Math.min(p.$count || 2, 2)}, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    max-width: 380px;
  }
`;

const Poster = styled(motion.button)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  border: 0;
  overflow: hidden;
  cursor: ${(p) => (p.$clickable ? "pointer" : "default")};
  background: #000;
  text-align: left;

  &:focus-visible {
    outline: ${(p) => (p.$clickable ? "2px solid #fff" : "none")};
    outline-offset: 4px;
  }

  &:hover img {
    transform: ${(p) => (p.$clickable ? "scale(1.04)" : "none")};
  }
`;

const PosterPhoto = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: #0e1013;
  flex-shrink: 0;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.55);

  img {
    transition: transform 0.7s ease;
  }
`;

const PhotoSurface = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Portrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`;

const InitialsOverlay = styled.span`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-family: "Oswald", sans-serif;
  font-size: 42px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: rgba(236, 232, 225, 0.55);
  text-shadow: 0 0 18px rgba(200, 16, 46, 0.45);
  pointer-events: none;
`;

const Placeholder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: linear-gradient(180deg, #2a2e34 0%, #14171b 100%);

  span {
    position: relative;
    z-index: 1;
    font-family: "Oswald", sans-serif;
    font-size: 42px;
    font-weight: 600;
    letter-spacing: 0.18em;
    color: rgba(236, 232, 225, 0.55);
    text-shadow: 0 0 18px rgba(200, 16, 46, 0.45);
  }
`;

const CircuitFill = styled.img`
  position: absolute;
  inset: -20%;
  width: 140%;
  height: 140%;
  object-fit: cover;
  opacity: 0.85;
  filter: brightness(1.4) drop-shadow(0 0 8px rgba(200, 16, 46, 0.4));
  pointer-events: none;
`;

const Caption = styled.div`
  position: relative;
  z-index: 1;
  margin-top: -40px;
  padding: 48px 14px 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #000;
`;

const RoleLine = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--dp-crimson);
`;

const Name = styled.h3`
  margin: 0 0 3px;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: clamp(16px, 1.6vw, 22px);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  line-height: 1.15;
  color: #fff;
`;

const TitleLine = styled.p`
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--dp-mute);
`;

const LogoSlot = styled.div`
  display: flex;
  align-items: center;
  min-height: ${(p) => (p.$featured ? "64px" : "auto")};
  margin: ${(p) => (p.$featured ? "6px 0 18px" : "0 0 8px")};
`;

const CompanyLogo = styled.img`
  display: block;
  height: ${(p) => p.$size?.height || (p.$featured ? "48px" : "28px")};
  width: auto;
  max-width: ${(p) => p.$size?.maxWidth || (p.$featured ? "220px" : "140px")};
  object-fit: contain;
  object-position: left center;
  background: ${(p) => (p.$onDark ? "#000" : "rgba(255,255,255,0.92)")};
  border-radius: 3px;
  padding: ${(p) => (p.$size ? "0" : p.$featured ? "6px 8px" : "3px 6px")};
`;

const LogoFallback = styled.span`
  display: inline-flex;
  margin-bottom: 8px;
  padding: 4px 8px;
  border: 1px dashed ${(p) => (p.$invert ? "rgba(236,232,225,0.28)" : "rgba(18,20,22,0.2)")};
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(p) => (p.$invert ? "rgba(236,232,225,0.55)" : "#7a756e")};
`;

const TapNote = styled.span`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(236, 232, 225, 0.55);
`;

export default DiscussionPanel2026;
