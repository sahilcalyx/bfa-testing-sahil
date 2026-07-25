import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectToDatabase from "@/lib/db";
import Nomination from "@/lib/models/Nomination";
import JuryShortlist from "@/lib/models/JuryShortlist";
import {
  requireJury,
  getJuryAccess,
  buildJuryNominationQuery,
} from "@/lib/authHelpers";

function categoriesForNomination(nomination, access) {
  const cats = Array.isArray(nomination?.awardcate)
    ? nomination.awardcate.filter(Boolean)
    : [];
  if (!cats.length) return [];
  if (access?.assignedCategories?.length) {
    return cats.filter((c) => access.assignedCategories.includes(c));
  }
  // Explicit nomination assignment with no category list → all of its cats
  return cats;
}

async function assertNominationAccess(nominationId, access) {
  if (!mongoose.Types.ObjectId.isValid(nominationId)) return null;

  const base = buildJuryNominationQuery(access);
  if (base._id === null) return null;

  let finalQuery;
  if (base._id?.$in) {
    const allowed = base._id.$in.map(String);
    if (!allowed.includes(String(nominationId))) return null;
    finalQuery = { _id: nominationId };
  } else if (base.awardcate) {
    finalQuery = { _id: nominationId, awardcate: base.awardcate };
  } else {
    finalQuery = { _id: nominationId };
  }

  return Nomination.findOne(finalQuery).lean();
}

/** GET — jury's own shortlists (optional ?category=) */
export async function GET(req) {
  try {
    const auth = await requireJury();
    if (auth.error) return auth.error;

    const access = await getJuryAccess(auth.session.user.id);
    if (!access) {
      return NextResponse.json(
        { response: false, data: "Jury access unavailable" },
        { status: 403 }
      );
    }

    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category")?.trim() || "";

    const filter = { juryId: auth.session.user.id };
    if (category) filter.category = category;

    const rows = await JuryShortlist.find(filter)
      .sort({ updatedAt: -1 })
      .lean();

    const nomIds = [...new Set(rows.map((r) => String(r.nominationId)))];
    const nominations = nomIds.length
      ? await Nomination.find({ _id: { $in: nomIds } })
          .select(
            "companynm firstName lastName title email awardcate createdAt hasPrimaryDocument uploadfile"
          )
          .lean()
      : [];
    const nomMap = Object.fromEntries(
      nominations.map((n) => [String(n._id), n])
    );

    const data = rows.map((r) => ({
      _id: r._id,
      nominationId: r.nominationId,
      category: r.category,
      note: r.note || "",
      createdAt: r.createdAt,
      updatedAt: r.updatedAt,
      nomination: nomMap[String(r.nominationId)] || null,
    }));

    return NextResponse.json({
      response: true,
      data,
      assignedCategories: access.assignedCategories || [],
    });
  } catch (error) {
    console.error("Jury shortlist GET error:", error);
    return NextResponse.json(
      { response: false, data: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * POST — toggle / set shortlist for a nomination in one category
 * body: { nominationId, category, shortlisted: boolean, note? }
 */
export async function POST(req) {
  try {
    const auth = await requireJury();
    if (auth.error) return auth.error;

    const access = await getJuryAccess(auth.session.user.id);
    if (!access) {
      return NextResponse.json(
        { response: false, data: "Jury access unavailable" },
        { status: 403 }
      );
    }

    const body = await req.json();
    const nominationId = body.nominationId;
    const category = String(body.category || "").trim();
    const shortlisted = body.shortlisted !== false && body.shortlisted !== "false";
    const note = String(body.note || "").trim().slice(0, 500);

    if (!nominationId || !category) {
      return NextResponse.json(
        { response: false, data: "nominationId and category are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const nomination = await assertNominationAccess(nominationId, access);
    if (!nomination) {
      return NextResponse.json(
        { response: false, data: "Nomination not in your assigned scope" },
        { status: 403 }
      );
    }

    const allowedCats = categoriesForNomination(nomination, access);
    if (!allowedCats.includes(category)) {
      return NextResponse.json(
        {
          response: false,
          data: "This category is not available for shortlisting on this nomination",
        },
        { status: 400 }
      );
    }

    const juryId = auth.session.user.id;

    if (!shortlisted) {
      await JuryShortlist.deleteOne({ juryId, nominationId, category });
      return NextResponse.json({
        response: true,
        data: { shortlisted: false, nominationId, category },
        message: "Removed from shortlist",
      });
    }

    const row = await JuryShortlist.findOneAndUpdate(
      { juryId, nominationId, category },
      { $set: { note, juryId, nominationId, category } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    ).lean();

    return NextResponse.json({
      response: true,
      data: {
        shortlisted: true,
        _id: row._id,
        nominationId,
        category,
        note: row.note || "",
        updatedAt: row.updatedAt,
      },
      message: "Added to shortlist",
    });
  } catch (error) {
    console.error("Jury shortlist POST error:", error);
    return NextResponse.json(
      { response: false, data: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
