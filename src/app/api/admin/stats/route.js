import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Contact from "@/lib/models/Contact";
import Sponsor from "@/lib/models/Sponsor";

export async function GET() {
    try {
        await connectToDatabase();

        const totalEnquiries = await Contact.countDocuments();
        const totalSponsors = await Sponsor.countDocuments();

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
