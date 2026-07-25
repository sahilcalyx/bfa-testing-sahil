import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Nomination from "@/lib/models/Nomination";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.id || session?.error === "SessionInvalid") {
            return NextResponse.json({ response: false, data: "Unauthorized" }, { status: 401 });
        }
        if (session.user?.role === "jury") {
            return NextResponse.json({ response: false, data: "Forbidden — read-only access" }, { status: 403 });
        }
        await connectToDatabase();
        const data = await req.json();
        const { id } = data;

        if (!id) {
            return NextResponse.json({ response: false, data: "Nomination ID is required" }, { status: 400 });
        }

        const nomination = await Nomination.findById(id);

        if (!nomination) {
            return NextResponse.json({ response: false, data: "Nomination not found" }, { status: 404 });
        }

        // Send Email via Zoho
        const transporter = nodemailer.createTransport({
            host: "smtppro.zoho.eu",
            port: 587,
            secure: false,
            auth: {
                user: process.env.ZOHO_EMAIL,
                pass: process.env.ZOHO_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const baseUrl = process.env.COMPANY_WEBSITE_URL || "https://britfintechawards.com";

        const templatePath = path.join(process.cwd(), "public", "Email", "Register.html");
        let userMailContent = "";

        if (fs.existsSync(templatePath)) {
            userMailContent = fs.readFileSync(templatePath, "utf8");
            userMailContent = userMailContent
                .split("[company_website_src]").join(`${baseUrl}/Email/`)
                .split("[First_Name]").join(nomination.firstName)
                .split("[NCompany_Name]").join(nomination.companynm)
                .split("[Email_ID_of_enquirer]").join(nomination.email)
                .split("[contact_no]").join("+44 20 3828 3277")
                .split("[email_id]").join("kudos@britfintechawards.com")
                .split("[email_id1]").join("mailto:kudos@britfintechawards.com")
                .split("[company_name]").join("Brit FinTech Awards")
                .split("[company_reg_no]").join("15854743")
                .split("[company_reg_office]").join("71-75 Shelton Street, Covent Garden, London, WC2H 9JQ")
                .split("[theme_color]").join("#010057")
                .split("[privacy_policy]").join(`${baseUrl}/privacy-policy`)
                .split("[company_website]").join(baseUrl)
                .split("[company_website_nm]").join("britfintechawards.com")
                .split("[Instagram-social]").join("https://www.instagram.com/britfintechawards")
                .split("[facebook-social]").join("https://www.facebook.com/profile.php?id=61562935702047")
                .split("[Linkedin-social]").join("https://www.linkedin.com/company/britfintechawards");
        } else {
            userMailContent = `<h3>Thank you for nominating for the Brit Fintech Awards, ${nomination.firstName}!</h3>
            <p>We have received your nomination for <strong>${nomination.companynm}</strong>.</p>
            <p>Our team will review your application and be in touch shortly.</p>`;
        }

        await transporter.sendMail({
            from: process.env.ZOHO_EMAIL,
            to: nomination.email,
            subject: "Nomination Saved - Brit Fintech Awards 2026",
            html: userMailContent,
        });

        return NextResponse.json({ response: true, data: "Confirmation email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error("Error in Nomination manual email endpoint:", error);
        return NextResponse.json({ response: false, data: error.message || "Internal Server Error" }, { status: 500 });
    }
}
