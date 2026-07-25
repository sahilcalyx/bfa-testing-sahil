import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDatabase from "@/lib/db";
import Admin from "@/lib/models/Admin";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "OTP",
      credentials: {
        email: { label: "Email", type: "email" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        await connectToDatabase();

        const email = (credentials?.email || "").toLowerCase().trim();
        const otp = credentials?.otp;
        const user = await Admin.findOne({ email });

        if (!user) {
          throw new Error("Invalid User");
        }

        if (user.isActive === false) {
          throw new Error("Account is disabled");
        }

        if (user.otp !== otp) {
          throw new Error("Invalid OTP");
        }

        if (new Date() > user.otpExpires) {
          throw new Error("OTP Expired");
        }

        user.otp = null;
        user.otpExpires = null;
        await user.save();

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name || (user.role === "jury" ? "Jury" : "Admin"),
          role: user.role || "admin",
          assignedCategories: user.assignedCategories || [],
          assignedNominations: (user.assignedNominations || []).map((id) =>
            id.toString()
          ),
        };
      },
    }),
  ],
  pages: {
    // Default NextAuth sign-in; jury middleware/layout send jury users to /jury-login
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.assignedCategories = user.assignedCategories || [];
        token.assignedNominations = user.assignedNominations || [];
        token.name = user.name;
        token.email = user.email;
        token.error = undefined;
      }

      // Re-validate against DB so deleted / disabled users are logged out
      if (token?.id) {
        try {
          await connectToDatabase();
          const dbUser = await Admin.findById(token.id)
            .select(
              "email name role isActive assignedCategories assignedNominations"
            )
            .lean();

          if (!dbUser || dbUser.isActive === false) {
            return {
              ...token,
              id: undefined,
              role: undefined,
              error: "SessionInvalid",
            };
          }

          token.role = dbUser.role || "admin";
          token.name = dbUser.name || token.name;
          token.email = dbUser.email || token.email;
          token.assignedCategories = dbUser.assignedCategories || [];
          token.assignedNominations = (dbUser.assignedNominations || []).map(
            (id) => id.toString()
          );
          token.error = undefined;
        } catch (err) {
          console.error("JWT session validation error:", err);
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (token?.error === "SessionInvalid" || !token?.id) {
        return {
          ...session,
          user: undefined,
          error: "SessionInvalid",
        };
      }

      if (token && session.user) {
        session.user.id = token.id;
        session.user.role = token.role || "admin";
        session.user.assignedCategories = token.assignedCategories || [];
        session.user.assignedNominations = token.assignedNominations || [];
        session.user.name = token.name;
        session.user.email = token.email || session.user.email;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback_secret_for_dev_only",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
