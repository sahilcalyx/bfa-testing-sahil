"use client";

import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Lightfall from "./Lightfall";

const EASE = [0.16, 1, 0.3, 1];

const PANEL = [
  { n: "01", name: "Amira Cole", title: "Chief Executive Officer", company: "Northline", role: "Moderator" },
  { n: "02", name: "Jonah Adeyemi", title: "Co-Founder & CEO", company: "Harbour Pay", role: "Panelist" },
  { n: "03", name: "Priya Raman", title: "Head of Compliance", company: "Ledger & Co", role: "Panelist" },
  { n: "04", name: "Elias March", title: "Director, Risk", company: "Meridian", role: "Panelist" },
  { n: "05", name: "Sofia Keller", title: "Founder & CEO", company: "Vale", role: "Panelist" },
];

const ThemePrototype2027Part2 = () => {
  const reduceMotion = useReducedMotion();

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
            colors={["#faf5a9", "#e0b45a", "#9a6929"]}
            backgroundColor="#090a11"
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
            <motion.h2 id="bfa27-panel-title" {...rise(0)}>
              Can Fintechs and MSBs Afford to <em>Ignore AI?</em>
            </motion.h2>
            <motion.div {...rise(0.08)}>
              <p>
                A demo line for the panel: how firms are weighing automation, customer trust, and the people who still have to sign off.
              </p>
              <Link to="/discussion-panel-2026">
                Discussion panel page
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </Link>
            </motion.div>
          </PanelHead>

          <Cards>
            {PANEL.map((person) => (
              <Card key={person.n}>
                <Portrait aria-hidden="true">
                  <PersonMark />
                  <Badge>{person.n}</Badge>
                </Portrait>
                <CardName>{person.name}</CardName>
                <CardTitle>{person.title}</CardTitle>
                <Company>{person.company}</Company>
                <Role>{person.role}</Role>
              </Card>
            ))}
          </Cards>
        </PanelInner>
      </Panel>
    </Page>
  );
};

const PersonMark = () => (
  <svg viewBox="0 0 80 96" aria-hidden="true">
    <circle cx="40" cy="30" r="16" />
    <path d="M14 86c2-18 12-28 26-28s24 10 26 28" />
  </svg>
);

const Page = styled.div`
  position: relative;
  width: 100%;
  background: #07133f;
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
  background: #07133f;
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
    radial-gradient(ellipse 62% 48% at 50% 54%, rgba(7, 19, 63, 0.72) 0%, rgba(7, 19, 63, 0.28) 58%, transparent 100%),
    linear-gradient(180deg, rgba(7, 19, 63, 0.35) 0%, transparent 22%, transparent 70%, rgba(7, 19, 63, 0.55) 100%);
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
    background: linear-gradient(180deg, #faf5a9 0%, #e0b45a 42%, #9a6929 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 10px 28px rgba(154, 105, 41, 0.35));
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
      outline: 2px solid #faf5a9;
      outline-offset: 3px;
    }
  }

  .primary {
    padding: 8px 8px 8px 26px;
    border: 0;
    background: linear-gradient(135deg, #faf5a9 0%, #e0b45a 46%, #9a6929 100%);
    color: #090a11;
  }

  .primary .ico {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #090a11;
    color: #faf5a9;
    transition: transform 0.35s ease;
  }

  .primary:hover {
    background: linear-gradient(135deg, #fffceb 0%, #faf5a9 42%, #c9953a 100%);
    color: #090a11;
  }

  .primary:hover .ico {
    transform: rotate(45deg);
  }

  .ghost {
    padding: 0 26px;
    min-height: 56px;
    border: 1px solid rgba(246, 243, 234, 0.38);
    background: rgba(7, 19, 63, 0.35);
    color: #f6f3ea;
  }

  .ghost:hover {
    border-color: #faf5a9;
    color: #faf5a9;
  }
`;

