import { requireAdmin } from "@/lib/authHelpers";
import { forwardToPaymentService } from "@/lib/paymentService";

export async function GET() {
  const auth = await requireAdmin();
  if (auth.error) return auth.error;
  return forwardToPaymentService("/api/pricing/admin", { method: "GET" });
}

export async function PUT(req) {
  const auth = await requireAdmin();
  if (auth.error) return auth.error;

  const body = await req.json();
  return forwardToPaymentService("/api/pricing/admin", {
    method: "PUT",
    body: JSON.stringify({
      ticket: body.ticket,
      nomination: body.nomination,
      updatedBy: auth.session.user.email || "admin",
    }),
  });
}
