import { NextResponse } from "next/server";

/**
 * Server-side bridge to the bfa_ticket_event service.
 * Keeps COUPON_ADMIN_KEY out of the browser — admin pages call our own
 * /api/admin/* routes, which authorise via the NextAuth session and then
 * forward here with the shared key.
 */
export const SERVICE_BASE = (
  process.env.PAYMENT_API_BASE ||
  process.env.NEXT_PUBLIC_PAYMENT_API_BASE ||
  "https://bfa-ticket-event.vercel.app"
).replace(/\/$/, "");

export async function forwardToPaymentService(path, init = {}) {
  const adminKey = process.env.COUPON_ADMIN_KEY;
  if (!adminKey) {
    return NextResponse.json(
      { response: false, data: "COUPON_ADMIN_KEY is not configured on the website." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(`${SERVICE_BASE}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        "x-admin-key": adminKey,
        ...(init.headers || {}),
      },
      cache: "no-store",
    });

    const text = await res.text();
    let payload;
    try {
      payload = JSON.parse(text);
    } catch {
      payload = { success: false, message: text || "Unexpected response from payment service." };
    }

    return NextResponse.json(
      {
        response: Boolean(payload.success),
        data: payload.success ? payload.data : payload.message,
        stats: payload.stats,
        pricing: payload.pricing,
        defaults: payload.defaults,
      },
      { status: res.status }
    );
  } catch (error) {
    console.error("Payment service unreachable:", error.message);
    return NextResponse.json(
      {
        response: false,
        data: `Could not reach the payment service at ${SERVICE_BASE}. Make sure it is running.`,
      },
      { status: 502 }
    );
  }
}
