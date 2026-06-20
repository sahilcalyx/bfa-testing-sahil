import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Cancel, ArrowBack } from "@mui/icons-material";

function CancelPage() {
  const [params] = useSearchParams();
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const sessionId = params.get("session_id");

  useEffect(() => {
    if (sessionId) {
      const PAYMENT_API_BASE = (window.location.hostname.includes("britfintechawards.com") || window.location.hostname.includes("vercel.app")) ? "https://bfa-ticket-event.vercel.app" : "https://bfa-ticket-event.vercel.app";
      axios
        .get(`${PAYMENT_API_BASE}/checkout-session?session_id=${sessionId}`)
        .then((res) => {
          setSessionData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch session:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        backgroundColor: "#f9fafb",
        color: "#1f2937",
        fontFamily: "'Outfit', sans-serif"
      }}>
        <div className="spinner" />
        <p style={{ marginTop: "20px", fontSize: "1.2rem", fontWeight: "500", letterSpacing: "0.05em" }}>
          Loading session details...
        </p>
        <style>{`
          .spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(0,0,0,0.1);
            border-radius: 50%;
            border-top-color: #ef4444;
            animation: spin 1s ease-in-out infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  const isNomination = sessionData?.metadata?.type === "nomination";

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
          
          .cancel-page-container {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: radial-gradient(circle at 50% 50%, #f9fafb 0%, #f3f4f6 100%);
            font-family: 'Outfit', 'Segoe UI', sans-serif;
            padding: 6rem 1.5rem;
            color: #1f2937;
            position: relative;
            overflow: hidden;
          }

          .cancel-page-container::before {
            content: '';
            position: absolute;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(200, 16, 46, 0.04) 0%, transparent 70%);
            top: -100px;
            right: -100px;
            pointer-events: none;
          }

          .cancel-page-container::after {
            content: '';
            position: absolute;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(200, 16, 46, 0.03) 0%, transparent 70%);
            bottom: -150px;
            left: -150px;
            pointer-events: none;
          }

          .cancel-card {
            width: 100%;
            max-width: 650px;
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.06);
            border-radius: 24px;
            padding: 3.5rem 2.5rem;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02);
            text-align: center;
            animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            position: relative;
            z-index: 2;
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .cancel-icon-wrapper {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 80px;
            background: #fde8e8;
            border: 1px solid #f8b4b4;
            border-radius: 50%;
            margin-bottom: 2rem;
            box-shadow: 0 4px 12px rgba(220, 38, 38, 0.1);
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.2); }
            70% { box-shadow: 0 0 0 15px rgba(220, 38, 38, 0); }
            100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
          }

          .cancel-title {
            font-size: 2.2rem;
            font-weight: 800;
            color: #ef4444;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
          }

          .cancel-description {
            font-size: 1.05rem;
            color: #4b5563;
            line-height: 1.6;
            margin-bottom: 2.5rem;
            font-weight: 400;
          }

          .receipt-details {
            background: #f9fafb;
            border: 1px solid #f3f4f6;
            border-radius: 16px;
            padding: 1.8rem;
            margin-bottom: 2.5rem;
            text-align: left;
          }

          .receipt-heading {
            font-size: 1.1rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #9ca3af;
            margin-bottom: 1.2rem;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 0.6rem;
          }

          .info-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.8rem 0;
            border-bottom: 1px dashed #e5e7eb;
            font-size: 0.95rem;
          }

          .info-row:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }

          .info-label {
            color: #6b7280;
            font-weight: 500;
          }

          .info-value {
            color: #111827;
            font-weight: 600;
            text-align: right;
          }

          .buttons-container {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
          }

          .btn-home {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #f3f4f6;
            color: #4b5563;
            padding: 14px 28px;
            border-radius: 12px;
            font-size: 1.05rem;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            border: 1px solid #e5e7eb;
            cursor: pointer;
          }

          .btn-home:hover {
            transform: translateY(-2px);
            background: #e5e7eb;
            color: #1f2937;
          }

          .btn-retry {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #c8102e 0%, #a00c25 100%);
            color: #ffffff;
            padding: 14px 28px;
            border-radius: 12px;
            font-size: 1.05rem;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 8px 20px rgba(200, 16, 46, 0.2);
            border: none;
            cursor: pointer;
          }

          .btn-retry:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 28px rgba(200, 16, 46, 0.3);
            opacity: 0.95;
          }

          @media (max-width: 600px) {
            .cancel-card {
              padding: 2.5rem 1.5rem;
            }
            .cancel-title {
              font-size: 1.8rem;
            }
            .cancel-description {
              font-size: 0.95rem;
            }
            .buttons-container {
              flex-direction: column;
            }
            .btn-home, .btn-retry {
              width: 100%;
              justify-content: center;
            }
          }
        `}
      </style>

      <div className="cancel-page-container">
        <div className="cancel-card">
          <div className="cancel-icon-wrapper">
            <Cancel style={{ fontSize: "42px", color: "#ef4444" }} />
          </div>

          <h1 className="cancel-title">Payment Cancelled</h1>
          
          <p className="cancel-description">
            Your transaction was not completed. If you encountered any issues during checkout, please try again. If you continue to experience problems, feel free to contact our support team.
          </p>

          <div className="receipt-details">
            <h3 className="receipt-heading">Attempt Details</h3>
            {sessionData ? (
              <>
                <InfoRow label="Session ID" value={sessionData.id ? sessionData.id.slice(0, 24) : "N/A"} />
                <InfoRow label="Client Name" value={sessionData.metadata?.fullName || sessionData.metadata?.companyName || "N/A"} />
                <InfoRow label="Email Address" value={sessionData.customer_email || "N/A"} />
                <InfoRow label="Mobile" value={sessionData.metadata?.phone || "N/A"} />
                
                {isNomination ? (
                  <>
                    <InfoRow label="Company" value={sessionData.metadata?.companyName || "N/A"} />
                    <InfoRow label="Award Category" value={sessionData.metadata?.awardcate || "N/A"} />
                  </>
                ) : (
                  <InfoRow label="Tickets Attempted" value={sessionData.metadata?.tickets || "1"} />
                )}
              </>
            ) : (
              <p style={{ color: "rgba(0,0,0,0.4)", margin: 0, textAlign: "center" }}>
                Session transaction ended without processing payment.
              </p>
            )}
          </div>

          <div className="buttons-container">
            <a href="/" className="btn-home">
              <ArrowBack style={{ fontSize: "20px" }} />
              Return to Home
            </a>
            <a href={isNomination ? "/nominate-now" : "/ticket-booking"} className="btn-retry">
              Try Registering Again
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="info-row">
      <span className="info-label">{label}</span>
      <span className="info-value">{value}</span>
    </div>
  );
}

export default CancelPage;
