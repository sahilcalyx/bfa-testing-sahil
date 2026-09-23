/**
 * BFA 2026 Discussion Panel
 * 1 moderator + 3 panelists. Shown together on the homepage.
 * Swap placeholder: true / img / logo when assets are ready.
 */

const DEMO_PROFILE_BG = "/assets/img/discussionpanel-2026/BG-demo-profile-images.jpg";

export const moderator2026 = {
  id: "moderator-01",
  role: "moderator",
  initials: "MD",
  name: "To be announced",
  designation: "Panel Moderator",
  company: "Brit FinTech Awards",
  logo: null,
  img: DEMO_PROFILE_BG,
  placeholder: true,
  tagline: "Chairing the Brit FinTech Awards 2026 discussion",
  linkedin: "",
  highlights: [
    "Official moderator for the 2026 discussion panel",
    "Guides the conversation across payments, regulation and innovation",
    "Portrait and company details will be published shortly",
  ],
  bioParagraphs: [
    "The moderator will chair the <strong>Brit FinTech Awards 2026 discussion panel</strong>, bringing structure and pace to a conversation with three industry leaders.",
    "Full biography, portrait and company mark will appear here as soon as they are confirmed.",
  ],
};

export const femiEkwuyasi = {
  id: "femi-ekwuyasi",
  role: "panelist",
  initials: "FE",
  name: "Femi Ekwuyasi",
  designation: "Co-Founder & CEO",
  company: "3ribe",
  licensedEntity: "Grants Payment Solutions Ltd",
  slug: "/femi-ekwuyasi-discussion-panel-2026",
  logo: "/assets/img/discussionpanel-2026/3ribe-logo.png",
  logoLight: "/assets/img/discussionpanel-2026/3ribe-logo-alt.png",
  logoOnDark: true,
  img: "/assets/img/discussionpanel-2026/Femie.jpg",
  placeholder: false,
  videoUrl: "https://www.youtube.com/embed/JEEl0zNqeVk",
  website: "https://3ribe.io",
  tagline: "Simplifying cross-border payments and connecting Africa to global markets",
  linkedin: "https://www.linkedin.com/in/femi-ekwuyasi-12a8254a",
  stats: {
    domain: "Remittance & Digital Banking",
    association: "2026 Discussion Panel",
    experience: "Payments & Fintech",
  },
  highlights: [
    "Co-Founder and CEO of 3ribe, a global money remittance and digital banking brand",
    "Operates under Grants Payment Solutions Ltd, a UK-licensed payment entity",
    "Leads a vision to simplify cross-border payments and financial access",
    "Strong focus on connecting Africa to global markets",
    "Executive education from MIT Sloan",
    "Active voice in Africa’s fintech and payments ecosystem",
    "Based in the UK, with deep expertise in payments, remittance and digital financial infrastructure",
  ],
  bioParagraphs: [
    "Femi Ekwuyasi is the <strong>Co-Founder and CEO of 3ribe</strong>, a global money remittance and digital banking solutions brand operating under <strong>Grants Payment Solutions Ltd</strong>, a UK-licensed payment entity.",
    "He leads the company’s vision to <strong>simplify cross-border payments and financial access</strong> for individuals and businesses, with a strong focus on <strong>connecting Africa to global markets</strong>.",
    "Femi holds an executive education background from <strong>MIT Sloan</strong>, and is an active voice in Africa’s fintech and payments ecosystem.",
    "Based in the UK, he brings deep industry expertise in <strong>payments, remittance, and digital financial infrastructure</strong>. He is passionate about building solutions that drive <strong>financial inclusion across emerging markets</strong>.",
  ],
};

export const panelistOne2026 = femiEkwuyasi;

