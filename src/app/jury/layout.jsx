import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import JuryPortalShell from "./JuryPortalShell";

/**
 * Server-side gate: /jury/* is OTP-authenticated jury only.
 * Passes session into SessionProvider so reload does not flash a broken preload.
 */
export default async function JuryLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id || session?.error === "SessionInvalid") {
    redirect("/jury-login");
  }

  if (session.user.role !== "jury") {
    redirect("/admin");
  }

  return <JuryPortalShell session={session}>{children}</JuryPortalShell>;
}
