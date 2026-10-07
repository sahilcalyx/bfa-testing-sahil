export const WINNERS_2026_PAGE_URL = "/award-winners-2026";

// Fill in `name`, `img` and `link` as winners are announced.
// `logo` (transparent PNG/SVG) is shown in white inside the placeholder; `img` replaces the placeholder entirely.
const award = (title, extra = {}) => ({
  title: `${title} 2026`,
  name: "",
  img: "",
  logo: "",
  link: "",
  ...extra,
});

export const winnerSections2026 = [
  {
    id: "fintech",
    label: "FinTech Awards",
    shortLabel: "FinTech",
    description:
      "Recognising the payment processors, innovators, founders and technologists redefining financial services across the UK.",
    awards: [
      award("Account 2 Account Payment Processor of the Year", {
        name: "Volume Payments Limited",
        link: "/award-winners-2026/account-2-account-payment-processor-of-the-year",
      }),
      award("Payment Innovator of the Year"),
      award("Pay-Out Innovator of the Year"),
      award("B-A-A-S Innovator of the Year"),
      award("Payment Acquirer of the Year"),
      award("Payment Gateway of the Year"),
      award("Startup of the Year"),
      award("Woman Entrepreneur in FinTech of the Year"),
      award("Woman in AI of the Year"),
      award("Anti-Fraud Innovator of the Year"),
      award("ID Verification Innovator of the Year"),
      award("FinTech of the Year"),
      award("FinTech Leader of the Year"),
      award("FinTech CTO of the Year"),
      award("Cross-Border Pay-out Disruptor of the Year"),
    ],
  },
  {
    id: "msb",
    label: "MSB Awards",
    shortLabel: "MSB",
    description:
      "Celebrating the money service businesses setting the standard for compliance, customer service and community impact.",
    awards: [
      award("Compliance Innovator of the Year"),
      award("Best in Customer Service MSB of the Year"),
      award("Remittance Innovator MSB of the Year"),
      award("Progressive Money Exchanger MSB of the Year"),
      award("MSB of the Year"),
      award("MSB Disruptor of the Year"),
      award("MSB App of the Year"),
      award("MSB Store of the Year"),
      award("MSB Rising Star of the Year"),
      award("MSB Leader of the Year"),
      award("MSB Community Champion of the Year"),
    ],
  },
  {
    id: "global",
    label: "Global Awards",
    shortLabel: "Global",
    description:
      "Honouring international FinTechs and non-UK MSBs whose work moves money across borders.",
    awards: [
      award("FinTech of the Year", { scope: "Global" }),
      award("MSB of the Year", { scope: "Global" }),
    ],
  },
];

export const totalAwards2026 = winnerSections2026.reduce(
  (sum, section) => sum + section.awards.length,
  0
);
