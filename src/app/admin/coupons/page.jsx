"use client";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  TicketPercent,
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  CheckCircle2,
  XCircle,
  BadgePoundSterling,
  Users,
} from "lucide-react";
import Swal from "sweetalert2";

const EMPTY_FORM = {
  code: "",
  description: "",
  discountType: "percentage",
  discountValue: "",
  appliesTo: "both",
  minAmount: "",
  maxDiscount: "",
  maxRedemptions: "",
  onePerEmail: false,
  startsAt: "",
  expiresAt: "",
  isActive: true,
  ticketQuantity: "",
  isBundle: false,
  bundleLabel: "",
  bundlePrice: "",
};

const APPLIES_LABEL = {
  both: "Nominations & Tickets",
  nomination: "Nominations only",
  ticket: "Tickets only",
};

const toDateInput = (value) => (value ? new Date(value).toISOString().slice(0, 10) : "");

const formatGBP = (value) => `£${(Number(value) || 0).toLocaleString("en-GB")}`;

const card = {
  background: "#fff",
  border: "1px solid #e3e8ee",
  borderRadius: "14px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
};

const label = {
  display: "block",
  fontSize: "12px",
  fontWeight: 700,
  color: "#4f566b",
  marginBottom: "6px",
};

const input = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "8px",
  border: "1px solid #e3e8ee",
  fontSize: "14px",
  color: "#1a1f36",
  outline: "none",
  background: "#fff",
};

