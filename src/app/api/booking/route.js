import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Booking from "@/lib/models/Booking";
import nodemailer from "nodemailer";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
    try {
        await connectToDatabase();
        const data = await req.json();

        // Save pre-inquiry booking to MongoDB
        const newBooking = await Booking.create({
            title: data.title,
            fullName: data.fullName,
            companyName: data.companyName,
            email: data.email,
            phone: data.mobile || data.phone,
            tickets: parseInt(data.tickets),
            paymentStatus: "pending",
            reCaptcha: data.recaptchaToken || data.reCaptcha || "",
        });

        // Send Notification Email to Admin
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

        try {
            const adminMailOptions = {
                from: process.env.ZOHO_EMAIL,
                to: process.env.ZOHO_EMAIL,
                subject: `New Ticket Booking Pre-Inquiry 2026: ${data.fullName}`,
                html: `
                <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e3e8ee; border-radius: 12px; background-color: #f7f9fc;">
                    <div style="background-color: #010057; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
                        <h2 style="color: #ffffff; margin: 0; font-size: 22px;">New Ticket Booking (Pre-Inquiry)</h2>
                    </div>
                    <div style="padding: 30px; background-color: #ffffff; border-radius: 0 0 8px 8px;">
                        <div style="margin-bottom: 25px; border-bottom: 1px solid #e3e8ee; padding-bottom: 15px;">
                            <span style="color: #697386; font-size: 14px; text-transform: uppercase; font-weight: 600;">Attendee details</span>
                            <p style="margin: 8px 0; font-size: 18px; color: #1a1f36; font-weight: 700;">${data.title} ${data.fullName}</p>
                            <p style="margin: 8px 0; font-size: 14px; color: #697386;"><strong>Company:</strong> ${data.companyName}</p>
                            <p style="margin: 8px 0; font-size: 14px; color: #697386;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #635bff; text-decoration: none;">${data.email}</a></p>
                            <p style="margin: 8px 0; font-size: 14px; color: #697386;"><strong>Phone:</strong> ${data.mobile || data.phone}</p>
                        </div>
                        <div style="margin-bottom: 25px;">
                            <span style="color: #697386; font-size: 14px; text-transform: uppercase; font-weight: 600;">Booking Details</span>
                            <p style="margin: 8px 0; font-size: 16px; color: #1a1f36; font-weight: 700;"><strong>Tickets:</strong> ${data.tickets}</p>
                            <p style="margin: 8px 0; font-size: 14px; color: #697386;"><strong>Total Amount:</strong> £${parseInt(data.tickets) * 195}</p>
                            <p style="margin: 8px 0; font-size: 14px; color: #697386;"><strong>Payment Status:</strong> Pending</p>
                        </div>
                        <div style="margin-top: 30px; text-align: center;">
                            <a href="${baseUrl}/admin/bookings" style="background-color: #635bff; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; display: inline-block;">View Bookings in Admin</a>
                        </div>
                    </div>
                    <p style="text-align: center; color: #8792a2; font-size: 12px; margin-top: 20px;">
                        © ${new Date().getFullYear()} Brit FinTech Awards. All rights reserved.
                    </p>
                </div>
                `,
            };

            await transporter.sendMail(adminMailOptions);
        } catch (adminEmailError) {
            console.error("Admin Ticket Booking Email Alert Failed:", adminEmailError);
        }

        return NextResponse.json({
            response: true,
            data: {
                id: newBooking._id,
                booking: newBooking
            },
            message: "Ticket booking pre-saved successfully!"
        }, { status: 200 });

    } catch (error) {
        console.error("Error in Booking POST API:", error);
        return NextResponse.json({ response: false, data: error.message || "Internal Server Error" }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ response: false, data: "Unauthorized" }, { status: 401 });
        }
        await connectToDatabase();

        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page")) || 1;
        const limit = parseInt(searchParams.get("limit")) || 10;
        const search = searchParams.get("search") || "";
        const startDate = searchParams.get("startDate");
        const endDate = searchParams.get("endDate");
        const paymentStatus = searchParams.get("paymentStatus") || "";

        const query = {};

        if (search) {
            query.$or = [
                { fullName: { $regex: search, $options: "i" } },
                { email: { $regex: search, $options: "i" } },
                { companyName: { $regex: search, $options: "i" } },
            ];
        }

        if (paymentStatus) {
            query.paymentStatus = paymentStatus;
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

        const totalCount = await Booking.countDocuments(query);
        const totalPages = Math.ceil(totalCount / limit);

        const bookings = await Booking.find(query)
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        return NextResponse.json({
            response: true,
            data: bookings,
            pagination: {
                totalCount,
                totalPages,
                currentPage: page,
                limit
            }
        }, { status: 200 });
    } catch (error) {
        console.error("Error in Booking GET API:", error);
        return NextResponse.json({ response: false, data: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(req) {
    try {
        await connectToDatabase();
        const data = await req.json();
        const { id, paymentStatus } = data;

        if (!id || !paymentStatus) {
            return NextResponse.json({ response: false, data: "ID and paymentStatus are required" }, { status: 400 });
        }

        const updatedBooking = await Booking.findByIdAndUpdate(
            id,
            { paymentStatus },
            { new: true }
        );

        if (!updatedBooking) {
            return NextResponse.json({ response: false, data: "Booking not found" }, { status: 404 });
        }

        return NextResponse.json({ response: true, data: updatedBooking }, { status: 200 });
    } catch (error) {
        console.error("Error in Booking PATCH API:", error);
        return NextResponse.json({ response: false, data: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ response: false, data: "Unauthorized" }, { status: 401 });
        }
        await connectToDatabase();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ response: false, data: "Booking ID is required" }, { status: 400 });
        }

        const deletedBooking = await Booking.findByIdAndDelete(id);

        if (!deletedBooking) {
            return NextResponse.json({ response: false, data: "Booking not found" }, { status: 404 });
        }

        return NextResponse.json({ response: true, data: "Booking deleted successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting booking:", error);
        return NextResponse.json({ response: false, data: "Internal Server Error" }, { status: 500 });
    }
}
