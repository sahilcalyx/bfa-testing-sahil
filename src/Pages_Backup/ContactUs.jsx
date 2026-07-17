import axios from "axios";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [captchaToken, setCaptchaToken] = useState("");
  const [formData, setFormData] = useState({
    titleid: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    reCaptcha: "",
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(false);
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };
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

      case "phone":
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
            ? numericValue.length < 15
            : numericValue.length < 10
        ) {
          updatedErrors.phone =
            "Phone Number should be Min 10 digits and max 15 digits";
        } else {
          delete updatedErrors.phone;
        }
        break;
      default:
        break;
    }

    setErrors(updatedErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Form validation
    window.grecaptcha.reset()
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    } else if (/[^a-zA-Z\s]/.test(formData.firstName)) {
      newErrors.firstName = "Numbers are not allowed in First Name";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    } else if (/[^a-zA-Z\s]/.test(formData.lastName)) {
      newErrors.lastName = "Numbers are not allowed in Last Name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone is invalid";
    }
    if (!formData.titleid) {
      newErrors.titleid = "Please select a title";
    }

    if (!captchaToken) {
      newErrors.recaptcha = "Captcha is required";
    }

    if (!agreePrivacyPolicy) {
      Swal.fire({
        title: "Error!",
        text: "Please accept the terms and conditions.",
        icon: "error",
        confirmButtonText: "Close",
      });
      newErrors.agreePrivacyPolicy = "Please accept the terms and conditions.";
    }
    setErrors(errors);
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    // window.grecaptcha.reset();
    // If no errors, submit form data
    if (Object.keys(newErrors).length === 0) {
      const finalFormData = {
        ...formData, // Spread the formData fields
        reCaptcha: captchaToken, // Add the captcha token
      };
      axios
        .post(
          "https://www.britfintechawards.com/prod/api/britfin/savecontactdetails",
          finalFormData
        )
        .then((response) => {
          if (response.data.response === false) {
            console.error("Error:", response.data.data);

            setErrorMessage(response.data.data);

            Swal.fire({
              title: "Error!",
              text: ErrorMessage || response.data.data,
              icon: "error",
              confirmButtonText: "Close",
            });
          } else {
            setAgreePrivacyPolicy(false);
            setShowModal(true);
          }
          setLoading(false); // Always set loading to false after handling the response
        })
        .catch((error) => {
          console.error("Error submitting the form:", error);
          setLoading(false); // Always set loading to false in case of error
        });
    } else {
      setLoading(false); // Always set loading to false if there are validation errors
    }
  };

  const closeModal = () => {
    setShowModal(false);
    // Reset form data after closing modal
    setFormData({
      titleid: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
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
        <title>Brit Fintech Awards Inquiry | Fintech Award UK</title>
        <meta
          name="description"
          content="Get in touch with the Fintech Awards UK 2024 team for inquiries, support, or more information. We’re here to assist with all your questions about the awards."
        />
        <meta
          name="keywords"
          content="Brit Fintech Awards, Contact Us, Contact Information, Inquiry, Partnership Opportunities"
        />
        <meta name="author" content="Brit Fintech Awards" />
        <meta
          property="og:title"
          content="Brit Fintech Awards Inquiry | Fintech Award UK"
        />
        <meta
          property="og:description"
          content="Get in touch with the Fintech Awards UK 2024 team for inquiries, support, or more information. We’re here to assist with all your questions about the awards."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/contact-us.png"
        />
      </Helmet>

      <div className="cs-height_90 cs-height_lg_80" />
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
          <div className="cs-hero_text text-left">
            <h1
              className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-3 mb-0"
              style={{ marginTop: "40px !important" }}
            >
              Contact Us
            </h1>
            <p className="pb-0 mb-0 text-left text-white">
              Let's Connect: Reach Out Today!
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

      <div
        id="next_section"
        className="cs-flying_img_wrap cs-style5 cs-parallax"
      >
        <img
          src="../assets/img/event-conference/flying-img1.png"
          alt="Flying image"
          className="cs-flying_img cs-posiiton1 cs-to_up"
        />
        <div className="cs-height_40 cs-height_lg_40 " id="contact" />
        <div className="container">
          <div className="cs-contact cs-style2 cs-white_bg">
            <div className="cs-contact_left cs-accent_bg position-relative">
              <div className="cs-contact_info_wrap">
                <h4 className="cs-contact_title cs-semi_bold cs-white">
                  Contact Information
                </h4>
                <div className="cs-height_10 cs-height_lg_10" />
                <ul className="cs-contact_info cs-mp0 cs-white">
                  <li>
                    <i className="fas fa-phone-alt" />
                    <a href="tel:442038283277">+44 20 3828 3277</a>
                  </li>
                  <li>
                    <i className="far fa-address-book" />{" "}
                    <a href="mailto:kudos@britfintechawards.com">
                      kudos@britfintechawards.com
                    </a>
                  </li>

                  {/* <li>
                    <i className="fas fa-map-marker-alt" />
                    Level39, One Canada Square, London E14 5AB
                  </li> */}
                </ul>
                <h4 className="cs-contact_title cs-semi_bold cs-white mt-5">
                  Social Media
                </h4>
                <div className="cs-contact_btns cs-style1">
                  <NavLink
                    to="https://www.facebook.com/profile.php?id=61562935702047"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </NavLink>
                  {/* <NavLink to="#" target="_blank">
                    <i className="fab fa-twitter" />
                  </NavLink> */}
                  <NavLink
                    to="https://www.instagram.com/britfintechawards?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </NavLink>
                  <NavLink
                    to="https://www.youtube.com/channel/UCgNc-YNzudiVdnGZPh_4gmQ"
                    target="_blank"
                  >
                    <i className="fab fa-youtube" />
                  </NavLink>

                  <NavLink
                    to="https://www.linkedin.com/company/britfintechawards/posts/?feedView=all"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin" />
                  </NavLink>
                  <NavLink to="https://x.com/BritFintech" target="_blank">
                    <i className="fab fa-twitter" />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="cs-contact_right cs-accent_10_bg">
              <h4 className="cs-contact_title cs-semi_bold">Get In Touch</h4>
              <div className="cs-height_10 cs-height_lg_10" />
              <form className="cs-contact_form" onSubmit={handleSubmit}>
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
                      placeholder="Last name"
                      onChange={handleChange}
                      maxLength="130"
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
                      id="phone"
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${
                        errors.phone && "error-border"
                      }`}
                      maxLength="15"
                      placeholder="Phone"
                      onChange={handleChange}
                      value={formData.phone}
                    />
                    {errors.phone && (
                      <div className="error text-danger">{errors.phone}</div>
                    )}
                    <div className="cs-height_20 cs-height_lg_20" />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      id="email"
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${
                        errors.email && "error-border"
                      }`}
                      placeholder="Email"
                      maxLength="130"
                      onChange={handleChange}
                      value={formData.email}
                    />
                    {errors.email && (
                      <div className="error text-danger">{errors.email}</div>
                    )}
                    <div className="cs-height_20 cs-height_lg_20" />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      id="message"
                      cols={30}
                      rows={5}
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${
                        errors.message && "error-border"
                      }`}
                      placeholder="Your Message"
                      onChange={handleChange}
                      value={formData.message}
                    />
                    {errors.message && (
                      <div className="error text-danger">{errors.message}</div>
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

                  <div className="col-lg-12">
                    <button
                      type="submit"
                      disabled={loading}
                      className="cs-btn cs-style6 cs-rounded text-uppercase cs-medium cs-accent_border cs-accent_bg cs-white cs-accent_10_bg_hover cs-accent_40_border_hover cs-accent_color_hover"
                    >
                      <span className="cs-btn_text">
                        {loading ? "Submitting..." : "Submit"}
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="cs-height_40 cs-height_lg_40" />
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
                    Join us in celebrating the best and brightest in UK Fintech
                    Industry.
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
                    className="mb-3 fw-bolder"
                    style={{ textTransform: "capitalize" }}
                  >
                    Thank you for contacting us!
                  </h4>
                  <p>We will get back to you shortly.</p>
                </div>
                <div className="modal-footer justify-content-center">
                  <button
                    type="button"
                    className="cs-btn cs-style1 cs-btn_lg cs-medium text-uppercase cs-primary_font cs-accent_bg_2 cs-accent_border_2 cs-white cs-accent_bg_hover cs-white_hover cs-accent_border_hover cs-smooth_scroll"
                    onClick={closeModal}
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

export default ContactUs;
