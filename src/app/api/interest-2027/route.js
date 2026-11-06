import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getServerSession } from "next-auth/next";
import connectToDatabase from "@/lib/db";
import Interest2027 from "@/lib/models/Interest2027";
import {
  INTEREST_2027_SOURCES,
  INTEREST_2027_VALUES,
  interest2027Label,
} from "@/lib/interest2027Options";
import { authOptions } from "../auth/[...nextauth]/route";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const splitName = (fullName) => {
  const parts = fullName.trim().split(/\s+/);
  return { firstName: parts[0] || "", lastName: parts.slice(1).join(" ") };
};

const interestsHtml = (record) => {
  const items = (record.interests || []).map((v) => {
    const label = interest2027Label(v);
    return v === "other" && record.otherInterest
      ? `${label}: ${escapeHtml(record.otherInterest)}`
      : escapeHtml(label);
  });
  return items.length
    ? `<ul style="margin: 8px 0 0; padding-left: 18px;">${items
        .map((i) => `<li style="margin: 2px 0;">${i}</li>`)
        .join("")}</ul>`
    : "<p style=\"margin: 8px 0 0;\">—</p>";
};

const createTransporter = () =>
  nodemailer.createTransport({
    host: "smtppro.zoho.eu",
    port: 587,
    secure: false,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  });

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session || session.error === "SessionInvalid" || session.user?.role === "jury") {
    return NextResponse.json(
      { response: false, data: "Unauthorized" },
      { status: 401 }
    );
  }
  return null;
}

