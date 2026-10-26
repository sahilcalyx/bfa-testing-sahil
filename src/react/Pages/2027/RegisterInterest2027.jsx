"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link, NavLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const COUNTRY_OPTIONS = [
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
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
].map((c) => ({ value: c, label: c }));

const COUNTRY_CODE_OPTIONS = [
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
]
  .sort((a, b) => a.label.localeCompare(b.label))
  .map((c) => ({ value: c.code, label: c.label }));

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  country: "",
  countryCode: "44",
  phone: "",
};

const HEAR_ITEMS = [
  "Nomination dates and categories, so you can start planning your submission early",
  "Table bookings, before they open to everyone else",
  "Sponsorship opportunities, including first conversations on headline and category packages",
  "Format, venue and date announcements as soon as they’re confirmed",
];

/** Dropdown with a real search bar inside the menu (country + phone code) */
const SearchSelect = ({
  value,
  onChange,
  options,
  placeholder = "Select…",
  searchPlaceholder = "Search…",
  formatTrigger,
  formatOption,
  menuMinWidth,
  emptyText = "No results found",
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef(null);
  const searchRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/^\+/, "");
    if (!q) return options;
    return options.filter(
      (o) =>
        o.label.toLowerCase().includes(q) ||
        String(o.value).toLowerCase().includes(q)
    );
  }, [options, query]);

  useEffect(() => {
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    if (open && searchRef.current) searchRef.current.focus();
  }, [open]);

  const selected = options.find((o) => o.value === value);
  const triggerLabel = selected
    ? formatTrigger
      ? formatTrigger(selected)
      : selected.label
    : placeholder;

  return (
    <CountryRoot ref={rootRef}>
      <CountryTrigger
        type="button"
        $open={open}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span style={{ color: selected ? "#0f1419" : "#8a939c" }}>
          {triggerLabel}
        </span>
        <ChevronDown size={16} style={{ opacity: 0.55, flexShrink: 0 }} />
      </CountryTrigger>

      {open && (
        <CountryMenu role="listbox" $minWidth={menuMinWidth}>
          <CountrySearchRow>
            <Search size={15} style={{ color: "#8a939c", flexShrink: 0 }} />
            <CountrySearchInput
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchPlaceholder}
              autoComplete="off"
            />
          </CountrySearchRow>
          <CountryList>
            {filtered.length === 0 ? (
              <CountryEmpty>{emptyText}</CountryEmpty>
            ) : (
              filtered.map((o) => (
                <CountryOption
                  key={`${o.label}-${o.value}`}
                  type="button"
                  $active={o.value === value}
                  onClick={() => {
                    onChange(o.value);
                    setOpen(false);
                    setQuery("");
                  }}
                >
                  {formatOption ? formatOption(o) : o.label}
                </CountryOption>
              ))
            )}
          </CountryList>
        </CountryMenu>
      )}
    </CountryRoot>
  );
};

