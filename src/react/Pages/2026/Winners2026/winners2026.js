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
        img: "/assets/img/winner-logos-26/winner-card-images/Fena-card.png",
        logo: "/assets/img/attendee-logos/fena.png",
        link: "/award-winners-2026/fena-account-to-account-payment-processor-2026",
      }),
      award({
        title: "Payment Innovator 2026",
        company: "Neema",
        img: "/assets/img/winner-logos-26/winner-card-images/Neema-card.png",
        logo: "/assets/img/winner-logos-26/Neema.png",
        link: "/award-winners-2026/neema-payment-innovator-2026",
      }),
      award({
        title: "Pay-Out Innovator 2026",
        company: "Invictus Ventures Limited",
        img: "/assets/img/winner-logos-26/winner-card-images/Invictos-card.png",
        logo: "/assets/img/discussionpanel-2026/Invictus-Logo-cropped.png",
        link: "/award-winners-2026/invictus-pay-out-innovator-2026",
      }),
      award({
        title: "B-A-A-S Innovator 2026",
        company: "Foren. formerly Leatherback",
        img: "/assets/img/winner-logos-26/winner-card-images/Foren-card.png",
        logo: "/assets/img/attendee-logos/FOREN-formerly-LEATHERBACK.svg",
        link: "/award-winners-2026/foren-baas-innovator-2026",
      }),
      award({
        title: "Payment Acquirer 2026",
        company: "DECTA",
        img: "/assets/img/winner-logos-26/winner-card-images/DECTA-card.png",
        link: "/award-winners-2026/decta-payment-acquirer-2026",
      }),
      award({
        title: "Startup of the Year 2026",
        company: "3ribe",
        img: "/assets/img/winner-logos-26/winner-card-images/3ribe-card.png",
        logo: "/assets/img/discussionpanel-2026/3ribe-logo.png",
        link: "/award-winners-2026/3ribe-startup-of-the-year-2026",
      }),
      award({
        title: "Woman Entrepreneur in FinTech 2026",
        person: "Ms Alona Shevtsova",
        company: "Sends",
        logo: "/assets/img/attendee-logos/sends.png",
        img: "/assets/img/winner-logos-26/winner-card-images/Sends-card.png",
        link: "/award-winners-2026/alona-shevtsova-woman-entrepreneur-in-fintech-2026",
      }),
      award({
        title: "Anti-Fraud Innovator 2026",
        company: "GBG",
        logo: "/assets/img/attendee-logos/gbg.png",
        img: "/assets/img/winner-logos-26/winner-card-images/GBG-card.png",
        link: "/award-winners-2026/gbg-anti-fraud-innovator-2026",
      }),
      // award({
      //   title: "ID Verification Innovator 2026",
      //   company: "Shufti Pro Limited",
      //   img: "/assets/img/winner-logos-26/winner-card-images/shufti-card.png",
      //   link: "/award-winners-2026/shufti-pro-id-verification-innovator-2026",
      // }),
      award({
        title: "Visionary Woman in AI 2026",
        person: "Ms Daljit Young",
        company: "Peratera",
        logo: "/assets/img/keynote-speakers-2026/Peratera-logo.png",
        img: "/assets/img/winner-logos-26/winner-card-images/Peratera-card.png",
        link: "/award-winners-2026/daljit-young-visionary-woman-in-ai-2026",
      }),
      award({
        title: "Cross-Border Pay-Out Disruptor of the Year 2026",
        company: "Disbuz by Payceler",
        logo: "/assets/img/attendee-logos/disbuz.png",
        img: "/assets/img/winner-logos-26/winner-card-images/Disbuz-card.png",
        link: "/award-winners-2026/disbuz-cross-border-payout-disruptor-2026",
      }),
      
      
      award({
        title: "Payment Gateway 2026",
        company: "TrustUK Payments Ltd",
        logo: "/assets/img/attendee-logos/trustpayments.com logo11.png",
        img: "/assets/img/winner-logos-26/winner-card-images/Trust-card.png",
        link: "/award-winners-2026/trustuk-payments-payment-gateway-2026",
      }),
      
      award({
        title: "FinTech CTO 2026",
        person: "Tunde Ayo Fabiyi",
        logo: "/assets/img/attendee-logos/payceler.png",
        img: "/assets/img/winner-logos-26/winner-card-images/Tunde-card.png",
        link: "/award-winners-2026/tunde-ayo-fabiyi-fintech-cto-2026",
      }),
      award({
        title: "FinTech of the Year 2026",
        company: "Emerchantpay Limited",
        img: "/assets/img/winner-logos-26/winner-card-images/Emerchantpay-card.png",
        link: "/award-winners-2026/emerchantpay-fintech-of-the-year-2026",
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
        logo: "/assets/img/attendee-logos/kmbal.png",
        img: "/assets/img/winner-logos-26/winner-card-images/Kambal-card.png",
        link: "/award-winners-2026/kmbal-compliance-innovator-msb-2026",
      }),
      award({
        title: "Best in Customer Service MSB 2026",
        company: "Myremit Ltd",
        logo: "/assets/img/sponsor-logo/Myremit-sponsor-Logo.png",
        img: "/assets/img/winner-logos-26/winner-card-images/Myremit-card.png",
        link: "/award-winners-2026/myremit-best-in-customer-service-msb-2026",
      }),
      award({
        title: "Remittance Innovator MSB 2026",
        company: "Red Sea Money Transfer Ltd",
        logo: "/assets/img/attendee-logos/redsea.png",
        img: "/assets/img/winner-logos-26/winner-card-images/Redsea-card.png",
        link: "/award-winners-2026/red-sea-money-transfer-remittance-innovator-msb-2026",
      }),
      award({
        title: "Progressive Money Exchanger 2026",
        company: "ECEX",
        logo: "/assets/img/sponsor-logo/ECEX-logo.png",
        img: "/assets/img/winner-logos-26/winner-card-images/Ecex-card.png",
        link: "/award-winners-2026/ecex-progressive-money-exchanger-2026",
      }),
      award({
        title: "MSB Disruptor 2026",
        company: "Tassa Pay Limited",
        img: "/assets/img/winner-logos-26/winner-card-images/Tasapay-card.png",
        link: "/award-winners-2026/tassa-pay-msb-disruptor-2026",
      }),
      award({
        title: "MSB Store of the Year 2026",
        company: "Mercury Danati Ltd",
        logo: "/assets/img/discussionpanel-2026/MercuryDanati-white.png",
        img: "/assets/img/winner-logos-26/winner-card-images/MD-card.png",
        link: "/award-winners-2026/mercury-danati-msb-store-of-the-year-2026",
      }),
      award({
        title: "MSB App of the Year 2026",
        company: "Tigris Pay",
        logo: "/assets/img/attendee-logos/Tigrispay.png",
        img: "/assets/img/winner-logos-26/winner-card-images/Tigris pay-card.png",
        link: "/award-winners-2026/tigris-pay-msb-app-of-the-year-2026",
      }),
      award({
        title: "MSB Community Champion 2026",
        company: "Starrz Money",
        img: "/assets/img/winner-logos-26/winner-card-images/Satrzz-card.png",
        link: "/award-winners-2026/starrz-money-msb-community-champion-2026",
      }),
      award({
        title: "MSB Leader 2026",
        person: "Mr Mario Van Poppel",
        company: "Leftover Currency Limited",
        logo: "/assets/img/attendee-logos/leftover-cuurency.png",
        img: "/assets/img/winner-logos-26/winner-card-images/Leftover-card.png",
        link: "/award-winners-2026/leftover-currency-msb-leader-2026",
      }),
      award({
        title: "MSB Rising Star 2026",
        company: "QF Remit",
        logo: "/assets/img/attendee-logos/QF-remit.png",
        img: "/assets/img/winner-logos-26/winner-card-images/QF remit-card.png",
        link: "/award-winners-2026/qf-remit-msb-rising-star-2026",
      }),
      award({
        title: "MSB of the Year 2026",
        company: "Teeparam Exchange Limited",
        logo: "/assets/img/attendee-logos/Teeparam.png",
        img: "/assets/img/winner-logos-26/winner-card-images/Teeparam-card.png",
        link: "/award-winners-2026/teeparam-exchange-msb-of-the-year-2026",
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
        img: "/assets/img/winner-logos-26/winner-card-images/La cedria-card.png",
        logo: "/assets/img/winner-logos-26/Winners-logo-white/La cedri.png",
        link: "/award-winners-2026/la-cedri-msb-of-the-year-global-2026",
      }),
    ],
  },
];

export const totalAwards2026 = winnerSections2026.reduce(
  (sum, section) => sum + section.awards.length,
  0
);
