import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Contact from "@/lib/models/Contact";
import Sponsor from "@/lib/models/Sponsor";
import Nomination from "@/lib/models/Nomination";
import Booking from "@/lib/models/Booking";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ response: false, data: "Unauthorized" }, { status: 401 });
        }
        await connectToDatabase();

        const totalEnquiries = await Contact.countDocuments();
        const totalSponsors = await Sponsor.countDocuments();
        const totalNominations = await Nomination.countDocuments();
        const totalPaidNominations = await Nomination.countDocuments({ paymentStatus: "paid" });
        const totalBookings = await Booking.countDocuments();
        const totalPaidBookings = await Booking.countDocuments({ paymentStatus: "paid" });

        // You can add more complex stats here later (e.g., stats for today)
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const enquiriesToday = await Contact.countDocuments({
            createdAt: { $gte: today }
        });

        return NextResponse.json({
            response: true,
            data: {
                totalEnquiries,
                totalSponsors,
                totalNominations,
                totalPaidNominations,
                totalBookings,
                totalPaidBookings,
                enquiriesToday
            }
        }, { status: 200 });

    } catch (error) {
        console.error("Error fetching admin stats:", error);
        return NextResponse.json({
            response: false,
            data: "Internal Server Error"
        }, { status: 500 });
    }
}