const RegisterInterest2027 = () => {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let next = value;
    if (name === "phone") next = value.replace(/\D/g, "");
    setFormData((prev) => ({ ...prev, [name]: next }));
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });
  };

  const validate = () => {
    const next = {};
    if (!formData.firstName.trim()) next.firstName = "First name is required";
    if (!formData.lastName.trim()) next.lastName = "Last name is required";
    if (!formData.companyName.trim())
      next.companyName = "Company name is required";
    if (!formData.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = "Invalid email address";
    if (!formData.countryCode) next.countryCode = "Country code is required";
    if (!formData.phone.trim()) next.phone = "Phone number is required";
    else if (formData.phone.length < 7)
      next.phone = "Enter a valid phone number";
    if (!agreePrivacyPolicy)
      next.privacy = "Please agree to the Terms and Conditions";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      Swal.fire({
        title: "Please check the form",
        text: "Fill in all required fields to continue.",
        icon: "warning",
        confirmButtonColor: "#c8102e",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/api/interest-2027", {
        ...formData,
        jobTitle: "",
        city: "",
        year: 2027,
        reCaptcha: captchaToken,
      });

      if (response.data.response === false) {
        Swal.fire({
          title: "Error",
          text: response.data.data,
          icon: "error",
          confirmButtonColor: "#c8102e",
        });
      } else {
        setSubmitted(true);
        setFormData(INITIAL_FORM);
        setCaptchaToken("");
        setAgreePrivacyPolicy(false);
        if (window.grecaptcha) window.grecaptcha.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text:
          error.response?.data?.data ||
          "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonColor: "#c8102e",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <Helmet>
        <title>Register Interest 2027 | Brit FinTech Awards</title>
        <meta
          name="description"
          content="Register your interest for Brit FinTech Awards 2027. Be first for nominations, tickets and sponsorship."
        />
      </Helmet>

      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <Rail aria-hidden="true" />
      <Ambient aria-hidden="true" />

      <Main>
        <Hero
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <YearMark aria-hidden="true">2027</YearMark>

          <HeroInner>
            <HeroMeta>
              <MetaMark>Brit FinTech Awards 2027</MetaMark>
              <MetaTime>Next chapter</MetaTime>
            </HeroMeta>

            <Title>
              The next
              <TitleAccent>Chapter</TitleAccent>
            </Title>

            <Theme>
              After years of celebrating the best in British FinTech, the Awards
              are evolving for 2027. Register your interest to be first to know
              what&apos;s coming.
            </Theme>

            <HeroActions>
              <PrimaryCue href="#register-form">Register interest</PrimaryCue>
              <GhostCue to="/">Back to home</GhostCue>
            </HeroActions>
          </HeroInner>
        </Hero>

        {submitted ? (
          <SuccessCard>
            <MetaMark>Confirmed</MetaMark>
            <SuccessTitle>You&apos;re on the list</SuccessTitle>
            <Theme style={{ marginTop: 12 }}>
              Thanks for registering your interest in Brit FinTech Awards 2027.
              We&apos;ll be in touch as the next chapter unfolds.
            </Theme>
            <HeroActions>
              <GhostCue to="/">Back to home</GhostCue>
            </HeroActions>
          </SuccessCard>
        ) : (
          <>
            <Brief>
              <BriefLabel>The story</BriefLabel>
              <BriefCopy>
                <p>
                  The Brit FinTech Awards set out to recognise the people and
                  organisations moving FinTech forward. The industry looks very
                  different now — and so will the Awards.
                </p>
              </BriefCopy>
            </Brief>

            <Bench>
              <BenchHead>
                <BenchTitle>Be first to hear about</BenchTitle>
                <BenchCount>4 updates</BenchCount>
              </BenchHead>
              <HearGrid>
                {HEAR_ITEMS.map((item, i) => (
                  <HearCard
                    key={item}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
                  >
                    <HearNum>0{i + 1}</HearNum>
                    <HearText>{item}</HearText>
                  </HearCard>
                ))}
              </HearGrid>
            </Bench>

            <PartnerStrip
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <PartnerAccent />
              <PartnerBody>
                <div>
                  <PartnerLabel>Partnerships</PartnerLabel>
                  <PartnerTitle>Want to own a moment in 2027?</PartnerTitle>
                  <PartnerCopy>
                    A new format means new ways to get your brand in front of the
                    industry&apos;s decision-makers. Speak to our partnerships
                    team to be part of the first conversations.
                  </PartnerCopy>
                </div>
                <PartnerMail href="mailto:marketing@britfintechawards.com">
                  Email partnerships
                </PartnerMail>
              </PartnerBody>
            </PartnerStrip>

            <FormSection id="register-form">
              <BenchHead>
                <BenchTitle>Register your interest</BenchTitle>
                <BenchCount>Required *</BenchCount>
              </BenchHead>

              <FormCard onSubmit={handleSubmit} noValidate>
                <FormGrid>
                  <Field>
                    <FieldLabel htmlFor="firstName">
                      First name <Req>*</Req>
                    </FieldLabel>
                    <Input
                      id="firstName"
                      name="firstName"
                      $error={!!errors.firstName}
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      maxLength={130}
                      autoComplete="given-name"
                    />
                    {errors.firstName && <Err>{errors.firstName}</Err>}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="lastName">
                      Last name <Req>*</Req>
                    </FieldLabel>
                    <Input
                      id="lastName"
                      name="lastName"
                      $error={!!errors.lastName}
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      maxLength={130}
                      autoComplete="family-name"
                    />
                    {errors.lastName && <Err>{errors.lastName}</Err>}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="companyName">
                      Company name <Req>*</Req>
                    </FieldLabel>
                    <Input
                      id="companyName"
                      name="companyName"
                      $error={!!errors.companyName}
                      placeholder="Enter company name"
                      value={formData.companyName}
                      onChange={handleChange}
                      maxLength={130}
                      autoComplete="organization"
                    />
                    {errors.companyName && <Err>{errors.companyName}</Err>}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email">
                      Email address <Req>*</Req>
                    </FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      $error={!!errors.email}
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={130}
                      autoComplete="email"
                    />
                    {errors.email && <Err>{errors.email}</Err>}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="country">Country / region</FieldLabel>
                    <SearchSelect
                      value={formData.country}
                      options={COUNTRY_OPTIONS}
                      placeholder="Select country / region"
                      searchPlaceholder="Search country…"
                      emptyText="No countries found"
                      onChange={(country) =>
                        setFormData((prev) => ({ ...prev, country }))
                      }
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="phone">
                      Phone number <Req>*</Req>
                    </FieldLabel>
                    <PhoneRow>
                      <div style={{ width: 110, flexShrink: 0 }}>
                        <SearchSelect
                          value={formData.countryCode}
                          options={COUNTRY_CODE_OPTIONS}
                          placeholder="Code"
                          searchPlaceholder="Search country or code…"
                          emptyText="No codes found"
                          menuMinWidth={300}
                          formatTrigger={(o) => `+${o.value}`}
                          formatOption={(o) => {
                            const name = o.label.split(" (+")[0];
                            return (
                              <span
                                style={{
                                  display: "flex",
                                  gap: 10,
                                  alignItems: "center",
                                }}
                              >
                                <span style={{ width: 42, flexShrink: 0 }}>
                                  +{o.value}
                                </span>
                                <span>{name}</span>
                              </span>
                            );
                          }}
                          onChange={(countryCode) => {
                            setFormData((prev) => ({ ...prev, countryCode }));
                            setErrors((prev) => {
                              const copy = { ...prev };
                              delete copy.countryCode;
                              return copy;
                            });
                          }}
                        />
                      </div>
                      <Input
                        id="phone"
                        name="phone"
                        $error={!!errors.phone}
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={15}
                        inputMode="numeric"
                        autoComplete="tel-national"
                        style={{ flex: 1 }}
                      />
                    </PhoneRow>
                    {(errors.countryCode || errors.phone) && (
                      <Err>{errors.countryCode || errors.phone}</Err>
                    )}
                  </Field>
                </FormGrid>

                <CaptchaWrap>
                  <ReCAPTCHA
                    sitekey="6LdxNigqAAAAAJ6jU9uuhEtrAw-s8J_qnsGCVvj5"
                    onChange={(token) => setCaptchaToken(token || "")}
                  />
                </CaptchaWrap>

                <CheckRow>
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    checked={agreePrivacyPolicy}
                    onChange={(e) => {
                      setAgreePrivacyPolicy(e.target.checked);
                      setErrors((prev) => {
                        const copy = { ...prev };
                        delete copy.privacy;
                        return copy;
                      });
                    }}
                  />
                  <label htmlFor="privacyPolicy">
                    I have read and agreed to the{" "}
                    <NavLink to="/terms-and-conditions">
                      Terms and Conditions
                    </NavLink>
                  </label>
                </CheckRow>
                {errors.privacy && <Err>{errors.privacy}</Err>}

                <SubmitBtn type="submit" disabled={loading}>
                  {loading ? "Submitting…" : "Submit"}
                </SubmitBtn>
              </FormCard>
            </FormSection>
          </>
        )}
      </Main>
    </Page>
  );
};

/* ——— layout (Event Host aesthetic) ——— */

const Page = styled.div`
  --ink: #0f1419;
  --chalk: #eef1f4;
  --rail: #1a6b6e;
  --crimson: #c8102e;
  --mute: #5a6570;
  --line: #cfd8de;
  --surface: #ffffff;

  position: relative;
  width: 100%;
  min-height: 100vh;
  background:
    radial-gradient(ellipse 70% 45% at 100% 0%, rgba(200, 16, 46, 0.07), transparent 55%),
    radial-gradient(ellipse 50% 40% at 0% 30%, rgba(26, 107, 110, 0.06), transparent 50%),
    var(--chalk);
  color: var(--ink);
  font-family: "IBM Plex Sans", system-ui, sans-serif;
  overflow-x: hidden;
`;

const Rail = styled.div`
  pointer-events: none;
  position: fixed;
  inset: 0 auto 0 0;
  width: 6px;
  z-index: 5;
  background: linear-gradient(
    180deg,
    var(--crimson) 0%,
    var(--rail) 42%,
    var(--ink) 100%
  );

  @media (max-width: 640px) {
    width: 4px;
  }
`;

const Ambient = styled.div`
  pointer-events: none;
  position: absolute;
  top: 120px;
  right: -80px;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200, 16, 46, 0.12), transparent 68%);
  filter: blur(2px);
`;

const Main = styled.main`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 96px 15px 80px;
  box-sizing: border-box;

  @media (max-width: 640px) {
    padding: 88px 16px 56px;
  }
`;

const Hero = styled(motion.header)`
  position: relative;
  padding: 8px 0 36px;
  border-bottom: 1px solid var(--line);
  overflow: hidden;
`;

const YearMark = styled.span`
  position: absolute;
  right: -2%;
  top: 50%;
  transform: translateY(-52%);
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: clamp(120px, 22vw, 220px);
  line-height: 0.8;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(15, 20, 25, 0.1);
  user-select: none;
  pointer-events: none;

  @media (max-width: 720px) {
    font-size: 110px;
    right: -8%;
    opacity: 0.7;
  }
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 620px;
`;

const HeroMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 20px;
  margin-bottom: 18px;
`;

const MetaMark = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--crimson);
`;

const MetaTime = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--mute);
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: clamp(52px, 9vw, 92px);
  line-height: 0.88;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--ink);
