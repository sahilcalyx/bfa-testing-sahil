import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
const Sponsors = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const initialItemCount = 5;

  const [visibleItemCount, setVisibleItemCount] = useState(initialItemCount);
  const [visibleItemCount2, setVisibleItemCount2] = useState(initialItemCount);
  const [visibleItemCount3, setVisibleItemCount3] = useState(initialItemCount);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const handleTitleChange = (e) => {
    setFormData({ ...formData, titleid: e.target.value });
  };
  const items = [
    "Brand Awareness",
    "Logo on signage",
    "Logo on the event website with your service information in 500 words with images.",
    "Logo on the table flyers/table notice",
    "Logo on the event registration page.",
    "Logo on Registration signage.",
    "Sponsor of Fintech of the Year Award",
    "Logo on all videos produced for the event (including Promo, Kick-Off, and Highlight videos).",
    "Logo on the event’s Thank You email",
    "General Session Promo Video (2 min or less).",
    "Opportunity to display the logo on the provided notepad to be used during the event",
    "Recognition as a co-host of the event",
    "Recognition in 6 social media posts and 3 newsletters.",
    "Recognition in the Fintech magazine column of the event.",
    "Inclusion in Marketing campaigns.",
    "Speaking Opportunity on Main Stage giving introductory remarks",
    "1 Exhibit Space",
  ];

  const items2 = [
    "Logo on signage",
    "Logo on the event website with your service information in 500 words with images.",
    "Logo on the table flyers/table notice",
    "Logo on the event registration page.",
    "Logo on e-blast communications",
    "Sponsor of Fintech Innovation Award",
    "General Session Promo Video (1 min or less)",
    "Recognition in 4 social media posts and 2 newsletters.",
    "Recognition in the Fintech magazine column of the event.",
    "1 Exhibit Space",
  ];

  const items3 = [
    "Logo on the event website with your service information in 300 words",
    "Logo branding at the venue, in all marketing of the event",

    "Opportunity to display the logo on the provided notepad and the pen to be used during the event.",
    "Recognition in 2 social media posts and 2 newsletters.",
    "Recognition in the Fintech magazine column of the event.",
    "1 Exhibit Space",
  ];

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
    if (isExpanded) {
      setVisibleItemCount(initialItemCount);
    } else {
      setVisibleItemCount(items.length);
    }
  };
  const handleToggle2 = () => {
    setIsExpanded2((prevState) => !prevState);
    if (isExpanded2) {
      setVisibleItemCount2(initialItemCount);
    } else {
      setVisibleItemCount2(items.length);
    }
  };

  const handleToggle3 = () => {
    setIsExpanded3((prevState) => !prevState);
    if (isExpanded3) {
      setVisibleItemCount3(initialItemCount);
    } else {
      setVisibleItemCount3(items.length);
    }
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    companyName: "",
    role: "",
    sponsorship: "",
    companyInfo: "",
    titleid: "",
  });
  const [errors, setErrors] = useState({});
  const [pricing, setPricing] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    let updatedValue = value;

    // Remove error text as user types
    const updatedErrors = { ...errors };
    delete updatedErrors[id];
    setErrors(updatedErrors);

    // Prepend "+44" to phone number if it's not already there
    if (id === "phoneNo" && !value.startsWith("+44")) {
      updatedValue = value;
    }

    setFormData({
      ...formData,
      [id]: updatedValue,
    });

    // Set pricing based on sponsorship type
    if (id === "sponsorship") {
      if (value === "Title Sponsor") {
        setPricing("7000");
      } else if (value === "Co-Sponsor") {
        setPricing("5000");
      } else if (value === "Associate Sponsor") {
        setPricing("3000");
      } else {
        setPricing("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
    } else if (/[^a-zA-Z\s]/.test(formData.firstName)) {
      errors.firstName = "Numbers are not allowed in First Name";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    } else if (/[^a-zA-Z\s]/.test(formData.lastName)) {
      errors.lastName = "Numbers are not allowed in Last Name";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.companyName.trim()) {
      errors.companyName = "Company Name is required";
    } else if (/[^a-zA-Z\s]/.test(formData.companyName)) {
      errors.companyName = "Numbers are not allowed in company input";
    }

    if (!formData.role.trim()) {
      errors.role = "Role in Company is required";
    } else if (/[^a-zA-Z\s]/.test(formData.role)) {
      errors.role = "Numbers are not allowed in role input";
    }

    if (!formData.sponsorship.trim()) {
      errors.sponsorship = "Select Sponsorship is required";
    }

    if (!formData.phoneNo.trim()) {
      errors.phoneNo = "Mobile No is required";
    } else if (!/^\+?[0-9]{10,14}$/.test(formData.phoneNo)) {
      errors.phoneNo = "Mobile No is invalid";
    }

    setErrors(errors);

    // If no errors, make API call
    if (Object.keys(errors).length === 0) {
      axios
        .post(
          "https://www.britfintechawards.com/prod/api/britfin/savesponsors",
          formData
        )
        .then((response) => {
          if (response.data.response === false) {
            console.error("Error:", response.data.data);
            setErrorMessage(response.data.data);
            Swal.fire({
              title: "Error!",
              text: ErrorMessage,
              icon: "error",
              confirmButtonText: "Close",
            });
          } else {
            console.log(response.data);
            // Reset form data
            setFormData({
              titleid: "",
              firstName: "",
              lastName: "",
              phoneNo: "",
              email: "",
              companyName: "",
              role: "",
              sponsorship: "",
              companyInfo: "",
            });
            setShowModal(true);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  return (
    <div>
      <Helmet>
        <title> Brit Fintech Awards | Sponsors </title>
        <meta name="description" content="Description of your page" />
      </Helmet>
      <div className="cs-height_100 cs-height_lg_100" />

      <div
        className="cs-hero cs-style12 cs-type1 cs-center text-center  cs-parallax cs-hobble"
        
        style={{
          backgroundImage: 'url("../assets/img/event-conference/hero-img.jpg")',
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
              Sponsorship
            </h1>
            <p className="pb-0 mb-0 text-left text-white">
              Invest in Innovation: Sponsor the Brit Fintech Awards.
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

      <div className="cs-gradient_bg_1 cs-flying_img_wrap cs-style8 cs-parallax">
        <img
          src="../assets/img/event-conference/flying-img8.png"
          alt="Flying image"
          className="cs-flying_img cs-posiiton1 cs-to_up"
          style={{ transform: "translateY(-73.5844px)" }}
        />
        <img
          src="../assets/img/event-conference/flying-img7.png"
          alt="Flying image"
          className="cs-flying_img cs-posiiton2 cs-to_right_up"
          style={{ transform: "translate(73.5844px, -73.5844px)" }}
        />
        <div className="cs-height_35 cs-height_lg_35" />
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.2s",
                animationName: "fadeIn",
              }}
            >
              <div className="cs-text_box cs-style1 cs-type1 text-center">
                <div className="cs-text_box_subtitle cs-medium cs-accent_color">
                  BECOME A SPONSOR
                </div>
                <h2 className="cs-text_box_title text-uppercase cs-bold">
                  Sponsorship Categories
                </h2>
                <div className="cs-height_35 cs-height_lg_35" />
                <div className="cs-text_box_text ">
                  The Brit Fintech Award presents an array of sponsorship
                  opportunities crafted to deliver brands, companies, and
                  organisations with optimal visibility, exposure, and
                  engagement within the vibrant fintech community. Explore our
                  sponsorship packages below:
                </div>
                <div className="cs-height_35 cs-height_lg_35" />
              </div>
              <div className="cs-height_50 cs-height_lg_50" />
            </div>
            <div
              className="col-lg-12  wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeInRight",
                zIndex: "2",
              }}
            >
              <div className="container" bis_skin_checked={1}>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-lg-4" bis_skin_checked={1}>
                    <div
                      className="cs-pricing_table cs-style2 cs-white_bg cs-accent_color3 cs-accent_bg_2_hover  cs-white_hover cs-transition_3 "
                      bis_skin_checked={1}
                    >
                      <h2 className="cs-pricing_name cs-secondary_color text-center ">
                        TITLE SPONSOR
                      </h2>

                      <ul className="cs-pricing_feature cs-mp0">
                        {items.slice(0, visibleItemCount).map((item, index) => (
                          <li key={index}>
                            <div className="d-flex align-items-baseline">
                              <i className="fas fa-check-circle" /> {item}
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="text-center mt-2 mb-4">
                        <a
                          style={{
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                          onClick={handleToggle}
                        >
                          {isExpanded ? " Less" : "Load More"}
                        </a>
                      </div>
                      <div
                        className="cs-pricing_text mt-0"
                        bis_skin_checked={1}
                      >
                        Join us in hosting Brit Fintech Awards 2024 as the Title
                        Sponsor with exclusive sponsorship benefits and access.
                        As Title Sponsor, your company will be promoted prior
                        to, during and post event capitalising on all
                        promotional marketing of BFA.
                      </div>
                    </div>
                    <div
                      className="cs-height_30 cs-height_lg_30"
                      bis_skin_checked={1}
                    />
                  </div>
                  {/* .col */}
                  <div className="col-lg-4" bis_skin_checked={1}>
                    <div
                      className="cs-pricing_table cs-style2 cs-white_bg cs-accent_color4 cs-accent_bg_2_hover cs-white_hover cs-transition_3 "
                      bis_skin_checked={1}
                    >
                      <h2 className="cs-pricing_name cs-secondary_color text-center ">
                        CO-SPONSOR
                      </h2>

                      <ul className="cs-pricing_feature cs-mp0">
                        {items2
                          .slice(0, visibleItemCount2)
                          .map((item, index) => (
                            <li key={index}>
                              <div className="d-flex align-items-baseline">
                                <i className="fas fa-check-circle" /> {item}
                              </div>
                            </li>
                          ))}
                      </ul>
                      <div className="text-center mt-2">
                        <a
                          style={{
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                          onClick={handleToggle2}
                        >
                          {isExpanded2 ? " Less" : "Load More"}
                        </a>
                      </div>
                      <div
                        className="cs-pricing_text pt-0 mt-0"
                        bis_skin_checked={1}
                      >
                        As a Co-Sponsor, you'll receive prominent branding
                        during the awards presentation for your chosen category.
                        Your brand will feature in category-specific marketing,
                        on-stage signage, and digital displays, establishing
                        your company as a leader in the fintech vertical.
                      </div>
                    </div>
                    <div
                      className="cs-height_30 cs-height_lg_30"
                      bis_skin_checked={1}
                    />
                  </div>
                  {/* .col */}
                  <div className="col-lg-4" bis_skin_checked={1}>
                    <div
                      className="cs-pricing_table cs-style2 cs-accent_color2  cs-white_bg cs-accent_bg_2_hover cs-white_hover cs-transition_3"
                      bis_skin_checked={1}
                    >
                      <h2 className="cs-pricing_name cs-secondary_color text-center ">
                        ASSOCIATE SPONSOR
                      </h2>

                      <ul className="cs-pricing_feature cs-mp0 mt-2 pt-4">
                        {items3
                          .slice(0, visibleItemCount3)
                          .map((item, index) => (
                            <li key={index}>
                              <div className="d-flex align-items-baseline">
                                <i className="fas fa-check-circle" /> {item}
                              </div>
                            </li>
                          ))}
                      </ul>
                      <div className="text-center mt-1">
                        <a
                          style={{
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                          onClick={handleToggle3}
                        >
                          {isExpanded3 ? " Less" : "Load More"}
                        </a>
                      </div>
                      <div
                        className="cs-pricing_text pt-0 mt-0"
                        bis_skin_checked={1}
                      >
                        Boost your brand's visibility and engagement as the
                        Associate Sponsor of the Brit FinTech Awards. Enjoy
                        prominent exposure during networking sessions and
                        throughout the event.
                      </div>
                    </div>
                  </div>
                  {/* .col */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="next_section"
        className="cs-flying_img_wrap cs-style5 cs-parallax"
      >
        <img
          src="../assets/img/event-conference/flying-img1.png"
          alt="Flying image"
          className="cs-flying_img cs-posiiton1 cs-to_up"
        />
        <img
          src="../assets/img/event-conference/flying-img2.png"
          alt="Flying image"
          className="cs-flying_img cs-posiiton2 cs-to_up"
        />
        <div className="cs-height_40 cs-height_lg_40" />
        <div className="container" style={{ zIndex: "9999" }}>
          <div className="cs-contact cs-style2 cs-white_bg justify-content-center">
            <div className="cs-contact_left cs-accent_bg position-relative">
              <h4 className="cs-contact_title cs-semi_bold cs-white">
                Sponsorship Criteria
              </h4>
              <ul className="text-white">
                <li>
                  <span className="text-warning">TITLE SPONSOR</span> <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                  quidem!
                </li>
                <li>
                  <span className="text-warning">CO-SPONSOR</span> <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                  quidem!
                </li>
                <li>
                  <span className="text-warning">ASSOCIATE SPONSOR</span> <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                  quidem!
                </li>
                <li>
                  <span className="text-warning">CUSTOM SPONSORS</span> <br />
                  Our event is supported by a diverse range of custom sponsors
                  who play a crucial role in making it a success. Below are the
                  categories of our custom sponsorship:
                </li>
              </ul>
              <div className="cs-height_10 cs-height_lg_10" />
              <span>
                <em>* Terms and Conditions Apply</em>
              </span>
            </div>

            <div className="cs-contact_right cs-accent_10_bg">
              <h4 className="cs-contact_title cs-semi_bold">
                Ready to sponsor?
              </h4>
              <p>Complete the form now and join our prestigious sponsors.</p>
              <div className="cs-height_10 cs-height_lg_10" />
              <form className="cs-contact_form" onSubmit={handleSubmit}>
                <div className="row cs-row_gap_20">
                  <div className="col-sm-6">
                    <div className="input-container d-flex">
                      <select
                        id="titleid"
                        className="cs-form_field cs-white_bg cs-accent_30_border cs-primary_color"
                        onChange={handleTitleChange}
                        value={formData.titleid}
                        style={{
                          maxWidth: "70px",
                          borderRadius: "8px 0 0 8px",
                          padding: "3px",
                          paddingLeft: "14px",
                        }}
                      >
                        <option value="1">Miss</option>
                        <option value="2">Mr</option>
                        <option value="3">Mrs</option>
                      </select>
                      <input
                        type="text"
                        id="firstName"
                        className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.firstName && "error-border"
                          }`}
                        placeholder="First name"
                        onChange={handleChange}
                        value={formData.firstName}
                        style={{ borderRadius: "0 8px 8px 0" }}
                      />
                    </div>
                    {errors.firstName && (
                      <div className="error text-danger">
                        {errors.firstName}
                      </div>
                    )}
                    <div className="cs-height_20 cs-height_lg_20" />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      id="lastName"
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.lastName && "error-border"
                        }`}
                      placeholder="Enter Your Last name"
                      onChange={handleChange}
                      value={formData.lastName}
                    />
                    {errors.lastName && (
                      <div className="error text-danger">{errors.lastName}</div>
                    )}
                    <div className="cs-height_20 cs-height_lg_20" />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      id="phoneNo"
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.phoneNo && "error-border"
                        }`}
                      placeholder="Enter Your Mobile No"
                      onChange={handleChange}
                      value={formData.phoneNo}
                    />
                    {errors.phoneNo && (
                      <div className="error text-danger">{errors.phoneNo}</div>
                    )}
                    <div className="cs-height_20 cs-height_lg_20" />
                  </div>
                  <div className="col-sm-6">
                    {/* <label htmlFor="email">Email Address</label> */}
                    <input
                      type="text"
                      id="email"
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.email && "error-border"
                        }`}
                      placeholder="Enter Your Email Address"
                      onChange={handleChange}
                      value={formData.email}
                    />
                    {errors.email && (
                      <div className="error text-danger">{errors.email}</div>
                    )}
                    <div className="cs-height_20 cs-height_lg_20" />
                  </div>
                  <div className="col-sm-6">
                    {/* <label htmlFor="company_name">Company Name</label> */}
                    <input
                      type="text"
                      id="companyName"
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.companyName && "error-border"
                        }`}
                      placeholder="Enter Your Company Name"
                      onChange={handleChange}
                      value={formData.companyName}
                    />
                    {errors.companyName && (
                      <div className="error text-danger">
                        {errors.companyName}
                      </div>
                    )}
                    <div className="cs-height_20 cs-height_lg_20" />
                  </div>
                  <div className="col-sm-6">
                    {/* <label htmlFor="role">Role in Company</label> */}
                    <input
                      type="text"
                      id="role"
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.role && "error-border"
                        }`}
                      placeholder="Enter Your Role in Company"
                      onChange={handleChange}
                      value={formData.role}
                    />
                    {errors.role && (
                      <div className="error text-danger">{errors.role}</div>
                    )}
                    <div className="cs-height_20 cs-height_lg_20" />
                  </div>
                  <div className="col-lg-12 mb-3">
                    {/* <label htmlFor="sponsorship">Select Sponsorship</label> */}
                    <select
                      id="sponsorship"
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.sponsorship && "error-border"
                        }`}
                      style={{ color: "#666" }}
                      onChange={handleChange}
                      value={formData.sponsorship}
                    >
                      <option
                        value=""
                        style={{ fontWeight: "600", color: "orange" }}
                      >
                        Select Sponsorship
                      </option>
                      <option value="1">Title Sponsor</option>
                      <option value="2r">Co-Sponsor</option>
                      <option value="3">Associate Sponsor</option>
                      <option
                        value=""
                        style={{ fontWeight: "600", color: "orange" }}
                      >
                        Custom Sponsor
                      </option>
                      <option value="4">Hospitality Partner</option>
                      <option value="5">Award Sponsor</option>
                      <option value="6">PR Partner</option>
                      <option value="7">Technology Partner</option>
                      <option value="8">Innovation Partner</option>
                      <option value="9">Venue Partner</option>
                      <option value="10">Management Partner</option>
                      <option value="11">Food Partner</option>
                      <option value="12">Print Media Partner</option>
                      <option value="13">Gifts Sponsor</option>
                    </select>

                    {errors.sponsorship && (
                      <div className="error text-danger">
                        {errors.sponsorship}
                      </div>
                    )}
                  </div>

                  {/* Second input box for pricing */}
                  <div className="col-lg-6 mb-3 d-none">
                    {/* <label htmlFor="pricing">Pricing</label> */}
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text cs-form_field cs-white_bg cs-accent_30_border cs-primary_color"
                          id="basic-addon1"
                        >
                          £
                        </span>
                      </div>
                      <input
                        type="text"
                        id="pricing"
                        className="form-control cs-form_field cs-white_bg cs-accent_30_border cs-primary_color"
                        aria-label="Username"
                        style={{}}
                        disabled
                        value={pricing}
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <textarea
                      id="companyInfo"
                      cols={30}
                      rows={5}
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.companyInfo && "error-border"
                        }`}
                      placeholder="How can we help"
                      onChange={handleChange}
                      value={formData.companyInfo}
                    />
                    {errors.companyInfo && (
                      <div className="error ">{errors.companyInfo}</div>
                    )}
                    <div className="cs-height_20 cs-height_lg_20" />
                  </div>

                  <div className="col-lg-12">
                    <div className="cs-checkbox">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox" className="cs-checkbox_label cs-primary_color">I have read and agreed to the Terms & Conditions </label>
                    </div>
                    <div className="cs-height_20 cs-height_lg_20" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="cs-btn cs-style6 cs-rounded text-uppercase cs-medium cs-accent_border cs-accent_bg cs-white cs-accent_10_bg_hover cs-accent_40_border_hover cs-accent_color_hover"
                >
                  <span className="cs-btn_text">Submit Interest</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="cs-height_40 cs-height_lg_40" />
        <div
          className="cs-bg"
          style={{
            backgroundImage:
              'url("../assets/img/event-conference/newsletter-bg.jpg")',
          }}
        >
          <div
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
                      THE BRIT FINTECH AWARDS 2024
                    </div>
                    <h2 className="cs-section_title cs-extra_bold cs-white">
                      Are you ready to enter?
                    </h2>
                    <p className="text-white mt-2">
                      Join us in celebrating the best and brightest in UK
                      Fintech innovation at the Brit Fintech Awards Ceremony.
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
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div
            className="modal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <img
                    src="../assets/img/success.gif"
                    alt="Flying image text-success mb-3"
                    className="cs-flying_img cs-posiiton2 cs-to_up"
                    style={{ maxWidth: "270px" }}
                  />
                  <h4
                    className="mb-3 fw-bolder "
                    style={{ textTransform: "capitalize" }}
                  >
                    Thank you for your interest in sponsorship.{" "}
                  </h4>
                  <p>
                    {" "}
                    We will contact you shortly. If you have any urgent
                    inquiries, please feel free to <br /> contact us at{" "}
                    <a href="tel:+442071939381">+44 20 7193 9381</a>.
                  </p>
                </div>
                <div className="modal-footer justify-content-center">
                  <button
                    type="button"
                    className="cs-btn cs-style1 cs-btn_lg cs-medium text-uppercase cs-primary_font cs-accent_bg_2 cs-accent_border_2 cs-white cs-accent_bg_hover cs-white_hover cs-accent_border_hover cs-smooth_scroll"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal2 && (
        <div className="modal-overlay">
          <div
            className="modal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <img
                    src="../assets/img/success.gif"
                    alt="Flying image text-success mb-3"
                    className="cs-flying_img cs-posiiton2 cs-to_up"
                    style={{ maxWidth: "270px" }}
                  />
                  <h4
                    className="mb-3 fw-bolder "
                    style={{ textTransform: "capitalize" }}
                  >
                    {ErrorMessage}
                  </h4>
                </div>
                <div className="modal-footer justify-content-center">
                  <button
                    type="button"
                    className="cs-btn cs-style1 cs-btn_lg cs-medium text-uppercase cs-primary_font cs-accent_bg_2 cs-accent_border_2 cs-white cs-accent_bg_hover cs-white_hover cs-accent_border_hover cs-smooth_scroll"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sponsors;
