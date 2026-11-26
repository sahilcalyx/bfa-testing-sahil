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
  { name: "John Doe", company: "Northline" },
  { name: "Jane Doe", company: "Harbour" },
  { name: "James Doe", company: "Meridian" },
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
            <div>
              <p className="eyebrow">Discussion panel</p>
              <motion.h2 id="bfa27-panel-title" {...rise(0)}>
                Can Fintechs and MSBs afford to <em>ignore AI?</em>
              </motion.h2>
            </div>
            <motion.div {...rise(0.08)}>
              <p>
                How firms are weighing automation, customer trust, and the people who still have to sign off.
              </p>
              <Link to="/discussion-panel-2026">
                Discussion panel page
                <ArrowUpRight size={15} strokeWidth={2} />
              </Link>
            </motion.div>
          </PanelHead>

          <Cards>
            {PANEL.map((person) => (
              <Card key={person.name}>
                <Portrait aria-hidden="true">
                  <Mark>
                    {person.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </Mark>
                </Portrait>
                <CardBody>
                  <CardName>{person.name}</CardName>
                  <Company>{person.company}</Company>
                </CardBody>
              </Card>
            ))}
          </Cards>
        </PanelInner>
      </Panel>
    </Page>
  );
};

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
  background: #f7f6f2;
  color: #12141c;
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
  grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.7fr);
  gap: 28px 64px;
  align-items: end;
  padding-bottom: 36px;
  border-bottom: 1px solid rgba(18, 20, 28, 0.1);
  margin-bottom: 36px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .eyebrow {
    margin: 0 0 14px;
    font-family: "Manrope", "Segoe UI", sans-serif !important;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #8d6a2f;
  }

  && h2 {
    margin: 0;
    max-width: 14ch;
    color: #12141c;
    font-family: "GoudyOldStyle", "Palatino Linotype", serif !important;
    font-weight: 400 !important;
    font-style: normal !important;
    font-synthesis: none !important;
    font-size: clamp(2.15rem, 3.5vw, 3.35rem);
    line-height: 1.05 !important;
    letter-spacing: 0 !important;
    text-transform: none !important;
  }

  && h2 em {
    font-family: "GoudyOldStyle", "Palatino Linotype", serif !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-synthesis: none !important;
    color: #8d6a2f;
  }

  p {
    margin: 0;
    max-width: 36ch;
    font-family: "Manrope", "Segoe UI", sans-serif !important;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.6;
    color: rgba(18, 20, 28, 0.62);
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 18px;
    font-family: "Manrope", "Segoe UI", sans-serif !important;
    font-size: 14px;
    font-weight: 600;
    color: #12141c;
    text-decoration: none;
  }

  a:hover {
    color: #8d6a2f;
  }
`;

const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  max-width: 920px;
  margin: 0 auto;
  padding: 8px 0 0;
  list-style: none;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    max-width: 340px;
  }
`;

const Card = styled.li`
  min-width: 0;
  background: #fff;
  text-align: center;
  border: 1px solid rgba(141, 106, 47, 0.28);
  overflow: hidden;
`;

const Portrait = styled.div`
  aspect-ratio: 5 / 4;
  display: grid;
  place-items: center;
  background: #12141c;
  border-bottom: 1px solid #e0b45a;
`;

const Mark = styled.span`
  && {
    font-family: "GoudyOldStyle", "Palatino Linotype", serif !important;
    font-size: clamp(2.4rem, 3vw, 3.25rem);
    font-weight: 400;
    letter-spacing: 0.06em;
    color: #f7f6f2;
  }
`;

const CardBody = styled.div`
  padding: 22px 16px 26px;
`;

const CardName = styled.p`
  margin: 0;
  && {
    font-family: "GoudyOldStyle", "Palatino Linotype", serif !important;
  }
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0;
  text-transform: none;
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
  color: #8d6a2f;
`;

export default ThemePrototype2027Part2;