`;

const TitleAccent = styled.span`
  display: block;
  color: var(--crimson);
`;

const Theme = styled.p`
  margin: 18px 0 0;
  max-width: 34em;
  font-size: clamp(16px, 2vw, 19px);
  font-weight: 500;
  line-height: 1.5;
  color: var(--mute);
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 26px;
`;

const PrimaryCue = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 14px 22px;
  background: var(--crimson);
  color: var(--surface);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 12px 28px rgba(200, 16, 46, 0.28);
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: var(--ink);
    transform: translateY(-2px);
    color: #fff;
    box-shadow: 0 14px 32px rgba(15, 20, 25, 0.2);
  }
`;

const GhostCue = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 14px 18px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(6px);
  color: var(--ink);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: var(--ink);
    color: var(--crimson);
    background: #fff;
  }
`;

const Brief = styled.section`
  display: grid;
  grid-template-columns: 140px minmax(0, 1fr);
  gap: 20px;
  padding: 32px 0 0;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const BriefLabel = styled.h2`
  margin: 4px 0 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--crimson);
`;

const BriefCopy = styled.div`
  max-width: 44em;

  p {
    margin: 0;
    font-size: 17px;
    line-height: 1.7;
    color: var(--mute);
  }
`;

const Bench = styled.section`
  margin-top: 40px;
`;

const BenchHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line);
`;

const BenchTitle = styled.h2`
  margin: 0;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: clamp(24px, 3vw, 34px);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--ink);
`;

const BenchCount = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--rail);
`;

const HearGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const HearCard = styled(motion.article)`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  align-items: start;
  padding: 18px 18px 20px;
  background: var(--surface);
  border: 1px solid var(--line);
  transition: border-color 0.2s ease, transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: var(--ink);
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(15, 20, 25, 0.07);
  }
`;

const HearNum = styled.span`
  font-family: "Oswald", sans-serif;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--crimson);
  line-height: 1;
`;

const HearText = styled.p`
  margin: 0;
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--mute);
`;

const PartnerStrip = styled(motion.aside)`
  position: relative;
  margin-top: 40px;
  overflow: hidden;
  background: linear-gradient(125deg, #0f1419 0%, #1a0508 48%, #680014 100%);
  color: #fff;
`;

const PartnerAccent = styled.div`
  position: absolute;
  top: -40%;
  right: -10%;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200, 16, 46, 0.55), transparent 70%);
  pointer-events: none;
`;

const PartnerBody = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 22px;
  padding: 28px 26px;
`;

const PartnerLabel = styled.p`
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #ff7a8a;
`;

const PartnerTitle = styled.h3`
  margin: 0 0 10px;
  font-family: "Oswald", sans-serif;
  font-size: clamp(22px, 3vw, 28px);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #fff;
`;

const PartnerCopy = styled.p`
  margin: 0;
  max-width: 38em;
  font-size: 14.5px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.72);
`;

const PartnerMail = styled.a`
  display: inline-flex;
  padding: 14px 18px;
  background: #fff;
  color: var(--crimson);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: var(--crimson);
    color: #fff;
    transform: translateY(-2px);
  }
`;

const FormSection = styled.section`
  margin-top: 48px;
