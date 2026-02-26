"use client";
import { HelmetProvider } from "../../lib/react-helmet-proxy";

export default function ClientHelmetProvider({ children }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}