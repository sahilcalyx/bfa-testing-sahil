"use client";
import { NextSeo } from 'next-seo';

export default function PageSeo({ path }) {
  // We'll dynamically import the SEO config to avoid SSR issues
  const SeoComponent = ({ path }) => {
    // This component will be replaced by the server-side head.js
    return null;
  };

  // On the client side, we'll let RouteSeo handle updates
  return null;
}