// Central SEO registry: define per-path title, description, and Open Graph/Twitter
// Update this file to manage SEO for all pages in one place.

const siteName = "Brit Fintech Awards";
export const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_BASE_URL || "https://britfintechawards.com";

export function toAbsoluteUrl(urlOrPath) {
  if (!urlOrPath) return undefined;
  if (/^https?:\/\//i.test(urlOrPath)) return urlOrPath;
  return `${siteBaseUrl}${urlOrPath.startsWith("/") ? urlOrPath : `/${urlOrPath}`}`;
}

export const defaultSeo = {
  title: siteName,
  description: "Celebrating excellence and innovation in fintech.",
  openGraph: {
    title: siteName,
    description: "Celebrating excellence and innovation in fintech.",
    url: siteBaseUrl,
    siteName,
    images: [
      {
        url: toAbsoluteUrl("/assets/img/og/home.jpg"),
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Celebrating excellence and innovation in fintech.",
    images: [toAbsoluteUrl("/assets/img/og/home.jpg")],
  },
};

export const seoByPath = {
  "/": {
    title: "Brit Fintech Awards | Home",
    description: "Explore categories, sponsors, and highlights of the Brit Fintech Awards.",
    openGraph: {
      title: "Brit Fintech Awards | Home",
      description: "Explore categories, sponsors, and highlights of the Brit Fintech Awards.",
      url: `${siteBaseUrl}/`,
      siteName,
      images: [{ url: "/assets/img/og/home.jpg", width: 1200, height: 630, alt: "Home" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Brit Fintech Awards | Home",
      description: "Explore categories, sponsors, and highlights of the Brit Fintech Awards.",
      images: ["/assets/img/og/home.jpg"],
    },
  },
  "/about": {
    title: "About Brit Fintech Awards 2026",
    description: "Learn about our mission and the team behind the awards.",
    openGraph: {
      title: "About Brit Fintech Awards 2026",
      description: "Learn about our mission and the team behind the awards.",
      url: `${siteBaseUrl}/about`,
      siteName,
      images: [{ url: "/assets/img/og/about.jpg", width: 1200, height: 630, alt: "About" }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "About Brit Fintech Awards",
      description: "Learn about our mission and the team behind the awards.",
      images: ["/assets/img/og/about.jpg"],
    },
  },
  "/register": {
    title: "Register for Brit Fintech Awards 2026",
    description: "Enter your nomination or book tickets for the awards night.",
    openGraph: {
      title: "Register for Brit Fintech Awards",
      description: "Enter your nomination or book tickets for the awards night.",
      url: `${siteBaseUrl}/register`,
      siteName,
      images: [{ url: "/assets/img/og/register.jpg", width: 1200, height: 630, alt: "Register" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Register for Brit Fintech Awards",
      description: "Enter your nomination or book tickets for the awards night.",
      images: ["/assets/img/og/register.jpg"],
    },
  },
  "/contact": {
    title: "Contact Brit Fintech Awards",
    description: "Get in touch with the Brit Fintech Awards team.",
    openGraph: {
      title: "Contact Brit Fintech Awards",
      description: "Get in touch with the Brit Fintech Awards team.",
      url: `${siteBaseUrl}/contact`,
      siteName,
      images: [{ url: "/assets/img/og/contact.jpg", width: 1200, height: 630, alt: "Contact" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Brit Fintech Awards",
      description: "Get in touch with the Brit Fintech Awards team.",
      images: ["/assets/img/og/contact.jpg"],
    },
  },
  "/privacy-policy": {
    title: "Brit Fintech Awards | Privacy Policy",
    description:
      "Learn about how Brit Fintech Awards handles your privacy and personal information in compliance with privacy laws and regulations.",
    openGraph: {
      title: "Brit Fintech Awards | Privacy Policy",
      description:
        "Learn about how Brit Fintech Awards handles your privacy and personal information in compliance with privacy laws and regulations.",
      url: `${siteBaseUrl}/privacy-policy`,
      siteName,
      images: [
        { url: "/assets/img/og/about.jpg", width: 1200, height: 630, alt: "Privacy Policy" },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Brit Fintech Awards | Privacy Policy",
      description:
        "Learn about how Brit Fintech Awards handles your privacy and personal information in compliance with privacy laws and regulations.",
      images: ["/assets/img/og/about.jpg"],
    },
  },
  "/sponsorship-terms-and-conditions": {
    title: "Brit Fintech Awards | Sponsorship Terms and Conditions",
    description:
      "Read the Sponsorship terms and conditions governing the use of Brit Fintech Awards website and services.",
    openGraph: {
      title: "Brit Fintech Awards | Sponsorship Terms and Conditions",
      description:
        "Read the Sponsorship terms and conditions governing the use of Brit Fintech Awards website and services.",
      url: `${siteBaseUrl}/sponsorship-terms-and-conditions`,
      siteName,
      images: [
        { url: "/assets/img/og/about.jpg", width: 1200, height: 630, alt: "Sponsorship Terms" },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Brit Fintech Awards | Sponsorship Terms and Conditions",
      description:
        "Read the Sponsorship terms and conditions governing the use of Brit Fintech Awards website and services.",
      images: ["/assets/img/og/about.jpg"],
    },
  },
  "/registerfor-startup-pitch": {
    title: "Brit Fintech Awards | Register for Startup Deck",
    description:
      "Register for the Startup Deck at the Brit Fintech Awards and join us in celebrating innovation and excellence in the UK's financial technology sector.",
    openGraph: {
      title: "Brit Fintech Awards | Register for Startup Deck",
      description:
        "Join the Brit Fintech Awards by registering for the Startup Deck to celebrate and showcase innovation in the UK financial technology industry.",
      url: `${siteBaseUrl}/registerfor-startup-pitch`,
      siteName,
      images: [
        { url: "/assets/img/og/register.jpg", width: 1200, height: 630, alt: "Startup Deck" },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Brit Fintech Awards | Register for Startup Deck",
      description:
        "Join the Brit Fintech Awards by registering for the Startup Deck to celebrate and showcase innovation in the UK financial technology industry.",
      images: ["/assets/img/og/register.jpg"],
    },
  },
  "/our-discussion-panel-2025": {
    title: "Discussion Panel | Brit Fintech Awards 2025",
    description:
      "Join Brit FinTech Awards UK, celebrating top innovations and achievements in FinTech, and honouring pioneers shaping the future of financial technology.",
    openGraph: {
      title: "Discussion Panel | Brit Fintech Awards 2025",
      description:
        "Join Brit FinTech Awards UK, celebrating top innovations and achievements in FinTech, and honouring pioneers shaping the future of financial technology.",
      url: `${siteBaseUrl}/our-discussion-panel-2025`,
      siteName,
      images: [
        { url: "/assets/img/og/discussion-panel.jpg", width: 1200, height: 630, alt: "Discussion Panel" },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Discussion Panel | Brit Fintech Awards 2025",
      description:
        "Join Brit FinTech Awards UK, celebrating top innovations and achievements in FinTech, and honouring pioneers shaping the future of financial technology.",
      images: ["/assets/img/og/home.jpg"],
    },
  },
  "/blogs": {
    title: "Brit Fintech Awards | Blogs",
    description: "Insights and stories from the Brit Fintech Awards community.",
    openGraph: {
      title: "Brit Fintech Awards | Blogs",
      description: "Insights and stories from the Brit Fintech Awards community.",
      url: `${siteBaseUrl}/blogs`,
      siteName,
      images: [
        { url: "/assets/img/og/home.jpg", width: 1200, height: 630, alt: "Blogs" },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Brit Fintech Awards | Blogs",
      description: "Insights and stories from the Brit Fintech Awards community.",
      images: ["/assets/img/og/home.jpg"],
    },
  },
  "/our-keynote-speaker-2025": {
    title: "Brit Fintech Awards | Keynotes",
    description: "Insights and stories from the Brit Fintech Awards community.",
    openGraph: {
      title: "Brit Fintech Awards | Keynotes",
      description: "Insights and stories from the Brit Fintech Awards community.",
      url: `${siteBaseUrl}/our-keynote-speaker-2025`,
      siteName,
      images: [
        { url: "/assets/img/og/keynotes.jpg", width: 1200, height: 630, alt: "Keynotes" },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Brit Fintech Awards | Keynotes",
      description: "Insights and stories from the Brit Fintech Awards community.",
      images: ["/assets/img/og/keynotes.jpg"],
    },
  },
  "/will-2025-be-the-year-of-stablecoins": {
    title: "Will 2025 Be the Year of Stablecoins?",
    description: "Exploring the potential mainstream adoption of stablecoins in 2025.",
    openGraph: {
      title: "Will 2025 Be the Year of Stablecoins?",
      description: "Exploring the potential mainstream adoption of stablecoins in 2025.",
      url: `${siteBaseUrl}/will-2025-be-the-year-of-stablecoins`,
      siteName,
      images: [
        { url: "/assets/img/blogs/will-2025-be-the-year-of-stablecoins.png", width: 1200, height: 630, alt: "Stablecoins 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Will 2025 Be the Year of Stablecoins?",
      description: "Exploring the potential mainstream adoption of stablecoins in 2025.",
      images: ["/assets/img/blogs/will-2025-be-the-year-of-stablecoins.png"],
    },
  },
  "/ai-powered-risk-compliance-the-next-frontier-for-msbs-and-fintechs": {
    title: "AI-Powered Risk & Compliance: The Next Frontier for MSBs and Fintechs",
    description: "How machine learning and adaptive intelligence are reshaping regulatory reporting, AML/KYC checks, and fraud mitigation in real time.",
    openGraph: {
      title: "AI-Powered Risk & Compliance: The Next Frontier for MSBs and Fintechs",
      description: "How machine learning and adaptive intelligence are reshaping regulatory reporting, AML/KYC checks, and fraud mitigation in real time.",
      url: `${siteBaseUrl}/ai-powered-risk-compliance-the-next-frontier-for-msbs-and-fintechs`,
      siteName,
      images: [
        { url: "/assets/img/blogs/ai-powered-risk-compliance.png", width: 1200, height: 630, alt: "AI-Powered Risk & Compliance" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "AI-Powered Risk & Compliance: The Next Frontier for MSBs and Fintechs",
      description: "How machine learning and adaptive intelligence are reshaping regulatory reporting, AML/KYC checks, and fraud mitigation in real time.",
      images: ["/assets/img/blogs/ai-powered-risk-compliance.png"],
    },
  },
  "/beyond-borders-brit-fintech-awards": {
    title: "Beyond Borders: Brit Fintech Awards",
    description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
    openGraph: {
      title: "Beyond Borders: Brit Fintech Awards",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      url: `${siteBaseUrl}/beyond-borders-brit-fintech-awards`,
      siteName,
      images: [
        { url: "/assets/img/blogs/fintech-in-the-uk.jpg", width: 1200, height: 630, alt: "Beyond Borders" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Beyond Borders: Brit Fintech Awards",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      images: ["/assets/img/blogs/fintech-in-the-uk.jpg"],
    },
  },
  "/awards-2025": {
    title: "Awards 2026 | Brit Fintech Awards 2025 ",
    description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
    openGraph: {
      title: "Awards 2026 | Brit Fintech Awards 2025 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      url: `${siteBaseUrl}/awards-2025`,
      siteName,
      images: [
        { url: "/assets/img/og/awards.jpg", width: 1200, height: 630, alt: "Brit Fintech Awards 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Awards 2026 | Brit Fintech Awards 2025 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      images: ["/assets/img/og/awards.jpg"],
    },
  },
  "/judges": {
    title: "Judges | Brit Fintech Awards 2025 ",
    description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
    openGraph: {
      title: "Judges | Brit Fintech Awards 2025 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      url: `${siteBaseUrl}/judges`,
      siteName,
      images: [
        { url: "/assets/img/og/judges.jpg", width: 1200, height: 630, alt: "Judges" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Judges | Brit Fintech Awards 2025 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      images: ["/assets/img/og/judges.jpg"],
    },
  },
  "/our-sponsors": {
    title: "Our Sponsors | Brit Fintech Awards 2025 ",
    description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
    openGraph: {
      title: "Our Sponsors | Brit Fintech Awards 2025 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      url: `${siteBaseUrl}/our-sponsors`,
      siteName,
      images: [
        { url: "/assets/img/og/sponsors.jpg", width: 1200, height: 630, alt: "Judges" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Our Sponsors | Brit Fintech Awards 2025 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      images: ["/assets/img/og/sponsors.jpg"],
    },
  },
  "/sponsorship-categories": {
    title: "Sponsorship Categories | Brit Fintech Awards 2025 ",
    description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
    openGraph: {
      title: "Sponsorship Categories | Brit Fintech Awards 2025 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      url: `${siteBaseUrl}/sponsorship-categories`,
      siteName,
      images: [
        { url: "/assets/img/og/sponsor-categories.jpg", width: 1200, height: 630, alt: "Sponsorship Categories" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Sponsorship Categories | Brit Fintech Awards 2025 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      images: ["/assets/img/og/sponsor-categories.jpg"],
    },
  },
  "/photo-gallery-2025": {
    title: "Photo Gallery 2025 | Brit Fintech Awards 2025 ",
    description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
    openGraph: {
      title: "Photo Gallery 2025 | Brit Fintech Awards 2025 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      url: `${siteBaseUrl}/photo-gallery-2025`,
      siteName,
      images: [
        { url: "/assets/img/og/photo-gallery-2025.jpg", width: 1200, height: 630, alt: "Photo Gallery" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Photo Gallery 2025 | Brit Fintech Awards 2025 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      images: ["/assets/img/og/photo-gallery-2025.jpg"],
    },
  },
  "/video-gallery-2024": {
    title: "Video Gallery 2024 | Brit Fintech Awards 2024 ",
    description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
    openGraph: {
      title: "Video Gallery 2024 | Brit Fintech Awards 2024 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      url: `${siteBaseUrl}/video-gallery-2024`,
      siteName,
      images: [
        { url: "/assets/img/og/videgallery-2024.jpg", width: 1200, height: 630, alt: "Video Gallery" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Video Gallery 2024 | Brit Fintech Awards 2024 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      images: ["/assets/img/og/videgallery-2024.jpg"],
    },
  },
  "/award-winners-2025": {
    title: "Award Winners 2025 | Brit Fintech Awards 2025 ",
    description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
    openGraph: {
      title: "Award Winners 2025 | Brit Fintech Awards 2025 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      url: `${siteBaseUrl}/award-winners-2025`,
      siteName,
      images: [
        { url: "/assets/img/og/winners-2025.jpg", width: 1200, height: 630, alt: "Award Winners" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Award Winners 2025 | Brit Fintech Awards 2025 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      images: ["/assets/img/og/winners-2025.jpg"],
    },
  },
  "/award-winners-2024": {
    title: "Award Winners 2024 | Brit Fintech Awards 2024 ",
    description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
    openGraph: {
      title: "Award Winners 2024 | Brit Fintech Awards 2024 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      url: `${siteBaseUrl}/award-winners-2024`,
      siteName,
      images: [
        { url: "/assets/img/og/winners-2024.jpg", width: 1200, height: 630, alt: "Award Winners" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Award Winners 2024 | Brit Fintech Awards 2024 ",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      images: ["/assets/img/og/winners-2024.jpg"],
    },
  },











  //SPONSORS-2025

  "/mercury-sponsor-details-2025": {
    title: "Mercury Danati Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "Mercury Danati: London’s Trusted Currency Exchange Specialist",
    openGraph: {
      title: "Mercury Danati Sponsor Details 2025",
      description: "Mercury Danati: London’s Trusted Currency Exchange Specialist",
      url: `${siteBaseUrl}/mercury-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/Mercury-Danati-25.png", width: 1200, height: 630, alt: "Mercury Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Mercury Danati Sponsor Details 2025",
      description: "Mercury Danati: London’s Trusted Currency Exchange Specialist",
      images: ["/assets/img/sponsor-logo/Mercury-Danati-25.png"],
    },
  },
  "/fast-track-money-sponsor-details-2025": {
    title: "Fast Track Money Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "Empowering seamless money transfers across South Asia and beyond.",
    openGraph: {
      title: "Fast Track Money Sponsor Details 2025",
      description: "Empowering seamless money transfers across South Asia and beyond.",
      url: `${siteBaseUrl}/fast-track-money-sponsor-details-2025`,
      siteName,
      images: [
        { url: "assets/img/sponsor-logo/Fast-track-money-banner.png", width: 1200, height: 630, alt: "Fast Track Money Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Fast Track Money Sponsor Details 2025",
      description: "Empowering seamless money transfers across South Asia and beyond.",
      images: ["/assets/img/sponsor-logo/Fast-track-money-banner.png"],
    },
  },
  "/leatherback-sponsor-details-2025": {
    title: "Leatherback Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "Leatherback is a UK-based fintech company revolutionising global financial mobility through innovative cross-border payment solutions. Authorised by the Financial Conduct Authority (FCA) in the UK, the company provides end-to-end financial services to individuals and businesses worldwide.",
    openGraph: {
      title: "Leatherback Sponsor Details 2025",
      description: "Leatherback is a UK-based fintech company revolutionising global financial mobility through innovative cross-border payment solutions. Authorised by the Financial Conduct Authority (FCA) in the UK, the company provides end-to-end financial services to individuals and businesses worldwide.",
      url: `${siteBaseUrl}/leatherback-sponsor-details-2025`,
      siteName,
      images: [
        { url: "assets/img/sponsor-logo/leatherback-details.png", width: 1200, height: 630, alt: "Leatherback Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Leatherback Sponsor Details 2025",
      description: "Leatherback is a UK-based fintech company revolutionising global financial mobility through innovative cross-border payment solutions. Authorised by the Financial Conduct Authority (FCA) in the UK, the company provides end-to-end financial services to individuals and businesses worldwide.",
      images: ["assets/img/sponsor-logo/leatherback-details.png"],
    },
  },
  "/volume-pay-sponsor-details-2025": {
    title: "Volume Pay Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "Open banking pay-ins. Virtual IBANs. Local payouts. All in one place built to move money globally, faster and cheaper.",
    openGraph: {
      title: "Volume Pay Sponsor Details 2025",
      description: "Open banking pay-ins. Virtual IBANs. Local payouts. All in one place built to move money globally, faster and cheaper.",
      url: `${siteBaseUrl}/volume-pay-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/volume-details-2025.png", width: 1200, height: 630, alt: "Volume Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Volume Pay Sponsor Details 2025",
      description: "Open banking pay-ins. Virtual IBANs. Local payouts. All in one place built to move money globally, faster and cheaper.",
      images: ["/assets/img/sponsor-logo/volume-details-2025.png"],
    },
  },
  "/travel-cashier-details-2025": {
    title: "Travel Cashier Details 2025 | Brit FinTech Awards 2025",
    description: "Travel Cashier enhances your travel experience by offering superior Travel Money Solutions. Whether you’re a seasoned traveller or preparing for your dream vacation, Travel Cashier has everything you need!",
    openGraph: {
      title: "Travel Cashier Details 2025 | Brit FinTech Awards 2025",
      description: "Travel Cashier enhances your travel experience by offering superior Travel Money Solutions. Whether you’re a seasoned traveller or preparing for your dream vacation, Travel Cashier has everything you need!",
      url: `${siteBaseUrl}/travel-cashier-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/travel-cashier-details-2025.png", width: 1200, height: 630, alt: "Travel Cashier Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Travel Cashier Details 2025 | Brit FinTech Awards 2025",
      description: "Travel Cashier enhances your travel experience by offering superior Travel Money Solutions. Whether you’re a seasoned traveller or preparing for your dream vacation, Travel Cashier has everything you need!",
      images: ["/assets/img/sponsor-logo/travel-cashier-details-2025.png"],
    },
  },
  "/endoz-disbuz-sponsor-details-2025": {
    title: "Endoz Disbuz Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "Endoz is a proprietary Open Banking product, from Payceler, designed to transform how UK businesses collect and manage customer payments. By leveraging secure Open Banking APIs, it seamlessly connects with 50+ major UK financial institutions, offering a direct, secure, and cost-effective payment channel.",
    openGraph: {
      title: "Endoz Disbuz Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Endoz is a proprietary Open Banking product, from Payceler, designed to transform how UK businesses collect and manage customer payments. By leveraging secure Open Banking APIs, it seamlessly connects with 50+ major UK financial institutions, offering a direct, secure, and cost-effective payment channel.",
      url: `${siteBaseUrl}/endoz-disbuz-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/endoz-disbuz-banner-2025.png", width: 1200, height: 630, alt: "Endoz & Disbuz Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Endoz Disbuz Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Endoz is a proprietary Open Banking product, from Payceler, designed to transform how UK businesses collect and manage customer payments. By leveraging secure Open Banking APIs, it seamlessly connects with 50+ major UK financial institutions, offering a direct, secure, and cost-effective payment channel.",
      images: ["/assets/img/sponsor-logo/endoz-disbuz-banner-2025.png"],
    },
  },
  "/ecex-sponsor-details-2025": {
    title: "ECEX Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "ECEX — Currency Exchange, Effortless in Two Clicks.",
    openGraph: {
      title: "ECEX Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "ECEX — Currency Exchange, Effortless in Two Clicks.",
      url: `${siteBaseUrl}/ecex-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/ECEX-sponsor-banner.png", width: 1200, height: 630, alt: "ECEX Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "ECEX Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "ECEX — Currency Exchange, Effortless in Two Clicks.",
      images: ["/assets/img/sponsor-logo/ECEX-sponsor-banner.png"],
    },
  },
  "/leftover-currency-sponsor-details-2025": {
    title: "LeftOver Currency Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "Most people return from holiday with unused foreign currency that often gets forgotten. On average, British households have £65 worth of leftover currency. Leftover Currency specializes in exchanging these foreign coins, out-of-circulation banknotes, and obsolete currencies like German Marks and French Francs.",
    openGraph: {
      title: "LeftOver Currency Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Most people return from holiday with unused foreign currency that often gets forgotten. On average, British households have £65 worth of leftover currency. Leftover Currency specializes in exchanging these foreign coins, out-of-circulation banknotes, and obsolete currencies like German Marks and French Francs.",
      url: `${siteBaseUrl}/leftover-currency-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/Leftover-currency-banner.png.png", width: 1200, height: 630, alt: "LeftOver Currency Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "LeftOver Currency - Where forgotten currency finds new life. | BFA25",
      description: "Most people return from holiday with unused foreign currency that often gets forgotten. On average, British households have £65 worth of leftover currency. Leftover Currency specializes in exchanging these foreign coins, out-of-circulation banknotes, and obsolete currencies like German Marks and French Francs.",
      images: ["/assets/img/sponsor-logo/Leftover-currency-banner.png"],
    },
  },
  "/qfremit-sponsor-details-2025": {
    title: "QF Remit Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "QF Remit is a UK FCA-registered online money transfer platform that enables fast, secure, and transparent cross-border remittances. Unlike banks, it operates as a Money Service Business (MSB), focusing on seamless transfers without hidden charges.",
    openGraph: {
      title: "QF Remit Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "QF Remit is a UK FCA-registered online money transfer platform that enables fast, secure, and transparent cross-border remittances. Unlike banks, it operates as a Money Service Business (MSB), focusing on seamless transfers without hidden charges.",
      url: `${siteBaseUrl}/qfremit-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/qfremit-sponsor-website-banner.png", width: 1200, height: 630, alt: "QF Remit Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "QF Remit Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "QF Remit is a UK FCA-registered online money transfer platform that enables fast, secure, and transparent cross-border remittances. Unlike banks, it operates as a Money Service Business (MSB), focusing on seamless transfers without hidden charges.",
      images: ["/assets/img/sponsor-logo/qfremit-sponsor-website-banner.png"],
    },
  },

  "/lumine-solicitors-sponsor-details-2025": {
    title: "Lumine Solicitors Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "Lumine Solicitors - Clarity. Commitment. Results.",
    openGraph: {
      title: "Lumine Solicitors Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Lumine Solicitors - Clarity. Commitment. Results.",
      url: `${siteBaseUrl}/lumine-solicitors-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/Luminelaw-sponsor-website-banner.png", width: 1200, height: 630, alt: "QF Remit Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Lumine Solicitors Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Lumine Solicitors - Clarity. Commitment. Results.",
      images: ["/assets/img/sponsor-logo/Luminelaw-sponsor-website-banner.png"],
    },
  },
  "/clear-junction-sponsor-details-2025": {
    title: "Clear Junction Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "Clear Junction : Global provider of payment services to financial institutions",
    openGraph: {
      title: "Clear Junction Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Clear Junction : Global provider of payment services to financial institutions",
      url: `${siteBaseUrl}/clear-junction-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/clear-junction-banner-2025.png", width: 1200, height: 630, alt: "Clear Junction Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Clear Junction Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Clear Junction : Global provider of payment services to financial institutions",
      images: ["/assets/img/sponsor-logo/clear-junction-banner-2025.png"],
    },
  },
  "/ifepay-sponsor-details-2025": {
    title: "IFEPay Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "Ifepay Money Transfer - Fast. Secure. Reliable.",
    openGraph: {
      title: "IFEPay Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Ifepay Money Transfer - Fast. Secure. Reliable.",
      url: `${siteBaseUrl}/ifepay-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/IfePay-Strategic-Sponsor-Website-Banner.png", width: 1200, height: 630, alt: "IFEPay Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "IFEPay Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Ifepay Money Transfer - Fast. Secure. Reliable.",
      images: ["/assets/img/sponsor-logo/IfePay-Strategic-Sponsor-Website-Banner.png"],
    },
  },
  "/myremit-sponsor-details-2025": {
    title: "MyRemit Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "MyRemit - A Smarter Way to Send Money",
    openGraph: {
      title: "MyRemit Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "MyRemit Money Transfer - Fast. Secure. Reliable.",
      url: `${siteBaseUrl}/myremit-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/Myremit-sponsor-website-banner.png", width: 1200, height: 630, alt: "MyRemit Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "MyRemit Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "MyRemit Money Transfer - Fast. Secure. Reliable.",
      images: ["/assets/img/sponsor-logo/Myremit-sponsor-website-banner.png"],
    },
  },
  "/kmbal-sponsor-details-2025": {
    title: "KMBAL Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "Kmbal - Send Money, Send Love",
    openGraph: {
      title: "KMBAL Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "KMBAL Money Transfer - Fast. Secure. Reliable.",
      url: `${siteBaseUrl}/kmbal-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/kmbal-Sponsor-website-banner.png", width: 1200, height: 630, alt: "KMBAL Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "KMBAL Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "KMBAL Money Transfer - Send Money, Send Love",
      images: ["/assets/img/sponsor-logo/kmbal-Sponsor-website-banner.png"],
    },
  },
  "/red-sea-sponsor-details-2025": {
    title: "Red Sea Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "Red Sea - Send with Confidence, Receive with Ease.",
    openGraph: {
      title: "Red Sea Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Red Sea Money Transfer - Send with Confidence, Receive with Ease.",
      url: `${siteBaseUrl}/red-sea-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/red-sea-banner-2025.png", width: 1200, height: 630, alt: "Red Sea Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Red Sea Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Red Sea Money Transfer - Send with Confidence, Receive with Ease.",
      images: ["/assets/img/sponsor-logo/red-sea-banner-2025.png"],
    },
  },
  "/chrisborough-sponsor-details-2025": {
    title: "Chrisborough Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "Chrisborough - Instant Naira Payouts. Globally Connected.",
    openGraph: {
      title: "Chrisborough Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Chrisborough Money Transfer - Instant Naira Payouts. Globally Connected.",
      url: `${siteBaseUrl}/chrisborough-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/chrisborough-banner-2025.png", width: 1200, height: 630, alt: "Chrisborough Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Chrisborough Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Chrisborough Money Transfer - Instant Naira Payouts. Globally Connected.",
      images: ["/assets/img/sponsor-logo/chrisborough-banner-2025.png"],
    },
  },
  "/purse-baas-sponsor-details-2025": {
    title: "Purse BaaS Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "Purse BAAS - Your Gateway to Banking Innovation.",
    openGraph: {
      title: "Purse BaaS Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Purse BaaS Money Transfer - Your Gateway to Banking Innovation.",
      url: `${siteBaseUrl}/purse-baas-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/Purse-Baas-sponsor-banner.png", width: 1200, height: 630, alt: "Purse BaaS Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Purse BaaS Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Purse BaaS Money Transfer - Your Gateway to Banking Innovation.",
      images: ["/assets/img/sponsor-logo/Purse-Baas-sponsor-banner.png"],
    },
  },

  "/teeparam-exchange-details-2025": {
    title: "Teeparam Exchange Details 2025 | Brit FinTech Awards 2025",
    description: "Teeparam Exchange: Award-Winning Fintech Excellence",
    openGraph: {
      title: "Teeparam Exchange Details 2025 | Brit FinTech Awards 2025",
      description: "Teeparam Exchange Money Transfer - Your Gateway to Banking Innovation.",
      url: `${siteBaseUrl}/teeparam-exchange-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/Logostis-Teeparam-Banner.png", width: 1200, height: 630, alt: "Teeparam Exchange Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Teeparam Exchange Details 2025 | Brit FinTech Awards 2025",
      description: "Teeparam Exchange: Award-Winning Fintech Excellence",
      images: ["/assets/img/sponsor-logo/Logostis-Teeparam-Banner.png"],
    },
  },
  "/baazmoney-sponsor-details-2025": {
    title: "Baaz Money Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "Baaz Money - Smart. Simple. Secure.",
    openGraph: {
      title: "Baaz Money Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Baaz Money Money Transfer - Your Gateway to Banking Innovation.",
      url: `${siteBaseUrl}/baazmoney-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/baazmoney-sponsor-website-banner.png", width: 1200, height: 630, alt: "Baaz Money Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Baaz Money Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Baaz Money - Smart. Simple. Secure.",
      images: ["/assets/img/sponsor-logo/baazmoney-sponsor-website-banner.png"],
    },
  },
  "/finestpay-sponsor-details-2025": {
    title: "FinestPay Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "FinestPay - Fast. Secure. Borderless.",
    openGraph: {
      title: "FinestPay Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "FinestPay Money Transfer - Your Gateway to Banking Innovation.",
      url: `${siteBaseUrl}/finestpay-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/finestPay-sponsor-website-banner.png", width: 1200, height: 630, alt: "FinestPay Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "FinestPay Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "FinestPay - Fast. Secure. Borderless.",
      images: ["/assets/img/sponsor-logo/finestPay-sponsor-website-banner.png"],
    },
  },
  "/belyfted-sponsor-details-2025": {
    title: "Belyfted Sponsor Details 2025 | Brit FinTech Awards 2025",
    description: "Belyfted – Moving Money, Building Trust. Belyfted is an innovative UK-based fintech and remittance specialist on a mission to simplify global money movement. ",
    openGraph: {
      title: "Belyfted Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Belyfted Money Transfer - Your Gateway to Banking Innovation.",
      url: `${siteBaseUrl}/belyfted-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/Belyfted-sponsor-website-banner.png", width: 1200, height: 630, alt: "Belyfted Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Belyfted Sponsor Details 2025 | Brit FinTech Awards 2025",
      description: "Belyfted – Moving Money, Building Trust. Belyfted is an innovative UK-based fintech and remittance specialist on a mission to simplify global money movement. ",
      images: ["/assets/img/sponsor-logo/Belyfted-sponsor-website-banner.png"],
    },
  },





//WINNERS-2025
  "/award-winners-2025/volume-account2account-payment-processor-2025": {
    title: "Volume : Account 2 Account Payment Processor 2025 | Brit FinTech Awards 2025",
    description: "Volume : Account 2 Account Payment Processor 2025",
    openGraph: {
      title: "Volume : Account 2 Account Payment Processor 2025 | Brit FinTech Awards 2025",
      description: "Volume : Account 2 Account Payment Processor 2025",
      url: `${siteBaseUrl}/award-winners-2025/volume-account2account-payment-processor-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/Volume-winner25-banner.png", width: 1200, height: 630, alt: "Volume : Account 2 Account Payment Processor 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Volume : Account 2 Account Payment Processor 2025 | Brit FinTech Awards 2025",
      description: "Volume : Account 2 Account Payment Processor 2025",
      images: ["/assets/img/winners2025-logs-banner/Volume-winner25-banner.png"],
    },
  },
  "/award-winners-2025/fast-track-payment-innovator-2025": {
    title: "Fast Track Money : Payment Innovator of the Year 2025 | Brit FinTech Awards 2025",
    description: "Fast Track Money Transfer Limited, has emerged as a transformative force in the remittance and cross-border payments industry. Focused on redefining trust, transparency, and accessibility, Fast Track Money provides individuals and businesses with fast, affordable, and secure money transfer solutions across global corridors. With a particular emphasis on South Asia, Africa, and other emerging markets, the platform is bridging financial gaps and driving financial inclusion for underserved communities.",
    openGraph: {
      title: "Fast Track Money : Payment Innovator of the Year 2025 | Brit FinTech Awards 2025",
      description: "Fast Track Money Transfer Limited, has emerged as a transformative force in the remittance and cross-border payments industry. Focused on redefining trust, transparency, and accessibility, Fast Track Money provides individuals and businesses with fast, affordable, and secure money transfer solutions across global corridors. With a particular emphasis on South Asia, Africa, and other emerging markets, the platform is bridging financial gaps and driving financial inclusion for underserved communities.",
      url: `${siteBaseUrl}/award-winners-2025/fast-track-payment-innovator-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/FastTrack-winner25-banner.png", width: 1200, height: 630, alt: "Fast Track Money : Payment Innovator of the Year 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Fast Track Money : Payment Innovator of the Year 2025 | Brit FinTech Awards 2025",
      description: "Fast Track Money Transfer Limited, has emerged as a transformative force in the remittance and cross-border payments industry. Focused on redefining trust, transparency, and accessibility, Fast Track Money provides individuals and businesses with fast, affordable, and secure money transfer solutions across global corridors. With a particular emphasis on South Asia, Africa, and other emerging markets, the platform is bridging financial gaps and driving financial inclusion for underserved communities.",
      images: ["/assets/img/winners2025-logs-banner/FastTrack-winner25-banner.png"],
    },
  },
  "/award-winners-2025/disbuz-pay-out-innovator-2025": {
    title: "Disbuz : Pay-Out Innovator 2025 | Brit FinTech Awards 2025",
    description: "Disbuz is a cutting-edge multi-gateway payout platform built to power instant Naira disbursements in Nigeria. Purpose-built for remittance companies, employers, financial institutions, and digital marketplaces, Disbuz offers a reliable, scalable, and fully compliant solution to move money securely and efficiently. By addressing the unique challenges of Nigeria’s payout ecosystem, Disbuz has established itself as a trusted partner for high-volume, time-sensitive financial transactions.",
    openGraph: {
      title: "Disbuz : Pay-Out Innovator 2025 | Brit FinTech Awards 2025",
      description: "Disbuz is a cutting-edge multi-gateway payout platform built to power instant Naira disbursements in Nigeria. Purpose-built for remittance companies, employers, financial institutions, and digital marketplaces, Disbuz offers a reliable, scalable, and fully compliant solution to move money securely and efficiently. By addressing the unique challenges of Nigeria’s payout ecosystem, Disbuz has established itself as a trusted partner for high-volume, time-sensitive financial transactions.",
      url: `${siteBaseUrl}/award-winners-2025/disbuz-pay-out-innovator-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/Disbuz-winner25-banner.png", width: 1200, height: 630, alt: "Disbuz : Pay-Out Innovator 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Disbuz : Pay-Out Innovator 2025 | Brit FinTech Awards 2025",
      description: "Disbuz is a cutting-edge multi-gateway payout platform built to power instant Naira disbursements in Nigeria. Purpose-built for remittance companies, employers, financial institutions, and digital marketplaces, Disbuz offers a reliable, scalable, and fully compliant solution to move money securely and efficiently. By addressing the unique challenges of Nigeria’s payout ecosystem, Disbuz has established itself as a trusted partner for high-volume, time-sensitive financial transactions.",
      images: ["/assets/img/winners2025-logs-banner/Disbuz-winner25-banner.png"],
    },
  },
  "/award-winners-2025/Leatherback-B-A-A-S-innovator-2025": {
    title: "Leatherback : B-A-A-S Innovator 2025 | Brit FinTech Awards 2025",
    description: "Leatherback was founded with a bold mission: to remove the financial barriers that prevent businesses from operating globally. As a Banking-as-a-Service (BaaS) platform, Leatherback provides Money Transfer Operators (MTOs), Payment Service Providers (PSPs), Money Service Businesses (MSBs), and SMEs with seamless access to world-class cross-border infrastructure. From multi-currency accounts to instant FX and global payout networks, Leatherback enables businesses to scale without the friction, delays, and costs associated with traditional banking.",
    openGraph: {
      title: "Leatherback : B-A-A-S Innovator 2025 | Brit FinTech Awards 2025",
      description: "Leatherback was founded with a bold mission: to remove the financial barriers that prevent businesses from operating globally. ",
      url: `${siteBaseUrl}/award-winners-2025/Leatherback-B-A-A-S-innovator-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/Leatherback-winner25-banner.png", width: 1200, height: 630, alt: "Leatherback : B-A-A-S Innovator 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Leatherback : B-A-A-S Innovator 2025 | Brit FinTech Awards 2025",
      description: "Leatherback was founded with a bold mission: to remove the financial barriers that prevent businesses from operating globally. ",
      images: ["/assets/img/winners2025-logs-banner/Leatherback-winner25-banner.png"],
    },
  },
  "/award-winners-2025/ifepay-startup-of-the-year-2025": {
    title: "Ifepay : Startup of the year 2025 | Brit FinTech Awards 2025",
    description: "IFEPay is a fast-growing fintech startup delivering secure, compliant, and efficient cross-border payment solutions. ",
    openGraph: {
      title: "Ifepay : Startup of the year 2025 | Brit FinTech Awards 2025",
      description: "IFEPay is a fast-growing fintech startup delivering secure, compliant, and efficient cross-border payment solutions. ",
      url: `${siteBaseUrl}/award-winners-2025/ifepay-startup-of-the-year-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/Ifepay-winner25-banner.png", width: 1200, height: 630, alt: "Ifepay : Startup of the year 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Ifepay : Startup of the year 2025 | Brit FinTech Awards 2025",
      description: "IFEPay is a fast-growing fintech startup delivering secure, compliant, and efficient cross-border payment solutions. ",
      images: ["/assets/img/winners2025-logs-banner/Ifepay-winner25-banner.png"],
    },
  },
  "/award-winners-2025/alona-shevtsova-woman-entrepreneur-in-finTech-2025": {
    title: "Alona Shevtsova (Sends): Woman Entrepreneur in FinTech 2025 | Brit FinTech Awards 2025",
    description: "Pioneered Sends as a multi-currency platform delivering fast, secure transactions and competitive exchange solutions. ",
    openGraph: {
      title: "Alona Shevtsova (Sends): Woman Entrepreneur in FinTech 2025 | Brit FinTech Awards 2025",
      description: "Pioneered Sends as a multi-currency platform delivering fast, secure transactions and competitive exchange solutions. ",
      url: `${siteBaseUrl}/award-winners-2025/alona-shevtsova-woman-entrepreneur-in-finTech-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/Sends-winner25-banner.png", width: 1200, height: 630, alt: "Alona Shevtsova (Sends): Woman Entrepreneur in FinTech 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Alona Shevtsova (Sends): Woman Entrepreneur in FinTech 2025 | Brit FinTech Awards 2025",
      description: "Pioneered Sends as a multi-currency platform delivering fast, secure transactions and competitive exchange solutions. ",
      images: ["/assets/img/winners2025-logs-banner/Sends-winner25-banner.png"],
    },
  },
  "/award-winners-2025/sumsub-anti-fraud-innovator-2025": {
    title: "Sumsub : Anti-Fraud Innovator 2025 | Brit FinTech Awards 2025",
    description: "Sumsub is a leading full-cycle verification platform that enables fraud-free, scalable compliance for businesses across the globe. Serving over 4,000 clients—including Bitpanda, Wirex, Vodafone, Duolingo, and TransferGo—Sumsub combines identity verification, business verification, and ongoing monitoring in a single, adaptive platform.",
    openGraph: {
      title: "Sumsub : Anti-Fraud Innovator 2025 | Brit FinTech Awards 2025",
      description: "Sumsub is a leading full-cycle verification platform that enables fraud-free, scalable compliance for businesses across the globe. Serving over 4,000 clients—including Bitpanda, Wirex, Vodafone, Duolingo, and TransferGo—Sumsub combines identity verification, business verification, and ongoing monitoring in a single, adaptive platform.",
      url: `${siteBaseUrl}/award-winners-2025/sumsub-anti-fraud-innovator-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/Sumsub-winner25-banner.png", width: 1200, height: 630, alt: "Sumsub : Anti-Fraud Innovator 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Sumsub : Anti-Fraud Innovator 2025 | Brit FinTech Awards 2025",
      description: "Sumsub is a leading full-cycle verification platform that enables fraud-free, scalable compliance for businesses across the globe. Serving over 4,000 clients—including Bitpanda, Wirex, Vodafone, Duolingo, and TransferGo—Sumsub combines identity verification, business verification, and ongoing monitoring in a single, adaptive platform.",
      images: ["/assets/img/winners2025-logs-banner/Sumsub-winner25-banner.png"],
    },
  },
  "/award-winners-2025/shufti-pro-id-verification-innovator-2025": {
    title: "Shufti Pro : ID Verification Innovator 2025 | Brit FinTech Awards 2025",
    description: "Shufti is a leading AI-powered identity verification platform that enables businesses to meet KYC, AML, and fraud prevention requirements with speed and accuracy. ",
    openGraph: {
      title: "Shufti Pro : ID Verification Innovator 2025 | Brit FinTech Awards 2025",
      description: "Shufti is a leading AI-powered identity verification platform that enables businesses to meet KYC, AML, and fraud prevention requirements with speed and accuracy. ",
      url: `${siteBaseUrl}/award-winners-2025/shufti-pro-id-verification-innovator-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/shufti-winner25-banner.png", width: 1200, height: 630, alt: "Shufti Pro : ID Verification Innovator 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Shufti Pro : ID Verification Innovator 2025 | Brit FinTech Awards 2025",
      description: "Shufti is a leading AI-powered identity verification platform that enables businesses to meet KYC, AML, and fraud prevention requirements with speed and accuracy. ",
      images: ["/assets/img/winners2025-logs-banner/shufti-winner25-banner.png"],
    },
  },
  "/award-winners-2025/kani-payments-finTech-of-the-year-2025": {
    title: "Kani Payments : FinTech of the year 2025 | Brit FinTech Awards 2025",
    description: "Kani Payments is an award-winning SaaS platform transforming financial data management for fintech and payment companies. ",
    openGraph: {
      title: "Kani Payments : FinTech of the year 2025 | Brit FinTech Awards 2025",
      description: "Kani Payments is an award-winning SaaS platform transforming financial data management for fintech and payment companies. ",
      url: `${siteBaseUrl}/award-winners-2025/kani-payments-finTech-of-the-year-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/kani-winner25-banner.png", width: 1200, height: 630, alt: "Kani Payments : FinTech of the year 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Kani Payments : FinTech of the year 2025 | Brit FinTech Awards 2025",
      description: "Kani Payments is an award-winning SaaS platform transforming financial data management for fintech and payment companies. ",
      images: ["/assets/img/winners2025-logs-banner/kani-winner25-banner.png"],
    },
  },

  //WINNER-2025-MSB
  "/award-winners-2025/kmbal-compliance-innovator-of-the-year-2025": {
    title: "KMBAL Ltd: Compliance Innovator of the Year 2025 | Brit FinTech Awards 2025",
    description: "KMBAL Ltd is a trailblazer in regulatory innovation within the remittance and cross-border financial services sector. By combining advanced technology, risk management, and customer-centric governance, KMBAL simplifies compliance while maintaining the highest standards of security, trust, and transparency. ",
    openGraph: {
      title: "KMBAL Ltd: Compliance Innovator of the Year 2025 | Brit FinTech Awards 2025",
      description: "KMBAL Ltd is a trailblazer in regulatory innovation within the remittance and cross-border financial services sector. By combining advanced technology, risk management, and customer-centric governance, KMBAL simplifies compliance while maintaining the highest standards of security, trust, and transparency. ",
      url: `${siteBaseUrl}/award-winners-2025/kmbal-compliance-innovator-of-the-year-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/Kmbal-winner25-banner.png", width: 1200, height: 630, alt: "KMBAL Ltd: Compliance Innovator of the Year 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "KMBAL Ltd: Compliance Innovator of the Year 2025 | Brit FinTech Awards 2025",
      description: "KMBAL Ltd is a trailblazer in regulatory innovation within the remittance and cross-border financial services sector. By combining advanced technology, risk management, and customer-centric governance, KMBAL simplifies compliance while maintaining the highest standards of security, trust, and transparency. ",
      images: ["/assets/img/winners2025-logs-banner/Kmbal-winner25-banner.png"],
    },
  },
  "/award-winners-2025/myremit-best-in-customer-service-msb-2025": {
    title: "MyRemit : Best in Customer Service MSB 2025 | Brit FinTech Awards 2025",
    description: "MyRemit is a fully digital, non-cash-based remittance platform empowering UK-based individuals to send money securely and efficiently.",
    openGraph: {
      title: "MyRemit : Best in Customer Service MSB 2025 | Brit FinTech Awards 2025",
      description: "MyRemit is a fully digital, non-cash-based remittance platform empowering UK-based individuals to send money securely and efficiently.",
      url: `${siteBaseUrl}/award-winners-2025/myremit-best-in-customer-service-msb-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/Myremit-winner25-banner.png", width: 1200, height: 630, alt: "MyRemit : Best in Customer Service MSB 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "MyRemit : Best in Customer Service MSB 2025 | Brit FinTech Awards 2025",
      description: "MyRemit is a fully digital, non-cash-based remittance platform empowering UK-based individuals to send money securely and efficiently.",
      images: ["/assets/img/winners2025-logs-banner/Myremit-winner25-banner.png"],
    },
  },
  "/award-winners-2025/belyfted-remittance-innovator-msb-2025": {
    title: "Belyfted: Remittance Innovator MSB 2025 | Brit FinTech Awards 2025",
    description: "Belyfted is a digital-first remittance platform delivering fast, secure, and affordable cross-border money transfers across Africa and beyond.",
    openGraph: {
      title: "Belyfted: Remittance Innovator MSB 2025 | Brit FinTech Awards 2025",
      description: "Belyfted is a digital-first remittance platform delivering fast, secure, and affordable cross-border money transfers across Africa and beyond.",
      url: `${siteBaseUrl}/award-winners-2025/belyfted-remittance-innovator-msb-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/Belyfted-winner25-banner.png", width: 1200, height: 630, alt: "Belyfted: Remittance Innovator MSB 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Belyfted: Remittance Innovator MSB 2025 | Brit FinTech Awards 2025",
      description: "Belyfted is a digital-first remittance platform delivering fast, secure, and affordable cross-border money transfers across Africa and beyond.",
      images: ["/assets/img/winners2025-logs-banner/Belyfted-winner25-banner.png"],
    },
  },
  "/award-winners-2025/travel-cashier-ltd-money-exchanger-msb-of-the-year-2025": {
    title: "Travel Cashier Ltd: Money Exchanger MSB of the Year 2025 | Brit FinTech Awards 2025",
    description: "Travel Cashier Ltd is a leading money exchange platform providing fast, secure, and transparent currency conversion services. Serving travelers across the globe, Travel Cashier supports multiple international currencies, offering competitive rates with no hidden fees.",
    openGraph: {
      title: "Travel Cashier Ltd: Money Exchanger MSB of the Year 2025 | Brit FinTech Awards 2025",
      description: "Travel Cashier Ltd is a leading money exchange platform providing fast, secure, and transparent currency conversion services. Serving travelers across the globe, Travel Cashier supports multiple international currencies, offering competitive rates with no hidden fees.",
      url: `${siteBaseUrl}/award-winners-2025/travel-cashier-ltd-money-exchanger-msb-of-the-year-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/TravleCashier-winner25-banner.png", width: 1200, height: 630, alt: "Travel Cashier Ltd: Money Exchanger MSB of the Year 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Travel Cashier Ltd: Money Exchanger MSB of the Year 2025 | Brit FinTech Awards 2025",
      description: "Travel Cashier Ltd is a leading money exchange platform providing fast, secure, and transparent currency conversion services. Serving travelers across the globe, Travel Cashier supports multiple international currencies, offering competitive rates with no hidden fees.",
      images: ["/assets/img/winners2025-logs-banner/TravleCashier-winner25-banner.png"],
    },
  },
 
  "/award-winners-2025/leftover-msb-disruptor-of-the-year-2025": {
    title: "Leftover Currency: MSB Disruptor of the year 2025 | Brit FinTech Awards 2025",
    description: "Leftover Currency is a pioneering digital platform that transforms otherwise unusable foreign coins and banknotes into real value. ",
    openGraph: {
      title: "Leftover Currency: MSB Disruptor of the year 2025 | Brit FinTech Awards 2025",
      description: "Leftover Currency is a pioneering digital platform that transforms otherwise unusable foreign coins and banknotes into real value. ",
      url: `${siteBaseUrl}/award-winners-2025/leftover-msb-disruptor-of-the-year-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/Leftover-winner25-banner.png", width: 1200, height: 630, alt: "Leftover Currency: MSB Disruptor of the year 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Leftover Currency: MSB Disruptor of the year 2025 | Brit FinTech Awards 2025",
      description: "Leftover Currency is a pioneering digital platform that transforms otherwise unusable foreign coins and banknotes into real value. ",
      images: ["/assets/img/winners2025-logs-banner/Leftover-winner25-banner.png"],
    },
  },
 
  "/award-winners-2025/mercury-danati-ltd-msb-store-of-the-year-2025": {
    title: "Mercury Danati Ltd: MSB Store of the Year 2025 | Brit FinTech Awards 2025",
    description: "MERCURY DANATI LTD has established itself as a trusted, customer-first money service business, redefining expectations in the currency exchange sector. ",
    openGraph: {
      title: "Mercury Danati Ltd: MSB Store of the Year 2025 | Brit FinTech Awards 2025",
      description: "MERCURY DANATI LTD has established itself as a trusted, customer-first money service business, redefining expectations in the currency exchange sector. ",
      url: `${siteBaseUrl}/award-winners-2025/mercury-danati-ltd-msb-store-of-the-year-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/Murcurydanati-winner25-banner.png", width: 1200, height: 630, alt: "Mercury Danati Ltd: MSB Store of the Year 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Mercury Danati Ltd: MSB Store of the Year 2025 | Brit FinTech Awards 2025",
      description: "MERCURY DANATI LTD has established itself as a trusted, customer-first money service business, redefining expectations in the currency exchange sector. ",
      images: ["/assets/img/winners2025-logs-banner/Murcurydanati-winner25-banner.png"],
    },
  },
 
  "/award-winners-2025/red-sea-money-transfer-msb-app-of-the-year-2025": {
    title: "Red Sea Money Transfer: MSB App of the year 2025 | Brit FinTech Awards 2025",
    description: "RedSea Money Transfer is a seamless, secure, and user-friendly platform that revolutionizes international money transfers. ",
    openGraph: {
      title: "Red Sea Money Transfer: MSB App of the year 2025 | Brit FinTech Awards 2025",
      description: "RedSea Money Transfer is a seamless, secure, and user-friendly platform that revolutionizes international money transfers. ",
      url: `${siteBaseUrl}/award-winners-2025/red-sea-money-transfer-msb-app-of-the-year-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/RedSea-winner25-banner.png", width: 1200, height: 630, alt: "Red Sea Money Transfer: MSB App of the year 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Red Sea Money Transfer: MSB App of the year 2025 | Brit FinTech Awards 2025",
      description: "RedSea Money Transfer is a seamless, secure, and user-friendly platform that revolutionizes international money transfers. ",
      images: ["/assets/img/winners2025-logs-banner/RedSea-winner25-banner.png"],
    },
  },
  "/award-winners-2025/teeparam-exchange-ltd-msb-of-the-year-2025": {
    title: "Teeparam Exchange Ltd: MSB of the Year 2025 | Brit FinTech Awards 2025",
    description: "Teeparam Exchange exemplifies fintech excellence, empowering individuals and businesses across the UK with trusted global remittance and innovative financial services. ",
    openGraph: {
      title: "Teeparam Exchange Ltd: MSB of the year 2025 | Brit FinTech Awards 2025",
      description: "Teeparam Exchange exemplifies fintech excellence, empowering individuals and businesses across the UK with trusted global remittance and innovative financial services. ",
      url: `${siteBaseUrl}/award-winners-2025/teeparam-exchange-ltd-msb-of-the-year-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/Teeparam-winner25-banner.png", width: 1200, height: 630, alt: "Teeparam Exchange Ltd: MSB of the year 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Teeparam Exchange Ltd: MSB of the year 2025 | Brit FinTech Awards 2025",
      description: "Teeparam Exchange exemplifies fintech excellence, empowering individuals and businesses across the UK with trusted global remittance and innovative financial services. ",
      images: ["/assets/img/winners2025-logs-banner/Teeparam-winner25-banner.png"],
    },
  },
 
  "/award-winners-2025/teeparam-exchange-ltd-msb-of-the-year-2025": {
    title: "Teeparam Exchange Ltd: MSB of the Year 2025 | Brit FinTech Awards 2025",
    description: "Teeparam Exchange exemplifies fintech excellence, empowering individuals and businesses across the UK with trusted global remittance and innovative financial services. ",
    openGraph: {
      title: "Teeparam Exchange Ltd: MSB of the year 2025 | Brit FinTech Awards 2025",
      description: "Teeparam Exchange exemplifies fintech excellence, empowering individuals and businesses across the UK with trusted global remittance and innovative financial services. ",
      url: `${siteBaseUrl}/award-winners-2025/teeparam-exchange-ltd-msb-of-the-year-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/Teeparam-winner25-banner.png", width: 1200, height: 630, alt: "Teeparam Exchange Ltd: MSB of the year 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Teeparam Exchange Ltd: MSB of the year 2025 | Brit FinTech Awards 2025",
      description: "Teeparam Exchange exemplifies fintech excellence, empowering individuals and businesses across the UK with trusted global remittance and innovative financial services. ",
      images: ["/assets/img/winners2025-logs-banner/Teeparam-winner25-banner.png"],
    },
  },

  //WINNERS-2025-GLOBAL
  "/award-winners-2025/chrisborough-fintech-of-the-year-2025": {
    title: "Chrisborough Solutions Limited : Fintech of the Year 2025 Global | Brit FinTech Awards 2025",
    description: "Chrisborough Solutions Limited is a trailblazer in global fintech innovation, providing compliant and reliable payout solutions for international remittance providers. ",
    openGraph: {
      title: "Chrisborough Solutions Limited : Fintech of the Year 2025 Global | Brit FinTech Awards 2025",
      description: "Chrisborough Solutions Limited is a trailblazer in global fintech innovation, providing compliant and reliable payout solutions for international remittance providers. ",
      url: `${siteBaseUrl}/award-winners-2025/chrisborough-fintech-of-the-year-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/Chrisborough-winner25-banner.png", width: 1200, height: 630, alt: "Chrisborough Solutions Limited : Fintech of the Year 2025 Global" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Chrisborough Solutions Limited : Fintech of the Year 2025 Global | Brit FinTech Awards 2025",
      description: "Chrisborough Solutions Limited is a trailblazer in global fintech innovation, providing compliant and reliable payout solutions for international remittance providers. ",
      images: ["/assets/img/winners2025-logs-banner/Chrisborough-winner25-banner.png"],
    },
  },
  "/award-winners-2025/ayoremit-msb-of-the-year-2025": {
    title: "AYOREMIT AU PTY LTD: MSB of the Year 2025 Global | Brit FinTech Awards 2025",
    description: "AYORemit AU Pty Ltd has emerged as a global leader in money services, offering fast, secure, and affordable remittance solutions across more than 150 countries. ",
    openGraph: {
      title: "AYOREMIT AU PTY LTD: MSB of the Year 2025 Global | Brit FinTech Awards 2025",
      description: "AYORemit AU Pty Ltd has emerged as a global leader in money services, offering fast, secure, and affordable remittance solutions across more than 150 countries. ",
      url: `${siteBaseUrl}/award-winners-2025/ayoremit-msb-of-the-year-2025`,
      siteName,
      images: [
        { url: "/assets/img/winners2025-logs-banner/AYORemit-winner25-banner.png", width: 1200, height: 630, alt: "AYORemit AU Pty Ltd: MSB of the Year 2025 Global" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "AYORemit AU Pty Ltd: MSB of the Year 2025 Global | Brit FinTech Awards 2025",
      description: "AYORemit AU Pty Ltd has emerged as a global leader in money services, offering fast, secure, and affordable remittance solutions across more than 150 countries. ",
      images: ["/assets/img/winners2025-logs-banner/AYORemit-winner25-banner.png"],
    },  
  },








  
};

function selectOgImage(path) {
  const last = path.split("/").filter(Boolean).pop()?.toLowerCase() || "home";
  if (last.includes("about")) return "/assets/img/og/about.jpg";
  if (last.includes("contact")) return "/assets/img/og/contact.jpg";
  if (last.includes("register")) return "/assets/img/og/register.jpg";
  if (last.includes("blog") || path.includes("/blogs")) return "/assets/img/blogs/fintech-in-the-uk.jpg";
  if (path.toLowerCase().includes("award")) return "/assets/img/aword-demo.png";
  if (path.toLowerCase().includes("sponsor")) return "/assets/img/event-conference/sponsor_bg.jpg";
  if (path.toLowerCase().includes("judges")) return "/assets/img/event-conference/bfa-jurry1.png";
  if (path.toLowerCase().includes("gallery")) return "/assets/img/gallery2025/venue/13.webp";
  return "/assets/img/og/home.jpg";
}

function inferFromSlug(path) {
  const last = path.split("/").filter(Boolean).pop() || "home";
  const titleCase = last
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const title = `${titleCase} | ${siteName}`;
  const image = selectOgImage(path);
  return {
    title,
    description: defaultSeo.description,
    openGraph: {
      title,
      description: defaultSeo.description,
      url: `${siteBaseUrl}${path}`,
      siteName,
      images: [
        { url: image, width: 1200, height: 630, alt: title }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: defaultSeo.description,
      images: [image],
    },
  };
}

export function getSeoForPath(path) {
  const normalized = String(path || "/").toLowerCase();
  return seoByPath[normalized] || inferFromSlug(path) || defaultSeo;
}

// Map central SEO to next-seo props (DefaultSeo/NextSeo)
function toNextSeoProps(seo) {
  const twitterImage = Array.isArray(seo?.twitter?.images) ? seo.twitter.images[0] : undefined;
  const ogImage = Array.isArray(seo?.openGraph?.images) ? seo.openGraph.images[0] : undefined;

  const additionalMetaTags = [];
  if (seo?.twitter?.title) additionalMetaTags.push({ name: "twitter:title", content: seo.twitter.title });
  if (seo?.twitter?.description) additionalMetaTags.push({ name: "twitter:description", content: seo.twitter.description });
  if (twitterImage) additionalMetaTags.push({ name: "twitter:image", content: toAbsoluteUrl(twitterImage) });

  return {
    title: seo.title,
    description: seo.description,
    canonical: seo.openGraph?.url,
    openGraph: {
      ...seo.openGraph,
      images: seo.openGraph?.images?.map(img => ({
        ...img,
        url: toAbsoluteUrl(img.url)
      })) || []
    },
    twitter: {
      cardType: seo.twitter?.card || "summary_large_image",
      site: seo.twitter?.site || "@BritFintech",
    },
    additionalMetaTags,
  };
}

export function getDefaultNextSeo() {
  return toNextSeoProps(defaultSeo);
}

export function getNextSeoForPath(path) {
  const seo = getSeoForPath(path);
  return toNextSeoProps(seo);
}
