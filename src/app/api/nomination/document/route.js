import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectToDatabase from "@/lib/db";
import Nomination from "@/lib/models/Nomination";
import {
  getJuryAccess,
  buildJuryNominationQuery,
} from "@/lib/authHelpers";

function guessContentType(url) {
  const lower = (url || "").toLowerCase().split("?")[0];
  if (lower.endsWith(".pdf")) return "application/pdf";
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  if (lower.endsWith(".webp")) return "image/webp";
  if (lower.endsWith(".gif")) return "image/gif";
  if (lower.endsWith(".doc")) return "application/msword";
  if (lower.endsWith(".docx"))
    return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  return "application/octet-stream";
}

function fileNameFromUrl(url, fallback) {
  try {
    const path = new URL(url).pathname;
    const name = path.split("/").pop() || fallback;
    return decodeURIComponent(name);
  } catch {
    return fallback;
  }
}

/**
 * Protected document viewer for nominations.
 * Jury: only assigned nominations; Content-Disposition: inline (view, not attachment download).
 */
export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id || session?.error === "SessionInvalid") {
      return NextResponse.json(
        { response: false, data: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const type = searchParams.get("type") || "primary"; // primary | optional
    const mode = searchParams.get("mode") || "view";
    const isJury = session.user.role === "jury";

    if (!id) {
      return NextResponse.json(
        { response: false, data: "Nomination ID is required" },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const nomination = await Nomination.findById(id).lean();
    if (!nomination) {
      return NextResponse.json(
        { response: false, data: "Nomination not found" },
        { status: 404 }
      );
    }

    // Jury: only assigned nominations may view
    if (isJury) {
      const access = await getJuryAccess(session.user.id);
      const query = buildJuryNominationQuery(access);
      const allowed = await Nomination.exists({
        $and: [{ _id: nomination._id }, query],
      });
      if (!allowed) {
        return NextResponse.json(
          { response: false, data: "Forbidden" },
          { status: 403 }
        );
      }
    } else if (session.user.role !== "admin") {
      return NextResponse.json(
        { response: false, data: "Forbidden" },
        { status: 403 }
      );
    }

    const remoteUrl =
      type === "optional"
        ? nomination.uploadfileoptional
        : nomination.uploadfile;

    const urlStr = remoteUrl == null ? "" : String(remoteUrl).trim();
    const isValidUrl =
      urlStr &&
      !["null", "undefined", ""].includes(urlStr.toLowerCase()) &&
      /^https?:\/\//i.test(urlStr);

    // Optional docs are not exposed in admin/jury UI — reject optional type
    if (type === "optional") {
      return NextResponse.json(
        { response: false, data: "Optional documents are not available" },
        { status: 404 }
      );
    }

    if (!isValidUrl) {
      return NextResponse.json(
        { response: false, data: "No document uploaded" },
        { status: 404 }
      );
    }

    // Jury: block opening the file URL directly in a new tab / iframe
    // (browser navigation) so download chrome cannot be used. Allow XHR/fetch only.
    if (isJury) {
      const dest = (req.headers.get("sec-fetch-dest") || "").toLowerCase();
      if (["document", "iframe", "embed", "object"].includes(dest)) {
        return new NextResponse(
          "This document is view-only inside the jury portal and cannot be opened or downloaded directly.",
          {
            status: 403,
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
              "Cache-Control": "no-store",
            },
          }
        );
      }
    }

    const upstream = await fetch(urlStr);
    if (!upstream.ok) {
      return NextResponse.json(
        { response: false, data: "Failed to load document" },
        { status: 502 }
      );
    }

    const contentType =
      upstream.headers.get("content-type") || guessContentType(urlStr);
    const buffer = Buffer.from(await upstream.arrayBuffer());
    const fileName = fileNameFromUrl(urlStr, "supporting-document");

    // Jury: view-only stream — inline, no attachment filename prompt
    const headers = {
      "Content-Type": contentType.split(";")[0].trim(),
      "Cache-Control": "private, no-store, no-cache, must-revalidate",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    };

    if (isJury || mode === "view") {
      headers["Content-Disposition"] = "inline";
      headers["Content-Security-Policy"] =
        "default-src 'none'; sandbox; frame-ancestors 'self'";
      // Soft signal for clients / proxies — not attachment
      headers["X-Download-Options"] = "noopen";
    } else {
      headers["Content-Disposition"] = `inline; filename="${fileName.replace(/"/g, "")}"`;
    }

    return new NextResponse(buffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Document view error:", error);
    return NextResponse.json(
      { response: false, data: "Internal Server Error" },
      { status: 500 }
    );
  }
}
