import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Admin from "@/lib/models/Admin";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ response: false, data: "Email and Password are required" }, { status: 400 });
        }

        await connectToDatabase();

        // 1. Validate Admin
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return NextResponse.json({ response: false, data: "Invalid credentials" }, { status: 401 });
        }

        const isValid = await bcrypt.compare(password, admin.password);
        if (!isValid) {
            return NextResponse.json({ response: false, data: "Invalid credentials" }, { status: 401 });
        }

        // 2. Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        // 3. Save OTP to DB
        admin.otp = otp;
        admin.otpExpires = otpExpires;
        await admin.save();

        // 4. Send Email via Zoho
        const transporter = nodemailer.createTransport({
            host: "smtppro.zoho.eu",
            port: 587,
            secure: false, // ❗ MUST be false for 587
            auth: {
                user: process.env.ZOHO_EMAIL,
                pass: process.env.ZOHO_PASSWORD, // Zoho App Password
            },
            tls: {
                rejectUnauthorized: false,
            },
        });


        const mailOptions = {
            from: process.env.ZOHO_EMAIL,
            to: email, // Send to the admin's email
            subject: "BFA Admin Login OTP",
            html: `
            <h3>Admin Login Verification</h3>
            <p>Your OTP for logging into the BFA Admin Panel is:</p>
            <h2 style="color: #635bff;">${otp}</h2>
            <p>This OTP is valid for 10 minutes.</p>
        `,
        };

        try {
            await transporter.sendMail(mailOptions);
            return NextResponse.json({ response: true, data: "OTP Sent successfully" }, { status: 200 });
        } catch (emailError) {
            console.error("OTP Email failed full error:", emailError);
            return NextResponse.json({
                response: false,
                data: `Failed to send OTP email: ${emailError.message || "Unknown error"}`
            }, { status: 500 });
        }

    } catch (error) {
        console.error("Login Init Error:", error);
        return NextResponse.json({ response: false, data: "Internal Server Error" }, { status: 500 });
    }
}
