"use client";

import React, { useEffect, useRef, useSyncExternalStore } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";

const STORAGE_KEY = "ri27-bar-dismissed";
const HIDDEN_PREFIXES = ["/register-interest-2027", "/admin", "/jury", "/profile"];

// Dismissal lives in sessionStorage; exposed as an external store so the first
// client render already knows the answer (no flash, no setState-in-effect).
const listeners = new Set();
let memoryDismissed = false;
const readDismissed = () => {
  if (memoryDismissed) return true;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};
const subscribe = (cb) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};
const writeDismissed = () => {
  memoryDismissed = true;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* storage unavailable: memoryDismissed still hides it for this page load */
  }
  listeners.forEach((cb) => cb());
};

/**
 * Slim site-wide promo bar for BFA27 interest registration.
 * Fixed above the (fixed) site header; while mounted it pushes the header and
 * page down by its own height via the --ri27-bar-h CSS variable so nothing is covered.
 */
const Announcement2027Bar = () => {
  const { pathname } = useLocation();
  const barRef = useRef(null);
  // Server snapshot hides the bar so SSR markup never includes it.
  const dismissed = useSyncExternalStore(subscribe, readDismissed, () => true);

  const hiddenOnRoute = HIDDEN_PREFIXES.some((p) => pathname.startsWith(p));
  const visible = !dismissed && !hiddenOnRoute;

  useEffect(() => {
    const root = document.documentElement;
    if (!visible) {
      root.style.setProperty("--ri27-bar-h", "0px");
      return undefined;
    }
    const el = barRef.current;
    if (!el) return undefined;

    const apply = () => root.style.setProperty("--ri27-bar-h", `${el.offsetHeight}px`);
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.setProperty("--ri27-bar-h", "0px");
    };
  }, [visible]);

  const dismiss = () => writeDismissed();

  if (!visible) return null;

  return (
    <>
      <style>{`
        body { padding-top: var(--ri27-bar-h, 0px); }
        .cs-site_header.cs-sticky-header { top: var(--ri27-bar-h, 0px) !important; }
        .ri27-announcement .ri27-announcement-register { color: #000 !important; background-color: #fff !important; }
        .ri27-announcement .ri27-announcement-register:hover,
        .ri27-announcement .ri27-announcement-register:focus-visible { color: #fff !important; background-color: #000 !important; }
        @keyframes ri27-ping { 0% { transform: scale(0.6); opacity: 0.7; } 80%, 100% { transform: scale(1.9); opacity: 0; } }
        @media (prefers-reduced-motion: reduce) { .ri27-ping { animation: none !important; opacity: 0; } }
      `}</style>

      <div
        ref={barRef}
        role="region"
        aria-label="Brit FinTech Awards 2027 announcement"
        className="ri27-announcement fixed inset-x-0 top-0 z-[1001] border-b border-white/10 bg-[#c8102e] font-['Outfit',sans-serif] text-white"
      >
        <div className="relative mx-auto flex w-full max-w-[1400px] items-center justify-center gap-3 px-4 py-2 pr-11 text-[13px] sm:gap-4 sm:px-6 sm:text-sm">
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-black py-1 pl-2 pr-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
            <span className="relative grid h-3.5 w-3.5 place-items-center">
              <span className="ri27-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d66] opacity-60 [animation:ri27-ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            BFA27
          </span>

          <p className="m-0 min-w-0 truncate font-medium">
            <span className="font-bold tracking-tight">The next chapter begins.</span>{" "}
            <span className="hidden md:inline">
              Register your interest for BFA27.
            </span>
            <span className="md:hidden">Register your interest for BFA27.</span>
          </p>

          <NavLink
            to="/register-interest-2027?src=announcement-bar"
            className="ri27-announcement-register group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] !text-black no-underline transition sm:text-[12px]"
          >
            Register
            <ArrowRight size={14} strokeWidth={2.6} className="transition group-hover:translate-x-0.5" />
          </NavLink>

          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss announcement"
            className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border-0 bg-transparent text-white/80 transition hover:bg-black/25 hover:text-white sm:right-3"
          >
            <X size={15} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Announcement2027Bar;
