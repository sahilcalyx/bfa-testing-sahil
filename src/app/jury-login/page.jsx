"use client";

import React, { useEffect, useState } from "react";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Lock, ArrowLeft } from "lucide-react";
import OTPInput from "@/components/otpinput";
import JuryPreload from "@/components/JuryPreload";

function JuryLoginForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [enteringPortal, setEnteringPortal] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("reason") === "removed") {
      Swal.fire({
        icon: "info",
        title: "Signed out",
        text: "Your jury access was removed or disabled by an administrator.",
        confirmButtonColor: "#c8102e",
      });
      router.replace("/jury-login");
    }
  }, [router]);

  useEffect(() => {
    if (status !== "authenticated" || !session?.user?.id || session?.error) return;
    setEnteringPortal(true);
    if (session.user.role === "jury") {
      router.replace("/jury/nominations");
    } else {
      router.replace("/admin");
    }
  }, [status, session, router]);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/jury-login-init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.response) {
        setStep(2);
        Swal.fire({
          icon: "success",
          title: "OTP Sent",
          text: "Check your email for the one-time code.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Access denied",
          text: data.data || "No jury account found for this email",
          confirmButtonColor: "#c8102e",
        });
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#c8102e",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        otp,
      });
      if (result?.error) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Verification failed",
          text: result.error,
          confirmButtonColor: "#c8102e",
        });
      } else {
        setEnteringPortal(true);
        const next =
          typeof window !== "undefined"
            ? new URLSearchParams(window.location.search).get("next")
            : null;
        router.push(
          next && next.startsWith("/jury") ? next : "/jury/nominations"
        );
      }
    } catch {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong during verification.",
        confirmButtonColor: "#c8102e",
      });
    }
  };

  // Full-screen branded preload right after successful OTP → nominations
  if (enteringPortal || status === "authenticated") {
    return (
      <JuryPreload
        title="Opening Jury Portal"
        subtitle="OTP verified — loading your nominations…"
      />
    );
  }

  // Quiet hydrate while checking an existing session (not post-OTP)
  if (status === "loading") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(145deg, #1a1412 0%, #3a0d16 48%, #c8102e 130%)",
        }}
        aria-busy="true"
        aria-label="Loading"
      />
    );
  }

  return (
    <div className="jl">
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Outfit:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="jl-shell">
        <aside className="jl-brand">
          <div className="jl-brand__top">
            <img
              src="/assets/img/logo-white.svg"
              alt="Brit FinTech Awards"
              className="jl-brand-logo"
              width={44}
              height={44}
            />
            <span>Brit FinTech Awards</span>
          </div>
          <div className="jl-brand__copy">
            <div className="jl-pill">
              <Lock size={13} /> Protected jury portal
            </div>
            <h1>Jury Login</h1>
            <p>
              Secure OTP access for assigned jury members. Review nominations
              and documents — view only.
            </p>
          </div>
          <div className="jl-brand__foot">
            © {new Date().getFullYear()} Brit FinTech Awards
          </div>
        </aside>

        <main className="jl-main">
          <div className="jl-card">
            {step === 2 && (
              <button
                type="button"
                className="jl-back"
                onClick={() => {
                  setStep(1);
                  setOtp("");
                }}
              >
                <ArrowLeft size={16} /> Back
              </button>
            )}

            <h2>{step === 1 ? "Sign in to jury portal" : "Verify your code"}</h2>
            <p className="jl-sub">
              {step === 1
                ? "Enter the email linked to your jury account."
                : `Enter the code sent to ${email}`}
            </p>

            {step === 1 ? (
              <form onSubmit={handleSendOtp} className="jl-form">
                <label htmlFor="jury-email">Jury email</label>
                <input
                  id="jury-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jury@example.com"
                  autoComplete="email"
                />
                <button type="submit" disabled={loading} className="jl-submit">
                  {loading ? "Sending…" : "Send OTP"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="jl-form">
                <label>One-time code</label>
                <div className="jl-otp">
                  <OTPInput
                    length={6}
                    onChange={(value) => setOtp(value)}
                    onComplete={(value) => setOtp(value)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || otp.length < 4}
                  className="jl-submit"
                >
                  {loading ? "Verifying…" : "Enter jury portal"}
                </button>
                <button
                  type="button"
                  className="jl-resend"
                  disabled={loading}
                  onClick={handleSendOtp}
                >
                  Resend code
                </button>
              </form>
            )}

            <p className="jl-note">
              Admin staff should use{" "}
              <a href="/admin/login">admin login</a> instead.
            </p>
          </div>
        </main>
      </div>

      <style jsx global>{`
        .jl {
          min-height: 100vh;
          font-family: "Outfit", system-ui, sans-serif;
          background: #f7f4f1;
          color: #1a1412;
        }

        .jl-loading {
          min-height: 100vh;
          display: grid;
          place-content: center;
          gap: 14px;
          text-align: center;
          color: #6b625c;
          font-family: "Outfit", system-ui, sans-serif;
        }

        .jl-spinner {
          width: 40px;
          height: 40px;
          margin: 0 auto;
          border-radius: 50%;
          border: 3px solid #e8e0d8;
          border-top-color: #c8102e;
          animation: jlSpin 0.8s linear infinite;
        }

        @keyframes jlSpin {
          to {
            transform: rotate(360deg);
          }
        }

        .jl-shell {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1.05fr 1fr;
        }

        .jl-brand {
          position: relative;
          padding: 36px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background:
            radial-gradient(700px 280px at 10% 0%, rgba(200, 16, 46, 0.35), transparent 55%),
            linear-gradient(145deg, #171516 0%, #3a0d16 48%, #c8102e 120%);
          overflow: hidden;
        }

        .jl-brand::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .jl-brand__top,
        .jl-brand__copy,
        .jl-brand__foot {
          position: relative;
          z-index: 1;
        }

        .jl-brand__top {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
        }

        .jl-brand-logo {
          width: 44px;
          height: 44px;
          object-fit: contain;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2));
        }

        .jl-logo {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.12);
          display: grid;
          place-items: center;
        }

        .jl-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.16);
          margin-bottom: 18px;
        }

        .jl-brand__copy h1 {
          margin: 0 0 12px;
          font-family: "Fraunces", Georgia, serif;
          font-size: clamp(34px, 5vw, 52px);
          letter-spacing: -0.03em;
          line-height: 1.05;
          color: #fff !important;
        }

        .jl-brand__top,
        .jl-pill,
        .jl-brand__foot {
          color: #fff;
        }

        .jl-brand__copy p {
          margin: 0;
          max-width: 420px;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.6;
          font-size: 16px;
        }

        .jl-brand__foot {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.55);
        }

        .jl-main {
          display: grid;
          place-items: center;
          padding: 32px 20px;
        }

        .jl-card {
          width: min(440px, 100%);
          background: #fff;
          border: 1px solid #e8e0d8;
          border-radius: 24px;
          padding: 32px 28px;
          box-shadow: 0 20px 50px rgba(26, 20, 18, 0.08);
        }

        .jl-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: none;
          background: transparent;
          color: #6b625c;
          font: inherit;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          margin-bottom: 14px;
          padding: 0;
        }

        .jl-card h2 {
          margin: 0 0 8px;
          font-family: "Fraunces", Georgia, serif;
          font-size: 28px;
          letter-spacing: -0.02em;
        }

        .jl-sub {
          margin: 0 0 24px;
          color: #6b625c;
          font-size: 14px;
          line-height: 1.5;
        }

        .jl-form {
          display: grid;
          gap: 10px;
        }

        .jl-form label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #6b625c;
        }

        .jl-form input {
          width: 100%;
          height: 48px;
          border-radius: 12px;
          border: 1px solid #e8e0d8;
          padding: 0 14px;
          font: inherit;
          font-size: 15px;
          background: #fff;
          outline: none;
        }

        .jl-form input:focus {
          border-color: #f0c9cf;
          box-shadow: 0 0 0 4px rgba(200, 16, 46, 0.1);
        }

        .jl-otp {
          margin: 6px 0 8px;
        }

        .jl-submit {
          margin-top: 8px;
          height: 48px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #c8102e, #7a0a1c);
          color: #fff;
          font: inherit;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 10px 24px rgba(200, 16, 46, 0.25);
        }

        .jl-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .jl-resend {
          border: none;
          background: transparent;
          color: #c8102e;
          font: inherit;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          padding: 8px;
        }

        .jl-note {
          margin: 22px 0 0;
          text-align: center;
          font-size: 13px;
          color: #6b625c;
        }

        .jl-note a {
          color: #c8102e;
          font-weight: 700;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .jl-shell {
            grid-template-columns: 1fr;
          }
          .jl-brand {
            min-height: auto;
            padding: 28px 24px;
          }
        }
      `}</style>
    </div>
  );
}

export default function JuryLoginPage() {
  return (
    <SessionProvider>
      <JuryLoginForm />
    </SessionProvider>
  );
}
