"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Palette, X } from "lucide-react";
import {
  applyThemeShadeVars,
  clearThemeShadeVars,
  getThemeShades,
  resetThemeShades,
  setThemePick,
  subscribeThemeShades,
} from "./themeShades";

export function useThemeShades() {
  const [pick, setPick] = useState(getThemeShades);
  useEffect(() => subscribeThemeShades(setPick), []);
  return pick;
}

const SWATCHES = [
  ["light", "Light"],
  ["mid", "Mid"],
  ["deep", "Deep"],
  ["navy", "Royal"],
];

const ThemeShadeLab = () => {
  const pick = useThemeShades();
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState("");
  const { palette } = pick;

  useLayoutEffect(() => {
    applyThemeShadeVars(palette);
    return () => clearThemeShadeVars();
  }, [palette]);

  useEffect(() => {
    setReady(true);
  }, []);

  const copyHex = async (hex) => {
    try {
      await navigator.clipboard.writeText(hex.toUpperCase());
      setCopied(hex);
      window.setTimeout(() => setCopied((current) => (current === hex ? "" : current)), 1200);
    } catch {
      setCopied("");
    }
  };

  if (!ready) return null;

  const goldSheen = `linear-gradient(135deg, ${palette.light} 0%, ${palette.mid} 46%, ${palette.deep} 100%)`;
  const royalSheen = `linear-gradient(90deg, ${palette.navy} 0%, ${palette.navy} 34%, ${palette.navyDeep} 100%)`;

  if (!open) {
    return createPortal(
      <Toggle
        type="button"
        aria-label="Show colours"
        title="Colours"
        onClick={() => setOpen(true)}
        style={{ background: goldSheen }}
      >
        <Palette size={18} strokeWidth={2.4} />
      </Toggle>,
      document.body
    );
  }

  return createPortal(
    <Lab aria-label="Page colours">
      <Sheen style={{ background: goldSheen }} />
      <Body>
        <Head>
          <Title>Colours</Title>
          <Close type="button" aria-label="Hide colours" onClick={() => setOpen(false)}>
            <X size={16} strokeWidth={2.4} />
          </Close>
        </Head>

        <Row>
          <Name htmlFor="bfa-gold-pick">Gold</Name>
          <Picker
            id="bfa-gold-pick"
            type="color"
            value={pick.gold}
            aria-label="Gold shade"
            onChange={(event) => setThemePick({ gold: event.target.value })}
          />
          <Code>{pick.gold.toUpperCase()}</Code>
        </Row>

        <Row>
          <Name htmlFor="bfa-royal-pick">Royal</Name>
          <Picker
            id="bfa-royal-pick"
            type="color"
            value={pick.navy}
            aria-label="Royal shade"
            onChange={(event) => setThemePick({ navy: event.target.value })}
          />
          <Code>{pick.navy.toUpperCase()}</Code>
        </Row>

        <Preview style={{ background: goldSheen }} aria-hidden="true" />
        <Preview style={{ background: royalSheen }} aria-hidden="true" />

        <Chips>
          {SWATCHES.map(([key, label]) => {
            const hex = palette[key];
            return (
              <Chip
                key={key}
                type="button"
                title={`${label} ${hex.toUpperCase()}`}
                onClick={() => copyHex(hex)}
              >
                <i style={{ background: hex }} />
                {copied === hex ? "Copied" : label}
              </Chip>
            );
          })}
        </Chips>

        <Reset type="button" onClick={() => resetThemeShades()}>
          Reset
        </Reset>
      </Body>
    </Lab>,
    document.body
  );
};

const Toggle = styled.button`
  position: fixed;
  z-index: 1000;
  top: 112px;
  right: 16px;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.7) !important;
  border-radius: 50%;
  color: #090a11 !important;
  box-shadow: 0 10px 24px rgba(9, 10, 17, 0.28);
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }
`;

const Close = styled.button`
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0 !important;
  border-radius: 50%;
  background: transparent !important;
  color: #0e103d !important;
  cursor: pointer;

  &:hover {
    background: rgba(14, 16, 61, 0.06) !important;
  }
`;

const Lab = styled.aside`
  position: fixed;
  z-index: 1000;
  top: 112px;
  right: 16px;
  width: min(292px, calc(100vw - 24px));
  overflow: hidden;
  border-radius: 16px;
  background: #ffffff;
  color: #0e103d;
  box-shadow: 0 18px 50px rgba(9, 10, 17, 0.22);
  font-family: "Manrope", "Segoe UI", sans-serif;
`;

const Sheen = styled.div`
  height: 4px;
`;

const Body = styled.div`
  padding: 14px 14px 16px;
`;

const Head = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
`;

const Title = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

const Row = styled.label`
  display: grid;
  grid-template-columns: 52px 46px 1fr;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
`;

const Name = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Picker = styled.input`
  width: 46px !important;
  height: 34px !important;
  padding: 0 !important;
  border: none !important;
  background: transparent !important;
  box-shadow: none !important;
  cursor: pointer;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &::-webkit-color-swatch {
    border: 1px solid rgba(14, 16, 61, 0.18);
    border-radius: 8px;
  }
`;

const Code = styled.code`
  font-family: "Manrope", "Segoe UI", sans-serif !important;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #0e103d !important;
`;

const Preview = styled.div`
  height: 10px;
  margin-top: 8px;
  border-radius: 999px;
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
`;

const Chip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 8px 5px 5px;
  border: 1px solid rgba(14, 16, 61, 0.12) !important;
  border-radius: 999px;
  background: #fff !important;
  color: #0e103d !important;
  font-family: "Manrope", "Segoe UI", sans-serif !important;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: none !important;
  cursor: pointer;

  i {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgba(14, 16, 61, 0.15);
  }
`;

const Reset = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 11px 16px;
  border: 1px solid #0e103d !important;
  border-radius: 999px;
  background: #ffffff !important;
  color: #0e103d !important;
  font-family: "Manrope", "Segoe UI", sans-serif !important;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: none !important;
  cursor: pointer;

  &:hover {
    background: #0e103d !important;
    color: #faf5a9 !important;
  }
`;

export default ThemeShadeLab;
