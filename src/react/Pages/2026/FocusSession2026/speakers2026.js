/**
 * BFA 2026 Focus Session – What is High Risk?
 * Session page plus profile routes. Biography fields are added when the copy arrives.
 */

export const FOCUS_SESSION_PAGE_URL = "/focus-session-2026";

export const stefanBinder = {
  id: "stefan-binder",
  slug: "/focus-session-2026#stefan",
  bioSlug: "/stefan-binder-focus-session-2026",
  initials: "SB",
  name: "Stefan Binder",
  designation: "Co-Founder & Chairman",
  company: "Fena",
  brand: "fena.",
  logo: "/assets/img/attendee-logos/fena.png",
  logoOnDark: false,
  img: "/assets/img/focus-session-2026/stefan-binder.jpg",
  placeholder: false,
  linkedin: "https://www.linkedin.com/in/stefan-binder-mfin-dipl-ing-94b6a0100/",
  tagline:
    "Guiding strategy, governance and financial direction at an FCA-authorised Open Banking platform",
  stats: {
    domain: "Open Banking & B2B Payments",
    association: "2026 Focus Session",
    experience: "15 Years",
  },
  highlights: [
    "Co-Founder and Chairman of Fena, founded in 2019",
    "FCA-authorised Open Banking payments and B2B commerce platform",
    "15 years of experience in finance across senior roles at financial institutions",
    "Background in corporate finance, investment banking, payments and risk",
    "Key role in securing Fena's FCA PIS and AIS licences in 2020",
    "Master of Finance and CFA Level 3 qualification",
  ],
  bioParagraphs: [
    "Stefan Binder is <strong>Co-Founder and Chairman of Fena</strong>, the <strong>FCA-authorised Open Banking payments and B2B commerce platform</strong> he co-founded in 2019. He brings <strong>15 years of experience in finance</strong>, including senior roles at financial institutions, where he focused on <strong>corporate finance / investment banking / payments and risk</strong>.",
    "As Chairman, Stefan guides Fena's <strong>strategy, governance, and financial direction</strong>. He played a key role in the company securing its <strong>FCA licences for Payment Initiation and Account Information Services</strong> in 2020, and has supported its growth into a <strong>dual-product business</strong> serving merchants across the UK and the EU.",
    "Stefan holds the <strong>Master of Finance</strong> and <strong>CFA Level 3</strong> qualification.",
  ],
};

export const osmanIbrahim = {
  id: "osman-ibrahim",
  slug: "/focus-session-2026#osman",
  bioSlug: "/osman-ibrahim-focus-session-2026",
  initials: "OI",
  name: "Osman Ibrahim",
  designation: "Founder & Director",
  company: "Kmbal Ltd",
  brand: "KMBAL.",
  logo: "/assets/img/attendee-logos/kmbal.png",
  logoOnDark: false,
  img: "/assets/img/focus-session-2026/Osman-Ibrahim.jpg",
  geometricImg: "/assets/img/focus-session-2026/osman-geometric-clean.png",
  placeholder: false,
  linkedin: "https://www.linkedin.com/in/osman-ibrahim-984a6463/",
  tagline:
    "Making money transfers simple, affordable and accessible across borders",
  stats: {
    domain: "Remittances & Cross-Border Payments",
    association: "2026 Focus Session",
    experience: "9+ Years",
  },
  highlights: [
    "Founder & Director of Kmbal Ltd",
    "Driven by making money transfers simple, affordable and accessible",
    "Focused on serving developing countries with limited payment systems",
    "Bridging the gap for communities underserved by traditional financial services",
    "Combines modern technology, reliable customer support and strong compliance",
    "Ambition to make access to money less dependent on geography",
  ],
  bioParagraphs: [
    "Osman Ibrahim is the <strong>Founder & Director of Kmbal Ltd</strong>, driven by the belief that sending money should be <strong>simple, affordable and accessible</strong>—especially to developing countries where payment systems remain limited and international transfers have traditionally been difficult, costly or slow.",
    "He founded Kmbal to help bridge this gap, making it easier for people to send money to loved ones in communities underserved by traditional financial services. His vision combines <strong>modern technology</strong>, <strong>reliable customer support</strong> and <strong>strong compliance</strong> to overcome barriers and connect people across borders.",
    "Osman’s ambition is to make access to money <strong>less dependent on geography</strong>, helping families support one another and bringing the world closer together.",
  ],
};

export const focusSession2026 = [stefanBinder, osmanIbrahim];

export const focusSessionMeta2026 = {
  id: "focus-session",
  time: "7:50",
  meridiem: "PM",
  title: "Focus Session",
  topicLabel: "Topic",
  topic: "What is High Risk?",
  speakersLabel: "Meet the Speakers",
  pageSlug: FOCUS_SESSION_PAGE_URL,
};
