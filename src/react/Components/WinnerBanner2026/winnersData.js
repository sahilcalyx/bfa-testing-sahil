/** Demo winner / company names for the scramble banner */
export const DEMO_COMPANIES = [
"Fena",
"Neema",
"INVICTUS VENTURES LIMITED",
"Foren. formerly Leatherback",  
"DECTA",
"3ribe",
"Sends",
" GBG",
"Shufti Pro Limited",
"Emerchantpay Limited",
"Peratera",
"TrustUK Payments Ltd",
"Disbuz by Payceler",
// The 14th-17th names sit beside "WINNERS" (2 left, 2 right); keep both sides similar in length
"TASSA PAY LIMITED",
"ECEX",
"Kmbal Ltd",
"Myremit Ltd",
"RED SEA MONEY TRANSFER LTD",
"MERCURY DANATI LTD",
"Tigris Pay",
"TEEPARAM EXCHANGE LIMITED",          
"LEFTOVER CURRENCY LIMITED",
"QF Remit",
"Starrz Money",
"LA CEDRI BUREAU DE CHANGE",

];

/**
 * Diamond layout for the 25 winner companies:
 * 2, 3, 4, 4, 5 (center), 3, 3, 2
 */
export const buildWinnerRows = (names = DEMO_COMPANIES) => {
  const pool = names.map((name) => String(name).trim()).filter(Boolean);
  const take = (n) => pool.splice(0, n);

  const top = take(2);
  const r2 = take(3);
  const r3 = take(4);
  const r4 = take(4);
  const left = take(2);
  const right = take(2);
  const r5 = take(3);
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
