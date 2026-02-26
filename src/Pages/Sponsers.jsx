import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { NavLink, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import PrcingTable from "../Components/PrcingTable";
const Sponsors = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const initialItemCount = 5;
  const [loading, setLoading] = useState(false);
  const [visibleItemCount, setVisibleItemCount] = useState(initialItemCount);
  const [visibleItemCount2, setVisibleItemCount2] = useState(initialItemCount);
  const [visibleItemCount3, setVisibleItemCount3] = useState(initialItemCount);
  const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  const location = useLocation();

  useEffect(() => {
    // If arriving with a hash, skip everything above and aggressively scroll to the form
    const hash = window.location.hash;
    if (hash === "#next_section" || hash === "#sponsorship-categories" || hash === "#sponsorship-form") {
      const scrollToTarget = () => {
        const targetElement = document.getElementById("next_section") || document.getElementById("sponsorship-form");
        if (targetElement) {
          // Calculate exact position minus any sticky navigation header
          const y = targetElement.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      };

      // Fire the scroll immediately and again after React paints the PrcingTable chunk
      scrollToTarget();
      setTimeout(scrollToTarget, 100);
      setTimeout(scrollToTarget, 500);
      setTimeout(scrollToTarget, 1000);
    }
  }, [location.hash]);

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      titleid: value,
    }));

    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        titleid: "",
      }));
    }
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
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
    reCaptcha: captchaToken.toString(),
  });
  const [errors, setErrors] = useState({});
  const [pricing, setPricing] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Update the form values
    setFormData({
      ...formData,
      [id]: value,
    });

    // Validate the input as the user types
    const updatedErrors = { ...errors };

    switch (id) {
      case "firstName":
        if (!value.trim()) {
          updatedErrors.firstName = "First Name is required";
        } else if (/[^a-zA-Z\s]/.test(value)) {
          updatedErrors.firstName =
            "Numbers and special characters are not allowed in First Name";
        } else {
          delete updatedErrors.firstName;
        }
        break;
      case "lastName":
        if (!value.trim()) {
          updatedErrors.lastName = "Last Name is required";
        } else if (/[^a-zA-Z\s]/.test(value)) {
          updatedErrors.lastName =
            "Numbers and special characters are not allowed in Last Name";
        } else {
          delete updatedErrors.lastName;
        }
        break;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value) || value.includes(" ")) {
          updatedErrors.email = "Invalid email address";
        } else {
          delete updatedErrors.email;
        }
        break;
      case "companyName":
        if (!value.trim()) {
          updatedErrors.companyName = "Company Name is required";
        } else if (/[^a-zA-Z\s]/.test(value)) {
          updatedErrors.companyName = "Numbers are not allowed in Company Name";
        } else {
          delete updatedErrors.companyName;
        }
        break;
      case "role":
        if (!value.trim()) {
          updatedErrors.role = "Role in Company is required";
        } else if (/[^a-zA-Z\s]/.test(value)) {
          updatedErrors.role = "Numbers are not allowed in Role";
        } else {
          delete updatedErrors.role;
        }
        break;
      case "sponsorship":
        if (!value.trim()) {
          updatedErrors.sponsorship = "Select Sponsorship is required";
        } else {
          delete updatedErrors.sponsorship;
        }
        break;
      case "phoneNo":
        let numericValue = value;
        // Check if the phone number starts with a "+"
        if (numericValue.startsWith("+")) {
          // Remove all non-numeric characters except "+"
          numericValue = "+" + numericValue.slice(1).replace(/\D/g, "");
        } else {
          // Remove all non-numeric characters
          numericValue = numericValue.replace(/\D/g, "");
        }

        // Update form data with cleaned phone number
        setFormData((prevFormData) => ({
          ...prevFormData,
          [id]: numericValue,
        }));

        // Check if the phone number is at least 10 digits (excluding the "+")
        if (
          numericValue.startsWith("+")
            ? numericValue.length < 11
            : numericValue.length < 10
        ) {
          updatedErrors.phoneNo =
            "Phone Number should be Min 10 digits and max 15 digits";
        } else {
          delete updatedErrors.phoneNo;
        }
        break;
      default:
        break;
    }

    setErrors(updatedErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form is submitted

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
      errors.companyName = "Numbers are not allowed in Company Name";
    }

    if (!captchaToken) {
      errors.recaptcha = "Captcha is required";
    }

    if (!formData.role.trim()) {
      errors.role = "Role in Company is required";
    } else if (/[^a-zA-Z\s]/.test(formData.role)) {
      errors.role = "Numbers are not allowed in Role";
    }

    if (!formData.sponsorship.trim()) {
      errors.sponsorship = "Select Sponsorship is required";
    }

    if (!agreePrivacyPolicy) {
      Swal.fire({
        title: "Error!",
        text: "Please accept the terms and conditions.",
        icon: "error",
        confirmButtonText: "Close",
      });
      errors.agreePrivacyPolicy = "Please accept the terms and conditions.";
    }
    if (!formData.phoneNo.trim()) {
      errors.phoneNo = "Mobile No is required";
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phoneNo)) {
      errors.phoneNo = "Mobile No is invalid";
    }
    if (!formData.titleid) {
      errors.titleid = "Please select a title";
    }

    setErrors(errors);
    window.grecaptcha.reset();
    // If no errors, make API call
    if (Object.keys(errors).length === 0) {
      const finalFormData = {
        ...formData, // Spread the formData fields
        reCaptcha: captchaToken, // Add the captcha token
      };
      try {
        const response = await axios.post(
          "https://www.britfintechawards.com/prod/api/britfin/savesponsors",
          finalFormData
        );

        if (response.data.response === false) {
          console.error("Error:", response.data.data);
          setErrorMessage(response.data.data);
          Swal.fire({
            title: "Error!",
            text: response.data.data,
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
          setAgreePrivacyPolicy(false);
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "An error occurred while saving your data. Please try again later.",
          icon: "error",
          confirmButtonText: "Close",
        });
      }
    }

    setLoading(false); // Set loading to false after form submission is handled
  };

  const handleCheckboxChange = (e) => {
    setAgreePrivacyPolicy(e.target.checked);
    if (e.target.checked) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors.privacyPolicy;
        return newErrors;
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>
          Become a Sponsor at Brit Fintech Awards | Sponsorship Categories
        </title>
        <meta
          name="description"
          content="Become a sponsor at the Brit Fintech Awards and gain visibility while supporting fintech innovation. Partner with a leading UK financial awards event."
        />
        <meta
          name="keywords"
          content="Brit Fintech Awards, Sponsors, Sponsorship Opportunities, Fintech Support, Financial Technology Partners"
        />
        <meta name="author" content="Brit Fintech Awards" />
        <meta
          property="og:title"
          content="Become a Sponsor at Brit Fintech Awards | Sponsorship Categories"
        />
        <meta
          property="og:description"
          content="Become a sponsor at the Brit Fintech Awards and gain visibility while supporting fintech innovation. Partner with a leading UK financial awards event."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/sponsors.png"
        />
      </Helmet>

      <div  className="cs-height_90 cs-height_lg_80" />

      <div
        className="cs-hero cs-style12 cs-type1 cs-center text-center  cs-parallax cs-hobble"
        
        style={{
          backgroundImage: 'url("../assets/img/event-conference/hero-img.jpg")',
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
          <div className="cs-hero_text text-left"       >
            <h1
              className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-3 mb-0"
              style={{ marginTop: "40px !important" }}
            >
              Sponsorship Categories
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
          <div className="cs-hero_img_circle"  />
        </div>
      </div>

      <div className="cs-gradient_bg_1 cs-flying_img_wrap cs-style8 cs-parallax">
        <img
          src="../assets/img/event-conference/flying-img8.png"
          alt="Flying"
          className="cs-flying_img cs-posiiton1 cs-to_up"
          style={{ transform: "translateY(-73.5844px)" }}
        />
        <img
          src="../assets/img/event-conference/flying-img7.png"
          alt="Flying"
          className="cs-flying_img cs-posiiton2 cs-to_right_up"
          style={{ transform: "translate(73.5844px, -73.5844px)" }}
        />
        <div className="cs-height_35 cs-height_lg_35"   />
        <div className="container">
          <div className="row">
            {/* <div
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
             
            </div> */}
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
             <PrcingTable/>
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
          id="sponsorship-form"
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
                Your Influence in the FinTech Revolution is one step away.
              </h4>
              <h5 className="text-white ">Sponsor us and</h5>
              <ul className="text-white">
                <li>
                  <span className="text-aqua">    
                    Showcase Your Brand to FinTech Leaders.
                  </span>{" "}
                  <br />
                </li>
                <li>
                  <span className="text-aqua">
                    Demonstrate Industry Expertise and Leadership.
                  </span>{" "}
                  <br />
                </li>
                <li>
                  <span className="text-aqua">
                    Networking and Relationship-Building Opportunities.
                  </span>{" "}
                  <br />
                </li>

                <li>
                  <span className="text-aqua">
                    {" "}
                    Exclusive Access and VIP Experiences.
                  </span>{" "}
                  <br />
                </li>
              </ul>
              <div className="cs-height_10 cs-height_lg_10" />
            
              <NavLink to="/terms-and-conditions">
              <span style={{fontSize: '14px' }}>
                <em>* Terms and Conditions Apply</em>
              </span>
              </NavLink>
            </div>

            <div className="cs-contact_right cs-accent_10_bg" >
              <h4 className="cs-contact_title cs-semi_bold">
                Ready To Sponsor?
              </h4>
              <p>Complete the form now and join our sponsors list.</p>
              <div className="cs-height_10 cs-height_lg_10" />
              <form className="cs-contact_form" onSubmit={handleSubmit} >
                <div className="row cs-row_gap_20">
                  <div className="col-sm-6">
                    <div className="input-container d-flex">
                      <select
                        id="titleid"
                        className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${
                          errors.titleid && "error-border"
                        }`}
                        onChange={handleTitleChange}
                        value={formData.titleid}
                        style={{
                          maxWidth: "70px",
                          borderRadius: "8px 0 0 8px",
                          padding: "3px",
                          paddingLeft: "2px",
                        }}
                      >
                        <option value="">Select Title</option>
                        <option value="1">Mr</option>
                        <option value="2">Mrs</option>
                        <option value="3">Miss</option>
                        <option value="4">Other</option>
                       
                      </select>

                      <input
                        type="text"
                        id="firstName"
                        className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${
                          errors.firstName && "error-border"
                        }`}
                        placeholder="First name"
                        onChange={handleChange}
                        value={formData.firstName}
                        style={{ borderRadius: "0 8px 8px 0" }}
                        maxLength="130"
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
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${
                        errors.lastName && "error-border"
                      }`}
                      placeholder="Enter Your Last name"
                      onChange={handleChange}
                      value={formData.lastName}
                      maxLength="130"
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
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${
                        errors.phoneNo && "error-border"
                      }`}
                      placeholder="Enter Your Mobile Number"
                      onChange={handleChange}
                      maxLength="15"
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
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${
                        errors.email && "error-border"
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
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${
                        errors.companyName && "error-border"
                      }`}
                      placeholder="Enter Your Company Name"
                      maxLength="130"
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
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${
                        errors.role && "error-border"
                      }`}
                      placeholder="Enter Your Role in Company"
                      onChange={handleChange}
                      value={formData.role}
                      maxLength="130"
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
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${
                        errors.sponsorship && "error-border"
                      }`}
                      style={{ color: "#666", cursor: 'pointer'}}
                      onChange={handleChange}
                      value={formData.sponsorship}
                    >
                      <option
                        value=""
                        style={{ fontWeight: "600", color: "orange" }}
                      >
                        Select Sponsorship
                      </option>
                      <option value="Platinum Sponsor">Platinum Sponsor</option>
                      <option value="Gold Sponsor">Gold Sponsor</option>
                      <option value="Silver Sponsor">Silver Sponsor</option>
                      {/* <option
                        value="Custom Sponsor"
                        style={{ fontWeight: "600", color: "orange" }}
                      >
                        Custom Sponsor
                      </option>
                      <option value="Hospitality Partner">
                        Hospitality Partner
                      </option>
                      <option value="Award Sponsor">Award Sponsor</option>
                      <option value="PR Partner">PR Partner</option>
                      <option value="Technology Partner">
                        Technology Partner
                      </option>
                      <option value="Innovation Partner">
                        Innovation Partner
                      </option>
                      <option value="Venue Partner">Venue Partner</option>
                      <option value="Management Partner">
                        Management Partner
                      </option>
                      <option value="Food Partner">Food Partner</option>
                      <option value="Print Media Partner">
                        Print Media Partner
                      </option>
                      <option value="Gifts Sponsor">Gifts Sponsor</option> */}
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
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${
                        errors.companyInfo && "error-border"
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

                  <div className="col-12 mt-3">
                    <div className="input-field">
                      <ReCAPTCHA
                        sitekey="6LdxNigqAAAAAJ6jU9uuhEtrAw-s8J_qnsGCVvj5"
                        onChange={handleCaptchaChange}
                      />
                      {errors.captcha && (
                        <span className="error text-danger">
                          {errors.captcha}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="cs-height_20 cs-height_lg_20" />
                  <div className="col-12 mt-1 mb-4">
                    <input
                      type="checkbox"
                      id="privacyPolicy"
                      checked={agreePrivacyPolicy}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="privacyPolicy"
                      style={{ marginLeft: "8px" }}
                    >
                      {" "}
                      I have read and agreed to the{" "}
                      <a href="/terms-and-conditions" className="a-hover">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>

                <button
                  className="cs-btn cs-style6 cs-rounded text-uppercase cs-medium cs-accent_border cs-accent_bg cs-white cs-accent_10_bg_hover cs-accent_40_border_hover cs-accent_color_hover"
                  type="submit"
                  disabled={loading}
                >
                  <span className="cs-btn_text">
                    {loading ? "Submitting..." : "Submit Interest"}
                  </span>
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
                    <a href="tel:+442038283277">+44 20 3828 3277</a>.
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
