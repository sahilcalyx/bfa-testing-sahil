"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import styled, { css, keyframes } from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Search,
  Sparkles,
} from "lucide-react";
import { INTEREST_2027_FORM_OPTIONS } from "../../../lib/interest2027Options";
import { DIAL_CODE_OPTIONS } from "../../../lib/dialCodes";
import { RECAPTCHA_SITE_KEY } from "../../../lib/recaptchaSiteKey";
import HeroSpotlight2027 from "./HeroSpotlight2027";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const EASE = [0.16, 1, 0.3, 1];
const FILM_IMAGES = [
  "audience/2",
  "homepage-section/2",
  "keynote/1",
  "audience/44",
  "focus-session/9",
  "venue/1",
].map((p) => `/assets/img/gallery2026/web/${p}.webp`);
// Wide group shots: a shorter image band inside the usual frame keeps everyone in shot without changing the grid.
const FILM_UNCROPPED = new Set(["/assets/img/gallery2026/web/homepage-section/2.webp"]);

const DIAL_OPTIONS = DIAL_CODE_OPTIONS.map((o) => ({
  id: o.label,
  code: o.value,
  country: o.label.split(" (+")[0],
  label: o.label,
}));
const DEFAULT_DIAL = DIAL_OPTIONS.find((o) => o.code === "44") || DIAL_OPTIONS[0];

const OPPORTUNITIES = [
  {
    id: "sponsorship",
    kicker: "Visibility",
    title: "Sponsorship & Partnerships",
    copy: "Put your brand at the centre of the FinTech community and explore opportunities to connect with key industry players.",
    interest: "sponsorship",
    cta: "I want to partner",
    image: "/assets/img/gallery2026/web/red-carpet/35.webp",
    imagePosition: "35% center",
  },
  {
    id: "nominations",
    kicker: "Recognition",
    title: "Award Nominations",
    copy: "Get ready to showcase your achievements and gain recognition for the work you're doing across the industry.",
    interest: "nominations",
    cta: "I want to nominate",
    image: "/assets/img/gallery2026/web/winner-photos/3.webp",
  },
  {
    id: "attend",
    kicker: "The night",
    title: "Attend BFA27",
    copy: "Join industry leaders, decision-makers and innovators for an evening of recognition, networking and celebration.",
    interest: "attending",
    cta: "I want to attend",
    image: "/assets/img/gallery2026/web/audience/44.webp",
  },
];

const INITIAL_FORM = {
  fullName: "",
  companyName: "",
  jobTitle: "",
  email: "",
  dialId: DEFAULT_DIAL.id,
  phone: "",
  interests: [],
  otherInterest: "",
};

const INTEREST_VALUES = INTEREST_2027_FORM_OPTIONS.map((o) => o.value);

const MARQUEE_WORDS = [
  "BFA27",
  "The next chapter",
  "Register your interest",
  "Nominations",
  "Tickets",
  "Sponsorship",
];

const PERKS = [
  "Early access to early bird offers",
  "Early notice of award categories and nomination windows",
  "Priority updates on tickets and exhibit space availability",
  "First conversations on sponsorship and partnership packages",
];

// Only needed after a submit, so they stay out of the initial bundle.
const showError = async (text) => {
  const { default: Swal } = await import("sweetalert2");
  Swal.fire({ title: "Something went wrong", text, icon: "error", confirmButtonColor: "#c8102e" });
};

const celebrate = async () => {
  const { default: confetti } = await import("canvas-confetti");
  const fire = (x, angle) =>
    confetti({
      colors: ["#c8102e", "#ffffff", "#f2d8ac", "#8a0a1f"],
      particleCount: 70,
      angle,
      spread: 62,
      startVelocity: 58,
      ticks: 240,
      gravity: 0.9,
      origin: { x, y: 0.7 },
      zIndex: 60,
      disableForReducedMotion: true,
    });
  fire(0.1, 60);
  fire(0.9, 120);
};

/* ---------------------------------------------------------------------- */
/* Small building blocks                                                   */
/* ---------------------------------------------------------------------- */

