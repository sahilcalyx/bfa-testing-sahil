"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SessionProvider, useSession, signOut } from "next-auth/react";
import JuryPreload from "@/components/JuryPreload";

const BFA_LOGO = "/assets/img/logo.svg";

function JuryShell({ children, initialSession = null }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  // Prefer live client session; fall back to server session on reload/hydration
  const active = session?.user?.id ? session : initialSession;
  const role = active?.user?.role;
  const isJury = role === "jury" && active?.user?.id && !active?.error;

  useEffect(() => {
    if (status === "unauthenticated" && !initialSession?.user?.id) {
      router.replace("/jury-login");
    }
  }, [status, router, initialSession]);

  useEffect(() => {
    if (status !== "authenticated") return;
    if (session?.error === "SessionInvalid" || !session?.user?.id) {
      signOut({ callbackUrl: "/jury-login?reason=removed" });
      return;
    }
    if (session.user.role !== "jury") {
      router.replace("/admin");
    }
  }, [status, session, router]);

  // Cold start only — never flash branded preload on reload (server session exists)
  if (status === "loading" && !isJury) {
    return <JuryPreload />;
  }

  if (!isJury) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(145deg, #1a1412 0%, #3a0d16 48%, #c8102e 130%)",
        }}
        aria-busy="true"
        aria-label="Redirecting"
      />
    );
  }

  const onNominations = pathname.startsWith("/jury/nominations");
  const displayUser = active.user;

  return (
    <div className="jp">
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Outfit:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <header className="jp-top">
        <div className="jp-top__brand">
          <Link href="/jury/nominations" className="jp-logo-link" aria-label="BFA Jury Portal home">
            <img src={BFA_LOGO} alt="Brit FinTech Awards" width={44} height={44} />
          </Link>
          <div className="jp-top__titles">
            <div className="jp-top__name">Brit FinTech Awards</div>
            <div className="jp-top__portal">Jury Portal</div>
          </div>
        </div>

        <nav className="jp-top__nav" aria-label="Jury navigation">
          <Link
            href="/jury/nominations"
            className={`jp-nav-link${onNominations ? " is-active" : ""}`}
          >
            Nominations
          </Link>
          <span className="jp-secure">Secure · OTP verified</span>
          <div className="jp-user">
            <span className="jp-user__label">Signed in</span>
            <strong>{displayUser.name || displayUser.email}</strong>
          </div>
          <button
            type="button"
            className="jp-signout"
            onClick={() => signOut({ callbackUrl: "/jury-login" })}
          >
            Sign out
          </button>
        </nav>
      </header>

      <main className="jp-main">{children}</main>

      <footer className="jp-foot">
        <img src={BFA_LOGO} alt="" width={22} height={22} />
        <span>
          © {new Date().getFullYear()} Brit FinTech Awards · Confidential jury access
        </span>
      </footer>

      <style jsx global>{`
        .jp {
          --jp-red: #c8102e;
          --jp-red-deep: #8a0b1f;
          --jp-ink: #1a1412;
          --jp-muted: #6b625c;
          --jp-line: #ebe3de;
          --jp-bg: #f7f5f4;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background:
            radial-gradient(900px 420px at 100% -10%, rgba(200, 16, 46, 0.1), transparent 55%),
            radial-gradient(700px 320px at 0% 0%, rgba(200, 16, 46, 0.06), transparent 50%),
            var(--jp-bg);
          color: var(--jp-ink);
          font-family: "Outfit", system-ui, sans-serif;
        }

        .jp-top {
          position: sticky;
          top: 0;
          z-index: 60;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 14px 28px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--jp-line);
          box-shadow: 0 8px 30px rgba(18, 24, 38, 0.04);
        }

        .jp-top__brand {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .jp-logo-link {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .jp-logo-link:hover {
          transform: scale(1.04);
        }

        .jp-logo-link img {
          display: block;
          width: 44px;
          height: 44px;
          object-fit: contain;
        }

        .jp-top__name {
          font-weight: 800;
          font-size: 15px;
          letter-spacing: -0.02em;
          color: var(--jp-ink);
          line-height: 1.2;
        }

        .jp-top__portal {
          font-size: 12px;
          font-weight: 700;
          color: var(--jp-red);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .jp-top__nav {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .jp-nav-link {
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          color: var(--jp-muted);
          border: 1px solid transparent;
          border-radius: 10px;
          padding: 9px 14px;
          transition: all 0.2s ease;
        }

        .jp-nav-link.is-active {
          color: var(--jp-red);
          background: #fff5f6;
          border-color: #f0c9cf;
        }

        .jp-secure {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--jp-red-deep);
          background: #fff5f6;
          border: 1px solid #f0c9cf;
          border-radius: 999px;
          padding: 7px 12px;
        }

        .jp-user {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          line-height: 1.2;
          padding: 0 4px;
        }

        .jp-user__label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--jp-muted);
        }

        .jp-user strong {
          font-size: 13px;
          font-weight: 700;
          color: var(--jp-ink);
          max-width: 180px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .jp-signout {
          border: 1px solid var(--jp-line);
          background: #fff;
          border-radius: 10px;
          padding: 9px 14px;
          font: inherit;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          color: var(--jp-ink);
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .jp-signout:hover {
          border-color: #f0c9cf;
          color: var(--jp-red);
        }

        .jp-main {
          flex: 1;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 28px 20px 40px;
        }

        .jp-foot {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 20px 28px;
          color: var(--jp-muted);
          font-size: 12px;
          font-weight: 600;
        }

        .jp-foot img {
          opacity: 0.85;
        }

        @media (max-width: 860px) {
          .jp-top {
            flex-direction: column;
            align-items: flex-start;
            padding: 14px 16px;
          }

          .jp-top__nav {
            width: 100%;
            justify-content: flex-start;
          }

          .jp-user {
            align-items: flex-start;
          }

          .jp-secure {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default function JuryPortalShell({ children, session = null }) {
  return (
    <SessionProvider
      session={session}
      refetchInterval={60}
      refetchOnWindowFocus={false}
      refetchWhenOffline={false}
    >
      <JuryShell initialSession={session}>{children}</JuryShell>
    </SessionProvider>
  );
}
