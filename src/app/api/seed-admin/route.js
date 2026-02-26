import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Admin from "@/lib/models/Admin";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        // Optionally allow passing via body, or fallback to env vars for safety
        const body = await req.json().catch(() => ({}));
        const email = body.email || process.env.ADMIN_EMAIL;
        const password = body.password || process.env.ADMIN_PASSWORD;

        if (!email || !password) {
            return NextResponse.json({
                response: false,
                data: "Please provide email and password in body or ADMIN_EMAIL/ADMIN_PASSWORD env vars"
            }, { status: 400 });
        }

        await connectToDatabase();

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return NextResponse.json({ response: false, data: "Admin already exists" }, { status: 400 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create Admin
        await Admin.create({
            email,
            password: hashedPassword,
        });

        return NextResponse.json({ response: true, data: "Admin created successfully" }, { status: 201 });
    } catch (error) {
        console.error("Seed Admin Error:", error);
        return NextResponse.json({ response: false, data: "Internal Server Error" }, { status: 500 });
    }
}
