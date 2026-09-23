/** Fallback unit price when the admin Pricing page cannot be reached. */
export const FALLBACK_TICKET_UNIT = 395;

/**
 * Same £ save as when the ticket was £295. These stay fixed so a later
 * admin price change (295 → 395) does not invent a discount on Individual
 * or inflate Duo / Team savings.
 */
export const DESIGNED_PACK_SAVES = {
  INDIVIDUAL: 0,
  DUO: 170,
  TEAM3: 255,
  TEAM5: 425,
  TEAM10: 850,
};

const PACK_META = [
  { code: "INDIVIDUAL", label: "INDIVIDUAL", ticketQuantity: 1 },
  { code: "DUO", label: "DUO", ticketQuantity: 2 },
  { code: "TEAM3", label: "TEAM", ticketQuantity: 3 },
  { code: "TEAM5", label: "TEAM", ticketQuantity: 5 },
  { code: "TEAM10", label: "TEAM", ticketQuantity: 10 },
];

export function saveForPackCode(code, fallbackSave = 0) {
  const key = String(code || "").toUpperCase();
  return Object.prototype.hasOwnProperty.call(DESIGNED_PACK_SAVES, key)
    ? DESIGNED_PACK_SAVES[key]
    : Number(fallbackSave) || 0;
}

/** Rebuild pack cards from the live ticket price while keeping the designed saves. */
export function packsForTicketPrice(unitPrice, packs) {
  const unit = Number(unitPrice) || FALLBACK_TICKET_UNIT;
  const source = packs?.length ? packs : PACK_META;
  return source.map((pack) => {
    const qty = Number(pack.ticketQuantity) || 1;
    const saveAmount = saveForPackCode(pack.code, pack.saveAmount);
    const baseAmount = unit * qty;
    return {
      ...pack,
      code: String(pack.code || "").toUpperCase(),
      label: pack.label || pack.bundleLabel || pack.code,
      ticketQuantity: qty,
      baseAmount,
      saveAmount,
      packPrice: Math.max(0, baseAmount - saveAmount),
    };
  });
}

export const FALLBACK_TICKET_PACKS = packsForTicketPrice(FALLBACK_TICKET_UNIT);