/** Dropdown with a search field inside the menu (dial codes) */
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
  invalid = false,
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
        String(o.code ?? o.id).toLowerCase().includes(q)
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

  const selected = options.find((o) => o.id === value);
  const triggerLabel = selected
    ? formatTrigger
      ? formatTrigger(selected)
      : selected.label
    : placeholder;

  return (
    <SelectRoot ref={rootRef}>
      <SelectTrigger
        type="button"
        $open={open}
        $invalid={invalid}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span style={{ color: selected ? "#fff" : "rgba(255,255,255,0.45)" }}>
          {triggerLabel}
        </span>
        <ChevronDown size={16} style={{ opacity: 0.6, flexShrink: 0 }} />
      </SelectTrigger>

      {open && (
        <SelectMenu role="listbox" $minWidth={menuMinWidth}>
          <SelectSearchRow>
            <Search size={15} style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0 }} />
            <SelectSearchInput
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchPlaceholder}
              autoComplete="off"
            />
          </SelectSearchRow>
          <SelectList>
            {filtered.length === 0 ? (
              <SelectEmpty>{emptyText}</SelectEmpty>
            ) : (
              filtered.map((o) => (
                <SelectOption
                  key={o.id}
                  type="button"
                  role="option"
                  aria-selected={o.id === value}
                  $active={o.id === value}
                  onClick={() => {
                    onChange(o.id);
                    setOpen(false);
                    setQuery("");
                  }}
                >
                  {formatOption ? formatOption(o) : o.label}
                </SelectOption>
              ))
            )}
          </SelectList>
        </SelectMenu>
      )}
    </SelectRoot>
  );
};

/* ---------------------------------------------------------------------- */
/* Page                                                                    */
/* ---------------------------------------------------------------------- */

