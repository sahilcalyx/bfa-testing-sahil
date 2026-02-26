import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const PricingBFA = () => {
  const [expanded, setExpanded] = useState({
    platinum: false,
    gold: false,
    silver: false,
  });

  const toggleExpand = (plan) => {
    setExpanded((prev) => ({ ...prev, [plan]: !prev[plan] }));
  };

  return (
    <>
      {/* =================== STYLE =================== */}
      <style>{`
        .bfa-section {
          padding: 60px 20px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 35px;
          flex-wrap: wrap;
          background: none;
        }

        .bfa-card {
          background: #ffffff;
          width: 360px;
          border-radius: 20px;
          padding: 30px 28px;
          transition: 0.3s ease;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
          border: 1px solid #eee;
        }

        .bfa-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.20);
        }

        .bfa-header {
          text-align: center;
          padding-bottom: 18px;
        }

        .bfa-title {
          font-size: 30px;
          font-weight: 800;
          color: #680014;
          margin-bottom: 4px;
        }

        .bfa-subtitle {
          font-size: 15px;
          letter-spacing: 1px;
          color: #c8102e;
          font-weight: 700;
        }

        .category-title {
          font-size: 17px;
          font-weight: 700;
          margin-top: 22px;
          color: #680014;
          border-left: 4px solid #c8102e;
          padding-left: 10px;
        }

        .bfa-features {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .bfa-feature {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 15px;
          color: #171516;
          line-height: 1.4;
        }

        .tick { color: #c8102e; margin-top: 3px; }
        .cross { color: #999; margin-top: 3px; }

        .newsletter-number {
          background: #c8102e;
          color: #fff;
          padding: 2px 8px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          margin-top: 3px;
        }

        .feature-title { font-weight: 700; }

        .feature-desc {
          font-size: 13px;
          color: #444;
          margin-top: 3px;
        }

        .load-btn {
          margin-top: 22px;
          background: transparent;
          border: 2px solid #c8102e;
          color: #c8102e;
          padding: 9px 14px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          width: 100%;
          transition: 0.3s ease;
        }

        .load-btn:hover {
          background: #c8102e;
          color: #fff;
        }

        .bfa-btn {
          margin-top: 20px;
          width: 100%;
          background: #c8102e;
          border: none;
          color: #fff;
          padding: 14px;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
          transition: .2s ease;
        }

        .bfa-btn:hover { background: #680014; }

        .platinum { border-top: 10px solid #c8102e; }
        .gold { border-top: 10px solid #680014; }
        .silver { border-top: 10px solid #777; }

        @media (max-width: 768px) {
          .bfa-card { width: 100%; max-width: 390px; }
        }
      `}</style>

      {/* =================== CONTENT =================== */}
      <div className="bfa-section">

        <PricingCard
          plan="platinum"
          title="Platinum"
          subtitle="Premium Partner"
          borderClass="platinum"
          expanded={expanded.platinum}
          toggleExpand={toggleExpand}
          features={platinumFeatures}
        />

        <PricingCard
          plan="gold"
          title="Gold"
          subtitle="Featured Partner"
          borderClass="gold"
          expanded={expanded.gold}
          toggleExpand={toggleExpand}
          features={goldFeatures}
        />

        <PricingCard
          plan="silver"
          title="Silver"
          subtitle="Associate Partner"
          borderClass="silver"
          expanded={expanded.silver}
          toggleExpand={toggleExpand}
          features={silverFeatures}
        />

      </div>
    </>
  );
};

const PricingCard = ({ plan, title, subtitle, borderClass, expanded, toggleExpand, features }) => {
  const categories = Object.keys(features);
  const shownCategories = expanded ? categories : [categories[0]];

  return (
    <div className={`bfa-card ${borderClass}`}>
      <div className="bfa-header">
        <div className="bfa-title">{title}</div>
        <div className="bfa-subtitle">{subtitle}</div>
      </div>

      {shownCategories.map((cat) => (
        <div key={cat}>
          <div className="category-title">{cat}</div>
          <div className="bfa-features">
            {features[cat].map((item, i) => (
              <Feature key={i} {...item} />
            ))}
          </div>
        </div>
      ))}

      <button className="load-btn" onClick={() => toggleExpand(plan)}>
        {expanded ? "Show Less" : "Load More"}
      </button>

      <button className="bfa-btn">Choose {title}</button>
    </div>
  );
};

const Feature = ({ title, description, available, number }) => (
  <div className="bfa-feature">
    {number ? (
      <div className="newsletter-number">{number}</div>
    ) : available ? (
      <FaCheck className="tick" />
    ) : (
      <FaTimes className="cross" />
    )}

    <div>
      <div className="feature-title">{title}</div>
      {description && <div className="feature-desc">{description}</div>}
    </div>
  </div>
);