export const gayatriChadaram = {
  id: "gayatri-chadaram",
  role: "panelist",
  initials: "GC",
  name: "Gayatri Chadaram",
  designation: "Head of Compliance and MLRO",
  company: "Leatherback",
  slug: "/gayatri-chadaram-discussion-panel-2026",
  logo: "/assets/img/keynote-speakers-2026/Letherback-logo.png",
  logoLight: "/assets/img/sponsor-logo/leatherback-logo.png",
  logoOnDark: false,
  img: "/assets/img/discussionpanel-2026/Gayatri.jpg",
  placeholder: false,
  videoUrl: "https://www.youtube.com/embed/sMxKif5xp_E",
  website: "https://leatherback.co/",
  tagline: "Building risk-based financial crime, compliance and governance frameworks",
  linkedin: "",
  stats: {
    domain: "Financial Crime & Compliance",
    association: "2026 Discussion Panel",
    experience: " 20 Years",
  },
  highlights: [
    "Head of Compliance and Money Laundering Reporting Officer at Leatherback",
    "Leads the firm’s financial crime and regulatory compliance function",
    "20 years of experience in financial services",
    "13 years with API and EMI firms, including nine years in MLRO roles",
    "Began her career in banking in India before moving to the UK",
    "MBA-qualified, with a focus on developing the teams that operate compliance frameworks",
  ],
  bioParagraphs: [
    "Gayatri Chadaram is <strong>Head of Compliance and Money Laundering Reporting Officer at Leatherback</strong>, where she leads the firm’s financial crime and regulatory compliance function. She has nearly <strong>20 years of experience in financial services</strong>, including <strong>13 years with API and EMI firms</strong> and <strong>nine years in MLRO roles</strong>.",
    "She began her career in banking in India before moving to the UK, and holds an <strong>MBA</strong>. Her focus is on building <strong>risk-based and proportionate financial crime risk management, regulatory compliance and governance frameworks</strong>, and on developing the teams that operate them.",
    "<strong>Leatherback</strong> is a regulated global payments platform that enables businesses and individuals to move money across borders instantly, securely, and at scale. The firm eliminates the friction, delays, and hidden costs of traditional cross-border payments, empowering customers to send, receive, and manage money faster and more reliably across multiple currencies.",
  ],
};

export const panelistTwo2026 = gayatriChadaram;

export const jayAnand = {
  id: "jay-anand",
  role: "panelist",
  initials: "JA",
  name: "Jay Anand",
  designation: "Director & MLRO",
  company: "Mercury Danati Ltd",
  slug: "/jay-anand-discussion-panel-2026",
  logo: "/assets/img/discussionpanel-2026/MercuryDanati.png",
  logoLight: "/assets/img/discussionpanel-2026/MercuryDanati.png",
  logoOnDark: true,
  logoSize: { height: "36px", maxWidth: "132px" },
  img: "/assets/img/discussionpanel-2026/Jay.png",
  placeholder: false,
  tagline: "Robust AML controls, regulatory standards and customer-focused currency exchange",
  linkedin: "",
  stats: {
    domain: "Currency Exchange & AML",
    association: "2026 Discussion Panel",
    experience: "Compliance & Governance",
  },
  highlights: [
    "Director and Money Laundering Reporting Officer at Mercury Danati Ltd",
    "Oversees regulatory compliance, financial crime risk management, and governance",
    "Strong focus on maintaining robust AML controls and regulatory standards",
    "Supports secure, transparent, and customer-focused currency exchange services",
    "Mercury Danati named Compliance Innovator of the Year at the Brit FinTech Awards 2024",
    "Company recognised as MSB Store of the Year 2025",
  ],
  bioParagraphs: [
    "Jay Anand is <strong>Director & MLRO at Mercury Danati Ltd</strong>, where he oversees key areas of <strong>regulatory compliance, financial crime risk management, and governance</strong>.",
    "With a strong focus on maintaining <strong>robust AML controls and regulatory standards</strong>, Jay plays an important role in supporting Mercury Danati’s commitment to <strong>secure, transparent, and customer-focused currency exchange services</strong>.",
    "His work and the company’s approach to compliance were recognised at the <strong>Brit FinTech Awards 2024</strong>, where Mercury Danati received the <strong>Compliance Innovator of the Year</strong> award. The company was also recognised as <strong>MSB Store of the Year 2025</strong>, reflecting its commitment to customer service, transparency, and excellence in the currency exchange sector.",
    "<strong>Mercury Danati Ltd</strong> is a London-based currency exchange specialist providing foreign exchange services to local and international customers. With <strong>3 strategically located branches across London</strong> and access to <strong>more than 80 world currencies</strong>, the company combines competitive exchange rates, transparent pricing, regulatory excellence, and personalised customer service to make currency exchange secure, straightforward, and convenient for travellers, individuals, and businesses.",
  ],
};

export const panelistThree2026 = jayAnand;

export const discussionPanel2026 = [
  moderator2026,
  panelistOne2026,
  panelistTwo2026,
  panelistThree2026,
];