const RegisterInterest2027 = () => {
  const reduceMotion = useReducedMotion();
  const location = useLocation();
  const filmRef = useRef(null);
  const formRef = useRef(null);
  const formCardRef = useRef(null);
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(null); // null | { updated, name }
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [source, setSource] = useState("page");

  // Deep links from the home promo: ?interest=nominations&src=home-section#register-form
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const interest = params.get("interest");
    const src = params.get("src");
    if (interest && INTEREST_VALUES.includes(interest)) {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.includes(interest)
          ? prev.interests
          : [...prev.interests, interest],
      }));
    }
    if (src) setSource(src);
  }, [location.search]);

  // The route is lazy-loaded, so the global hash scroller runs before the form exists.
  useEffect(() => {
    if (location.hash !== "#register-form") return undefined;
    const t = window.setTimeout(() => {
      // On stacked layouts the copy sits above the form, so jump straight to the fields.
      const target = window.matchMedia("(max-width: 1023px)").matches
        ? formCardRef.current || formRef.current
        : formRef.current;
      target?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }, 350);
    return () => window.clearTimeout(t);
  }, [location.hash, reduceMotion]);

  // Film strip: alternate frames drift at different speeds while scrolling past.
  useGSAP(
    () => {
      const strip = filmRef.current;
      if (!strip || reduceMotion) return undefined;
      const ups = strip.querySelectorAll("figure.up");
      const downs = strip.querySelectorAll("figure.down");
      const st = {
        trigger: strip,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.4,
      };
      gsap.fromTo(ups, { y: 60 }, { y: -40, ease: "none", scrollTrigger: st });
      gsap.fromTo(downs, { y: 110 }, { y: 10, ease: "none", scrollTrigger: st });
      return undefined;
    },
    { scope: filmRef, dependencies: [reduceMotion] }
  );

  const scrollToElement = useCallback((el) => {
    if (!el) return;
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }, [reduceMotion]);

  const scrollToForm = useCallback(() => {
    scrollToElement(formRef.current);
  }, [scrollToElement]);

  const scrollToFormCard = useCallback(() => {
    scrollToElement(formCardRef.current);
  }, [scrollToElement]);

  const chooseOpportunity = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests
        : [...prev.interests, interest],
    }));
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.interests;
      return copy;
    });
    if (window.matchMedia("(max-width: 1023px)").matches) {
      window.requestAnimationFrame(scrollToFormCard);
    } else {
      scrollToForm();
    }
  };

  const clearError = (name) =>
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = name === "phone" ? value.replace(/\D/g, "") : value;
    setFormData((prev) => ({ ...prev, [name]: next }));
    clearError(name);
  };

  const toggleInterest = (value) => {
    setFormData((prev) => {
      const has = prev.interests.includes(value);
      return {
        ...prev,
        interests: has
          ? prev.interests.filter((v) => v !== value)
          : [...prev.interests, value],
        otherInterest: value === "other" && has ? "" : prev.otherInterest,
      };
    });
    clearError("interests");
    if (value === "other") clearError("otherInterest");
  };

  const validate = () => {
    const next = {};
    if (!formData.fullName.trim()) next.fullName = "Please enter your full name";
    if (!formData.companyName.trim())
      next.companyName = "Please enter your company name";
    if (!formData.jobTitle.trim()) next.jobTitle = "Please enter your job title";
    if (!formData.email.trim()) next.email = "Please enter your business email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = "That email address doesn't look right";
    if (!formData.dialId) next.phone = "Please choose a country code";
    else if (!formData.phone.trim()) next.phone = "Please enter your contact number";
    else if (formData.phone.length < 7) next.phone = "Please enter a valid contact number";
    if (formData.interests.length === 0)
      next.interests = "Pick at least one option so we can send the right updates";
    if (formData.interests.includes("other") && !formData.otherInterest.trim())
      next.otherInterest = "Tell us a little more";
    if (!agreeTerms) next.terms = "Please agree to the Terms and Conditions";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      const el = document.querySelector(`[data-field="${firstKey}"]`);
      el?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      return;
    }

    const dial = DIAL_OPTIONS.find((o) => o.id === formData.dialId) || DEFAULT_DIAL;

    setLoading(true);
    try {
      const response = await axios.post("/api/interest-2027", {
        fullName: formData.fullName,
        companyName: formData.companyName,
        jobTitle: formData.jobTitle,
        email: formData.email,
        countryCode: dial.code,
        country: dial.country,
        phone: formData.phone,
        interests: formData.interests,
        otherInterest: formData.otherInterest,
        source,
        year: 2027,
        reCaptcha: captchaToken,
      });

      if (response.data.response === false) {
        showError(response.data.data);
        return;
      }

      const firstName = formData.fullName.trim().split(/\s+/)[0];
      setSubmitted({ updated: !!response.data.updated, name: firstName });
      setFormData(INITIAL_FORM);
      setCaptchaToken("");
      setAgreeTerms(false);
      recaptchaRef.current?.reset?.();

      if (!reduceMotion) celebrate();

      window.requestAnimationFrame(() => scrollToForm());
    } catch (error) {
      showError(error.response?.data?.data || "We couldn't save your details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2, margin: "0px 0px -8% 0px" },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <Page>
      <Helmet>
        <title>Register Interest for BFA27 | Brit FinTech Awards 2027</title>
        <meta
          name="description"
          content="The next chapter of FinTech excellence begins here. Register your interest in the Brit FinTech Awards 2027 for early updates on nominations, tickets and sponsorship."
        />
      </Helmet>

      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* ------------------------------------------------------------ Hero */}
      <HeroSpotlight2027 onRegister={scrollToForm} reduceMotion={reduceMotion} />

      {/* --------------------------------------------------------- Marquee */}
      <Marquee aria-hidden="true" $still={!!reduceMotion}>
        <div className="track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="group">
              {MARQUEE_WORDS.map((word) => (
                <React.Fragment key={word}>
                  <span>{word}</span>
                  <i />
                </React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </Marquee>

      {/* --------------------------------------------------------- Journey */}
      <Section>
        <Container>
          <Journey>
            <motion.div {...reveal()}>
              <SectionLabel>The journey continues</SectionLabel>
            </motion.div>
            <div>
              <motion.p className="lead" {...reveal(0.05)}>
                Following an incredible 2026, the Brit FinTech Awards returns in
                2027 to celebrate the people and innovation shaping the future
                of finance.
              </motion.p>
            </div>
          </Journey>
        </Container>

        <FilmStrip ref={filmRef}>
          {FILM_IMAGES.map((src, i) => (
            <figure key={src} className={`${i % 2 ? "down" : "up"}${FILM_UNCROPPED.has(src) ? " whole" : ""}`}>
              <img src={src} alt={`Brit FinTech Awards 2026 moment ${i + 1}`} loading="lazy" />
            </figure>
          ))}
        </FilmStrip>

      </Section>

      {/* --------------------------------------------------- Opportunities */}
      <Section $tone="raised" id="opportunities">
        <Container>
          <SectionHead>
            <motion.div {...reveal()}>
              <SectionLabel>Be part of what comes next</SectionLabel>
              <SectionTitle>
                Whether you build it, back it or celebrate it, BFA27 has a place
                for you
              </SectionTitle>
            </motion.div>
          </SectionHead>

          <ExploreLabel>Explore the opportunities ahead</ExploreLabel>

          <CardGrid>
            {OPPORTUNITIES.map((o, i) => (
                <OpportunityCard
                  key={o.id}
                  type="button"
                  onClick={() => chooseOpportunity(o.interest)}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
                  aria-label={`${o.title}: ${o.cta}`}
                >
                  <span className="media" aria-hidden="true">
                    <img
                      src={o.image}
                      alt=""
                      loading="lazy"
                      style={o.imagePosition ? { objectPosition: o.imagePosition } : undefined}
                    />
                    <span className="tint" />
                  </span>

                  <span className="kicker">{o.kicker}</span>

                  <span className="body">
                    <h3>{o.title}</h3>
                    <p>{o.copy}</p>
                    <span className="cta">
                      {o.cta}
                      <ArrowUpRight size={16} strokeWidth={2.4} />
                    </span>
                  </span>
                </OpportunityCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ Form */}
      <Section id="register-form" ref={formRef} $tone="form">
        <Container>
          <FormLayout>
            <FormCopy>
              <motion.div {...reveal()}>
                <SectionLabel>The journey to BFA27 starts now</SectionLabel>
                <SectionTitle as="h2">
                  Your place in the next chapter starts here
                </SectionTitle>
              </motion.div>

              <motion.ul className="perks" {...reveal(0.1)}>
                {PERKS.map((perk) => (
                  <li key={perk}>
                    <Check size={15} strokeWidth={3} aria-hidden="true" />
                    {perk}
                  </li>
                ))}
              </motion.ul>
            </FormCopy>

            {submitted ? (
              <SuccessCard
                initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
                role="status"
              >
                <span className="badge">
                  <Sparkles size={18} />
                </span>
                <SectionLabel>
                  {submitted.updated ? "Preferences updated" : "You're on the list"}
                </SectionLabel>
                <h3>
                  {submitted.updated
                    ? `Thanks, ${submitted.name}. We've updated your interests.`
                    : `Thanks, ${submitted.name}. Your place in the next chapter starts here.`}
                </h3>
                <p>
                  {submitted.updated
                    ? "Your details were already with us, so we've refreshed them and added anything new you told us."
                    : "You'll be among the first to hear as BFA27 announcements are released."}
                </p>
              </SuccessCard>
            ) : (
              <FormCard
                ref={formCardRef}
                onSubmit={handleSubmit}
                noValidate
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <FormCardHead>
                  <span>Register your interest</span>
                </FormCardHead>

                <FieldGrid>
                  <Field data-field="fullName">
                    <FieldLabel htmlFor="fullName">
                      Full name <Req>*</Req>
                    </FieldLabel>
                    <Input
                      id="fullName"
                      name="fullName"
                      $error={!!errors.fullName}
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      maxLength={130}
                      autoComplete="name"
                    />
                    {errors.fullName && <Err>{errors.fullName}</Err>}
                  </Field>

                  <Field data-field="companyName">
                    <FieldLabel htmlFor="companyName">
                      Company name <Req>*</Req>
                    </FieldLabel>
                    <Input
                      id="companyName"
                      name="companyName"
                      $error={!!errors.companyName}
                      placeholder="Where you work"
                      value={formData.companyName}
                      onChange={handleChange}
                      maxLength={130}
                      autoComplete="organization"
                    />
                    {errors.companyName && <Err>{errors.companyName}</Err>}
                  </Field>

                  <Field data-field="jobTitle">
                    <FieldLabel htmlFor="jobTitle">
                      Job title <Req>*</Req>
                    </FieldLabel>
                    <Input
                      id="jobTitle"
                      name="jobTitle"
                      $error={!!errors.jobTitle}
                      placeholder="Your role"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      maxLength={130}
                      autoComplete="organization-title"
                    />
                    {errors.jobTitle && <Err>{errors.jobTitle}</Err>}
                  </Field>

                  <Field data-field="email">
                    <FieldLabel htmlFor="email">
                      Business email <Req>*</Req>
                    </FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      $error={!!errors.email}
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={130}
                      autoComplete="email"
                      inputMode="email"
                    />
                    {errors.email && <Err>{errors.email}</Err>}
                  </Field>

                  <Field data-field="phone" className="span-2">
                    <FieldLabel htmlFor="phone">
                      Contact number <Req>*</Req>
                    </FieldLabel>
                    <PhoneRow>
                      <div className="code">
                        <SearchSelect
                          value={formData.dialId}
                          options={DIAL_OPTIONS}
                          placeholder="Code"
                          searchPlaceholder="Search country or code…"
                          emptyText="No codes found"
                          menuMinWidth={300}
                          invalid={!!errors.phone && !formData.dialId}
                          formatTrigger={(o) => `+${o.code}`}
                          formatOption={(o) => (
                            <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
                              <span style={{ width: 46, flexShrink: 0, opacity: 0.7 }}>
                                +{o.code}
                              </span>
                              <span>{o.country}</span>
                            </span>
                          )}
                          onChange={(dialId) => {
                            setFormData((prev) => ({ ...prev, dialId }));
                            clearError("phone");
                          }}
                        />
                      </div>
                      <Input
                        id="phone"
                        name="phone"
                        $error={!!errors.phone}
                        placeholder="Contact number"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={15}
                        inputMode="numeric"
                        autoComplete="tel-national"
                      />
                    </PhoneRow>
                    {errors.phone && <Err>{errors.phone}</Err>}
                  </Field>
                </FieldGrid>

                <InterestBlock data-field="interests">
                  <FieldLabel as="p">
                    What are you interested in? <Req>*</Req>
                    <span className="hint">Select all that apply</span>
                  </FieldLabel>
                  <Pills role="group" aria-label="What are you interested in?">
                    {INTEREST_2027_FORM_OPTIONS.map((opt) => {
                      const active = formData.interests.includes(opt.value);
                      return (
                        <Pill
                          key={opt.value}
                          type="button"
                          role="checkbox"
                          aria-checked={active}
                          $active={active}
                          onClick={() => toggleInterest(opt.value)}
                        >
                          <span className="box">
                            <Check size={12} strokeWidth={3.5} />
                          </span>
                          <span className="option-label">{opt.label}</span>
                        </Pill>
                      );
                    })}
                  </Pills>
                  {errors.interests && <Err>{errors.interests}</Err>}

                  {formData.interests.includes("other") && (
                    <motion.div
                      data-field="otherInterest"
                      initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3, ease: EASE }}
                      style={{ overflow: "hidden" }}
                    >
                      <Field style={{ marginTop: 14 }}>
                        <FieldLabel htmlFor="otherInterest">
                          Tell us more <Req>*</Req>
                        </FieldLabel>
                        <Input
                          id="otherInterest"
                          name="otherInterest"
                          $error={!!errors.otherInterest}
                          placeholder="What would you like to hear about?"
                          value={formData.otherInterest}
                          onChange={handleChange}
                          maxLength={200}
                        />
                        {errors.otherInterest && <Err>{errors.otherInterest}</Err>}
                      </Field>
                    </motion.div>
                  )}
                </InterestBlock>

                <CaptchaWrap>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_SITE_KEY}
                    theme="dark"
                    onChange={(token) => setCaptchaToken(token || "")}
                  />
                </CaptchaWrap>

                <CheckRow data-field="terms" $error={!!errors.terms}>
                  <input
                    type="checkbox"
                    id="ri27-terms"
                    checked={agreeTerms}
                    onChange={(e) => {
                      setAgreeTerms(e.target.checked);
                      clearError("terms");
                    }}
                  />
                  <label htmlFor="ri27-terms">
                    I have read and agree to the{" "}
                    <Link to="/terms-and-conditions">Terms and Conditions</Link>{" "}
                    and <Link to="/privacy-policy">Privacy Policy</Link>.
                  </label>
                </CheckRow>
                {errors.terms && <Err>{errors.terms}</Err>}

                <SubmitButton type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Spinner aria-hidden="true" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      Submit your interest
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </>
                  )}
                </SubmitButton>
              </FormCard>
            )}
          </FormLayout>
        </Container>
      </Section>

      {/* --------------------------------------------------------- Closing */}
      <Closing>
        <Container>
          <motion.div {...reveal()}>
            <Eyebrow $center>
              <EyebrowDot />
              Brit FinTech Awards 2027
            </Eyebrow>
            <h2>
              Celebrating the people, ideas and innovations shaping
              tomorrow&apos;s financial world.
            </h2>
          </motion.div>
        </Container>
        <ClosingYear aria-hidden="true">BFA27</ClosingYear>
      </Closing>
    </Page>
  );
};

