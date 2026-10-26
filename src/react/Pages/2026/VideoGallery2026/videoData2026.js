import { discussionPanel2026 } from "../DisscussionPanal2026/panelists2026";

export const VIDEO_CATEGORIES_2026 = [
  { id: "all", label: "All Videos" },
  { id: "event", label: "Event Highlights" },
  { id: "focus", label: "Focus Session" },
  { id: "keynote", label: "Keynote Speaker" },
  { id: "panel", label: "Discussion Panelists" },
  { id: "sponsor", label: "Sponsor Videos" },
  { id: "jury", label: "Jury Videos" },
  { id: "testimonials", label: "Testimonials" },
  { id: "winners", label: "Winners" },
  { id: "shorts", label: "Shorts" },
];

export const SPONSOR_TIERS_2026 = [
  { id: "platinum", label: "Platinum Sponsor" },
  { id: "gold", label: "Gold Sponsor" },
  { id: "silver", label: "Silver Sponsor" },
  { id: "innovation", label: "Innovation Sponsor" },
  { id: "strategic", label: "Strategic Sponsor" },
  { id: "travel", label: "Travel Sponsor" },
  { id: "logistics", label: "Logistics Sponsor" },
  { id: "partner", label: "Sponsor" },
];

const youtubeId = (url) => url.match(/embed\/([\w-]+)/)?.[1];

const panelVideos = discussionPanel2026
  .filter((person) => person.videoUrl)
  .map((person) => ({
    id: youtubeId(person.videoUrl),
    category: "panel",
    title: `${person.name}${person.role === "moderator" ? " (Moderator)" : ""} - ${person.designation}, ${person.company}`,
    profile: person.slug,
  }));

// Newest first, matching https://www.youtube.com/@BritFinTechAwardsUK/shorts
const shortVideos = [
  { id: "C8DNyiQqh0s", title: "Your host has a message for you…" },
  { id: "909xEj1zNBo", title: "POV: You decided to sponsor Brit FinTech Awards 2026" },
  { id: "X_YZ48-XXws", title: "Explore the Brit FinTech Awards 2026 Categories" },
  { id: "RGmenE-CAYo", title: "A message to everyone shaping where FinTech & MSBs go next" },
  { id: "obwLRXdZLQ0", title: "Meet Alona: Moderator for Discussion Panel | Brit FinTech Awards 2026" },
  { id: "EXdjhWIiUkI", title: "If you're looking to grow in fintech and MSBs, this is where you should be. | BFA 26" },
].map((video) => ({ ...video, category: "shorts", short: true }));

