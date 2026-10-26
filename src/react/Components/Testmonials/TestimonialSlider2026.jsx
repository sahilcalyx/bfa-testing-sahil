import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// `image` is optional. When a company logo is not available yet, a branded
// initials badge is shown instead. `logoBg` sets the tile colour behind a logo.
const testimonials = [
  {
    id: 36,
    text: "The future of financial services will be shaped by intelligent technology—and by the people, controls and partnerships that make it trustworthy.\n\nA big thank you to Brit Fintech Awards, powered by Calyx Solutions, for a brilliantly executed event. Marbo Money was delighted to attend, connecting with e-banks, compliance providers, fintechs and MSBs, and exploring how AI can strengthen the future of payments and money transfers.\n\nAt Marbo Money, we believe agentic AI can help financial institutions grow, scale and manage complexity—but only when it is built around robust risk controls, continuous compliance monitoring and meaningful human-in-the-loop oversight.\n\nThe future is not AI without accountability. It is intelligent agents working alongside experienced people to make financial services safer, faster and more resilient.\n\nThe conversations and connections at the event reinforced the importance of collaboration across the ecosystem—from AI and fintech innovators to compliance and infrastructure providers, and corporates seeking trusted financial services solutions.\n\nMarbo Money is ready to partner with organisations shaping this future. If you are building, enabling or seeking safer, smarter and more scalable financial services, let's connect.",
    name: "Rose Mary Nakasenge B.",
    designation: "(Marbo Money)",
    initials: "MM",
    source: "linkedin",
    link: "https://lnkd.in/p/d-JwxP58",
  },
  // {
  //   id: 1,
  //   text: "**Nice event**",
  //   name: "Mustapha Ajisafe",
  //   designation: "(Disbuz by Payceler)",
  //   image: "/assets/img/attendee-logos/disbuz.png",
  // },
  {
    id: 2,
    text: "Many thanks, **great evening** - met few **colleagues** after long time.",
    name: "Mohammad",
    designation: "(Asiana Remit)",
    initials: "AR",
  },
  {
    id: 3,
    text: "It was a **fantastic event** and a **great evening** connecting with everyone in Fintech and MSB space. Looking forward to the **next one!**\n**Special thanks** to Calyx Solutions Ltd and the organising team for an **outstanding event.**",
    name: "Ayobami Adeagbo",
    designation: "(Ifepay Services)",
    image: "/assets/img/attendee-logos/ifepay.png",
    source: "linkedin",
    link: "https://lnkd.in/p/gSSdTZPi",
  },
  {
    id: 4,
    text: "A **fabulous night** had by all, plenty of worthy nominees and winners and a **great evening** in a **lovely venue!**",
    name: "Chris Sheath",
    designation: "(Emerchantpay)",
    image: "/assets/img/attendee-logos/Emarchantpay.png",
    source: "linkedin",
    link: "https://www.linkedin.com/posts/britfintechawards_britfintechawards-emerchantpay-fintechoftheyear-activity-7514705131280678913-a450?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAACNPxx0BWbuSxjsfoVlUlizj-ngx4y6N8DY&utm_campaign=share_via",
  },
  {
    id: 5,
    text: "Was **great last night**, **good work**.",
    name: "Moshe Freed",
    designation: "(Lion Global Money Limited)",
    initials: "LG",
  },
  {
    id: 6,
    text: "Such a **beautiful gift**, Vishal. **Congratulations**, the event was **amazing!**",
    name: "SAMPAIO MARQUES",
    designation: "(GCC Exchange UK Limited)",
    image: "/assets/img/attendee-logos/Group%202.png",
  },
  {
    id: 7,
    text: "The evening was **incredible**.\nThe organisation was **spotless**.",
    name: "Maicon Caltiano",
    designation: "(Decta)",
    image: "/assets/img/winner-logos-26/Winners-logo-white/Decta.png",
    logoBg: "#111111",
  },
  {
    id: 8,
    text: "**Enjoyed the event** and came away having had some **good conversations**.",
    name: "Billy Coplestone Grant",
    designation: "(Corpay)",
    initials: "CP",
  },
  {
    id: 9,
    text: "It was a **great event** - **well done** to all involved!",
    name: "Sam Trutch",
    designation: "(GBG)",
    image: "/assets/img/attendee-logos/gbg.png",
  },
  {
    id: 10,
    text: "We were **impressed** by the level of **event preparation** and the **overall atmosphere**.\nWe thank you for this **incredible evening** and your **attention to every detail**.",
    name: "Katy Matiashvili",
    designation: "(Sends)",
    image: "/assets/img/attendee-logos/sends.png",
  },
  {
    id: 11,
    text: "The event was a **big success** and we **all enjoyed it!**",
    name: "John Kinghorn",
    designation: "(Peratera)",
    image: "/assets/img/keynote-speakers-2026/Peratera-logo-black.png",
    source: "linkedin",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7514500557324144640/?dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287514588823658496000%2Curn%3Ali%3Aactivity%3A7514500557324144640%29",
  },
  {
    id: 12,
    text: "It was **great evening**, **well organised** and thanks for the **hospitality**. Thanks for the **nice photos** too.",
    name: "Mazhar",
    designation: "(Goldpress Limited)",
    image: "/assets/img/testimonial25/Goldpress-logo.png",
  },
  {
    id: 13,
    text: "I just opened the **gift hamper**. Very **beautiful and lovely**. I **love the size**. The package **smells so well** too.",
    name: "Ifedayo Adeagbo",
    designation: "(Ifepay Services)",
    image: "/assets/img/attendee-logos/ifepay.png",
  },
  {
    id: 14,
    text: "It was an **amazing event**. I am **very impressed**.",
    name: "Mary",
    designation: "(Desta Global)",
    initials: "DG",
  },
  {
    id: 15,
    text: "The event was **simply wonderful** and **very well organised**.\n**Congratulations** to you and the **whole team**.",
    name: "Gilson Guimaraes",
    designation: "(PRONOVA Certificadora digital)",
    initials: "PC",
  },
  {
    id: 16,
    text: "I went to the **Brit FinTech Awards** on Friday to give the **keynote**. I did not expect to come home with this.\n\nThank you to Brit FinTech Awards Limited for the **recognition** and for a **brilliant evening**. Those were the **best conversations of the night**.",
    name: "Daljit Young",
    designation: "(Peratera)",
    image: "/assets/img/keynote-speakers-2026/Peratera-logo-black.png",
    source: "linkedin",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7515340244276133888/?actorCompanyId=103266689",
  },
  {
    id: 17,
    text: "The week ended with **Brit FinTech Awards** Limited! Special thanks to Vishal Patil for the invitation and also for organising such a **great evening!** Having spent many years working alongside members of this community and MSBs, it remains particularly important for me to **stay connected** with the people and organisations that contribute to and support our sector!🤝🤝",
    name: "Erhan Tetik",
    designation: "(Bank of London)",
    image: "/assets/img/attendee-logos/Frame.png",
    source: "linkedin",
    link: "https://lnkd.in/p/dqS2xHGF",
  },
  {
    id: 18,
    text: "Another **great opportunity** to connect with the **UK remittance and fintech community**, celebrate innovation, and recognise the companies shaping the **future of cross-border payments**.\n\nThank you Vishal Patil and Calyx Solutions for the **nomination!**",
    name: "Miller Rodriguez",
    designation: "(Neema)",
    image: "/assets/img/winner-logos-26/Winners-logo-white/Neema.png",
    logoBg: "#111111",
    source: "linkedin",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7514473002281975808/?actorCompanyId=103266689",
  },
  {
    id: 19,
    text: "A big thank you to Vishal Patil and the whole Calyx Solutions UK Ltd team for organising such a **fantastic event**.\n\nIt was great to see so many companies from the **remittance industry** receiving awards across different categories. It is amazing to have events like this that **recognise the hard work**, achievements and contributions of companies in the industry over the years. Such recognition is definitely **well deserved!**\n\nAnd of course, the venue had an **amazing view**, and the food was so good that I had to go back for a second plate! 😋\n\nAlready **looking forward to next year!**",
    name: "Lukasz. P",
    designation: "(Clear Junction)",
    image: "/assets/img/attendee-logos/clear-junction.png",
    source: "linkedin",
    link: "https://lnkd.in/p/dtjUXF44",
  },
  {
    id: 20,
    text: "A **wonderful evening** at Landing Forty Two in London.\n\n**Excellent food**, a **fantastic venue** and the opportunity to catch up with industry colleagues made the evening even more enjoyable.\nA special thank you to Vishal Patil, the Brit FinTech Awards and Calyx Solutions teams, and everyone who looked after us throughout the evening. Their **warm welcome, attentiveness and support** made us feel comfortable and well looked after.\n\n**Congratulations** to all the award winners, and thank you for **bringing our industry together!**",
    name: "Sampaio Marques",
    designation: "(GCC Remit)",
    image: "/assets/img/attendee-logos/Group%202.png",
    source: "linkedin",
    link: "https://lnkd.in/p/dizehYQP",
  },
  {
    id: 21,
    text: "The event venue was **stunning**, and the atmosphere was **buzzing** - great conversations with familiar faces and new connections alike.\n\n**Congratulations** to all the nominees and winners! And a big thank you to Vishal Patil and the team at Calyx Solutions UK Ltd for an **outstanding job** organising the event - **truly well done!**\n\n It was **enlightening** to hear from **entrepreneurs and innovators** about how they are integrating AI and AI agents. \n\n To the next one...Ad Astra Per Aspera! 🚀",
    name: "Giordano Cortese",
    designation: "(First Rate Exchange Services Ltd.)",
    initials: "FR",
    source: "linkedin",
    link: "https://lnkd.in/p/dhTfwUyt",
  },
  {
    id: 22,
    text: "Attending the **prestigious Brit FinTech Awards** in London was a **true honor**.\n\nSet against a venue with **breathtaking views**, the event celebrated the **outstanding achievements** of professionals and companies shaping the financial landscape.\n\nBy recognising the pioneering efforts, the awards successfully **motivated leaders** pushing the sector forward.\n\n**Congratulations** to all the deserving winners and organisers of this **remarkable event**.",
    name: "Gilson Guimaraes",
    designation: "(PRONOVA Certificadora digital)",
    initials: "PC",
    source: "instagram",
    link: "https://www.instagram.com/p/DedzLOSlZAq/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==",
  },
  {
    id: 23,
    text: "The Awards evening itself was **hugely enjoyable**, allowing for many **quality conversations** and swapping of notes.\n\n**Congratulations** to all the Winners and nominees, and also the speakers and panellists.\n\nThanks to Vishal Patil and all at Calyx Solutions UK Ltd for organising this **great event**.",
    name: "James Borley",
    designation: "(Complyport)",
    image: "/assets/img/attendee-logos/COMPLYPORT_Logo.png",
    source: "linkedin",
    link: "https://lnkd.in/p/daTm4Tmy",
  },
  {
    id: 24,
    text: "Just opened the **lovely gift!** Yum to the **chocolates** and what a **nice thermal cup!** That'll be **very helpful!**",
    name: "Theo Kenward",
    designation: "(Trust Payments)",
    image: "/assets/img/attendee-logos/trustpayments.com%20logo11.png",
  },
  {
    id: 25,
    text: "It was a **great event**. Thank you so much for **everything**.\nReally I had a **wonderful time** 🙏😍❤️\n**Best wishes** for you and your **fantastic team**.\n**Well done** 👏🙏😍",
    name: "Milad Maroun",
    designation: "(Milad One Limited)",
    initials: "MO",
  },
  {
    id: 26,
    text: "**Insightful** and **great networking**.\nThank you Vishal Patil.",
    name: "Philve Philip",
    designation: "(Muthoot Finance UK Ltd)",
    initials: "MF",
    source: "linkedin",
    link: "https://lnkd.in/p/dSVZGFYf",
  },
  {
    id: 27,
    text: "**Great evening** at Brit FinTech Awards.\nIt was **fantastic to connect** with businesses and professionals across the **UK fintech landscape**.\nAlways valuable to **exchange ideas**, **build relationships** and **explore opportunities** across the industry.\n\nThank you to Calyx Solutions UK Ltd for organising such a **great event!**",
    name: "Fernando Pimentel",
    designation: "(Exactly)",
    initials: "EX",
    source: "linkedin",
    link: "https://lnkd.in/p/dbzRWPFn",
  },
  {
    id: 28,
    text: "Thank you for organising team: plenty of **great discussions** were had! 💪",
    name: "Alex Smith",
    designation: "(IFX Payments)",
    image: "/assets/img/attendee-logos/IFX.svg",
    source: "linkedin",
    link: "https://lnkd.in/p/dTVbPXaS",
  },
  {
    id: 29,
    text: "Thank you Vishal! You've excellently **nailed the BFA event again.**",
    name: "Femi Ekwuyasi",
    designation: "(3ribe)",
    image: "/assets/img/winner-logos-26/Winners-logo-white/3ribe.png",
    logoBg: "#111111",
    source: "linkedin",
    link: "https://lnkd.in/p/dudk83sE",
  },
  {
    id: 30,
    text: "It was **fantastic to catch up** with our wonderful partner, Calyx Solutions UK Ltd, network with industry experts and clients, have some **extremely insightful conversations** and gain insight during the panel discussions.\n\nThank you to Vishal Patil and the rest of the BFA team for **hosting us.**",
    name: "Theo Kenward",
    designation: "(Trust Payments)",
    image: "/assets/img/attendee-logos/trustpayments.com%20logo11.png",
    source: "linkedin",
    link: "https://lnkd.in/p/dRhJZRfZ",
  },
  {
    id: 31,
    text: "It was an **amazing event** bringing **fintech businesses** together. Since the event went **really well**, expectations for the **4th edition** are **really high**.",
    name: "Lukasz. P",
    designation: "(Clear Junction)",
    image: "/assets/img/attendee-logos/clear-junction.png",
    source: "linkedin",
    link: "https://lnkd.in/p/dpxvrFHQ",
  },
  {
    id: 32,
    text: "It was **amazing** to be part of it, and I really **enjoyed working with you all.**",
    name: "Stephen Simmons",
    designation: "(Official Event Host & MC)",
    initials: "SS",
  },
  {
    id: 33,
    text: "A **great evening** at the Brit Fintech Awards 2026 at Landing Fortytwo, London. It was **brilliant** to hear from the industry leaders during the panel sessions, catchup with familiar faces, meet new people from across the fintech community.\n\nEvents like these are a **great reminder** of the innovation happening across the sector. To top it all off, I was proud to be representing GBG as we won **Anti Fraud Innovator 2026** award. A **fantastic achievement** for the team.",
    name: "Sam Trutch",
    designation: "(GBG)",
    image: "/assets/img/attendee-logos/gbg.png",
    source: "linkedin",
  },
  {
    id: 34,
    text: "Thank you for hosting such a **wonderful evening!**",
    name: "Scott Dawson",
    designation: "(Decta)",
    image: "/assets/img/winner-logos-26/Winners-logo-white/Decta.png",
    logoBg: "#111111",
    source: "linkedin",
    link: "https://lnkd.in/p/dABsUstW",
  },
  {
    id: 35,
    text: "**Congratulations** on a **successful evening!** 🏆👏",
    name: "Craig Brightly",
    designation: "(Trust Payments)",
    image: "/assets/img/attendee-logos/trustpayments.com%20logo11.png",
    source: "linkedin",
    link: "https://lnkd.in/p/d_VMskVP",
  },
];

