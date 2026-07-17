import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const DownloadPhotosForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    experienceRating: "",
    reCaptcha: "",
    networkingBenefits: "",
    attend2025: "",
    payTicket: "",
    sponsorBFA: "",
    comments: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    setFormData({ ...formData, reCaptcha: token });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};

    // Validate Name
    if (!formData.name) errors.name = "Name is required";

    // Validate Company Name
    if (!formData.companyName) errors.companyName = "Company name is required";

    // Validate Email
    if (
      !formData.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ||
      formData.email.includes(" ")
    ) {
      errors.email = "Invalid email address";
    }

    // Validate Phone
    let numericValue = formData.phone || "";
    numericValue = numericValue.replace(/\D/g, "");
    if (numericValue.length < 10 || numericValue.length > 15) {
      errors.phone = "Phone number should be between 10 and 15 digits";
    }

    // Validate Experience Rating
    if (!formData.experienceRating) {
      errors.experienceRating = "Please rate your overall experience";
    }

    // Validate Networking Benefits
    if (!formData.networkingBenefits)
      errors.networkingBenefits = "Please select an option";

    // Validate Future Attendance and Sponsorship
    if (!formData.attend2025) errors.attend2025 = "This field is required";
    if (!formData.payTicket) errors.payTicket = "Please select an option";
    if (!formData.sponsorBFA) errors.sponsorBFA = "Please select an option";

    // Validate reCAPTCHA
    if (!captchaToken) errors.reCaptcha = "Please verify you're not a robot";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      const submissionData = { ...formData, reCaptcha: captchaToken };

      axios
        .post(
          "https://www.britfintechawards.com/prod/api/britfin/downloadphotosenquiry",
          submissionData
        )
        .then((response) => {
          if (response.status === 200) {
            if (!response.data.response) {
              Swal.fire({
                title: "Error!",
                text: response?.data?.data,
                icon: "error",
                confirmButtonText: "Ok",
              });
            } else {
              Swal.fire({
                title: "Success!",
                text: "We have sent you an email with a download link for the photos. If you don't find it in your inbox, please check your spam or junk folder.",
                icon: "success",
                confirmButtonText: "Ok",
              }).then(() => {
                setFormData({
                  name: "",
                  companyName: "",
                  email: "",
                  phone: "",
                  experienceRating: "",
                  reCaptcha: "",
                  networkingBenefits: "",
                  attend2025: "",
                  payTicket: "",
                  sponsorBFA: "",
                  comments: "",
                });
                if (window.grecaptcha) {
                  window.grecaptcha.reset();
                }
              });
            }
          }
          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error("Form submission error:", error);
          Swal.fire({
            title: "Submission Failed",
            text: "An error occurred during form submission. Please try again.",
            icon: "error",
            confirmButtonText: "Close",
          });
          setIsSubmitting(false);
          if (window.grecaptcha) {
            window.grecaptcha.reset();
          }
        });
    } else {
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>Download Photo Form | Brit Fintech Awards</title>
        <meta
          name="description"
          content="Join Brit FinTech Awards UK, celebrating top innovations and achievements in FinTech, and honouring pioneers who are shaping the future of financial technology."
        />
        <meta
          name="keywords"
          content="Brit Fintech Award, UK Fintech Awards, About Us, Financial Technology Sector UK, Fintech Innovation UK"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta
          property="og:title"
          content="About Brit Fintech Awards UK | Celebrating FinTech Innovation"
        />
        <meta
          property="og:description"
          content="Join Brit FinTech Awards UK, celebrating top innovations and achievements in FinTech, and honouring pioneers who are shaping the future of financial technology."
        />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/event-conference/about.png"
        />
      </Helmet>

      <div className="cs-height_90 cs-height_lg_80" />

      <div
        className="cs-hero cs-style12 cs-type1 cs-center text-center  cs-parallax cs-hobble"        
        style={{
          backgroundImage: 'url("../assets/img/event-conference/hero-img.jpg")',
        }}
      >
        <div className="cs-hero_pattern cs-hover_layer3">
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
              className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-0 mb-2"
              style={{ marginTop: "40px !important" }}
            >
              Download Photos
            </h1>

            <div className="cs-height_10 cs-height_lg_0" />
          </div>
        </div>
        <div className="cs-height_70" />
      </div>

      <div className="container mt-5">
        <style>
          {`
            .form-container {
    max-width: 800px !important;
              margin: auto;
              background: #eeedff;
              padding: 20px;
              border-radius: 20px;
            }
            .invalid-feedback {
              display: none;
            }
              .btn-check:active+.btn-primary:focus, .btn-check:checked+.btn-primary:focus, .btn-primary.active:focus, .btn-primary:active:focus, .show>.btn-primary.dropdown-toggle:focus {
    box-shadow: none !important;
}
            .was-validated .form-control:invalid ~ .invalid-feedback {
              display: block;
            }
            .valid-feedback {
              display: none;
            }
            .was-validated .form-control:valid ~ .valid-feedback {
              display: block;
              color: green;
            }
          `}
        </style>

        <div className="d-flex justify-content-center align-items-center">
          <Form onSubmit={handleSubmit} className="form-container row">
            <Form.Group className="col-md-6 mt-2 mb-2" controlId="name">
              <Form.Label>
                Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                maxLength="130"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!formErrors.name}
              />
              {formErrors.name && (
                <div className="invalid-feedback">{formErrors.name}</div>
              )}
            </Form.Group>

            <Form.Group className="col-md-6 mt-2 mb-2" controlId="companyName">
              <Form.Label>
                Company Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="companyName"
                maxLength="130"
                value={formData.companyName}
                onChange={handleChange}
                isInvalid={!!formErrors.companyName}
              />
              {formErrors.companyName && (
                <div className="invalid-feedback">
                  {formErrors.companyName}
                </div>
              )}
            </Form.Group>

            <Form.Group className="col-md-6 mt-2 mb-2" controlId="email">
              <Form.Label>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                maxLength="130"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!formErrors.email}
              />
              {formErrors.email && (
                <div className="invalid-feedback">{formErrors.email}</div>
              )}
            </Form.Group>

            <Form.Group className="col-md-6 mt-2 mb-2" controlId="phone">
              <Form.Label>
                Phone <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                maxLength="15"
                value={formData.phone}
                onChange={handleChange}
                isInvalid={!!formErrors.phone}
              />
              {formErrors.phone && (
                <div className="invalid-feedback">{formErrors.phone}</div>
              )}
            </Form.Group>

            <Form.Group className="col-md-12 mt-2 mb-2" controlId="experienceRating">
              <Form.Label>
                How would you rate your overall experience?{" "}
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                as="select"
                name="experienceRating"
                value={formData.experienceRating}
                onChange={handleChange}
                isInvalid={!!formErrors.experienceRating}
              >
                <option value="">Select</option>
                <option value="Excellent">Excellent</option>
                <option value="Very Good">Very Good</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </Form.Select>
              {formErrors.experienceRating && (
                <div className="invalid-feedback">
                  {formErrors.experienceRating}
                </div>
              )}
            </Form.Group>

            <Form.Group className="col-md-6 mt-2 mb-2 "  controlId="networkingBenefits">
              <Form.Label>
                Did you find networking beneficial?{" "}
                <span className="text-danger">*</span>
              </Form.Label>
             <div className="d-flex gap-2">
             <Form.Check
                type="radio"
                name="networkingBenefits"
                value="Yes"
                label="Yes"
                onChange={handleChange}
                isInvalid={!!formErrors.networkingBenefits}
              />
              <Form.Check
                type="radio"
                name="networkingBenefits"
                value="No"
                label="No"
                onChange={handleChange}
                isInvalid={!!formErrors.networkingBenefits}
              />
             </div>
              {formErrors.networkingBenefits && (
                <div className="invalid-feedback">
                  {formErrors.networkingBenefits}
                </div>
              )}
            </Form.Group>

            <Form.Group className="col-md-6 mt-2 mb-2" controlId="attend2025">
              <Form.Label>
                Will you attend the 2025 event?{" "}
                <span className="text-danger">*</span>
              </Form.Label>
              <div className="d-flex gap-2">
              <Form.Check
                type="radio"
                name="attend2025"
                value="Yes"
                label="Yes"
                onChange={handleChange}
                isInvalid={!!formErrors.attend2025}
              />
              <Form.Check
                type="radio"
                name="attend2025"
                value="No"
                label="No"
                onChange={handleChange}
                isInvalid={!!formErrors.attend2025}
              />
              </div>
              {formErrors.attend2025 && (
                <div className="invalid-feedback">{formErrors.attend2025}</div>
              )}
            </Form.Group>

            <Form.Group className="col-md-6 mt-2 mb-2" controlId="payTicket">
              <Form.Label>
                Are you willing to pay for a ticket?{" "}
                <span className="text-danger">*</span>
              </Form.Label>
              <div className="d-flex gap-2">
              <Form.Check
                type="radio"
                name="payTicket"
                value="Yes"
                label="Yes"
                onChange={handleChange}
                isInvalid={!!formErrors.payTicket}
              />
              <Form.Check
                type="radio"
                name="payTicket"
                value="No"
                label="No"
                onChange={handleChange}
                isInvalid={!!formErrors.payTicket}
              />
              </div>
              {formErrors.payTicket && (
                <div className="invalid-feedback">{formErrors.payTicket}</div>
              )}
            </Form.Group>
            <Form.Group className="col-md-6 mt-2 mb-2" controlId="sponsorBFA">
              <Form.Label>
                Would you like to sponsor Brit Fintech Awards?
                <span className="text-danger">*</span>
              </Form.Label>
            <div className="d-flex gap-2">
            <Form.Check
                type="radio"
                name="sponsorBFA"
                value="Yes"
                label="Yes"
                onChange={handleChange}
                isInvalid={!!formErrors.sponsorBFA}
              />
              <Form.Check
                type="radio"
                name="sponsorBFA"
                value="No"
                label="No"
                onChange={handleChange}
                isInvalid={!!formErrors.sponsorBFA}
              />
            </div>
              {formErrors.sponsorBFA && (
                <div className="invalid-feedback">{formErrors.sponsorBFA}</div>
              )}
            </Form.Group>
            <Form.Group className="col-md-12 mt-2 mb-2" controlId="payTicket">
  <Form.Label>
    Will you be willing to pay a ticket price to attend Brit FinTech Awards 2025? <span className="text-danger">*</span>
  </Form.Label>
  <Form.Select 
    name="payTicket"
    onChange={handleChange}
    isInvalid={!!formErrors.payTicket}
  >
    <option value="">-- Select an option --</option>
    <option value="£100-£195">Yes, between £100 to £195</option>
    <option value="£50-£100">Yes, between £50 to £100</option>
    <option value="less than £50">Yes, less than £50</option>
    <option value="free">I would like to attend for free</option>
  </Form.Select>
  {formErrors.payTicket && (
    <div className="invalid-feedback">{formErrors.payTicket}</div>
  )}
</Form.Group>


         

            <Form.Group className="col-md-12 " controlId="comments">
              <Form.Label>Additional Comments</Form.Label>
              <Form.Control
                as="textarea"
                name="comments"
                maxLength="500"
                rows={4}
                value={formData.comments}
                onChange={handleChange}
              />
            </Form.Group>

           <div className="mt-2">
           <ReCAPTCHA
              sitekey="6LdxNigqAAAAAJ6jU9uuhEtrAw-s8J_qnsGCVvj5"
              onChange={handleCaptchaChange}
            />
            {formErrors.reCaptcha && (
              <div className="invalid-feedback d-block">
                {formErrors.reCaptcha}
              </div>
            )}
           </div>

          <div className="col-12 text-center">
          <Button type="submit" style={{background: '#020058'}} className="mt-3 col-md-4 justify-content-center align-items-center text-center" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Download Request "}
            </Button>
          </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default DownloadPhotosForm;
