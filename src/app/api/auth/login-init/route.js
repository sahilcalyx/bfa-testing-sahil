import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Admin from "@/lib/models/Admin";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

async function sendOtpEmail(email, otp, role) {
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

  const isJury = role === "jury";
  await transporter.sendMail({
    from: process.env.ZOHO_EMAIL,
    to: email,
    subject: isJury
      ? "BFA Jury Login OTP"
      : "BFA Admin Login OTP",
    html: `
      <h3>${isJury ? "Jury" : "Admin"} Login Verification</h3>
      <p>Your OTP for logging into the BFA ${isJury ? "Jury" : "Admin"} Panel is:</p>
      <h2 style="color: #635bff;">${otp}</h2>
      <p>This OTP is valid for 10 minutes.</p>
    `,
  });
}

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { response: false, data: "Email and Password are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const admin = await Admin.findOne({
      email: email.toLowerCase().trim(),
      role: { $ne: "jury" },
    });

    if (!admin) {
      return NextResponse.json(
        { response: false, data: "Invalid credentials" },
        { status: 401 }
      );
    }

    if (admin.isActive === false) {
      return NextResponse.json(
        { response: false, data: "Account is disabled" },
        { status: 403 }
      );
    }

    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      return NextResponse.json(
        { response: false, data: "Invalid credentials" },
        { status: 401 }
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    admin.otp = otp;
    admin.otpExpires = new Date(Date.now() + 10 * 60 * 1000);
    await admin.save();

    try {
      await sendOtpEmail(admin.email, otp, "admin");
      return NextResponse.json(
        { response: true, data: "OTP Sent successfully" },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("OTP Email failed:", emailError);
      return NextResponse.json(
        {
          response: false,
          data: `Failed to send OTP email: ${emailError.message || "Unknown error"}`,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Login Init Error:", error);
    return NextResponse.json(
      { response: false, data: "Internal Server Error" },
      { status: 500 }
    );
  }
}
