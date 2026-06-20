import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Select from "react-select";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";

// Material UI Imports
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import SelectMUI from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Box, Chip, ListSubheader } from "@mui/material";

// Icon Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Calendar, MapPin, Ticket, Award, Coins } from "lucide-react";

// Sub-components
import NominationAnnouncement from "../Components/NominationAnnouncement copy";
import PrcingTable from "../Components/PrcingTable";

// Common lists
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

const titleOptions = [
  { value: "", label: "Title" },
  { value: "Mr.", label: "Mr." },
  { value: "Mrs.", label: "Mrs." },
  { value: "Miss", label: "Miss" },
  { value: "Other", label: "Other" },
];

const sortedTitleOptions = [
  titleOptions.find((t) => t.value === "Mr."),
  ...titleOptions
    .filter((t) => t.value !== "Mr.")
    .sort((a, b) => a.label.localeCompare(b.label)),
];

const countryCodes = [
  { code: "93", label: "Afghanistan (+93)" },
  { code: "355", label: "Albania (+355)" },
  { code: "213", label: "Algeria (+213)" },
  { code: "376", label: "Andorra (+376)" },
  { code: "244", label: "Angola (+244)" },
  { code: "54", label: "Argentina (+54)" },
  { code: "374", label: "Armenia (+374)" },
  { code: "61", label: "Australia (+61)" },
  { code: "43", label: "Austria (+43)" },
  { code: "994", label: "Azerbaijan (+994)" },
  { code: "973", label: "Bahrain (+973)" },
  { code: "880", label: "Bangladesh (+880)" },
  { code: "375", label: "Belarus (+375)" },
  { code: "32", label: "Belgium (+32)" },
  { code: "501", label: "Belize (+501)" },
  { code: "229", label: "Benin (+229)" },
  { code: "975", label: "Bhutan (+975)" },
  { code: "591", label: "Bolivia (+591)" },
  { code: "387", label: "Bosnia and Herzegovina (+387)" },
  { code: "267", label: "Botswana (+267)" },
  { code: "55", label: "Brazil (+55)" },
  { code: "673", label: "Brunei (+673)" },
  { code: "359", label: "Bulgaria (+359)" },
  { code: "226", label: "Burkina Faso (+226)" },
  { code: "257", label: "Burundi (+257)" },
  { code: "855", label: "Cambodia (+855)" },
  { code: "237", label: "Cameroon (+237)" },
  { code: "1", label: "Canada (+1)" },
  { code: "238", label: "Cape Verde (+238)" },
  { code: "236", label: "Central African Republic (+236)" },
  { code: "235", label: "Chad (+235)" },
  { code: "56", label: "Chile (+56)" },
  { code: "86", label: "China (+86)" },
  { code: "57", label: "Colombia (+57)" },
  { code: "269", label: "Comoros (+269)" },
  { code: "242", label: "Congo (+242)" },
  { code: "682", label: "Cook Islands (+682)" },
  { code: "506", label: "Costa Rica (+506)" },
  { code: "385", label: "Croatia (+385)" },
  { code: "53", label: "Cuba (+53)" },
  { code: "357", label: "Cyprus (+357)" },
  { code: "420", label: "Czech Republic (+420)" },
  { code: "45", label: "Denmark (+45)" },
  { code: "253", label: "Djibouti (+253)" },
  { code: "593", label: "Ecuador (+593)" },
  { code: "20", label: "Egypt (+20)" },
  { code: "503", label: "El Salvador (+503)" },
  { code: "240", label: "Equatorial Guinea (+240)" },
  { code: "291", label: "Eritrea (+291)" },
  { code: "372", label: "Estonia (+372)" },
  { code: "251", label: "Ethiopia (+251)" },
  { code: "679", label: "Fiji (+679)" },
  { code: "358", label: "Finland (+358)" },
  { code: "33", label: "France (+33)" },
  { code: "995", label: "Georgia (+995)" },
  { code: "49", label: "Germany (+49)" },
  { code: "233", label: "Ghana (+233)" },
  { code: "30", label: "Greece (+30)" },
  { code: "502", label: "Guatemala (+502)" },
  { code: "224", label: "Guinea (+224)" },
  { code: "592", label: "Guyana (+592)" },
  { code: "509", label: "Haiti (+509)" },
  { code: "504", label: "Honduras (+504)" },
  { code: "852", label: "Hong Kong (+852)" },
  { code: "36", label: "Hungary (+36)" },
  { code: "354", label: "Iceland (+354)" },
  { code: "91", label: "India (+91)" },
  { code: "62", label: "Indonesia (+62)" },
  { code: "98", label: "Iran (+98)" },
  { code: "964", label: "Iraq (+964)" },
  { code: "353", label: "Ireland (+353)" },
  { code: "972", label: "Israel (+972)" },
  { code: "39", label: "Italy (+39)" },
  { code: "81", label: "Japan (+81)" },
  { code: "962", label: "Jordan (+962)" },
  { code: "7", label: "Kazakhstan (+7)" },
  { code: "254", label: "Kenya (+254)" },
  { code: "82", label: "South Korea (+82)" },
  { code: "965", label: "Kuwait (+965)" },
  { code: "996", label: "Kyrgyzstan (+996)" },
  { code: "856", label: "Laos (+856)" },
  { code: "371", label: "Latvia (+371)" },
  { code: "961", label: "Lebanon (+961)" },
  { code: "266", label: "Lesotho (+266)" },
  { code: "231", label: "Liberia (+231)" },
  { code: "218", label: "Libya (+218)" },
  { code: "423", label: "Liechtenstein (+423)" },
  { code: "370", label: "Lithuania (+370)" },
  { code: "352", label: "Luxembourg (+352)" },
  { code: "853", label: "Macau (+853)" },
  { code: "389", label: "North Macedonia (+389)" },
  { code: "261", label: "Madagascar (+261)" },
  { code: "265", label: "Malawi (+265)" },
  { code: "60", label: "Malaysia (+60)" },
  { code: "960", label: "Maldives (+960)" },
  { code: "223", label: "Mali (+223)" },
  { code: "356", label: "Malta (+356)" },
  { code: "230", label: "Mauritius (+230)" },
  { code: "52", label: "Mexico (+52)" },
  { code: "373", label: "Moldova (+373)" },
  { code: "377", label: "Monaco (+377)" },
  { code: "976", label: "Mongolia (+976)" },
  { code: "382", label: "Montenegro (+382)" },
  { code: "212", label: "Morocco (+212)" },
  { code: "258", label: "Mozambique (+258)" },
  { code: "95", label: "Myanmar (+95)" },
  { code: "264", label: "Namibia (+264)" },
  { code: "977", label: "Nepal (+977)" },
  { code: "31", label: "Netherlands (+31)" },
  { code: "64", label: "New Zealand (+64)" },
  { code: "505", label: "Nicaragua (+505)" },
  { code: "234", label: "Nigeria (+234)" },
  { code: "47", label: "Norway (+47)" },
  { code: "968", label: "Oman (+968)" },
  { code: "92", label: "Pakistan (+92)" },
  { code: "970", label: "Palestine (+970)" },
  { code: "507", label: "Panama (+507)" },
  { code: "675", label: "Papua New Guinea (+675)" },
  { code: "595", label: "Paraguay (+595)" },
  { code: "51", label: "Peru (+51)" },
  { code: "63", label: "Philippines (+63)" },
  { code: "48", label: "Poland (+48)" },
  { code: "351", label: "Portugal (+351)" },
  { code: "974", label: "Qatar (+974)" },
  { code: "40", label: "Romania (+40)" },
  { code: "7", label: "Russia (+7)" },
  { code: "250", label: "Rwanda (+250)" },
  { code: "966", label: "Saudi Arabia (+966)" },
  { code: "221", label: "Senegal (+221)" },
  { code: "381", label: "Serbia (+381)" },
  { code: "65", label: "Singapore (+65)" },
  { code: "421", label: "Slovakia (+421)" },
  { code: "386", label: "Slovenia (+386)" },
  { code: "27", label: "South Africa (+27)" },
  { code: "34", label: "Spain (+34)" },
  { code: "94", label: "Sri Lanka (+94)" },
  { code: "46", label: "Sweden (+46)" },
  { code: "41", label: "Switzerland (+41)" },
  { code: "963", label: "Syria (+963)" },
  { code: "886", label: "Taiwan (+886)" },
  { code: "992", label: "Tajikistan (+992)" },
  { code: "255", label: "Tanzania (+255)" },
  { code: "66", label: "Thailand (+66)" },
  { code: "228", label: "Togo (+228)" },
  { code: "216", label: "Tunisia (+216)" },
  { code: "90", label: "Turkey (+90)" },
  { code: "993", label: "Turkmenistan (+993)" },
  { code: "256", label: "Uganda (+256)" },
  { code: "380", label: "Ukraine (+380)" },
  { code: "971", label: "United Arab Emirates (+971)" },
  { code: "44", label: "United Kingdom (+44)" },
  { code: "1", label: "United States (+1)" },
  { code: "598", label: "Uruguay (+598)" },
  { code: "998", label: "Uzbekistan (+998)" },
  { code: "58", label: "Venezuela (+58)" },
  { code: "84", label: "Vietnam (+84)" },
  { code: "967", label: "Yemen (+967)" },
  { code: "260", label: "Zambia (+260)" },
  { code: "263", label: "Zimbabwe (+263)" },
];

