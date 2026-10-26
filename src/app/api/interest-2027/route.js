import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Interest2027 from "@/lib/models/Interest2027";
import nodemailer from "nodemailer";

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

    if (
      !data.firstName?.trim() ||
      !data.lastName?.trim() ||
      !data.companyName?.trim() ||
      !data.email?.trim() ||
      !data.countryCode ||
      !data.phone?.trim()
    ) {
      return NextResponse.json(
        { response: false, data: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const phoneDigits = String(data.phone).replace(/\D/g, "");
    const fullPhone = `+${String(data.countryCode).replace(/\D/g, "")}${phoneDigits}`;

    const payload = {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      jobTitle: data.jobTitle?.trim() || "",
      companyName: data.companyName.trim(),
      email: data.email.trim().toLowerCase(),
      city: data.city?.trim() || "",
      country: data.country?.trim() || "",
      countryCode: String(data.countryCode).replace(/\D/g, ""),
      phone: fullPhone,
      year: 2027,
      reCaptcha: captchaToken || "",
    };

    await Interest2027.create(payload);

    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.eu",
      port: 587,
      secure: false,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });

    const baseUrl =
      process.env.COMPANY_WEBSITE_URL || "https://britfintechawards.com";

    try {
      await transporter.sendMail({
        from: process.env.ZOHO_EMAIL,
        to: payload.email,
        subject: "You're on the list — Brit FinTech Awards 2027",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
            <div style="background: #0a0a0c; padding: 28px; ">
              <p style="margin: 0 0 8px; color: #c8102e; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;">Brit FinTech Awards</p>
              <h1 style="margin: 0; color: #fff; font-size: 24px;">Interest registered for 2027</h1>
            </div>
            <div style="padding: 28px; border: 1px solid #ececec; border-top: none;">
              <p style="margin: 0 0 14px; font-size: 16px;">Hi ${payload.firstName},</p>
              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #444;">
                Thank you for registering your interest in Brit FinTech Awards 2027.
                We'll be in touch as nominations, tickets, and partner opportunities open.
              </p>
            </div>
            <p style="text-align: center; color: #999; font-size: 12px; margin-top: 18px;">
              © ${new Date().getFullYear()} Brit FinTech Awards · <a href="${baseUrl}" style="color: #999;">britfintechawards.com</a>
            </p>
          </div>
        `,
      });
    } catch (userMailError) {
      console.error("Interest 2027 user email failed:", userMailError);
    }

    try {
      await transporter.sendMail({
        from: process.env.ZOHO_EMAIL,
        to: process.env.ZOHO_EMAIL,
        subject: `BFA 2027 Interest: ${payload.firstName} ${payload.lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e3e8ee; border-radius: 12px;">
            <div style="background: #0a0a0c; padding: 18px; border-radius: 8px 8px 0 0; text-align: center;">
              <h2 style="color: #fff; margin: 0; font-size: 20px;">Register Interest 2027</h2>
            </div>
            <div style="padding: 24px; background: #fff;">
              <p><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</p>
              <p><strong>Job title:</strong> ${payload.jobTitle}</p>
              <p><strong>Company:</strong> ${payload.companyName}</p>
              <p><strong>Email:</strong> <a href="mailto:${payload.email}">${payload.email}</a></p>
              <p><strong>Phone:</strong> ${payload.phone}</p>
              <p><strong>City:</strong> ${payload.city || "—"}</p>
              <p><strong>Country:</strong> ${payload.country || "—"}</p>
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
      { response: true, data: "Interest registered successfully!" },
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

export async function GET(req) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    const query = {};

    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { companyName: { $regex: search, $options: "i" } },
        { jobTitle: { $regex: search, $options: "i" } },
      ];
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

    const totalCount = await Interest2027.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limit);

    const records = await Interest2027.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return NextResponse.json(
      {
        response: true,
        data: records,
        pagination: {
          totalCount,
          totalPages,
          currentPage: page,
          limit,
        },
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
