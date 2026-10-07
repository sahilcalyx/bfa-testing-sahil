import React, { useEffect, useId } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const EASE = [0.16, 1, 0.3, 1];

const PAGE_TITLE = "Event Host 2026 | Brit FinTech Awards";
const PAGE_DESCRIPTION =
  "Meet Stephen Simmons, official host and MC of the Brit FinTech Awards 2026 in London.";

const host = {
  id: "stephen-simmons",
  name: "Stephen Simmons",
  role: "Official Event Host & MC",
  company: "Corporate Entertainer Extraordinaire",
  img: "/assets/img/stephen-simmons-host-new.png",
  linkedin: "https://www.linkedin.com/in/stephen-simmons-magic/",
  slug: "/host/stephen-simmons",
  blurb:
    "Award-winning magician and corporate entertainer bringing charisma, humour and unforgettable audience engagement to the evening.",
};

const EventHostPage2026 = () => {
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const titleId = useId();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openHost = () => navigate(host.slug);

  return (
    <Page>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta
          name="keywords"
          content="Brit FinTech Awards 2026, Event Host, Stephen Simmons, MC, Magician"
        />
      </Helmet>

      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <Rail aria-hidden="true" />

      <Main>
        <Hero
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <HeroMeta>
            <MetaMark>Brit FinTech Awards 2026</MetaMark>
            <MetaTime>6:50 PM · Host Remarks</MetaTime>
          </HeroMeta>

          <Title id={titleId}>
            Event
            <TitleAccent>Host</TitleAccent>
          </Title>

          <Theme>
            Charisma, humour and spellbinding entertainment — meet the official
            host of Brit FinTech Awards 2026.
          </Theme>

          <HeroActions>
            <PrimaryCue href="#host">Meet the host</PrimaryCue>
            <GhostCue to="/">Back to home</GhostCue>
          </HeroActions>
        </Hero>

        <Brief>
          <BriefLabel>The evening</BriefLabel>
          <BriefCopy>
            <p>
              Stephen Simmons will open and guide the Brit FinTech Awards 2026,
              blending hosting, comedy and magic for a night that stays with
              every guest.
            </p>
          </BriefCopy>
        </Brief>

        <Bench id="host" aria-labelledby="host-heading">
          <BenchHead>
            <BenchTitle id="host-heading">The host</BenchTitle>
            <BenchCount>1 profile</BenchCount>
          </BenchHead>

          <HostCard
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: EASE }}
            onClick={openHost}
            role="link"
            tabIndex={0}
            aria-label={`View ${host.name} profile`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openHost();
              }
            }}
          >
            <CardPhoto>
              <img src={host.img} alt="" loading="lazy" />
            </CardPhoto>

            <CardBody>
              <RoleBadge>Official Host</RoleBadge>
              <CardName>{host.name}</CardName>
              <CardRole>{host.role}</CardRole>
              <CardBlurb>{host.blurb}</CardBlurb>

              <CardFooter>
                <CompanyTag>{host.company}</CompanyTag>

                {host.linkedin && (
                  <IconLink
                    href={host.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${host.name} on LinkedIn`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaLinkedin aria-hidden="true" />
                  </IconLink>
                )}
              </CardFooter>

              <CardCue>
                View profile
                <FiArrowUpRight aria-hidden="true" />
              </CardCue>
            </CardBody>
          </HostCard>
        </Bench>
      </Main>
    </Page>
  );
};

/* ——— layout ——— */

const Page = styled.div`
  --ink: #0f1419;
  --chalk: #f4f7f8;
  --rail: #1a6b6e;
  --crimson: #c8102e;
  --mute: #5a6570;
  --line: #cfd8de;
  --surface: #ffffff;

  position: relative;
  width: 100%;
  min-height: 100vh;
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
  padding: 96px 28px 64px;

  @media (max-width: 640px) {
    padding: 88px 16px 48px;
  }
`;

const Hero = styled(motion.header)`
  padding-bottom: 28px;
  border-bottom: 1px solid var(--line);
`;

const HeroMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 20px;
  margin-bottom: 18px;
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
  font-size: clamp(48px, 8vw, 88px);
  line-height: 0.88;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--ink);
`;

const TitleAccent = styled.span`
  display: block;
  color: var(--crimson);
`;

const Theme = styled.p`
  margin: 16px 0 0;
  max-width: 34em;
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 500;
  line-height: 1.4;
  color: var(--mute);
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
`;

const PrimaryCue = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 12px 20px;
  background: var(--ink);
  color: var(--surface);
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
  grid-template-columns: 140px minmax(0, 1fr);
  gap: 20px;
  padding: 24px 0 0;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 8px;
    padding-top: 20px;
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
    margin: 0;
    font-size: 16px;
    line-height: 1.65;
    color: var(--mute);
  }
`;

const Bench = styled.section`
  margin-top: 28px;
`;

const BenchHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line);
`;

const BenchTitle = styled.h2`
  margin: 0;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: clamp(26px, 3vw, 34px);
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

const HostCard = styled(motion.article)`
  display: grid;
  grid-template-columns: minmax(200px, 280px) minmax(0, 1fr);
  background: var(--surface);
  border: 1px solid var(--line);
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.25s ease;

  &:hover {
    border-color: var(--ink);
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 2px solid var(--crimson);
    outline-offset: 3px;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const CardPhoto = styled.div`
  min-height: 280px;
  background: var(--ink);
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.7s ease;
  }

  ${HostCard}:hover & img {
    transform: scale(1.04);
  }

  @media (max-width: 720px) {
    min-height: 0;
    aspect-ratio: 4 / 5;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 28px 28px 24px;

  @media (max-width: 720px) {
    padding: 18px 16px 16px;
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

const CardName = styled.h3`
  margin: 0 0 6px;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: clamp(24px, 3vw, 34px);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  line-height: 1.1;
  color: var(--ink);
`;

const CardRole = styled.p`
  margin: 0 0 14px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--mute);
`;

const CardBlurb = styled.p`
  margin: 0 0 20px;
  max-width: 42em;
  font-size: 15px;
  line-height: 1.6;
  color: var(--mute);
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
`;

const CompanyTag = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--rail);
`;

const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background: var(--ink);
  color: var(--surface);
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

const CardCue = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 16px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--rail);

  svg {
    font-size: 12px;
  }
`;

export default EventHostPage2026;