// ==========================================================
// ===============  ALL FEATURES — FINAL VERSION =============
// ==========================================================


// ⭐ PLATINUM — ALL ✔ INCLUDED
const platinumFeatures = {
  "Digital Branding": [
    {
      title: "Website Presence",
      description:
        "Logo on the event website with your service information in 700 words with images",
      available: true,
    },
    {
      title: "Video Branding",
      description: "Inclusion of your logo in all the BFA event-related videos",
      available: true,
    },
    {
      title: "Email Branding",
      description:
        "Featuring your logo in all newsletters sent to 2,000+ business contacts",
      available: true,
    },
    {
      title: "Social Media Posts",
      description:
        "6 Social media promotions including 4 paid ad posts with reach 5,000 - 20,000",
      available: true,
    },
    {
      title: "Newsletter",
      description: "Newsletters sent to 2,000+ business contacts",
      number: 5,
    },
  ],

  "Print Media Branding": [
    {
      title: "Magazine Feature",
      description: "Feature in the Fintech magazine column",
      available: true,
    },
    {
      title: "Signage Branding",
      description: "Banners and posters for maximum exposure",
      available: true,
    },
    {
      title: "Print Loop Messages",
      description: "Featuring your logo and messages at regular intervals",
      available: true,
    },
    {
      title: "Event Schedule",
      description: "Logo on digital & printed event schedule",
      available: true,
    },
    {
      title: "Registration Badge",
      description: "Logo on attendee badge",
      available: true,
    },
    {
      title: "Registration Lanyard",
      description: "Logo on lanyard",
      available: true,
    },
    {
      title: "Notepad Branding",
      description: "Logo featured on event notepads",
      available: true,
    },
    {
      title: "Return Gift ThankYou Note",
      description: "Logo in the ThankYou note of the return gift",
      available: true,
    },
    {
      title: "Customised Souvenir",
      available: true,
    },
  ],

  "Award Nomination": [
    { title: "Award Nomination", available: true },
    { title: "award nomination", available: true },
  ],

  "Lead Generation": [
    { title: "Leads", available: true },
    { title: "Leads", available: true },
  ],

  "Awards Night Branding": [
    { title: "Headline", available: true },
    { title: "Headline", available: true },
    {
      title: "Exhibit Space",
      description: "One exhibit space (1st preference)",
      available: true,
    },
    {
      title: "Award Sponsorship",
      description: "Opportunity to sponsor one Award of your choice",
      available: true,
    },
    {
      title: "Key Note Speaker",
      description: "Opportunity to be a Keynote Speaker",
      available: true,
    },
    {
      title: "Discussion Panel",
      description: "Opportunity to be a member of Discussion Panel",
      available: true,
    },
    {
      title: "Brand Video clip",
      description: "A short video showcasing your brand’s innovations",
      available: true,
    },
    {
      title: "Awards Night Tickets",
      description:
        "Bring 5 of your team members to witness the Awards night",
      available: true,
    },
    {
      title: "Awards Night Seating",
      description: "Front row - centre",
      available: true,
    },
  ],
};


