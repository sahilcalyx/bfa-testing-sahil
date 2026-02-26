import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Sponsor from "@/lib/models/Sponsor";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req) {
    try {
        await connectToDatabase();
        const data = await req.json();

        // Validate reCAPTCHA
        const captchaSecret = process.env.RECAPTCHA_SECRET_KEY;
        const captchaToken = data.reCaptcha || data.recaptchaToken;

        if (captchaSecret && captchaSecret !== "YOUR_RECAPTCHA_SECRET_KEY_HERE") {
            if (!captchaToken) {
                return NextResponse.json({ response: false, data: "reCAPTCHA token is missing. Please verify you are not a robot." }, { status: 400 });
            }

            const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${captchaToken}`, {
                method: 'POST',
            });
            const captchaData = await response.json();

            if (!captchaData.success) {
                return NextResponse.json({ response: false, data: "reCAPTCHA verification failed. Please try again." }, { status: 400 });
            }
        }

        // Save to Database
        const newSponsor = await Sponsor.create(data);

        // Send Emails via Zoho
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


        const baseUrl = process.env.COMPANY_WEBSITE_URL || "https://britfintechawards.com";

        // 1. Send Thank You email to User
        try {
            const templatePath = path.join(process.cwd(), "public", "Email", "Sponsorship.html");
            let userMailContent = fs.readFileSync(templatePath, "utf8");

            // Replace Placeholders
            const replacements = {
                "[company_website_src]": `${baseUrl}/Email/`,
                "[First_Name]": data.firstName,
                "[ncompany_name]": data.companyName,
                "[Email_ID_of_enquirer]": data.email,
                "[contact_no]": "+44 20 3828 3277",
                "[email_id]": "kudos@britfintechawards.com",
                "[email_id1]": "mailto:kudos@britfintechawards.com",
                "[company_name]": "Brit FinTech Awards",
                "[company_reg_no]": "15854743",
                "[company_reg_office]": "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ",
                "[theme_color]": "#010057",
                "[privacy_policy]": `${baseUrl}/privacy-policy`,
                "[company_website]": baseUrl,
                "[company_website_nm]": "britfintechawards.com",
                "[Instagram-social]": "https://www.instagram.com/britfintechawards",
                "[facebook-social]": "https://www.facebook.com/profile.php?id=61562935702047",
                "[Linkedin-social]": "https://www.linkedin.com/company/britfintechawards",
                "[line_id1]": 'id="line_id1"',
                "[contact_id1]": 'id="contact_id1"',
                "[or1]": 'id="or1"',
                "[email_id11]": 'id="email_id11"',
            };

            for (const [key, value] of Object.entries(replacements)) {
                userMailContent = userMailContent.split(key).join(value);
            }

            await transporter.sendMail({
                from: process.env.ZOHO_EMAIL,
                to: data.email,
                subject: "Thank you for your interest in Brit Fintech Awards 2026 Sponsorship",
                html: userMailContent,
            });
        } catch (templateError) {
            console.error("Failed to send user thank you email:", templateError);
        }

        // 2. Send Notification email to Admin
        const mailOptions = {
            from: process.env.ZOHO_EMAIL,
            to: process.env.ZOHO_EMAIL,
            subject: `New Sponsor Inquiry 2026: ${data.companyName}`,
            html: `
            <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e3e8ee; border-radius: 12px; background-color: #f7f9fc;">
                <div style="background-color: #010057; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
                    <h2 style="color: #ffffff; margin: 0; font-size: 22px;">New Sponsor Inquiry</h2>
                </div>
                <div style="padding: 30px; background-color: #ffffff; border-radius: 0 0 8px 8px;">
                    <div style="margin-bottom: 25px; border-bottom: 1px solid #e3e8ee; padding-bottom: 15px;">
                        <span style="color: #697386; font-size: 14px; text-transform: uppercase; font-weight: 600;">Company Details</span>
                        <p style="margin: 8px 0; font-size: 18px; color: #1a1f36; font-weight: 700;">${data.companyName}</p>
                        <p style="margin: 8px 0; font-size: 16px; color: #1a1f36;"><strong>Role:</strong> ${data.role}</p>
                        <p style="margin: 8px 0; font-size: 16px; color: #635bff; font-weight: 600;"><strong>Tier:</strong> ${data.sponsorship}</p>
                    </div>
                    <div style="margin-bottom: 25px;">
                        <span style="color: #697386; font-size: 14px; text-transform: uppercase; font-weight: 600;">Contact Person</span>
                        <p style="margin: 8px 0; font-size: 16px; color: #1a1f36;"><strong>Name:</strong> ${data.title || ""} ${data.firstName} ${data.lastName}</p>
                        <p style="margin: 8px 0; font-size: 16px; color: #1a1f36;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #635bff; text-decoration: none;">${data.email}</a></p>
                        <p style="margin: 8px 0; font-size: 16px; color: #1a1f36;"><strong>Phone:</strong> ${data.phoneNo}</p>
                    </div>
                    ${data.companyInfo ? `
                    <div style="border-top: 1px solid #e3e8ee; padding-top: 20px;">
                        <span style="color: #697386; font-size: 14px; text-transform: uppercase; font-weight: 600;">Additional Info</span>
                        <p style="margin: 12px 0; font-size: 16px; color: #4f566b; line-height: 1.6; background: #f7f9fc; padding: 15px; border-radius: 8px; border-left: 4px solid #635bff;">
                            ${data.companyInfo.replace(/\n/g, '<br/>')}
                        </p>
                    </div>` : ''}
                    <div style="margin-top: 30px; text-align: center;">
                        <a href="${baseUrl}/admin/sponsors" style="background-color: #635bff; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; display: inline-block;">View in Admin Panel</a>
                    </div>
                </div>
                <p style="text-align: center; color: #8792a2; font-size: 12px; margin-top: 20px;">
                    © ${new Date().getFullYear()} Brit FinTech Awards. All rights reserved.
                </p>
            </div>
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
        } catch (emailError) {
            console.error("Admin Notification failed:", emailError);
        }

        return NextResponse.json({ response: true, data: "Sponsor inquiry saved successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error in Sponsor API:", error);
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
        const startDate = searchParams.get("startDate");
        const endDate = searchParams.get("endDate");

        const query = {};

        if (search) {
            query.$or = [
                { firstName: { $regex: search, $options: "i" } },
                { lastName: { $regex: search, $options: "i" } },
                { email: { $regex: search, $options: "i" } },
                { companyName: { $regex: search, $options: "i" } },
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

        const totalCount = await Sponsor.countDocuments(query);
        const totalPages = Math.ceil(totalCount / limit);

        const sponsors = await Sponsor.find(query)
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        return NextResponse.json({
            response: true,
            data: sponsors,
            pagination: {
                totalCount,
                totalPages,
                currentPage: page,
                limit
            }
        }, { status: 200 });
    } catch (error) {
        console.error("Error fetching sponsors:", error);
        return NextResponse.json({ response: false, data: "Internal Server Error" }, { status: 500 });
    }
}


export async function DELETE(req) {
    try {
        await connectToDatabase();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ response: false, data: "Sponsor ID is required" }, { status: 400 });
        }

        const deletedSponsor = await Sponsor.findByIdAndDelete(id);

        if (!deletedSponsor) {
            return NextResponse.json({ response: false, data: "Sponsor not found" }, { status: 404 });
        }

        return NextResponse.json({ response: true, data: "Sponsor deleted successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting sponsor:", error);
        return NextResponse.json({ response: false, data: "Internal Server Error" }, { status: 500 });
    }
}