const Panel = styled.section`
  position: relative;
  background:
    radial-gradient(circle at 12% 18%, rgba(224, 180, 90, 0.16), transparent 28%),
    radial-gradient(circle at 88% 80%, rgba(154, 105, 41, 0.1), transparent 26%),
    #f6f3ea;
  color: #090a11;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.45;
    background-image:
      linear-gradient(rgba(154, 105, 41, 0.16) 1px, transparent 1px),
      linear-gradient(90deg, rgba(154, 105, 41, 0.16) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: radial-gradient(circle at 70% 30%, #000 0%, transparent 72%);
  }
`;

const PanelInner = styled.div`
  position: relative;
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 88px 0 96px;

  @media (max-width: 700px) {
    width: min(1180px, calc(100% - 32px));
    padding: 64px 0 72px;
  }
`;

const PanelHead = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: 36px 48px;
  align-items: end;
  margin-bottom: 48px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  && h2 {
    margin: 0;
    max-width: 12ch;
    color: #090a11;
    font-family: "GoudyOldStyle", "Palatino Linotype", serif !important;
    font-weight: 400 !important;
    font-style: normal !important;
    font-synthesis: none !important;
    font-size: clamp(2.5rem, 4.6vw, 4.35rem);
    line-height: 0.96 !important;
    letter-spacing: 0 !important;
    text-transform: none !important;
  }

  && h2 em {
    font-family: "GoudyOldStyle", "Palatino Linotype", serif !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-synthesis: none !important;
    color: #9a6929;
  }

  p {
    margin: 0;
    max-width: 42ch;
    font-family: "Manrope", "Segoe UI", sans-serif !important;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.55;
    color: rgba(9, 10, 17, 0.72);
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 22px;
    font-family: "Manrope", "Segoe UI", sans-serif !important;
    font-size: 15px;
    font-weight: 700;
    color: #090a11;
    text-decoration: none;
    border-bottom: 1px solid #090a11;
    padding-bottom: 2px;
  }

  a:hover {
    color: #9a6929;
    border-bottom-color: #9a6929;
  }
`;

const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.li`
  min-width: 0;
`;

const Portrait = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  margin-bottom: 16px;
  display: grid;
  place-items: center;
  background:
    linear-gradient(180deg, rgba(250, 245, 169, 0.18), transparent 42%),
    linear-gradient(160deg, #1a2148 0%, #090a11 72%);
  border-radius: 2px;
  overflow: hidden;

  svg {
    width: 46%;
    height: auto;
    fill: none;
    stroke: rgba(250, 245, 169, 0.72);
    stroke-width: 2.4;
  }
`;

const Badge = styled.span`
  position: absolute;
  left: 10px;
  bottom: 10px;
  display: grid;
  place-items: center;
  min-width: 42px;
  height: 32px;
  padding: 0 8px;
  background: linear-gradient(180deg, #faf5a9 0%, #e0b45a 55%, #9a6929 100%);
  color: #090a11;
  font-family: "Manrope", "Segoe UI", sans-serif !important;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.04em;
`;

const CardName = styled.p`
  margin: 0;
  font-family: "Manrope", "Segoe UI", sans-serif !important;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #090a11;
`;

const CardTitle = styled.p`
  margin: 4px 0 0;
  font-family: "Manrope", "Segoe UI", sans-serif !important;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.35;
  color: rgba(9, 10, 17, 0.62);
`;

const Company = styled.p`
  display: inline-flex;
  margin: 12px 0 0;
  padding: 6px 10px;
  border: 1px solid rgba(9, 10, 17, 0.16);
  border-radius: 4px;
  font-family: "Manrope", "Segoe UI", sans-serif !important;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #090a11;
`;

const Role = styled.p`
  margin: 14px 0 0;
  font-family: "Manrope", "Segoe UI", sans-serif !important;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #9a6929;
`;

export default ThemePrototype2027Part2;
