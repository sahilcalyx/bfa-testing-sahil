import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Cancel } from "@mui/icons-material";

function CancelPage() {
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
      <div style={{ textAlign: "center", marginTop: "200px", color: "#dc2626" }}>
        Loading session details...
      </div>
    );
  }

  return (
    <>
      <style>
        {`
          @media (max-width: 600px) {
            .cancel-card {
              padding: 1.5rem !important;
              margin: 1rem !important;
            }
            .cancel-title {
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
          className="cancel-card"
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
              className="cancel-title"
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#dc2626", // Tailwind red-600
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Cancel style={{ fontSize: "32px", color: "#dc2626" }} />
              Payment Cancelled
            </h1>
            <p style={{ fontSize: "1rem", color: "#555" }}>
              Your payment was not completed. Please try again or contact support if needed.
            </p>
          </div>

          <div style={{ marginTop: "2rem", textAlign: "left" }}>
            <InfoRow label="Session ID" value={sessionData.id.slice(0, 22)} />
            <InfoRow label="Name" value={sessionData.metadata?.fullName || "N/A"} />
            <InfoRow label="Email" value={sessionData.customer_email || "N/A"} />
            <InfoRow label="Phone" value={sessionData.metadata?.phone || "N/A"} />
            <InfoRow label="Tickets Attempted" value={sessionData.metadata?.tickets || "N/A"} />
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <a
              href="/"
              style={{
                display: "inline-block",
                backgroundColor: "#dc2626",
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

export default CancelPage;
