"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Ticket, Award, Info } from "lucide-react";
import Swal from "sweetalert2";

const card = {
  background: "#fff",
  border: "1px solid #e3e8ee",
  borderRadius: "14px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
};

export default function PricingPage() {
  const [ticket, setTicket] = useState("");
  const [nomination, setNomination] = useState("");
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPricing();
  }, []);

  const fetchPricing = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("/api/admin/pricing");
      if (res.data.response) {
        const doc = res.data.data;
        setCurrent(doc);
        setTicket(String(doc.ticket));
        setNomination(String(doc.nomination));
      } else {
        setError(res.data.data || "Failed to load pricing.");
      }
    } catch (err) {
      setError(
        err.response?.data?.data ||
          "Could not reach the payment service. Start it with `npm run dev` inside bfa_ticket_event."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const res = await axios.put("/api/admin/pricing", {
        ticket: Number(ticket),
        nomination: Number(nomination),
      });

      if (res.data.response) {
        setCurrent(res.data.data);
        Swal.fire({
          title: "Pricing updated",
          html: `Tickets are now <strong>£${res.data.data.ticket}</strong> each and nominations <strong>£${res.data.data.nomination}</strong> per category.`,
          icon: "success",
          confirmButtonColor: "#635bff",
        });
      } else {
        setError(res.data.data || "Could not save pricing.");
      }
    } catch (err) {
      setError(err.response?.data?.data || "Could not save pricing.");
    } finally {
      setSaving(false);
    }
  };

  const dirty =
    current && (Number(ticket) !== current.ticket || Number(nomination) !== current.nomination);

  return (
    <div>
      <style>{`
        .admin-price-input {
          width: 100%;
          height: 52px;
          padding: 0 14px 0 42px;
          border-radius: 10px;
          border: 1px solid #d6dbe3;
          background: #ffffff !important;
          color: #1a1f36 !important;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 0.2px;
          outline: none;
          box-shadow: none;
          color-scheme: light;
          -webkit-text-fill-color: #1a1f36;
          caret-color: #1a1f36;
        }
        .admin-price-input:focus {
          border-color: #635bff !important;
          box-shadow: 0 0 0 3px rgba(99, 91, 255, 0.15);
          background: #ffffff !important;
          color: #1a1f36 !important;
        }
        .admin-price-input.changed {
          border-color: #635bff !important;
          background: #f8f7ff !important;
        }
        .admin-price-input::-webkit-outer-spin-button,
        .admin-price-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .admin-price-input[type=number] {
          -moz-appearance: textfield;
          appearance: textfield;
        }
      `}</style>
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontSize: "26px", fontWeight: 800, color: "#1a1f36", margin: 0 }}>Pricing</h1>
        <p style={{ color: "#697386", fontSize: "14px", margin: "6px 0 0" }}>
          These prices drive the booking and nomination forms, the coupon calculations and the
          amount charged at Stripe checkout.
        </p>
      </div>

      {error && (
        <div
          style={{
            ...card,
            borderColor: "#ffe3e3",
            background: "#fff5f5",
            color: "#c53030",
            padding: "16px 18px",
            marginBottom: "20px",
            fontSize: "14px",
          }}
        >
          {error}
        </div>
      )}

      {loading ? (
        <div style={{ ...card, padding: "60px", textAlign: "center", color: "#697386" }}>
          Loading pricing…
        </div>
      ) : (
        <form onSubmit={handleSave} style={{ ...card, padding: "28px", maxWidth: "720px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "22px",
            }}
          >
            <PriceField
              icon={Ticket}
              label="Ticket price"
              hint="Charged per ticket booked"
              value={ticket}
              onChange={setTicket}
              currentValue={current?.ticket}
            />
            <PriceField
              icon={Award}
              label="Nomination price"
              hint="Charged per award category entered"
              value={nomination}
              onChange={setNomination}
              currentValue={current?.nomination}
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
              background: "#f7f9fc",
              border: "1px solid #e3e8ee",
              borderRadius: "10px",
              padding: "14px 16px",
              margin: "24px 0",
              fontSize: "13px",
              color: "#4f566b",
              lineHeight: 1.6,
            }}
          >
            <Info size={16} style={{ color: "#635bff", flexShrink: 0, marginTop: "2px" }} />
            <div>
              Changes take effect immediately for new checkouts. Customers already on a Stripe
              payment page keep the price they were quoted. Percentage coupons automatically
              recalculate against the new price.
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            <button
              type="submit"
              disabled={saving || !dirty}
              style={{
                padding: "11px 22px",
                borderRadius: "9px",
                border: "none",
                background: "#635bff",
                color: "#fff",
                fontWeight: 600,
                fontSize: "14px",
                cursor: saving || !dirty ? "not-allowed" : "pointer",
                opacity: saving || !dirty ? 0.55 : 1,
              }}
            >
              {saving ? "Saving…" : "Save pricing"}
            </button>

            {dirty && !saving && (
              <button
                type="button"
                onClick={() => {
                  setTicket(String(current.ticket));
                  setNomination(String(current.nomination));
                }}
                style={{
                  padding: "11px 18px",
                  borderRadius: "9px",
                  border: "1px solid #e3e8ee",
                  background: "#fff",
                  color: "#4f566b",
                  fontWeight: 600,
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Reset
              </button>
            )}

            {current?.updatedAt && (
              <span style={{ fontSize: "12px", color: "#697386" }}>
                Last updated {new Date(current.updatedAt).toLocaleString("en-GB")}
                {current.updatedBy ? ` by ${current.updatedBy}` : ""}
              </span>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

function PriceField({ icon: Icon, label, hint, value, onChange, currentValue }) {
  const changed = currentValue != null && Number(value) !== currentValue;
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
        <Icon size={16} style={{ color: "#635bff" }} />
        <label style={{ fontSize: "13px", fontWeight: 700, color: "#1a1f36" }}>{label}</label>
      </div>
      <div style={{ position: "relative" }}>
        <span
          style={{
            position: "absolute",
            left: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#697386",
            fontSize: "18px",
            fontWeight: 700,
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          £
        </span>
        <input
          className={`admin-price-input${changed ? " changed" : ""}`}
          type="number"
          min="1"
          step="1"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      </div>
      <p style={{ fontSize: "12px", color: "#697386", margin: "6px 0 0" }}>
        {hint}
        {changed && currentValue != null && (
          <span style={{ color: "#635bff", fontWeight: 600 }}> · was £{currentValue}</span>
        )}
      </p>
    </div>
  );
}