/* ---------------------------------------------------------------------- */
/* Styles                                                                  */
/* ---------------------------------------------------------------------- */

const Page = styled.div`
  --bg: #07070a;
  --bg-raised: #0d0d12;
  --ink: #ffffff;
  --mute: rgba(255, 255, 255, 0.64);
  --faint: rgba(255, 255, 255, 0.4);
  --line: rgba(255, 255, 255, 0.1);
  --crimson: #c8102e;
  --crimson-deep: #680014;
  --gold: #f2d8ac;

  position: relative;
  width: 100%;
  background: var(--bg);
  color: var(--ink);
  font-family: "Outfit", system-ui, -apple-system, sans-serif;
  overflow-x: clip;

  /* Theme CSS paints every heading #070707 in Montserrat !important; this page is dark and uses Outfit. */
  h1, h2, h3 {
    margin: 0;
    color: var(--ink);
    font-family: "Outfit", system-ui, -apple-system, sans-serif !important;
  }
  p { margin: 0; }
  em { font-style: normal; }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;

  @media (min-width: 768px) { padding: 0 40px; }
`;

const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 22px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold);
  ${(p) => p.$center && css`justify-content: center; width: 100%;`}
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.55; }
`;

const EyebrowDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--crimson);
  box-shadow: 0 0 0 4px rgba(200, 16, 46, 0.25);
  animation: ${pulse} 2.4s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 26px;
  border-radius: 999px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  will-change: transform;

  &:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }
`;

