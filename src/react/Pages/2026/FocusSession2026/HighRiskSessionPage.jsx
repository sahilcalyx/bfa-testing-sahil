import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiVolume2 } from "react-icons/fi";
import { focusSession2026 } from "./speakers2026";

const EASE = [0.16, 1, 0.3, 1];
const SESSION_VIDEO_ID = "oU2rhIwkqFE";
const SESSION_VIDEO_TITLE = "What is High Risk? — Focus Session | Brit FinTech Awards 2026";

const mutedEmbedSrc = `https://www.youtube.com/embed/${SESSION_VIDEO_ID}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${SESSION_VIDEO_ID}`;
const unmutedEmbedSrc = `https://www.youtube.com/embed/${SESSION_VIDEO_ID}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&playsinline=1`;

const PAGE_TITLE = "What is High Risk? | Brit FinTech Awards 2026";
const PAGE_DESCRIPTION =
  "A focused session at the Brit FinTech Awards 2026 with Stefan Binder and Osman Ibrahim on what high risk means for FinTech and MSB businesses.";

const HighRiskSessionPage = () => {
  const reduceMotion = useReducedMotion();
  const [unmuted, setUnmuted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Page>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
      </Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <Main>
        <Hero
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <MetaRow>
            <MetaMark>Focus session</MetaMark>
          </MetaRow>

          <Title>
            What is
            <Risk>high risk?</Risk>
          </Title>
          <Deck>One important question | Two industry perspectives</Deck>
        </Hero>

        <Brief>
          <BriefLabel>The conversation</BriefLabel>
          <BriefCopy>
            <p>
              A focused conversation exploring the question of what “high risk” means in today’s financial services landscape.
            </p>
            <p>
              At Brit FinTech Awards 2026, we’re putting one important question under the spotlight.
            </p>
            <p>
              Join us for a focused session bringing together two industry professionals for a conversation around risk and the challenges facing today’s FinTech and MSB businesses.
            </p>
          </BriefCopy>
        </Brief>

        <VideoSection
          aria-labelledby="high-risk-video"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <VideoHeader>
            <VideoLabel id="high-risk-video">Watch the session</VideoLabel>
            <VideoDeck>
              Stefan Binder and Osman Ibrahim on what “high risk” means for FinTech and MSB businesses.
            </VideoDeck>
          </VideoHeader>

          <VideoStage>
            <VideoFrame>
              <iframe
                key={unmuted ? "unmuted" : "muted"}
                src={unmuted ? unmutedEmbedSrc : mutedEmbedSrc}
                title={SESSION_VIDEO_TITLE}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              {!unmuted ? (
                <UnmuteOverlay
                  type="button"
                  onClick={() => setUnmuted(true)}
                  aria-label="Unmute and play with sound"
                >
                  <UnmuteCue>
                    <FiVolume2 aria-hidden="true" />
                    <span>Tap for sound</span>
                  </UnmuteCue>
                </UnmuteOverlay>
              ) : null}
            </VideoFrame>
          </VideoStage>
        </VideoSection>

        <Speakers aria-labelledby="high-risk-speakers">
          <SpeakersTitle id="high-risk-speakers">Meet the speakers</SpeakersTitle>
          <SpeakerGrid>
            {focusSession2026.map((person, index) => (
              <SpeakerCard
                key={person.id}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.08,
                  ease: EASE,
                }}
              >
                <Photo>
                  <img src={person.img} alt="" />
                </Photo>
                <SpeakerText>
                  <Name>{person.name}</Name>
                  <Role>{person.designation}</Role>
                  {person.logo ? (
                    <Logo src={person.logo} alt={person.brand || person.company} />
                  ) : (
                    <Brand>{person.brand || person.company}</Brand>
                  )}
                  {person.bioSlug ? (
                    <Cue to={person.bioSlug}>
                      View details
                      <FiArrowUpRight aria-hidden="true" />
                    </Cue>
                  ) : null}
                </SpeakerText>
              </SpeakerCard>
            ))}
          </SpeakerGrid>
        </Speakers>

        <Close>
          <CloseTitle>Where risk takes centre stage</CloseTitle>
          <CloseLine>Two industry voices | One thought-provoking conversation</CloseLine>
        </Close>
      </Main>
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f7f6f4;
  color: #161616;
  font-family: "IBM Plex Sans", system-ui, sans-serif;
`;

const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 132px 24px 80px;

  @media (max-width: 640px) {
    padding: 116px 16px 64px;
  }
`;

