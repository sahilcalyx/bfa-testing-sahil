"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { validateCoupon, fetchPricing, formatGBP, packValidationResult, FALLBACK_TICKET_PACKS } from "@/lib/paymentApi";

/**
 * Coupon entry for the nomination and ticket booking forms.
 *
 * The payment service is the single source of truth: it prices the order,
 * validates the code and returns the discount. The parent only needs to pass
 * the applied `code` through to the Stripe checkout call, where it is
 * re-validated server-side before any money is charged.
 *
 * Props:
 *   type      "nomination" | "ticket"
 *   quantity  number of award categories, or number of tickets
 *   email     buyer email (used for one-use-per-email coupons)
 *   onApplied called with the coupon result, or null when cleared
 *   disabled  disables the whole control
 */
export default function CouponCodeInput({
  type = "ticket",
  quantity = 1,
  email = "",
  onApplied,
  disabled = false,
  presetCode = "",
  packs = FALLBACK_TICKET_PACKS,
}) {
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState(null);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [pricing, setPricing] = useState(null);

  // Keep the callback in a ref so re-validation effects don't re-run when the
  // parent re-creates its handler on every render.
  const onAppliedRef = useRef(onApplied);
  onAppliedRef.current = onApplied;

  // Order signature of the last successful check, so we only re-price when
  // something that affects the discount actually changed.
  const lastCheckedRef = useRef("");

  useEffect(() => {
    let cancelled = false;
    fetchPricing().then((p) => {
      if (!cancelled) setPricing(p);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const qty = Math.max(1, parseInt(quantity, 10) || 1);
  const unitPrice = pricing ? (type === "nomination" ? pricing.nomination : pricing.ticket) : null;
  const subtotal = unitPrice != null ? unitPrice * qty : null;

  const apply = useCallback(
    async (rawCode, { silent = false, fromPack = false } = {}) => {
      const trimmed = String(rawCode || "").trim().toUpperCase();
      if (!trimmed) {
        setStatus({ state: "error", message: "Please enter a coupon code." });
        return;
      }

      const packCheck = packValidationResult(trimmed, qty, packs);
      const isPackCode = [...FALLBACK_TICKET_PACKS, ...(packs || [])].some(
        (p) => String(p.code).toUpperCase() === trimmed
      );

      if (isPackCode && !fromPack) {
        setApplied(null);
        setStatus({
          state: "error",
          message: "Select this pack from the cards above to apply that rate.",
        });
        onAppliedRef.current?.(null);
        return;
      }

      if (packCheck && !packCheck.valid) {
        if (fromPack) return;
        setApplied(null);
        setStatus({ state: "error", message: packCheck.message });
        onAppliedRef.current?.(null);
        return;
      }

      if (!silent) setStatus({ state: "loading", message: "" });

      if (packCheck?.valid) {
        lastCheckedRef.current = `${trimmed}|${type}|${qty}|${email}`;
        setApplied(packCheck);
        setCode(trimmed);
        setStatus({ state: "success", message: packCheck.message });
        onAppliedRef.current?.(packCheck);
      }

      const result = await validateCoupon({ code: trimmed, type, quantity: qty, email });
      lastCheckedRef.current = `${trimmed}|${type}|${qty}|${email}`;

      if (result.valid) {
        setApplied(result);
        setCode(trimmed);
        setStatus({ state: "success", message: result.message });
        onAppliedRef.current?.(result);
      } else if (!packCheck?.valid) {
        setApplied(null);
        setStatus({ state: "error", message: result.message });
        onAppliedRef.current?.(null);
      }
    },
    [type, qty, email, packs]
  );

  const appliedCode = applied?.code;
  useEffect(() => {
    if (!appliedCode) return;
    const preset = String(presetCode || "").trim().toUpperCase();
    if (preset && preset !== appliedCode) return;
    if (lastCheckedRef.current === `${appliedCode}|${type}|${qty}|${email}`) return;
    const isPackCode = [...FALLBACK_TICKET_PACKS, ...(packs || [])].some(
      (p) => String(p.code).toUpperCase() === appliedCode
    );
    apply(appliedCode, { silent: true, fromPack: isPackCode });
  }, [appliedCode, type, qty, email, apply, presetCode]);

  useEffect(() => {
    const next = String(presetCode || "").trim().toUpperCase();
    if (!next) return;
    if (appliedCode === next && lastCheckedRef.current === `${next}|${type}|${qty}|${email}`) return;
    setCode(next);
    apply(next, { silent: true, fromPack: true });
  }, [presetCode, appliedCode, type, qty, email, apply]);

  const clear = () => {
    setApplied(null);
    setCode("");
    setStatus({ state: "idle", message: "" });
    lastCheckedRef.current = "";
    onAppliedRef.current?.(null);
  };

  const isLoading = status.state === "loading";

  if (applied) {
    return (
      <div style={styles.wrapper}>
        <div style={styles.appliedBox}>
          <div style={styles.appliedHeader}>
            <span style={styles.appliedBadge}>{applied.code}</span>
            <button type="button" onClick={clear} style={styles.removeBtn} disabled={disabled}>
              Remove
            </button>
          </div>
          <div style={styles.summary}>
            <Row label={`Subtotal${qty > 1 ? ` (${qty} × ${formatGBP(applied.baseAmount / qty)})` : ""}`} value={formatGBP(applied.baseAmount)} />
            <Row label="Coupon discount" value={`− ${formatGBP(applied.discount)}`} accent />
            <div style={styles.divider} />
            <Row label="Total to pay" value={applied.finalAmount <= 0 ? "£0 — Free" : formatGBP(applied.finalAmount)} bold />
            {applied.finalAmount <= 0 && (
              <p style={{ margin: "8px 0 0", fontSize: "13px", color: "#1c8a4d", fontWeight: 600 }}>
                This coupon covers the full amount. You will not be charged.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <label style={styles.label}>Have a coupon code?</label>
      <div style={styles.inputRow}>
        <input
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value.toUpperCase());
            if (status.state === "error") setStatus({ state: "idle", message: "" });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              apply(code);
            }
          }}
          placeholder="Enter coupon code"
          disabled={disabled || isLoading}
          style={{
            ...styles.input,
            borderColor: status.state === "error" ? "#e04b4b" : "#ccc",
            background: status.state === "error" ? "#fff6f6" : "#fff",
          }}
        />
        <button
          type="button"
          onClick={() => apply(code)}
          disabled={disabled || isLoading || !code.trim()}
          style={{
            ...styles.applyBtn,
            opacity: disabled || isLoading || !code.trim() ? 0.55 : 1,
            cursor: disabled || isLoading || !code.trim() ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? "Checking…" : "Apply"}
        </button>
      </div>

      {status.state === "error" && <p style={styles.errorText}>{status.message}</p>}

      {status.state !== "error" && subtotal != null && (
        <p style={styles.hintText}>
          Order total: <strong>{formatGBP(subtotal)}</strong>
          {qty > 1 && ` (${qty} × ${formatGBP(unitPrice)})`}
        </p>
      )}
    </div>
  );
}

function Row({ label, value, accent, bold }) {
  return (
    <div style={styles.row}>
      <span style={{ color: bold ? "#111" : "#555", fontWeight: bold ? 700 : 500 }}>{label}</span>
      <span
        style={{
          color: accent ? "#1c8a4d" : "#111",
          fontWeight: bold ? 800 : 600,
          fontSize: bold ? "16px" : "14px",
        }}
      >
        {value}
      </span>
    </div>
  );
}

const styles = {
  wrapper: { width: "100%", margin: "4px 0" },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    color: "#333",
    marginBottom: "8px",
  },
  inputRow: { display: "flex", gap: "10px", flexWrap: "wrap" },
  input: {
    flex: "1 1 180px",
    minWidth: 0,
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    outline: "none",
  },
  applyBtn: {
    padding: "12px 22px",
    borderRadius: "8px",
    border: "none",
    background: "#000",
    color: "#fff",
    fontSize: "14px",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  errorText: { color: "#e04b4b", fontSize: "13px", margin: "8px 0 0" },
  hintText: { color: "#666", fontSize: "13px", margin: "8px 0 0" },
  appliedBox: {
    border: "1px solid #bfe5cd",
    background: "#f4fbf6",
    borderRadius: "10px",
    padding: "16px",
  },
  appliedHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    marginBottom: "12px",
  },
  appliedBadge: {
    background: "#1c8a4d",
    color: "#fff",
    padding: "5px 12px",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: 700,
    fontFamily: "monospace",
    letterSpacing: "1px",
  },
  removeBtn: {
    background: "none",
    border: "none",
    color: "#c0392b",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "underline",
    padding: 0,
  },
  summary: { display: "flex", flexDirection: "column", gap: "7px" },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "14px" },
  divider: { height: "1px", backgroundColor: "#d6eade", margin: "4px 0" },
};