/* Marquee --------------------------------------------------------------- */

const slide = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Marquee = styled.div`
  position: relative;
  z-index: 2;
  overflow: hidden;
  background: var(--crimson);
  color: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);

  .track {
    display: flex;
    width: max-content;
    animation: ${(p) => (p.$still ? "none" : css`${slide} 28s linear infinite`)};
  }
  .group { display: inline-flex; align-items: center; }
  span.group > span {
    padding: 14px 0;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  i {
    display: inline-block;
    width: 6px;
    height: 6px;
    margin: 0 28px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.75);
  }
`;

/* Sections -------------------------------------------------------------- */

const Section = styled.section`
  position: relative;
  padding: 96px 0;
  /* Fixed site header (+ optional announcement bar) must not cover anchored sections */
  scroll-margin-top: calc(100px + var(--ri27-bar-h, 0px));
  background: ${(p) =>
    p.$tone === "raised"
      ? "var(--bg-raised)"
      : p.$tone === "form"
        ? "radial-gradient(70% 60% at 100% 0%, rgba(200, 16, 46, 0.16), transparent 60%), var(--bg)"
        : "var(--bg)"};
  ${(p) => p.$tone === "raised" && css`border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);`}

  @media (min-width: 1024px) { padding: 128px 0; }
`;