const countryCodeOptions = countryCodes.map((c) => ({
  value: c.code,
  label: c.label,
}));

const MAX_TICKETS = 5;
const TICKET_PRICE = 195;

const ticketOptions = [
  { value: "", label: "Tickets" },
  ...[...Array(MAX_TICKETS)].map((_, i) => {
    const count = i + 1;
    return {
      value: count,
      label: `${count} Ticket${count > 1 ? "s" : ""} – £${count * TICKET_PRICE}`,
    };
  }),
];

/* =========================================================================
   1. NOMINATION COMPONENT (from RegisterNow.jsx)
   ========================================================================= */
const NominationForm = () => {
  const NOMINATIONS_CLOSED = false;
  const [captchaToken, setCaptchaToken] = useState("");
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [countrySearchQuery, setCountrySearchQuery] = useState("");
  const countryDropdownRef = useRef(null);

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

  const [showModal, setShowModal] = useState(false);
  const [awardId, setAwardId] = useState("");
  const [errors, setErrors] = useState({});
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

  const handleTitleChange = (e) => {
    if (NOMINATIONS_CLOSED) return;
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, titleid: value }));
    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, titleid: "" }));
    }
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const renderTooltip = (props) => (
    <div
      {...props}
      style={{
        background: "rgba(0,0,0,0.85)",
        color: "#fff",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        zIndex: 10000,
        position: "absolute",
        ...props.style
      }}
    >
      You can nominate for maximum 3 award categories.
    </div>
  );

  const handleTextAreaChange = (e) => {
    if (NOMINATIONS_CLOSED) return;
    const { id, value } = e.target;
    let formattedValue = value.replace(/,\s*/g, ", ").trimStart();
    if (formattedValue.length > 0) {
      formattedValue = formattedValue.charAt(0).toUpperCase() + formattedValue.slice(1);
    }
    setFormData((prevData) => ({ ...prevData, [id]: formattedValue }));
    const wordCount = formattedValue.trim().split(/\s+/).length;
    const maxWords = 150;
    if (wordCount > maxWords) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: `Cannot exceed ${maxWords} words` }));
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
    let formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setFormData((prevData) => ({ ...prevData, [id]: formattedValue }));
    const wordCount = formattedValue.trim().split(/\s+/).length;
    const maxWords = 500;
    if (wordCount > maxWords) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: `Cannot exceed ${maxWords} words` }));
    } else {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

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

    const supportedFormats = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
    const maxSize = 8 * 1024 * 1024;

    if (id === "uploadfile" && newFormData.uploadfile) {
      const file = newFormData.uploadfile;
      if (file.size > maxSize) {
        newErrors.uploadfile = "File size must be less than 8MB";
      } else if (!supportedFormats.includes(file.type)) {
        newErrors.uploadfile = "Unsupported file format. Only jpg, jpeg, pdf, and png are allowed.";
      } else {
        delete newErrors.uploadfile;
      }
    }

    if (id === "uploadfileoptional" && newFormData.uploadfileoptional) {
      const file = newFormData.uploadfileoptional;
      if (file.size > maxSize) {
        newErrors.uploadfileoptional = "File size must be less than 8MB";
      } else if (!supportedFormats.includes(file.type)) {
        newErrors.uploadfileoptional = "Unsupported file format. Only jpg, jpeg, pdf, and png are allowed.";
      } else {
        delete newErrors.uploadfileoptional;
      }
    }

    switch (id) {
      case "firstName":
      case "lastName":
        const filteredValue = value.replace(/[^a-zA-Z]/g, "");
        const capitalizedValue = filteredValue.charAt(0).toUpperCase() + filteredValue.slice(1);
        newFormData[id] = capitalizedValue;
        delete newErrors[id];
        break;

      case "phoneNo":
        let numericValue = value;
        if (numericValue.startsWith("+")) {
          numericValue = "+" + numericValue.slice(1).replace(/\D/g, "");
        } else {
          numericValue = numericValue.replace(/\D/g, "");
        }
        newFormData[id] = numericValue;
        const digitCount = numericValue.replace(/\+/g, "").length;
        if (digitCount < 7 || digitCount > 15) {
          newErrors.phoneNo = "Mobile Number should be Min 10 digits and max 15 digits";
        } else {
          delete newErrors.phoneNo;
        }
        break;

      case "companysector":
        const capitalizedSector = value.replace(/\b\w/g, (char) => char.toUpperCase());
        newFormData[id] = capitalizedSector;
        if (capitalizedSector.trim() === "") {
          newErrors.companysector = "Company Sector is required";
        } else if (!/^[A-Za-z\s]+$/.test(capitalizedSector.trim())) {
          newErrors.companysector = "Company Sector must contain only letters and spaces";
        } else {
          delete newErrors.companysector;
        }
        break;

      case "companynm":
      case "companyaddress":
        const capitalizedText = value.replace(/\b\w/g, (char) => char.toUpperCase());
        newFormData[id] = capitalizedText;
        if (capitalizedText.trim() === "") {
          newErrors[id] = `${id.replace("company", "Company ")} cannot be empty`;
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

      case "websiteurl":
        if (!value) {
          newErrors.websiteurl = "Website URL is required";
        } else {
          delete newErrors.websiteurl;
        }
        break;

      case "companyregnumber":
        const registrationPattern = /^[A-Za-z0-9\s.-]{2,60}$/;
        if (!registrationPattern.test(value.trim())) {
          newErrors.companyregnumber = "Company Registration Number should be alphanumeric or numeric";
        } else {
          delete newErrors.companyregnumber;
        }
        newFormData[id] = value;
        break;

      case "amountingbp":
        const currencyText = value.replace(/[^a-zA-Z0-9.,£$ ]/g, "");
        const numericAmount = currencyText.replace(/[^0-9.]/g, "");
        const formattedVal = numericAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let finalVal = formattedVal;
        if (currencyText.toUpperCase().includes("GBP")) {
          finalVal = `GBP ${formattedVal}`;
        } else if (currencyText.startsWith("£") || currencyText.toUpperCase().includes("POUND")) {
          finalVal = `£ ${formattedVal}`;
        } else if (currencyText.toUpperCase().includes("USD")) {
          finalVal = `USD ${formattedVal}`;
        } else {
          finalVal = `£ ${formattedVal}`;
        }
        if (!finalVal.startsWith("£ ")) {
          finalVal = `£ ${formattedVal}`;
        }
        finalVal = finalVal.replace(/\s+/g, " ");
        newFormData[id] = finalVal;
        if (formattedVal === "" || isNaN(parseFloat(numericAmount))) {
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

  const handleCategoryChange = (e) => {
    if (NOMINATIONS_CLOSED) return;
    const selectedCategories = e.target.value;
    if (selectedCategories.length <= 3) {
      setFormData({ ...formData, awardcate: selectedCategories });
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors.awardcate;
        return newErrors;
      });
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, awardcate: "You can only select up to 3 categories." }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    const newErrors = {};
    const requiredFields = [
      "firstName", "titleid", "lastName", "phoneNo", "email", "companynm", "companyaddress",
      "amountingbp", "companysector", "companyregnumber", "serviceyouOffer", "awardcate",
      "websiteurl", "aboutyourself"
    ];

    requiredFields.forEach((key) => {
      const val = formData[key];
      if (!val || (typeof val === "string" && !val.trim())) {
        if (key === "companyregnumber") {
          newErrors[key] = "Company Registration Number is required";
        } else if (key === "companysector") {
          newErrors[key] = "Company Sector is required";
        } else {
          newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        }
      }
    });

    if (formData.awardcate.length === 0) {
      newErrors.awardcate = "At least one category is required";
    }

    if (!formData.websiteurl) {
      newErrors.websiteurl = "Website Url is required";
    }

    const cleanPhone = (formData.phoneNo || "").replace(/\+/g, "");
    if (!cleanPhone || cleanPhone.length < 10 || cleanPhone.length > 15) {
      newErrors.phoneNo = "Mobile Number should be Min 10 digits and max 15 digits";
    }

    const supportedFormats = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
    const maxSize = 8 * 1024 * 1024;

    if (formData.uploadfile) {
      const file = formData.uploadfile;
      if (file.size > maxSize) {
        newErrors.uploadfile = "File size must be less than 8MB";
      } else if (!supportedFormats.includes(file.type)) {
        newErrors.uploadfile = "Unsupported file format. Only jpg, jpeg, pdf, and png are allowed.";
      }
    }

    if (formData.uploadfileoptional) {
      const file = formData.uploadfileoptional;
      if (file.size > maxSize) {
        newErrors.uploadfileoptional = "File size must be less than 8MB";
      } else if (!supportedFormats.includes(file.type)) {
        newErrors.uploadfileoptional = "Unsupported file format. Only jpg, jpeg, pdf, and png are allowed.";
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

    if (Object.keys(newErrors).length === 0) {
      try {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
          if (key === "awardcate") {
            formData[key].forEach((val) => {
              formDataToSend.append("awardcate", val);
            });
          } else {
            formDataToSend.append(key, formData[key]);
          }
        });
        formDataToSend.append("reCaptcha", captchaToken || "");

        Swal.fire({
          title: "Saving Nomination...",
          text: "Uploading your files and saving registration details. Please wait.",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        const saveRes = await axios.post("/api/nomination", formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (saveRes.data?.response) {
          const nominationId = saveRes.data.data.id;
          const PAYMENT_API_BASE = "https://bfa-ticket-event.vercel.app";
          const paymentPayload = {
            ...formData,
            id: nominationId,
            nominationId: nominationId,
            uploadfile: formData.uploadfile ? formData.uploadfile.name : "",
            uploadfileoptional: formData.uploadfileoptional ? formData.uploadfileoptional.name : "",
            title: formData.titleid || formData.title || "",
            recaptchaToken: "bypassed_recaptcha_nomination",
          };

          const checkoutRes = await axios.post(`${PAYMENT_API_BASE}/create-nomination-checkout-session`, paymentPayload);

          if (checkoutRes.data?.url) {
            window.location.href = checkoutRes.data.url;
          } else {
            Swal.fire({
              title: "Error!",
              text: "Failed to create payment session. Please try again.",
              icon: "error",
              confirmButtonText: "Close",
            });
          }
        } else {
          Swal.fire({
            title: "Error!",
            text: saveRes.data?.data || "Failed to save nomination details. Please try again.",
            icon: "error",
            confirmButtonText: "Close",
          });
        }
      } catch (error) {
        console.error("❌ Submission error:", error);
        const errMsg = error.response?.data?.data || error.response?.data?.error || "An error occurred while saving your data. Please try again later.";
        setErrors({ form: errMsg });
        Swal.fire({
          title: "Error!",
          text: errMsg,
          icon: "error",
          confirmButtonText: "Close",
        });
      }
    }
    setLoading(false);
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
      <NominationAnnouncement />
      <div id="nominate-now" className="container mt-4" style={{ zIndex: 9999 }}>
        <div className="cs-contact cs-style2 cs-white_bg justify-content-center">
          <div className="cs-contact_left cs-accent_bg position-relative">
            <h4 className="cs-contact_title cs-semi_bold cs-white">HOW TO NOMINATE:</h4>
            <ul className="text-white" style={{ fontSize: '14px', listStyleType: 'disc', paddingLeft: '20px' }}>
              {NOMINATIONS_CLOSED ? (
                <div>
                  <p><strong>Nominations are currently closed.</strong></p>
                  <p>Thank you for your interest. Please check back later.</p>
                </div>
              ) : (
                <>
                  <p>Please read the entry terms carefully before submitting.</p>
                  <li>Fill in company and entrant details accurately.</li>
                  <li>Open to companies operating in payments or banking sectors globally.</li>
                  <li>Annual turnover must exceed £2 million (except startups).</li>
                  <li>Max 3 categories per company.</li>
                  <li>Nominations will be reviewed by expert judges.</li>
                  <li>Note: nomination fee applies.</li>
                  <li>Send supporting documents to kudos@britfintechawards.com if not uploaded.</li>
                </>
              )}
            </ul>
            <div className="cs-height_10 cs-height_lg_10" />
            <span><em className="text-white">* Terms and Condition Apply</em></span>
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
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.titleid && "error-border"}`}
                      onChange={handleTitleChange}
                      value={formData.titleid}
                      style={{ maxWidth: "70px", borderRadius: "8px 0 0 8px", padding: "3px" }}
                    >
                      <option value="">Title</option>
                      <option value="1">Mr</option>
                      <option value="2">Mrs</option>
                      <option value="3">Miss</option>
                      <option value="5">Other</option>
                    </select>
                    <input
                      type="text"
                      id="firstName"
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.firstName && "error-border"}`}
                      placeholder="First Name"
                      onChange={handleInputChange}
                      maxLength="130"
                      value={formData.firstName}
                      style={{ borderRadius: "0 8px 8px 0", flex: 1 }}
                    />
                  </div>
                  {(errors.titleid || errors.firstName) && (
                    <div className="error text-danger">Title and First Name are required</div>
                  )}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6">
                  <input
                    type="text"
                    id="lastName"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.lastName && "error-border"}`}
                    placeholder="Last Name"
                    value={formData.lastName}
                    maxLength="130"
                    onChange={handleInputChange}
                  />
                  {errors.lastName && <div className="error text-danger">Last name is required</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6">
                  <input
                    type="text"
                    id="phoneNo"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.phoneNo && "error-border"}`}
                    placeholder="Mobile Number"
                    value={formData.phoneNo}
                    onChange={handleInputChange}
                  />
                  {errors.phoneNo && <div className="error text-danger">{errors.phoneNo}</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6">
                  <input
                    type="email"
                    id="email"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.email && "error-border"}`}
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <div className="error text-danger">{errors.email}</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-12">
                  <label htmlFor="category-checkbox">Please Select Award Category (Max 3)</label>
                  <FormControl fullWidth>
                    <SelectMUI
                      labelId="category-checkbox"
                      id="category-checkbox"
                      className={`cs-form_field p-0 cs-white_bg cs-accent_30_border cs-primary_color ${errors.awardcate && "error-border"}`}
                      style={{ padding: "12px", border: "none" }}
                      multiple
                      displayEmpty
                      value={formData.awardcate}
                      onChange={handleCategoryChange}
                      renderValue={(selected) => {
                        if (!selected || selected.length === 0) {
                          return <span style={{ color: "#999999" }}>Select Award</span>;
                        }
                        return (
                          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                            {selected.map((value) => <Chip key={value} label={value} />)}
                          </Box>
                        );
                      }}
                    >
                      <ListSubheader style={{ fontWeight: "bold", fontSize: "15px" }}>Fintech Awards Section</ListSubheader>
                      <MenuItem value="Account 2 Account Payment Processor of the Year">
                        <Checkbox checked={formData.awardcate.includes("Account 2 Account Payment Processor of the Year")} />
                        Account 2 Account Payment Processor of the Year
                      </MenuItem>
                      <MenuItem value="Payment Innovator of the Year">
                        <Checkbox checked={formData.awardcate.includes("Payment Innovator of the Year")} />
                        Payment Innovator of the Year
                      </MenuItem>
                      <MenuItem value="Pay-Out Innovator of the Year">
                        <Checkbox checked={formData.awardcate.includes("Pay-Out Innovator of the Year")} />
                        Pay-Out Innovator of the Year
                      </MenuItem>
                      <MenuItem value="B-A-A-S Innovator of the Year">
                        <Checkbox checked={formData.awardcate.includes("B-A-A-S Innovator of the Year")} />
                        B-A-A-S Innovator of the Year
                      </MenuItem>
                      <MenuItem value="Payment Acquirer of the Year">
                        <Checkbox checked={formData.awardcate.includes("Payment Acquirer of the Year")} />
                        Payment Acquirer of the Year
                      </MenuItem>
                      <MenuItem value="Startup of the Year">
                        <Checkbox checked={formData.awardcate.includes("Startup of the Year")} />
                        Startup of the Year
                      </MenuItem>
                      <MenuItem value="Woman Entrepreneur in FinTech of the Year">
                        <Checkbox checked={formData.awardcate.includes("Woman Entrepreneur in FinTech of the Year")} />
                        Woman Entrepreneur in FinTech of the Year
                      </MenuItem>
                      <MenuItem value="Anti-Fraud Innovator of the Year">
                        <Checkbox checked={formData.awardcate.includes("Anti-Fraud Innovator of the Year")} />
                        Anti-Fraud Innovator of the Year
                      </MenuItem>
                      <MenuItem value="ID Verification Innovator of the Year">
                        <Checkbox checked={formData.awardcate.includes("ID Verification Innovator of the Year")} />
                        ID Verification Innovator of the Year
                      </MenuItem>
                      <MenuItem value="FinTech of the Year">
                        <Checkbox checked={formData.awardcate.includes("FinTech of the Year")} />
                        FinTech of the Year
                      </MenuItem>

                      <ListSubheader style={{ fontWeight: "bold", fontSize: "15px" }}>MSB Awards Section</ListSubheader>
                      <MenuItem value="Compliance Innovator of the year">
                        <Checkbox checked={formData.awardcate.includes("Compliance Innovator of the year")} />
                        Compliance Innovator of the Year
                      </MenuItem>
                      <MenuItem value="Best in Customer Service MSB of the Year">
                        <Checkbox checked={formData.awardcate.includes("Best in Customer Service MSB of the Year")} />
                        Best in Customer Service MSB of the Year
                      </MenuItem>
                      <MenuItem value="Remittance Innovator MSB of the Year">
                        <Checkbox checked={formData.awardcate.includes("Remittance Innovator MSB of the Year")} />
                        Remittance Innovator MSB of the Year
                      </MenuItem>
                      <MenuItem value="Progressive Money Exchanger MSB of the Year">
                        <Checkbox checked={formData.awardcate.includes("Progressive Money Exchanger MSB of the Year")} />
                        Progressive Money Exchanger MSB of the Year
                      </MenuItem>
                      <MenuItem value="MSB of the Year">
                        <Checkbox checked={formData.awardcate.includes("MSB of the Year")} />
                        MSB of the Year
                      </MenuItem>
                      <MenuItem value="MSB Disruptor of the Year">
                        <Checkbox checked={formData.awardcate.includes("MSB Disruptor of the Year")} />
                        MSB Disruptor of the Year
                      </MenuItem>
                      <MenuItem value="MSB App of the Year">
                        <Checkbox checked={formData.awardcate.includes("MSB App of the Year")} />
                        MSB App of the Year
                      </MenuItem>
                      <MenuItem value="MSB Store of the Year">
                        <Checkbox checked={formData.awardcate.includes("MSB Store of the Year")} />
                        MSB Store of the Year
                      </MenuItem>

                      <ListSubheader style={{ fontWeight: "bold", fontSize: "15px" }}>Global Awards Section</ListSubheader>
                      <MenuItem value="FinTech of the year">
                        <Checkbox checked={formData.awardcate.includes("FinTech of the year")} />
                        FinTech of the Year (Global)
                      </MenuItem>
                      <MenuItem value="MSB of the year">
                        <Checkbox checked={formData.awardcate.includes("MSB of the year")} />
                        MSB of the Year (Global)
                      </MenuItem>
                    </SelectMUI>
                  </FormControl>
                  {errors.awardcate && <div className="error text-danger">{errors.awardcate}</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <h6 className="mt-3">Company Details</h6>
                <div className="col-sm-6">
                  <input
                    type="text"
                    id="companynm"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.companynm && "error-border"}`}
                    placeholder="Company Name"
                    value={formData.companynm}
                    onChange={handleInputChange}
                  />
                  {errors.companynm && <div className="error text-danger">Company name is required</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6">
                  <input
                    type="text"
                    id="companyaddress"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.companyaddress && "error-border"}`}
                    placeholder="Company Address"
                    value={formData.companyaddress}
                    onChange={handleInputChange}
                  />
                  {errors.companyaddress && <div className="error text-danger">Company address is required</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6">
                  <input
                    type="text"
                    id="companyregnumber"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.companyregnumber && "error-border"}`}
                    placeholder="Company Registration Number"
                    value={formData.companyregnumber}
                    onChange={handleInputChange}
                  />
                  {errors.companyregnumber && <div className="error text-danger">{errors.companyregnumber}</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6">
                  <input
                    type="text"
                    id="amountingbp"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.amountingbp && "error-border"}`}
                    placeholder="Turnover In GBP"
                    value={formData.amountingbp}
                    onChange={handleInputChange}
                  />
                  {errors.amountingbp && <div className="error text-danger">{errors.amountingbp}</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6">
                  <input
                    type="text"
                    id="companysector"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.companysector && "error-border"}`}
                    placeholder="Company Sector"
                    value={formData.companysector}
                    onChange={handleInputChange}
                  />
                  {errors.companysector && <div className="error text-danger">{errors.companysector}</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6">
                  <input
                    type="text"
                    id="websiteurl"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.websiteurl && "error-border"}`}
                    placeholder="Website URL"
                    value={formData.websiteurl}
                    onChange={handleInputChange}
                  />
                  {errors.websiteurl && <div className="error text-danger">{errors.websiteurl}</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6">
                  <textarea
                    id="serviceyouOffer"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.serviceyouOffer && "error-border"}`}
                    placeholder="Services Offered (Max 150 words)"
                    value={formData.serviceyouOffer}
                    onChange={handleTextAreaChange}
                  />
                  {errors.serviceyouOffer && <div className="error text-danger">Services offered description required</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6" ref={countryDropdownRef} style={{ position: "relative" }}>
                  <div
                    onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color d-flex align-items-center justify-content-between cursor-pointer ${errors.businesscorridors ? "error-border" : ""}`}
                    style={{ minHeight: "55px", padding: "10px 20px", borderRadius: "10px", cursor: "pointer" }}
                  >
                    <span>{formData.businesscorridors || "Company Registration Country"}</span>
                    <span>▼</span>
                  </div>
                  {countryDropdownOpen && (
                    <div style={{ position: "absolute", top: "100%", left: "15px", right: "15px", zIndex: 9999, background: "#fff", border: "1px solid rgba(0,0,0,0.15)", borderRadius: "10px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", marginTop: "5px" }}>
                      <div style={{ padding: "10px", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                        <input
                          type="text"
                          placeholder="Search country..."
                          value={countrySearchQuery}
                          onChange={(e) => setCountrySearchQuery(e.target.value)}
                          style={{ width: "100%", padding: "8px 12px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "6px" }}
                        />
                      </div>
                      <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                        {countries
                          .filter((c) => c.toLowerCase().includes(countrySearchQuery.toLowerCase()))
                          .map((country, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                setFormData({ ...formData, businesscorridors: country });
                                setCountryDropdownOpen(false);
                              }}
                              style={{ padding: "10px 20px", cursor: "pointer" }}
                              onMouseEnter={(e) => e.target.style.background = "#f1f1f1"}
                              onMouseLeave={(e) => e.target.style.background = "transparent"}
                            >
                              {country}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                  {errors.businesscorridors && <div className="error text-danger">Registration Country is required</div>}
                </div>

                <div className="col-sm-12">
                  <textarea
                    id="aboutyourself"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.aboutyourself && "error-border"}`}
                    placeholder="More Details About Company (Max 500 words)"
                    value={formData.aboutyourself}
                    onChange={handleAboutAreaTextChange}
                  />
                  {errors.aboutyourself && <div className="error text-danger">Detailed description is required</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-12">
                  <label htmlFor="file">Upload Supporting Document (Max 8MB, JPG/PNG/PDF)</label>
                  <input
                    type="file"
                    id="uploadfile"
                    className="cs-form_field cs-white_bg cs-accent_30_border cs-primary_color"
                    onChange={handleInputChange}
                  />
                  {errors.uploadfile && <div className="error text-danger">{errors.uploadfile}</div>}
                </div>

                <div className="col-12 mt-3">
                  <ReCAPTCHA
                    sitekey="6LdxNigqAAAAAJ6jU9uuhEtrAw-s8J_qnsGCVvj5"
                    onChange={handleCaptchaChange}
                  />
                  {errors.captcha && <span className="error text-danger">{errors.captcha}</span>}
                </div>

                <div className="col-12 mt-3">
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    checked={agreePrivacyPolicy}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="privacyPolicy" style={{ marginLeft: "8px" }}>
                    I have read and agreed to the <a href="/terms-and-conditions" target="_blank">Terms and Conditions</a>
                  </label>
                </div>
              </div>

              <div className="cs-height_40 cs-height_lg_40" />
              <div className="text-center">
                <button
                  className="cs-btn cs-rounded text-uppercase btn-pro-2"
                  type="submit"
                  disabled={loading}
                >
                  <span className="cs-btn_text fw-bolder">
                    {loading ? "Submitting..." : "Nominate Now"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

/* =========================================================================
   2. TICKET BOOKING COMPONENT (from TicketBookingPage.jsx)
   ========================================================================= */
const TicketBookingForm = () => {
  const [captchaToken, setCaptchaToken] = useState("");
  const [form, setForm] = useState({
    title: "",
    fullName: "",
    companyName: "",
    countryCode: "44",
    phone: "",
    email: "",
    tickets: "",
    recaptchaToken: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    setForm((prev) => ({ ...prev, recaptchaToken: token }));
  };

  const validate = () => {
    const errs = {};
    if (!form.title) errs.title = "Select your title.";
    if (!form.fullName.trim()) errs.fullName = "Full name is required.";
    if (!form.companyName.trim()) errs.companyName = "Company name is required.";
    if (!form.countryCode) errs.countryCode = "Select your country code.";
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    else if (!/^\d{10,15}$/.test(form.phone)) errs.phone = "Mobile Number should be Min 10 digits and max 15 digits";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(form.email) || form.email.includes(" ")) {
      errs.email = "Invalid email address.";
    }

    if (!form.tickets) {
      errs.tickets = "Select number of tickets.";
    }
    if (!form.recaptchaToken) {
      errs.recaptchaToken = "Please verify you are not a robot.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let val = value;
    let newErrors = { ...errors };

    if (name === "email") {
      val = value.toLowerCase();
      newErrors.email = "";
    } else if (name === "phone") {
      val = value.replace(/\D/g, "");
      if (val.length > 0 && (val.length < 10 || val.length > 15)) {
        newErrors.phone = "Mobile Number should be Min 10 digits and max 15 digits";
      } else {
        newErrors.phone = "";
      }
    } else {
      newErrors[name] = "";
    }

    setForm({ ...form, [name]: val });
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const fullPhone = `${form.countryCode}${form.phone}`;
    const formPayload = {
      title: form.title,
      fullName: form.fullName,
      companyName: form.companyName,
      email: form.email,
      tickets: form.tickets,
      mobile: fullPhone,
      recaptchaToken: form.recaptchaToken,
    };

    try {
      const saveRes = await axios.post("/api/booking", formPayload);

      if (saveRes.data?.response) {
        const bookingId = saveRes.data.data.id;
        const paymentPayload = {
          ...formPayload,
          id: bookingId,
          bookingId: bookingId,
        };

        const checkoutRes = await axios.post(
          "https://bfa-ticket-event.vercel.app/create-checkout-session",
          paymentPayload
        );

        if (checkoutRes.data?.url) {
          window.location.href = checkoutRes.data.url;
        } else {
          toast.error(checkoutRes?.data?.message || "Failed to initiate payment session.");
        }
      } else {
        toast.error(saveRes.data?.data || "Failed to save booking details. Please try again.");
      }
    } catch (err) {
      console.error("Checkout session error:", err);
      toast.error(err.response?.data?.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputStyle = (field) => ({
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    width: "100%",
    backgroundColor: errors[field] ? "#ffe5e5" : "white",
  });

  const errorStyle = { color: "red", fontSize: "12px", margin: "5px 0 0 0" };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem 1rem", flexWrap: "wrap", gap: "2rem" }}>
      <Toaster />
      <div style={{ backgroundColor: "#efefef", padding: "2rem", borderRadius: "15px", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)", width: "500px" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <div style={{ flex: "0 0 100px" }}>
              <Select
                name="title"
                options={titleOptions}
                value={titleOptions.find((opt) => opt.value === form.title)}
                onChange={(selected) => handleChange({ target: { name: "title", value: selected.value } })}
                styles={{ control: (base) => ({ ...base, ...getInputStyle("title") }) }}
                isSearchable={false}
              />
              {errors.title && <p style={errorStyle}>{errors.title}</p>}
            </div>

            <div style={{ flex: "1" }}>
              <input
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                style={getInputStyle("fullName")}
              />
              {errors.fullName && <p style={errorStyle}>{errors.fullName}</p>}
            </div>
          </div>

          <div>
            <input
              name="companyName"
              placeholder="Company Name"
              value={form.companyName}
              onChange={handleChange}
              style={getInputStyle("companyName")}
            />
            {errors.companyName && <p style={errorStyle}>{errors.companyName}</p>}
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <div style={{ flex: "0 0 140px" }}>
              <Select
                name="countryCode"
                options={countryCodeOptions}
                value={countryCodeOptions.find((opt) => opt.value === form.countryCode)}
                onChange={(selected) => handleChange({ target: { name: "countryCode", value: selected.value } })}
                formatOptionLabel={(option, { context }) => {
                  const countryName = option.label.split(" (+")[0];
                  if (context === "value") return `+${option.value}`;
                  return (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span style={{ display: "inline-block", width: "45px", flexShrink: 0 }}>+{option.value}</span>
                      <span style={{ flex: 1, paddingLeft: "8px" }}>{countryName}</span>
                    </div>
                  );
                }}
                styles={{
                  control: (base) => ({ ...base, ...getInputStyle("countryCode") }),
                  menu: (base) => ({ ...base, width: "300px", zIndex: 9999 })
                }}
                isSearchable={true}
              />
              {errors.countryCode && <p style={errorStyle}>{errors.countryCode}</p>}
            </div>

            <div style={{ flex: "1" }}>
              <input
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                style={getInputStyle("phone")}
              />
              {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
            </div>
          </div>

          <div>
            <input
              name="email"
              placeholder="Email Address"
              type="email"
              value={form.email}
              onChange={handleChange}
              style={getInputStyle("email")}
            />
            {errors.email && <p style={errorStyle}>{errors.email}</p>}
          </div>

          <div>
            <Select
              name="tickets"
              options={ticketOptions}
              value={ticketOptions.find((opt) => opt.value === form.tickets)}
              onChange={(selected) => handleChange({ target: { name: "tickets", value: selected.value } })}
              styles={{ control: (base) => ({ ...base, ...getInputStyle("tickets") }) }}
              isSearchable={false}
            />
            {errors.tickets && <p style={errorStyle}>{errors.tickets}</p>}
          </div>

          <div className="col-12 mt-3">
            <ReCAPTCHA
              sitekey="6LdxNigqAAAAAJ6jU9uuhEtrAw-s8J_qnsGCVvj5"
              onChange={handleCaptchaChange}
            />
            {errors.recaptchaToken && <p style={errorStyle}>{errors.recaptchaToken}</p>}
          </div>

          <button
            type="submit"
            style={{
              background: "#000",
              color: "white",
              padding: "12px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s",
              marginTop: "10px",
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : " Proceed to Pay "}
          </button>
        </form>
      </div>

      <div className="ticket-info-card">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
          .ticket-info-card {
            width: 400px;
            background: linear-gradient(135deg, #ffffff 0%, #fcfbfb 100%);
            padding: 2.2rem 1.8rem;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05), 0 0 2px rgba(0, 0, 0, 0.05);
            font-family: 'Outfit', 'Segoe UI', sans-serif;
            color: #2c2c2e;
            border: 1px solid rgba(0, 0, 0, 0.06);
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .ticket-info-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 25px 45px rgba(0, 0, 0, 0.08), 0 0 25px rgba(200, 16, 46, 0.08);
            border-color: rgba(200, 16, 46, 0.25);
          }
          .ticket-info-card-title {
            font-size: 1.35rem;
            font-weight: 900;
            text-transform: capitalize;
            letter-spacing: 0.06em;
            margin-bottom: 0.6rem;
            background: linear-gradient(135deg, #c8102e 0%, #800615 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .ticket-info-card-subtitle {
            color: rgba(44, 44, 46, 0.65);
            font-size: 0.9rem;
            margin-bottom: 1.8rem;
            font-weight: 500;
            line-height: 1.5;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);
            padding-bottom: 1.2rem;
          }
          .ticket-info-list {
            display: flex;
            flex-direction: column;
            gap: 1.1rem;
          }
          .ticket-info-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            transition: all 0.3s ease;
          }
          .ticket-info-icon-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            color: #c8102e;
            flex-shrink: 0;
          }
          .ticket-info-icon-wrapper svg {
            width: 22px;
            height: 22px;
            display: block;
          }
          .ticket-info-text {
            font-size: 1rem;
            font-weight: 600;
            color: rgba(44, 44, 46, 0.85);
            line-height: 1.45;
            text-align: left;
          }
        `}</style>
        <h3 className="ticket-info-card-title">An Elevated BFA Experience Awaits</h3>
        <p className="ticket-info-card-subtitle">Your ticket is more than entry — it’s an experience.</p>
        <div className="ticket-info-list">
          <div className="ticket-info-item">
            <div className="ticket-info-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <span className="ticket-info-text">Prestigious Awards Ceremony</span>
          </div>
          <div className="ticket-info-item">
            <div className="ticket-info-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <span className="ticket-info-text">1-2-1 Exclusive Meetings with Industry Leaders</span>
          </div>
          <div className="ticket-info-item">
            <div className="ticket-info-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <span className="ticket-info-text">Unparalleled Networking with Peers & Experts</span>
          </div>
          <div className="ticket-info-item">
            <div className="ticket-info-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <span className="ticket-info-text">Premium 3-Course Dinner & Drinks</span>
          </div>
          <div className="ticket-info-item">
            <div className="ticket-info-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <span className="ticket-info-text">Opportunity to Showcase Your Brand & Support Innovation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   3. SPONSORSHIP COMPONENT (from Sponsers.jsx)
   ========================================================================= */
const SponsorshipForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    companyName: "",
    role: "",
    sponsorship: "",
    companyInfo: "",
    title: "",
    reCaptcha: "",
  });
  const [errors, setErrors] = useState({});

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, title: value }));
    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, title: "" }));
    }
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    let numericValue = value;

    if (id === "phoneNo") {
      if (numericValue.startsWith("+")) {
        numericValue = "+" + numericValue.slice(1).replace(/\D/g, "");
      } else {
        numericValue = numericValue.replace(/\D/g, "");
      }
      setFormData((prev) => ({ ...prev, [id]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }

    const updatedErrors = { ...errors };
    switch (id) {
      case "firstName":
        if (!value.trim()) updatedErrors.firstName = "First Name is required";
        else if (/[^a-zA-Z\s]/.test(value)) updatedErrors.firstName = "Numbers/special characters not allowed";
        else delete updatedErrors.firstName;
        break;
      case "lastName":
        if (!value.trim()) updatedErrors.lastName = "Last Name is required";
        else if (/[^a-zA-Z\s]/.test(value)) updatedErrors.lastName = "Numbers/special characters not allowed";
        else delete updatedErrors.lastName;
        break;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value) || value.includes(" ")) updatedErrors.email = "Invalid email address";
        else delete updatedErrors.email;
        break;
      case "companyName":
        if (!value.trim()) updatedErrors.companyName = "Company Name is required";
        else delete updatedErrors.companyName;
        break;
      case "role":
        if (!value.trim()) updatedErrors.role = "Role in Company is required";
        else delete updatedErrors.role;
        break;
      case "phoneNo":
        if (numericValue.startsWith("+") ? numericValue.length < 11 : numericValue.length < 10) {
          updatedErrors.phoneNo = "Mobile Number should be Min 10 digits and max 15 digits";
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
    setLoading(true);

    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = "First Name is required";
    if (!formData.lastName.trim()) errs.lastName = "Last Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    if (!formData.companyName.trim()) errs.companyName = "Company Name is required";
    if (!formData.role.trim()) errs.role = "Role is required";
    if (!formData.sponsorship.trim()) errs.sponsorship = "Sponsorship select is required";
    if (!formData.phoneNo.trim()) errs.phoneNo = "Mobile No is required";
    if (!formData.title) errs.title = "Please select title";
    if (!agreePrivacyPolicy) {
      Swal.fire({
        title: "Error!",
        text: "Please accept the terms and conditions.",
        icon: "error",
      });
      errs.agreePrivacyPolicy = "Accept terms required";
    }

    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      const finalPayload = {
        ...formData,
        reCaptcha: captchaToken,
      };
      try {
        const response = await axios.post("/api/sponsor", finalPayload);
        if (response.data.response === false) {
          Swal.fire({ title: "Error!", text: response.data.data, icon: "error" });
        } else {
          setFormData({
            title: "", firstName: "", lastName: "", phoneNo: "", email: "",
            companyName: "", role: "", sponsorship: "", companyInfo: "",
          });
          setShowModal(true);
          setAgreePrivacyPolicy(false);
          setCaptchaToken("");
        }
      } catch (error) {
        const errMsg = error.response?.data?.data || "An error occurred. Please try again later.";
        Swal.fire({ title: "Error!", text: errMsg, icon: "error" });
      }
    }
    setLoading(false);
  };

  return (
    <>
      <div className="container mt-4">
        <PrcingTable />
      </div>

      <div id="sponsorship-form" className="container mt-5">
        <div className="cs-contact cs-style2 cs-white_bg justify-content-center">
          <div className="cs-contact_left cs-accent_bg position-relative">
            <h4 className="cs-contact_title cs-semi_bold cs-white">Sponsor the Brit Fintech Awards 2026</h4>
            <ul className="text-white" style={{ fontSize: '14px', listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>Engage directly with fintech leaders.</li>
              <li>Showcase your brand with prime exhibit space.</li>
              <li>Build relationships via exclusive networking.</li>
              <li>Position your company as a thought leader in fintech.</li>
            </ul>
          </div>

          <div className="cs-contact_right cs-accent_10_bg">
            <h4 className="cs-contact_title cs-semi_bold">Ready To Sponsor?</h4>
            <form className="cs-contact_form" onSubmit={handleSubmit}>
              <div className="row cs-row_gap_20">
                <div className="col-sm-6">
                  <div className="input-container d-flex">
                    <select
                      id="title"
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.title && "error-border"}`}
                      onChange={handleTitleChange}
                      value={formData.title}
                      style={{ width: "100px", borderRadius: "8px 0 0 8px", padding: "10px" }}
                    >
                      <option value="">Title</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                      <option value="Other">Other</option>
                    </select>
                    <input
                      type="text"
                      id="firstName"
                      className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.firstName && "error-border"}`}
                      placeholder="First name"
                      onChange={handleChange}
                      value={formData.firstName}
                      style={{ borderRadius: "0 8px 8px 0", flex: 1 }}
                    />
                  </div>
                  {errors.firstName && <div className="error text-danger">{errors.firstName}</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6">
                  <input
                    type="text"
                    id="lastName"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.lastName && "error-border"}`}
                    placeholder="Last name"
                    onChange={handleChange}
                    value={formData.lastName}
                  />
                  {errors.lastName && <div className="error text-danger">{errors.lastName}</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6">
                  <input
                    type="text"
                    id="phoneNo"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.phoneNo && "error-border"}`}
                    placeholder="Mobile Number"
                    onChange={handleChange}
                    value={formData.phoneNo}
                  />
                  {errors.phoneNo && <div className="error text-danger">{errors.phoneNo}</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6">
                  <input
                    type="text"
                    id="email"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.email && "error-border"}`}
                    placeholder="Email Address"
                    onChange={handleChange}
                    value={formData.email}
                  />
                  {errors.email && <div className="error text-danger">{errors.email}</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6">
                  <input
                    type="text"
                    id="companyName"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.companyName && "error-border"}`}
                    placeholder="Company Name"
                    onChange={handleChange}
                    value={formData.companyName}
                  />
                  {errors.companyName && <div className="error text-danger">{errors.companyName}</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-sm-6">
                  <input
                    type="text"
                    id="role"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.role && "error-border"}`}
                    placeholder="Role in Company"
                    onChange={handleChange}
                    value={formData.role}
                  />
                  {errors.role && <div className="error text-danger">{errors.role}</div>}
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-lg-12 mb-3">
                  <select
                    id="sponsorship"
                    className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color ${errors.sponsorship && "error-border"}`}
                    style={{ color: "#666", cursor: 'pointer' }}
                    onChange={handleChange}
                    value={formData.sponsorship}
                  >
                    <option value="">Select Sponsorship</option>
                    <option value="Platinum Sponsor">Platinum Sponsor</option>
                    <option value="Gold Sponsor">Gold Sponsor</option>
                    <option value="Silver Sponsor">Silver Sponsor</option>
                  </select>
                  {errors.sponsorship && <div className="error text-danger">{errors.sponsorship}</div>}
                </div>

                <div className="col-lg-12">
                  <textarea
                    id="companyInfo"
                    cols={30}
                    rows={5}
                    className="cs-form_field cs-white_bg cs-accent_30_border cs-primary_color"
                    placeholder="How can we help"
                    onChange={handleChange}
                    value={formData.companyInfo}
                  />
                  <div className="cs-height_20 cs-height_lg_20" />
                </div>

                <div className="col-12 mt-3">
                  <ReCAPTCHA
                    sitekey="6LdxNigqAAAAAJ6jU9uuhEtrAw-s8J_qnsGCVvj5"
                    onChange={handleCaptchaChange}
                  />
                </div>

                <div className="col-12 mt-3">
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    checked={agreePrivacyPolicy}
                    onChange={(e) => setAgreePrivacyPolicy(e.target.checked)}
                  />
                  <label htmlFor="privacyPolicy" style={{ marginLeft: "8px" }}>
                    I have read and agreed to the <a href="/terms-and-conditions">Terms and Conditions</a>
                  </label>
                </div>
              </div>

              <div className="cs-height_20 cs-height_lg_20" />
              <button
                className="cs-btn cs-rounded text-uppercase btn-pro-2"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Interest"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <img
                    src="../assets/img/success.gif"
                    alt="success"
                    className="d-block mx-auto"
                    style={{ maxWidth: "200px" }}
                  />
                  <h4 className="mb-3 fw-bolder">Thank you for your interest!</h4>
                  <p>We will contact you shortly.</p>
                </div>
                <div className="modal-footer justify-content-center">
                  <button type="button" className="cs-btn btn-pro-2" onClick={() => setShowModal(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* =========================================================================
   4. MAIN COMBINED COMPONENT
   ========================================================================= */
const NominateBookSponsor = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("nominate");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tabParam = queryParams.get("tab") || window.location.hash.replace("#", "");

    if (tabParam === "tickets" || tabParam === "ticket-booking") {
      setActiveTab("tickets");
    } else if (tabParam === "sponsorship" || tabParam === "sponsorship-categories") {
      setActiveTab("sponsorship");
    } else {
      setActiveTab("nominate");
    }
  }, [location]);

  useEffect(() => {
    let checkInterval;
    
    const toggleChatbot = () => {
      const isMobile = window.innerWidth <= 768;
      if (window.Tawk_API && typeof window.Tawk_API.hideWidget === "function") {
        if (isMobile) {
          window.Tawk_API.hideWidget();
        } else {
          window.Tawk_API.showWidget();
        }
        return true;
      }
      return false;
    };

    // Try hiding immediately
    const success = toggleChatbot();
    
    // If API is not fully loaded, check periodically
    if (!success) {
      checkInterval = setInterval(() => {
        const done = toggleChatbot();
        if (done) clearInterval(checkInterval);
      }, 300);
    }

    // Adapt to window resize
    const handleResize = () => {
      toggleChatbot();
    };
    window.addEventListener("resize", handleResize);

    // If Tawk_API defines onLoad callback
    if (window.Tawk_API) {
      window.Tawk_API.onLoad = toggleChatbot;
    }

    // Clean up: restore chatbot visibility when unmounting this portal page
    return () => {
      if (checkInterval) clearInterval(checkInterval);
      window.removeEventListener("resize", handleResize);
      if (window.Tawk_API && typeof window.Tawk_API.showWidget === "function") {
        window.Tawk_API.showWidget();
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Nomination, Ticket Booking & Sponsorship Portal | Brit Fintech Awards</title>
        <meta
          name="description"
          content="Unified portal for Brit Fintech Awards: Nominate a company, book tickets, or register interest for sponsorship."
        />
      </Helmet>

      <style>{`
        @media (max-width: 768px) {
          .portal-tabs-container {
            display: none !important;
          }
          .mobile-bottom-nav {
            display: flex !important;
          }
          /* Add bottom padding to body so fixed bottom nav doesn't overlap form elements */
          body {
            padding-bottom: 110px !important;
          }
          /* Hide Next.js Dev Overlay and other debug elements on mobile view */
          nextjs-portal,
          #nextjs-portal,
          .nextjs-container,
          [id*="nextjs-portal"],
          #webpack-hot-middleware-clientOverlay,
          #react-devtools-anchor {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }
          /* Fallback stylesheet rule to hide Tawk.to chatbot container on mobile */
          iframe[src*="tawk.to"],
          iframe[title*="chat"],
          iframe[id*="tawk"],
          div[id*="tawk"],
          [class*="tawk"],
          #tawkchat-iframe-container,
          .tawk-min-container,
          .tawk-button {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }
          /* Professional dock button resets - remove default outline boxes and tap flash */
          .mobile-bottom-nav button {
            outline: none !important;
            box-shadow: none !important;
            -webkit-tap-highlight-color: transparent !important;
            background: none;
            border: none;
          }
          .mobile-bottom-nav button:focus,
          .mobile-bottom-nav button:active,
          .mobile-bottom-nav button:focus-visible {
            outline: none !important;
            box-shadow: none !important;
            border: none !important;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateX(-6px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        }
        @media (min-width: 769px) {
          .mobile-bottom-nav {
            display: none !important;
          }
        }
      `}</style>

      <div className="cs-height_90 cs-height_lg_80" />
      <div
        className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage: 'url("../assets/img/event-conference/hero-img.jpg")',
          height: "220px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div className="container">
          <div className="cs-hero_text text-left">
            <h1 className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-2 mb-0" style={{ lineHeight: '1.2' }}>
              BFA 2026
            </h1>
            <p className="pb-0 mb-0 text-white" style={{ fontSize: '16px' }}>
              One-stop portal to Nominate, Book Tickets, and Register for Sponsorship.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        {/* Dynamic Glassmorphic Tab Selector */}
        <div className="portal-tabs-container" style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
          <div
            className="portal-tabs"
            style={{
              display: "inline-flex",
              background: "#efefef",
              padding: "6px",
              borderRadius: "30px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.08)"
            }}
          >
            <button
              onClick={() => setActiveTab("nominate")}
              style={{
                padding: "10px 24px",
                border: "none",
                borderRadius: "25px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                background: activeTab === "nominate" ? "#c8102e" : "transparent",
                color: activeTab === "nominate" ? "#fff" : "#555"
              }}
            >
              Award Nomination
            </button>
            <button
              onClick={() => setActiveTab("tickets")}
              style={{
                padding: "10px 24px",
                border: "none",
                borderRadius: "25px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                background: activeTab === "tickets" ? "#c8102e" : "transparent",
                color: activeTab === "tickets" ? "#fff" : "#555"
              }}
            >
              Book Tickets
            </button>
            <button
              onClick={() => setActiveTab("sponsorship")}
              style={{
                padding: "10px 24px",
                border: "none",
                borderRadius: "25px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                background: activeTab === "sponsorship" ? "#c8102e" : "transparent",
                color: activeTab === "sponsorship" ? "#fff" : "#555"
              }}
            >
              Sponsorship Categories
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="portal-tab-content" style={{ minHeight: "400px" }}>
          {activeTab === "nominate" && <NominationForm />}
          {activeTab === "tickets" && <TicketBookingForm />}
          {activeTab === "sponsorship" && <SponsorshipForm />}
        </div>
      </div>

      {/* Sticky Mobile Bottom Navigation Bar - Premium Floating Dock */}
      <div
        className="mobile-bottom-nav"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          right: "20px",
          height: "68px",
          backgroundColor: "#ffffff",
          border: "2px solid #000000",
          borderRadius: "34px",
          display: "none",
          justifyContent: "space-around",
          alignItems: "center",
          zIndex: 99999,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08), 0 1px 8px rgba(0, 0, 0, 0.04)",
          margin: "0 auto",
          maxWidth: "480px",
          padding: "0 12px"
        }}
      >
        <button
          onClick={() => setActiveTab("nominate")}
          style={{
            background: "none",
            border: "none",
            outline: "none",
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "0 8px",
            cursor: "pointer",
            flex: activeTab === "nominate" ? 1.6 : 1,
            transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
            position: "relative",
            WebkitTapHighlightColor: "transparent"
          }}
        >
          <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "6px",
            color: activeTab === "nominate" ? "#c8102e" : "#71717a",
            transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
            transform: activeTab === "nominate" ? "scale(1.05)" : "scale(1)"
          }}>
            <Award 
              size={22} 
              strokeWidth={activeTab === "nominate" ? 2.5 : 2}
              style={{
                color: activeTab === "nominate" ? "#c8102e" : "#71717a",
                transition: "all 0.3s ease"
              }} 
            />
            {activeTab === "nominate" && (
              <span style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#c8102e",
                whiteSpace: "nowrap",
                letterSpacing: "0.2px",
                animation: "fadeIn 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)"
              }}>
                Nominate
              </span>
            )}
          </div>
          {activeTab === "nominate" && (
            <div style={{
              position: "absolute",
              bottom: "10px",
              height: "3px",
              left: "14px",
              right: "14px",
              backgroundColor: "#c8102e",
              borderRadius: "2px",
              animation: "fadeIn 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)"
            }} />
          )}
        </button>

        <button
          onClick={() => setActiveTab("tickets")}
          style={{
            background: "none",
            border: "none",
            outline: "none",
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "0 8px",
            cursor: "pointer",
            flex: activeTab === "tickets" ? 1.6 : 1,
            transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
            position: "relative",
            WebkitTapHighlightColor: "transparent"
          }}
        >
          <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "6px",
            color: activeTab === "tickets" ? "#c8102e" : "#71717a",
            transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
            transform: activeTab === "tickets" ? "scale(1.05)" : "scale(1)"
          }}>
            <Ticket 
              size={22} 
              strokeWidth={activeTab === "tickets" ? 2.5 : 2}
              style={{
                color: activeTab === "tickets" ? "#c8102e" : "#71717a",
                transition: "all 0.3s ease"
              }} 
            />
            {activeTab === "tickets" && (
              <span style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#c8102e",
                whiteSpace: "nowrap",
                letterSpacing: "0.2px",
                animation: "fadeIn 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)"
              }}>
                Tickets
              </span>
            )}
          </div>
          {activeTab === "tickets" && (
            <div style={{
              position: "absolute",
              bottom: "10px",
              height: "3px",
              left: "14px",
              right: "14px",
              backgroundColor: "#c8102e",
              borderRadius: "2px",
              animation: "fadeIn 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)"
            }} />
          )}
        </button>

        <button
          onClick={() => setActiveTab("sponsorship")}
          style={{
            background: "none",
            border: "none",
            outline: "none",
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "0 8px",
            cursor: "pointer",
            flex: activeTab === "sponsorship" ? 1.6 : 1,
            transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
            position: "relative",
            WebkitTapHighlightColor: "transparent"
          }}
        >
          <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "6px",
            color: activeTab === "sponsorship" ? "#c8102e" : "#71717a",
            transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
            transform: activeTab === "sponsorship" ? "scale(1.05)" : "scale(1)"
          }}>
            <Coins 
              size={22} 
              strokeWidth={activeTab === "sponsorship" ? 2.5 : 2}
              style={{
                color: activeTab === "sponsorship" ? "#c8102e" : "#71717a",
                transition: "all 0.3s ease"
              }} 
            />
            {activeTab === "sponsorship" && (
              <span style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#c8102e",
                whiteSpace: "nowrap",
                letterSpacing: "0.2px",
                animation: "fadeIn 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)"
              }}>
                Sponsorship
              </span>
            )}
          </div>
          {activeTab === "sponsorship" && (
            <div style={{
              position: "absolute",
              bottom: "10px",
              height: "3px",
              left: "14px",
              right: "14px",
              backgroundColor: "#c8102e",
              borderRadius: "2px",
              animation: "fadeIn 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)"
            }} />
          )}
        </button>
      </div>
    </>
  );
};

export default NominateBookSponsor;
