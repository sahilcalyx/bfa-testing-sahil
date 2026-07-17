import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(0); // Set the initial active accordion to the first item

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Example FAQ Data
  const faqData = [
    {
      question: "Who can participate in the Brit Fintech Awards?",
      answer: (
        <p>
       Any fintech company or startup involved in developing or utilising financial technologies in the UK can participate.
        </p>
      ),
    },
    {
      question: "Can international companies participate in the awards?",
      answer: (
        <p>
   Absolutely! The Brit FinTech Awards 2025 introduces a new category called Global Awards, featuring two honors: MSB of the Year and FinTech of the Year. International companies with operations in the UK can also apply for the general awards instead of the Global category.
        </p>
      ),
    },
    {
      question: "What are the eligibility criterias for nomination?",
      answer: (
        <ul style={{ listStyle: "none" }}>
          <li>1. The company must have an annual turnover of over £2 million (this does not apply to startups).</li>
          <li>2. The directors or Ultimate Beneficial Owners (UBOs) should not have any criminal charges.</li>
          <li>
            3. The company should not have faced any penalties from regulatory authorities.
          </li>
          <li>
            4. Nominations are open exclusively to Fintech Companies and Money Service Businesses (MSBs).
          </li>
        </ul>
      ),
    },
    {
      question: "How can I nominate my company for the Brit Fintech Awards?",
      answer: (
        <p>
       Nominating your company is easy! Click on Register for Awards and fill out the nomination form with your details and achievements.
        </p>
      ),
    },
    {
      question: "Can I attend the Brit Fintech Awards event without submitting a nomination?",
      answer: (
        <p>
        Yes, tickets are available for purchase for anyone wishing to attend the event. Contact us at kudos@britfintechawards.com or +44 20 3828 3277 for more information on how to attend the event.
        </p>
      ),
    },
    {
      question:
        "Can I sponsor the Brit Fintech Awards?",
      answer: (
        <p>
        Absolutely! We offer various sponsorship opportunities designed to provide brands with maximum visibility and exposure within the fintech community. Explore our sponsorship packages (Platinum Sponsor, Gold Sponsor, Silver Sponsor) on the website or contact us at kudos@britfintechawards.com or +44 20 3828 3277 for more information on how to become a sponsor.
        </p>
      ),
    },
    {
      question:
        "How can I get involved in the Brit Fintech Awards as a media partner?",
      answer: (
        <p>
       We welcome media partners to join us in celebrating fintech innovation. If you're interested in collaborating with us or contributing your time and skills, please reach out to us via kudos@britfintechawards.com or +44 20 3828 3277 
       We look forward to exploring potential partnership opportunities.
        </p>
      ),
    },
    {
      question:
        "Who decides the winners of the Brit Fintech Awards?",
      answer: (
        <p>
      The winners are decided by our independent jury panel comprising industry experts, thought leaders, and professionals with extensive experience in the fintech sector. They evaluate nominees based on predefined judging criteria to determine the most deserving recipients.
        </p>
      ),
    },
    {
      question:
        "Is there a dress code for the awards ceremony?",
      answer: (
        <p>
      The Brit Fintech Awards is a networking event, and attendees are encouraged to wear business formals or evening attire. Specific dress code guidelines will be provided closer to the event date.
        </p>
      ),
    },
    {
      question:
        "How can I stay updated on Brit Fintech Awards 2025 news?",
      answer: (
        <p>
      To stay up to date on the latest information about the awards, including nominations, ticket sales, and event details follow us on our social media channels.
        </p>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Brit Fintech Award | FAQ's </title>
        <meta
          name="description"
          content="Find answers to your questions about the Fintech Awards UK 2024. Get all the information you need about participation, judging, and the awards process."
        />
      </Helmet>
      <div>
        {/* Start Hero Section */}
        <div className="cs-height_90 cs-height_lg_90" />
        <div
          className="cs-hero cs-style12 cs-type1 cs-center text-center  cs-parallax cs-hobble"
          
          style={{
            backgroundImage:
              'url("../assets/img/event-conference/hero-img.jpg")',
            height: "300px",
          }}
        >
          <div className="cs-hero_pattern cs-hover_layer3" style={{}}>
            <div
              className="cs-hero_pattern_in cs-bg_parallax"
            
             
            />
          </div>
          <div
            className="container wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.2s",
              animationName: "fadeInDown",
            }}
          >
            <div className="cs-hero_text text-left">
              <h1
                className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-3 mb-0"
                style={{ marginTop: "40px !important" }}
              >
                FAQ<span style={{ textTransform: "lowercase" }}>'s</span>
              </h1>
              <p className="pb-0 mb-0 text-left text-white">
                Check our Frequently Asked Questions for answers to common
                queries about our awards
              </p>
              <div className="cs-height_10 cs-height_lg_0" />
            </div>
          </div>
          <div
            className="cs-hero_img cs-bg"
            data-src="../assets/img/creative-agency/hero-img.jpg"
            style={{
              backgroundImage:
                'url("../assets/img/creative-agency/hero-img.jpg")',
            }}
          >
            <div className="cs-hero_img_circle" />
          </div>
        </div>
        {/* End Hero Section */}
      </div>
      <div className="cs-height_60 cs-height_lg_60" />
      <div className="container">
        {/* FAQ Section */}

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cs-accordians cs-style1">
                {faqData.map((faq, index) => (
                  <div
                    className={`cs-accordian ${
                      activeAccordion === index ? "active" : ""
                    }`}
                    key={index}
                  >
                    <div
                      className="cs-accordian_head cs-accent_border_2 cs-white_bg"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h2 className="cs-accordian_title">{faq.question}</h2>
                      <span className="cs-accordian_toggle cs-accent_color_2">
                        <i
                          className={`fa ${
                            activeAccordion === index
                              ? "fa-angle-up"
                              : "fa-angle-down"
                          }`}
                        />
                      </span>
                    </div>
                    <div
                      className="cs-accordian-body"
                      style={{
                        display: activeAccordion === index ? "block" : "none",
                      }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* End FAQ Section */}
      </div>
      {/* Counter and Newsletter Section */}
      <div className="cs-height_40 cs-height_lg_40" />
      <div
        className="cs-bg"
        style={{
          backgroundImage:
            'url("../assets/img/event-conference/newsletter-bg.jpg")',
        }}
      >
        {/* <div
            className="cs-bg"
            data-src="../assets/img/event-conference/newsletter-particel.png"
            style={{
              backgroundImage:
                'url("../assets/img/event-conference/newsletter-particel.png")',
            }}
          >
            <div className="cs-height_135 cs-height_lg_75" />
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-8 offset-lg-2 wow fadeInDown"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationDelay: "0.2s",
                    animationName: "fadeInDown",
                  }}
                >
                  <div className="cs-section_heading cs-style2 cs-size3 text-center text-uppercase">
                    <div className="cs-section_subtitle cs-primary_font cs-medium cs-white_80">
                       BRIT FINTECH AWARDS 2024
                    </div>
                    <h2 className="cs-section_title cs-extra_bold cs-white">
                      Are you ready to enter?
                    </h2>
                    <p className="text-white mt-2">
                      Join us in celebrating the best and brightest in UK
                      Fintech Industry.
                    </p>
                  </div>
                  <div className="cs-height_40 cs-height_lg_30" />
                  <div className="cs-toolbox text-center" bis_skin_checked={1}>
                    <NavLink
                      to="/register-now"
                      className="cs-btn cs-style1 cs-btn_lg cs-medium text_uppercase cs-primary_font cs-accent_bg cs-accent_border cs-white cs-accent_bg_2_hover  text-white"
                    >
                      <span className="cs-btn_text">Register For Awards</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-height_140 cs-height_lg_80" />
          </div> */}
      </div>
    </>
  );
};

export default Faq;
