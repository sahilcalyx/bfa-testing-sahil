import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Select from "react-select";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
import CouponCodeInput from "@/components/CouponCodeInput";
import { PAYMENT_API_BASE, fetchPricing, fetchTicketBundles, formatGBP, FALLBACK_TICKET_PACKS, couponFromPack, resolveCouponForQuantity, packsForTicketPrice } from "@/lib/paymentApi";
// Country codes list (partial - you can extend it)
// ====== Titles ======
const titleOptions = [
  { value: "", label: "Title" },
  { value: "Mr.", label: "Mr." },
  { value: "Mrs.", label: "Mrs." },
  { value: "Miss", label: "Miss" },
  // { value: "Ms.", label: "Ms." },
  { value: "Other", label: "Other" },
];

// Sort alphabetically except keep Mr. first
const sortedTitleOptions = [
  titleOptions.find((t) => t.value === "Mr."),
  ...titleOptions
    .filter((t) => t.value !== "Mr.")
    .sort((a, b) => a.label.localeCompare(b.label)),
];

// ====== Country Codes ======
// Full List (ISO standard country calling codes)
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

// Sort alphabetically
const sortedCountryCodes = countryCodes.sort((a, b) =>
  a.label.localeCompare(b.label)
);

console.log(sortedTitleOptions);
console.log(sortedCountryCodes);


const MAX_TICKETS = 10;
// Fallback only — the live price comes from the admin Pricing page.
const ACTIVE_TICKET_PRICE = 395;

const buildTicketOptions = (unitPrice) => [
  { value: "", label: "Tickets" },
  ...[...Array(MAX_TICKETS)].map((_, i) => {
    const count = i + 1;
    return {
      value: count,
      label: `${count} Ticket${count > 1 ? "s" : ""} – £${count * unitPrice}`,
    };
  }),
];

const countryCodeOptions = countryCodes.map((c) => ({
  value: c.code,
  label: c.label,
}));

