"use client";

import React from "react";

/** No-op Helmet so client pages don't override Next.js metadata. */
export function Helmet() {
  return null;
}

export function HelmetProvider({ children }) {
  return <>{children}</>;
}

export default Helmet;