export async function POST(req) {
  try {
    await connectToDatabase();
    const data = await req.json();

    const captchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const captchaToken = data.reCaptcha || data.recaptchaToken;

    if (captchaSecret && captchaSecret !== "YOUR_RECAPTCHA_SECRET_KEY_HERE") {
      if (!captchaToken) {
        return NextResponse.json(
          {
            response: false,
            data: "reCAPTCHA token is missing. Please verify you are not a robot.",
          },
          { status: 400 }
        );
      }

      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${captchaToken}`,
        { method: "POST" }
      );
      const captchaData = await response.json();

      if (!captchaData.success) {
        return NextResponse.json(
          {
            response: false,
            data: "reCAPTCHA verification failed. Please try again.",
          },
          { status: 400 }
        );
      }
    }

    const fullName = String(data.fullName || "").trim();
    const email = String(data.email || "").trim().toLowerCase();
    const interests = Array.isArray(data.interests)
      ? [...new Set(data.interests.filter((v) => INTEREST_2027_VALUES.includes(v)))]
      : [];
    const otherInterest = String(data.otherInterest || "").trim();

    if (
      !fullName ||
      !data.jobTitle?.trim() ||
      !data.companyName?.trim() ||
      !email ||
      !data.countryCode ||
      !data.phone?.trim()
    ) {
      return NextResponse.json(
        { response: false, data: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { response: false, data: "Please enter a valid business email address." },
        { status: 400 }
      );
    }

    if (interests.length === 0) {
      return NextResponse.json(
        { response: false, data: "Please tell us what you are interested in." },
        { status: 400 }
      );
    }

    if (interests.includes("other") && !otherInterest) {
      return NextResponse.json(
        { response: false, data: "Please tell us a little more about your interest." },
        { status: 400 }
      );
    }

    const phoneDigits = String(data.phone).replace(/\D/g, "");
    const countryCode = String(data.countryCode).replace(/\D/g, "");
    const fullPhone = `+${countryCode}${phoneDigits}`;
    const source = INTEREST_2027_SOURCES.includes(data.source) ? data.source : "page";

    const payload = {
      fullName,
      ...splitName(fullName),
      jobTitle: data.jobTitle.trim(),
      companyName: data.companyName.trim(),
      email,
      city: data.city?.trim() || "",
      country: data.country?.trim() || "",
      countryCode,
      phone: fullPhone,
      otherInterest: interests.includes("other") ? otherInterest : "",
      source,
      year: 2027,
      reCaptcha: captchaToken || "",
    };

    const existing = await Interest2027.findOne({ email });
    let record;
    let updated = false;

    if (existing) {
      // Same person registering again: refresh their details and merge interests
      // instead of creating a duplicate lead.
      const mergedInterests = [...new Set([...(existing.interests || []), ...interests])];
      record = await Interest2027.findByIdAndUpdate(
        existing._id,
        {
          $set: {
            ...payload,
            interests: mergedInterests,
            otherInterest: payload.otherInterest || existing.otherInterest || "",
          },
          $inc: { submissionCount: 1 },
        },
        { new: true }
      );
      updated = true;
    } else {
      record = await Interest2027.create({ ...payload, interests });
    }

    const transporter = createTransporter();
    const baseUrl =
      process.env.COMPANY_WEBSITE_URL || "https://britfintechawards.com";

    try {
      await transporter.sendMail({
        from: process.env.ZOHO_EMAIL,
        to: process.env.ZOHO_EMAIL,
        subject: `BFA 2027 Interest${updated ? " (updated)" : ""}: ${record.fullName} — ${record.companyName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e3e8ee; border-radius: 12px;">
            <div style="background: #0a0a0c; padding: 18px; border-radius: 8px 8px 0 0; text-align: center;">
              <h2 style="color: #fff; margin: 0; font-size: 20px;">Register Interest 2027${updated ? " · Updated" : ""}</h2>
            </div>
            <div style="padding: 24px; background: #fff;">
              <p><strong>Name:</strong> ${escapeHtml(record.fullName)}</p>
              <p><strong>Job title:</strong> ${escapeHtml(record.jobTitle)}</p>
              <p><strong>Company:</strong> ${escapeHtml(record.companyName)}</p>
              <p><strong>Email:</strong> <a href="mailto:${record.email}">${record.email}</a></p>
              <p><strong>Phone:</strong> ${escapeHtml(record.phone)}</p>
              <p><strong>Country:</strong> ${escapeHtml(record.country || "—")}</p>
              <p><strong>Source:</strong> ${escapeHtml(record.source)}</p>
              <p style="margin-bottom: 0;"><strong>Interested in:</strong></p>
              ${interestsHtml(record)}
              <div style="margin-top: 24px; text-align: center;">
                <a href="${baseUrl}/admin/interest-2027" style="background: #c8102e; color: #fff; padding: 12px 22px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">View in Admin</a>
              </div>
            </div>
          </div>
        `,
      });
    } catch (adminMailError) {
      console.error("Interest 2027 admin email failed:", adminMailError);
    }

    return NextResponse.json(
      {
        response: true,
        updated,
        data: updated
          ? "Thanks — we've updated your interest preferences."
          : "Interest registered successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in Interest 2027 API:", error);
    return NextResponse.json(
      { response: false, data: "Internal Server Error" },
      { status: 500 }
    );
  }
}

const buildQuery = (searchParams) => {
  const search = searchParams.get("search") || "";
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const interest = searchParams.get("interest");
  const query = {};

  if (search) {
    query.$or = [
      { fullName: { $regex: search, $options: "i" } },
      { firstName: { $regex: search, $options: "i" } },
      { lastName: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { companyName: { $regex: search, $options: "i" } },
      { jobTitle: { $regex: search, $options: "i" } },
    ];
  }

  if (interest && INTEREST_2027_VALUES.includes(interest)) {
    query.interests = interest;
  }

  if (startDate || endDate) {
    query.createdAt = {};
    if (startDate) query.createdAt.$gte = new Date(startDate);
    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      query.createdAt.$lte = end;
    }
  }

  return query;
};

const csvCell = (value) => {
  const str = value == null ? "" : String(value);
  return /[",\n\r]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
};

const toCsv = (records) => {
  const header = [
    "Full name",
    "Job title",
    "Company",
    "Email",
    "Phone",
    "Country",
    "Interests",
    "Other interest",
    "Source",
    "Submissions",
    "Registered at",
    "Last updated",
  ];
  const rows = records.map((r) => [
    r.fullName || `${r.firstName || ""} ${r.lastName || ""}`.trim(),
    r.jobTitle,
    r.companyName,
    r.email,
    r.phone,
    r.country,
    (r.interests || []).map(interest2027Label).join("; "),
    r.otherInterest,
    r.source,
    r.submissionCount ?? 1,
    r.createdAt ? new Date(r.createdAt).toISOString() : "",
    r.updatedAt ? new Date(r.updatedAt).toISOString() : "",
  ]);
  return [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n");
};

export async function GET(req) {
  try {
    const unauthorized = await requireAdmin();
    if (unauthorized) return unauthorized;

    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const query = buildQuery(searchParams);

    if (searchParams.get("format") === "csv") {
      const records = await Interest2027.find(query).sort({ createdAt: -1 }).lean();
      const stamp = new Date().toISOString().slice(0, 10);
      return new Response(`\uFEFF${toCsv(records)}`, {
        status: 200,
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="bfa-2027-interest-${stamp}.csv"`,
          "Cache-Control": "no-store",
        },
      });
    }

    const page = parseInt(searchParams.get("page")) || 1;
    const limit = Math.min(parseInt(searchParams.get("limit")) || 10, 100);

    const [totalCount, records, interestCounts] = await Promise.all([
      Interest2027.countDocuments(query),
      Interest2027.find(query)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit),
      Interest2027.aggregate([
        { $unwind: "$interests" },
        { $group: { _id: "$interests", count: { $sum: 1 } } },
      ]),
    ]);

    return NextResponse.json(
      {
        response: true,
        data: records,
        pagination: {
          totalCount,
          totalPages: Math.ceil(totalCount / limit),
          currentPage: page,
          limit,
        },
        interestCounts: Object.fromEntries(
          interestCounts.map((c) => [c._id, c.count])
        ),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching Interest 2027:", error);
    return NextResponse.json(
      { response: false, data: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const unauthorized = await requireAdmin();
    if (unauthorized) return unauthorized;

    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { response: false, data: "Record ID is required" },
        { status: 400 }
      );
    }

    const deleted = await Interest2027.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { response: false, data: "Record not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { response: true, data: "Record deleted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting Interest 2027:", error);
    return NextResponse.json(
      { response: false, data: "Internal Server Error" },
      { status: 500 }
    );
  }
}