// Newest first — winner announcement videos from https://www.youtube.com/@BritFinTechAwardsUK/videos
const winnerVideos = [
  {
    id: "ap62ESX40qQ",
    title: "Daljit Young Wins Visionary Woman in AI 2026",
    profile: "/award-winners-2026/daljit-young-visionary-woman-in-ai-2026",
  },
  {
    id: "BY1xAa96dzQ",
    title: "Disbuz by Payceler Wins Cross-Border Pay-out Disruptor of the Year 2026",
    profile: "/award-winners-2026/disbuz-cross-border-payout-disruptor-2026",
  },
  {
    id: "xBtkPz5n1QU",
    title: "QF Remit Wins MSB Rising Star 2026",
    profile: "/award-winners-2026/qf-remit-msb-rising-star-2026",
  },
  {
    id: "UyWCbi1e7E8",
    title: "Mario Van Poppel from Leftover Currency Wins MSB Leader 2026",
    profile: "/award-winners-2026/leftover-currency-msb-leader-2026",
  },
  {
    id: "uc84sjgfLqs",
    title: "Starrz Money Wins MSB Community Champion 2026",
    profile: "/award-winners-2026/starrz-money-msb-community-champion-2026",
  },
  {
    id: "vEA8T9yI3uw",
    title: "Mercury Danati Ltd Wins MSB Store of the Year 2026",
    profile: "/award-winners-2026/mercury-danati-msb-store-of-the-year-2026",
  },
  {
    id: "ZNsTk0HUcoY",
    title: "Tassa Pay Limited Wins MSB Disruptor 2026",
    profile: "/award-winners-2026/tassa-pay-msb-disruptor-2026",
  },
  {
    id: "FdllXJUYT6g",
    title: "Red Sea Money Transfer Ltd Wins Remittance Innovator MSB 2026",
    profile: "/award-winners-2026/red-sea-money-transfer-remittance-innovator-msb-2026",
  },
  {
    id: "ivUL0_SaX3U",
    title: "MyRemit Ltd Wins Best in Customer Service MSB 2026",
    profile: "/award-winners-2026/myremit-best-in-customer-service-msb-2026",
  },
  {
    id: "gOoK4DNj8fA",
    title: "KMBAL Wins Compliance Innovator MSB 2026",
    profile: "/award-winners-2026/kmbal-compliance-innovator-msb-2026",
  },
  {
    id: "Ne5ner4Xi2U",
    title: "emerchantpay wins FinTech of the Year 2026",
    profile: "/award-winners-2026/emerchantpay-fintech-of-the-year-2026",
  },
  {
    id: "D3WPMazHAkw",
    title: "Tunde Ayo Fabiyi Wins FinTech CTO of the Year 2026",
    profile: "/award-winners-2026/tunde-ayo-fabiyi-fintech-cto-2026",
  },
  {
    id: "i4ZnGG3Amn4",
    title: "TrustUK Payments Ltd Wins Payment Gateway 2026",
    profile: "/award-winners-2026/trustuk-payments-payment-gateway-2026",
  },
  {
    id: "eO4wI81i3qY",
    title: "GBG Wins Anti-Fraud Innovator 2026",
    profile: "/award-winners-2026/gbg-anti-fraud-innovator-2026",
  },
  {
    id: "dFsMrzAocfo",
    title: "3ribe Wins Startup of the Year 2026",
    profile: "/award-winners-2026/3ribe-startup-of-the-year-2026",
  },
  {
    id: "loJ_6xjgh1E",
    title: "DECTA Wins Payment Acquirer 2026",
    profile: "/award-winners-2026/decta-payment-acquirer-2026",
  },
  {
    id: "bgKFp8ykkXA",
    title: "FOREN. formerly Leatherback Wins B-A-A-S Innovator 2026",
    profile: "/award-winners-2026/foren-baas-innovator-2026",
  },
  {
    id: "1msIgRUuRMY",
    title: "Invictus Ventures Limited Wins Pay-Out Innovator 2026",
    profile: "/award-winners-2026/invictus-pay-out-innovator-2026",
  },
  {
    id: "gmXwX1RQCHs",
    title: "Neema Wins Payment Innovator 2026",
    profile: "/award-winners-2026/neema-payment-innovator-2026",
  },
  {
    id: "8-hHVA_ur6o",
    title: "Fena Wins Account 2 Account Payment Processor of the Year 2026",
    profile: "/award-winners-2026/fena-account-to-account-payment-processor-2026",
  },
].map((video) => ({ ...video, category: "winners" }));

export const WINNER_VIDEO_BY_PROFILE = Object.fromEntries(
  winnerVideos.map((video) => [video.profile, video])
);

