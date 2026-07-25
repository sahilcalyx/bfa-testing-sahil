import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Nomination from "@/lib/models/Nomination";
import { requireAdmin } from "@/lib/authHelpers";

/**
 * POST /api/nomination/dedupe
 * Admin-only: remove duplicate nominations (same email + company).
 * Keeps paid entry if present, otherwise the oldest.
 */
export async function POST() {
  try {
    const auth = await requireAdmin();
    if (auth.error) return auth.error;

    await connectToDatabase();
    const all = await Nomination.find({})
      .select("email companynm paymentStatus createdAt")
      .sort({ createdAt: 1 })
      .lean();

    const groups = new Map();
    for (const doc of all) {
      const key = [
        String(doc.email || "").toLowerCase().trim(),
        String(doc.companynm || "").trim().toLowerCase(),
      ].join("||");
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(doc);
    }

    const toDelete = [];
    let duplicateGroups = 0;

    for (const docs of groups.values()) {
      if (docs.length <= 1) continue;
      duplicateGroups += 1;
      const paid = docs.filter((d) => d.paymentStatus === "paid");
      const keep = paid.length
        ? paid.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          )[0]
        : docs[0];

      for (const d of docs) {
        if (String(d._id) !== String(keep._id)) toDelete.push(d._id);
      }
    }

    let deletedCount = 0;
    if (toDelete.length) {
      const res = await Nomination.deleteMany({ _id: { $in: toDelete } });
      deletedCount = res.deletedCount || 0;
    }

    return NextResponse.json({
      response: true,
      data: {
        duplicateGroups,
        deletedCount,
        remaining: await Nomination.countDocuments(),
      },
      message:
        deletedCount > 0
          ? `Removed ${deletedCount} duplicate nomination(s).`
          : "No duplicate nominations found.",
    });
  } catch (error) {
    console.error("Nomination dedupe error:", error);
    return NextResponse.json(
      { response: false, data: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
