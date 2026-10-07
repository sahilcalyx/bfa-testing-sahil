/** Demo winner / company names for the scramble banner */
export const DEMO_COMPANIES = [
  "Tigrispay",
  "Volume",
  "FENA",
  "Kambal",
  "Sumsub",
  "ADD Money",
  "Mercury Danatai",
  "Teeparam",
  "Volume",
  "Redsea",
  "MyRemit",
  "Baaz Pay",
  "Blessed",
  "GBG",
  "KMoney",
  "Sumsub",
  "Open Banking",
  "Sends",
  "Chrisborough",
  "GCC Exchange",
  "Disbuz",
  "Thunes",
  "Orbital",
  "Payceler",
  "Clear Junction",
  "Trust Payments",
  "Emerchantpay",
];

/**
 * Pyramid / diamond layout (27 names):
 * 2, 3, 4, 5, 5 (center), 4, 3, 2
 */
export const buildWinnerRows = (names = DEMO_COMPANIES) => {
  const pool = [...names];
  const take = (n) => pool.splice(0, n);

  const top = take(2);
  const r2 = take(3);
  const r3 = take(4);
  const r4 = take(5);
  const left = take(2);
  const right = take(2);
  const r5 = take(4);
  const r6 = take(3);
  const bottom = take(2);

  return [
    { items: top },
    { items: r2 },
    { items: r3 },
    { items: r4 },
    {
      items: [...left, { text: "WINNERS", center: true }, ...right],
    },
    { items: r5 },
    { items: r6 },
    { items: bottom },
  ];
};

export const THEME = {
  crimson: "#c8102e",
  crimsonDeep: "#680014",
  crimsonSoft: "#e11d3a",
  gold: "#f2d8ac",
  goldBright: "#e8c57a",
  white: "#ffffff",
  ink: "#0a0a0a",
  inkSoft: "#171516",
};
