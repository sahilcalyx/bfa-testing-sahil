import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Admin from "@/lib/models/Admin";
import Nomination from "@/lib/models/Nomination";
import JuryShortlist from "@/lib/models/JuryShortlist";
import { requireAdmin } from "@/lib/authHelpers";
import { AWARD_CATEGORIES_2026 } from "@/lib/awardCategories";

/**
 * GET /api/admin/shortlist?category=...
 * Returns all jury shortlists for a category (or all),
 * plus a per-nomination matrix of which jury members shortlisted.
 */
export async function GET(req) {
  try {
    const auth = await requireAdmin();
    if (auth.error) return auth.error;

    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category")?.trim() || "";

    const filter = {};
    if (category) filter.category = category;

    const [rows, juryUsers] = await Promise.all([
      JuryShortlist.find(filter).sort({ updatedAt: -1 }).lean(),
      Admin.find({ role: "jury" })
        .select("_id name email assignedCategories isActive")
        .lean(),
    ]);

    const juryMap = Object.fromEntries(
      juryUsers.map((j) => [
        String(j._id),
        {
          _id: j._id,
          name: j.name || "",
          email: j.email,
          assignedCategories: j.assignedCategories || [],
          isActive: j.isActive !== false,
        },
      ])
    );

    const nomIds = [...new Set(rows.map((r) => String(r.nominationId)))];
    const nominations = nomIds.length
      ? await Nomination.find({ _id: { $in: nomIds } })
          .select(
            "companynm firstName lastName title email awardcate createdAt"
          )
          .lean()
      : [];
    const nomMap = Object.fromEntries(
      nominations.map((n) => [String(n._id), n])
    );

    // Group: category → nominationId → jury picks
    const byCategory = {};
    for (const r of rows) {
      const cat = r.category;
      if (!byCategory[cat]) byCategory[cat] = {};
      const nid = String(r.nominationId);
      if (!byCategory[cat][nid]) {
        byCategory[cat][nid] = {
          nomination: nomMap[nid] || {
            _id: r.nominationId,
            companynm: "(removed nomination)",
          },
          shortlistedBy: [],
          count: 0,
        };
      }
      const jury = juryMap[String(r.juryId)] || {
        _id: r.juryId,
        name: "Unknown",
        email: "",
        isActive: false,
      };
      byCategory[cat][nid].shortlistedBy.push({
        jury,
        note: r.note || "",
        updatedAt: r.updatedAt,
        shortlistId: r._id,
      });
      byCategory[cat][nid].count += 1;
    }

    // Build ordered list for selected category (or flatten all)
    const categoriesInUse = Object.keys(byCategory).sort();
    const selectedCats = category
      ? [category]
      : categoriesInUse.length
        ? categoriesInUse
        : [];

    const matrix = selectedCats.map((cat) => {
      const entries = Object.values(byCategory[cat] || {}).sort(
        (a, b) => b.count - a.count
      );
      return {
        category: cat,
        totalShortlists: entries.reduce((s, e) => s + e.count, 0),
        nominationCount: entries.length,
        nominations: entries,
      };
    });

    // Category summary counts (all categories)
    const categoryCounts = {};
    for (const r of rows) {
      categoryCounts[r.category] = (categoryCounts[r.category] || 0) + 1;
    }

    return NextResponse.json({
      response: true,
      data: {
        matrix,
        categoryCounts,
        totalShortlists: rows.length,
        juryUsers: juryUsers.map((j) => ({
          _id: j._id,
          name: j.name || "",
          email: j.email,
          isActive: j.isActive !== false,
          assignedCategories: j.assignedCategories || [],
        })),
        categories: AWARD_CATEGORIES_2026,
      },
    });
  } catch (error) {
    console.error("Admin shortlist GET error:", error);
    return NextResponse.json(
      { response: false, data: "Internal Server Error" },
      { status: 500 }
    );
  }
}
