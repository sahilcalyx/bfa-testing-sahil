import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectToDatabase from "@/lib/db";
import Admin from "@/lib/models/Admin";
import mongoose from "mongoose";

export async function getAuthSession() {
  return getServerSession(authOptions);
}

export async function requireSession() {
  const session = await getAuthSession();
  if (!session?.user?.id || session?.error === "SessionInvalid") {
    return {
      error: Response.json(
        { response: false, data: "Unauthorized" },
        { status: 401 }
      ),
    };
  }

  // Extra DB check — blocks API use immediately after delete/disable
  await connectToDatabase();
  const dbUser = await Admin.findById(session.user.id)
    .select("_id isActive role")
    .lean();
  if (!dbUser || dbUser.isActive === false) {
    return {
      error: Response.json(
        { response: false, data: "Session ended — account removed or disabled" },
        { status: 401 }
      ),
    };
  }

  return { session };
}

export async function requireAdmin() {
  const result = await requireSession();
  if (result.error) return result;
  if (result.session.user.role !== "admin") {
    return {
      error: Response.json(
        { response: false, data: "Forbidden — admin access required" },
        { status: 403 }
      ),
    };
  }
  return result;
}

export async function requireJury() {
  const result = await requireSession();
  if (result.error) return result;
  if (result.session.user.role !== "jury") {
    return {
      error: Response.json(
        { response: false, data: "Forbidden — jury access required" },
        { status: 403 }
      ),
    };
  }
  return result;
}

/** Fresh jury assignment data from DB (not stale JWT). */
export async function getJuryAccess(userId) {
  await connectToDatabase();
  const user = await Admin.findById(userId).lean();
  if (!user || user.role !== "jury" || user.isActive === false) return null;
  return {
    assignedCategories: user.assignedCategories || [],
    assignedNominations: (user.assignedNominations || []).map((id) =>
      id.toString()
    ),
  };
}

function toObjectIds(ids = []) {
  return ids
    .map((id) => {
      try {
        if (!id) return null;
        if (id instanceof mongoose.Types.ObjectId) return id;
        if (mongoose.Types.ObjectId.isValid(id)) {
          return new mongoose.Types.ObjectId(String(id));
        }
        return null;
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}

/**
 * Jury visibility rules:
 * 1) If specific nominations are assigned → show ONLY those (never unselected ones).
 * 2) Else if only categories are assigned → show nominations in those categories.
 * 3) Else → show nothing.
 */
export function buildJuryNominationQuery(access) {
  if (!access) return { _id: null };

  const nomIds = toObjectIds(access.assignedNominations || []);

  // Explicit nomination picks always win — do not OR with category matches
  if (nomIds.length > 0) {
    return { _id: { $in: nomIds } };
  }

  if (access.assignedCategories?.length) {
    return { awardcate: { $in: access.assignedCategories } };
  }

  // No assignments → see nothing
  return { _id: null };
}
