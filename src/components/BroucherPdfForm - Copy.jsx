import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import Select from "react-select";
import Swal from "sweetalert2";

const BroucherPdfForm = ({ onFormSubmit, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    // country: "",
    reCaptcha: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  // const [countries, setCountries] = useState([]);
  // const [loadingCountries, setLoadingCountries] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false); // For button disabling

  // Fetch countries from the API and sort alphabetically
  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const response = await axios.get("https://restcountries.com/v3.1/all");
  //       const countryOptions = response.data
  //         .map((country) => ({
  //           value: country.name.common,
  //           label: country.name.common,
  //         }))
  //         .sort((a, b) => {
  //           if (a.label === "United Kingdom") return -1; // Keep United Kingdom at the top
  //           if (b.label === "United Kingdom") return 1;
  //           return a.label.localeCompare(b.label); // Sort the rest alphabetically
  //         });
  //       setCountries(countryOptions);
  //       setLoadingCountries(false);
  //     } catch (error) {
  //       console.error("Error fetching countries:", error);
  //       setLoadingCountries(false);
  //     }
  //   };
  
  //   fetchCountries();
  // }, []);
  

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    setFormData({ ...formData, reCaptcha: token });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryChange = (selectedOption) => {
    setFormData({ ...formData, country: selectedOption.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.companyName) errors.companyName = "Company name is required";

    // Email validation
    if (
      !formData.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ||
      formData.email.includes(" ")
    ) {
      errors.email = "Invalid email address";
    }

    // Phone validation
    let numericValue = formData.phone || "";
    if (numericValue.startsWith("+")) {
      numericValue = "+" + numericValue.slice(1).replace(/\D/g, "");
    } else {
      numericValue = numericValue.replace(/\D/g, "");
    }
    formData.phone = numericValue;

    if (
      (numericValue.startsWith("+") && numericValue.length > 15) ||
      numericValue.length < 10
    ) {
      errors.phone = "Phone number should be between 10 and 15 digits";
    }

    if (!formData.country) errors.country = "Country is required";
    if (!captchaToken) errors.reCaptcha = "Please verify you're not a robot";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true); // Disable submit button and show "Submitting..."
      const submissionData = { ...formData, reCaptcha: captchaToken };

      axios
        .post(
          "https://www.britfintechawards.com/prod/api/britfin/savebrochureenquiry",
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
                text: "You have received the brochure link in your email.",
                icon: "success",
                confirmButtonText: "Ok",
              }).then(() => {
                setFormData({
                  name: "",
                  companyName: "",
                  email: "",
                  phone: "",
                  country: "",
                  reCaptcha: "",
                });
                setFormSubmitted(true);

                if (window.grecaptcha) {
                  window.grecaptcha.reset();
                }

                closeModal();
              });
            }
          }
          setIsSubmitting(false); // Re-enable button after submission
        })
        .catch((error) => {
          console.error("Form submission error:", error);
          Swal.fire({
            title: "Submission Failed",
            text: "An error occurred during form submission. Please try again.",
            icon: "error",
            confirmButtonText: "Close",
          });
          setIsSubmitting(false); // Re-enable button on error

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
      <style>{`
        .form-container {
          background-color: #efefef;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .modal-body {
          background-color: #fff;
        }
        .invalid-feedback {
          display: none;
          width: 100%;
          margin-top: -7px;
          font-size: .875em;
          color: #dc3545;
        }
        .btn-primary:focus {
          color: #fff;
          background-color: #12106a;
          box-shadow: none;
        }
        .form-container h5 {
          color: #5a5a5a;
          font-weight: bold;
        }
        .form-control {
          margin-bottom: 10px;
        }
        .submit-button {
          background-color: #4caf50;
          color: white;
          border: none;
        }
        .submit-button:hover {
          background-color: #45a049;
        }
        .submit-button:disabled {
          background-color: #cccccc;
          color: #666666;
        }
        .form-control:focus {
          color: #212529;
          background-color: #fff;
          border-color: #86b7fe;
          outline: 0;
          box-shadow: none;
        }
      `}</style>

      <Form onSubmit={handleSubmit} className="form-container">
        <Form.Group controlId="name">
          <Form.Label>
            Name{" "}
            <span
              className="text-danger fw-bolder"
              style={{ fontSize: "20px" }}
            >
              *
            </span>
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            maxLength="130"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!formErrors.name}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="companyName">
          <Form.Label>
            Company Name{" "}
            <span
              className="text-danger fw-bolder"
              style={{ fontSize: "20px" }}
            >
              *
            </span>
          </Form.Label>
          <Form.Control
            type="text"
            name="companyName"
            maxLength="130"
            value={formData.companyName}
            onChange={handleChange}
            isInvalid={!!formErrors.companyName}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.companyName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>
            Email{" "}
            <span
              className="text-danger fw-bolder"
              style={{ fontSize: "20px" }}
            >
              *
            </span>
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!formErrors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>
            Phone{" "}
            <span
              className="text-danger fw-bolder"
              style={{ fontSize: "20px" }}
            >
              *
            </span>
          </Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            maxLength="15"
            onChange={(e) => {
              let value = e.target.value;

              // Check if the phone number starts with a "+"
              if (value.startsWith("+")) {
                // Keep "+" at the start and remove all non-numeric characters after "+"
                value = "+" + value.slice(1).replace(/\D/g, "");
              } else {
                // Remove all non-numeric characters
                value = value.replace(/\D/g, "");
              }

              // Call handleChange with the modified value
              handleChange({
                target: {
                  name: e.target.name,
                  value: value,
                },
              });
            }}
            isInvalid={!!formErrors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>
            Country{" "}
            <span
              className="text-danger fw-bolder"
              style={{ fontSize: "20px" }}
            >
              *
            </span>
          </Form.Label>
          <Select
            options={countries}
            isLoading={loadingCountries}
            isClearable
            onChange={handleCountryChange}
            isInvalid={!!formErrors.country}
            placeholder="Select a country"
          />
          {formErrors.country && (
            <div className="invalid-feedback mt-1" style={{ display: "block" }}>
              {formErrors.country}
            </div>
          )}
        </Form.Group>

        <Form.Group controlId="reCaptcha" className="mt-3">
          <ReCAPTCHA
            sitekey="6LdxNigqAAAAAJ6jU9uuhEtrAw-s8J_qnsGCVvj5"
            onChange={handleCaptchaChange}
          />
          {formErrors.reCaptcha && (
            <div className="invalid-feedback " style={{ display: "block" }}>
              {formErrors.reCaptcha}
            </div>
          )}
        </Form.Group>

        <Button
          type="submit"
          className="mt-3 text-center btn-secondary w-100 btn btn-primary"
          disabled={isSubmitting} // Disable while submitting
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
};

export default BroucherPdfForm;
