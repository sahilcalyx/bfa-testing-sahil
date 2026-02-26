import { useState } from "react";
import Select from "react-select";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

function TicketBookingPage() {
  const [isSoldOut] = useState(true); // 🔴 toggle this when sold out

  return (
    <>
      <div className="cs-height_90 cs-height_lg_80" />
      <Helmet>
        <title>Book Brit Awards Tickets</title>
      </Helmet>

      {/* ====== HERO / BANNER SECTION (KEEPING YOUR CODE UNCHANGED) ====== */}
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
                style={{
                  opacity: isSoldOut ? "0.5" : "1",
                  pointerEvents: isSoldOut ? "none" : "auto",
                }}
              >
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    disabled={isSoldOut}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                    disabled={isSoldOut}
                  />
                </div>
                <div className="mb-3">
                  <Select isDisabled={isSoldOut} placeholder="Country Code" />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    disabled={isSoldOut}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    disabled={isSoldOut}
                  />
                </div>
                <div className="mb-3">
                  <Select isDisabled={isSoldOut} placeholder="Tickets" />
                </div>
                <div className="mb-3">
                  <ReCAPTCHA
                    sitekey="6LdxNigqAAAAAJ6jU9uuhEtrAw-s8J_qnsGCVvj5"
                    onChange={() => {}}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-dark w-100"
                  disabled={isSoldOut}
                  style={{
                    cursor: isSoldOut ? "not-allowed" : "pointer",
                    opacity: isSoldOut ? 0.7 : 1,
                    fontWeight: "600",
                  }}
                >
                  {isSoldOut ? "Tickets Sold Out" : "Proceed to Pay"}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Event Info */}
          <div className="col-lg-5">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="fw-bold mb-3">✨ An Evening You Won’t Forget</h3>
              <ul className="list-unstyled" style={{ lineHeight: "1.9", paddingLeft: "10px" }}>
                <li>✅ <strong>Awards Ceremony</strong></li>
                <li>✅ <strong>Buffet Dinner & Drinks</strong></li>
                <li>✅ <strong>Live Startup Pitch</strong></li>
                <li>✅ <strong>Networking with 150+ FinTech pros</strong></li>
                <li>✅ <strong>Return Gifts & More!</strong></li>
              </ul>
              <p className="mt-3 text-muted">
                Join us in celebrating innovation and excellence in FinTech at
                <strong> The Brit FinTech Awards 2025</strong>. See you there!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default TicketBookingPage;