`;

const FormCard = styled.form`
  position: relative;
  background: var(--surface);
  border: 1px solid var(--line);
  padding: 28px 24px 32px;
  box-shadow: 0 18px 40px rgba(15, 20, 25, 0.06);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--crimson), #680014, var(--ink));
  }

  @media (max-width: 640px) {
    padding: 20px 16px 28px;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 18px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const FieldLabel = styled.label`
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink);
`;

const Req = styled.span`
  color: var(--crimson);
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 14px;
  /* Global CSS: input { border: none !important } — draw border via box-shadow */
  border: none !important;
  border-radius: 0 !important;
  background: #fff !important;
  color: var(--ink);
  font-family: inherit;
  font-size: 15px;
  outline: none !important;
  box-sizing: border-box;
  appearance: none;
  box-shadow: inset 0 0 0 1.5px
    ${(p) => (p.$error ? "var(--crimson)" : "#b0b5bd")};
  transition: box-shadow 0.15s ease;

  &::placeholder {
    color: #8a939c;
  }

  &:focus {
    box-shadow: inset 0 0 0 1.5px var(--ink) !important;
  }
`;

const PhoneRow = styled.div`
  display: flex;
  gap: 0;
  align-items: stretch;
`;

const CountryRoot = styled.div`
  position: relative;
  width: 100%;
`;

const CountryTrigger = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 14px;
  border: none !important;
  border-radius: 0 !important;
  background: #fff !important;
  font-family: inherit;
  font-size: 15px;
  text-align: left;
  cursor: pointer;
  box-shadow: inset 0 0 0 1.5px
    ${(p) => (p.$open ? "#0f1419" : "#b0b5bd")};
  transition: box-shadow 0.15s ease;

  &:hover {
    box-shadow: inset 0 0 0 1.5px #0f1419;
  }
`;

const CountryMenu = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  min-width: ${(p) => (p.$minWidth ? `${p.$minWidth}px` : "100%")};
  z-index: 50;
  background: #fff;
  border: 1px solid #cfd8de;
  box-shadow: 0 16px 36px rgba(15, 20, 25, 0.14);
`;

const CountrySearchRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-bottom: 1px solid #e8ecf0;
  background: #f7f8fa;
`;

const CountrySearchInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 34px;
  padding: 0 4px;
  border: none !important;
  outline: none !important;
  background: transparent !important;
  box-shadow: none !important;
  font-family: inherit;
  font-size: 14px;
  color: #0f1419;

  &::placeholder {
    color: #8a939c;
  }
`;

const CountryList = styled.div`
  max-height: 220px;
  overflow-y: auto;
`;

const CountryOption = styled.button`
  display: block;
  width: 100%;
  padding: 11px 14px;
  border: none !important;
  background: ${(p) => (p.$active ? "#c8102e" : "transparent")} !important;
  color: ${(p) => (p.$active ? "#fff" : "#0f1419")};
  font-family: inherit;
  font-size: 14px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${(p) => (p.$active ? "#c8102e" : "#f4f7f8")} !important;
  }
`;

const CountryEmpty = styled.div`
  padding: 14px;
  font-size: 14px;
  color: #8a939c;
`;

const Err = styled.p`
  margin: 6px 0 0;
  font-size: 12px;
  font-weight: 600;
  color: var(--crimson);
`;

const CaptchaWrap = styled.div`
  margin-top: 24px;
`;

const CheckRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 18px;
  font-size: 14px;
  color: var(--mute);

  a {
    color: var(--ink);
    font-weight: 600;
    text-decoration: underline;
  }

  input {
    margin-top: 3px;
  }
`;

const SubmitBtn = styled.button`
  margin-top: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  padding: 15px 26px;
  border: none;
  background: ${(p) => (p.disabled ? "#666" : "var(--crimson)")};
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  box-shadow: ${(p) =>
    p.disabled ? "none" : "0 12px 28px rgba(200, 16, 46, 0.28)"};
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--ink);
    transform: translateY(-2px);
  }
`;

const SuccessCard = styled.div`
  margin-top: 36px;
  padding: 44px 28px;
  background: var(--surface);
  border: 1px solid var(--line);
  box-shadow: 0 18px 40px rgba(15, 20, 25, 0.06);
`;

const SuccessTitle = styled.h2`
  margin: 12px 0 0;
  font-family: "Oswald", sans-serif;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--ink);
`;

export default RegisterInterest2027;