const Hero = styled(motion.header)`
  padding-bottom: 36px;
  border-bottom: 1px solid #e4e1db;
`;

const MetaRow = styled.div`
  margin-bottom: 36px;
`;

const MetaMark = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #c8102e;
`;

const Title = styled.h1`
  margin: 0;
  max-width: 9ch;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: clamp(64px, 9vw, 112px);
  line-height: 0.86;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #161616;
`;

const Risk = styled.span`
  display: block;
  color: #c8102e;
`;

const Deck = styled.p`
  margin: 22px 0 0;
  max-width: 28em;
  font-size: clamp(18px, 2vw, 22px);
  font-weight: 500;
  line-height: 1.35;
  color: #2c2a28;
`;

const Brief = styled.section`
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 32px;
  padding: 40px 0 8px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding-top: 32px;
  }
`;

const BriefLabel = styled.h2`
  margin: 4px 0 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #c8102e;
`;

const BriefCopy = styled.div`
  max-width: 42em;

  p {
    margin: 0 0 16px;
    font-size: 17px;
    line-height: 1.65;
    color: #3a3835;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const VideoSection = styled(motion.section)`
  margin-top: 48px;
  padding: 36px 0 8px;
  border-top: 1px solid #e4e1db;
`;

const VideoHeader = styled.div`
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 32px;
  margin-bottom: 24px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const VideoLabel = styled.h2`
  margin: 4px 0 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #c8102e;
`;

const VideoDeck = styled.p`
  margin: 0;
  max-width: 36em;
  font-size: 17px;
  line-height: 1.55;
  color: #3a3835;
`;

const VideoStage = styled.div`
  border: 1px solid #e6e2dc;
  background: #14080c;
  overflow: hidden;
`;

const VideoFrame = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  background: #0a0406;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const UnmuteOverlay = styled.button`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 20px;
  border: 0;
  background: linear-gradient(
    to top,
    rgba(10, 4, 6, 0.55) 0%,
    rgba(10, 4, 6, 0.12) 42%,
    transparent 70%
  );
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid #c8102e;
    outline-offset: -2px;
  }

  &:hover > span {
    background: #c8102e;
    border-color: #c8102e;
  }
`;

const UnmuteCue = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 9999px;
  background: #161616;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: background 0.2s ease, border-color 0.2s ease;

  svg {
    font-size: 15px;
  }
`;

const Speakers = styled.section`
  margin-top: 64px;
`;

const SpeakersTitle = styled.h2`
  margin: 0 0 20px;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: clamp(28px, 3vw, 36px);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #161616;
`;

const SpeakerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const SpeakerCard = styled(motion.article)`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(168px, 0.95fr);
  align-items: stretch;
  background: #ffffff;
  border: 1px solid #e6e2dc;
  overflow: hidden;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Photo = styled.div`
  aspect-ratio: 4 / 5;
  background: #14080c;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 16%;
    -webkit-mask-image: linear-gradient(#000 0%, #000 78%, transparent 100%);
    mask-image: linear-gradient(#000 0%, #000 78%, transparent 100%);
  }

  @media (max-width: 520px) {
    aspect-ratio: 5 / 4;
  }
`;

const SpeakerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 22px 20px;
`;

const Name = styled.h3`
  margin: 0 0 6px;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: clamp(24px, 2.2vw, 30px);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  line-height: 1;
  color: #161616;
`;

const Role = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
  font-weight: 600;
  color: #4a4642;
`;

const Logo = styled.img`
  display: block;
  height: 28px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  object-position: left center;
`;

const Brand = styled.span`
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const Cue = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
  width: fit-content;
  padding: 8px 14px;
  border: 1px solid #e6e2dc;
  border-radius: 9999px;
  background: #161616;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  svg {
    font-size: 13px;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: #c8102e;
    border-color: #c8102e;
    transform: translateY(-1px);

    svg {
      transform: translate(1px, -1px);
    }
  }

  &:focus-visible {
    outline: 2px solid #c8102e;
    outline-offset: 3px;
  }
`;

const Close = styled.section`
  margin-top: 72px;
  padding-top: 28px;
  border-top: 1px solid #e4e1db;
`;

const CloseTitle = styled.h2`
  margin: 0 0 8px;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: clamp(26px, 3vw, 36px);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #161616;
`;

const CloseLine = styled.p`
  margin: 0;
  font-size: 16px;
  color: #5c5852;
`;

export default HighRiskSessionPage;