export default function CouponsPage() {
  const [coupons, setCoupons] = useState([]);
  const [stats, setStats] = useState(null);
  const [pricing, setPricing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  const [detail, setDetail] = useState(null);

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("/api/admin/coupons");
      if (res.data.response) {
        setCoupons(res.data.data || []);
        setStats(res.data.stats || null);
        setPricing(res.data.pricing || null);
      } else {
        setError(res.data.data || "Failed to load coupons.");
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

  const openCreate = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setFormError("");
    setShowModal(true);
  };

  const openEdit = (coupon) => {
    setEditingId(coupon._id);
    setForm({
      code: coupon.code || "",
      description: coupon.description || "",
      discountType: coupon.discountType || "percentage",
      discountValue: String(coupon.discountValue ?? ""),
      appliesTo: coupon.appliesTo || "both",
      minAmount: coupon.minAmount ? String(coupon.minAmount) : "",
      maxDiscount: coupon.maxDiscount ? String(coupon.maxDiscount) : "",
      maxRedemptions: coupon.maxRedemptions ? String(coupon.maxRedemptions) : "",
      onePerEmail: Boolean(coupon.onePerEmail),
      startsAt: toDateInput(coupon.startsAt),
      expiresAt: toDateInput(coupon.expiresAt),
      isActive: coupon.isActive !== false,
      ticketQuantity: coupon.ticketQuantity ? String(coupon.ticketQuantity) : "",
      isBundle: Boolean(coupon.isBundle),
      bundleLabel: coupon.bundleLabel || "",
      bundlePrice: coupon.bundlePrice ? String(coupon.bundlePrice) : "",
    });
    setFormError("");
    setShowModal(true);
  };

  const setField = (name, value) => setForm((prev) => ({ ...prev, [name]: value }));

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setFormError("");

    const payload = {
      ...form,
      code: form.code.trim().toUpperCase(),
      discountValue: Number(form.discountValue) || 0,
      minAmount: Number(form.minAmount) || 0,
      maxDiscount: Number(form.maxDiscount) || 0,
      maxRedemptions: Number(form.maxRedemptions) || 0,
      startsAt: form.startsAt || null,
      expiresAt: form.expiresAt || null,
      ticketQuantity: Number(form.ticketQuantity) || 0,
      isBundle: Boolean(form.isBundle),
      bundleLabel: form.bundleLabel,
      bundlePrice: Number(form.bundlePrice) || 0,
    };

    try {
      const res = editingId
        ? await axios.put(`/api/admin/coupons/${editingId}`, payload)
        : await axios.post("/api/admin/coupons", payload);

      if (res.data.response) {
        setShowModal(false);
        fetchCoupons();
        Swal.fire({
          title: editingId ? "Coupon updated" : "Coupon created",
          text: `${payload.code} is ready to use.`,
          icon: "success",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2600,
          timerProgressBar: true,
        });
      } else {
        setFormError(res.data.data || "Could not save this coupon.");
      }
    } catch (err) {
      setFormError(err.response?.data?.data || "Could not save this coupon.");
    } finally {
      setSaving(false);
    }
  };

  const handleToggleActive = async (coupon) => {
    try {
      await axios.put(`/api/admin/coupons/${coupon._id}`, {
        code: coupon.code,
        description: coupon.description,
        discountType: coupon.discountType,
        discountValue: coupon.discountValue,
        appliesTo: coupon.appliesTo,
        minAmount: coupon.minAmount,
        maxDiscount: coupon.maxDiscount,
        maxRedemptions: coupon.maxRedemptions,
        onePerEmail: coupon.onePerEmail,
        startsAt: coupon.startsAt,
        expiresAt: coupon.expiresAt,
        isActive: !coupon.isActive,
        ticketQuantity: coupon.ticketQuantity,
        isBundle: coupon.isBundle,
        bundleLabel: coupon.bundleLabel,
        bundlePrice: coupon.bundlePrice,
      });
      fetchCoupons();
    } catch {
      Swal.fire("Error", "Could not update this coupon.", "error");
    }
  };

  const handleDelete = async (coupon) => {
    const result = await Swal.fire({
      title: `Delete ${coupon.code}?`,
      text: "This coupon will be permanently removed and can no longer be redeemed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#635bff",
      cancelButtonColor: "#ff4d4d",
      confirmButtonText: "Yes, delete it",
    });
    if (!result.isConfirmed) return;

    try {
      await axios.delete(`/api/admin/coupons/${coupon._id}`);
      setDetail(null);
      fetchCoupons();
      Swal.fire({
        title: "Deleted",
        text: `${coupon.code} has been removed.`,
        icon: "success",
        confirmButtonColor: "#635bff",
      });
    } catch {
      Swal.fire("Error", "Could not delete this coupon.", "error");
    }
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return coupons;
    return coupons.filter(
      (c) =>
        c.code?.toLowerCase().includes(q) || c.description?.toLowerCase().includes(q)
    );
  }, [coupons, search]);

  const statusOf = (c) => {
    const now = new Date();
    if (!c.isActive) return { text: "Disabled", bg: "#f7f9fc", color: "#697386" };
    if (c.expiresAt && now > new Date(c.expiresAt))
      return { text: "Expired", bg: "#fff5f5", color: "#c53030" };
    if (c.startsAt && now < new Date(c.startsAt))
      return { text: "Scheduled", bg: "#fffaf0", color: "#b7791f" };
    if (c.maxRedemptions > 0 && c.usedCount >= c.maxRedemptions)
      return { text: "Used up", bg: "#fff5f5", color: "#c53030" };
    return { text: "Active", bg: "#f0fff4", color: "#22874e" };
  };

  const discountLabel = (c) => {
    if (c.bundlePrice > 0) return `Pack ${formatGBP(c.bundlePrice)}`;
    return c.discountType === "percentage" ? `${c.discountValue}% off` : `${formatGBP(c.discountValue)} off`;
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "28px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "26px", fontWeight: 800, color: "#1a1f36", margin: 0 }}>
            Coupon Codes
          </h1>
          <p style={{ color: "#697386", fontSize: "14px", margin: "6px 0 0" }}>
            Discounts applied at checkout for award nominations and ticket bookings.
            {pricing && (
              <>
                {" "}Current prices: {formatGBP(pricing.nomination)} per category,{" "}
                {formatGBP(pricing.ticket)} per ticket.
              </>
            )}
          </p>
        </div>
        <button
          onClick={openCreate}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#635bff",
            color: "#fff",
            border: "none",
            padding: "11px 18px",
            borderRadius: "9px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <Plus size={17} /> New Coupon
        </button>
      </div>

      {stats && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {[
            { label: "Total Coupons", value: stats.total, icon: TicketPercent, color: "#635bff" },
            { label: "Active", value: stats.active, icon: CheckCircle2, color: "#22874e" },
            { label: "Times Redeemed", value: stats.totalRedemptions, icon: Users, color: "#b7791f" },
            {
              label: "Total Discount Given",
              value: formatGBP(stats.totalDiscount),
              icon: BadgePoundSterling,
              color: "#c8102e",
            },
          ].map((s) => (
            <div key={s.label} style={{ ...card, padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <s.icon size={17} style={{ color: s.color }} />
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#697386" }}>{s.label}</span>
              </div>
              <div style={{ fontSize: "26px", fontWeight: 800, color: "#1a1f36" }}>{s.value}</div>
            </div>
          ))}
        </div>
      )}

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

      <div style={{ ...card, overflow: "hidden" }}>
        <div style={{ padding: "18px", borderBottom: "1px solid #e3e8ee" }}>
          <div style={{ position: "relative", maxWidth: "360px" }}>
            <Search
              size={16}
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#697386",
              }}
            />
            <input
              placeholder="Search by code or description"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ ...input, paddingLeft: "36px" }}
            />
          </div>
        </div>

        {loading ? (
          <div style={{ padding: "60px", textAlign: "center", color: "#697386" }}>
            Loading coupons…
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ padding: "60px", textAlign: "center", color: "#697386" }}>
            <TicketPercent size={30} style={{ marginBottom: "10px", opacity: 0.5 }} />
            <div style={{ fontSize: "15px", fontWeight: 600, color: "#1a1f36" }}>
              No coupons yet
            </div>
            <div style={{ fontSize: "13px", marginTop: "4px" }}>
              Create one to start offering discounts at checkout.
            </div>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ background: "#f7f9fc" }}>
                  {["Code", "Discount", "Applies to", "Usage", "Valid until", "Status", ""].map(
                    (h) => (
                      <th
                        key={h}
                        style={{
                          textAlign: "left",
                          padding: "12px 18px",
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#697386",
                          textTransform: "uppercase",
                          letterSpacing: "0.4px",
                          borderBottom: "1px solid #e3e8ee",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => {
                  const status = statusOf(c);
                  return (
                    <tr key={c._id} style={{ borderBottom: "1px solid #f0f3f7" }}>
                      <td style={{ padding: "14px 18px" }}>
                        <button
                          onClick={() => setDetail(c)}
                          style={{
                            background: "none",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                            textAlign: "left",
                          }}
                        >
                          <div
                            style={{
                              fontWeight: 800,
                              color: "#635bff",
                              fontFamily: "monospace",
                              fontSize: "14px",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {c.code}
                          </div>
                          {c.description && (
                            <div style={{ fontSize: "12px", color: "#697386", marginTop: "2px" }}>
                              {c.description}
                            </div>
                          )}
                        </button>
                      </td>
                      <td style={{ padding: "14px 18px", fontWeight: 600, color: "#1a1f36" }}>
                        {discountLabel(c)}
                        {c.maxDiscount > 0 && c.discountType === "percentage" && (
                          <div style={{ fontSize: "11px", color: "#697386", fontWeight: 500 }}>
                            max {formatGBP(c.maxDiscount)}
                          </div>
                        )}
                      </td>
                      <td style={{ padding: "14px 18px", color: "#4f566b" }}>
                        {APPLIES_LABEL[c.appliesTo]}
                        {c.ticketQuantity > 0 && (
                          <div style={{ fontSize: "11px", color: "#635bff", fontWeight: 600, marginTop: "2px" }}>
                            {c.ticketQuantity} ticket{c.ticketQuantity === 1 ? "" : "s"} only
                            {c.isBundle ? ` · ${c.bundleLabel || "pack"}` : ""}
                          </div>
                        )}
                      </td>
                      <td style={{ padding: "14px 18px", color: "#4f566b" }}>
                        {c.usedCount || 0}
                        {c.maxRedemptions > 0 ? ` / ${c.maxRedemptions}` : " / ∞"}
                      </td>
                      <td style={{ padding: "14px 18px", color: "#4f566b", whiteSpace: "nowrap" }}>
                        {c.expiresAt
                          ? new Date(c.expiresAt).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })
                          : "No expiry"}
                      </td>
                      <td style={{ padding: "14px 18px" }}>
                        <span
                          style={{
                            background: status.bg,
                            color: status.color,
                            padding: "4px 10px",
                            borderRadius: "999px",
                            fontSize: "11px",
                            fontWeight: 700,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {status.text}
                        </span>
                      </td>
                      <td style={{ padding: "14px 18px" }}>
                        <div style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                          <IconButton
                            title={c.isActive ? "Disable" : "Enable"}
                            onClick={() => handleToggleActive(c)}
                          >
                            {c.isActive ? <XCircle size={15} /> : <CheckCircle2 size={15} />}
                          </IconButton>
                          <IconButton title="Edit" onClick={() => openEdit(c)}>
                            <Pencil size={15} />
                          </IconButton>
                          <IconButton title="Delete" danger onClick={() => handleDelete(c)}>
                            <Trash2 size={15} />
                          </IconButton>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showModal && (
        <Modal
          title={editingId ? "Edit Coupon" : "Create Coupon"}
          onClose={() => setShowModal(false)}
        >
          <form onSubmit={handleSave}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={label}>Coupon code</label>
                <input
                  value={form.code}
                  onChange={(e) => setField("code", e.target.value.toUpperCase())}
                  placeholder="EARLYBIRD20"
                  required
                  style={{ ...input, fontFamily: "monospace", letterSpacing: "1px", fontWeight: 700 }}
                />
                <p style={{ fontSize: "11px", color: "#697386", margin: "5px 0 0" }}>
                  3–32 characters. Letters, numbers, hyphens and underscores only.
                </p>
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label style={label}>Description (internal)</label>
                <input
                  value={form.description}
                  onChange={(e) => setField("description", e.target.value)}
                  placeholder="Partner discount for September campaign"
                  style={input}
                />
              </div>

              <div>
                <label style={label}>Discount type</label>
                <select
                  value={form.discountType}
                  onChange={(e) => setField("discountType", e.target.value)}
                  style={input}
                >
                  <option value="percentage">Percentage (%)</option>
                  <option value="fixed">Fixed amount (£)</option>
                </select>
              </div>

              <div>
                <label style={label}>
                  {form.discountType === "percentage" ? "Percentage off" : "Amount off (£)"}
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  max={form.discountType === "percentage" ? 100 : undefined}
                  value={form.discountValue}
                  onChange={(e) => setField("discountValue", e.target.value)}
                  placeholder={form.discountType === "percentage" ? "20" : "50"}
                  required
                  style={input}
                />
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label style={label}>Applies to</label>
                <select
                  value={form.appliesTo}
                  onChange={(e) => setField("appliesTo", e.target.value)}
                  style={input}
                >
                  <option value="both">Nominations &amp; Tickets</option>
                  <option value="nomination">Award nominations only</option>
                  <option value="ticket">Ticket bookings only</option>
                </select>
              </div>

              <div>
                <label style={label}>Lock to ticket count</label>
                <input
                  type="number"
                  min="0"
                  value={form.ticketQuantity}
                  onChange={(e) => setField("ticketQuantity", e.target.value)}
                  placeholder="0 = any quantity"
                  style={input}
                />
                <p style={{ fontSize: "11px", color: "#697386", margin: "5px 0 0" }}>
                  Duo = 2, Team of 5 = 5. Other quantities are rejected.
                </p>
              </div>

              <div>
                <label style={label}>Pack price (£)</label>
                <input
                  type="number"
                  min="0"
                  value={form.bundlePrice}
                  onChange={(e) => setField("bundlePrice", e.target.value)}
                  placeholder="Auto from ticket price − save"
                  style={input}
                />
                <p style={{ fontSize: "11px", color: "#697386", margin: "5px 0 0" }}>
                  Ticket packs use Amount off as the save. Pack price follows the live ticket rate.
                </p>
              </div>

              <div>
                <label style={label}>Pack label</label>
                <input
                  value={form.bundleLabel}
                  onChange={(e) => setField("bundleLabel", e.target.value.toUpperCase())}
                  placeholder="DUO / TEAM / INDIVIDUAL"
                  style={input}
                />
              </div>

              <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: "4px" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "13px",
                    color: "#4f566b",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={form.isBundle}
                    onChange={(e) => {
                      setField("isBundle", e.target.checked);
                      if (e.target.checked && form.appliesTo === "nomination") {
                        setField("appliesTo", "ticket");
                      }
                    }}
                  />
                  Show as a pack card on the ticket booking page
                </label>
              </div>

              <div>
                <label style={label}>Minimum order (£)</label>
                <input
                  type="number"
                  min="0"
                  value={form.minAmount}
                  onChange={(e) => setField("minAmount", e.target.value)}
                  placeholder="0 = no minimum"
                  style={input}
                />
              </div>

              <div>
                <label style={label}>Max discount (£)</label>
                <input
                  type="number"
                  min="0"
                  value={form.maxDiscount}
                  onChange={(e) => setField("maxDiscount", e.target.value)}
                  placeholder="0 = uncapped"
                  disabled={form.discountType === "fixed"}
                  style={{
                    ...input,
                    background: form.discountType === "fixed" ? "#f7f9fc" : "#fff",
                  }}
                />
              </div>

              <div>
                <label style={label}>Starts on</label>
                <input
                  type="date"
                  value={form.startsAt}
                  onChange={(e) => setField("startsAt", e.target.value)}
                  style={input}
                />
              </div>

              <div>
                <label style={label}>Expires on</label>
                <input
                  type="date"
                  value={form.expiresAt}
                  onChange={(e) => setField("expiresAt", e.target.value)}
                  style={input}
                />
              </div>

              <div>
                <label style={label}>Total redemption limit</label>
                <input
                  type="number"
                  min="0"
                  value={form.maxRedemptions}
                  onChange={(e) => setField("maxRedemptions", e.target.value)}
                  placeholder="0 = unlimited"
                  style={input}
                />
              </div>

              <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: "4px" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "13px",
                    color: "#4f566b",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={form.onePerEmail}
                    onChange={(e) => setField("onePerEmail", e.target.checked)}
                  />
                  One use per email address
                </label>
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "13px",
                    color: "#4f566b",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={form.isActive}
                    onChange={(e) => setField("isActive", e.target.checked)}
                  />
                  Coupon is active and can be redeemed
                </label>
              </div>
            </div>

            {formError && (
              <div
                style={{
                  marginTop: "16px",
                  background: "#fff5f5",
                  border: "1px solid #ffe3e3",
                  color: "#c53030",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  fontSize: "13px",
                }}
              >
                {formError}
              </div>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                marginTop: "24px",
              }}
            >
              <button
                type="button"
                onClick={() => setShowModal(false)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "9px",
                  border: "1px solid #e3e8ee",
                  background: "#fff",
                  color: "#4f566b",
                  fontWeight: 600,
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                style={{
                  padding: "10px 20px",
                  borderRadius: "9px",
                  border: "none",
                  background: "#635bff",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "14px",
                  cursor: saving ? "not-allowed" : "pointer",
                  opacity: saving ? 0.7 : 1,
                }}
              >
                {saving ? "Saving…" : editingId ? "Save changes" : "Create coupon"}
              </button>
            </div>
          </form>
        </Modal>
      )}

      {detail && (
        <Modal title={`Coupon ${detail.code}`} onClose={() => setDetail(null)}>
          <div style={{ fontSize: "14px", color: "#4f566b", lineHeight: 1.7 }}>
            <p style={{ margin: "0 0 14px" }}>
              {discountLabel(detail)} · {APPLIES_LABEL[detail.appliesTo]} · redeemed{" "}
              {detail.usedCount || 0} time{detail.usedCount === 1 ? "" : "s"}
            </p>
            {(detail.redemptions || []).length === 0 ? (
              <p style={{ color: "#697386", margin: 0 }}>No redemptions recorded yet.</p>
            ) : (
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                  <tr style={{ background: "#f7f9fc" }}>
                    {["Email", "Type", "Paid", "Saved", "Date"].map((h) => (
                      <th
                        key={h}
                        style={{
                          textAlign: "left",
                          padding: "9px 12px",
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#697386",
                          textTransform: "uppercase",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {detail.redemptions.map((r, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #f0f3f7" }}>
                      <td style={{ padding: "9px 12px" }}>{r.email || "—"}</td>
                      <td style={{ padding: "9px 12px", textTransform: "capitalize" }}>{r.type}</td>
                      <td style={{ padding: "9px 12px" }}>{formatGBP(r.finalAmount)}</td>
                      <td style={{ padding: "9px 12px", color: "#22874e", fontWeight: 600 }}>
                        {formatGBP(r.discount)}
                      </td>
                      <td style={{ padding: "9px 12px" }}>
                        {r.redeemedAt ? new Date(r.redeemedAt).toLocaleDateString("en-GB") : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}

function IconButton({ children, onClick, title, danger }) {
  return (
    <button
      title={title}
      onClick={onClick}
      style={{
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "7px",
        border: `1px solid ${danger ? "#ffe3e3" : "#e3e8ee"}`,
        background: danger ? "#fff5f5" : "#fff",
        color: danger ? "#c53030" : "#4f566b",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(26,31,54,0.45)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "40px 20px",
        overflowY: "auto",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "640px",
          padding: "26px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ fontSize: "18px", fontWeight: 800, color: "#1a1f36", margin: 0 }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "#f7f9fc",
              border: "1px solid #e3e8ee",
              borderRadius: "7px",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#4f566b",
            }}
          >
            <X size={16} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
