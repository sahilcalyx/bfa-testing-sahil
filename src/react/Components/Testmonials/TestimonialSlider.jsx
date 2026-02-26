import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: `Congratulations on a great event! I’ve had glowing feedback from the team. <br> Thank you from me, for all the hard work that went into creating it!!`,
      name: 'Mitch Broadstock ',
      designation: '(Vyne)',
      image: '../assets/img/test-img/Mitch_Vyne.jpg',
    },
    {
      id: 2,
      text: `Dear team Calyx, A big thank you for organizing this event. We enjoyed every minute of it. You all have worked so hard meticulously with high attention to detail. Big congratulations to you guys. Awaiting next year’s event.`,
      name: 'Shamil and Mubassir ',
      designation: '(Quick Currency Exchange Ltd)',
      image: '../assets/img/test-img/Shamil_Quick-currency.jpg',
    },
    // {
    //   id: 3,
    //   text: `Hi Vishal and Apurva, <br> Thank you for inviting us to the Brit Fintech Awards. It was a wonderful event, and we enjoyed being a part of it. <br> Thanks once again, and I look forward to future gatherings.`,
    //   name: 'A. Satheesh (Global Exchange Limited)',
    //   img: '../assets/img/profile/13.png',
    // },
    {
      id: 4,
      text: `Hi Vishal and team, <br> Congratulations on a great event last week. Great place, generous hospitality, and great to catch up and meet with old and new connections. <br> Thank you all very much! I think it was well received and the idea of the new trade association looks very promising.`,
      name: 'Harry Deans ',
      designation: '(Link FX)',
      image: '../assets/img/profile/20.png',
    },
    // {
    //   id: 5,
    //   text: `Hi Vishal, <br> I wanted to say a big thank you for arranging such a great event last night. It was so good to meet you and the team in person finally and to have so many positive conversations with existing and potentially new merchants.`,
    //   name: 'A. Satheesh (Global Exchange Limited)',
    //   img: '../assets/img/profile/13.png',
    // },
    {
      id: 6,
      text: `Thanks for the opportunity to participate in the event, and I hope we will have more in the future, and I will do my best to sponsor you.`,
      name: 'SAMPAIO MARQUES ',
      designation: '(GCC)',
      image: '../assets/img/test-img/Sampaio.jpg',
    },
    {
      id: 7,
      text: `<span class=" text-dark">Is a cashless society a myth and why do Money Service Businesses struggle to access banking services in the UK 🇬🇧 ?</span> </br> <span class=" "> These were the topics of conversation at the Brit FinTech Awards Limited attended by the good and the great overlooking the amazing night skyline of Canary Wharf, London. </br> Montoya Wilson represented Yapily's open banking infrastructure platform in the discussion with Richard Spink from GBG Plc and Vishal Patil from Calyx Solutions UK Ltd.</span>`,
      name: 'Yapily',
  
      image: '../assets/img/test-img/Yapily.png',
      LinkLinkdin: "https://www.linkedin.com/posts/yapily_fintech-digitaleconomy-openbanking-activity-7250453895603261442-Krgo?utm_source=share&utm_medium=member_desktop",
      LinkdinUrlName: "Check out the full testimonial on LinkedIn.",
    },
    {
      id: 8,
      text: `<span class=""> <span class="text-dark">We did it! Sumsub wins Anti-Fraud Innovator of the Year at the Brit FinTech Awards Limited 🏆</span> </br> This award is a testament to our relentless drive to keep businesses safe and fraudsters out.
      </br>
      Thank you, Brit Fintech Awards, for recognizing our hard work! 
Here’s to continuing the fight against fraud—and winning it 🚀

      </span>`,
      name: 'Sumsub',
      image: '../assets/img/test-img/Sumsub.png',
      LinkLinkdin: "https://www.linkedin.com/posts/sumsub_britfintechawards2024-fraudfighters-fintech-activity-7250424356323921920-7Rro?utm_source=share&utm_medium=member_desktop",
      LinkdinUrlName: "Check out the full testimonial on LinkedIn.",
    },
    {
      id: 9,
      text: `<span class="text-dark">Volume Wins Fintech of the Year! 🏆 </span> <span class=""> </br> Hey, everyone! We’re super excited to share that Volume has snagged the Fintech of the Year Award! 🌟 This is a great milestone for us, and we couldn’t be prouder!
      </br>
      A massive shoutout to our incredible team and partners who made this happen. This award is for all of us! 🙌 
     
 </br>
Big thanks to Brit FinTech Awards Limited 🙏



      </span>`,
      name: 'Volume',
      image: '../assets/img/test-img/Volume.png',
      LinkLinkdin: "https://www.linkedin.com/posts/getvolume_financialempowerment-seamlesspayments-fintechoftheyear-activity-7252709842203607040-madk?utm_source=share&utm_medium=member_desktop",
      LinkdinUrlName: "Check out the full testimonial on LinkedIn.",
    },
    {
      id: 10,
      text: `What a week for Orbital! We’re thrilled to have won <strong class="text-dark">Payment Innovator 2024 from Brit FinTech Awards Limited 🏆</strong> This recognition means a lot to our team and clients. </br>
     Alongside other innovators in the payments space, we've merged traditional and crypto payments. We’ve taken a significant step forward by integrating both into a seamless, all-in-one platform. Our solution brings together pay-ins, payouts, conversions, global accounts in both traditional and cryptocurrencies, and a crypto payments gateway—all powered by stablecoins. This enables businesses to pay, get paid, hold, and convert in 30+ currencies, while also accepting crypto.
 </br>
Huge thanks to our team, clients, and partners for your continued support. We’re just getting started—more innovations to come!


      </span>`,
      name: 'Orbital',
      image: '../assets/img/test-img/Orbital.png',
      LinkLinkdin: "https://www.linkedin.com/posts/orbital-finance_britfintechawards2024-fintechinnovation-cryptopayments-activity-7252603166012174338-KfuT?utm_source=share&utm_medium=member_desktop",
      LinkdinUrlName: "Check out the full testimonial on LinkedIn.",
    },
    {
      id: 10,
      text: `<span class="">We’re excited to announce that we’ve won the <strong class="text-dark"> B-A-A-S Innovator 2024 Award</strong> at the  <strong class="text-dark">Brit Fintech Awards! 🏆</strong>
      </br>
      With Banking as a Service, we’re paving the way for more accessible, efficient, and flexible financial services. </br>
     A huge thank you to our amazing team and supporters for making this possible! 

Here’s to continuing to lead the way in B-A-A-S! 🚀

 </br>

     `,
      name: 'MTBS',
      image: '../assets/img/test-img/MTBS.png',
      LinkLinkdin: "https://www.linkedin.com/posts/mtbs_fintechawards-baas-innovation-activity-7252624508501508096-dM32?utm_source=share&utm_medium=member_desktop",
      LinkdinUrlName: "Check out the full testimonial on LinkedIn.",
    },
    {
      id: 11,
      text: `<span class="">I’m excited to share that Teeparam has been awarded <strong class="text-dark"> Best MSB of the Year 2024 </strong> by the Brit Fintech Awards! This remarkable achievement would not have been possible without all the customers support and partnership.

      </br>
    We are committed to pushing forward with even greater dedication to quality and technology to serve you better. Looking forward to achieving more milestones together! </br>
Thank you once again for your invaluable support. Calyx Solutions UK Ltd Brit FinTech Awards Limited


 </br>

     `,
      name: 'Teeparam',
      image: '../assets/img/test-img/Teeparam.png',
      LinkLinkdin: "https://www.linkedin.com/posts/teeparam_msboftheyear-britfintechawards-teeparamexchange-activity-7251575918559649793-eoDy?utm_source=share&utm_medium=member_desktop",
      LinkdinUrlName: "Check out the full testimonial on LinkedIn.",
     

    },
    {
      id: 12,
      text: `<span class="">We had the best time at <span class="text-dark fw-bolder">Brit FinTech Awards Limited</span> last night networking with like-minded businesses looking to improve people's everyday lives through payments.

      </br>
    
The cherry on top 🍒? We won the award for Account to Account Payment Processor of the Year! 🎉 </br>
Thank you to our partner <span class="text-dark fw-bolder"> Calyx Solutions UK Ltd </span> and <span class="text-dark fw-bolder"> Vishal Patil </span> for organising a great event. 


 </br>

     `,
      name: 'Vyne',
      image: '../assets/img/test-img/Vyne.png',
      LinkLinkdin: "https://www.linkedin.com/posts/payvyne_remittance-fintech-openbanking-activity-7250422305640579072-Jk9z?utm_source=share&utm_medium=member_desktop",
      LinkdinUrlName: "Check out the full testimonial on LinkedIn.",
     

    }
  ];

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
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
                <div className="cs-section_subtitle cs-primary_font cs-medium cs-accent_color">Testimonials 2024</div>
                <h2 className="cs-section_title cs-extra_bold">
                  Celebrating the <br />
                  <span>
                    <b
                      className="cs-extra_bold cs-accent_color"
                      style={{ color: "#c8102e" }}
                    >
                      experiences
                    </b>
                  </span>
                </h2>
                <h2 className="cs-section_title cs-extra_bold">of our guests</h2>
                <div className="cs-height_30 cs-height_lg_0"></div>
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
              {testimonials.map((testimonial, index) => (
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
                    <div
                      style={{
                        textDecoration: "none",
                        textTransform: "capitalize",
                      }}
                      dangerouslySetInnerHTML={{ __html: testimonial.text }}
                    ></div>
                  </div>
                  
                </div>
                
              ))}
            </Slider>
            {/* Custom arrow controls */}
            <div className="cs-slider_arrows cs-style1 cs-type6 cs-center">
              <div
                className="cs-left_arrow cs-center cs-accent_color_2 slick-arrow"
                onClick={() => sliderRef.current.slickPrev()} // Previous slide
              >
                <i className="fas fa-angle-left" />
              </div>
              <div
                className="cs-right_arrow cs-center cs-accent_color_2 slick-arrow"
                onClick={() => sliderRef.current.slickNext()} // Next slide
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

export default Testimonial;
