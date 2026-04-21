import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const Blog = () => {
  // ===== BLOG DATA =====
  const blogsData = [
    {
      title: "The invisible financial bridge: How MSBs power migrant and cross-border communities",
      slug: "the-invisible-financial-bridge-how-msbs-power-migrant-and-cross-border-communities",
      img: "/assets/img/blogs/The-invisible-financial-bridge.jpg",
      alt: "The invisible financial bridge",
      date: "15 Apr, 2026",
      excerpt: "Sending money home is more than a financial transaction...",
    },
    {
      title: "AI-Powered risk & compliance: The next frontier for MSBs and Fintechs",
      slug: "ai-powered-risk-compliance-the-next-frontier-for-msbs-and-fintechs",
      img: "/assets/img/blogs/ai-powered-risk-compliance.jpg",
      alt: "AI-Powered risk & compliance",
      date: "24 Mar, 2026",
      excerpt: "How machine learning and adaptive intelligence are...",
    },
    {
      title: "Digital Wallets: The gateway to the future of financial services",
      slug: "digital-wallets-the-gateway-to-the-future-of-financial-services",
      img: "/assets/img/blogs/Digital-Wallets-blog.jpg",
      alt: "Digital Wallets: The gateway to the future of financial services",
      date: "04 Mar, 2026",
      excerpt: "Why digital wallets are becoming the central hub for payments, identity, and financial access...",
    },
    {
      title: "Managing fraud risks in a real-time payments world",
      slug: "managing-fraud-risks-in-a-real-time-payments-world",
      img: "/assets/img/blogs/Managing-fraud-risks-in-a-real-time-payments-world.png",
      alt: "Managing fraud risks in a real-time payments world",
      date: "18 Feb, 2026",
      excerpt: "How fintechs are combating fraud as payments become faster and more ...",
    },
    {
      title: "How Instant Payments Are Changing Consumer Expectations Globally",
      slug: "how-instant-payments-are-changing-consumer-expectations-globally",
      img: "/assets/img/blogs/how-instant-payments-are-changing-consumer-expectations-globally.jpg",
      alt: "How Instant Payments Are Changing Consumer Expectations Globally",
      date: "04 Feb, 2026",
      excerpt: "In a world where almost everything...",
    },
    {
      title:
        "CBDCs (Central Bank Digital Currencies) and their impact on MSBs and Fintech markets",
      slug: "cbdc-central-bank-digital-currencies-and-their-impact-on-msbs-and-fintech-markets",
      img: "/assets/img/blogs/cbdc-central-bank-digital-currencies-and-their-impact-on-msbs-and-fintech-markets.jpg",
      alt: "CBDCs (Central Bank Digital Currencies) and their impact on MSBs and Fintech markets",
      date: "28 Jan, 2026",
      excerpt: "",
    },
    {
      title: "The Bank in Your Pocket: How Everyday Apps Became Global Banks",
      slug: "the-banking-in-your-pocket-how-everyday-apps-became-global-banks",
      img: "/assets/img/blogs/TheBankinYourPocketHowEverydayAppsBecameGlobalBanks.jpg",
      alt: "The Bank in Your Pocket: How Everyday Apps Became Global Banks",
      date: "12 Nov, 2025",
      excerpt: "Once upon a time, banking meant...",
    },
    {
      title: "Inside the BFA Experience: Networking, Energy & Innovation",
      slug: "inside-the-bfa-experience-networking-energy-innovation",
      img: "/assets/img/blogs/inside-the-bfa-experience-networking-energy-innovation.png",
      alt: "Inside the BFA Experience: Networking, Energy & Innovation",
      date: "08 Oct, 2025",
      excerpt: "The Brit FinTech Awards 2025 was...",
    },
    {
      title: "From Cash Counters to Super-Apps: The Evolution of MSBs",
      slug: "from-cash-counters-to-super-apps-the-evolution-of-msbs",
      img: "/assets/img/blogs/from-cash-counters-to-super-apps-the-evolution-of-msbs.webp",
      alt: "AI in the MSB Sector - Friend or Foe?",
      date: "25 Sep, 2025",
      excerpt: "Once upon a time, Money...",
    },
    {
      title:
        "Beyond Borders: How Brit FinTech Awards Puts UK's FinTech & MSB on the Global Map",
      slug: "beyond-borders-brit-fintech-awards",
      img: "/assets/img/blogs/beyond_borders_how_brit_fintech.webp",
      alt: "Beyond Borders Blog",
      date: "17 Sep, 2025",
      excerpt: "",
    },
    {
      title: "Awards as Catalysts: Transforming Recognition into Real Impact",
      slug: "awards-as-catalysts-transforming-recognition-into-real-impact",
      img: "/assets/img/blogs/awards-as-catalysts-transforming-recognition-into-real-impact.jpg",
      alt: "Awards as Catalysts",
      date: "11 Sep, 2025",
      excerpt: "In science, a catalyst is something...",
    },
    {
      title: "Will 2025 Be the Year of Stablecoins?",
      slug: "will-2025-be-the-year-of-stablecoins",
      img: "/assets/img/blogs/will-2025-be-the-year-of-stablecoins.png",
      alt: "Stablecoins 2025",
      date: "22 Aug, 2025",
      excerpt: "Last ten years have transformed how we use money...",
    },
    {
      title: "AI in the MSB Sector - Friend or Foe?",
      slug: "ai-in-the-msb-sector",
      img: "/assets/img/blogs/ai-in-the-msb-sector.png",
      alt: "AI in MSB Sector",
      date: "15 Aug, 2025",
      excerpt:
        "Artificial Intelligence (AI) has become one of the most talked-about...",
    },
    {
      title: "FinTech in the UK: 3 Trends to Watch Right Now",
      slug: "fintech-in-the-uk",
      img: "/assets/img/blogs/fintech-in-the-uk.jpg",
      alt: "FinTech UK Trends",
      date: "26 Feb, 2025",
      excerpt:
        "The UK fintech scene is heating up with three major trends leading...",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          Blogs Brit Fintech Awards UK | Celebrating FinTech Innovation
        </title>
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="Brit Fintech Award, UK Fintech Awards, Blogs Us, Financial Technology Sector UK, Fintech Innovation UK"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="Blogs Brit Fintech Awards UK | Celebrating FinTech Innovation"
        />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/event-conference/about.png"
        />
      </Helmet>

      <div>
        <style>{`
          .cat-item a{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
          }
          .cat-item a:hover{
            color:#000;
          }
        `}</style>

        {/* HERO SECTION */}
        <div className="cs-height_90 cs-height_lg_80" />
        <div
          className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
          style={{
            backgroundImage: 'url("/assets/img/event-conference/hero-img.jpg")',
          }}
        >
          <div className="cs-hero_pattern cs-hover_layer3">
            <div className="cs-hero_pattern_in cs-bg_parallax" />
          </div>
          <div className="container wow fadeInDown">
            <div className="cs-hero_text text-left">
              <h1
                className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-3 mb-0"
                style={{ marginTop: "40px" }}
              >
                Blogs
              </h1>
            </div>
          </div>
        </div>

        {/* BLOG SECTION */}
        <div className="cs-gradient_bg_1">
          <div className="cs-height_140 cs-height_lg_80" />
          <div className="container">
            <div className="row">
              {blogsData.map((blog, index) => (
                <div className="col-lg-4 pt-4" key={index}>
                  <div className="cs-icon_box cs-style3">
                    <div className="cs-center">
                      <NavLink to={`/${blog.slug}`}>
                        <img
                          className="rounded-3"
                          src={blog.img}
                          alt={blog.alt}
                        />
                      </NavLink>
                    </div>
                    <div className="cs-post_date pt-2">
                      <i className="far fa-calendar-alt" /> {blog.date}
                    </div>
                    <h2 className="cs-icon_box_title cs-semi_bold">
                      <NavLink to={`/${blog.slug}`}>{blog.title}</NavLink>
                    </h2>
                    <div className="cs-icon_box_subtitle mb-4">
                      {blog.excerpt}
                    </div>
                    <div className="text-center">
                      <NavLink to={`/${blog.slug}`} className="btn-black">
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cs-height_110 cs-height_lg_50" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
