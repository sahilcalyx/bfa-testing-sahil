import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Nomination from "@/lib/models/Nomination";
import { v2 as cloudinary } from "cloudinary";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

// Configure Cloudinary credentials
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Helper function to upload file buffer to Cloudinary
const uploadToCloudinary = (fileBuffer, fileName) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                folder: "website/nomination",
                resource_type: "auto",
                use_filename: true,
                unique_filename: true,
            },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        ).end(fileBuffer);
    });
};

export async function POST(req) {
    try {
        await connectToDatabase();

        // Parse FormData
        const formData = await req.formData();

        // Extract fields
        const titleid = formData.get("titleid") || "";
        // Map title ID to name if it's numeric, to match the layout
        let title = formData.get("title") || "";
        if (!title) {
            if (titleid === "1") title = "Mr";
            else if (titleid === "2") title = "Mrs";
            else if (titleid === "3") title = "Miss";
            else if (titleid === "5") title = "Other";
        }

        const firstName = formData.get("firstName") || "";
        const lastName = formData.get("lastName") || "";
        const phoneNo = formData.get("phoneNo") || "";
        const email = String(formData.get("email") || "").toLowerCase().trim();
        const companynm = String(formData.get("companynm") || "").trim();
        const companyaddress = formData.get("companyaddress") || "";
        const amountingbp = formData.get("amountingbp") || "";
        const companysector = formData.get("companysector") || "";
        const companyregnumber = formData.get("companyregnumber") || "";
        const serviceyouOffer = formData.get("serviceyouOffer") || "";
        const websiteurl = formData.get("websiteurl") || "";
        const aboutyourself = formData.get("aboutyourself") || "";
        const howmanyperson = formData.get("howmanyperson") || "0";
        const businesscorridors = formData.get("businesscorridors") || "";
        const reCaptcha = formData.get("reCaptcha") || formData.get("recaptchaToken") || "";

        if (!email || !companynm || !firstName || !lastName) {
            return NextResponse.json(
                { response: false, data: "Missing required nomination fields" },
                { status: 400 }
            );
        }

        // Serialize concurrent submits for same email+company (stops parallel duplicates)
        const lockKey = `${email}|${companynm.toLowerCase()}`;
        const locks = globalThis.__nominationSubmitLocks || new Map();
        globalThis.__nominationSubmitLocks = locks;
        if (locks.has(lockKey)) {
            return await locks.get(lockKey);
        }

        let resolveLock;
        const lockPromise = new Promise((resolve) => {
            resolveLock = resolve;
        });
        locks.set(lockKey, lockPromise);

        try {
        const result = await (async () => {
        // Prevent duplicate entries + duplicate admin emails from multi-submit
        const recentDuplicate = await Nomination.findOne({
            email,
            companynm,
            createdAt: { $gte: new Date(Date.now() - 15 * 60 * 1000) },
        }).sort({ createdAt: -1 });

        if (recentDuplicate) {
            return NextResponse.json(
                {
                    response: true,
                    data: {
                        id: recentDuplicate._id,
                        nomination: recentDuplicate,
                        duplicate: true,
                    },
                    message: "Nomination already received. Continuing with existing entry.",
                },
                { status: 200 }
            );
        }

        // Parse award categories array
        let awardcate = [];
        const awardcateValues = formData.getAll("awardcate");
        if (awardcateValues.length === 1 && typeof awardcateValues[0] === "string") {
            try {
                const parsed = JSON.parse(awardcateValues[0]);
                if (Array.isArray(parsed)) {
                    awardcate = parsed;
                } else {
                    awardcate = awardcateValues[0].split(",").map(s => s.trim()).filter(Boolean);
                }
            } catch {
                awardcate = awardcateValues[0].split(",").map(s => s.trim()).filter(Boolean);
            }
        } else {
            awardcate = awardcateValues.map(v => typeof v === "string" ? v.trim() : v).filter(Boolean);
        }

        // Upload files to Cloudinary if they exist
        const uploadfile = formData.get("uploadfile");
        const uploadfileoptional = formData.get("uploadfileoptional");

        let uploadfileUrl = "";
        let uploadfileoptionalUrl = "";

        if (uploadfile && uploadfile.size > 0 && typeof uploadfile.arrayBuffer === "function") {
            const arrayBuffer = await uploadfile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const uploadResult = await uploadToCloudinary(buffer, uploadfile.name);
            uploadfileUrl = uploadResult.secure_url;
        }

        if (uploadfileoptional && uploadfileoptional.size > 0 && typeof uploadfileoptional.arrayBuffer === "function") {
            const arrayBuffer = await uploadfileoptional.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const uploadResult = await uploadToCloudinary(buffer, uploadfileoptional.name);
            uploadfileoptionalUrl = uploadResult.secure_url;
        }

        // Save pre-inquiry nomination details to MongoDB
        const nominationData = {
            title,
            firstName,
            lastName,
            phoneNo,
            email,
            companynm,
            companyaddress,
            amountingbp,
            companysector,
            companyregnumber,
            serviceyouOffer,
            awardcate,
            websiteurl,
            aboutyourself,
            uploadfile: uploadfileUrl || (uploadfile && typeof uploadfile === "string" ? uploadfile : ""),
            uploadfileoptional: uploadfileoptionalUrl || (uploadfileoptional && typeof uploadfileoptional === "string" ? uploadfileoptional : ""),
            paymentStatus: "pending",
            howmanyperson,
            businesscorridors,
            reCaptcha,
        };

        const newNomination = await Nomination.create(nominationData);

        // Send Email Notifications
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

        // 2. Send nomination notification to admin
        try {
            const adminMailOptions = {
                from: process.env.ZOHO_EMAIL,
                to: process.env.ZOHO_EMAIL,
                subject: `New Pre-Inquiry Nomination 2026: ${companynm}`,
                html: `
                <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e3e8ee; border-radius: 12px; background-color: #f7f9fc;">
                    <div style="background-color: #010057; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
                        <h2 style="color: #ffffff; margin: 0; font-size: 22px;">New Award Nomination (Pre-Inquiry)</h2>
                    </div>
                     <div style="padding: 30px; background-color: #ffffff; border-radius: 0 0 8px 8px;">
                         <p style="font-size: 16px; color: #1a1f36; line-height: 1.6; margin-bottom: 25px; font-weight: 500;">
                             A new nomination has been submitted. Please log in to the admin panel to check all details.
                         </p>
                         <div style="margin-bottom: 25px; border-bottom: 1px solid #e3e8ee; padding-bottom: 15px;">
                             <span style="color: #697386; font-size: 14px; text-transform: uppercase; font-weight: 600;">Nomination Overview</span>
                             <p style="margin: 8px 0; font-size: 15px; color: #1a1f36;"><strong>Name:</strong> ${title} ${firstName} ${lastName}</p>
                             <p style="margin: 8px 0; font-size: 15px; color: #1a1f36;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #635bff; text-decoration: none;">${email}</a></p>
                             <p style="margin: 8px 0; font-size: 15px; color: #1a1f36;"><strong>Company Name:</strong> ${companynm}</p>
                             <p style="margin: 8px 0; font-size: 15px; color: #1a1f36;"><strong>Company Email:</strong> <a href="mailto:${email}" style="color: #635bff; text-decoration: none;">${email}</a></p>
                         </div>
                        <div style="margin-top: 30px; text-align: center;">
                            <a href="${baseUrl}/admin/nominations" style="background-color: #635bff; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; display: inline-block;">Login to View Nominations</a>
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
            console.error("Admin Email Alert Failed:", adminEmailError);
        }

        return NextResponse.json({
            response: true,
            data: {
                id: newNomination._id,
                nomination: newNomination,
            },
            message: "Award nomination details saved successfully!"
        }, { status: 200 });
        })();

        resolveLock(result);
        return result;
        } catch (lockError) {
            const failRes = NextResponse.json(
                { response: false, data: lockError.message || "Internal Server Error" },
                { status: 500 }
            );
            resolveLock(failRes);
            throw lockError;
        } finally {
            locks.delete(lockKey);
        }

    } catch (error) {
        console.error("Error in Nomination POST API:", error);
        return NextResponse.json({ response: false, data: error.message || "Internal Server Error" }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.id || session?.error === "SessionInvalid") {
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
        const listAll = searchParams.get("listAll") === "1";

        const filters = [];

        // Jury: only explicitly assigned nominations (or categories if none picked)
        if (session.user?.role === "jury") {
            const { getJuryAccess, buildJuryNominationQuery } = await import("@/lib/authHelpers");
            const access = await getJuryAccess(session.user.id);
            filters.push(buildJuryNominationQuery(access));
        }

        if (search) {
            filters.push({
                $or: [
                    { firstName: { $regex: search, $options: "i" } },
                    { lastName: { $regex: search, $options: "i" } },
                    { email: { $regex: search, $options: "i" } },
                    { companynm: { $regex: search, $options: "i" } },
                    { awardcate: { $regex: search, $options: "i" } },
                ],
            });
        }

        if (paymentStatus) {
            filters.push({ paymentStatus });
        }

        if (startDate || endDate) {
            const createdAt = {};
            if (startDate) createdAt.$gte = new Date(startDate);
            if (endDate) {
                const end = new Date(endDate);
                end.setHours(23, 59, 59, 999);
                createdAt.$lte = end;
            }
            filters.push({ createdAt });
        }

        const query = filters.length ? { $and: filters } : {};

        // Admin assigning nominations to jury: lightweight list
        if (listAll && session.user?.role === "admin") {
            const nominations = await Nomination.find(query)
                .select("firstName lastName companynm awardcate email paymentStatus createdAt")
                .sort({ createdAt: -1 })
                .limit(500);
            return NextResponse.json({
                response: true,
                data: nominations,
                pagination: {
                    totalCount: nominations.length,
                    totalPages: 1,
                    currentPage: 1,
                    limit: nominations.length,
                },
            });
        }

        const totalCount = await Nomination.countDocuments(query);
        const totalPages = Math.ceil(totalCount / limit);

        const nominations = await Nomination.find(query)
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        const isJury = session.user?.role === "jury";
        const data = isJury
            ? nominations.map((n) => {
                const obj = n.toObject();
                const kindFromUrl = (url) => {
                    const lower = (url || "").toLowerCase().split("?")[0];
                    if (/\.(png|jpe?g|webp|gif)$/.test(lower)) return "image";
                    if (lower.endsWith(".pdf") || lower.includes("/raw/upload/")) return "pdf";
                    if (/\.(docx?|xlsx?|pptx?)$/.test(lower)) return "office";
                    return "pdf";
                };
                const isValidDoc = (url) => {
                    const s = url == null ? "" : String(url).trim();
                    return Boolean(
                        s &&
                        !["null", "undefined"].includes(s.toLowerCase()) &&
                        /^https?:\/\//i.test(s)
                    );
                };
                const hasPrimary = isValidDoc(obj.uploadfile);
                return {
                    ...obj,
                    // Never expose raw Cloudinary URLs to jury clients
                    hasPrimaryDocument: hasPrimary,
                    primaryDocumentKind: hasPrimary ? kindFromUrl(obj.uploadfile) : null,
                    uploadfile: hasPrimary
                        ? `/api/nomination/document?id=${obj._id}&type=primary`
                        : "",
                    // Optional documents are hidden from jury
                    hasOptionalDocument: false,
                    optionalDocumentKind: null,
                    uploadfileoptional: "",
                    // Hide payment admin fields + team size from jury review surface
                    paymentStatus: undefined,
                    reCaptcha: undefined,
                    howmanyperson: undefined,
                };
            })
            : nominations;

        return NextResponse.json({
            response: true,
            data,
            pagination: {
                totalCount,
                totalPages,
                currentPage: page,
                limit,
            },
            readOnly: isJury,
        }, { status: 200 });
    } catch (error) {
        console.error("Error in Nomination GET API:", error);
        return NextResponse.json({ response: false, data: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(req) {
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
        const { id, paymentStatus } = data;

        if (!id || !paymentStatus) {
            return NextResponse.json({ response: false, data: "ID and paymentStatus are required" }, { status: 400 });
        }

        const updatedNomination = await Nomination.findByIdAndUpdate(
            id,
            { paymentStatus },
            { new: true }
        );

        if (!updatedNomination) {
            return NextResponse.json({ response: false, data: "Nomination not found" }, { status: 404 });
        }

        return NextResponse.json({ response: true, data: updatedNomination }, { status: 200 });
    } catch (error) {
        console.error("Error in Nomination PATCH API:", error);
        return NextResponse.json({ response: false, data: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.id || session?.error === "SessionInvalid") {
            return NextResponse.json({ response: false, data: "Unauthorized" }, { status: 401 });
        }
        if (session.user?.role === "jury") {
            return NextResponse.json({ response: false, data: "Forbidden — read-only access" }, { status: 403 });
        }
        await connectToDatabase();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ response: false, data: "Nomination ID is required" }, { status: 400 });
        }

        const deletedNomination = await Nomination.findByIdAndDelete(id);

        if (!deletedNomination) {
            return NextResponse.json({ response: false, data: "Nomination not found" }, { status: 404 });
        }

        return NextResponse.json({ response: true, data: "Nomination deleted successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting nomination:", error);
        return NextResponse.json({ response: false, data: "Internal Server Error" }, { status: 500 });
    }
}
