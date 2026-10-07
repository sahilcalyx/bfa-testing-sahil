import React, { useEffect, useId } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { discussionPanel2026 } from "./panelists2026";

const EASE = [0.16, 1, 0.3, 1];

const PAGE_TITLE = "Discussion Panel 2026 | Brit FinTech Awards";
const PAGE_DESCRIPTION =
  "Can Fintechs and MSBs Afford to Ignore AI? How AI and changing customer behaviour are reshaping the Fintech and MSB industry. Meet the Brit FinTech Awards 2026 discussion panel.";
const PANEL_THEME = "Can Fintechs and MSBs Afford to Ignore AI?";
const PANEL_BRIEF =
  "How AI and changing customer behaviour are reshaping the Fintech and MSB industry, and how quickly businesses need to adapt to stay competitive.";

const ROLE_LABEL = {
  moderator: "Moderator",
  panelist: "Panelist",
};

/** Same logo source + treatment as DiscussionPanel2026 */
const LogoBlock = ({ person }) => {
  const isForen =
    person.id === "gayatri-chadaram" ||
    person.foren ||
    String(person.company || "").startsWith("FOREN");

  if (isForen) {
    return (
      <LogoSlot>
        <ForenMark aria-label={person.company || "FOREN. formerly Leatherback"}>
          <ForenName>FOREN.</ForenName>
          <ForenSub>
            <em>formerly</em> leatherback
          </ForenSub>
        </ForenMark>
      </LogoSlot>
    );
  }

  const src = person.logoLight || person.logo;
  if (!src) {
    return <LogoFallback>{person.company}</LogoFallback>;
  }

  return (
    <LogoSlot>
      <CompanyLogo
        src={src}
        alt={person.company}
        loading="lazy"
        $size={person.logoSize}
      />
    </LogoSlot>
  );
};

/** Display order: Alona, Sergio, Gayatri | Femi, Jay */
const PANEL_ORDER = [
  "alona-shevtsova",
  "sergio-ivanovic",
  "gayatri-chadaram",
  "femi-ekwuyasi",
  "jay-anand",
];

