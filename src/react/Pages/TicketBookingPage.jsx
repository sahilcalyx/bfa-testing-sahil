import { useState } from "react";
import axios from "axios";
import Select from "react-select";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
// Country codes list (partial - you can extend it)
// ====== Titles ======
const titleOptions = [
  { value: "Mr.", label: "Mr." },
  { value: "Ms.", label: "Ms." },
  { value: "Dr.", label: "Dr." },
  { value: "Mrs.", label: "Mrs." },
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


const MAX_TICKETS = 5; // or whatever max limit you want
const TICKET_PRICE = 195; // or the actual ticket price



const ticketOptions = [...Array(MAX_TICKETS)].map((_, i) => {
  const count = i + 1;
  return {
    value: count,
    label: `${count} Ticket${count > 1 ? "s" : ""} – £${count * TICKET_PRICE}`,
  };
});

const countryCodeOptions = countryCodes.map((c) => ({
  value: c.code,
  label: c.label,
}));

function TicketBookingPage() {
const [captchaToken, setCaptchaToken] = useState("");
const [form, setForm] = useState({
  title: "Mr.",
  fullName: "",
  companyName: "",
  countryCode: "44",
  phone: "",
  email: "",
  tickets: "",
  recaptchaToken: ""
});

const handleCaptchaChange = (token) => {
  setCaptchaToken(token);
  setForm((prev) => ({ ...prev, recaptchaToken: token })); // update form with token
};

const [errors, setErrors] = useState({});
// Remove duplicate declarations of TICKET_PRICE and MAX_TICKETS

const validate = () => {
  const errs = {};
  if (!form.fullName.trim()) errs.fullName = "Full name is required.";
  if (!form.companyName.trim()) errs.companyName = "Company name is required.";
  if (!form.countryCode) errs.countryCode = "Select your country code.";
  if (!form.phone.trim()) errs.phone = "Phone number is required.";
  else if (!/^\d{7,15}$/.test(form.phone)) errs.phone = "Phone number must be 7-15 digits.";
  if (!form.email.trim()) errs.email = "Email is required.";
  else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email address.";

  if (!form.tickets || parseInt(form.tickets) < 1 || parseInt(form.tickets) > MAX_TICKETS)
    errs.tickets = "You can book between 1 and 5 tickets.";
  return errs;
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
  setErrors({ ...errors, [name]: "" }); // Clear error for the field
};

const [isSubmitting, setIsSubmitting] = useState(false);
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Clear previous errors
  setErrors({});

  // Run validation
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setIsSubmitting(false);
    return;
  }

  // ✅ Correct phone interpolation
  // ✅ Correct phone interpolation
  const fullPhone = `${form.countryCode}${form.phone}`;

  const formPayload = {
    title: form.title,
    fullName: form.fullName,
    companyName: form.companyName,
    email: form.email,
    tickets: form.tickets,
    phone: fullPhone,
    recaptchaToken: form.recaptchaToken,
  };

  try {
    // ✅ Await first request so errors are caught
    await axios.post("https://bfa-ticket-event.vercel.app/submit-form", formPayload);

    // ✅ Await checkout request
    const checkoutRes = await axios.post(
      "https://bfa-ticket-event.vercel.app/create-checkout-session",
      formPayload
    );

    // ✅ Stripe redirect
    if (checkoutRes.data?.url) {
      window.location.href = checkoutRes.data.url;
    } else {
      console.error("Checkout response missing URL:", checkoutRes.data);
      toast.error(checkoutRes?.data?.message);
    }
  } catch (err) {
    console.error("Checkout session error:", err.response?.data || err.message || err);
    toast.error(err.response?.data?.message);
  } finally {
    setIsSubmitting(false);
  }
};



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
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "3rem 1rem",
      
        fontFamily: "Segoe UI, sans-serif",
        flexWrap: "wrap",
        gap: "2rem",
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
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
  styles={{ control: (base) => ({ ...base, ...getInputStyle("countryCode") }) }}
  isSearchable={false}
/>
  {errors.countryCode && (
    <p style={{ ...errorStyle, marginTop: "5px" }}>{errors.countryCode}</p>
  )}
 
  </div>

  {/* Phone Number Input */}
  <div style={{ flex: "1" }}>
    <input
      name="phone"
      placeholder="Phone Number"
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
              placeholder="Email"
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
    onChange={(selected) =>
      handleChange({ target: { name: "tickets", value: selected.value } })
    }
    styles={{ control: (base) => ({ ...base, ...getInputStyle("tickets") }) }}
    isSearchable={false}
  />
            {errors.tickets && <p style={errorStyle}>{errors.tickets}</p>}
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
      <div
  style={{
    width: "400px",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: "1.6",
  }}
>
  <p style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }}>
    ✨ An Evening You Won’t Forget 
  </p>
  <p style={{ marginBottom: "1rem" }}>
    Your ticket is more than entry — it’s an experience.
    <br />
    
  </p>
 
  
<div style={{ marginTop: "1.5rem", color: "#333", fontSize: "1rem", lineHeight: "1.8" }}>
  <p style={{marginBottom: "0px"}}>✅ A Dazzling Awards Ceremony</p>
  <p style={{marginBottom: "0px"}}>✅ 3-Course meal & Drinks</p>
  <p style={{marginBottom: "0px"}}>✅ Live Startup Pitches</p>
  <p style={{marginBottom: "0px"}}>✅  Networking with 150+ Fintech & MSB Professionals</p>
  <p style={{marginBottom: "0px"}}>✅ High Industry Visibility</p>
  <p style={{marginBottom: "0px"}}>✅ Explore a historic, elegant London venue</p>
  <p style={{marginBottom: "0px"}}>✅ Curated return gifts</p>
</div>


 
</div>


<br />


    </div>

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
       Friday, 3rd October 2025 |  6 PM Onwards
    </strong>
    <br />
     <br />
    📍 <span style={{ fontWeight: "500" }}>
      One Great George Street, London SW1P 3AA
    </span>
    <br />
   
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
    transition: "all 0.3s ease",
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
