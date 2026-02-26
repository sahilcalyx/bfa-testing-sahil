import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider2025 = () => {
  const sliderRef = useRef(null);
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const testimonials = [
    {
      id: 1,
      text: `Many many thanks for making me to be a part of the <strong>conference</strong> and <strong>awards night</strong>. 
It's <strong>awesome</strong> and <strong>great</strong> 
<br>
I wish you more grace for a <strong>wonderful future</strong> and season by God grace 
<br>
Stay blessed everyone under <strong>God's umbrellas</strong>.`,
      name: "Bosede Adeniyi",
      designation: "(Blessed Exchange Limited)",
      image: "../assets/img/testimonial25/Blessed exchange logo.png",
    },
    {
      id: 2,
      text: `It was a very <strong>enjoyable</strong> and <strong>successful award evening</strong>. It was very nice meeting you, your colleagues and your boss. So was meeting so many <strong>players</strong> and <strong>market leaders</strong> and <strong>innovators</strong>. Hope to get some opportunities that could make a <strong>successful and productive business</strong>.`,
      name: "Mazhar Touounjee",
      designation: "(Goldpress Limited)",
      image: "../assets/img/testimonial25/Goldpress-logo.png",
    },
    {
      id: 3,
      text: `Great event and it worth to be recognized that the team did a <strong>great job</strong>! <strong>Well done!</strong>.`,
      name: "Diego Colucci",
      designation: "(Real Money Services)",
      image: "../assets/img/testimonial25/Realmoney logo.png",
    },
    {
      id: 4,
      text: `What a <strong>great evening</strong> and best of luck with all the <strong>future endeavours</strong>.`,
      name: "Usman Bashir",
      designation: "(Travel Cashier)",
      image: "../assets/img/testimonial25/Travel Cashier icon.png",
    },
    {
      id: 5,
      text: `<strong>Very well organised</strong> and <strong>enjoyable event</strong>. Catered well for all and provided an <strong>eventful evening</strong>.`,
      name: "Amal Abbas",
      designation: "(Travel Cashier)",
      image: "../assets/img/testimonial25/Travel Cashier icon.png",
    },
    {
      id: 6,
      text: `It was <strong>fantastic</strong> good opportunities to make <strong>wide network</strong>, as well as to <strong>exchange ideas</strong> in the industry. Am happy to empower you — you will work hard to make it <strong>bigger and bigger</strong> for the coming years.`,
      name: "SAMUEL ZERAI",
      designation: "(Red Sea Money)",
      image: "../assets/img/testimonial25/red-sea-logo.png",
    },
    {
      id: 7,
      text: `Thank you very much for your <strong>support</strong>. We have received very <strong>positive feedback</strong> so far – both regarding the people, the atmosphere, and the overall <strong>organisation</strong>.`,
      name: "Andriy Ponomarov",
      designation: "(ECEX Group AG)",
      image: "../assets/img/testimonial25/ECEX-Group-AG-icon.png",
    },
    {
      id: 8,
      text: `Heartfelt <strong>Congratulations</strong>, Vishal, on successfully hosting the <strong>Brit Fintech Awards</strong>! Your <strong>dedication</strong> and <strong>expertise</strong> have made the event a <strong>resounding success</strong>. Wishing you continued <strong>success</strong> and looking forward to more <strong>endeavors</strong>!`,
      name: "Fatai",
      designation: "(Super Transfer Ukay Limited)",
      image: "../assets/img/testimonial25/super-transfer-icon.png",
    },
    {
      id: 9,
      text: `Thank you kindly for hosting me on Friday evening. The <strong>talks</strong> and <strong>food</strong> were excellent, and it was fantastic to <strong>network</strong> and see colleagues and clients.`,
      name: "Theo Kenward",
      designation: "(Trustpayments)",
      image: "../assets/img/testimonial25/trustpayments-logo.png",
    },
    {
      id: 10,
      text: `Thanks for the event, Everything was <strong>amazing</strong>. You guys truly deserve <strong>applause</strong>!`,
      name: "Rehan Wali",
      designation: "(VRemit)",
      image: "../assets/img/testimonial25/Vremit-logo.png",
    },
    {
      id: 11,
      text: `Thank you Vishal and team for putting on a <strong>great show</strong>!
It was a <strong>fantastic event</strong> connecting with <strong>fintech innovators</strong> and exploring <strong>future opportunities</strong> that have the potential to <strong>transform</strong> the remittance and payments industries.
<strong>Congratulations</strong> to all the well-deserved winners!`,
      name: "Wayne Foster",
      designation: "(Openbanking)",
      image: "../assets/img/testimonial25/openbanking-logo.png",
    },
    {
      id: 12,
      text: `Thanks for yesterday’s event — it was <strong>mind blowing</strong>.
Each and everything was very well <strong>planned and organised</strong>.
Wish you all the best for <strong>future events</strong>.`,
      name: "Karar Ali",
      designation: "(FX)",
      image: "../assets/img/testimonial25/fx-logo.png",
    },
    {
      id: 13,
      text: `Hello team, 
<br/>
Thanks for the <strong>beautiful</strong> and <strong>well organized evening!</strong>
We really appreciated being part of it.`,
      name: "Angela Casucci",
      designation: "(Clear Junction)",
      image: "../assets/img/testimonial25/clear-junction-logo.png",
    },
    {
      id: 14,
      text: `Hi everyone,
    <br/>
Just a note to say <strong>congratulations</strong> on putting on a <strong>fantastic event</strong> at the <strong>Awards show</strong> last Friday.
<strong>Well organised</strong>, superb venue and a great opportunity to meet leaders in our industry.
Well done on your <strong>arrangement</strong> and <strong>organisation</strong> and we look forward to the next event.
Please pass on my compliments to your <strong>whole team</strong> who did a great job.`,
      name: "Harry Deans",
      designation: "(Link FX)",
      image: "../assets/img/testimonial25/LinkFX-logo.png",
    },
    {
      id: 15,
      text: `
Hi Vishal and the entire <strong>Calyx team</strong>,
<br/>
On behalf of the whole <strong>Volume team</strong>, thank you for an absolutely <strong>top event</strong>. Everything was <strong>great</strong> 🙌 from the <strong>organization</strong> to the <strong>atmosphere</strong> and the <strong>collaboration</strong> 🎉 and it was a real pleasure to be there.
A special thanks to Vishal for your <strong>mission to connect everyone</strong> and create <strong>new opportunities</strong>. The event truly reflected that spirit, and it was <strong>fantastic</strong> in every way.
We’re looking forward to continuing our <strong>partnership</strong>, supporting each other, and taking things even further together.`,
      name: "Kamal El",
      designation: "(Volume)",
      image: "../assets/img/testimonial25/volume-icon.png",
    },
    {
      id: 16,
      text: `
Thank you again for the invitation. <strong>It was a well-organized event.</strong>`,
      name: "Francis Ofungwu",
      designation: "(DevSecFlow)",
      image: "../assets/img/testimonial25/DevSecFlow-logo.png",
    },
    {
      id: 17,
      text: `
Hi Team,
<br/><br/>
<strong>Oche and the entire Leatherback team</strong> would like to extend our sincere thanks to you and everyone involved for putting together such a <strong>fantastic event.</strong> 
We’re delighted to have been part of this year’s edition and already look forward to next year’s.
<br/><br/>
<strong>Thanks again for the warm hospitality and excellent coordination.</strong>`,
      name: "Ade Jinadu",
      designation: "(Leatherback)",
      image: "../assets/img/testimonial25/leatherback25-logo.png",
    },
    {
      id: 18,
      text: `
It was really great time to be around the <strong>payment experts</strong>. We learned a lot. <strong>Keep it up.</strong> Thank you.`,
      name: "Abiodun Ayoola",
      designation: "(KAAS Services Ltd)",
      image: "../assets/img/testimonial25/kaass25-logo.png",
    },

    {
      id: 19,
      text: `
It was really great time to be around the <strong>payment experts</strong>. We learned a lot. <strong>Keep it up.</strong> Thank you.`,
      name: "Osman Ibrahim",
      designation: "(Kmbal)",
      image: "../assets/img/testimonial25/kmbal25-logo.png",
    },

    {
      id: 20,
      text: `
Dear Vishal and Team,
<br/>
On behalf of <strong>Payceler Limited</strong> we wish to express our <strong>sincere gratitude</strong> for hosting such a remarkable event last week. The <strong>organization, atmosphere, and attention to detail</strong> were truly exceptional — a testament to your team’s <strong>professionalism and dedication</strong>.
<br/>
We are equally grateful for your recognition of our work, nominating two of our flagship products and ultimately honoring our <strong>DISBUZ Payout platform</strong> as the winner of <strong>“Pay-Out Innovator 2025”</strong> award at the Brit Fintech Awards. This acknowledgment means a great deal to us, and it further inspires our commitment to <strong>innovation and excellence</strong> in the fintech and remittance ecosystem.
<br/>
We also deeply appreciate the opportunity to participate as a <strong>sponsor of such a prestigious and well-curated event.</strong> It was an incredible platform to <strong>connect, learn, and celebrate</strong> with like-minded innovators across the industry.
<br/>
Once again, thank you for recognizing our efforts and for creating a platform that continues to promote <strong>collaboration and growth in fintech.</strong>`,
      name: "Ebrahim DUROSIMI",
      designation: "(Endoz and Disbuz - by Payceler)",
      image: "../assets/img/testimonial25/payceler25-logo.png",
    },
    {
      id: 21,
      text: `
Dear team,
<br
Thank you very much for the recognition, for holding an <strong>amazing event</strong>, and for creating these <strong>great opportunities in our industry</strong>.
<br/><br/>
We are <strong>grateful to the whole Brit Fintech Awards team</strong>. Looking forward to our future collaborations!`,
      name: "Katy Matiashvili",
      designation: "(Sends)",
      image: "../assets/img/testimonial25/sends25-logo.png",
    },
    {
      id: 22,
      text: `
It was a pleasure to speak at <strong>Brit Fintech Awards</strong> and thank you for organizing such a <strong>fantastic event</strong> that brings together industry players in the <strong>remittance ecosystem</strong>.`,
      name: "Ochebhoya Ekpete",
      designation: "(Leatherback)",
      image: "../assets/img/testimonial25/leatherback25-logo.png",
    },
    {
      id: 23,
      text: `
Dear <strong>Calyx Solution Team</strong>,
<br/>
<br/>
Warm <strong>congratulations</strong> on your <strong>well-deserved recognition</strong> at the <strong>Brit Fintech Awards</strong>! It was a truly <strong>outstanding program</strong>, and we were proud to witness your <strong>excellence</strong> being celebrated.
<br/>
Your <strong>innovative remittance solution</strong> continues to set a <strong>high standard</strong> in the industry, and this award is a testament to the <strong>impact</strong> you're making. We're proud to be associated with your journey and look forward to seeing even greater <strong>milestones</strong> ahead.
<br/>
Wishing you continued <strong>success and growth</strong>!`,
      name: "Daniel",
      designation: "(Ada Express)",
      image: "../assets/img/testimonial25/ada25-logo.png",
    },
    {
      id: 24,
      text: `
I’m very pleased to accept the <strong>ID Verification Innovator of the Year 2025</strong> award on behalf of the <strong>Shufti</strong> team. This recognition from the <strong>Brit Fintech Awards</strong> reinforces the <strong>leadership position</strong> we’ve built in the <strong>IDV space</strong> and highlights the impact of our continued investment in <strong>innovation</strong>.
Thank you to <strong>Brit Fintech Awards</strong> for acknowledging the strides we’re making. We’re committed to driving the <strong>future of digital identity</strong> and raising the bar for the entire industry.
`,
      name: "Steve Ullman",
      designation: "(Shufti Pro)",
      image: "../assets/img/testimonial25/shufti-logo.png",
    },
  ];

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
                    <strong> 2025</strong>
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
              {[...testimonials].reverse().map((testimonial, index) => {
                const isExpanded = expandedIndexes.includes(index);
                const plainText = testimonial.text.replace(/<[^>]+>/g, "");
                const shouldTruncate = plainText.length > 220;
                const shortText = plainText.slice(0, 220) + "...";

                return (
                  <div className="cs-slide" key={index}>
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
                          <img
                            src={testimonial.image}
                            alt={`Testimonial ${index + 1}`}
                            loading="lazy"
                          />
                        </div>
                        <div className="cs-testimonial_meta">
                          <h3 className="cs-testimonial_avatar_name">
                            {testimonial.name}
                          </h3>
                          <div className="cs-testimonial_avatar_designation">
                            {testimonial.designation}
                          </div>
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
                        <div
                          dangerouslySetInnerHTML={{
                            __html: isExpanded
                              ? testimonial.text
                              : shouldTruncate
                              ? shortText
                              : testimonial.text,
                          }}
                        ></div>

                        {shouldTruncate && (
                          <button
                            className="read-more-btn"
                            onClick={() => toggleExpand(index)}
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

export default TestimonialSlider2025;
