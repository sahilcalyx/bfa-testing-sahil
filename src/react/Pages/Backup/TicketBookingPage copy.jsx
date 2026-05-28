import { useState } from "react";
import axios from "axios";
import Select from "react-select";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";

// ====== Titles ======
const titleOptions = [
  { value: "", label: "Title" },
  { value: "Mr.", label: "Mr." },
  { value: "Mrs.", label: "Mrs." },
  { value: "Miss", label: "Miss" },
  { value: "Ms.", label: "Ms." },
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

const countryCodeOptions = countryCodes.map((c) => ({
  value: c.code,
  label: c.label,
}));

function TicketBookingPage() {
  const [isSoldOut] = useState(true); // 🔴 toggle this when sold out
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
    if (!form.fullName.trim()) errs.fullName = "Full name is required.";
    if (!form.companyName.trim()) errs.companyName = "Company name is required.";
    if (!form.countryCode) errs.countryCode = "Select country code.";
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    else if (!/^\d{7,15}$/.test(form.phone)) errs.phone = "Phone number must be 7-15 digits.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email address.";

    if (!form.tickets || parseInt(form.tickets) < 1 || parseInt(form.tickets) > MAX_TICKETS)
      errs.tickets = "Select ticket count.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSoldOut) return;
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
      await axios.post("https://bfa-ticket-event.vercel.app/submit-form", formPayload);

      const checkoutRes = await axios.post(
        "https://bfa-ticket-event.vercel.app/create-checkout-session",
        formPayload
      );

      if (checkoutRes.data?.url) {
        window.location.href = checkoutRes.data.url;
      } else {
        console.error("Checkout response missing URL:", checkoutRes.data);
        toast.error(checkoutRes?.data?.message || "Checkout URL not received.");
      }
    } catch (err) {
      console.error("Checkout session error:", err.response?.data || err.message || err);
      toast.error(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="cs-height_90 cs-height_lg_80" />
      <Helmet>
        <title>Book Brit Awards Tickets</title>
        <meta
          name="description"
          content="Secure your seat at the Brit Fintech Awards. Join industry leaders for an unforgettable evening."
        />
      </Helmet>

      {/* ====== HERO / BANNER SECTION ====== */}
      <div
        className="cs-hero cs-style12 cs-type1 cs-center text-center cs-parallax cs-hobble"
        style={{
          backgroundImage: 'url("../assets/img/event-conference/hero-img.jpg")',
          height: "160px",
        }}
      >
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
              style={{ marginTop: "10px", lineHeight: "1.2" }}
            >
              Book Your Tickets
            </h1>
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

      {/* ====== BOOKING SECTION ====== */}
      <div className="container my-5">
        <div className="row justify-content-center g-4">
          {/* Left Side: Booking Form */}
          <div className="col-lg-6">
            <div className="p-4 bg-light rounded shadow">
              {/* 🔴 Sold Out Message */}
              {isSoldOut && (
                <div
                  style={{
                    background: "#ff004f",
                    color: "#fff",
                    padding: "12px",
                    textAlign: "center",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    borderRadius: "8px",
                    marginBottom: "20px",
                  }}
                >
                  The Brit FinTech Awards 2025 is officially a full house!
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                style={{
                  opacity: isSoldOut ? "0.5" : "1",
                  pointerEvents: isSoldOut ? "none" : "auto",
                }}
              >
                <div className="d-flex gap-2 mb-3">
                  <div style={{ width: "120px" }}>
                    <Select
                      isDisabled={isSoldOut}
                      options={titleOptions}
                      value={titleOptions.find(opt => opt.value === form.title)}
                      onChange={(selected) =>
                        handleChange({ target: { name: "title", value: selected.value } })
                      }
                      placeholder="Title"
                      isSearchable={false}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      name="fullName"
                      className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                      placeholder="Full Name"
                      value={form.fullName}
                      onChange={handleChange}
                      disabled={isSoldOut}
                    />
                    {errors.fullName && (
                      <div className="invalid-feedback">{errors.fullName}</div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="companyName"
                    className={`form-control ${errors.companyName ? "is-invalid" : ""}`}
                    placeholder="Company Name"
                    value={form.companyName}
                    onChange={handleChange}
                    disabled={isSoldOut}
                  />
                  {errors.companyName && (
                    <div className="invalid-feedback">{errors.companyName}</div>
                  )}
                </div>
                <div className="mb-3">
                  <Select
                    isDisabled={isSoldOut}
                    options={countryCodeOptions}
                    value={countryCodeOptions.find((opt) => opt.value === form.countryCode)}
                    onChange={(selected) =>
                      handleChange({ target: { name: "countryCode", value: selected.value } })
                    }
                    formatOptionLabel={(option, { context }) => {
                      const countryName = option.label.split(" (+")[0];
                      return context === "value" ? `+${option.value}` : `+${option.value} - ${countryName}`;
                    }}
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderColor: errors.countryCode ? "#dc3545" : base.borderColor,
                        "&:hover": {
                          borderColor: errors.countryCode ? "#dc3545" : base.borderColor
                        }
                      }),
                      menu: (base) => ({ ...base, width: "300px", zIndex: 9999 })
                    }}
                    isSearchable={true}
                    placeholder="Country Code"
                  />
                  {errors.countryCode && (
                    <div className="text-danger" style={{ fontSize: "0.875em", marginTop: "0.25rem" }}>
                      {errors.countryCode}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="phone"
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={isSoldOut}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    disabled={isSoldOut}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <Select
                    isDisabled={isSoldOut}
                    options={ticketOptions}
                    value={ticketOptions.find((opt) => opt.value === form.tickets)}
                    onChange={(selected) =>
                      handleChange({ target: { name: "tickets", value: selected.value } })
                    }
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderColor: errors.tickets ? "#dc3545" : base.borderColor,
                        "&:hover": {
                          borderColor: errors.tickets ? "#dc3545" : base.borderColor
                        }
                      })
                    }}
                    isSearchable={false}
                    placeholder="Tickets"
                  />
                  {errors.tickets && (
                    <div className="text-danger" style={{ fontSize: "0.875em", marginTop: "0.25rem" }}>
                      {errors.tickets}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <ReCAPTCHA
                    sitekey="6LdxNigqAAAAAJ6jU9uuhEtrAw-s8J_qnsGCVvj5"
                    onChange={handleCaptchaChange}
                  />
                  {errors.recaptchaToken && (
                    <div className="text-danger" style={{ fontSize: "0.875em", marginTop: "0.25rem" }}>
                      {errors.recaptchaToken}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-dark w-100"
                  disabled={isSubmitting || isSoldOut}
                  style={{
                    cursor: isSoldOut ? "not-allowed" : "pointer",
                    opacity: isSoldOut ? 0.7 : 1,
                    fontWeight: "600",
                  }}
                >
                  {isSoldOut ? "Tickets Sold Out" : isSubmitting ? "Processing..." : "Proceed to Pay"}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Event Info */}
          <div className="col-lg-5">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="fw-bold mb-3">✨ An Evening You Won’t Forget</h3>
              <p className="mb-3 text-muted">
                Your ticket is more than entry — it’s an experience:
              </p>
              <ul className="list-unstyled" style={{ lineHeight: "1.9", paddingLeft: "10px" }}>
                <li>✅ <strong>A Dazzling Awards Ceremony</strong></li>
                <li>✅ <strong>3-Course Meal & Drinks Included</strong></li>
                <li>✅ <strong>Live Startup Pitches</strong></li>
                <li>✅ <strong>Networking with 150+ FinTech & MSB Professionals</strong></li>
                <li>✅ <strong>High Industry Visibility</strong></li>
                <li>✅ <strong>Explore a Historic, Elegant London Venue</strong></li>
                <li>✅ <strong>Curated Return Gifts & More!</strong></li>
              </ul>
              <p className="mt-3 text-muted">
                Join us in celebrating innovation and excellence in FinTech at{" "}
                <strong>The Brit FinTech Awards 2025</strong>. See you there!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ====== EVENT VENUE AND DATE CARD ====== */}
      <div
        className="card container bg-white"
        style={{
          maxWidth: "600px",
          margin: "50px auto",
          padding: "2rem",
          borderRadius: "15px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          fontFamily: "Segoe UI, sans-serif",
          color: "#333",
          lineHeight: "1.6",
        }}
      >
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          <strong style={{ fontSize: "1.3rem", color: "#2c3e50" }}>
            Friday, 9th October 2025 | 6 PM Onwards
          </strong>
          <br />
          <br />
          📍 <span style={{ fontWeight: "500" }}>
            Landing Forty-Two 122 Leadenhall Street, <br />London EC3V 4AB
          </span>
        </p>
        <p
          style={{
            fontWeight: "500",
            marginBottom: "1rem",
            backgroundColor: "#ffc2e0",
            padding: "1rem",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            color: "#000",
            fontSize: "1.05rem",
            textAlign: "center",
            marginTop: "8px"
          }}
        >
          Reserve your ticket now and be part of something extraordinary.
        </p>
      </div>

      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default TicketBookingPage;