// Newest upload first, matching https://www.youtube.com/@BritFinTechAwardsUK/videos
const channelVideos = [
  {
    id: "CB6UjQOcQ4g",
    category: "keynote",
    title: "The AI-Augmented CFO | Daljit Young",
    profile: "/keynote-speakers-2026",
  },
  {
    id: "CL7d_w7iNT4",
    category: "panel",
    title: "Can FinTech & MSBs Afford to Ignore AI? | BFA26 Discussion Panel",
    profile: "/discussion-panel-2026",
    linkLabel: "Meet the panel",
  },
  {
    id: "b6mHivEGIqI",
    category: "event",
    title: "Brit Fintech Awards 2026 - Event Highlights",
  },
  {
    id: "oU2rhIwkqFE",
    category: "focus",
    title: "What is High Risk? Session Highlight",
    profile: "/focus-session-2026",
  },
  ...winnerVideos,
  { id: "IlMryTsywU8", category: "testimonials", title: "BFA26 Testimonial | Wahid Ullah from Fast Track Money Transfer" },
  { id: "rTG44L1btuI", category: "testimonials", title: "BFA26 Testimonial | Saurabh Jain from RemoteStar" },
  { id: "9TVWGpaoOtE", category: "testimonials", title: "BFA26 Testimonial | Ajmal Tarin from Fast Track Money Transfer" },
  { id: "0TSxBkcJrA4", category: "testimonials", title: "BFA26 Testimonial | Marie Melin from Praise for Jesus gospel concert Ltd" },
  { id: "pIcJuY_KvQE", category: "testimonials", title: "BFA26 Testimonial | Wasif Mahmood from 5 Pillars" },
  { id: "QrHh4NgStRQ", category: "testimonials", title: "BFA26 Testimonial | Kamal Poudel from IME London" },
  { id: "17X4CxUuOKo", category: "testimonials", title: "BFA26 Testimonial | Jay Anand from Mercury Danati" },
  { id: "kNw896HwPrM", category: "testimonials", title: "BFA26 Testimonial | Milad Maroun from Milad One Limited" },
  { id: "zPNE0rR7csw", category: "testimonials", title: "BFA26 Testimonial | Theo Kenward from Trust Payments" },
  { id: "r2MnOH0PSjk", category: "testimonials", title: "BFA26 Testimonial | Zabihullah Safi from STARRZ-Link" },
  { id: "TYDE88QjHDQ", category: "testimonials", title: "BFA26 Testimonial | Abdulqafar Aden from Tassapay" },
  { id: "z6Rk5m-75r4", category: "testimonials", title: "BFA26 Testimonial | Maicon Caltiano from Decta" },
  { id: "UN0nX1c64to", category: "testimonials", title: "BFA26 Testimonial | Mario Van Poppel from Leftover Currency" },
  { id: "txhUX2g_e2s", category: "testimonials", title: "BFA26 Testimonial | Daljit Young from Peratera" },
  { id: "q1x7cOiucuo", category: "testimonials", title: "BFA26 Testimonial | Alex Smith from IFX Payments" },
  { id: "p_CGmFtapzg", category: "testimonials", title: "BFA26 Testimonial | Laurence Lascelles & Erhan Tetik from Bank of London" },
  { id: "STA9JwPKJOI", category: "event", title: "How to reach Landing FortyTwo | BFA26 venue guide" },
  { id: "3Upom7GisVc", category: "focus", title: "Meet the speakers of the Focus Session", profile: "/focus-session-2026" },
  { id: "wWolNhEqvLc", category: "sponsor", tier: "travel", title: "Alico Remit", profile: "/alicoremit-sponsor-details-2026" },
  { id: "ow3zwBy9QPI", category: "event", title: "We're ready. Are you?" },
  { id: "RLzf47V6NoQ", category: "sponsor", tier: "partner", title: "Add Money Transfer", website: "https://addmoneytransfer.co.uk/" },
  { id: "eVQiImov5A0", category: "sponsor", tier: "strategic", title: "Disbuz by Payceler", profile: "/disbuz-sponsor-details-2026" },
  { id: "dARBl0e3G74", category: "sponsor", tier: "strategic", title: "TassaPay", profile: "/tassapay-sponsor-details-2026" },
  { id: "UA-M7v1Vy7U", category: "panel", title: "Alona Shevtsova (Moderator) - Chief Executive Officer, Sends", profile: "/alona-shevtsova-discussion-panel-2026" },
  { id: "q_jmdfcWTu0", category: "panel", title: "Sergio Ivanovic - Founder & CEO, Invictus", profile: "/sergio-ivanovic-discussion-panel-2026" },
  { id: "vvz5SBXmvwc", category: "sponsor", tier: "strategic", title: "Flex Instant Pay", profile: "/flex-instant-pay-sponsor-details-2026" },
  { id: "26wxG1LBJkk", category: "panel", title: "Jay Anand - Director & MLRO, Mercury Danati Ltd", profile: "/jay-anand-discussion-panel-2026" },
  { id: "Vl6x-eSNJ3k", category: "sponsor", tier: "silver", title: "Invictus Ventures", profile: "/invictus-ventures-sponsor-details-2026" },
  { id: "sMxKif5xp_E", category: "panel", title: "Gayatri Chadaram - Head of Compliance and MLRO, FOREN. formerly Leatherback", profile: "/gayatri-chadaram-discussion-panel-2026" },
  { id: "gvob7f3qIB4", category: "sponsor", tier: "partner", title: "Ifepay, FinestPay and Blue Nile" },
  { id: "RKlS5Ux3dkI", category: "sponsor", tier: "strategic", title: "Glory & Honour", profile: "/glory-honour-sponsor-details-2026" },
  { id: "11U0CTQHxfM", category: "sponsor", tier: "strategic", title: "Red Sea Money Transfer", profile: "/redsea-sponsor-details-2026" },
  { id: "JEEl0zNqeVk", category: "panel", title: "Femi Ekwuyasi - Co-Founder & CEO, 3ribe", profile: "/femi-ekwuyasi-discussion-panel-2026" },
  { id: "cw7l8D8Fzik", category: "sponsor", tier: "innovation", title: "QF Remit", profile: "/qfremit-sponsor-details-2026" },
  { id: "Wpr0WqzpmyY", category: "keynote", title: "Daljit Young - The AI-Augmented CFO: Inside a Next-Gen EMI's Financial Engine Room", profile: "/daljit-young-keynote-speaker-2026" },
  { id: "KHKqVB5Cbl4", category: "sponsor", tier: "logistics", title: "Teeparam", profile: "/teeparam-sponsor-details-2026" },
  { id: "oXyhjCer6dM", category: "sponsor", tier: "silver", title: "Peratera", profile: "/peratera-sponsor-details-2026" },
  { id: "GwqN1MKLTZM", category: "sponsor", tier: "silver", title: "ECEX", profile: "/ecex-sponsor-details-2026" },
  { id: "fsc8LWT5DVc", category: "sponsor", tier: "silver", title: "FOREN. formerly Leatherback", profile: "/foren-sponsor-details-2026" },
  { id: "luPCBVqbuK4", category: "event", title: "Who attends the Brit Fintech Awards?" },
  { id: "nj9D_3RlEZ4", category: "jury", title: "Meet Giordano Cortese | The expertise behind the BFA26 jury", profile: "/giordano-cortese-judge-details-2026" },
  { id: "7AqsqyrKJHg", category: "jury", title: "Meet Dr. Nikhil Sapre | The expertise behind the BFA26 jury", profile: "/nikhil-sapre-judge-details-2026" },
  { id: "T3bmUJsrp70", category: "sponsor", tier: "silver", title: "3ribe", profile: "/3ribe-sponsor-details-2026" },
  { id: "bnnSRl5yZVo", category: "jury", title: "Meet James Borley | The expertise behind the BFA26 jury", profile: "/james-borley-judge-details-2026" },
  { id: "nLziGknAmiA", category: "sponsor", tier: "strategic", title: "MyRemit", profile: "/myremit-sponsor-details-2026" },
  { id: "i9FH1IP1ZUQ", category: "sponsor", tier: "innovation", title: "Leftover Currency", profile: "/leftover-currency-sponsor-details-2026" },
  { id: "HfSIeOrDXWc", category: "event", title: "Download the BFA app and start networking." },
  { id: "3sdjNQV7jcE", category: "event", title: "Stephen Simmons to host a magical evening at BFA26", profile: "/stephen-simmons-event-host-2026" },
  { id: "xyBbxLXKf54", category: "event", title: "The official BFA app is almost here" },
  { id: "Q-HMjPlRk2c", category: "sponsor", tier: "silver", title: "Kmbal", profile: "/kmbal-sponsor-details-2026" },
  { id: "JEpncdxVGMg", category: "jury", title: "Who decides who takes the BFA26 stage? | Meet our jury" },
  { id: "Zl0_bcYDJPA", category: "sponsor", tier: "gold", title: "Mercury Danati", profile: "/mercury-danati-sponsor-details-2026" },
  { id: "aJVQa_SnnMY", category: "sponsor", tier: "silver", title: "Sends", profile: "/sends-sponsor-details-2026" },
  { id: "H47it0i1iKs", category: "sponsor", tier: "platinum", title: "Tigris Pay", profile: "/tigris-pay-sponsor-details-2026" },
  { id: "D4CSJNZxboY", category: "event", title: "BFA 2026 - The doors are about to open" },
  { id: "SYUSmWIlZ9o", category: "event", title: "Nominations for Brit Fintech Awards 2026 are now open" },
  { id: "o6WjXbRSEFo", category: "event", title: "London's skyline is about to host something different." },
  { id: "TaD0bC6cGrU", category: "event", title: "From skylines to iconic stages. Where next?" },
  { id: "nZCeYtdsKm8", category: "event", title: "BFA 2026: Witness the evolution" },
  { id: "tGC-9Z1x174", category: "event", title: "BFA 2026 loading | Where tech sparks transformation" },
];

const listedIds = new Set(channelVideos.map((video) => video.id));

export const VIDEOS_2026 = [
  ...channelVideos,
  ...panelVideos.filter((video) => !listedIds.has(video.id)),
  ...shortVideos,
];
