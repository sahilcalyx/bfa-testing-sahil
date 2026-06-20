import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { CheckCircle, ArrowBack } from "@mui/icons-material";
import confetti from "canvas-confetti";

function SuccessPage() {
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

          // Update local status (nomination or ticket booking) if payment was completed successfully
          const metadata = res.data?.metadata;
          const recordId = metadata?.nominationId || metadata?.bookingId || metadata?.id;
          
          if (recordId && res.data?.payment_status === "paid") {
            const isNomination = metadata?.type === "nomination";
            const endpoint = isNomination ? "/api/nomination" : "/api/booking";
            
            axios
              .patch(endpoint, {
                id: recordId,
                paymentStatus: "paid"
              })
              .then(() => {
                console.log(`Payment status marked as paid in local database for ${isNomination ? "nomination" : "booking"}.`);
              })
              .catch((err) => {
                console.error("Failed to mark record as paid in local database:", err);
              });
          }
        })
        .catch((err) => {
          console.error("Failed to fetch session:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  // Run confetti when loaded successfully
  useEffect(() => {
    if (!loading && sessionData && sessionData.payment_status === "paid") {
      // Trigger multiple bursts for premium effect
      const duration = 2.5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [loading, sessionData]);

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
          Verifying your transaction...
        </p>
        <style>{`
          .spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(0,0,0,0.1);
            border-radius: 50%;
            border-top-color: #c8102e;
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
          
          .success-page-container {
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

          .success-page-container::before {
            content: '';
            position: absolute;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(200, 16, 46, 0.04) 0%, transparent 70%);
            top: -100px;
            right: -100px;
            pointer-events: none;
          }

          .success-page-container::after {
            content: '';
            position: absolute;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(200, 16, 46, 0.03) 0%, transparent 70%);
            bottom: -150px;
            left: -150px;
            pointer-events: none;
          }

          .success-card {
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

          .success-icon-wrapper {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 80px;
            background: #e6f4ea;
            border: 1px solid #c2e7cd;
            border-radius: 50%;
            margin-bottom: 2rem;
            box-shadow: 0 4px 12px rgba(22, 163, 74, 0.1);
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.2); }
            70% { box-shadow: 0 0 0 15px rgba(22, 163, 74, 0); }
            100% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0); }
          }

          .success-title {
            font-size: 2.2rem;
            font-weight: 800;
            color: #16a34a;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
          }

          .success-description {
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

          .btn-home {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #c8102e 0%, #a00c25 100%);
            color: #ffffff;
            padding: 14px 32px;
            border-radius: 12px;
            font-size: 1.05rem;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 8px 20px rgba(200, 16, 46, 0.2);
            border: none;
            cursor: pointer;
          }

          .btn-home:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 28px rgba(200, 16, 46, 0.3);
            opacity: 0.95;
          }

          .btn-home:active {
            transform: translateY(0);
          }

          @media (max-width: 600px) {
            .success-card {
              padding: 2.5rem 1.5rem;
            }
            .success-title {
              font-size: 1.8rem;
            }
            .success-description {
              font-size: 0.95rem;
            }
          }
        `}
      </style>

      <div className="success-page-container">
        <div className="success-card">
          <div className="success-icon-wrapper">
            <CheckCircle style={{ fontSize: "42px", color: "#16a34a" }} />
          </div>

          <h1 className="success-title">Payment Successful</h1>
          
          <p className="success-description">
            {isNomination ? (
              "Thank you for your award nomination. A confirmation email has been sent to you. Our team will review your application and be in touch shortly."
            ) : (
              "Thank you for your booking purchase! We have sent a confirmation email. One of our team members will contact you shortly regarding dietary requirements and venue access."
            )}
          </p>

          <div className="receipt-details">
            <h3 className="receipt-heading">Transaction Receipt</h3>
            {sessionData ? (
              <>
                <InfoRow label="Transaction ID" value={sessionData.id ? sessionData.id.slice(0, 24) : "N/A"} />
                <InfoRow label="Client Name" value={sessionData.metadata?.fullName || sessionData.metadata?.companyName || "N/A"} />
                <InfoRow label="Email Address" value={sessionData.customer_email || "N/A"} />
                <InfoRow label="Mobile" value={sessionData.metadata?.phone || "N/A"} />
                
                {isNomination ? (
                  <>
                    <InfoRow label="Company" value={sessionData.metadata?.companyName || "N/A"} />
                    <InfoRow label="Award Category" value={sessionData.metadata?.awardcate || "N/A"} />
                    {sessionData.metadata?.howmanyperson && (
                      <InfoRow label="Attendees" value={sessionData.metadata?.howmanyperson} />
                    )}
                  </>
                ) : (
                  <InfoRow label="Tickets Booked" value={sessionData.metadata?.tickets || "1"} />
                )}

                <InfoRow 
                  label="Amount Paid" 
                  value={sessionData.amount_total ? `£${(sessionData.amount_total / 100).toFixed(2)}` : "N/A"} 
                />
              </>
            ) : (
              <p style={{ color: "rgba(0,0,0,0.4)", margin: 0, textAlign: "center" }}>
                Session details could not be retrieved.
              </p>
            )}
          </div>

          <div>
            <a href="/" className="btn-home">
              <ArrowBack style={{ fontSize: "20px" }} />
              Return to Home
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

export default SuccessPage;
