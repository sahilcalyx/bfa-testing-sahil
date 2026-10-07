export const WINNERS_2026_PAGE_URL = "/award-winners-2026";

// `logo` (transparent PNG/SVG) is shown in white inside the placeholder; `img` replaces the placeholder entirely.
const award = ({ title, company = "", person = "", img = "", logo = "", link = "" }) => ({
  title,
  company,
  person,
  name: [person, company].filter(Boolean).join(", "),
  img,
  logo,
  link,
});

export const winnerSections2026 = [
  {
    id: "fintech",
    label: "FinTech Awards",
    shortLabel: "FinTech",
    description:
      "Recognising the payment processors, innovators, founders and technologists redefining financial services across the UK.",
    awards: [
      award({
        title: "Account 2 Account Payment Processor 2026",
        company: "Fena",
        logo: "/assets/img/attendee-logos/fena.png",
        link: "/award-winners-2026/fena-account-to-account-payment-processor-2026",
      }),
      award({
        title: "Payment Innovator 2026",
        company: "Neema",
        link: "/award-winners-2026/neema-payment-innovator-2026",
      }),
      award({
        title: "Pay-Out Innovator 2026",
        company: "Invictus Ventures Limited",
        logo: "/assets/img/discussionpanel-2026/Invictus-Logo-cropped.png",
        link: "/award-winners-2026/invictus-pay-out-innovator-2026",
      }),
      award({
        title: "B-A-A-S Innovator 2026",
        company: "Foren. formerly Leatherback",
      }),
      award({
        title: "Payment Acquirer 2026",
        company: "DECTA",
      }),
      award({
        title: "Startup of the Year 2026",
        company: "3ribe",
      }),
      award({
        title: "Woman Entrepreneur in FinTech 2026",
        person: "Ms Alona Shevtsova",
        company: "Sends",
      }),
      award({
        title: "Anti-Fraud Innovator 2026",
        company: "GBG",
      }),
      award({
        title: "ID Verification Innovator 2026",
        company: "Shufti Pro Limited",
      }),
      award({
        title: "FinTech of the Year 2026",
        company: "Emerchantpay Limited",
      }),
      award({
        title: "Visionary Woman in AI 2026",
        person: "Ms Daljit Young",
        company: "Peratera",
      }),
      award({
        title: "Payment Gateway 2026",
        company: "TrustUK Payments Ltd",
      }),
      award({
        title: "Cross-Border Pay-Out Disruptor of the Year 2026",
        company: "Disbuz by Payceler",
      }),
      award({
        title: "FinTech CTO 2026",
        person: "Tunde Ayo Fabiyi",
      }),
    ],
  },
  {
    id: "msb",
    label: "MSB Awards",
    shortLabel: "MSB",
    description:
      "Celebrating the money service businesses setting the standard for compliance, customer service and community impact.",
    awards: [
      award({
        title: "Compliance Innovator MSB 2026",
        company: "Kmbal Ltd",
      }),
      award({
        title: "Best in Customer Service MSB 2026",
        company: "Myremit Ltd",
      }),
      award({
        title: "Remittance Innovator MSB 2026",
        company: "Red Sea Money Transfer Ltd",
      }),
      award({
        title: "Progressive Money Exchanger 2026",
        company: "ECEX",
      }),
      award({
        title: "MSB Disruptor 2026",
        company: "Tassa Pay Limited",
      }),
      award({
        title: "MSB Store of the Year 2026",
        company: "Mercury Danati Ltd",
      }),
      award({
        title: "MSB App of the Year 2026",
        company: "Tigris Pay",
      }),
      award({
        title: "MSB of the Year 2026",
        company: "Teeparam Exchange Limited",
      }),
      award({
        title: "MSB Leader 2026",
        person: "Mr Mario Van Poppel",
        company: "Leftover Currency Limited",
      }),
      award({
        title: "MSB Rising Star 2026",
        company: "QF Remit",
      }),
      award({
        title: "MSB Community Champion 2026",
        company: "Starrz Money",
      }),
    ],
  },
  {
    id: "global",
    label: "Global Awards",
    shortLabel: "Global",
    description:
      "Honouring international FinTechs and non-UK MSBs whose work moves money across borders.",
    awards: [
      award({
        title: "MSB of the Year 2026 (Global)",
        company: "La Cedri Bureau de Change",
      }),
    ],
  },
];

export const totalAwards2026 = winnerSections2026.reduce(
  (sum, section) => sum + section.awards.length,
  0
);
