import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Brochure from "@/lib/models/Brochure";
import nodemailer from "nodemailer";
import axios from "axios";
import fs from "fs";
import path from "path";

export async function POST(req) {
    try {
        await connectToDatabase();
        const data = await req.json();

        // 1. Verify reCAPTCHA
        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
        const token = data.recaptchaToken || data.reCaptcha;

        if (recaptchaSecret && recaptchaSecret !== "YOUR_RECAPTCHA_SECRET_KEY_HERE") {
            if (!token) {
                return NextResponse.json({ response: false, data: "reCAPTCHA token is missing. Please verify you are not a robot." }, { status: 400 });
            }

            const recaptchaVerify = await axios.post(
                `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${token}`
            );

            if (!recaptchaVerify.data.success) {
                return NextResponse.json({ response: false, data: "reCAPTCHA verification failed. Please try again." }, { status: 400 });
            }
        }

        // 2. Save to Database
        const firstName = data.firstName || (data.name ? data.name.split(' ')[0] : "");
        const lastName = data.lastName || (data.name ? data.name.split(' ').slice(1).join(' ') : "");
        const fullName = data.name || `${data.firstName || ""} ${data.lastName || ""}`.trim();

        const newRequest = await Brochure.create({
            title: data.title || "",
            firstName: firstName,
            lastName: lastName,
            name: fullName,
            email: data.email,
            phone: data.phone,
            companyName: data.companyName,
            role: data.role || "N/A",
            country: data.country || "UK"
        });

        // 3. Send Email
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


        const baseUrl = process.env.NEXTAUTH_URL || "https://britfintechawards.com";

        // User Confirmation Email (with professional template)
        try {
            const templatePath = path.join(process.cwd(), "public", "Email", "brochure.html");
            let userMailContent = "";

            if (fs.existsSync(templatePath)) {
                userMailContent = fs.readFileSync(templatePath, "utf8");
                userMailContent = userMailContent
                    .replace(/\[First_Name\]/g, data.firstName)
                    .replace(/\[company_name\]/g, "Brit Fintech Awards")
                    .replace(/\[company_website_src\]/g, "https://britfintechawards.com/")
                    .replace(/\[contact_no\]/g, "+44 20 3828 3277") // Replace with actual
                    .replace(/\[email_id\]/g, "kudos@britfintechawards.com")
                    .replace(/\[theme_color\]/g, "#010057");
            } else {
                userMailContent = `<h3>Thank you for requesting our brochure, ${data.firstName}!</h3><p>We've received your request and our team will get back to you shortly.</p>`;
            }

            await transporter.sendMail({
                from: process.env.ZOHO_EMAIL,
                to: data.email,
                subject: "Your Brit FinTech Awards Brochure Request",
                html: userMailContent,
            });
        } catch (emailErr) {
            console.error("User email failed:", emailErr);
        }

        // Admin Notification
        const adminMailOptions = {
            from: process.env.ZOHO_EMAIL,
            to: process.env.ZOHO_EMAIL,
            subject: `New Brochure Request: ${data.firstName} ${data.lastName}`,
            html: `
            <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e3e8ee; border-radius: 12px; background-color: #f7f9fc;">
                <div style="background-color: #010057; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
                    <h2 style="color: #ffffff; margin: 0; font-size: 22px;">New Brochure Request</h2>
                </div>
                <div style="padding: 30px; background-color: #ffffff; border-radius: 0 0 8px 8px;">
                    <div style="margin-bottom: 20px;">
                        <span style="color: #697386; font-size: 14px; text-transform: uppercase; font-weight: 600;">Request Details</span>
                        <p style="margin: 8px 0; font-size: 16px; color: #1a1f36;"><strong>Name:</strong> ${data.title} ${data.firstName} ${data.lastName}</p>
                        <p style="margin: 8px 0; font-size: 16px; color: #1a1f36;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #635bff; text-decoration: none;">${data.email}</a></p>
                        <p style="margin: 8px 0; font-size: 16px; color: #1a1f36;"><strong>Phone:</strong> ${data.phone}</p>
                        <p style="margin: 8px 0; font-size: 16px; color: #1a1f36;"><strong>Company:</strong> ${data.companyName}</p>
                        <p style="margin: 8px 0; font-size: 16px; color: #1a1f36;"><strong>Role:</strong> ${data.role || "N/A"}</p>
                    </div>
                </div>
                <p style="text-align: center; color: #8792a2; font-size: 12px; margin-top: 20px;">
                    © ${new Date().getFullYear()} Brit FinTech Awards. All rights reserved.
                </p>
            </div>
            `,
        };

        try {
            await transporter.sendMail(adminMailOptions);
        } catch (adminEmailErr) {
            console.error("Admin email failed:", adminEmailErr);
        }

        return NextResponse.json({ response: true, data: "Brochure request submitted successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error in Brochure API:", error);
        return NextResponse.json({ response: false, data: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        await connectToDatabase();
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page")) || 1;
        const limit = parseInt(searchParams.get("limit")) || 10;
        const search = searchParams.get("search") || "";

        const query = {};
        if (search) {
            query.$or = [
                { firstName: { $regex: search, $options: "i" } },
                { lastName: { $regex: search, $options: "i" } },
                { email: { $regex: search, $options: "i" } },
                { companyName: { $regex: search, $options: "i" } },
            ];
        }

        const skip = (page - 1) * limit;
        const items = await Brochure.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit);
        const total = await Brochure.countDocuments(query);

        return NextResponse.json({
            response: true,
            data: {
                items,
                total,
                totalPages: Math.ceil(total / limit),
                currentPage: page
            }
        }, { status: 200 });
    } catch (error) {
        console.error("Error in Brochure GET API:", error);
        return NextResponse.json({ response: false, data: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        await connectToDatabase();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ response: false, data: "ID is required" }, { status: 400 });
        }

        await Brochure.findByIdAndDelete(id);
        return NextResponse.json({ response: true, data: "Request deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error in Brochure DELETE API:", error);
        return NextResponse.json({ response: false, data: "Internal Server Error" }, { status: 500 });
    }
}
