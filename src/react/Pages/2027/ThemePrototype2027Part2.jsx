"use client";

import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Lightfall from "./Lightfall";
import ThemeShadeLab, { useThemeShades } from "./ThemeShadeLab";
import { DEFAULT_NAVY } from "./themeShades";

const EASE = [0.16, 1, 0.3, 1];

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const PANEL = [
  { name: "John Doe", company: "Northline" },
  { name: "Jane Doe", company: "Harbour" },
  { name: "James Doe", company: "Meridian" },
];

const ThemePrototype2027Part2 = () => {
  const reduceMotion = useReducedMotion();
  const { palette, navy } = useThemeShades();

  const rise = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <Page className="bfa-royal-2027">
      <Helmet>
        <title>BFA27 theme prototype, part 2 | Brit FinTech Awards</title>
        <meta
          name="description"
          content="Full-screen 2027 hero in the royal theme colours, set over falling light."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Stage aria-labelledby="bfa27-part2-title">
        <Field aria-hidden="true">
          <Lightfall
            colors={[palette.light, palette.mid, palette.deep]}
            backgroundColor={navy === DEFAULT_NAVY ? palette.navyDeep : navy}
            speed={0.3}
            streakCount={2}
            streakWidth={0.8}
            twinkle={0.3}
            backgroundGlow={0.1}
            headGlow={0.6}
            bloom={0.35}
            mouseInteraction
            holdToWarp
            intro
            streakLength={1}
            density={0.6}
            glow={1}
            depth={0.5}
            zoom={3}
            mouseStrength={0.4}
            mouseRadius={0.45}
            lens={0.5}
            fade={0}
            lightMode={false}
          />
        </Field>
        <Scrim aria-hidden="true" />

        <Content>
          <motion.h1 id="bfa27-part2-title" {...rise(0.2)}>
            <span className="name">Brit FinTech Awards</span>
            <span className="year">2027</span>
          </motion.h1>
          <motion.p className="line" {...rise(0.42)}>
            The next chapter of FinTech excellence begins here
          </motion.p>
          <motion.div className="actions" {...rise(0.58)}>
            <Link to="/register-interest-2027" className="btn primary">
              Register your interest
              <span className="ico">
                <ArrowUpRight size={17} strokeWidth={2.5} />
              </span>
            </Link>
            <Link to="/award-winners-2026" className="btn ghost">
              Relive 2026
            </Link>
          </motion.div>
        </Content>
      </Stage>

      <Panel aria-labelledby="bfa27-panel-title">
        <PanelInner>
          <PanelHead>
            <p className="eyebrow">Discussion panel</p>
            <h2 id="bfa27-panel-title">Guests of the evening</h2>
          </PanelHead>
          <Cards>
            {PANEL.map((person, index) => (
              <Card key={person.name}>
                <Shot aria-hidden="true" $tone={index}>
                  <svg viewBox="0 0 80 96">
                    <circle cx="40" cy="30" r="14" />
                    <path d="M16 84c2-16 11-26 24-26s22 10 24 26" />
                  </svg>
                </Shot>
                <CardBody>
                  <PersonName>{person.name}</PersonName>
                  <Company>{person.company}</Company>
                  <Blurb>{LOREM}</Blurb>
                </CardBody>
              </Card>
            ))}
          </Cards>
        </PanelInner>
      </Panel>
      <ThemeShadeLab />
    </Page>
  );
};

const Page = styled.div`
  position: relative;
  width: 100%;
  background: var(--bfa-stage, #07133f);
  color: #f6f3ea;
  font-family: "Manrope", "Segoe UI", sans-serif;
  overflow-x: clip;
`;

const Stage = styled.header`
  position: relative;
  isolation: isolate;
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: 128px 22px 72px;
  overflow: hidden;
  background: var(--bfa-stage, #07133f);
  box-sizing: border-box;

  @media (min-width: 1024px) {
    padding: 140px 40px 88px;
  }

  @media (max-height: 760px) {
    padding-top: 112px;
    padding-bottom: 40px;
  }
`;