const SectionLabel = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 18px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--crimson);

  &::before {
    content: "";
    width: 28px;
    height: 2px;
    background: var(--crimson);
  }
`;

const SectionTitle = styled.h2`
  max-width: 20ch;
  font-weight: 700;
  font-size: clamp(1.9rem, 4vw, 3.2rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--ink);
`;

const Journey = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  p {
    max-width: 60ch;
    font-size: 1.08rem;
    line-height: 1.7;
    color: var(--mute);
  }
  p + p { margin-top: 20px; }
  p.lead {
    font-size: clamp(1.3rem, 2.2vw, 1.75rem);
    line-height: 1.4;
    font-weight: 500;
    color: var(--ink);
  }

  @media (min-width: 900px) {
    grid-template-columns: 260px minmax(0, 1fr);
    gap: 48px;
  }
`;

const FilmStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin: 72px 0 0;
  padding: 0 10px;

  figure {
    position: relative;
    margin: 0;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    border: 1px solid rgba(200, 16, 46, 0.6);
    border-radius: 6px;
    box-sizing: border-box;
    background: #111;
    will-change: transform;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.9);
    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
  }
  figure:hover img { transform: scale(1.05); filter: saturate(1.05); }
  figure:nth-child(3) img { object-position: 85% center; }
  figure.whole {
    display: flex;
    align-items: center;
    background: #0b0b0d;
  }
  figure.whole img {
    height: 72%;
    object-position: 51.5% center;
    -webkit-mask-image: linear-gradient(180deg, transparent 0, #000 14%, #000 86%, transparent 100%);
    mask-image: linear-gradient(180deg, transparent 0, #000 14%, #000 86%, transparent 100%);
  }

  @media (max-width: 767px) {
    figure:nth-child(2) {
      grid-column: 2;
      grid-row: 1 / 3;
      align-self: center;
      transform: none !important;
    }
    figure:nth-child(5) { display: none; }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 14px;
    padding: 0 24px;
    figure { aspect-ratio: 3 / 4; }
  }
`;

/* Opportunities --------------------------------------------------------- */

const SectionHead = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  align-items: end;

  p {
    max-width: 56ch;
    font-size: 1.08rem;
    line-height: 1.7;
    color: var(--mute);
  }

  @media (min-width: 1000px) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 64px;
  }
`;

const ExploreLabel = styled.p`
  && { margin: 56px 0 36px; }
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--faint);
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  @media (min-width: 820px) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
`;

const OpportunityCard = styled(motion.button)`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 460px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: #0b0b10;
  color: var(--ink);
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease;
  will-change: transform;

  .media {
    position: absolute;
    inset: 0;
    z-index: -1;
    overflow: hidden;
  }
  .media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: scale(1.02);
    filter: saturate(0.75) brightness(0.9);
    transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
  }
  .media .tint {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(7, 7, 10, 0.35) 0%, rgba(7, 7, 10, 0.1) 30%, rgba(7, 7, 10, 0.78) 62%, rgba(7, 7, 10, 0.96) 100%);
    transition: background 0.6s ease;
  }

  .body { display: block; }
  .kicker {
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    width: max-content;
    max-width: 100%;
    margin-bottom: 12px;
    padding: 7px 11px;
    border: 1px solid rgba(242, 216, 172, 0.5);
    border-radius: 999px;
    background: rgba(5, 5, 7, 0.88);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.22em;
    line-height: 1.3;
    text-transform: uppercase;
    color: var(--gold);
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.9);
  }
  h3 {
    font-size: clamp(1.5rem, 2.1vw, 1.85rem);
    font-weight: 700;
    letter-spacing: -0.025em;
    line-height: 1.05;
    color: var(--ink);
  }
  p {
    margin-top: 12px;
    max-width: 34ch;
    font-size: 14.5px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.72);
  }
  .cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 22px;
    padding: 11px 16px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.06);
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ink);
    backdrop-filter: blur(6px);
    transition: background 0.35s ease, color 0.35s ease, border-color 0.35s ease, gap 0.35s ease;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-8px);
    border-color: rgba(200, 16, 46, 0.7);
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(200, 16, 46, 0.25);
    outline: none;
  }
  &:hover .media img,
  &:focus-visible .media img {
    transform: scale(1.1);
    filter: saturate(1) brightness(1);
  }
  &:hover .media .tint,
  &:focus-visible .media .tint {
    background:
      linear-gradient(180deg, rgba(7, 7, 10, 0.3) 0%, rgba(7, 7, 10, 0.05) 30%, rgba(7, 7, 10, 0.8) 62%, rgba(7, 7, 10, 0.97) 100%),
      linear-gradient(180deg, rgba(200, 16, 46, 0) 40%, rgba(200, 16, 46, 0.35) 100%);
  }
  &:hover .cta,
  &:focus-visible .cta {
    background: #fff;
    border-color: #fff;
    color: #0a0a0a;
    gap: 12px;
  }

  @media (max-width: 819px) {
    min-height: 400px;
  }
`;

/* Form ------------------------------------------------------------------ */

const FormLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: 72px;
    align-items: start;
  }
`;

const FormCopy = styled.div`
  .perks {
    list-style: none;
    margin: 32px 0 0;
    padding: 0;
    display: grid;
    gap: 12px;
  }
  .perks li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 15px;
    line-height: 1.5;
    color: var(--ink);
  }
  .perks svg {
    flex-shrink: 0;
    margin-top: 3px;
    color: var(--crimson);
  }

  p {
    margin-top: 20px;
    max-width: 48ch;
    font-size: 1.08rem;
    line-height: 1.7;
    color: var(--mute);
  }

  @media (min-width: 1024px) {
    position: sticky;
    top: 130px;
  }
