import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDatabase from "@/lib/db";
import Admin from "@/lib/models/Admin";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "OTP",
            credentials: {
                email: { label: "Email", type: "email" },
                otp: { label: "OTP", type: "text" },
            },
            async authorize(credentials) {
                await connectToDatabase();

                const { email, otp } = credentials;
                const admin = await Admin.findOne({ email });

                if (!admin) {
                    throw new Error("Invalid User");
                }

                // Validate OTP
                if (admin.otp !== otp) {
                    throw new Error("Invalid OTP");
                }

                // Validate Expiry
                if (new Date() > admin.otpExpires) {
                    throw new Error("OTP Expired");
                }

                // Clear OTP after successful login
                admin.otp = null;
                admin.otpExpires = null;
                await admin.save();

                return { id: admin._id, email: admin.email, name: "Admin" };
            },
        }),
    ],
    pages: {
        signIn: "/admin/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
            }
            return session;
        }
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET || "fallback_secret_for_dev_only",
});

export { handler as GET, handler as POST };
