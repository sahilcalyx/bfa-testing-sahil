import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Box, Chip, ListSubheader } from "@mui/material";
import Swal from "sweetalert2";
import "./iicon.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";
import NominationAnnouncement from "../Components/NominationAnnouncement copy";
import { NavLink } from "react-router-dom";
import { Calendar, MapPin, Ticket } from "lucide-react";
import { motion } from "framer-motion";

const RegisterNow = () => {
  // Add a constant to control form disabled state
  const NOMINATIONS_CLOSED = false;

  const [captchaToken, setCaptchaToken] = useState("");
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    titleid: "",
    lastName: "",
    phoneNo: "",
    email: "",
    uploadfile: null,
    uploadfileoptional: null,
    howmanyperson: "0",
    companyregnumber: "",
    companynm: "",
    companyaddress: "",
    amountingbp: "",
    companysector: "",
    serviceyouOffer: "",
    businesscorridors: "",
    awardcate: [],
    websiteurl: "",
    aboutyourself: "",
    reCaptcha: "",
  });

  const [showAmount, setShowAmount] = useState(false);
  const [amount, setAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [awardId, setAwardId] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showMoreTerms, setShowMoreTerms] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("awardId");
    setAwardId(id);
  }, []);

  useEffect(() => {
    if (awardId) {
      setFormData((prevData) => ({
        ...prevData,
        awardcate: [awardId],
      }));
    }
  }, [awardId]);

  const handleTitleChange = (e) => {
    if (NOMINATIONS_CLOSED) return;

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

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      You can nominate for maximum 3 award categories.
    </Tooltip>
  );

  const renderTooltipTwo = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      For Brit FinTech Awards and MSB Industry applicants, uploading supporting documents can strengthen your submission.
    </Tooltip>
  );

  const handleTextAreaChange = (e) => {
    if (NOMINATIONS_CLOSED) return;

    const { id, value } = e.target;
    // Step 1: Ensure single space after commas
    let formattedValue = value.replace(/,\s*/g, ", ");
    // Step 2: Trim leading space and capitalize only the first letter
    formattedValue = formattedValue.trimStart();
    if (formattedValue.length > 0) {
      formattedValue =
        formattedValue.charAt(0).toUpperCase() + formattedValue.slice(1);
    }
    // Step 3: Set formatted value to form data
    setFormData((prevData) => ({
      ...prevData,
      [id]: formattedValue,
    }));
    // Step 4: Word count validation
    const wordCount = formattedValue.trim().split(/\s+/).length;
    const maxWords = 150;
    if (wordCount > maxWords) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: `Cannot exceed ${maxWords} words`,
      }));
    } else {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleAboutAreaTextChange = (e) => {
    if (NOMINATIONS_CLOSED) return;

    const { id, value } = e.target;
    // Capitalize only the first non-space letter
    let formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setFormData((prevData) => ({
      ...prevData,
      [id]: formattedValue,
    }));
    const wordCount = formattedValue.trim().split(/\s+/).length;
    const maxWords = 500;
    if (wordCount > maxWords) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: `Cannot exceed ${maxWords} words`,
      }));
    } else {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleSelectOpen = () => {
    if (NOMINATIONS_CLOSED) return;
    setErrors({});
  };

  const handleSelectClose = () => {
    if (NOMINATIONS_CLOSED) return;
    if (formData.awardcate.length === 0) {
      setErrors({ awardcate: "Please select at least one category" });
    }
  };

  const supportedFormats = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/pdf",
  ];
  const maxSize = 8 * 1024 * 1024; // 8MB in bytes

  const handleInputChange = (e) => {
    if (NOMINATIONS_CLOSED) return;

    const { id, value, files } = e.target;
    let newFormData = { ...formData };
    let newErrors = { ...errors };

    if (files) {
      newFormData[id] = files[0];
      delete newErrors[id];
    } else {
      newFormData[id] = value;
    }

    if (id === "uploadfile") {
      if (newFormData.uploadfile) {
        const file = newFormData.uploadfile;
        if (file.size > maxSize) {
          newErrors.uploadfile = "File size must be less than 8MB";
        } else if (!supportedFormats.includes(file.type)) {
          newErrors.uploadfile =
            "Unsupported file format. Only jpg, jpeg, pdf, and png are allowed.";
        } else {
          delete newErrors.uploadfile;
        }
      }
    }

    // Validate optional file
    if (id === "uploadfileoptional") {
      if (newFormData.uploadfileoptional) {
        const file = newFormData.uploadfileoptional;
        if (file.size > maxSize) {
          newErrors.uploadfileoptional = "File size must be less than 8MB";
        } else if (!supportedFormats.includes(file.type)) {
          newErrors.uploadfileoptional =
            "Unsupported file format. Only jpg, jpeg, pdf, and png are allowed.";
        } else {
          delete newErrors.uploadfileoptional;
        }
      }
    }

    switch (id) {
      case "firstName":
      case "lastName":
        // Allow only letters and ensure the first letter is uppercase
        const filteredValue = value.replace(/[^a-zA-Z]/g, "");
        const capitalizedValue =
          filteredValue.charAt(0).toUpperCase() + filteredValue.slice(1);
        newFormData[id] = capitalizedValue;
        delete newErrors[id];
        break;

      case "phoneNo":
        let numericValue = value;
        // Check if the mobile number starts with a "+"
        if (numericValue.startsWith("+")) {
          // Remove all non-numeric characters except "+"
          numericValue = "+" + numericValue.slice(1).replace(/\D/g, "");
        } else {
          // Remove all non-numeric characters
          numericValue = numericValue.replace(/\D/g, "");
        }
        newFormData[id] = numericValue;
        // Count actual digits (excluding optional "+")
        const digitCount = numericValue.replace(/\+/g, "").length;
        if (digitCount < 7 || digitCount > 15) {
          newErrors.phoneNo =
            "Mobile Number should be Min 7 digits and max 15 digits";
        } else {
          delete newErrors.phoneNo;
        }
        break;

      case "companysector":
      case "companynm":
      case "companyaddress":
        const capitalizedText = value.replace(/\b\w/g, (char) =>
          char.toUpperCase()
        );
        newFormData[id] = capitalizedText;
        if (capitalizedText.trim() === "") {
          newErrors[id] = `${id.replace(
            "company",
            "Company "
          )} cannot be empty`;
        } else {
          delete newErrors[id];
        }
        break;

      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value) || value.includes(" ")) {
          newErrors.email = "Invalid email address";
        } else {
          delete newErrors.email;
        }
        break;

      case "howmanyperson":
        if (value === "Select Join Person" || value === "") {
          newErrors.howmanyperson = "Number of Attendees";
        } else {
          delete newErrors.howmanyperson;
        }
        break;

      case "websiteurl":
        const urlPattern =
          /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]{2,256}\.[a-z]{2,6})(\/[a-zA-Z0-9-._~:\/?#[\]@!$&'()*+,;=]*)?$/;
        if (!value) {
          newErrors.websiteurl = "Website URL is required";
        } else {
          delete newErrors.websiteurl;
        }
        break;

      case "companyregnumber":
        // Allow letters, spaces, dots, hyphens (minimum 2 and maximum 60 characters)
        const countryPattern = /^[A-Za-z\s.-]{2,60}$/;
        if (!countryPattern.test(value.trim())) {
          newErrors.companyregnumber = "Invalid company registration Number";
        } else {
          delete newErrors.companyregnumber;
        }
        newFormData[id] = value;
        break;

      case "amountingbp":
        const currencyText = value.replace(/[^a-zA-Z0-9.,£$ ]/g, "");
        const numericAmount = currencyText.replace(/[^0-9.]/g, "");
        const formattedValue = numericAmount.replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        );
        let finalValue = formattedValue;
        if (currencyText.toUpperCase().includes("GBP")) {
          finalValue = `GBP ${formattedValue}`;
        } else if (
          currencyText.startsWith("£") ||
          currencyText.toUpperCase().includes("POUND")
        ) {
          finalValue = `£ ${formattedValue}`;
        } else if (currencyText.toUpperCase().includes("USD")) {
          finalValue = `USD ${formattedValue}`;
        } else {
          // Default to starting with "£ " if no specific currency is mentioned
          finalValue = `£ ${formattedValue}`;
        }
        // Ensure the final value starts with "£ "
        if (!finalValue.startsWith("£ ")) {
          finalValue = `£ ${formattedValue}`;
        }
        // Remove any additional spaces within the amount part
        finalValue = finalValue.replace(/\s+/g, " ");
        newFormData[id] = finalValue;
        if (formattedValue === "" || isNaN(parseFloat(numericAmount))) {
          newErrors.amountingbp = "Invalid amount";
        } else {
          delete newErrors.amountingbp;
        }
        break;

      default:
        break;
    }

    setFormData(newFormData);
    setErrors(newErrors);
  };

  const handleInputFocus = (e) => {
    if (NOMINATIONS_CLOSED) return;
    if (!formData.phoneNo) {
      setFormData({ ...formData });
    }
  };

  const handleCategoryChange = (e) => {
    if (NOMINATIONS_CLOSED) return;

    const selectedCategories = e.target.value;
    if (selectedCategories.length <= 3) {
      setFormData({
        ...formData,
        awardcate: selectedCategories,
      });
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors.awardcate;
        return newErrors;
      });
    } else {
      // Update errors state
      setErrors((prevErrors) => ({
        ...prevErrors,
        awardcate: "You can only select upto 3 categories.",
      }));
      // Show SweetAlert message
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If nominations are closed, show message and return
    if (NOMINATIONS_CLOSED) {
      Swal.fire({
        title: "Nominations Closed!",
        text: "Sorry, nominations are currently closed. Please check back later.",
        icon: "info",
        confirmButtonText: "Close",
      });
      return;
    }

    setLoading(true);

    // Rest of the submit logic remains the same...
    const newErrors = {};
    const requiredFields = [
      "firstName",
      "titleid",
      "lastName",
      "phoneNo",
      "email",
      "companynm",
      "companyaddress",
      "amountingbp",
      "companysector",
      "companyregnumber",
      "serviceyouOffer",
      "awardcate",
      "websiteurl",
      "aboutyourself",
    ];

    requiredFields.forEach((key) => {
      const value = formData[key];
      if (!value || (typeof value === "string" && !value.trim())) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)
          } is required`;
      }
    });

    if (formData.awardcate.length === 0) {
      newErrors.awardcate = "At least one category is required";
    }

    if (!formData.websiteurl) {
      newErrors.websiteurl = "Website Url is required";
    }

    const cleanPhone = (formData.phoneNo || "").replace(/\+/g, "");
    if (!cleanPhone || cleanPhone.length < 7 || cleanPhone.length > 15) {
      newErrors.phoneNo = "Mobile Number should be Min 7 digits and max 15 digits";
    }

    const supportedFormats = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ];
    const maxSize = 8 * 1024 * 1024;

    // Validate required file
    if (formData.uploadfile) {
      const file = formData.uploadfile;
      if (file.size > maxSize) {
        newErrors.uploadfile = "File size must be less than 8MB";
      } else if (!supportedFormats.includes(file.type)) {
        newErrors.uploadfile =
          "Unsupported file format. Only jpg, jpeg, pdf, and png are allowed.";
      }
    }

    // if (!captchaToken) {
    //   newErrors.recaptcha = "Captcha is required";
    // }
    // window.grecaptcha.reset();

    // Validate optional file
    if (formData.uploadfileoptional) {
      const file = formData.uploadfileoptional;
      if (file.size > maxSize) {
        newErrors.uploadfileoptional = "File size must be less than 8MB";
      } else if (!supportedFormats.includes(file.type)) {
        newErrors.uploadfileoptional =
          "Unsupported file format. Only jpg, jpeg, pdf, and png are allowed.";
      }
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

    if (!formData.titleid) {
      newErrors.titleid = "Please select a title";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      console.log("❌ Frontend form validation failed. Errors:", newErrors);
    }
    // window.grecaptcha.reset();

    if (Object.keys(newErrors).length === 0) {
      const finalFormData = {
        ...formData,
        // Spread the formData fields
        reCaptcha: captchaToken, // Add the captcha token
      };

      try {
        const PAYMENT_API_BASE = (window.location.hostname.includes("britfintechawards.com") || window.location.hostname.includes("vercel.app")) ? "https://bfa-ticket-event.vercel.app" : "https://bfa-ticket-event.vercel.app";

        // Create stripe nomination payload
        const paymentPayload = {
          ...formData,
          uploadfile: formData.uploadfile ? formData.uploadfile.name : "",
          uploadfileoptional: formData.uploadfileoptional ? formData.uploadfileoptional.name : "",
          title: formData.titleid || formData.title || "",
          recaptchaToken: "bypassed_recaptcha_nomination",
        };

        // 1. Call payment API first to create checkout session
        const checkoutRes = await axios.post(`${PAYMENT_API_BASE}/create-nomination-checkout-session`, paymentPayload);

        if (checkoutRes.data?.url) {
          try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach((key) => {
              formDataToSend.append(key, formData[key]);
            });

            await axios.post(
              "https://www.britfintechawards.com/prod/api/britfin/saveawarddetails",
              formDataToSend,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
          } catch (saveError) {
            console.error("⚠️ Failed to save award details:", saveError.response?.data || saveError.message);
          }

          // Redirect immediately to Stripe Checkout!
          window.location.href = checkoutRes.data.url;
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to create payment session. Please try again.",
            icon: "error",
            confirmButtonText: "Close",
          });
        }
      } catch (error) {
        console.error("❌ Submission/Checkout error:", error.response?.data || error.message || error);
        setErrors({
          form: error.response?.data?.error || "An error occurred while saving your data. Please try again later.",
        });
        Swal.fire({
          title: "Error!",
          text: error.response?.data?.error || "An error occurred while saving your data. Please try again later.",
          icon: "error",
          confirmButtonText: "Close",
        });
      }
    }
    setLoading(false);
  };

  const closeModal = () => {
    setShowModal(false);
    window.location.reload();
  };

  const handleCheckboxChange = (e) => {
    if (NOMINATIONS_CLOSED) return;

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
    <>
      <Helmet>
        <title>Brit Fintech Awards | Nominate for the Awards</title>
        <meta
          name="description"
          content="Nominate Now for Brit Fintech Awards to participate in celebrating innovation and excellence in the UK financial technology sector."
        />
        <meta
          name="keywords"
          content="Brit Fintech Awards, Nominate Now, Registration, Fintech Awards Registration, Innovation Celebration"
        />
        <meta name="author" content="Brit Fintech Awards" />
        <meta property="og:title" content="Brit Fintech Awards | Nominate Now" />
        <meta
          property="og:description"
          content="Nominate Now for Brit Fintech Awards to participate in celebrating innovation and excellence in the UK financial technology sector."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/event-conference/about.png"
        />
      </Helmet>
      <div>
        <div className="cs-height_90 cs-height_lg_90" />
        <div
          className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
          style={{
            backgroundImage:
              'url("../assets/img/event-conference/hero-img.jpg")',
            height: "300px",
            position: "relative",
          }}
        >
          <div className="cs-hero_pattern cs-hover_layer3" style={{}}>
            <div className="cs-hero_pattern_in cs-bg_parallax" />
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
                <br />
                {NOMINATIONS_CLOSED ? "Nominations Are Closed" : "Nominate for the Awards"}
              </h1>
              <p className="pb-0 mb-0 text-left text-white">
                {NOMINATIONS_CLOSED ? "Thank you for your interest!" : "Claim Your Crown: Nomination Made Easy!"}
              </p>
              <div className="cs-height_10 cs-height_lg_0" />
              <div className=" d-flex justify-content-start w-100">
                <h3
                  className="text-white mb-0 text-white "
                  style={{
                    maxWidth: "650px",
                    borderRadius: "0 0 10px 10px",
                    overflowX: "hidden",
                  }}
                >
                  {/* <span className=" fs-5" style={{ textAlign: "left" }}>
                    Early Bird offer : Register at £195 only till 15th Aug 2024
                  </span> */}
                </h3>
              </div>
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
      </div>
      <div className="cs-height_40 cs-height_lg_40" />
      <NominationAnnouncement />
      {/* <div class="cs-height_60 cs-height_lg_75 "></div> */}
      <div id="nominate-now" className="container" style={{ zIndex: 9999 }} >
        <div className="cs-contact cs-style2 cs-white_bg justify-content-center">
          <div className="cs-contact_left cs-accent_bg position-relative">
            <h4 className="cs-contact_title cs-semi_bold cs-white">
              HOW TO NOMINATE:
            </h4>
            <ul className="text-white" style={{ fontSize: '14px' }}>
              {NOMINATIONS_CLOSED ? (
                <div>
                  <p>
                    <strong>Nominations are currently closed.</strong>
                  </p>
                  <p>
                    Thank you for your interest in the Brit Fintech Awards. Please check back for future nomination opportunities.
                  </p>
                </div>
              ) : (
                <>
                  <p>
                    Please read the award entry Terms and Conditions carefully
                    before submitting your nomination.
                  </p>
                  <li>
                    Fill in your company information and entrant details
                    accurately.
                  </li>
                  <li>
                    Any Company registered in the UK or outside UK and operate
                    within payments or banking sectors.
                  </li>
                  <li>
                    Global FintTech companies can apply for Fintech of the Year –
                    Global.
                  </li>
                  <li>
                    Non-UK MSBs can enter the MSB of the Year – Global category.
                  </li>
                  <li>
                    Annual turnover must exceed £2 million (this does not apply
                    to startups).
                  </li>
                  <li>
                    Directors or Ultimate Beneficial Owners (UBOs) must have no
                    criminal charges or penalties from any regulatory body.
                  </li>
                  <li>
                    Nominations are open to Fintech companies and MSBs only.
                  </li>
                  <li>
                    Each company can submit nominations for up to 3 categories
                    only.
                  </li>
                  <li>
                    All nominations will be reviewed and judged by a panel of
                    industry experts.
                  </li>
                  <li>Please note that each nomination incurs a fee.</li>

                  <li>
                    If your supporting photos or documents are not ready at the
                    time of submission, you can email them later to
                    kudos@britfintechawards.com.
                  </li>
                  <li>
                    If you experience any difficulties with the nomination
                    process, please contact us at{" "}
                    <a href="tel:+442038283277">+44 20 3828 3277</a>
                  </li>
                  <li style={{ listStyleType: "none", marginTop: "10px" }}>
                    <span
                      onClick={() => setShowMoreTerms(!showMoreTerms)}
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#fff",
                        fontWeight: "bold",
                        userSelect: "none"
                      }}
                    >
                      {showMoreTerms ? "Load Less" : "Load More"}
                    </span>
                  </li>
                  {showMoreTerms && (
                    <>
                      <li>
                        Invoices will be sent to the organisation’s registered email address.
                      </li>
                      <li>
                        The Brit FinTech Awards authority reserves the right to disqualify any entry that does not comply with the terms and conditions or is deemed inappropriate, unethical, or fraudulent.
                      </li>
                      <li>
                        All entries will be evaluated based on criteria set by the BFA.
                      </li>
                      <li>
                        Incomplete nomination forms will be disqualified.
                      </li>
                      <li>
                        All submitted information will remain confidential to the BFA team and judging panel. However, BFA may use applicants’ names and basic information for promotional purposes.
                      </li>
                      <li>
                        BFA reserves the right to modify or cancel the awards in exceptional circumstances.
                      </li>
                    </>
                  )}
                </>
              )}
            </ul>
            <div className="cs-height_10 cs-height_lg_10" />
            <span>
              <em className="text-white">* Terms and Condition Apply</em>
            </span>
          </div>
          <div className="cs-contact_right cs-accent_10_bg">
            <h4 className="cs-contact_title cs-semi_bold">
              {NOMINATIONS_CLOSED ? "Nominations Closed" : "Nomination Form"}
            </h4>
            <h6 className="mt-3">Personal Details</h6>
            <form className="cs-contact_form" onSubmit={handleSubmit}>
              <div className="row cs-row_gap_20">
                <div className="col-sm-6">
                  <div className="input-container d-flex">
                    <select
                      id="titleid"
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.titleid && "error-border"
                        }`}
                      onChange={handleTitleChange}
                      value={formData.titleid}
                      disabled={NOMINATIONS_CLOSED}
                      style={{
                        maxWidth: "70px",
                        borderRadius: "8px 0 0 8px",
                        padding: "3px",
                        paddingLeft: "2px",
                        opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                        cursor: NOMINATIONS_CLOSED ? "not-allowed" : "default",
                      }}
                    >
                      <option value="">Title</option>
                      <option value="1">Mr</option>
                      <option value="2">Mrs</option>
                      <option value="3">Miss</option>
                      {/* <option value="4">Ms</option> */}
                      <option value="5">Other</option>
                    </select>
                    <input
                      type="text"
                      id="firstName"
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.firstName && "error-border"
                        }`}
                      placeholder="First Name"
                      onChange={handleInputChange}
                      maxLength="130"
                      value={formData.firstName}
                      disabled={NOMINATIONS_CLOSED}
                      style={{
                        borderRadius: "0 8px 8px 0",
                        opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                        cursor: NOMINATIONS_CLOSED ? "not-allowed" : "text",
                      }}
                    />
                  </div>
                  {errors.titleid && (
                    <div className="error text-danger">
                      Title is required
                    </div>
                  )}
                  {errors.firstName && (
                    <div className="error text-danger">
                      First name is required
                    </div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.lastName && "error-border"
                      }`}
                    placeholder="Last Name"
                    value={formData.lastName}
                    maxLength="130"
                    onChange={handleInputChange}
                    disabled={NOMINATIONS_CLOSED}
                    style={{
                      opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                      cursor: NOMINATIONS_CLOSED ? "not-allowed" : "text",
                    }}
                  />
                  {errors.lastName && (
                    <div className="error text-danger">
                      Last name is required
                    </div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    id="phoneNo"
                    name="phoneNo"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.phoneNo && "error-border"
                      }`}
                    maxLength="16"
                    placeholder="Mobile Number"
                    value={formData.phoneNo}
                    onFocus={handleInputFocus}
                    onChange={handleInputChange}
                    disabled={NOMINATIONS_CLOSED}
                    style={{
                      opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                      cursor: NOMINATIONS_CLOSED ? "not-allowed" : "text",
                    }}
                  />
                  {errors.phoneNo && (
                    <div className="error text-danger">
                      {errors.phoneNo}
                    </div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>
                <div className="col-sm-6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.email && "error-border"
                      }`}
                    placeholder="Email Address"
                    value={formData.email}
                    maxLength="100"
                    onChange={handleInputChange}
                    disabled={NOMINATIONS_CLOSED}
                    style={{
                      opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                      cursor: NOMINATIONS_CLOSED ? "not-allowed" : "text",
                    }}
                  />
                  {errors.email && (
                    <div className="error text-danger">{errors.email}</div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>
                <div className="col-sm-12">
                  <label htmlFor="category-checkbox">
                    Please Select Award Category
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <span
                        className="text-danger ms-2"
                        style={{ fontSize: "12px", cursor: "pointer" }}
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </span>
                    </OverlayTrigger>
                  </label>
                  <FormControl fullWidth>
                    <Select
                      labelId="category-checkbox"
                      id="category-checkbox"
                      className={`cs-form_field p-0 cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.awardcate && "error-border"
                        }`}
                      style={{
                        outline: "none",
                        border: "none",
                        padding: "12px",
                        opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                      }}
                      multiple
                      displayEmpty
                      value={formData.awardcate}
                      onChange={handleCategoryChange}
                      onOpen={handleSelectOpen}
                      onClose={handleSelectClose}
                      disabled={NOMINATIONS_CLOSED}
                      renderValue={(selected) => {
                        if (!selected || selected.length === 0) {
                          return <span style={{ color: "#999999" }}>Select Award</span>;
                        }
                        return (
                          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        );
                      }}
                    >
                      <ListSubheader
                        style={{
                          fontWeight: "bold",
                          fontSize: "17px",
                          textTransform: "uppercase",
                        }}
                      >
                        Fintech Awards Section
                      </ListSubheader>
                      {/* FinTech options */}
                      <MenuItem value="Account 2 Account Payment Processor of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Account 2 Account Payment Processor of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        Account 2 Account Payment Processor of the Year
                      </MenuItem>
                      <MenuItem value="Payment Innovator of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Payment Innovator of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        Payment Innovator of the Year
                      </MenuItem>
                      <MenuItem value="Pay-Out Innovator of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Pay-Out Innovator of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        Pay-Out Innovator of the Year
                      </MenuItem>
                      <MenuItem value="B-A-A-S Innovator of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "B-A-A-S Innovator of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        B-A-A-S Innovator of the Year
                      </MenuItem>
                      <MenuItem value="Payment Acquirer of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Payment Acquirer of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        Payment Acquirer of the Year
                      </MenuItem>
                      <MenuItem value="Startup of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Startup of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        Startup of the Year
                      </MenuItem>
                      <MenuItem value="Woman Entrepreneur in FinTech of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Woman Entrepreneur in FinTech of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        Woman Entrepreneur in FinTech of the Year
                      </MenuItem>
                      <MenuItem value="Anti-Fraud Innovator of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Anti-Fraud Innovator of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        Anti-Fraud Innovator of the Year
                      </MenuItem>
                      <MenuItem value="ID Verification Innovator of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "ID Verification Innovator of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        ID Verification Innovator of the Year
                      </MenuItem>
                      <MenuItem value="FinTech of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "FinTech of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        FinTech of the Year
                      </MenuItem>
                      {/* MSB Section options */}
                      <ListSubheader
                        style={{
                          fontWeight: "bold",
                          fontSize: "17px",
                          textTransform: "uppercase",
                        }}
                      >
                        MSB awards section
                      </ListSubheader>
                      <MenuItem value="Compliance Innovator of the year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Compliance Innovator of the year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        Compliance Innovator of the Year
                      </MenuItem>
                      <MenuItem value="Best in Customer Service MSB of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Best in Customer Service MSB of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        Best in Customer Service MSB of the Year
                      </MenuItem>
                      <MenuItem value="Remittance Innovator MSB of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Remittance Innovator MSB of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        Remittance Innovator MSB of the Year
                      </MenuItem>
                      <MenuItem value="Progressive Money Exchanger MSB of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Progressive Money Exchanger MSB of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        Progressive Money Exchanger MSB of the Year
                      </MenuItem>
                      <MenuItem value="MSB of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "MSB of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        MSB of the Year
                      </MenuItem>
                      <MenuItem value="MSB Disruptor of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "MSB Disruptor of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        MSB Disruptor of the Year
                      </MenuItem>
                      <MenuItem value="MSB App of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "MSB App of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        MSB App of the Year
                      </MenuItem>
                      <MenuItem value="MSB Store of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "MSB Store of the Year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        MSB Store of the Year
                      </MenuItem>
                      <ListSubheader
                        style={{
                          fontWeight: "bold",
                          fontSize: "17px",
                          textTransform: "uppercase",
                        }}
                      >
                        GLOBAL AWARDS SECTION
                      </ListSubheader>
                      <MenuItem value="FinTech of the year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "FinTech of the year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        FinTech of the Year
                      </MenuItem>
                      <MenuItem value="MSB of the year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "MSB of the year"
                          )}
                          disabled={NOMINATIONS_CLOSED}
                        />
                        MSB of the Year
                      </MenuItem>
                    </Select>
                  </FormControl>
                  {errors.awardcate && (
                    <div className="error text-danger">{errors.awardcate}</div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>
                <h6 className="mt-3">Company Details</h6>
                <div className="col-sm-6">
                  {/* <label htmlFor="company_name">Company Name</label> */}
                  <input
                    type="text"
                    id="companynm"
                    name="companynm"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.companynm && "error-border"
                      }`}
                    placeholder="Company Name"
                    maxLength="120"
                    value={formData.companynm}
                    onChange={handleInputChange}
                    disabled={NOMINATIONS_CLOSED}
                    style={{
                      opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                      cursor: NOMINATIONS_CLOSED ? "not-allowed" : "text",
                    }}
                  />
                  {errors.companynm && (
                    <div className="error text-danger">
                      Company name is required
                    </div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>
                <div className="col-sm-6">
                  {/* <label htmlFor="company_address">Company Address</label> */}
                  <input
                    type="text"
                    id="companyaddress"
                    name="companyaddress"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.companyaddress && "error-border"
                      }`}
                    placeholder="Company Address"
                    value={formData.companyaddress}
                    maxLength="120"
                    onChange={handleInputChange}
                    disabled={NOMINATIONS_CLOSED}
                    style={{
                      opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                      cursor: NOMINATIONS_CLOSED ? "not-allowed" : "text",
                    }}
                  />
                  {errors.companyaddress && (
                    <div className="error text-danger">
                      Company address is required
                    </div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>
                <div className="col-sm-6">
                  {/* <label htmlFor="incorporation_details">
                    Company registration country
                  </label> */}
                  <input
                    type="text"
                    id="companyregnumber"
                    name="companyregnumber"
                    maxLength="120"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.companyregnumber && "error-border"
                      }`}
                    placeholder="Company Registration Number"
                    value={formData.companyregnumber}
                    onChange={handleInputChange}
                    disabled={NOMINATIONS_CLOSED}
                    style={{
                      opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                      cursor: NOMINATIONS_CLOSED ? "not-allowed" : "text",
                    }}
                  />
                  {errors.companyregnumber && (
                    <div className="error text-danger">
                      Company registration Number is required
                    </div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>
                <div className="col-sm-6">
                  {/* <label htmlFor="assets">Annual Turnover</label> */}
                  <input
                    type="text"
                    id="amountingbp"
                    name="amountingbp"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.amountingbp && "error-border"
                      }`}
                    placeholder="Turnover In GBP"
                    maxLength="25"
                    value={formData.amountingbp}
                    onChange={handleInputChange}
                    disabled={NOMINATIONS_CLOSED}
                    style={{
                      opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                      cursor: NOMINATIONS_CLOSED ? "not-allowed" : "text",
                    }}
                  />
                  {errors.amountingbp && (
                    <div className="error text-danger">
                      Amount in GBP is required
                    </div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>
                <div className="col-sm-6">
                  {/* <label htmlFor="company_sector">Company Sector</label> */}
                  <input
                    type="text"
                    id="companysector"
                    name="companysector"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.companysector && "error-border"
                      }`}
                    placeholder="Company Sector"
                    value={formData.companysector}
                    onChange={handleInputChange}
                    maxLength="120"
                    disabled={NOMINATIONS_CLOSED}
                    style={{
                      opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                      cursor: NOMINATIONS_CLOSED ? "not-allowed" : "text",
                    }}
                  />
                  {errors.companysector && (
                    <div className="error text-danger">
                      Company sector is required
                    </div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>
                <div className="col-sm-6">
                  {/* <label htmlFor="website_url">Website URL</label> */}
                  <input
                    type=""
                    id="websiteurl"
                    name="websiteurl"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.websiteurl && "error-border"
                      }`}
                    placeholder="Website URL"
                    value={formData.websiteurl}
                    maxLength="80"
                    onChange={handleInputChange}
                    disabled={NOMINATIONS_CLOSED}
                    style={{
                      opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                      cursor: NOMINATIONS_CLOSED ? "not-allowed" : "text",
                    }}
                  />
                  {errors.websiteurl && (
                    <div className="error text-danger">{errors.websiteurl}</div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>
                <div className="col-sm-6">
                  {/* <label htmlFor="serviceyouOffer">Service You Offer</label> */}
                  <textarea
                    id="serviceyouOffer"
                    name="serviceyouOffer"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.serviceyouOffer && "error-border"
                      }`}
                    placeholder="Services Your Company Offers (Max 150 words)"
                    value={formData.serviceyouOffer}
                    onChange={handleTextAreaChange}
                    disabled={NOMINATIONS_CLOSED}
                    style={{
                      opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                      cursor: NOMINATIONS_CLOSED ? "not-allowed" : "text",
                    }}
                  />
                  {errors.serviceyouOffer && (
                    <div className="error text-danger">
                      Services your company offer is required
                    </div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>
                <div className="col-sm-6">
                  <textarea
                    id="businesscorridors"
                    name="businesscorridors"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.businesscorridors && "error-border"
                      }`}
                    placeholder="Company Registration Country (Max 150 words)"
                    value={formData.businesscorridors}
                    onChange={handleTextAreaChange}
                    disabled={NOMINATIONS_CLOSED}
                    style={{
                      opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                      cursor: NOMINATIONS_CLOSED ? "not-allowed" : "text",
                    }}
                  />
                  {errors.businesscorridors && (
                    <div className="error text-danger">
                      Company Registration Country is required
                    </div>
                  )}
                </div>
                <div className="cs-height_20 cs-height_lg_20" />
                <div className="col-sm-12">
                  <textarea
                    id="aboutyourself"
                    name="aboutyourself"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.aboutyourself && "error-border"
                      }`}
                    placeholder="More Details About Your Company (Max 500 words)"
                    value={formData.aboutyourself}
                    onChange={handleAboutAreaTextChange}
                    disabled={NOMINATIONS_CLOSED}
                    style={{
                      opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                      cursor: NOMINATIONS_CLOSED ? "not-allowed" : "text",
                    }}
                  />
                  {errors.aboutyourself && (
                    <div className="error text-danger">
                      More Details About Your Company is required.
                    </div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>
                <div className="col-sm-12">
                  <label htmlFor="file">
                    Upload More Details{" "}
                    <span className="text-danger" style={{ fontSize: "12px" }}>
                      (Only JPG, JPEG, PNG, and PDF files are allowed)
                    </span>
                  </label>
                  <input
                    type="file"
                    id="uploadfile"
                    name="uploadfile"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.uploadfile && "error-border"
                      }`}
                    onChange={handleInputChange}
                    disabled={NOMINATIONS_CLOSED}
                    style={{
                      opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                      cursor: NOMINATIONS_CLOSED ? "not-allowed" : "pointer",
                    }}
                  />
                  {errors.uploadfile && (
                    <div className="error text-danger">{errors.uploadfile}</div>
                  )}
                </div>
                <div className="cs-height_20 cs-height_lg_20" />
                <div className="col-12 mt-3">
                  <div className="input-field">
                    <ReCAPTCHA
                      sitekey="6LdxNigqAAAAAJ6jU9uuhEtrAw-s8J_qnsGCVvj5"
                      onChange={handleCaptchaChange}
                      style={{
                        opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                        pointerEvents: NOMINATIONS_CLOSED ? "none" : "auto",
                      }}
                    />
                    {errors.captcha && (
                      <span className="error text-danger">
                        {errors.captcha}
                      </span>
                    )}
                  </div>
                </div>
                <div className="cs-height_20 cs-height_lg_20" />
                <div className="col-12 mt-3">
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    checked={agreePrivacyPolicy}
                    onChange={handleCheckboxChange}
                    disabled={NOMINATIONS_CLOSED}
                    style={{
                      opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                      cursor: NOMINATIONS_CLOSED ? "not-allowed" : "pointer",
                    }}
                  />
                  <label htmlFor="privacyPolicy" style={{ marginLeft: "8px" }}>
                    I have read and agreed to the{" "}
                    <a href="/terms-and-conditions" target="_blank" className="a-hover">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <div className="cs-height_40 cs-height_lg_40" />
              <div className="text-center">
                <button
                  className={`cs-btn cs-style6 cs-rounded text-uppercase cs-medium cs-accent_border cs-accent_bg cs-white cs-accent_10_bg_hover cs-accent_40_border_hover cs-accent_color_hover ${NOMINATIONS_CLOSED ? "cs-btn-disabled" : ""
                    }`}
                  type="submit"
                  disabled={loading || NOMINATIONS_CLOSED}
                  style={{
                    opacity: NOMINATIONS_CLOSED ? 0.6 : 1,
                    cursor: NOMINATIONS_CLOSED ? "not-allowed" : "pointer",
                    backgroundColor: NOMINATIONS_CLOSED ? "#6c757d" : undefined,
                  }}
                >
                  <span className="cs-btn_text fw-bolder" style={{ fontSize: "18px" }}>
                    {NOMINATIONS_CLOSED
                      ? "Nominations Are Closed"
                      : loading
                        ? "Submitting..."
                        : "Nominate Now"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="cs-height_60 cs-height_lg_75" />
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
                    alt="Flying-img"
                    className="cs-flying_img cs-posiiton2 cs-to_up d-block mx-auto text-success mb-3"
                    style={{ maxWidth: "270px" }}
                  />
                  <h4
                    className="mb-3 fw-bolder"
                    style={{ textTransform: "capitalize" }}
                  >
                    Thank you for Nomination For Brit fintech awards!
                  </h4>
                  <p>
                    We have received your Nomination form. We will get back to
                    you shortly.
                  </p>
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
    </>
  );
};

export default RegisterNow;