`;

const cardSurface = css`
  position: relative;
  padding: 32px 28px 30px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 3px;
    border-radius: 14px 14px 0 0;
    background: linear-gradient(90deg, var(--crimson), var(--crimson-deep));
  }

  @media (max-width: 640px) { padding: 24px 18px 24px; }
`;

const FormCard = styled(motion.form)`
  ${cardSurface}
  scroll-margin-top: calc(100px + var(--ri27-bar-h, 0px));
`;

const FormCardHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 26px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--line);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--ink);
`;

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    .span-2 { grid-column: 1 / -1; }
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const FieldLabel = styled.label`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin: 0 0 9px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);

  .hint {
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--faint);
  }
`;

const Req = styled.span`
  color: var(--crimson);
`;

/* Global CSS forces `input { border: none !important }`; borders are drawn via box-shadow. */
const fieldSurface = css`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border: none !important;
  border-radius: 8px !important;
  background: rgba(255, 255, 255, 0.04) !important;
  color: #fff !important;
  font-family: inherit;
  font-size: 15px;
  outline: none !important;
  box-sizing: border-box;
  appearance: none;
  transition: box-shadow 0.15s ease, background 0.15s ease;
`;

const Input = styled.input`
  ${fieldSurface}
  box-shadow: inset 0 0 0 1px ${(p) => (p.$error ? "var(--crimson)" : "rgba(255,255,255,0.16)")};

  &::placeholder { color: rgba(255, 255, 255, 0.38); }
  &:hover { box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.32); }
  &:focus {
    background: rgba(255, 255, 255, 0.07) !important;
    box-shadow: inset 0 0 0 1.5px #fff !important;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: #fff;
    -webkit-box-shadow: 0 0 0 1000px #1a1a20 inset, inset 0 0 0 1px rgba(255, 255, 255, 0.16);
    caret-color: #fff;
  }
`;

const PhoneRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: stretch;

  .code { width: 112px; flex-shrink: 0; }
  ${Input} { flex: 1; min-width: 0; }
`;

const SelectRoot = styled.div`
  position: relative;
  width: 100%;
`;

const SelectTrigger = styled.button`
  ${fieldSurface}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  text-align: left;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px
    ${(p) => (p.$invalid ? "var(--crimson)" : p.$open ? "#fff" : "rgba(255,255,255,0.16)")};

  &:hover { box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.32); }
`;

const SelectMenu = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  min-width: ${(p) => (p.$minWidth ? `${p.$minWidth}px` : "100%")};
  max-width: min(92vw, 360px);
  z-index: 50;
  overflow: hidden;
  border-radius: 10px;
  background: #15151b;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
`;

const SelectSearchRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
`;

const SelectSearchInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 32px;
  padding: 0 2px;
  border: none !important;
  outline: none !important;
  background: transparent !important;
  box-shadow: none !important;
  font-family: inherit;
  font-size: 14px;
  color: #fff !important;

  &::placeholder { color: rgba(255, 255, 255, 0.38); }
`;

