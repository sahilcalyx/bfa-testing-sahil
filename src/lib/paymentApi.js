import { FALLBACK_TICKET_PACKS, packsForTicketPrice } from "./ticketPacks";

export {
  FALLBACK_TICKET_PACKS,
  FALLBACK_TICKET_UNIT,
  packsForTicketPrice,
} from "./ticketPacks";

/**
 * Base URL of the bfa_ticket_event Stripe/coupon service.
 * Defaults to the local service on port 5000; override with
 * NEXT_PUBLIC_PAYMENT_API_BASE when deploying.
 */
export const PAYMENT_API_BASE = (
  process.env.NEXT_PUBLIC_PAYMENT_API_BASE || "https://bfa-ticket-event.vercel.app"
).replace(/\/$/, "");

export const COUPON_API = `${PAYMENT_API_BASE}/api/coupons`;

export function couponFromPack(pack) {
  if (!pack?.code) return null;
  return {
    valid: true,
    message: `${pack.label || pack.code} pack applied.`,
    code: String(pack.code).toUpperCase(),
    baseAmount: Number(pack.baseAmount) || 0,
    discount: Number(pack.saveAmount) || 0,
    finalAmount: Number(pack.packPrice) || 0,
    discountType: "fixed",
    discountValue: Number(pack.saveAmount) || 0,
    ticketQuantity: Number(pack.ticketQuantity) || 0,
    isBundle: true,
    bundleLabel: pack.label || pack.code,
  };
}

export function resolveCouponForQuantity(code, quantity, packs = FALLBACK_TICKET_PACKS) {
  const qty = Math.max(1, parseInt(quantity, 10) || 1);
  const trimmed = String(code || "").trim().toUpperCase();
  const list = packs?.length ? packs : FALLBACK_TICKET_PACKS;
  const requested =
    list.find((p) => String(p.code).toUpperCase() === trimmed) ||
    FALLBACK_TICKET_PACKS.find((p) => p.code === trimmed);
  if (requested && Number(requested.ticketQuantity) !== qty) {
    const match =
      list.find((p) => Number(p.ticketQuantity) === qty) ||
      FALLBACK_TICKET_PACKS.find((p) => p.ticketQuantity === qty);
    return match?.code || "";
  }
  return trimmed;
}

export function packValidationResult(code, quantity, packs = FALLBACK_TICKET_PACKS) {
  const list = packs?.length ? packs : FALLBACK_TICKET_PACKS;
  const pack =
    list.find((p) => String(p.code).toUpperCase() === String(code || "").trim().toUpperCase()) ||
    FALLBACK_TICKET_PACKS.find((p) => p.code === String(code || "").trim().toUpperCase());
  if (!pack) return null;
  const qty = Math.max(1, parseInt(quantity, 10) || 1);
  if (qty !== Number(pack.ticketQuantity)) {
    const label = pack.label || pack.bundleLabel || pack.code;
    return {
      valid: false,
      message: `The ${label} pack is for ${pack.ticketQuantity} ticket${Number(pack.ticketQuantity) === 1 ? "" : "s"}.`,
      code: pack.code,
      baseAmount: 0,
      discount: 0,
      finalAmount: 0,
    };
  }
  const label = pack.label || pack.bundleLabel || pack.code;
  return {
    valid: true,
    message: `${label} pack applied.`,
    code: pack.code,
    baseAmount: pack.baseAmount,
    discount: pack.saveAmount,
    finalAmount: pack.packPrice,
    discountType: "fixed",
    discountValue: pack.saveAmount,
    ticketQuantity: Number(pack.ticketQuantity),
    isBundle: true,
    bundleLabel: label,
  };
}

/**
 * Asks the payment service to price a coupon against an order.
 * Resolves to { valid, discount, finalAmount, baseAmount, message } and never
 * throws — a network failure is surfaced as an invalid coupon with a message.
 */
export async function validateCoupon({ code, type, quantity, email }) {
  const packCheck = packValidationResult(code, quantity);
  if (packCheck && !packCheck.valid) {
    return packCheck;
  }

  try {
    const res = await fetch(`${COUPON_API}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, type, quantity, email }),
      signal: AbortSignal.timeout(12000),
    });
    const data = await res.json();
    if (data?.valid) {
      return {
        valid: true,
        message: data?.message || "Coupon applied.",
        code: data?.code || String(code || "").toUpperCase(),
        baseAmount: Number(data?.baseAmount) || 0,
        discount: Number(data?.discount) || 0,
        finalAmount: Number(data?.finalAmount) || 0,
        discountType: data?.discountType,
        discountValue: Number(data?.discountValue) || 0,
        ticketQuantity: Number(data?.ticketQuantity) || 0,
        isBundle: Boolean(data?.isBundle) || Boolean(packCheck?.valid),
        bundleLabel: data?.bundleLabel || packCheck?.bundleLabel || "",
      };
    }
    if (packCheck?.valid) return packCheck;
    return {
      valid: false,
      message: data?.message || "This coupon code is not valid.",
      code: data?.code || String(code || "").toUpperCase(),
      baseAmount: Number(data?.baseAmount) || 0,
      discount: Number(data?.discount) || 0,
      finalAmount: Number(data?.finalAmount) || 0,
    };
  } catch {
    return (
      packCheck || {
        valid: false,
        message: "Could not reach the payment service. Please try again.",
        baseAmount: 0,
        discount: 0,
        finalAmount: 0,
      }
    );
  }
}

/**
 * Live unit prices (GBP) set by the admin panel, so the UI never hardcodes them.
 * Returns null on failure — callers should fall back to their own default.
 */
export async function fetchPricing() {
  try {
    const res = await fetch(`${PAYMENT_API_BASE}/api/pricing`, { cache: "no-store" });
    const data = await res.json();
    return data?.pricing || null;
  } catch {
    return null;
  }
}

/** Ticket pack cards (Individual / Duo / Team) managed from the admin coupon page. */
export async function fetchTicketBundles() {
  try {
    const res = await fetch(`${COUPON_API}/bundles`, { cache: "no-store" });
    const data = await res.json();
    const packs = Array.isArray(data?.bundles) ? data.bundles : [];
    const unit = Number(data?.pricing?.ticket) || 0;
    const raw = packs.length ? packs : FALLBACK_TICKET_PACKS;
    return {
      bundles: unit ? packsForTicketPrice(unit, raw) : packsForTicketPrice(undefined, raw),
      pricing: data?.pricing || null,
    };
  } catch {
    return { bundles: FALLBACK_TICKET_PACKS, pricing: null };
  }
}

export const formatGBP = (value) =>
  `£${(Number(value) || 0).toLocaleString("en-GB", {
    minimumFractionDigits: Number.isInteger(Number(value)) ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
