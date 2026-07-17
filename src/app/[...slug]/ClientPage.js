"use client";
import dynamic from "next/dynamic";
import RouteSeo from "../RouteSeo";

const AppShell = dynamic(() => import("../AppShell"), { ssr: false });

export default function ClientPage() {
  return (
    <>
      <RouteSeo />
      <AppShell />
    </>
  );
}
