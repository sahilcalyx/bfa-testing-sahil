import { requireAdmin } from "@/lib/authHelpers";
import { forwardToPaymentService } from "@/lib/paymentService";

export async function GET() {
  const auth = await requireAdmin();
  if (auth.error) return auth.error;
  return forwardToPaymentService("/api/coupons/admin", { method: "GET" });
}

export async function POST(req) {
  const auth = await requireAdmin();
  if (auth.error) return auth.error;

  const body = await req.json();
  return forwardToPaymentService("/api/coupons/admin", {
    method: "POST",
    body: JSON.stringify(body),
  });
}
