import React, { useEffect, useState, useRef } from "react";
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

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
  "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
  "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
  "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
  "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia",
  "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
  "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
  "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
  "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
  "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const RegisterNow = () => {
  const [captchaToken, setCaptchaToken] = useState("");
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [countrySearchQuery, setCountrySearchQuery] = useState("");
  const countryDropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    title: "",
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash === "#nominate-now") {
      const timer = setTimeout(() => {
        const element = document.getElementById("nominate-now");
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      title: value,
    }));

    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: "",
      }));
    }
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      You can nominate for maximum 3 award categories.
    </Tooltip>
  );
  const handleTextAreaChange = (e) => {
    const { id, value } = e.target;
    let formattedValue = value
      .replace(/(^\w|\s\w|,\s*\w)/g, (match) => match.toUpperCase()) // Capitalize first letter, after spaces and commas
      .replace(/,\s+/g, ", "); // Ensure a single space after commas

    setFormData((prevData) => ({
      ...prevData,
      [id]: formattedValue,
    }));

    const wordCount = formattedValue.trim().split(/\s+/).length;
    const maxWords = 150; // Set the maximum word limit

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
    let formattedValue = value
      .replace(/(^\w|\s\w|,\s*\w)/g, (match) => match.toUpperCase()) // Capitalize first letter, after spaces and commas
      .replace(/,\s+/g, ", "); // Ensure a single space after commas

    setFormData((prevData) => ({
      ...prevData,
      [id]: formattedValue,
    }));

    const wordCount = formattedValue.trim().split(/\s+/).length;
    const maxWords = 500; // Set the maximum word limit

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

    // Validate required file
    if (id === "uploadfile") {
      if (!newFormData.uploadfile) {
        newErrors.uploadfile = "File is required";
      } else {
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

        if (!urlPattern.test(value)) {
          newErrors.websiteurl = "Invalid Website URL";
        } else {
          delete newErrors.websiteurl;
        }
        break;

      case "companyregnumber":
        // Allow letters, spaces, dots, hyphens (minimum 2 and maximum 60 characters)
        const countryPattern = /^[A-Za-z\s.-]{2,60}$/;
        if (!countryPattern.test(value.trim())) {
          newErrors.companyregnumber = "Invalid company registration country";
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
      "title",
      "lastName",
      "phoneNo",
      "email",
      "uploadfile",
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
    if (!formData.uploadfile) {
      newErrors.uploadfile = "File is required";
    } else {
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

    if (!formData.title) {
      newErrors.title = "Please select a title";
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
              title: "",
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
        <title>Brit Fintech Awards | Register Now</title>
        <meta
          name="description"
          content="Register now for Brit Fintech Awards to participate in celebrating innovation and excellence in the UK financial technology sector."
        />
        <meta
          name="keywords"
          content="Brit Fintech Awards, Register Now, Registration, Fintech Awards Registration, Innovation Celebration"
        />
        <meta name="author" content="Brit Fintech Awards" />
        <meta
          property="og:title"
          content="Brit Fintech Awards | Register Now"
        />
        <meta
          property="og:description"
          content="Register now for Brit Fintech Awards to participate in celebrating innovation and excellence in the UK financial technology sector."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/event-conference/about.png"
        />
      </Helmet>

      <div>
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
                Register For Awards
              </h1>
              <p className="pb-0 mb-0 text-left text-white">
                Claim Your Crown: Registration Made Easy!
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

      <div className="cs-height_60 cs-height_lg_75 "></div>
      <div id="nominate-now" className="container" style={{ zIndex: 9999 }}>
        <div className="cs-contact cs-style2 cs-white_bg justify-content-center">
          <div className="cs-contact_left cs-accent_bg position-relative">
            <h4 className="cs-contact_title cs-semi_bold cs-white">
              HOW TO REGISTER:
            </h4>
            <ul className="text-white ">
              <p>
                Read the award entry guidelines and eligibility for your
                reference.
              </p>
              <li>
                Fill out the company information and entrant details fields.
              </li>
              <li>
                Any company who is registered in UK and trading related to
                payments or banking
              </li>
              <li>
                Submit your entries at £395 only (for each entry). The entries are open till 15th September 2024 ( Additional attendee will be charged £195 each)
              </li>
              <li>
                Turnover above two million/year (Not applicable for the
                startups)
              </li>
              <li>
                Directors or UBO's should not have criminal charges against
                them.
              </li>

              <li>They should not be penalised by any regulatory body.</li>
              <li>Nomination is open to Fintech Companies and MSB's</li>
              <li> Each company can nominate up to 3 categories only.</li>
              <li>
                Awards will be judged by an industry experts committee based on
                nominations received.
              </li>

              <li>Each nomination is charged.</li>
              <li>
                If your supporting photos and/or documents are not ready yet,
                you may send them directly to kudos@britfintechawards.com or{" "}
              </li>
              <li>
                Finding it difficult to register? Please contact us{" "}
                <a href="tel:442071939381">+44 2071939381</a>
              </li>
            </ul>
            <div className="cs-height_10 cs-height_lg_10" />
            <span>
              <em>* Terms and Condition Apply</em>
            </span>
          </div>
          <div className="cs-contact_right cs-accent_10_bg">
            <h4 className="cs-contact_title cs-semi_bold">Registration Form</h4>
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
                      <option value="">Title</option>
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
                      placeholder="First Name"
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
                    placeholder="Last Name"
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
                    maxLength="16"
                    placeholder="Mobile Number"
                    value={formData.phoneNo}
                    onFocus={handleInputFocus}
                    onChange={handleInputChange}
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
                      displayEmpty
                      value={formData.awardcate}
                      onChange={handleCategoryChange}

                      renderValue={(selected) => {
                        if (!selected || selected.length === 0) {
                          return <span style={{ color: "#999999" }}>Select Award</span>;
                        }
                        return (
                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                          >
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
                        Fintech Award Section
                      </ListSubheader>
                      {/* FinTech options */}
                      <MenuItem value="Payment Acquirer of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Payment Acquirer of the Year"
                          )}
                        />
                        Payment Acquirer of the Year
                      </MenuItem>
                      <MenuItem value="Bank2Bank Payment Processor of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Bank2Bank Payment Processor of the Year"
                          )}
                        />
                        Bank2Bank Payment Processor of the Year
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
                      <MenuItem value="Startup of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "Startup of the Year"
                          )}
                        />
                        Startup of the Year
                      </MenuItem>
                      <MenuItem value="FinTech of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "FinTech of the Year"
                          )}
                        />
                        FinTech of the Year
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
                      <MenuItem value="ID Screening Innovator of the Year">
                        <Checkbox
                          checked={formData.awardcate.includes(
                            "ID Screening Innovator of the Year"
                          )}
                        />
                        ID Screening Innovator of the Year
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
                        MSB of the year
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
                  />
                  {errors.companyaddress && (
                    <div className="error text-danger">
                      Company address is required
                    </div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>
                <div className="col-sm-6" ref={countryDropdownRef} style={{ position: "relative" }}>
                  {/* <label htmlFor="incorporation_details">
                    Company registration country
                  </label> */}
                  <div 
                    onClick={() => {
                      setCountryDropdownOpen(!countryDropdownOpen);
                      setCountrySearchQuery("");
                    }}
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color d-flex align-items-center justify-content-between cursor-pointer ${
                      errors.companyregnumber ? "error-border" : ""
                    }`}
                    style={{ 
                      minHeight: "55px", 
                      padding: "10px 20px", 
                      borderRadius: "10px",
                      cursor: "pointer",
                      userSelect: "none"
                    }}
                  >
                    <span style={{ color: formData.companyregnumber ? "#000" : "#a3a3a3", fontWeight: formData.companyregnumber ? "500" : "normal" }}>
                      {formData.companyregnumber || "Company Registration Country"}
                    </span>
                    <span style={{ fontSize: "10px", color: "#a3a3a3" }}>▼</span>
                  </div>

                  {countryDropdownOpen && (
                    <div 
                      style={{ 
                        position: "absolute",
                        top: "100%",
                        left: "15px",
                        right: "15px",
                        zIndex: 9999,
                        background: "#fff",
                        border: "1px solid rgba(0,0,0,0.15)",
                        borderRadius: "10px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                        marginTop: "5px",
                        overflow: "hidden"
                      }}
                    >
                      {/* Search box inside dropdown */}
                      <div style={{ padding: "10px", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                        <input
                          type="text"
                          placeholder="Search country..."
                          value={countrySearchQuery}
                          onChange={(e) => setCountrySearchQuery(e.target.value)}
                          autoFocus
                          style={{
                            width: "100%",
                            padding: "8px 12px",
                            background: "#f9f9f9",
                            border: "1px solid rgba(0,0,0,0.1)",
                            borderRadius: "6px",
                            color: "#000",
                            fontSize: "14px",
                            outline: "none"
                          }}
                        />
                      </div>

                      {/* Country options list */}
                      <div 
                        style={{ 
                          maxHeight: "220px",
                          overflowY: "auto",
                          padding: "5px 0"
                        }}
                      >
                        {countries
                          .filter((country) =>
                            country.toLowerCase().includes(countrySearchQuery.toLowerCase())
                          )
                          .map((country, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                // Simulate native change event
                                const simulatedEvent = {
                                  target: {
                                    id: "companyregnumber",
                                    value: country
                                  }
                                };
                                handleInputChange(simulatedEvent);
                                setCountryDropdownOpen(false);
                              }}
                              style={{
                                padding: "10px 20px",
                                color: "#000",
                                cursor: "pointer",
                                fontSize: "14px",
                                transition: "background 0.2s"
                              }}
                              onMouseEnter={(e) => e.target.style.background = "#f1f1f1"}
                              onMouseLeave={(e) => e.target.style.background = "transparent"}
                            >
                              {country}
                            </div>
                          ))}
                        {countries.filter((country) =>
                          country.toLowerCase().includes(countrySearchQuery.toLowerCase())
                        ).length === 0 && (
                          <div style={{ padding: "10px 20px", color: "rgba(0,0,0,0.4)", fontSize: "14px" }}>
                            No countries found
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {errors.companyregnumber && (
                    <div className="error text-danger">
                      Company registration country is required
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
                    placeholder="Country Name"
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
                    placeholder="Company Sector"
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
                    placeholder="Website URL"
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
                    placeholder="Services Your Company Offers (Max 150 words)"
                    value={formData.serviceyouOffer}
                    onChange={handleTextAreaChange}
                  />
                  {errors.serviceyouOffer && (
                    <div className="error text-danger">
                      Services your company offer is required
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
                    placeholder="Business Corridors (Max 150 words)"
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
                    placeholder="More Details About Your Company (Max 500 words)"
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
                      * (Only JPG, JPEG, PNG, and PDF files are allowed)
                    </span>
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
                <div className="col-sm-12 mt-3">
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
                </div>
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
                    <a
                      href="/terms-and-conditions"
                      style={{ color: "blue" }}
                      className="a-hover"
                    >
                      {" "}
                      Terms and Conditions
                    </a>
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
                    {loading ? <>Submitting...</> : "Register Now"}
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
                    Thank you for registering!
                  </h4>
                  <p>
                    We have received your registration. We will get back to you
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
