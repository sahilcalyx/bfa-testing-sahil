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
import NominationAnnouncement from "../../Components/NominationAnnouncement";
const RegisterNow = () => {
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
    howmanyperson: "",
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
    setErrors({});
  };

  const handleSelectClose = () => {
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

        // Check if the phone number starts with a "+"
        if (numericValue.startsWith("+")) {
          // Remove all non-numeric characters except "+"
          numericValue = "+" + numericValue.slice(1).replace(/\D/g, "");
        } else {
          // Remove all non-numeric characters
          numericValue = numericValue.replace(/\D/g, "");
        }

        newFormData[id] = numericValue;

        // Check if the phone number is at least 10 digits (excluding the "+")
        if (
          numericValue.startsWith("+")
            ? numericValue.length > 15
            : numericValue.length < 10
        ) {
          newErrors.phoneNo =
            "Phone Number should be Min 10 digits and max 15 digits";
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
        // Allow alphanumeric, minimum 6 and maximum 20 characters, no spaces
        const regNumberPattern = /^[A-Za-z0-9]{6,20}$/;

        // Remove all spaces from input
        const sanitizedValue = value.replace(/\s+/g, "");

        // Validate sanitized value
        if (!regNumberPattern.test(sanitizedValue)) {
          newErrors.companyregnumber = "Invalid company registration number";
        } else {
          delete newErrors.companyregnumber;
        }

        // Update form data with sanitized value
        newFormData[id] = sanitizedValue;
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
    if (!formData.phoneNo) {
      setFormData({ ...formData });
    }
  };
  const handleCategoryChange = (e) => {
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
    setLoading(true); // Set loading to true when the form is submitted

    const newErrors = {};
    const requiredFields = [
      "firstName",
      "titleid",
      "lastName",
      "phoneNo",
      "email",

      "howmanyperson",
      "companynm",
      "companyaddress",
      "amountingbp",
      "companysector",
      "companyregnumber",
      "serviceyouOffer",
      "businesscorridors",
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
    if (!formData.phoneNo || formData.phoneNo.length < 10) {
      newErrors.phoneNo = "Phone number must be at least 10 digits";
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

    if (!captchaToken) {
      newErrors.recaptcha = "Captcha is required";
    }
    window.grecaptcha.reset()
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
    window.grecaptcha.reset()
    if (Object.keys(newErrors).length === 0) {
      const finalFormData = {
        ...formData, // Spread the formData fields
        reCaptcha: captchaToken, // Add the captcha token

      };
      try {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
          formDataToSend.append(key, formData[key]);
        });

        const response = await axios.post(
          "https://www.britfintechawards.com/prod/api/britfin/saveawarddetails",
          finalFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Response from server:", response.data);

        if (response.status === 200) {
          if (response.data.response === false) {
            setErrorMessage(response?.data?.data);
            Swal.fire({
              title: "Error!",
              text: response?.data?.data,
              icon: "error",
              confirmButtonText: "Close",
            });
          } else {
            setFormData({
              firstName: "",
              titleid: "",
              lastName: "",
              phoneNo: "",
              email: "",
              uploadfile: null,
              uploadfileoptional: null,
              howmanyperson: "",
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
            });
            setAgreePrivacyPolicy(false);
            setShowModal(true);
            setTimeout(() => {
              window.location.reload();
              setShowModal(false);
            }, 7000);
          }
        } else {
        }
      } catch (error) {
        setErrors({
          form: "An error occurred while saving your data. Please try again later.",
        });
      }
    }

    setLoading(false); // Set loading to false after form submission is handled
  };

  const closeModal = () => {
    setShowModal(false);
    window.location.reload();
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
        <meta
          property="og:title"
          content="Brit Fintech Awards | Nominate Now"
        />
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
        {/* <div className="cs-height_90 cs-height_lg_90" /> */}
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
                <br />
                Nominate for the Awards
              </h1>
              <p className="pb-0 mb-0 text-left text-white">
                Claim Your Crown: Nomination Made Easy!
              </p>
              <div className="cs-height_10 cs-height_lg_0" />
              <div className=" d-flex justify-content-start  w-100">
                <h3
                  className="text-white mb-0  text-white "
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
      <NominationAnnouncement />
      {/* <div class="cs-height_60 cs-height_lg_75 "></div> */}

      <div id="nominate-now" className="container" style={{ zIndex: 9999 }}>
        <div className="cs-contact cs-style2 cs-white_bg justify-content-center">
          <div className="cs-contact_left cs-accent_bg position-relative">
            <h4 className="cs-contact_title cs-semi_bold cs-white">
              HOW TO NOMINATE:
            </h4>
            <ul className="text-white ">
              <p>
                Please read the award entry Terms and Conditions carefully before submitting your nomination.
              </p>

              <li>
                Fill in your company information and entrant details accurately.
              </li>
              <li>
                Any Company registered in the UK or outside UK and operate within payments or banking sectors.
              </li>
              <li>
                Global FintTech companies can apply for Fintech of the Year – Global.
              </li>
              <li>
                Non-UK MSBs can enter the MSB of the Year – Global category.
              </li>
              <li>
                Annual turnover must exceed £2 million (this does not apply to startups).
              </li>

              <li>Directors or Ultimate Beneficial Owners (UBOs) must have no criminal charges or penalties from any regulatory body.</li>
              <li>Nominations are open to Fintech companies and MSBs only.</li>
              <li> Each company can submit nominations for up to 3 categories only.</li>
              <li>
                All nominations will be reviewed and judged by a panel of industry experts.
              </li>

              <li>Please note that each nomination incurs a fee.</li>
              <li > 1 free attendee with each nomination!
                Your first additional attendee joins at just £95, and every attendee thereafter at £195.</li>
              <li>
                If your supporting photos or documents are not ready at the time of submission, you can email them later to kudos@britfintechawards.com.
              </li>
              <li>
                If you experience any difficulties with the nomination process, please contact us at {" "}
                <a href="tel:+442038283277">+44 20 3828 3277</a>
              </li>
            </ul>
            <div className="cs-height_10 cs-height_lg_10" />
            <span>
              <em>* Terms and Condition Apply</em>
            </span>
          </div>
          <div className="cs-contact_right cs-accent_10_bg">
            <h4 className="cs-contact_title cs-semi_bold">Nomination Form</h4>
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
                      <option value="4">Ms</option>
                      <option value="5">Other</option>
                    </select>
                    <input
                      type="text"
                      id="firstName"
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.firstName && "error-border"
                        }`}
                      placeholder="Enter Your First Name"
                      onChange={handleInputChange}
                      maxLength="130"
                      value={formData.firstName}
                      style={{ borderRadius: "0 8px 8px 0" }}
                    />
                  </div>
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
                    placeholder="Enter Your Last Name"
                    value={formData.lastName}
                    maxLength="130"
                    onChange={handleInputChange}
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
                    maxLength="15"
                    placeholder="Enter Your Phone Number"
                    value={formData.phoneNo}
                    onFocus={handleInputFocus}
                    onChange={handleInputChange}
                  />
                  {errors.phoneNo && (
                    <div className="error text-danger">
                      Phone no is required
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
                    placeholder="Enter Your Email Address"
                    value={formData.email}
                    maxLength="100"
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <div className="error text-danger">{errors.email}</div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>



                <div className="col-sm-6 mb-3">
                  <select
                    id="howmanyperson"
                    name="howmanyperson"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.howmanyperson && "error-border"
                      }`}
                    style={{ color: "rgb(102, 102, 102)" }}
                    onChange={handleInputChange}
                    value={formData.howmanyperson}
                  >
                    <option value="">Number of Attendees</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  {errors.howmanyperson && (
                    <div className="error text-danger">
                      Please select Number of Attendees
                    </div>
                  )}
                </div>


                <div className="col-md-6">
                  <div
                    style={{
                      border: "1px solid #999999",           // Medium grey border
                      backgroundColor: "#f0f0f0",             // Light grey background
                      color: "#333333",                       // Dark grey text
                      padding: "15px",
                      borderRadius: "8px",
                      marginBottom: "10px",
                      marginTop: "1px",
                      fontSize: "14px",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)" // Already neutral grey shadow
                    }}

                  >
                    <strong>Note:</strong> Per nomination, <b>One Entry</b> is <b>Free</b>. <br />
                    First additional attendee: <strong>£95</strong>, thereafter every other additional attendee: <strong>£195</strong>.



                  </div>
                </div>
                <div className="col-sm-12">
                  <label htmlFor="howmanyperson">
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
                      }}
                      multiple
                      value={formData.awardcate}
                      onChange={handleCategoryChange}

                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
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
                        />
                        Account 2 Account Payment Processor of the Year
                      </MenuItem>
                      <MenuItem value="Payment Innovator of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Payment Innovator of the Year"
                          )}
                        />
                        Payment Innovator of the Year
                      </MenuItem>
                      <MenuItem value="Pay-Out Innovator of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Pay-Out Innovator of the Year"
                          )}
                        />
                        Pay-Out Innovator of the Year
                      </MenuItem>
                      <MenuItem value="B-A-A-S Innovator of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "B-A-A-S Innovator of the Year"
                          )}
                        />
                        B-A-A-S Innovator of the Year
                      </MenuItem>
                      <MenuItem value="Payment Acquirer of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Payment Acquirer of the Year"
                          )}
                        />
                        Payment Acquirer of the Year
                      </MenuItem>
                      <MenuItem value="Startup of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Startup of the Year"
                          )}
                        />
                        Startup of the Year
                      </MenuItem>
                      <MenuItem value="Woman Entrepreneur in FinTech of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Woman Entrepreneur in FinTech of the Year"
                          )}
                        />
                        Woman Entrepreneur in FinTech of the Year
                      </MenuItem>

                      <MenuItem value="Anti-Fraud Innovator of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Anti-Fraud Innovator of the Year"
                          )}
                        />
                        Anti-Fraud Innovator of the Year
                      </MenuItem>
                      <MenuItem value="ID Verification Innovator of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "ID Verification Innovator of the Year"
                          )}
                        />
                        ID Verification Innovator of the Year
                      </MenuItem>

                      <MenuItem value="FinTech of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "FinTech of the Year"
                          )}
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
                        MSB award section
                      </ListSubheader>
                      <MenuItem value="Compliance Innovator of the year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Compliance Innovator of the year"
                          )}
                        />
                        Compliance Innovator of the year
                      </MenuItem>
                      <MenuItem value="Best in Customer Service MSB of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Best in Customer Service MSB of the Year"
                          )}
                        />
                        Best in Customer Service MSB of the Year
                      </MenuItem>
                      <MenuItem value="Remittance Innovator MSB of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Remittance Innovator MSB of the Year"
                          )}
                        />
                        Remittance Innovator MSB of the Year
                      </MenuItem>
                      <MenuItem value="Progressive Money Exchanger MSB of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Progressive Money Exchanger MSB of the Year"
                          )}
                        />
                        Progressive Money Exchanger MSB of the Year
                      </MenuItem>
                      <MenuItem value="MSB of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "MSB of the Year"
                          )}
                        />
                        MSB of the Year
                      </MenuItem>
                      <MenuItem value="MSB Disruptor of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "MSB Disruptor of the Year"
                          )}
                        />
                        MSB Disruptor of the Year
                      </MenuItem>
                      <MenuItem value="MSB App of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "MSB App of the Year"
                          )}
                        />
                        MSB App of the Year
                      </MenuItem>
                      <MenuItem value="MSB Store of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "MSB Store of the Year"
                          )}
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
                        />
                        FinTech of the Year
                      </MenuItem>
                      <MenuItem value="MSB of the year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "MSB of the year"
                          )}
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
                    placeholder="Enter Your Company Name"
                    maxLength="120"
                    value={formData.companynm}
                    onChange={handleInputChange}
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
                    placeholder="Enter Your Company Address"
                    value={formData.companyaddress}
                    maxLength="120"
                    onChange={handleInputChange}
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
                    Company registration number
                  </label> */}
                  <input
                    type="text"
                    id="companyregnumber"
                    name="companyregnumber"
                    maxLength="120"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.companyregnumber && "error-border"
                      }`}
                    placeholder="Enter Your Company Registration Number"
                    value={formData.companyregnumber}
                    onChange={handleInputChange}
                  />
                  {errors.companyregnumber && (
                    <div className="error text-danger">
                      Company registration number is required
                    </div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>
                {/* <div className="col-sm-6">
                  <label htmlFor="country">Country of Incorporation</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${
                      errors.country && "error-border"
                    }`}
                    placeholder="Enter Your Country Name"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                  {errors.country && (
                    <div className="error text-danger">{errors.country}</div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div> */}

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
                    placeholder="Enter Your Company Sector"
                    value={formData.companysector}
                    onChange={handleInputChange}
                    maxLength="120"
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
                    placeholder="Enter Your Website URL"
                    value={formData.websiteurl}
                    maxLength="80"
                    onChange={handleInputChange}
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
                    placeholder="Enter Service You Offer
                    (Max 150 words)"
                    value={formData.serviceyouOffer}
                    onChange={handleTextAreaChange}
                  />
                  {errors.serviceyouOffer && (
                    <div className="error text-danger">
                      Service you offer is required
                    </div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6">
                  {/* <label htmlFor="business_corridors">
                    Business Corridors{" "}
                    <span
                      style={{ fontSize: "10px" }}
                      className="text-danger fw-bolder"
                    >
                      ( if you are a money transfer firm )
                    </span>
                  </label> */}
                  <textarea
                    id="businesscorridors"
                    name="businesscorridors"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.businesscorridors && "error-border"
                      }`}
                    placeholder="Enter Your Business Corridors (Max 150 words)"
                    value={formData.businesscorridors}
                    onChange={handleTextAreaChange}
                  />
                  {errors.businesscorridors && (
                    <div className="error text-danger">
                      Business corridors is required
                    </div>
                  )}
                </div>

                <div className="cs-height_20 cs-height_lg_20" />
                <div className="col-sm-12">
                  {/* <label htmlFor="about_yourself">
                    More Details About Yourself
                  </label> */}
                  <textarea
                    id="aboutyourself"
                    name="aboutyourself"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.aboutyourself && "error-border"
                      }`}
                    placeholder="Enter More Details About Your Company (Max 500 words)"
                    value={formData.aboutyourself}
                    onChange={handleAboutAreaTextChange}
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
                    {" "}
                    Upload More Details{" "}

                    <span className="text-danger" style={{ fontSize: "12px" }}>
                      (Only JPG, JPEG, PNG, and PDF files are allowed)
                    </span>
                    {/* <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltipTwo}
                    >
                      <span
                        className="text-danger ms-2"
                        style={{ fontSize: "12px", cursor: "pointer" }}
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </span>
                    </OverlayTrigger> */}
                  </label>
                  <input
                    type="file"
                    id="uploadfile"
                    name="uploadfile"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${errors.uploadfile && "error-border"
                      }`}
                    onChange={handleInputChange}
                  />
                  {errors.uploadfile && (
                    <div className="error text-danger">{errors.uploadfile}</div>
                  )}
                </div>
                {/* <div className="col-sm-12 mt-3">
                  <label htmlFor="file">
                    {" "}
                    Additional attachment{" "}
                    <span className="text-danger" style={{ fontSize: "12px" }}>
                      (Only JPG, JPEG, PNG, and PDF files are allowed)
                    </span>
                  </label>
                  <input
                    type="file"
                    id="uploadfileoptional"
                    name="uploadfileoptional"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined `}
                    onChange={handleInputChange}
                  />
                  {errors.uploadfileoptional && (
                    <div className="error text-danger">
                      {errors.uploadfileoptional}
                    </div>
                  )}
                </div>/* */}
                <div className="cs-height_20 cs-height_lg_20" />
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
                <div className="col-12 mt-3">
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    checked={agreePrivacyPolicy}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="privacyPolicy" style={{ marginLeft: "8px" }}>
                    {" "}
                    I have read and agreed to the
                    <span
                      href="#"

                      className="a-hover"
                    >
                      {" "}
                      Terms and Conditions
                    </span>
                  </label>
                </div>
              </div>
              <div className="cs-height_40 cs-height_lg_40" />

              <div className="text-center">
                {/* <button
                  type="submit"
                 
                >
                  <span className="cs-btn_text"></span>
                </button> */}
                <button
                  className="cs-btn cs-style6 cs-rounded text-uppercase cs-medium cs-accent_border cs-accent_bg cs-white cs-accent_10_bg_hover cs-accent_40_border_hover cs-accent_color_hover"
                  type="submit"
                  disabled={loading}
                >
                  <span className="cs-btn_text">
                    {loading ? <>Submitting...</> : "Nominate Now"}
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
                    className="cs-flying_img cs-posiiton2 cs-to_up text-success mb-3"
                    style={{ maxWidth: "270px" }}
                  />
                  <h4
                    className="mb-3 fw-bolder"
                    style={{ textTransform: "capitalize" }}
                  >
                    Thank you for Nomination For Brit fintech awards!
                  </h4>
                  <p>
                    We have received your Nomination form. We will get back to you
                    shortly.
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
