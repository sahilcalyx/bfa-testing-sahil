import { requireAdmin } from "@/lib/authHelpers";
import { forwardToPaymentService } from "@/lib/paymentService";

export async function PUT(req, { params }) {
  const auth = await requireAdmin();
  if (auth.error) return auth.error;

  const { id } = await params;
  const body = await req.json();
  return forwardToPaymentService(`/api/coupons/admin/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
}

export async function DELETE(req, { params }) {
  const auth = await requireAdmin();
  if (auth.error) return auth.error;

  const { id } = await params;
  return forwardToPaymentService(`/api/coupons/admin/${id}`, { method: "DELETE" });
}
