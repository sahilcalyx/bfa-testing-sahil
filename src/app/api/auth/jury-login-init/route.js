import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Admin from "@/lib/models/Admin";
import nodemailer from "nodemailer";

/** Passwordless OTP login for jury members */
export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { response: false, data: "Email is required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const jury = await Admin.findOne({
      email: email.toLowerCase().trim(),
      role: "jury",
    });

    if (!jury) {
      return NextResponse.json(
        { response: false, data: "No jury account found for this email" },
        { status: 401 }
      );
    }

    if (jury.isActive === false) {
      return NextResponse.json(
        { response: false, data: "Account is disabled. Contact the administrator." },
        { status: 403 }
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    jury.otp = otp;
    jury.otpExpires = new Date(Date.now() + 10 * 60 * 1000);
    await jury.save();

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

    try {
      await transporter.sendMail({
        from: process.env.ZOHO_EMAIL,
        to: jury.email,
        subject: "BFA Jury Login OTP",
        html: `
          <div style="font-family: Inter, sans-serif; max-width: 520px; margin: 0 auto;">
            <h3 style="color: #1a1f36;">Jury Login Verification</h3>
            <p>Your one-time code for the Brit FinTech Awards Jury Portal:</p>
            <h2 style="color: #c8102e; letter-spacing: 4px;">${otp}</h2>
            <p style="color: #697386; font-size: 14px;">This OTP is valid for 10 minutes.</p>
          </div>
        `,
      });
      return NextResponse.json(
        { response: true, data: "OTP sent successfully" },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Jury OTP email failed:", emailError);
      return NextResponse.json(
        {
          response: false,
          data: `Failed to send OTP email: ${emailError.message || "Unknown error"}`,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Jury Login Init Error:", error);
    return NextResponse.json(
      { response: false, data: "Internal Server Error" },
      { status: 500 }
    );
  }
}
