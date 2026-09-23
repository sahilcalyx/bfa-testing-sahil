import { FALLBACK_TICKET_PACKS, FALLBACK_TICKET_UNIT, packsForTicketPrice } from "./ticketPacks";

const SERVICE_BASE = (
  process.env.PAYMENT_API_BASE ||
  process.env.NEXT_PUBLIC_PAYMENT_API_BASE ||
  "https://bfa-ticket-event.vercel.app"
).replace(/\/$/, "");

const FALLBACK = { ticket: FALLBACK_TICKET_UNIT, nomination: 395 };

/** Used when the payment API is down so packs still use the designed save amounts. */
export const FALLBACK_PACKS = FALLBACK_TICKET_PACKS;

export function packForTicketCount(packs, quantity) {
  const qty = Number(quantity) || 0;
  const list = packs?.length ? packs : FALLBACK_PACKS;
  return list.find((b) => Number(b.ticketQuantity) === qty) || null;
}

/** Live GBP prices from the payment service (admin Pricing page). */
export async function fetchLivePricing() {
  try {
    const res = await fetch(`${SERVICE_BASE}/api/pricing`, { cache: "no-store" });
    const data = await res.json();
    if (data?.pricing?.ticket != null && data?.pricing?.nomination != null) {
      return data.pricing;
    }
  } catch (err) {
    console.error("Could not load live pricing:", err.message);
  }
  return { ...FALLBACK };
}

/**
 * Quotes a ticket or nomination order at the live price, applying a coupon
 * when one is supplied. Used when saving a form so the admin panel stores
 * the amount that was actually quoted — not a hardcoded £195.
 */
export async function fetchTicketBundlesServer() {
  try {
    const res = await fetch(`${SERVICE_BASE}/api/coupons/bundles`, { cache: "no-store" });
    const data = await res.json();
    const packs = Array.isArray(data?.bundles) && data.bundles.length
      ? data.bundles
      : FALLBACK_PACKS;
    const unit = Number(data?.pricing?.ticket) || FALLBACK_TICKET_UNIT;
    return packsForTicketPrice(unit, packs);
  } catch (err) {
    console.error("Could not load ticket packs:", err.message);
    return FALLBACK_PACKS;
  }
}

export async function quoteOrder({ type = "ticket", quantity = 1, email = "", couponCode = "" }) {
  const pricing = await fetchLivePricing();
  const qty = Math.max(1, parseInt(quantity, 10) || 1);
  const unitPrice = type === "nomination" ? Number(pricing.nomination) : Number(pricing.ticket);
  const baseAmount = unitPrice * qty;
  let code = String(couponCode || "").trim();

  // If the form did not send a code, still apply the pack that matches this ticket count
  const pricedPacks = type === "ticket"
    ? packsForTicketPrice(unitPrice, await fetchTicketBundlesServer())
    : [];
  const pack = type === "ticket" ? packForTicketCount(pricedPacks, qty) : null;
  if (!code && pack?.code) code = pack.code;

  const requestedPack = FALLBACK_PACKS.find((p) => p.code === String(code).trim().toUpperCase());
  if (requestedPack && requestedPack.ticketQuantity !== qty) {
    code = pack?.code || "";
  }

  if (code) {
    try {
      const res = await fetch(`${SERVICE_BASE}/api/coupons/validate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, type, quantity: qty, email }),
      });
      const data = await res.json();
      if (data?.valid) {
        const matchedPack =
          pack && String(pack.code).toUpperCase() === String(data.code || code).toUpperCase()
            ? pack
            : null;
        return {
          unitPrice,
          baseAmount: matchedPack ? matchedPack.baseAmount : Number(data.baseAmount) || baseAmount,
          discount: matchedPack ? matchedPack.saveAmount : Number(data.discount) || 0,
          amount: matchedPack ? matchedPack.packPrice : Number(data.finalAmount) || 0,
          couponCode: data.code || code.toUpperCase(),
        };
      }
    } catch (err) {
      console.error("Could not validate coupon while quoting:", err.message);
    }
  }

  if (pack) {
    return {
      unitPrice,
      baseAmount,
      discount: Number(pack.saveAmount) || Math.max(0, baseAmount - Number(pack.packPrice)),
      amount: Number(pack.packPrice),
      couponCode: pack.code || "",
    };
  }

  return {
    unitPrice,
    baseAmount,
    discount: 0,
    amount: baseAmount,
    couponCode: "",
  };
}
