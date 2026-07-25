import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Admin from "@/lib/models/Admin";
import Nomination from "@/lib/models/Nomination";
import { requireAdmin } from "@/lib/authHelpers";
import { AWARD_CATEGORIES_2026 } from "@/lib/awardCategories";

export async function GET() {
  try {
    const auth = await requireAdmin();
    if (auth.error) return auth.error;

    await connectToDatabase();
    const juryUsers = await Admin.find({ role: "jury" })
      .select("-password -otp -otpExpires")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      response: true,
      data: juryUsers,
      categories: AWARD_CATEGORIES_2026,
    });
  } catch (error) {
    console.error("Jury GET error:", error);
    return NextResponse.json(
      { response: false, data: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const auth = await requireAdmin();
    if (auth.error) return auth.error;

    const body = await req.json();
    const {
      email,
      name = "",
      assignedCategories = [],
      assignedNominations = [],
      isActive = true,
    } = body;

    if (!email) {
      return NextResponse.json(
        { response: false, data: "Email is required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const existing = await Admin.findOne({
      email: email.toLowerCase().trim(),
    });
    if (existing) {
      return NextResponse.json(
        { response: false, data: "A user with this email already exists" },
        { status: 400 }
      );
    }

    const jury = await Admin.create({
      email: email.toLowerCase().trim(),
      name: name.trim(),
      role: "jury",
      password: undefined,
      assignedCategories: Array.isArray(assignedCategories)
        ? assignedCategories
        : [],
      assignedNominations: Array.isArray(assignedNominations)
        ? assignedNominations
        : [],
      isActive: Boolean(isActive),
    });

    return NextResponse.json(
      {
        response: true,
        data: {
          _id: jury._id,
          email: jury.email,
          name: jury.name,
          role: jury.role,
          assignedCategories: jury.assignedCategories,
          assignedNominations: jury.assignedNominations,
          isActive: jury.isActive,
        },
        message: "Jury user created. They can log in with email OTP.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Jury POST error:", error);
    return NextResponse.json(
      { response: false, data: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    const auth = await requireAdmin();
    if (auth.error) return auth.error;

    const body = await req.json();
    const { id, name, assignedCategories, assignedNominations, isActive } =
      body;

    if (!id) {
      return NextResponse.json(
        { response: false, data: "Jury user ID is required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const jury = await Admin.findOne({ _id: id, role: "jury" });
    if (!jury) {
      return NextResponse.json(
        { response: false, data: "Jury user not found" },
        { status: 404 }
      );
    }

    if (typeof name === "string") jury.name = name.trim();
    if (Array.isArray(assignedCategories)) {
      jury.assignedCategories = assignedCategories;
    }
    if (Array.isArray(assignedNominations)) {
      // Validate nomination IDs exist (best-effort)
      const validIds = await Nomination.find({
        _id: { $in: assignedNominations },
      }).select("_id");
      jury.assignedNominations = validIds.map((n) => n._id);
    }
    if (typeof isActive === "boolean") jury.isActive = isActive;

    await jury.save();

    return NextResponse.json({
      response: true,
      data: {
        _id: jury._id,
        email: jury.email,
        name: jury.name,
        role: jury.role,
        assignedCategories: jury.assignedCategories,
        assignedNominations: jury.assignedNominations,
        isActive: jury.isActive,
      },
    });
  } catch (error) {
    console.error("Jury PATCH error:", error);
    return NextResponse.json(
      { response: false, data: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const auth = await requireAdmin();
    if (auth.error) return auth.error;

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { response: false, data: "Jury user ID is required" },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const deleted = await Admin.findOneAndDelete({ _id: id, role: "jury" });
    if (!deleted) {
      return NextResponse.json(
        { response: false, data: "Jury user not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      response: true,
      data: "Jury user deleted",
    });
  } catch (error) {
    console.error("Jury DELETE error:", error);
    return NextResponse.json(
      { response: false, data: "Internal Server Error" },
      { status: 500 }
    );
  }
}
