// 1600px web copies of /assets/img/gallery2025/discussion/1-8.webp (originals are ~8000px)
const IMG_BASE = "/assets/img/gallery2026/discussion";

// every card shares one width (vw); height follows each photo's own aspect ratio
const CARD_W = 18;

const img = (n, alt, width, height) => ({
  src: `${IMG_BASE}/${n}.webp`,
  alt,
  width,
  height,
});

const target = (x, y) => ({ x, y, rotate: 0, scale: 1, w: CARD_W, h: 0 });

// array order = stack order, back (z 2) -> front (z 9)
export const GALLERY_CARDS_2026 = [
  {
    item: img(8, "Brit Fintech Awards 2025 panel discussion", 1600, 1067),
    stackOffset: { x: -8, y: -10 },
    stackRotate: -18,
    target: target(-31, -29),
    targetSm: { x: -22, y: -40 },
    z: 2,
  },
  {
    item: img(7, "Speakers on stage at Brit Fintech Awards 2025", 1600, 1067),
    stackOffset: { x: 14, y: -10 },
    stackRotate: 20,
    target: target(31, -29),
    targetSm: { x: 22, y: -40 },
    z: 3,
  },
  {
    item: img(6, "Fintech leaders in conversation", 1600, 1067),
    stackOffset: { x: -16, y: 0 },
    stackRotate: -4,
    target: target(-38, 0),
    targetSm: { x: -22, y: -19 },
    z: 4,
  },
  {
    item: img(5, "Discussion panel audience at Brit Fintech Awards", 1600, 1067),
    stackOffset: { x: 1, y: -10 },
    stackRotate: -2,
    target: target(0, -31),
    targetSm: { x: 22, y: -19 },
    z: 5,
  },
  {
    item: img(4, "Panellist sharing insights", 1600, 517),
    stackOffset: { x: 18, y: 1 },
    stackRotate: 6,
    target: target(38, 0),
    targetSm: { x: -22, y: 20 },
    z: 6,
  },
  {
    item: img(3, "Moderator leading the fintech discussion", 1600, 1067),
    stackOffset: { x: -6, y: 10 },
    stackRotate: 6,
    target: target(-31, 30),
    targetSm: { x: 22, y: 20 },
    z: 7,
  },
  {
    item: img(2, "Panel of industry experts on stage", 1600, 1067),
    stackOffset: { x: 8, y: 7 },
    stackRotate: 3,
    target: target(0, 32),
    targetSm: { x: -22, y: 40 },
    z: 8,
  },
  {
    item: img(1, "Brit Fintech Awards 2025 discussion stage", 1600, 1067),
    stackOffset: { x: 20, y: 12 },
    stackRotate: -7,
    target: target(31, 30),
    targetSm: { x: 22, y: 40 },
    z: 9,
  },
];