const sourceMeta = {
  linkedin: { icon: "fab fa-linkedin-in", label: "LinkedIn", color: "#0A66C2" },
  instagram: { icon: "fab fa-instagram", label: "Instagram", color: "#E1306C" },
};

const sourceBadgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "8px",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  fontSize: "16px",
  color: "#fff",
  textDecoration: "none",
};

const TRUNCATE_AT = 220;
const EXPAND_STEP = 300;

const plainText = (text) => text.replace(/\*\*/g, "");

// Cuts after `limit` visible characters and closes any `**` left open.
const truncateMarked = (text, limit) => {
  let visible = 0;
  let open = false;
  let i = 0;
  while (i < text.length && visible < limit) {
    if (text.startsWith("**", i)) {
      open = !open;
      i += 2;
    } else {
      visible += 1;
      i += 1;
    }
  }
  return text.slice(0, i) + (open ? "**" : "") + "...";
};

const renderMarked = (text) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") && part.length > 4 ? (
      <strong key={i} style={{ color: "#111" }}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );

const avatarBoxStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  border: "1px solid #eee",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const TestimonialSlider2026 = () => {
  const sliderRef = useRef(null);
  const [visibleLimits, setVisibleLimits] = useState({});

  const toggleExpand = (index, totalLength) => {
    setVisibleLimits((prev) => {
      const current = prev[index] ?? TRUNCATE_AT;
      return {
        ...prev,
        [index]:
          current >= totalLength
            ? TRUNCATE_AT
            : Math.min(current + EXPAND_STEP, totalLength),
      };
    });
  };

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  };

  return (
    <div className="container">
      <div className="row">
        {/* Left Section */}
        <div
          className="col-lg-5 wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="cs-vertical_middle">
            <div className="cs-vertical_middle_in">
              <div
                className="cs-section_heading cs-style2"
                style={{ textAlign: "left" }}
              >
                <div className="cs-section_subtitle cs-primary_font cs-medium cs-accent_color">
                  Testimonials{" "}
                  <span style={{ color: "#c8102e" }}>
                    <strong> 2026</strong>
                  </span>
                </div>
                <h2 className="cs-section_title cs-extra_bold">
                  Celebrating the <br />
                  <span
                    className="cs-extra_bold cs-accent_color"
                    style={{ color: "#c8102e" }}
                  >
                    experiences
                  </span>
                </h2>
                <h2 className="cs-section_title cs-extra_bold">
                  of our guests
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section with Slider */}
        <div
          className="col-lg-7 wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="cs-shape_bg cs-style1">
            <div className="cs-height_100 cs-height_lg_10"></div>
            <Slider {...sliderSettings} ref={sliderRef} className="cs-slider">
              {testimonials.map((testimonial, index) => {
                const totalLength = plainText(testimonial.text).length;
                const shouldTruncate = totalLength > TRUNCATE_AT;
                const visibleLimit = Math.min(
                  visibleLimits[index] ?? TRUNCATE_AT,
                  totalLength
                );
                const isExpanded = visibleLimit >= totalLength;
                const shortText = truncateMarked(
                  testimonial.text,
                  visibleLimit
                );

                return (
                  <div className="cs-slide" key={testimonial.id}>
                    <div
                      className="cs-testimonial cs-style1"
                      style={{ textAlign: "left" }}
                    >
                      <div
                        className="cs-testimonial_icon cs-accent_color"
                        style={{ rotate: "180deg" }}
                      >
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <div className="cs-testimonial_info">
                        <div className="cs-testimonial_avatar">
                          {testimonial.image ? (
                            <div
                              style={{
                                ...avatarBoxStyle,
                                background: testimonial.logoBg || "#ffffff",
                                padding: "8px",
                              }}
                            >
                              <img
                                src={testimonial.image}
                                alt={testimonial.designation}
                                loading="lazy"
                                style={{
                                  objectFit: "contain",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: 0,
                                }}
                              />
                            </div>
                          ) : (
                            <div
                              style={{
                                ...avatarBoxStyle,
                                background:
                                  "linear-gradient(135deg, #c8102e, #8f0a20)",
                                color: "#fff",
                                fontWeight: 700,
                                fontSize: testimonial.initials.length > 2 ? 24 : 30,
                                letterSpacing: "1px",
                              }}
                              aria-label={testimonial.designation}
                            >
                              {testimonial.initials}
                            </div>
                          )}
                        </div>
                        <div className="cs-testimonial_meta">
                          <h3 className="cs-testimonial_avatar_name">
                            {testimonial.name}
                          </h3>
                          <div className="cs-testimonial_avatar_designation">
                            {testimonial.designation}
                          </div>
                          {sourceMeta[testimonial.source] && testimonial.link && (
                            <a
                              href={testimonial.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                ...sourceBadgeStyle,
                                background: sourceMeta[testimonial.source].color,
                              }}
                              aria-label={`View ${testimonial.name}'s post on ${sourceMeta[testimonial.source].label}`}
                              title={sourceMeta[testimonial.source].label}
                            >
                              <i className={sourceMeta[testimonial.source].icon}></i>
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Text with Read More */}
                      <div
                        className="cs-testimonial_text"
                        style={{
                          textDecoration: "none",
                          textTransform: "none",
                          position: "relative",
                        }}
                      >
                        <div style={{ whiteSpace: "pre-line" }}>
                          {renderMarked(
                            isExpanded || !shouldTruncate
                              ? testimonial.text
                              : shortText
                          )}
                        </div>

                        {shouldTruncate && (
                          <button
                            className="read-more-btn"
                            onClick={() => toggleExpand(index, totalLength)}
                            style={{
                              color: "#c8102e",
                              background: "none",
                              border: "none",
                              fontWeight: "600",
                              padding: "0",
                              marginTop: "6px",
                              cursor: "pointer",
                            }}
                          >
                            {isExpanded ? "Read Less" : "Read More"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>

            {/* Custom arrows */}
            <div className="cs-slider_arrows cs-style1 cs-type6 cs-center">
              <div
                className="cs-left_arrow cs-center cs-accent_color_2 slick-arrow"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <i className="fas fa-angle-left" />
              </div>
              <div
                className="cs-right_arrow cs-center cs-accent_color_2 slick-arrow"
                onClick={() => sliderRef.current.slickNext()}
              >
                <i className="fas fa-angle-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider2026;