function TicketBookingPage() {
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

  const [additionalAttendees, setAdditionalAttendees] = useState([]);
  const [additionalErrors, setAdditionalErrors] = useState([]);
  const [errors, setErrors] = useState({});
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [presetCouponCode, setPresetCouponCode] = useState("");
  const [bundles, setBundles] = useState(FALLBACK_TICKET_PACKS);

  // Live ticket price set by the admin Pricing page; falls back to the
  // built-in value if the payment service can't be reached.
  const [ticketPrice, setTicketPrice] = useState(ACTIVE_TICKET_PRICE);
  useEffect(() => {
    let cancelled = false;
    fetchTicketBundles().then(({ bundles: packs, pricing }) => {
      if (cancelled) return;
      if (pricing?.ticket) setTicketPrice(pricing.ticket);
      setBundles(packs?.length ? packs : FALLBACK_TICKET_PACKS);
    });
    fetchPricing().then((p) => {
      if (!cancelled && p?.ticket) {
        setTicketPrice(p.ticket);
        setBundles((prev) => packsForTicketPrice(p.ticket, prev));
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const ticketOptions = useMemo(() => buildTicketOptions(ticketPrice), [ticketPrice]);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    setForm((prev) => ({ ...prev, recaptchaToken: token })); // update form with token
  };

  const DUP_EMAIL_MSG = "This email address has already been assigned to another attendee.";
  const DUP_PHONE_MSG = "This phone number has already been assigned to another attendee.";
  const DUP_NAME_MSG = "This full name has already been entered for another attendee.";

  const isDuplicateMsg = (msg) =>
    msg === DUP_EMAIL_MSG || msg === DUP_PHONE_MSG || msg === DUP_NAME_MSG;

  const checkDuplicateErrors = (currentForm, currentAdditional, tCount) => {
    const dupErrs = {};
    const dupAddErrs = [];
    const count = parseInt(tCount) || 1;

    if (count > 1) {
      const activeAdditional = currentAdditional.slice(0, count - 1);
      const allAttendees = [
        {
          fullName: currentForm.fullName?.trim() || "",
          phone: currentForm.phone?.trim() || "",
          fullPhone: `${currentForm.countryCode || ""}${currentForm.phone?.trim() || ""}`,
          email: currentForm.email?.trim().toLowerCase() || "",
        },
        ...activeAdditional.map((att) => ({
          fullName: att.fullName?.trim() || "",
          phone: att.phone?.trim() || "",
          fullPhone: `${att.countryCode || ""}${att.phone?.trim() || ""}`,
          email: att.email?.trim().toLowerCase() || "",
        })),
      ];

      const setDup = (idx, field, msg) => {
        if (idx === 0) {
          dupErrs[field] = msg;
        } else {
          const addIdx = idx - 1;
          if (!dupAddErrs[addIdx]) dupAddErrs[addIdx] = {};
          dupAddErrs[addIdx][field] = msg;
        }
      };

      // Check email duplicate
      const emailMap = new Map();
      allAttendees.forEach((att, idx) => {
        if (att.email) {
          if (!emailMap.has(att.email)) emailMap.set(att.email, []);
          emailMap.get(att.email).push(idx);
        }
      });
      emailMap.forEach((indices) => {
        if (indices.length > 1) {
          indices.forEach((idx) => {
            setDup(idx, "email", DUP_EMAIL_MSG);
          });
        }
      });

      // Check phone duplicate
      const phoneMap = new Map();
      allAttendees.forEach((att, idx) => {
        if (att.phone) {
          const key = att.fullPhone || att.phone;
          if (!phoneMap.has(key)) phoneMap.set(key, []);
          phoneMap.get(key).push(idx);
        }
      });
      phoneMap.forEach((indices) => {
        if (indices.length > 1) {
          indices.forEach((idx) => {
            setDup(idx, "phone", DUP_PHONE_MSG);
          });
        }
      });

      // Check full name duplicate
      const nameMap = new Map();
      allAttendees.forEach((att, idx) => {
        if (att.fullName) {
          const key = att.fullName.toLowerCase();
          if (!nameMap.has(key)) nameMap.set(key, []);
          nameMap.get(key).push(idx);
        }
      });
      nameMap.forEach((indices) => {
        if (indices.length > 1) {
          indices.forEach((idx) => {
            setDup(idx, "fullName", DUP_NAME_MSG);
          });
        }
      });
    }

    return { dupErrs, dupAddErrs };
  };

  const updateLiveDuplicateErrors = (
    updatedForm,
    updatedAdditional,
    currentErrors,
    currentAddErrors,
    activeIdx
  ) => {
    const ticketCount = parseInt(updatedForm.tickets) || 1;
    if (ticketCount <= 1 || activeIdx === undefined || activeIdx === null) {
      return { newErrors: currentErrors, newAddErrors: currentAddErrors };
    }

    const activeAdditional = updatedAdditional.slice(0, ticketCount - 1);
    const allAttendees = [
      {
        fullName: updatedForm.fullName?.trim() || "",
        phone: updatedForm.phone?.trim() || "",
        fullPhone: `${updatedForm.countryCode || ""}${updatedForm.phone?.trim() || ""}`,
        email: updatedForm.email?.trim().toLowerCase() || "",
      },
      ...activeAdditional.map((att) => ({
        fullName: att.fullName?.trim() || "",
        phone: att.phone?.trim() || "",
        fullPhone: `${att.countryCode || ""}${att.phone?.trim() || ""}`,
        email: att.email?.trim().toLowerCase() || "",
      })),
    ];

    const newErrors = { ...currentErrors };
    const newAddErrors = [];
    for (let i = 0; i < ticketCount - 1; i++) {
      newAddErrors[i] = { ...(currentAddErrors[i] || {}) };
    }

    const activeAtt = allAttendees[activeIdx];
    if (!activeAtt) return { newErrors, newAddErrors };

    let isDupEmail = false;
    let isDupPhone = false;
    let isDupName = false;

    if (activeAtt.email) {
      isDupEmail = allAttendees.some(
        (att, idx) => idx !== activeIdx && att.email && att.email === activeAtt.email
      );
    }

    if (activeAtt.phone) {
      isDupPhone = allAttendees.some(
        (att, idx) =>
          idx !== activeIdx &&
          att.phone &&
          (att.fullPhone || att.phone) === (activeAtt.fullPhone || activeAtt.phone)
      );
    }

    if (activeAtt.fullName) {
      isDupName = allAttendees.some(
        (att, idx) =>
          idx !== activeIdx &&
          att.fullName &&
          att.fullName.toLowerCase() === activeAtt.fullName.toLowerCase()
      );
    }

    const setFieldError = (field, msg, isDup) => {
      if (activeIdx === 0) {
        if (isDup) {
          newErrors[field] = msg;
        } else if (isDuplicateMsg(newErrors[field])) {
          newErrors[field] = "";
        }
      } else {
        const addIdx = activeIdx - 1;
        if (!newAddErrors[addIdx]) newAddErrors[addIdx] = {};
        if (isDup) {
          newAddErrors[addIdx][field] = msg;
        } else if (isDuplicateMsg(newAddErrors[addIdx][field])) {
          newAddErrors[addIdx][field] = "";
        }
      }
    };

    setFieldError("email", DUP_EMAIL_MSG, isDupEmail);
    setFieldError("phone", DUP_PHONE_MSG, isDupPhone);
    setFieldError("fullName", DUP_NAME_MSG, isDupName);

    if (isDupEmail || isDupPhone || isDupName) {
      toast.error("Duplicate attendee information detected. Each attendee must have unique details.", {
        id: "duplicate-info-alert",
      });
    }

    return { newErrors, newAddErrors };
  };

  const validate = () => {
    const errs = {};
    if (!form.title) errs.title = "Select your title.";
    const mainNameTrimmed = (form.fullName || "").trim();
    const mainNameParts = mainNameTrimmed ? mainNameTrimmed.split(/\s+/).filter(Boolean) : [];
    if (!mainNameTrimmed) {
      errs.fullName = "Full name is required.";
    } else if (mainNameParts.length < 2) {
      errs.fullName = "Please enter both name and surname (e.g. John Smith).";
    }
    if (!form.companyName.trim()) errs.companyName = "Company name is required.";
    if (!form.countryCode) errs.countryCode = "Select your country code.";
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    else if (!/^\d{10,15}$/.test(form.phone)) errs.phone = "Mobile Number should be Min 10 digits and max 15 digits";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(form.email) || form.email.includes(" ")) {
      errs.email = "Invalid email address.";
    } else if (
      /@gamil\.com$/.test(form.email) ||
      /@yaho\.com$/.test(form.email)
    ) {
      errs.email = "Invalid email address.";
    }

    if (!form.tickets) {
      errs.tickets = "Select number of tickets.";
    } else {
      const ticketCount = parseInt(form.tickets);
      if (isNaN(ticketCount) || ticketCount < 1 || ticketCount > MAX_TICKETS) {
        errs.tickets = `You can book between 1 and ${MAX_TICKETS} tickets.`;
      }
    }

    if (!form.recaptchaToken) {
      errs.recaptchaToken = "Please verify you are not a robot.";
    }

    const addErrs = [];
    const ticketCount = parseInt(form.tickets) || 0;
    if (ticketCount > 1) {
      additionalAttendees.slice(0, ticketCount - 1).forEach((att, idx) => {
        const aErr = {};
        if (!att.title) aErr.title = "Select title.";
        const attNameTrimmed = (att.fullName || "").trim();
        const attNameParts = attNameTrimmed ? attNameTrimmed.split(/\s+/).filter(Boolean) : [];
        if (!attNameTrimmed) {
          aErr.fullName = "Full name is required.";
        } else if (attNameParts.length < 2) {
          aErr.fullName = "Please enter both name and surname (e.g. John Smith).";
        }
        if (!att.companyName?.trim()) aErr.companyName = "Company name is required.";
        if (!att.countryCode) aErr.countryCode = "Select country code.";
        if (!att.phone?.trim()) aErr.phone = "Phone number is required.";
        else if (!/^\d{10,15}$/.test(att.phone)) aErr.phone = "Mobile Number should be Min 10 digits and max 15 digits";
        
        if (!att.email?.trim()) {
          aErr.email = "Email is required.";
        } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(att.email) || att.email.includes(" ")) {
          aErr.email = "Invalid email address.";
        } else if (/@gamil\.com$/.test(att.email) || /@yaho\.com$/.test(att.email)) {
          aErr.email = "Invalid email address.";
        }

        if (Object.keys(aErr).length > 0) {
          addErrs[idx] = aErr;
        }
      });
    }

    // Merge duplicate errors across attendees
    const { dupErrs, dupAddErrs } = checkDuplicateErrors(form, additionalAttendees, form.tickets);

    Object.keys(dupErrs).forEach((field) => {
      if (!errs[field]) {
        errs[field] = dupErrs[field];
      }
    });

    dupAddErrs.forEach((dErr, idx) => {
      if (!addErrs[idx]) addErrs[idx] = {};
      Object.keys(dErr).forEach((field) => {
        if (!addErrs[idx][field]) {
          addErrs[idx][field] = dErr[field];
        }
      });
    });

    const hasAddErr = addErrs.some((aErr) => aErr && Object.keys(aErr).length > 0);
    const hasError = Object.keys(errs).length > 0 || hasAddErr;
    const hasDuplicate = Object.keys(dupErrs).length > 0 || dupAddErrs.some((d) => d && Object.keys(d).length > 0);

    return { errs, addErrs, hasError, hasDuplicate };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let val = value;
    let newErrors = { ...errors };

    if (name === "fullName") {
      const parts = val.trim() ? val.trim().split(/\s+/).filter(Boolean) : [];
      if (val.trim() && parts.length < 2) {
        newErrors.fullName = "Please enter both name and surname (e.g. John Smith).";
      } else {
        newErrors.fullName = "";
      }
    } else if (name === "email") {
      val = value.toLowerCase();
      newErrors.email = "";
    } else if (name === "phone") {
      val = value.replace(/\D/g, "");
      if (val.length > 0 && (val.length < 10 || val.length > 15)) {
        newErrors.phone = "Mobile Number should be Min 10 digits and max 15 digits";
      } else {
        newErrors.phone = "";
      }
    } else if (name === "companyName") {
      newErrors.companyName = "";
      setAdditionalAttendees((prev) =>
        prev.map((att) => ({
          ...att,
          companyName: att.companyName === form.companyName || !att.companyName ? val : att.companyName,
        }))
      );
    } else {
      newErrors[name] = "";
    }

    const updatedForm = { ...form, [name]: val };
    setForm(updatedForm);

    const { newErrors: liveErrors, newAddErrors: liveAddErrors } = updateLiveDuplicateErrors(
      updatedForm,
      additionalAttendees,
      newErrors,
      additionalErrors,
      0
    );

    setErrors(liveErrors);
    setAdditionalErrors(liveAddErrors);
  };

  const handleTicketsChange = (selected) => {
    const ticketCount = parseInt(selected.value) || 0;
    const updatedForm = { ...form, tickets: selected.value };
    setForm(updatedForm);
    setErrors((prev) => ({ ...prev, tickets: "" }));

    const neededExtra = Math.max(0, ticketCount - 1);
    let updatedAttendees = [];
    setAdditionalAttendees((prev) => {
      const copy = [...prev];
      if (copy.length < neededExtra) {
        for (let i = copy.length; i < neededExtra; i++) {
          copy.push({
            title: "",
            fullName: "",
            companyName: form.companyName || "",
            countryCode: "44",
            phone: "",
            email: "",
          });
        }
        updatedAttendees = copy;
      } else {
        updatedAttendees = copy.slice(0, neededExtra);
      }
      return updatedAttendees;
    });

    const truncatedAddErrs = additionalErrors.slice(0, neededExtra);
    const { newErrors: liveErrors, newAddErrors: liveAddErrors } = updateLiveDuplicateErrors(
      updatedForm,
      updatedAttendees,
      errors,
      truncatedAddErrs,
      0
    );

    setErrors(liveErrors);
    setAdditionalErrors(liveAddErrors);

    const match = bundles.find((b) => Number(b.ticketQuantity) === ticketCount);
    setPresetCouponCode(match?.code || "");
    setAppliedCoupon(match ? couponFromPack(match) : null);
  };

  const selectPackage = (pack) => {
    handleTicketsChange({ value: pack.ticketQuantity });
    const formEl = document.getElementById("ticket-booking-form");
    if (formEl) formEl.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleAdditionalChange = (idx, name, value) => {
    let val = value;
    if (name === "email") {
      val = value.toLowerCase();
    } else if (name === "phone") {
      val = value.replace(/\D/g, "");
    }

    const updatedAttendees = [...additionalAttendees];
    updatedAttendees[idx] = { ...updatedAttendees[idx], [name]: val };
    setAdditionalAttendees(updatedAttendees);

    let currentAddErrors = [...additionalErrors];
    if (currentAddErrors[idx] && currentAddErrors[idx][name]) {
      currentAddErrors[idx] = { ...currentAddErrors[idx], [name]: "" };
    }

    if (name === "fullName") {
      const parts = val.trim() ? val.trim().split(/\s+/).filter(Boolean) : [];
      if (val.trim() && parts.length < 2) {
        if (!currentAddErrors[idx]) currentAddErrors[idx] = {};
        currentAddErrors[idx].fullName = "Please enter both name and surname (e.g. John Smith).";
      }
    }

    const { newErrors: liveErrors, newAddErrors: liveAddErrors } = updateLiveDuplicateErrors(
      form,
      updatedAttendees,
      errors,
      currentAddErrors,
      idx + 1
    );

    setErrors(liveErrors);
    setAdditionalErrors(liveAddErrors);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Clear previous errors
    setErrors({});
    setAdditionalErrors([]);

    // Run validation
    const { errs, addErrs, hasError, hasDuplicate } = validate();
    if (hasError) {
      setErrors(errs);
      setAdditionalErrors(addErrs);
      setIsSubmitting(false);
      if (hasDuplicate) {
        toast.error("Each attendee must have a unique Full Name, Email Address, and Phone Number.");
      } else {
        toast.error("Please fill in all required attendee details accurately.");
      }
      return;
    }

    const fullPhone = `${form.countryCode}${form.phone}`;

    const attendeesList = [
      {
        title: form.title,
        fullName: form.fullName,
        companyName: form.companyName,
        email: form.email,
        phone: fullPhone,
      },
      ...additionalAttendees.map((att) => ({
        title: att.title,
        fullName: att.fullName,
        companyName: att.companyName,
        email: att.email,
        phone: `${att.countryCode}${att.phone}`,
      })),
    ];

    const ticketCount = parseInt(form.tickets, 10) || 1;
    const couponCode = resolveCouponForQuantity(
      appliedCoupon?.code || "",
      ticketCount,
      bundles.length ? bundles : FALLBACK_TICKET_PACKS
    );

    const formPayload = {
      title: form.title,
      fullName: form.fullName,
      companyName: form.companyName,
      email: form.email,
      tickets: form.tickets,
      mobile: fullPhone,
      recaptchaToken: form.recaptchaToken,
      attendees: attendeesList,
      couponCode,
    };

    try {
      // 1. Save booking details locally (pre-inquiry)
      const saveRes = await axios.post("/api/booking", formPayload);

      if (saveRes.data?.response) {
        const bookingId = saveRes.data.data.id;

        // 2. Prepare payment payload with booking ID
        const paymentPayload = {
          ...formPayload,
          id: bookingId,
          bookingId: bookingId,
          couponCode,
        };

        // 3. Create Stripe checkout session (the coupon is re-validated server-side)
        const checkoutRes = await axios.post(
          `${PAYMENT_API_BASE}/create-checkout-session`,
          paymentPayload
        );

        // 4. Redirect to Stripe Checkout
        if (checkoutRes.data?.url) {
          window.location.href = checkoutRes.data.url;
        } else {
          console.error("Checkout response missing URL:", checkoutRes.data);
          toast.error(checkoutRes?.data?.message || "Failed to initiate payment session.");
        }
      } else {
        toast.error(saveRes.data?.data || "Failed to save booking details. Please try again.");
      }
    } catch (err) {
      console.error("Checkout session error:", err.response?.data || err.message || err);
      toast.error(
        err.response?.data?.error ||
        err.response?.data?.message ||
        "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // 🔴 Dynamic input style based on error
  const getAdditionalInputStyle = (idx, field) => ({
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    width: "100%",
    backgroundColor: additionalErrors[idx]?.[field] ? "#ffe5e5" : "white",
  });



  // 🔴 Dynamic input style based on error
  const getInputStyle = (field) => ({
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    width: "100%",
    backgroundColor: errors[field] ? "#ffe5e5" : "white",
  });

  return (
    <>

      <div className="cs-height_90 cs-height_lg_80" />
      <Helmet>
        <title>Book Brit Awards Tickets</title>
        <meta
          name="description"
          content="Secure your seat at the Brit Fintech Awards. Join industry leaders for an unforgettable evening."
        />
        <meta
          name="keywords"
          content="Buy Brit Awards Tickets, Brit Awards Guest, Brit Awards When"
        />
        <meta name="author" content="Brit Fintech Awards" />

        {/* Open Graph Meta Tags for Link Preview */}
        <meta property="og:title" content="Book Brit Awards Tickets" />
        <meta
          property="og:description"
          content="Secure your seat at the Brit Fintech Awards. Join industry leaders for an unforgettable evening."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/tickets-banner.jpg"
        />
        <meta property="og:url" content="https://britfintechawards.com/tickets" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (Optional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Brit Awards Tickets" />
        <meta
          name="twitter:description"
          content="Secure your seat at the Brit Fintech Awards. Join industry leaders for an unforgettable evening."
        />
        <meta
          name="twitter:image"
          content="https://britfintechawards.com/assets/tickets-banner.jpg"
        />
      </Helmet>

      <div
        className="cs-hero cs-style12 cs-type1 cs-center text-center  cs-parallax cs-hobble"

        style={{
          backgroundImage:
            'url("../assets/img/event-conference/hero-img.jpg")',
          height: "160px"
        }}
      >
        {/* <div className="cs-hero_pattern cs-hover_layer3" style={{}}>
         
          </div> */}
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
              className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-0 mb-2"
              style={{ marginTop: "10px", lineHeight: '1.2' }}
            >


              Book Your Tickets
            </h1>

            {/* <p className="pb-0 mb-0 text-left text-white"> Let’s celebrate innovation together. 
            </p> */}

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
          <div className="cs-hero_img_circle" id="ticket-booking" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "3rem 1rem",
          fontFamily: "Segoe UI, sans-serif",
          gap: "2rem",
          width: "100%",
        }}
      >
        <div className="ticket-earlybird-wrap">
          <div className="ticket-earlybird-card">
            <span className="ticket-earlybird-badge">Active</span>
            <h4 className="ticket-earlybird-title">Awards Night Tickets</h4>
            {/* <p className="ticket-earlybird-dates">11th September - Onwords</p> */}
            <div className="ticket-earlybird-prices">
              {ticketPrice < 395 && <span className="ticket-earlybird-was">£395</span>}
              <span className="ticket-earlybird-now">£{ticketPrice}</span>
            </div>
          </div>
        </div>

        <div className="ticket-pack-wrap">
          <div className="ticket-pack-intro">
            <h3 className="ticket-pack-heading">Choose your ticket pack</h3>
            <p className="ticket-pack-sub">Select a pack to apply the discounted rate to your booking.</p>
          </div>
          <div className="ticket-pack-row">
            {(bundles.length ? bundles : FALLBACK_TICKET_PACKS).map((pack) => {
              const selected = Number(form.tickets) === Number(pack.ticketQuantity);
              const qty = Number(pack.ticketQuantity);
              return (
                <button
                  type="button"
                  key={pack.code}
                  className={`ticket-pack-card${selected ? " is-selected" : ""}`}
                  onClick={() => selectPackage(pack)}
                  aria-pressed={selected}
                  aria-label={
                    selected
                      ? `${pack.label} pack applied`
                      : `Tap to apply ${pack.label} pack for ${formatGBP(pack.packPrice)}`
                  }
                >
                  <div className="ticket-pack-label">{pack.label}</div>
                  <div className="ticket-pack-qty">
                    <span className="ticket-pack-qty-num">{qty}</span>
                    <span className="ticket-pack-qty-word">{qty === 1 ? "TICKET" : "TICKETS"}</span>
                  </div>
                  <div className="ticket-pack-rule" />
                  <div className="ticket-pack-prices">
                    <div className={`ticket-pack-was${pack.saveAmount > 0 ? "" : " is-empty"}`}>
                      {pack.saveAmount > 0 ? formatGBP(pack.baseAmount) : "\u00A0"}
                    </div>
                    <div className="ticket-pack-now">{formatGBP(pack.packPrice)}</div>
                  </div>
                  <div className="ticket-pack-save-note">
                    {pack.saveAmount > 0 ? `Save ${formatGBP(pack.saveAmount)}` : "\u00A0"}
                  </div>
                  <div className={`ticket-pack-cta${selected ? " is-applied" : ""}`}>
                    {selected ? (
                      <>
                        <span className="ticket-pack-cta-icon" aria-hidden="true">✓</span>
                        Pack applied
                      </>
                    ) : (
                      "Tap to apply"
                    )}
                  </div>
                </button>
              );
            })}
          </div>
          <style>{`
            .ticket-earlybird-wrap {
              width: 100%;
              display: flex;
              justify-content: center;
            }
            .ticket-earlybird-card {
              position: relative;
              width: 100%;
              max-width: 380px;
              background: linear-gradient(135deg, #fff5f5, #ffebeb);
              border: 3px solid #c8102e;
              border-radius: 18px;
              padding: 28px 18px 24px;
              text-align: center;
              box-shadow: 0 8px 20px rgba(200, 16, 46, 0.15);
            }
            .ticket-earlybird-badge {
              position: absolute;
              top: 0;
              right: 0;
              padding: 5px 12px;
              border-radius: 0 15px 0 12px;
              font-size: 0.7rem;
              font-weight: 700;
              letter-spacing: 0.04em;
              text-transform: uppercase;
              background: #c8102e;
              color: #fff;
              box-shadow: 0 4px 10px rgba(200, 16, 46, 0.25);
            }
            .ticket-earlybird-title {
              font-size: 1.1rem;
              font-weight: 600;
              margin: 0 0 8px;
              color: #222;
            }
            .ticket-earlybird-dates {
              font-size: 0.92rem;
              color: #666;
              margin: 0 0 12px;
            }
            .ticket-earlybird-prices {
              display: flex;
              align-items: baseline;
              justify-content: center;
              gap: 10px;
            }
            .ticket-earlybird-was {
              font-size: 1.15rem;
              font-weight: 600;
              color: #999;
              text-decoration: line-through;
            }
            .ticket-earlybird-now {
              font-size: 1.7rem;
              font-weight: 700;
              background: linear-gradient(to right, #000000 0%, #c8102e 50%, #000000 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              color: transparent;
            }
            .ticket-pack-wrap {
              width: 100%;
              max-width: 1100px;
            }
            .ticket-pack-intro {
              text-align: center;
              margin: 0 0 18px;
            }
            .ticket-pack-heading {
              margin: 0 0 6px;
              font-size: 1.15rem;
              font-weight: 800;
              letter-spacing: 0.02em;
              color: #111;
            }
            .ticket-pack-sub {
              margin: 0;
              font-size: 0.92rem;
              color: #666;
            }
            .ticket-pack-row {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              align-items: stretch;
              gap: 14px;
            }
            .ticket-pack-card {
              flex: 1 1 160px;
              max-width: 196px;
              min-width: 150px;
              background: #f4f4f4;
              border: 1px solid #cfcfcf;
              border-radius: 6px;
              padding: 18px 12px 0;
              text-align: center;
              cursor: pointer;
              color: #111;
              display: flex;
              flex-direction: column;
              align-items: center;
              overflow: hidden;
              transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
            }
            .ticket-pack-card:hover {
              transform: translateY(-3px);
              box-shadow: 0 8px 18px rgba(0,0,0,0.08);
            }
            .ticket-pack-card:hover:not(.is-selected) .ticket-pack-cta {
              background: #b80500;
            }
            .ticket-pack-card.is-selected {
              border-color: #e10600;
              box-shadow: 0 0 0 2px #e10600;
              background: #fff;
            }
            .ticket-pack-label {
              font-size: 15px;
              font-weight: 800;
              letter-spacing: 0.04em;
              margin-bottom: 10px;
            }
            .ticket-pack-qty {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 6px;
              min-height: 72px;
            }
            .ticket-pack-qty-num {
              font-size: 56px;
              font-weight: 800;
              line-height: 0.9;
              color: #e10600;
            }
            .ticket-pack-qty-word {
              writing-mode: vertical-rl;
              transform: rotate(180deg);
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 0.08em;
            }
            .ticket-pack-rule {
              width: 78%;
              border-top: 1px dashed #bbb;
              margin: 12px 0 10px;
            }
            .ticket-pack-prices {
              min-height: 62px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-end;
            }
            .ticket-pack-was {
              font-size: 18px;
              font-weight: 700;
              text-decoration: line-through;
              color: #222;
              min-height: 1.2em;
            }
            .ticket-pack-was.is-empty {
              text-decoration: none;
              visibility: hidden;
            }
            .ticket-pack-now {
              font-size: 30px;
              font-weight: 800;
              color: #e10600;
              line-height: 1.1;
            }
            .ticket-pack-save-note {
              margin-top: 8px;
              font-size: 12px;
              font-weight: 700;
              letter-spacing: 0.04em;
              text-transform: uppercase;
              color: #1c8a4d;
              min-height: 1.2em;
            }
            .ticket-pack-cta {
              margin-top: auto;
              width: calc(100% + 24px);
              background: #e10600;
              color: #fff;
              font-size: 12px;
              font-weight: 800;
              letter-spacing: 0.06em;
              text-transform: uppercase;
              padding: 11px 8px;
              border-radius: 0 0 5px 5px;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 6px;
            }
            .ticket-pack-cta.is-applied {
              background: #1c8a4d;
            }
            .ticket-pack-cta-icon {
              font-size: 13px;
              line-height: 1;
            }
            @media (max-width: 700px) {
              .ticket-pack-card { max-width: 100%; flex: 1 1 140px; }
              .ticket-pack-qty-num { font-size: 44px; }
              .ticket-pack-now { font-size: 24px; }
            }
          `}</style>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
            width: "100%",
          }}
        >
        {/* Booking Form */}
        <div
          style={{
            backgroundColor: "#efefef",
            padding: "2rem",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            width: "500px",
          }}
        >
          <form id="ticket-booking-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              {/* Title Dropdown */}
              <div style={{ flex: "0 0 100px" }}>
                <Select
                  name="title"
                  options={titleOptions}
                  value={titleOptions.find((opt) => opt.value === form.title)}
                  onChange={(selected) =>
                    handleChange({ target: { name: "title", value: selected.value } })
                  }
                  styles={{ control: (base) => ({ ...base, ...getInputStyle("title") }) }}
                  isSearchable={false}
                />
                {errors.title && (
                  <p style={{ ...errorStyle, marginTop: "5px" }}>{errors.title}</p>
                )}
              </div>

              {/* Full Name Input */}
              <div style={{ flex: "1" }}>
                <input
                  name="fullName"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={handleChange}
                  style={{ width: "100%", ...getInputStyle("fullName") }}
                />
                {errors.fullName && (
                  <p style={{ ...errorStyle, marginTop: "5px" }}>{errors.fullName}</p>
                )}
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
              {/* Country Code Select */}
              <div style={{ flex: "0 0 140px" }}>
                <Select
                  name="countryCode"
                  options={countryCodeOptions}
                  value={countryCodeOptions.find((opt) => opt.value === form.countryCode)}
                  onChange={(selected) =>
                    handleChange({ target: { name: "countryCode", value: selected.value } })
                  }
                  formatOptionLabel={(option, { context }) => {
                    const countryName = option.label.split(" (+")[0];
                    if (context === "value") {
                      return `+${option.value}`;
                    }
                    return (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ display: "inline-block", width: "45px", flexShrink: 0 }}>
                          +{option.value}
                        </span>
                        <span style={{ flex: 1, paddingLeft: "8px" }}>
                          {countryName}
                        </span>
                      </div>
                    );
                  }}
                  styles={{
                    control: (base) => ({ ...base, ...getInputStyle("countryCode") }),
                    menu: (base) => ({ ...base, width: "300px", zIndex: 9999 })
                  }}
                  isSearchable={true}
                />
                {errors.countryCode && (
                  <p style={{ ...errorStyle, marginTop: "5px" }}>{errors.countryCode}</p>
                )}

              </div>

              {/* Phone Input */}
              <div style={{ flex: "1" }}>
                <input
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  style={{ width: "100%", ...getInputStyle("phone") }}
                />
                {errors.phone && (
                  <p style={{ ...errorStyle, marginTop: "5px" }}>{errors.phone}</p>
                )}
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
                onChange={handleTicketsChange}
                styles={{ control: (base) => ({ ...base, ...getInputStyle("tickets") }) }}
                isSearchable={false}
              />
              {errors.tickets && <p style={errorStyle}>{errors.tickets}</p>}
            </div>

            {/* Additional Attendee Form Cards */}
            {additionalAttendees.map((att, idx) => {
              const attNumber = idx + 2;
              const attErrors = additionalErrors[idx] || {};

              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    paddingTop: "15px",
                    borderTop: "2px stroke #ddd",
                    marginTop: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid #ccc",
                      paddingBottom: "8px",
                      marginBottom: "2px",
                    }}
                  >
                    <h4
                      style={{
                        margin: 0,
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "#000000",
                      }}
                    >
                      Attendee #{attNumber} Details
                    </h4>
                    <span style={{ fontSize: "12px", color: "#666", fontWeight: "600" }}>
                      Ticket {attNumber} of {form.tickets}
                    </span>
                  </div>

                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    {/* Title */}
                    <div style={{ flex: "0 0 100px" }}>
                      <Select
                        name="title"
                        options={titleOptions}
                        value={titleOptions.find((opt) => opt.value === att.title)}
                        onChange={(selected) =>
                          handleAdditionalChange(idx, "title", selected.value)
                        }
                        styles={{ control: (base) => ({ ...base, ...getAdditionalInputStyle(idx, "title") }) }}
                        isSearchable={false}
                      />
                      {attErrors.title && (
                        <p style={{ ...errorStyle, marginTop: "5px" }}>{attErrors.title}</p>
                      )}
                    </div>

                    {/* Full Name */}
                    <div style={{ flex: "1" }}>
                      <input
                        name="fullName"
                        placeholder="Full Name (Name & Surname)"
                        value={att.fullName}
                        onChange={(e) => handleAdditionalChange(idx, "fullName", e.target.value)}
                        style={{ width: "100%", ...getAdditionalInputStyle(idx, "fullName") }}
                      />
                      {attErrors.fullName && (
                        <p style={{ ...errorStyle, marginTop: "5px" }}>{attErrors.fullName}</p>
                      )}
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <input
                      name="companyName"
                      placeholder="Company Name"
                      value={att.companyName}
                      onChange={(e) => handleAdditionalChange(idx, "companyName", e.target.value)}
                      style={getAdditionalInputStyle(idx, "companyName")}
                    />
                    {attErrors.companyName && <p style={errorStyle}>{attErrors.companyName}</p>}
                  </div>

                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    {/* Country Code */}
                    <div style={{ flex: "0 0 140px" }}>
                      <Select
                        name="countryCode"
                        options={countryCodeOptions}
                        value={countryCodeOptions.find((opt) => opt.value === att.countryCode)}
                        onChange={(selected) =>
                          handleAdditionalChange(idx, "countryCode", selected.value)
                        }
                        formatOptionLabel={(option, { context }) => {
                          const countryName = option.label.split(" (+")[0];
                          if (context === "value") {
                            return `+${option.value}`;
                          }
                          return (
                            <div style={{ display: "flex", alignItems: "center" }}>
                              <span style={{ display: "inline-block", width: "45px", flexShrink: 0 }}>
                                +{option.value}
                              </span>
                              <span style={{ flex: 1, paddingLeft: "8px" }}>
                                {countryName}
                              </span>
                            </div>
                          );
                        }}
                        styles={{
                          control: (base) => ({ ...base, ...getAdditionalInputStyle(idx, "countryCode") }),
                          menu: (base) => ({ ...base, width: "300px", zIndex: 9999 })
                        }}
                        isSearchable={true}
                      />
                      {attErrors.countryCode && (
                        <p style={{ ...errorStyle, marginTop: "5px" }}>{attErrors.countryCode}</p>
                      )}
                    </div>

                    {/* Phone Input */}
                    <div style={{ flex: "1" }}>
                      <input
                        name="phone"
                        placeholder="Phone"
                        value={att.phone}
                        onChange={(e) => handleAdditionalChange(idx, "phone", e.target.value)}
                        style={{ width: "100%", ...getAdditionalInputStyle(idx, "phone") }}
                      />
                      {attErrors.phone && (
                        <p style={{ ...errorStyle, marginTop: "5px" }}>{attErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      name="email"
                      placeholder="Email Address"
                      type="email"
                      value={att.email}
                      onChange={(e) => handleAdditionalChange(idx, "email", e.target.value)}
                      style={getAdditionalInputStyle(idx, "email")}
                    />
                    {attErrors.email && <p style={errorStyle}>{attErrors.email}</p>}
                  </div>
                </div>
              );
            })}

            <div className="col-12 mt-3">
              <CouponCodeInput
                type="ticket"
                quantity={form.tickets || 1}
                email={form.email}
                onApplied={(result) => {
                  setAppliedCoupon(result);
                  if (!result) setPresetCouponCode("");
                }}
                disabled={isSubmitting}
                presetCode={presetCouponCode}
                packs={bundles.length ? bundles : FALLBACK_TICKET_PACKS}
              />
            </div>

            <div className="col-12 mt-3">
              <div className="input-field">
                <ReCAPTCHA
                  sitekey="6LdxNigqAAAAAJ6jU9uuhEtrAw-s8J_qnsGCVvj5"
                  onChange={handleCaptchaChange}
                />
                {errors.recaptchaToken && (
                  <p style={{ ...errorStyle, marginTop: "5px" }}>{errors.recaptchaToken}</p>
                )}
              </div>
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
              onMouseOver={(e) => (e.target.style.background = "#000")}
              onMouseOut={(e) => (e.target.style.background = "#000")}
              disabled={isSubmitting}
            >

              {isSubmitting ? "Processing..." : " Proceed to Pay "}
            </button>


          </form>
        </div>

        {/* Right Side Info */}
        {/* Right Side Info */}
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

            .ticket-info-card::before {
              content: '';
              position: absolute;
              top: -20%;
              right: -20%;
              width: 180px;
              height: 180px;
              background: radial-gradient(circle, rgba(200, 16, 46, 0.05) 0%, transparent 70%);
              pointer-events: none;
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
              display: flex;
              align-items: center;
              gap: 8px;
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

            .ticket-info-item:hover {
              transform: translateX(5px);
            }

            .ticket-info-icon-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 28px;
              height: 28px;
              color: #c8102e;
              flex-shrink: 0;
              margin-top: 1px;
              transition: all 0.3s ease;
            }

            .ticket-info-icon-wrapper svg {
              width: 22px;
              height: 22px;
              display: block;
            }

            .ticket-info-item:hover .ticket-info-icon-wrapper {
              color: #b89600;
              transform: scale(1.2) rotate(5deg);
            }

            .ticket-info-text {
              font-size: 1rem;
              font-weight: 600;
              color: rgba(44, 44, 46, 0.85);
              line-height: 1.45;
              letter-spacing: 0.015em;
              transition: color 0.3s ease;
              text-align: left;
            }

            .ticket-info-item:hover .ticket-info-text {
              color: #000000;
            }
          `}</style>

          <h3 className="ticket-info-card-title">
            
            An Elevated BFA Experience Awaits
          </h3>
          <p className="ticket-info-card-subtitle">
            Your ticket is more than entry — it’s an experience.
          </p>

          <div className="ticket-info-list">
            <div className="ticket-info-item">
              <div className="ticket-info-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                </svg>
              </div>
              <span className="ticket-info-text">Prestigious Awards Ceremony</span>
            </div>

            <div className="ticket-info-item">
              <div className="ticket-info-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                </svg>
              </div>
              <span className="ticket-info-text">1-2-1 Exclusive Meetings with Industry Leaders</span>
            </div>

            <div className="ticket-info-item">
              <div className="ticket-info-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                </svg>
              </div>
              <span className="ticket-info-text">Fintech & MSB Exhibit Spaces</span>
            </div>

            <div className="ticket-info-item">
              <div className="ticket-info-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                </svg>
              </div>
              <span className="ticket-info-text">Meaningful Networking with Global Fintech & MSB Leaders</span>
            </div>

            <div className="ticket-info-item">
              <div className="ticket-info-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                </svg>
              </div>
              <span className="ticket-info-text">Exclusive Tech-Luxury Venue</span>
            </div>

            <div className="ticket-info-item">
              <div className="ticket-info-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                </svg>
              </div>
              <span className="ticket-info-text">Premium Return Gifts</span>
            </div>

            <div className="ticket-info-item">
              <div className="ticket-info-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                </svg>
              </div>
              <span className="ticket-info-text">Elegant Buffet Dining Experience</span>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="relative w-full max-w-[620px] mx-auto my-12 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-neutral-100/85 font-sans overflow-hidden">
        

        <div className="p-10 pt-5">
          {/* Date & Time Header */}
          <h3 className="text-[22px] sm:text-[24px] font-bold text-black mb-4 text-left tracking-tight">
            Friday, 9th October 2026 | 6 PM Onwards
          </h3>
          {/* Slanted Accent Strip */}
          <div className="mb-8">
            <div className="flex h-[9px] w-full overflow-hidden -skew-x-[25deg] rounded-[3px]">
              <div className="w-[28%] bg-black" />
              <div className="w-[72%] bg-[#c8102e]" />
            </div>
          </div>
          {/* Location Details */}
          <div className="flex items-center gap-4 mb-8 text-left">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-[#c8102e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[19px] font-extrabold text-black leading-tight">
                Landing Forty Two
              </span>
              <span className="text-[15px] sm:text-base text-neutral-600 mt-1.5 font-medium">
                122 Leadenhall Street, London EC3V 4AB
              </span>
            </div>
          </div>

          <div className="max-w-[480px] mx-auto bg-[#c8102e] text-white px-6 py-[18px] rounded-2xl shadow-sm" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <p className="text-[14.5px] sm:text-[15.5px] font-semibold tracking-wide leading-relaxed max-w-[340px] sm:max-w-[380px] mx-auto" style={{ textAlign: "center", margin: "0 auto" }}>
              Reserve your ticket now and be part of something extraordinary.
            </p>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

const errorStyle = {
  color: "red",
  fontSize: "13px",
  marginTop: "1px",
  marginBottom: "0px"
};


<style>
  {`
      .cs-hero.cs-style12.cs-type1 {
        height: 141px !important;
        padding-bottom: 40px !important;
    }


  `}
</style>


export default TicketBookingPage;