const Field = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const Scrim = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(ellipse 62% 48% at 50% 54%, rgba(var(--bfa-stage-rgb, 7, 19, 63), 0.72) 0%, rgba(var(--bfa-stage-rgb, 7, 19, 63), 0.28) 58%, transparent 100%),
    linear-gradient(180deg, rgba(var(--bfa-stage-rgb, 7, 19, 63), 0.35) 0%, transparent 22%, transparent 70%, rgba(var(--bfa-stage-rgb, 7, 19, 63), 0.55) 100%);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f6f3ea;
    font-family: "GoudyOldStyle", "Palatino Linotype", serif !important;
    font-weight: 400;
    font-style: normal;
    font-synthesis: none;
    line-height: 0.9 !important;
    letter-spacing: 0;
    text-transform: none !important;
  }

  .name,
  .year {
    font-family: "GoudyOldStyle", "Palatino Linotype", serif !important;
    font-weight: 400 !important;
    font-style: normal !important;
    font-synthesis: none !important;
  }

  .name {
    font-size: clamp(2.35rem, min(6.4vw, 8vh), 5.6rem);
    line-height: 0.95;
    letter-spacing: 0;
  }

  .year {
    margin-top: 0.06em;
    font-size: clamp(5.4rem, min(18vw, 24vh), 12.5rem);
    line-height: 0.82;
    letter-spacing: -0.02em;
    background: linear-gradient(180deg, var(--bfa-gold-light, #faf5a9) 0%, var(--bfa-gold-mid, #e0b45a) 42%, var(--bfa-gold-deep, #9a6929) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 10px 28px rgba(var(--bfa-gold-deep-rgb, 154, 105, 41), 0.35));
  }

  .line {
    margin: 22px 0 0;
    max-width: 100%;
    font-family: "Manrope", "Segoe UI", sans-serif !important;
    font-size: clamp(0.95rem, 2.2vw, 1.35rem);
    font-weight: 500;
    line-height: 1.35;
    letter-spacing: 0.01em;
    color: rgba(246, 243, 234, 0.88);
    white-space: nowrap;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 36px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    border-radius: 999px;
    font-family: "Manrope", "Segoe UI", sans-serif !important;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease, border-color 0.25s ease;

    &:hover {
      transform: translateY(-2px);
    }
    &:focus-visible {
      outline: 2px solid var(--bfa-gold-light, #faf5a9);
      outline-offset: 3px;
    }
  }

  .primary {
    padding: 8px 8px 8px 26px;
    border: 0;
    background: linear-gradient(135deg, var(--bfa-gold-light, #faf5a9) 0%, var(--bfa-gold-mid, #e0b45a) 46%, var(--bfa-gold-deep, #9a6929) 100%);
    color: var(--bfa-navy-deep, #090a11);
  }

  .primary .ico {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--bfa-navy-deep, #090a11);
    color: var(--bfa-gold-light, #faf5a9);
    transition: transform 0.35s ease;
  }

  .primary:hover {
    background: linear-gradient(135deg, var(--bfa-gold-pale, #fffceb) 0%, var(--bfa-gold-light, #faf5a9) 42%, var(--bfa-gold-warm, #c9953a) 100%);
    color: var(--bfa-navy-deep, #090a11);
  }

  .primary:hover .ico {
    transform: rotate(45deg);
  }

  .ghost {
    padding: 0 26px;
    min-height: 56px;
    border: 1px solid rgba(246, 243, 234, 0.38);
    background: rgba(var(--bfa-stage-rgb, 7, 19, 63), 0.35);
    color: #f6f3ea;
  }

  .ghost:hover {
    border-color: var(--bfa-gold-light, #faf5a9);
    color: var(--bfa-gold-light, #faf5a9);
  }
`;

const Panel = styled.section`
  background: #f6f3ea;
  color: #12141c;
  padding: 88px 0 104px;

  @media (max-width: 700px) {
    padding: 64px 0 80px;
  }
`;

const PanelInner = styled.div`
  width: min(1080px, calc(100% - 48px));
  margin: 0 auto;

  @media (max-width: 700px) {
    width: min(1080px, calc(100% - 32px));
  }
`;

const PanelHead = styled.div`
  max-width: 640px;
  margin: 0 0 40px;

  .eyebrow {
    margin: 0 0 12px;
    font-family: "Manrope", "Segoe UI", sans-serif !important;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--bfa-gold-deep, #9a6929);
  }

  && h2 {
    margin: 0;
    color: #12141c;
    font-family: "GoudyOldStyle", "Palatino Linotype", serif !important;
    font-weight: 400 !important;
    font-style: normal !important;
    font-synthesis: none !important;
    font-size: clamp(2.4rem, 4vw, 3.4rem);
    line-height: 1.08 !important;
    letter-spacing: 0 !important;
    text-transform: none !important;
  }
`;

const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    max-width: 380px;
  }
`;

const Card = styled.li`
  min-width: 0;
  background: #fbf9f4;
  border: 1px solid rgba(var(--bfa-gold-deep-rgb, 154, 105, 41), 0.35);
  overflow: hidden;
`;

const Shot = styled.div`
  aspect-ratio: 4 / 5;
  display: grid;
  place-items: center;
  background: ${(p) =>
    [
      "radial-gradient(90% 60% at 50% 0%, rgba(var(--bfa-gold-light-rgb, 250, 245, 169), 0.42), transparent 58%), linear-gradient(180deg, #1c2748 0%, var(--bfa-stage, #07133f) 100%)",
      "radial-gradient(90% 60% at 50% 0%, rgba(var(--bfa-gold-mid-rgb, 224, 180, 90), 0.38), transparent 58%), linear-gradient(180deg, #243056 0%, #12141c 100%)",
      "radial-gradient(90% 60% at 50% 0%, rgba(var(--bfa-gold-light-rgb, 250, 245, 169), 0.28), transparent 55%), linear-gradient(180deg, #3a301c 0%, #12141c 100%)",
    ][p.$tone % 3]};
  box-shadow: inset 0 -3px 0 var(--bfa-gold-mid, #e0b45a);

  svg {
    width: 28%;
    height: auto;
    fill: none;
    stroke: var(--bfa-gold-mid, #e0b45a);
    stroke-width: 2.2;
  }
`;

const CardBody = styled.div`
  padding: 22px 22px 26px;
`;

const PersonName = styled.p`
  margin: 0;
  && {
    font-family: "GoudyOldStyle", "Palatino Linotype", serif !important;
  }
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 1.1;
  color: #12141c;
`;

const Company = styled.p`
  margin: 8px 0 0;
  && {
    font-family: "Manrope", "Segoe UI", sans-serif !important;
  }
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--bfa-gold-deep, #9a6929);
`;

const Blurb = styled.p`
  margin: 14px 0 0;
  && {
    font-family: "Manrope", "Segoe UI", sans-serif !important;
  }
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  color: rgba(18, 20, 28, 0.68);
`;

export default ThemePrototype2027Part2;
