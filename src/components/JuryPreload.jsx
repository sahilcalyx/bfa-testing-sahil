"use client";

const BFA_LOGO_WHITE = "/assets/img/logo-white.svg";

/**
 * Full-screen centered jury portal preloader.
 * Shown after successful OTP login and during cold session hydrate.
 */
export default function JuryPreload({
  title = "Opening Jury Portal",
  subtitle = "Verifying secure OTP session…",
}) {
  return (
    <div className="jp-preload" role="status" aria-live="polite" aria-busy="true">
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Outfit:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="jp-preload__glow" aria-hidden="true" />
      <div className="jp-preload__grid" aria-hidden="true" />

      <div className="jp-preload__card">
        <div className="jp-preload__logo-wrap">
          <div className="jp-preload__ring" aria-hidden="true" />
          <div className="jp-preload__logo">
            <img src={BFA_LOGO_WHITE} alt="Brit FinTech Awards" width={64} height={64} />
          </div>
        </div>
        <p className="jp-preload__kicker">Brit FinTech Awards</p>
        <h1 className="jp-preload__title">{title}</h1>
        <p className="jp-preload__sub">{subtitle}</p>
        <div className="jp-preload__bar" aria-hidden="true">
          <span />
        </div>
      </div>

      <style jsx global>{`
        @keyframes jp-preload-rise {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes jp-preload-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes jp-preload-pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }

        @keyframes jp-preload-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(250%);
          }
        }

        @keyframes jp-preload-glow {
          0%,
          100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.85;
            transform: translate(-50%, -50%) scale(1.06);
          }
        }

        .jp-preload {
          position: fixed;
          inset: 0;
          z-index: 9999;
          min-height: 100vh;
          min-height: 100dvh;
          width: 100%;
          display: grid;
          place-items: center;
          padding: 24px;
          overflow: hidden;
          background: linear-gradient(145deg, #1a1412 0%, #3a0d16 48%, #c8102e 130%);
          font-family: "Outfit", system-ui, sans-serif;
          color: #fff;
        }

        .jp-preload__glow {
          position: absolute;
          width: min(520px, 90vw);
          height: min(520px, 90vw);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.16), transparent 68%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: jp-preload-glow 2.8s ease-in-out infinite;
          pointer-events: none;
          will-change: transform, opacity;
        }

        .jp-preload__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.4;
          pointer-events: none;
          mask-image: radial-gradient(circle at center, #000 20%, transparent 72%);
        }

        .jp-preload__card {
          position: relative;
          z-index: 1;
          width: min(420px, 100%);
          text-align: center;
          padding: 40px 28px 34px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(16px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.28);
          animation: jp-preload-rise 0.45s ease both;
        }

        .jp-preload__logo-wrap {
          position: relative;
          width: 104px;
          height: 104px;
          margin: 0 auto 22px;
        }

        .jp-preload__ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.18);
          border-top-color: #fff;
          animation: jp-preload-spin 0.9s linear infinite;
          will-change: transform;
        }

        .jp-preload__logo {
          position: absolute;
          inset: 10px;
          border-radius: 22px;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.16);
          animation: jp-preload-pulse 1.8s ease-in-out infinite;
          will-change: transform;
        }

        .jp-preload__logo img {
          width: 56px;
          height: 56px;
          object-fit: contain;
          display: block;
        }

        .jp-preload__kicker {
          margin: 0 0 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.72);
        }

        .jp-preload__title {
          margin: 0 0 8px;
          font-family: "Fraunces", Georgia, serif;
          font-size: clamp(26px, 5vw, 34px);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.15;
          color: #fff !important;
        }

        .jp-preload__sub {
          margin: 0 0 22px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.78);
        }

        .jp-preload__bar {
          height: 3px;
          width: 100%;
          max-width: 220px;
          margin: 0 auto;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.16);
          overflow: hidden;
        }

        .jp-preload__bar span {
          display: block;
          height: 100%;
          width: 42%;
          border-radius: inherit;
          background: linear-gradient(90deg, transparent, #fff, transparent);
          animation: jp-preload-bar 1.1s ease-in-out infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .jp-preload__glow,
          .jp-preload__card,
          .jp-preload__ring,
          .jp-preload__logo,
          .jp-preload__bar span {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
