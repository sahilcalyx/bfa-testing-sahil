"use client";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams as useNextSearchParams } from "next/navigation";
import { useEffect } from "react";

// Lightweight shim to let existing components work without react-router.
// Provides NavLink/Link, useNavigate, useLocation, Navigate, Routes/Route.

export { Link };

export function NavLink({ to, href, children, className, style, target, prefetch }) {
  const dest = href ?? to ?? "#";
  return (
    <Link href={dest} className={className} style={style} target={target} prefetch={prefetch}>
      {children}
    </Link>
  );
}

export function useNavigate() {
  const router = useRouter();
  return (url, opts = {}) => {
    if (opts.replace) router.replace(url);
    else router.push(url);
  };
}

export function useLocation() {
  const pathname = usePathname();
  const searchParams = useNextSearchParams();
  const search = searchParams?.toString() ? `?${searchParams.toString()}` : "";
  return { pathname, search };
}

export function useSearchParams() {
  return useNextSearchParams();
}

export function Navigate({ to, replace }) {
  const router = useRouter();
  useEffect(() => {
    if (!to) return;
    replace ? router.replace(to) : router.push(to);
  }, [to, replace, router]);
  return null;
}

// Minimal <Routes>/<Route> to support existing App.js route config.
// It matches by exact pathname against child Route's "path" prop
// and renders the "element" prop of the first match.
export function Routes({ children }) {
  const pathname = usePathname();
  const arr = Array.isArray(children) ? children : [children];
  for (const child of arr) {
    if (!child || typeof child !== "object") continue;
    const { path, element } = child.props || {};
    if (path === pathname) {
      return element || null;
    }
  }
  // Fallback: try to render index route (path "/")
  const index = arr.find((c) => c?.props?.path === "/");
  return index?.props?.element || null;
}

export function Route() {
  // Placeholder component used as configuration-only inside <Routes>
  return null;
}

// Provide a noop BrowserRouter alias to avoid crashes if referenced
export function BrowserRouter({ children }) {
  return children;
}