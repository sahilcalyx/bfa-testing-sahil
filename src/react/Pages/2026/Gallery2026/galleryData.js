const IMG_BASE = "/assets/img/gallery2026/homepage-section";

// every card shares one width (vw); height follows each photo's own aspect ratio
const CARD_W = 20;
// tallest card is a 3:2 photo
const CARD_MAX_H_RATIO = 2 / 3;
// half the width of the "Moments That Matter" title (4.5vw type) plus breathing room, as a fraction of viewport width
const TITLE_CLEAR = 0.26;
const EDGE_MARGIN = 0.03;

const img = (n, alt, width, height) => ({
  src: `${IMG_BASE}/${n}.webp`,
  alt,
  width,
  height,
});

const target = (x, y) => ({ x, y, rotate: 0, scale: 1, w: CARD_W, h: 0 });

/**
 * Card centres on a flat-topped hexagon around the title, in px from the viewport centre.
 * Side vertices sit at ±R so the middle cards clear the title. When the viewport is tall
 * enough the hexagon is regular; otherwise the height is capped and the top/bottom
 * vertices are pulled in so all six sides stay equal.
 */
function hexagonVertices(vw, vh) {
  const cardW = (CARD_W / 100) * vw;
  const cardH = cardW * CARD_MAX_H_RATIO;
  const R = TITLE_CLEAR * vw + cardW / 2;
  const maxH = vh / 2 - cardH / 2 - EDGE_MARGIN * vh;

  let h = (Math.sqrt(3) / 2) * R;
  let a = R / 2;
  if (h > maxH) {
    h = maxH;
    // equal sides: 2a = sqrt((R - a)^2 + h^2)
    a = (-R + Math.sqrt(4 * R * R + 3 * h * h)) / 3;
  }
  return { R, a, h };
}

const toVw = (px, vw) => (px / vw) * 100;
const toVh = (px, vh) => (px / vh) * 100;

export function buildGalleryCards2026(vw = 1440, vh = 900) {
  const { R, a, h } = hexagonVertices(vw, vh);
  const at = (xPx, yPx) => target(toVw(xPx, vw), toVh(yPx, vh));

  // array order = stack order, back (z 2) -> front (z 7)
  return [
    {
      item: img(6, "Guests at the food service during Brit Fintech Awards 2026", 6048, 4032),
      stackOffset: { x: 14, y: 10 },
      stackRotate: 8,
      target: at(a, h),
      targetSm: { x: 22, y: 34 },
      z: 2,
    },
    {
      item: img(3, "MSB Leader 2026 award presented to Leftover Currency", 3363, 1891),
      stackOffset: { x: -12, y: 9 },
      stackRotate: -9,
      target: at(-a, h),
      targetSm: { x: -22, y: 34 },
      z: 3,
    },
    {
      item: img(4, "Audience seated for the Brit Fintech Awards 2026 programme", 6048, 4032),
      stackOffset: { x: 16, y: 0 },
      stackRotate: 6,
      target: at(R, 0),
      targetSm: { x: 22, y: -21 },
      z: 4,
    },
    {
      item: img(5, "Focus Session panel discussing what is high risk", 6048, 4032),
      stackOffset: { x: -15, y: 1 },
      stackRotate: -5,
      target: at(-R, 0),
      targetSm: { x: -22, y: -21 },
      z: 5,
    },
    {
      item: img(2, "Guests networking at Brit Fintech Awards 2026", 6048, 4032),
      stackOffset: { x: 10, y: -9 },
      stackRotate: 14,
      target: at(a, -h),
      targetSm: { x: 22, y: -38 },
      z: 6,
    },
    {
      item: img(1, "Brit Fintech Awards 2026 bar at the venue", 4860, 2734),
      stackOffset: { x: -6, y: -8 },
      stackRotate: -12,
      target: at(-a, -h),
      targetSm: { x: -22, y: -38 },
      z: 7,
    },
  ];
}

export const GALLERY_CARDS_2026 = buildGalleryCards2026();
