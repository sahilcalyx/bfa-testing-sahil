import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Booking from "@/lib/models/Booking";
import nodemailer from "nodemailer";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ response: false, data: "Unauthorized" }, { status: 401 });
        }
        await connectToDatabase();
        const data = await req.json();
        const { id } = data;

        if (!id) {
            return NextResponse.json({ response: false, data: "Booking ID is required" }, { status: 400 });
        }

        const booking = await Booking.findById(id);

        if (!booking) {
            return NextResponse.json({ response: false, data: "Booking not found" }, { status: 404 });
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
        const totalAmount = booking.tickets * 195;

        let attendeesTableRows = "";
        if (booking.attendees && booking.attendees.length > 0) {
            attendeesTableRows = booking.attendees.map((att, idx) => `
                <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 6px 0; color: #697386;">Attendee ${idx + 2}</td>
                    <td style="padding: 6px 0; text-align: right; font-weight: 600; color: #1a1f36;">${att.fullName} (${att.email})</td>
                </tr>
            `).join('');
        }

        const mailContent = `
        <div style="font-family: 'Outfit', 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e3e8ee; border-radius: 16px; background-color: #f7f9fc;">
            <div style="background-color: #010057; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; color: #ffffff;">
                <h2 style="margin: 0; font-size: 24px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Ticket Booking Confirmed</h2>
                <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">Brit FinTech Awards 2026</p>
            </div>
            <div style="padding: 30px; background-color: #ffffff; border-radius: 0 0 12px 12px; border-top: none;">
                <p style="font-size: 16px; line-height: 1.6; color: #1a1f36; margin-top: 0;">
                    Dear ${booking.title || ""} ${booking.fullName},
                </p>
                <p style="font-size: 16px; line-height: 1.6; color: #4f566b;">
                    We are delighted to confirm your ticket booking for the prestigious **Brit Fintech Awards 2026**. Your order has been successfully processed.
                </p>

                <!-- Ticket details block -->
                <div style="margin: 30px 0; padding: 20px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px;">
                    <h3 style="margin-top: 0; color: #010057; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Booking Details</h3>
                    <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                        <tr>
                            <td style="padding: 6px 0; color: #697386;">Transaction ID</td>
                            <td style="padding: 6px 0; text-align: right; font-weight: 600; color: #1a1f36;">#${booking._id.toString().substring(0, 12).toUpperCase()}</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 0; color: #697386;">Company Name</td>
                            <td style="padding: 6px 0; text-align: right; font-weight: 600; color: #1a1f36;">${booking.companyName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 0; color: #697386;">Tickets Booked</td>
                            <td style="padding: 6px 0; text-align: right; font-weight: 600; color: #1a1f36;">${booking.tickets} ${booking.tickets > 1 ? "Tickets" : "Ticket"}</td>
                        </tr>
                        ${attendeesTableRows}
                        <tr style="border-top: 1px dashed #e2e8f0;">
                            <td style="padding: 12px 0 0 0; color: #010057; font-weight: 700; font-size: 16px;">Amount Paid</td>
                            <td style="padding: 12px 0 0 0; text-align: right; font-weight: 800; color: #010057; font-size: 18px;">£${totalAmount}.00</td>
                        </tr>
                    </table>
                </div>

                <p style="font-size: 15px; line-height: 1.6; color: #4f566b;">
                    One of our team members will be in touch with you shortly to coordinate dietary requirements, attendee names, and event access details.
                </p>
                
                <p style="font-size: 15px; line-height: 1.6; color: #4f566b; margin-bottom: 30px;">
                    We look forward to hosting you for an evening of networking and celebration of innovation in the UK financial technology sector!
                </p>

                <p style="font-size: 14px; color: #697386; margin: 30px 0 0 0; text-align: center; border-top: 1px solid #e3e8ee; padding-top: 20px;">
                    Questions? Email us at <a href="mailto:kudos@britfintechawards.com" style="color: #635bff; text-decoration: none; font-weight: 600;">kudos@britfintechawards.com</a> or call <a href="tel:+442038283277" style="color: #635bff; text-decoration: none; font-weight: 600;">+44 20 3828 3277</a>
                </p>
            </div>
            <div style="margin-top: 20px; text-align: center; font-size: 12px; color: #8792a2;">
                © ${new Date().getFullYear()} Brit FinTech Awards. All rights reserved.<br/>
                71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
            </div>
        </div>
        `;

        await transporter.sendMail({
            from: process.env.ZOHO_EMAIL,
            to: booking.email,
            subject: `Ticket Booking Confirmed: ${booking.fullName} - Brit Fintech Awards 2026`,
            html: mailContent,
        });

        return NextResponse.json({ response: true, data: "Ticket confirmation email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error("Error in Booking manual email endpoint:", error);
        return NextResponse.json({ response: false, data: error.message || "Internal Server Error" }, { status: 500 });
    }
}
