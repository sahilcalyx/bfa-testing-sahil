// No-op proxy for react-helmet to avoid client-side title/meta overrides.
// This stabilizes SEO by relying on Next.js server-side metadata and next-seo.
import React from "react";
export function Helmet() {
  return null;
}
export function HelmetProvider({ children }) {
  return children || null;
}
