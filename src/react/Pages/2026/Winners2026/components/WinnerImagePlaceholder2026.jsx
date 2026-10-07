import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const WinnerImagePlaceholder2026 = ({ index = 0, logo = "", reduceMotion = false }) => {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      if (reduceMotion) return;

      gsap.fromTo(
        ".wp-shine",
        { xPercent: -160 },
        {
          xPercent: 260,
          duration: 2.2,
          ease: "power2.inOut",
          repeat: -1,
          repeatDelay: 2.4,
          delay: (index % 6) * 0.35,
        }
      );

      gsap.to(".wp-glow", {
        opacity: 0.85,
        scale: 1.08,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      if (logo) return;

      gsap.to(".wp-ring", {
        rotation: 360,
        duration: 40,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      });

      gsap.to(".wp-trophy", {
        y: -6,
        duration: 2.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: (index % 4) * 0.2,
      });
    },
    { scope: rootRef, dependencies: [reduceMotion, logo] }
  );

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="relative w-full h-full overflow-hidden bg-[linear-gradient(155deg,#1d0a0e_0%,#3a0d16_52%,#12060a_100%)]"
    >
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      <div className="wp-glow absolute left-1/2 top-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8102e] opacity-50 blur-3xl" />

      {logo ? (
        <div className="absolute inset-0 flex items-center justify-center px-10">
          <img
            src={logo}
            alt=""
            draggable={false}
            className="max-w-[62%] max-h-[52%] object-contain brightness-0 invert drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]"
          />
        </div>
      ) : (
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="wp-ring absolute w-40 h-40 text-white/15"
          viewBox="0 0 160 160"
          fill="none"
        >
          <circle cx="80" cy="80" r="76" stroke="currentColor" strokeWidth="1" strokeDasharray="2 7" />
          <circle cx="80" cy="80" r="62" stroke="currentColor" strokeWidth="0.75" />
        </svg>

        <svg
          className="wp-trophy relative w-16 h-16 text-white/85 drop-shadow-[0_8px_24px_rgba(200,16,46,0.55)]"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 8h24v14a12 12 0 0 1-24 0V8Z" />
          <path d="M20 13h-7a3 3 0 0 0-3 3v1a10 10 0 0 0 10 10" />
          <path d="M44 13h7a3 3 0 0 1 3 3v1a10 10 0 0 1-10 10" />
          <path d="M32 34v10" />
          <path d="M24 56h16l-2-12H26l-2 12Z" />
          <path d="M28 18l2.5 2.5L36 15" strokeWidth="1.6" />
        </svg>
      </div>
      )}

      <div className="wp-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </div>
  );
};

export default WinnerImagePlaceholder2026;