const SelectList = styled.div`
  max-height: 240px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
`;

const SelectOption = styled.button`
  display: block;
  width: 100%;
  padding: 11px 14px;
  border: none !important;
  background: ${(p) => (p.$active ? "var(--crimson)" : "transparent")} !important;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${(p) => (p.$active ? "var(--crimson)" : "rgba(255,255,255,0.07)")} !important;
  }
`;

const SelectEmpty = styled.div`
  padding: 14px;
  font-size: 14px;
  color: var(--faint);
`;

const Err = styled.p`
  margin: 7px 0 0;
  font-size: 12.5px;
  font-weight: 600;
  color: #ff5c73;
`;

const InterestBlock = styled.div`
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
`;

const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Pill = styled.button`
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  box-sizing: border-box;
  gap: 10px;
  padding: 11px 16px 11px 12px;
  border-radius: 999px;
  border: 1px solid ${(p) => (p.$active ? "var(--crimson)" : "rgba(255,255,255,0.16)")};
  background: ${(p) => (p.$active ? "rgba(200,16,46,0.18)" : "rgba(255,255,255,0.03)")};
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.45;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;

  .box {
    display: grid;
    flex-shrink: 0;
    place-items: center;
    width: 18px;
    height: 18px;
    border-radius: 5px;
    border: 1px solid ${(p) => (p.$active ? "var(--crimson)" : "rgba(255,255,255,0.3)")};
    background: ${(p) => (p.$active ? "var(--crimson)" : "transparent")};
    color: #fff;
    transition: background 0.2s ease, border-color 0.2s ease;
  }
  .box svg { opacity: ${(p) => (p.$active ? 1 : 0)}; transition: opacity 0.15s ease; }
  .option-label { min-width: 0; }

  &:hover { border-color: ${(p) => (p.$active ? "var(--crimson)" : "rgba(255,255,255,0.4)")}; transform: translateY(-1px); }
  &:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
`;

const CaptchaWrap = styled.div`
  margin-top: 26px;

  > div { max-width: 100%; }
`;

const CheckRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.55;
  color: var(--mute);

  a { color: #fff; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
  a:hover { color: var(--gold); }

  input {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin-top: 2px;
    accent-color: var(--crimson);
    cursor: pointer;
    ${(p) => p.$error && css`outline: 2px solid var(--crimson); outline-offset: 1px; border-radius: 3px;`}
  }
  label { margin: 0; cursor: pointer; }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  animation: ${spin} 0.8s linear infinite;
`;

const SubmitButton = styled.button`
  ${buttonBase}
  width: 100%;
  margin-top: 26px;
  padding: 18px 26px;
  border: 1px solid var(--crimson);
  background: var(--crimson);
  color: #fff;
  box-shadow: 0 14px 40px rgba(200, 16, 46, 0.3);

  &:hover:not(:disabled) {
    background: #fff;
    border-color: #fff;
    color: #0a0a0a;
    transform: translateY(-2px);
  }
  &:disabled {
    cursor: wait;
    opacity: 0.75;
    box-shadow: none;
  }
`;

const SuccessCard = styled(motion.div)`
  ${cardSurface}
  padding: 44px 36px 36px;

  .badge {
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    margin-bottom: 22px;
    border-radius: 50%;
    background: var(--crimson);
    color: #fff;
    box-shadow: 0 14px 40px rgba(200, 16, 46, 0.4);
  }
  h3 {
    font-size: clamp(1.6rem, 3vw, 2.3rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.03em;
  }
  p {
    margin-top: 16px;
    max-width: 46ch;
    font-size: 1.05rem;
    line-height: 1.65;
    color: var(--mute);
  }
  @media (max-width: 640px) { padding: 30px 20px 26px; }
`;

/* Closing --------------------------------------------------------------- */

const Closing = styled.footer`
  position: relative;
  overflow: hidden;
  padding: 110px 0 120px;
  text-align: center;
  background:
    radial-gradient(60% 80% at 50% 100%, rgba(200, 16, 46, 0.35), transparent 70%),
    #050507;
  border-top: 1px solid var(--line);

  h2 {
    margin: 0 auto;
    max-width: 22ch;
    font-weight: 600;
    font-size: clamp(1.6rem, 3.4vw, 2.8rem);
    line-height: 1.15;
    letter-spacing: -0.03em;
    color: var(--ink);
  }
`;

const ClosingYear = styled.span`
  position: absolute;
  left: 50%;
  bottom: -0.22em;
  transform: translateX(-50%);
  font-weight: 900;
  font-size: clamp(7rem, 24vw, 22rem);
  line-height: 1;
  letter-spacing: -0.06em;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.08);
  pointer-events: none;
  user-select: none;
`;

export default RegisterInterest2027;
