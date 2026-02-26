// Server layout for catch-all routes to provide dynamic metadata per path
import React from "react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { getSeoForPath } = await import("../../seo/seo.config");
  const slugArray = Array.isArray(slug) ? slug : [];
  const path = `/${slugArray.join('/')}` || '/';
  return getSeoForPath(path);
}

export default function CatchAllLayout({ children }) {
  return children;
}
