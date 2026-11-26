/** Live gold + royal shades for the 2027 theme prototype pages. */

export const DEFAULT_GOLD = "#e0b45a";
export const DEFAULT_NAVY = "#0e103d";

const EXISTING = {
  pale: "#fffceb",
  light: "#faf5a9",
  mid: "#e0b45a",
  warm: "#c9953a",
  deep: "#9a6929",
  navy: "#0e103d",
  navyDeep: "#090a11",
  stage: "#07133f",
};

const VAR_MAP = [
  ["--bfa-gold-pale", "pale"],
  ["--bfa-gold-light", "light"],
  ["--bfa-gold-mid", "mid"],
  ["--bfa-gold-warm", "warm"],
  ["--bfa-gold-deep", "deep"],
  ["--bfa-navy", "navy"],
  ["--bfa-navy-deep", "navyDeep"],
  ["--bfa-stage", "stage"],
  ["--bfa-gold-pale-rgb", "paleRgb"],
  ["--bfa-gold-light-rgb", "lightRgb"],
  ["--bfa-gold-mid-rgb", "midRgb"],
  ["--bfa-gold-warm-rgb", "warmRgb"],
  ["--bfa-gold-deep-rgb", "deepRgb"],
  ["--bfa-navy-rgb", "navyRgb"],
  ["--bfa-navy-deep-rgb", "navyDeepRgb"],
  ["--bfa-stage-rgb", "stageRgb"],
];

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function normalizeHex(value) {
  const raw = String(value || "").trim().replace("#", "");
  if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(raw)) return null;
  const full = raw.length === 3 ? raw.split("").map((part) => part + part).join("") : raw;
  return `#${full.toLowerCase()}`;
}

function hexToHsl(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = ((n >> 16) & 255) / 255;
  const g = ((n >> 8) & 255) / 255;
  const b = (n & 255) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 43, s: 0, l: l * 100 };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return { h: (h / 6) * 360, s: s * 100, l: l * 100 };
}

function hslToHex(h, s, l) {
  const sat = clamp(s, 0, 100) / 100;
  const light = clamp(l, 0, 100) / 100;
  const a = sat * Math.min(light, 1 - light);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    return light - a * Math.max(-1, Math.min(k - 3, Math.min(9 - k, 1)));
  };
  const channel = (value) => Math.round(clamp(value, 0, 1) * 255).toString(16).padStart(2, "0");
  return `#${channel(f(0))}${channel(f(8))}${channel(f(4))}`;
}

export function hexToRgbChannels(hex) {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

function goldRamp(hex) {
  const { h, s, l } = hexToHsl(hex);
  const sat = s < 12 ? 58 : Math.min(s, 92);
  const midL = clamp(l, 32, 78);
  return {
    pale: hslToHex(h, Math.min(48, sat * 0.45), 96),
    light: hslToHex(h, Math.min(78, sat * 0.9), Math.min(90, midL + 20)),
    mid: hex,
    warm: hslToHex(h, Math.min(94, sat + 4), Math.max(24, midL - 12)),
    deep: hslToHex(h, Math.min(80, sat), Math.max(16, midL - 26)),
  };
}

function navyRamp(hex) {
  const { h, s, l } = hexToHsl(hex);
  const sat = s < 8 ? 48 : s;
  return {
    navy: hex,
    navyDeep: hslToHex(h, Math.max(6, sat * 0.5), Math.max(2, l * 0.28)),
    stage: hex,
  };
}

function attachRgb(stops) {
  return {
    ...stops,
    paleRgb: hexToRgbChannels(stops.pale),
    lightRgb: hexToRgbChannels(stops.light),
    midRgb: hexToRgbChannels(stops.mid),
    warmRgb: hexToRgbChannels(stops.warm),
    deepRgb: hexToRgbChannels(stops.deep),
    navyRgb: hexToRgbChannels(stops.navy),
    navyDeepRgb: hexToRgbChannels(stops.navyDeep),
    stageRgb: hexToRgbChannels(stops.stage),
  };
}

export function buildPalette(gold, navy) {
  const goldHex = normalizeHex(gold) || DEFAULT_GOLD;
  const navyHex = normalizeHex(navy) || DEFAULT_NAVY;
  const goldStops = goldHex === DEFAULT_GOLD
    ? {
        pale: EXISTING.pale,
        light: EXISTING.light,
        mid: EXISTING.mid,
        warm: EXISTING.warm,
        deep: EXISTING.deep,
      }
    : goldRamp(goldHex);
  const navyStops = navyHex === DEFAULT_NAVY
    ? {
        navy: EXISTING.navy,
        navyDeep: EXISTING.navyDeep,
        stage: EXISTING.stage,
      }
    : navyRamp(navyHex);
  return attachRgb({ ...goldStops, ...navyStops });
}

let current = {
  gold: DEFAULT_GOLD,
  navy: DEFAULT_NAVY,
  palette: buildPalette(DEFAULT_GOLD, DEFAULT_NAVY),
};

const listeners = new Set();

export function getThemeShades() {
  return current;
}

export function subscribeThemeShades(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setThemePick(partial) {
  const gold = normalizeHex(partial.gold ?? current.gold) || current.gold;
  const navy = normalizeHex(partial.navy ?? current.navy) || current.navy;
  if (gold === current.gold && navy === current.navy) return current;
  current = { gold, navy, palette: buildPalette(gold, navy) };
  listeners.forEach((listener) => listener(current));
  return current;
}

export function resetThemeShades() {
  return setThemePick({ gold: DEFAULT_GOLD, navy: DEFAULT_NAVY });
}

export function applyThemeShadeVars(palette) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  VAR_MAP.forEach(([name, key]) => root.style.setProperty(name, palette[key]));
}

export function clearThemeShadeVars() {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  VAR_MAP.forEach(([name]) => root.style.removeProperty(name));
}

export function readThemeHex(name, fallback) {
  if (typeof document === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return normalizeHex(value) || fallback;
}