const DiscussionPanelPage2026 = ({ embedded = false }) => {
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const titleId = useId();

  const byId = Object.fromEntries(
    discussionPanel2026
      .filter((person) => person.name && person.name !== "To be announced")
      .map((person) => [person.id, person])
  );
  const people = PANEL_ORDER.map((id) => byId[id]).filter(Boolean);
  const theme = PANEL_THEME;

  useEffect(() => {
    if (!embedded) window.scrollTo(0, 0);
  }, [embedded]);

  const openPerson = (person) => {
    if (person?.slug) navigate(person.slug);
  };

  return (
    <Page $embedded={embedded}>
      {!embedded && (
        <Helmet>
          <title>{PAGE_TITLE}</title>
          <meta name="description" content={PAGE_DESCRIPTION} />
          <meta
            name="keywords"
            content="Brit FinTech Awards 2026, Discussion Panel, AI, Fintech, MSB, Alona Shevtsova"
          />
        </Helmet>
      )}
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {!embedded && <Rail aria-hidden="true" />}

      <Main $embedded={embedded}>
        {!embedded && (
          <Hero
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <HeroMeta>
              <MetaMark>Brit FinTech Awards 2026</MetaMark>
              <MetaTime>7:20 PM · Discussion Panel</MetaTime>
            </HeroMeta>

            <Title id={titleId}>
              Discussion
              <TitleAccent>Panel</TitleAccent>
            </Title>

            <Theme>{theme}</Theme>

            <HeroActions>
              <PrimaryCue href="#panel">Meet the panel</PrimaryCue>
              <GhostCue to="/">Back to home</GhostCue>
            </HeroActions>
          </Hero>
        )}

        {embedded && (
          <EmbeddedTheme>
            <BriefLabel>Topic:</BriefLabel>
            <ThemeCopy>
              <p>{theme}</p>
            </ThemeCopy>
          </EmbeddedTheme>
        )}

        <Brief>
          <BriefLabel>The conversation</BriefLabel>
          <BriefCopy>
            <p>{PANEL_BRIEF}</p>
          </BriefCopy>
        </Brief>

        <Bench id="panel" aria-labelledby="panelists-heading">
          <BenchHead>
            <BenchTitle id="panelists-heading">The panel</BenchTitle>
            <BenchCount>{people.length} voices</BenchCount>
          </BenchHead>

          <SeatRow>
            {people.map((person, index) => {
              const clickable = Boolean(person.slug);
              return (
                <Seat
                  key={person.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease: EASE,
                  }}
                  $clickable={clickable}
                  onClick={() => clickable && openPerson(person)}
                  role={clickable ? "link" : undefined}
                  tabIndex={clickable ? 0 : undefined}
                  aria-label={
                    clickable ? `View ${person.name} profile` : undefined
                  }
                  onKeyDown={(e) => {
                    if (
                      clickable &&
                      (e.key === "Enter" || e.key === " ")
                    ) {
                      e.preventDefault();
                      openPerson(person);
                    }
                  }}
                >
                  <SeatPhoto>
                    {person.img && !person.placeholder ? (
                      <img src={person.img} alt="" loading="lazy" />
                    ) : (
                      <SeatPlaceholder aria-hidden="true">
                        {person.initials || "BFA"}
                      </SeatPlaceholder>
                    )}
                  </SeatPhoto>

                  <SeatBody>
                    <RoleBadge>
                      {ROLE_LABEL[person.role] || "Panelist"}
                    </RoleBadge>
                    <SeatName>{person.name}</SeatName>
                    <SeatRole>{person.designation}</SeatRole>

                    <SeatFooter>
                      <LogoBlock person={person} />

                      {person.linkedin && (
                        <IconLink
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${person.name} on LinkedIn`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaLinkedin aria-hidden="true" />
                        </IconLink>
                      )}
                    </SeatFooter>

                    {clickable && (
                      <SeatCue>
                        View profile
                        <FiArrowUpRight aria-hidden="true" />
                      </SeatCue>
                    )}
                  </SeatBody>
                </Seat>
              );
            })}
          </SeatRow>
        </Bench>
      </Main>
    </Page>
  );
};

/* ——— layout ——— */

const Page = styled.div`
  --ink: #0f1419;
  --fog: #e7ecef;
  --chalk: #f4f7f8;
  --rail: #1a6b6e;
  --crimson: #c8102e;
  --mute: #5a6570;
  --line: #cfd8de;

  position: relative;
  width: 100%;
  min-height: ${(p) => (p.$embedded ? "0" : "100vh")};
  background: var(--chalk);
  color: var(--ink);
  font-family: "IBM Plex Sans", system-ui, sans-serif;
  overflow-x: hidden;
`;

const Rail = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0 auto 0 0;
  width: 6px;
  background: linear-gradient(
    180deg,
    var(--crimson) 0%,
    var(--rail) 42%,
    var(--ink) 100%
  );

  @media (max-width: 640px) {
    width: 4px;
  }
`;

const Main = styled.main`
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  padding: ${(p) => (p.$embedded ? "28px 20px 48px" : "128px 28px 88px")};

  @media (max-width: 640px) {
    padding: ${(p) => (p.$embedded ? "20px 14px 40px" : "112px 18px 64px")};
  }
`;

const EmbeddedTheme = styled.div`
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 28px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--line);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const ThemeCopy = styled.div`
  max-width: 44em;

  p {
    margin: 0;
    font-size: clamp(17px, 2.1vw, 22px);
    font-weight: 500;
    line-height: 1.4;
    color: #2a333c;
  }
`;

const Hero = styled(motion.header)`
  padding-bottom: 40px;
  border-bottom: 1px solid var(--line);
`;

const HeroMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 20px;
  margin-bottom: 28px;
`;

const MetaMark = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--crimson);
`;

const MetaTime = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--mute);
`;

const Title = styled.h1`
  margin: 0;
  max-width: 10ch;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: clamp(56px, 10vw, 104px);
  line-height: 0.88;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--ink);
`;

const TitleAccent = styled.span`
  display: block;
  color: var(--rail);
`;

const Theme = styled.p`
  margin: 22px 0 0;
  max-width: 34em;
  font-size: clamp(17px, 2.1vw, 22px);
  font-weight: 500;
  line-height: 1.4;
  color: #2a333c;
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 28px;
`;

const PrimaryCue = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 12px 20px;
  background: var(--ink);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: var(--crimson);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid var(--crimson);
    outline-offset: 3px;
  }
`;

const GhostCue = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 12px 18px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--ink);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: var(--ink);
    color: var(--crimson);
  }

  &:focus-visible {
    outline: 2px solid var(--crimson);
    outline-offset: 3px;
  }
`;

const Brief = styled.section`
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 28px;
  padding: 28px 0 8px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding-top: 24px;
  }
`;

const BriefLabel = styled.h2`
  margin: 4px 0 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--crimson);
`;

const BriefCopy = styled.div`
  max-width: 44em;

  p {
    margin: 0 0 16px;
    font-size: 17px;
    line-height: 1.65;
    color: #3a454f;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

/* ——— panelist bench ——— */

const Bench = styled.section`
  margin-top: 56px;
`;

const BenchHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 22px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--line);
`;

const BenchTitle = styled.h2`
  margin: 0;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: clamp(28px, 3.2vw, 38px);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--ink);
`;

const BenchCount = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--rail);
`;

const SeatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 14px;

  > * {
    grid-column: span 2;
  }

  /* Row 2: centre Femi + Jay under the 3-up row */
  > :nth-child(4) {
    grid-column: 2 / 4;
  }

  > :nth-child(5) {
    grid-column: 4 / 6;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    > *,
    > :nth-child(4),
    > :nth-child(5) {
      grid-column: auto;
    }

    > :last-child:nth-child(odd) {
      grid-column: 1 / -1;
      justify-self: center;
      width: calc(50% - 7px);
    }
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;

    > :last-child:nth-child(odd) {
      width: 100%;
    }
  }
`;

const RoleBadge = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--crimson);
`;

const LogoSlot = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  max-width: 100%;
`;

const ForenMark = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
  line-height: 1;
  color: #231c16;
`;

const ForenName = styled.span`
  font-family: "Oswald", "Outfit", system-ui, sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1;
`;

const ForenSub = styled.span`
  font-family: Georgia, "Times New Roman", serif;
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.15;
  white-space: nowrap;

  em {
    font-style: italic;
    margin-right: 0.22em;
  }
`;

const CompanyLogo = styled.img`
  display: block;
  height: ${(p) => p.$size?.height || "28px"};
  width: auto;
  max-width: ${(p) => p.$size?.maxWidth || "140px"};
  object-fit: contain;
  object-position: left center;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 3px;
  padding: ${(p) => (p.$size ? "0" : "3px 6px")};
`;

const LogoFallback = styled.span`
  display: inline-flex;
  padding: 4px 8px;
  border: 1px dashed rgba(18, 20, 22, 0.2);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7a756e;
`;

const Seat = styled(motion.article)`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid var(--line);
  overflow: hidden;
  cursor: ${(p) => (p.$clickable ? "pointer" : "default")};
  transition: border-color 0.2s ease, transform 0.25s ease;

  &:hover {
    border-color: ${(p) => (p.$clickable ? "var(--ink)" : "var(--line)")};
    transform: ${(p) => (p.$clickable ? "translateY(-4px)" : "none")};
  }

  &:focus-visible {
    outline: ${(p) => (p.$clickable ? "2px solid var(--crimson)" : "none")};
    outline-offset: 3px;
  }
`;

const SeatPhoto = styled.div`
  aspect-ratio: 4 / 5;
  background: #0e1013;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.7s ease;
  }

  ${Seat}:hover & img {
    transform: scale(1.04);
  }
`;

const SeatPlaceholder = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  font-family: "Oswald", sans-serif;
  font-size: 36px;
  letter-spacing: 0.16em;
  color: rgba(236, 232, 225, 0.45);
  background: linear-gradient(180deg, #2a2e34 0%, #14171b 100%);
`;

const SeatBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px 14px 14px;
`;

const SeatName = styled.h3`
  margin: 0 0 4px;
  min-height: 2.3em;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: clamp(18px, 1.8vw, 22px);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  line-height: 1.15;
  color: var(--ink);
`;

const SeatRole = styled.p`
  margin: 0 0 14px;
  min-height: 2.6em;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--mute);
`;

const SeatFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-height: 36px;
  margin-top: auto;
`;

const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background: #0a66c2;
  color: #fff;
  transition: background 0.2s ease;

  svg {
    font-size: 14px;
  }

  &:hover {
    background: var(--crimson);
  }

  &:focus-visible {
    outline: 2px solid var(--crimson);
    outline-offset: 2px;
  }
`;

const SeatCue = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--rail);

  svg {
    font-size: 12px;
  }
`;

export default DiscussionPanelPage2026;
