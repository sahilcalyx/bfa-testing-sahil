import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { CheckCircle } from "@mui/icons-material";

function SuccessPage() {
  const [params] = useSearchParams();
  const [sessionData, setSessionData] = useState(null);
  const sessionId = params.get("session_id");

  useEffect(() => {
    if (sessionId) {
      axios
        .get(`https://bfa-ticket-event.vercel.app/checkout-session?session_id=${sessionId}`)
        .then((res) => setSessionData(res.data))
        .catch((err) => console.error("Failed to fetch session:", err));
    }
  }, [sessionId]);

  if (!sessionData) {
    return (
      <div style={{ textAlign: "center", marginTop: "200px", color: "#333" }}>
        Loading payment details...
      </div>
    );
  }

  return (
    <>
      <style>
        {`
          @media (max-width: 600px) {
            .success-card {
              padding: 1.5rem !important;
              margin: 1rem !important;
            }
            .success-title {
              font-size: 1.8rem !important;
            }
          }
        `}
      </style>

      <div
        style={{
          minHeight: "150vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f9fafb",
          padding: "2rem",
        }}
      >
        <div
          className="success-card"
          style={{
            width: "100%",
            maxWidth: "600px",
            padding: "3rem",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: "1.5rem" }}>
            <h1
              className="success-title"
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#16a34a", // Tailwind green-600
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <CheckCircle style={{ fontSize: "32px", color: "#16a34a" }} />
              Payment Successful!
            </h1>
            <p style={{ fontSize: "1rem", color: "#555" }}>
               Thank you for your payment. Please find below the payment details. We have sent you an email to confirm the purchase. One of our team member will be in touch with you shortly to discuss dietary requirements and access to the venue.
            </p>
          </div>

          <div style={{ marginTop: "2rem", textAlign: "left" }}>
            <InfoRow label="Transaction ID" value={sessionData.id.slice(0, 22)} />
            <InfoRow label="Name" value={sessionData.metadata.fullName} />
            <InfoRow label="Email" value={sessionData.customer_email} />
            <InfoRow label="Phone" value={sessionData.metadata.phone} />
            <InfoRow label="Tickets Booked" value={sessionData.metadata.tickets} />
            <InfoRow
              label="Amount Paid"
              value={`£${(sessionData.amount_total / 100).toFixed(2)}`}
            />
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <a
              href="/"
              style={{
                display: "inline-block",
                backgroundColor: "#c8102e",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                textDecoration: "none",
                transition: "0.2s ease",
              }}
              onMouseOver={(e) => (e.target.style.opacity = "0.9")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            >
              ⬅ Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function InfoRow({ label, value }) {
  return (
    <div
      style={{
        marginBottom: "0.8rem",
        paddingBottom: "0.5rem",
        borderBottom: "1px dashed #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "1rem",
        color: "#374151",
      }}
    >
      <strong>{label}</strong>
      <span style={{ fontWeight: "500" }}>{value}</span>
    </div>
  );
}

export default SuccessPage;
