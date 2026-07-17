import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
const StartupForm = () => {
  const [captchaToken, setCaptchaToken] = useState("");
  const [formData, setFormData] = useState({
    businessname: "",
    foundername: "",
    businesssector: "",
    email: "",
    uploadfile: null,
    uploadfileoptional: null,
    businessdescription: "",
    whypitchatbfa: "",
    businessincorporationdate: "",
    websiteurl: "",
  });
  const [errors, setErrors] = useState({});
  const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const maxSize = 8 * 1024 * 1024; // 8MB
  const supportedFormats = ["application/pdf"];
  const closeModal = () => setShowModal(false);
  const handleCaptchaChange = (token) => setCaptchaToken(token);

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    const updatedFormData = { ...formData };
    const updatedErrors = { ...errors };

    if (files) {
      const file = files[0];
      updatedFormData[id] = file;

      if (file.size > maxSize) {
        updatedErrors[id] = "File size must be less than 8MB";
      } else if (!supportedFormats.includes(file.type)) {
        updatedErrors[id] = "Invalid file format. Only PDF files are allowed.";
      } else {
        delete updatedErrors[id];
      }
    } else {
      updatedFormData[id] = value;

      if (id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        updatedErrors[id] = "Invalid email address";
      } else if (
        id === "websiteurl" &&
        !/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{2,256}\.[a-z]{2,6}(\/.*)?$/.test(value)
      ) {
        updatedErrors[id] = "Invalid website URL";
      } else {
        delete updatedErrors[id];
      }
    }

    setFormData(updatedFormData);
    setErrors(updatedErrors);
  };

  const handleTextAreaChange = (e, maxWords) => {
    const { id, value } = e.target;
    const wordCount = value.trim().split(/\s+/).length;

    setFormData((prev) => ({ ...prev, [id]: value }));

    if (wordCount > maxWords) {
      setErrors((prev) => ({ ...prev, [id]: `Cannot exceed ${maxWords} words` }));
    } else {
      setErrors((prev) => {
        const updatedErrors = { ...prev };
        delete updatedErrors[id];
        return updatedErrors;
      });
    }
  };

  const handleCheckboxChange = (e) => {
    setAgreePrivacyPolicy(e.target.checked);
    if (e.target.checked) {
      setErrors((prev) => {
        const updatedErrors = { ...prev };
        delete updatedErrors.privacyPolicy;
        return updatedErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    window.grecaptcha.reset();
  
    const validationErrors = {};
    const requiredFields = [
      "businessname",
      "foundername",
      "businesssector",
      "email",
      "uploadfile",
      "businessdescription",
      "whypitchatbfa",
      "businessincorporationdate",
      "websiteurl",
    ];
  
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        validationErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });
  
    if (!agreePrivacyPolicy) {
      validationErrors.privacyPolicy = "Please accept the terms and conditions.";
    }
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }
  
    // Reformat the businessincorporationdate from YYYY-MM-DD to DD-MM-YYYY
    const formatDate = (dateString) => {
      const [year, month, day] = dateString.split("-");
      return `${day}-${month}-${year}`;
    };
  
    // Create a new FormData object for sending the form data
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      // If the field is 'businessincorporationdate', format it before appending
      if (key === "businessincorporationdate" && formData[key]) {
        formDataToSend.append(key, formatDate(formData[key]));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });
  
    formDataToSend.append("reCaptcha", captchaToken);
  
    try {
      const response = await axios.post(
        "https://www.britfintechawards.com/prod/api/britfin/savestartupform",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
  
      if (response.status === 200) {
        if (!response.data.response) {
          Swal.fire("Error!", response?.data?.data, "error");
        } else {
          Swal.fire("Success!", "Form submitted successfully!", "success");
          setFormData({
            businessname: "",
            foundername: "",
            businesssector: "",
            email: "",
            uploadfile: null,
            uploadfileoptional: null,
            businessdescription: "",
            whypitchatbfa: "",
            businessincorporationdate: "",
            websiteurl: "",
          });
          setAgreePrivacyPolicy(false);
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
            window.location.reload();
          }, 12000);
        }
      }
    } catch (error) {
      Swal.fire("Error!", "An error occurred while submitting the form.", "error");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <form className="cs-contact_form" onSubmit={handleSubmit}>
        <div className="row cs-row_gap_20">
          <div className="col-sm-6">
            <input
              type="text"
              id="businessname"
              name="businessname"
              className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${
                errors.businessname && "error-border"
              }`}
              placeholder="Enter your Business Name"
              maxLength="120"
              value={formData.businessname}
              onChange={handleInputChange}
            />
            {errors.businessname && (
              <div className="error text-danger">Business name is required</div>
            )}
            <div className="cs-height_20 cs-height_lg_20" />
          </div>
          <div className="col-sm-6">
            <input
              type="email"
              id="email"
              name="email"
              className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${
                errors.email && "error-border"
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
          <div className="col-sm-6">
            <input
              type="text"
              id="foundername"
              name="foundername"
              className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${
                errors.foundername && "error-border"
              }`}
              placeholder="  Enter Founder's Name"
              value={formData.foundername}
              maxLength="130"
              onChange={handleInputChange}
            />
            {errors.foundername && (
              <div className="error text-danger">
                Please Enter Founder's Name
              </div>
            )}
            <div className="cs-height_20 cs-height_lg_20" />
          </div>
          <div className="col-sm-6">
            {/* <label htmlFor="website_url">Website URL</label> */}
            <input
              type="text"
              id="websiteurl"
              name="websiteurl"
              className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${
                errors.websiteurl && "error-border"
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
          <div className="col-sm-12">
            {/* <label htmlFor="company_sector">Company Sector</label> */}
            <input
              type="text"
              id="businesssector"
              name="businesssector"
              className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${
                errors.businesssector && "error-border"
              }`}
              placeholder="Enter Your Business Sector"
              value={formData.businesssector}
              onChange={handleInputChange}
              maxLength="120"
            />
            {errors.businesssector && (
              <div className="error text-danger">
                Business Sector is required
              </div>
            )}
            <div className="cs-height_20 cs-height_lg_20" />
          </div>
          <div className="col-sm-12">
            <textarea
              id="businessdescription"
              name="businessdescription"
              className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${
                errors.businessdescription && "error-border"
              }`}
              placeholder="Enter Your Business Description (Max 150 words)"
              value={formData.businessdescription}
              onChange={handleTextAreaChange}
            />
            {errors.businessdescription && (
              <div className="error text-danger">
                Business Description is required
              </div>
            )}
          </div>
          <div className="cs-height_20 cs-height_lg_20" />
          <div className="col-sm-12">
            <textarea
              id="whypitchatbfa"
              name="whypitchatbfa"
              className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${
                errors.whypitchatbfa && "error-border"
              }`}
              placeholder=" Why Do You Want to Pitch at the Brit Fintech Awards? (Max 500 words)"
              value={formData.whypitchatbfa}
              onChange={handleTextAreaChange}
            />
            {errors.whypitchatbfa && (
              <div className="error text-danger">This Field is required</div>
            )}
            <div className="cs-height_20 cs-height_lg_20" />
          </div>

          <div className="cs-height_20 cs-height_lg_20" />

          <div className="col-sm-12">
            <label htmlFor="businessincorporationdate" className="mb-2">
              Business Incorporation Date
            </label>
            <input
              type="date"
              id="businessincorporationdate"
              name="businessincorporationdate"
              className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${
                errors.businessincorporationdate && "error-border"
              }`}
              placeholder="Select Business Incorporation Date"
              value={formData.businessincorporationdate}
              onChange={handleInputChange}
            />
            {errors.businessincorporationdate && (
              <div className="error text-danger">
                Business Incorporation Date is required
              </div>
            )}
            <div className="cs-height_20 cs-height_lg_20" />
          </div>
          <div className="col-sm-12">
            <label htmlFor="file">
              {" "}
              Upload Pitch Deck
              <span className="text-danger" style={{ fontSize: "12px" }}>
                * (Only PDF files are allowed)
              </span>
            </label>
            <input
              type="file"
              id="uploadfile"
              name="uploadfile"
              className={`cs-form_field cs-white_bg cs-accent_30_border cs-primary_color undefined ${
                errors.uploadfile && "error-border"
              }`}
              onChange={handleInputChange}
              accept="application/pdf"
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
              />
              {errors.captcha && (
                <span className="error text-danger">{errors.captcha}</span>
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
    </div>
  );
};

export default StartupForm;