// ⭐ GOLD — MID TIER (SOME ❌ EXCLUDED)
const goldFeatures = {
  "Digital Branding": [
    {
      title: "Website Presence",
      description:
        "Logo on the event website with your service information in 500 words with images",
      available: true,
    },
    {
      title: "Video Branding",
      description: "Inclusion of your logo in all the BFA event-related videos",
      available: true,
    },
    {
      title: "Email Branding",
      description:
        "Featuring your logo in newsletters sent to 2,000+ business contacts",
      available: true,
    },
    {
      title: "Social Media Posts",
      description:
        "4 Social media promotions including 3 paid ad posts with reach 2,000 - 15,000",
      available: true,
    },
    {
      title: "Newsletter",
      description: "Newsletters sent to 2,000+ business contacts",
      number: 4,
    },
  ],

  "Print Media Branding": [
    {
      title: "Magazine Feature",
      description: "Feature in the Fintech magazine column",
      available: true,
    },
    {
      title: "Signage Branding",
      description: "Banners and posters for maximum exposure",
      available: true,
    },
    {
      title: "Print Loop Messages",
      description: "Featuring your logo at regular intervals during the event",
      available: true,
    },
    {
      title: "Event Schedule",
      description: "Logo on digital & printed event schedule",
      available: true,
    },
    {
      title: "Registration Badge",
      description: "Logo on attendee badge",
      available: true,
    },
    {
      title: "Registration Lanyard",
      description: "Logo on lanyard",
      available: true,
    },
    {
      title: "Notepad Branding",
      description: "Logo featured on event notepads",
      available: true,
    },
    {
      title: "Return Gift ThankYou Note",
      description: "Logo in the ThankYou note of the return gift",
      available: true,
    },
    {
      title: "Customised Souvenir",
      available: false,
    },
  ],

  "Award Nomination": [
    { title: "Award Nomination", available: true },
    { title: "award nomination", available: true },
  ],

  "Lead Generation": [
    { title: "Leads", available: true },
    { title: "Leads", available: true },
  ],

  "Awards Night Branding": [
    { title: "Headline", available: true },
    { title: "Headline", available: true },
    {
      title: "Exhibit Space",
      description: "One exhibit space (2nd preference)",
      available: true,
    },
    {
      title: "Award Sponsorship",
      description: "Opportunity to sponsor one Award of your choice",
      available: true,
    },
    {
      title: "Key Note Speaker",
      description: "Opportunity to be a Keynote Speaker",
      available: false,
    },
    {
      title: "Discussion Panel",
      description: "Opportunity to be part of Discussion Panel",
      available: true,
    },
    {
      title: "Brand Video clip",
      description:
        "A short video showcasing your brand’s innovations",
      available: false,
    },
    {
      title: "Awards Night Tickets",
      description:
        "Bring 3 of your team members to witness the Awards night",
      available: true,
    },
    {
      title: "Awards Night Seating",
      description: "Front row - centre",
      available: true,
    },
  ],
};


// ⭐ SILVER — ENTRY TIER (MORE ❌ EXCLUSIONS)
const silverFeatures = {
  "Digital Branding": [
    {
      title: "Website Presence",
      description:
        "Logo on the event website with your service information in 300 words with images",
      available: true,
    },
    {
      title: "Video Branding",
      description: "Inclusion of your logo in all the BFA event-related videos",
      available: true,
    },
    {
      title: "Email Branding",
      description:
        "Featuring your logo in all BFA newsletters sent to 2,000+ business contacts",
      available: true,
    },
    {
      title: "Social Media Posts",
      description:
        "2 Social media promotions including 2 paid ad posts with reach 1,000 - 10,000",
      available: true,
    },
    {
      title: "Newsletter",
      description: "Newsletters sent to 2,000+ business contacts",
      number: 3,
    },
  ],

  "Print Media Branding": [
    {
      title: "Magazine Feature",
      description: "Feature in the Fintech magazine column",
      available: true,
    },
    {
      title: "Signage Branding",
      description: "Banners and posters for maximum exposure",
      available: true,
    },
    {
      title: "Print Loop Messages",
      description:
        "Featuring your logo and messages at regular intervals during the event",
      available: true,
    },
    {
      title: "Event Schedule",
      description: "Logo on digital & printed event schedule",
      available: true,
    },
    {
      title: "Registration Badge",
      description: "Logo on attendee badge",
      available: true,
    },
    {
      title: "Registration Lanyard",
      description: "Logo on lanyard",
      available: true,
    },
    {
      title: "Notepad Branding",
      description: "Logo featured on event notepads",
      available: false,
    },
    {
      title: "Return Gift ThankYou Note",
      description: "Logo in the ThankYou note of the return gift",
      available: true,
    },
    {
      title: "Customised Souvenir",
      available: false,
    },
  ],

  "Award Nomination": [
    { title: "Award Nomination", available: true },
    { title: "award nomination", available: true },
  ],

  "Lead Generation": [
    { title: "Leads", available: true },
    { title: "Leads", available: true },
  ],

  "Awards Night Branding": [
    { title: "Headline", available: true },
    { title: "Headline", available: true },
    {
      title: "Exhibit Space",
      description: "One exhibit space (3rd preference)",
      available: true,
    },
    {
      title: "Award Sponsorship",
      description: "Opportunity to sponsor one Award of your choice",
      available: false,
    },
    {
      title: "Key Note Speaker",
      description: "Opportunity to be a Keynote Speaker",
      available: false,
    },
    {
      title: "Discussion Panel",
      description: "Opportunity to be a member of Discussion Panel",
      available: true,
    },
    {
      title: "Brand Video clip",
      description:
        "A short video showcasing your brand’s innovations",
      available: false,
    },
    {
      title: "Awards Night Tickets",
      description:
        "Bring 2 of your team members to witness the Awards night",
      available: true,
    },
    {
      title: "Awards Night Seating",
      description: "Front row - centre",
      available: true,
    },
  ],
};

export default PricingBFA;
