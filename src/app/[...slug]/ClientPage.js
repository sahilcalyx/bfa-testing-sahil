"use client";
import dynamic from "next/dynamic";
import RouteSeo from "../RouteSeo";
const App = dynamic(() => import("../../react/App"), { ssr: false });

export default function ClientPage() {
  return (
    <>
      <RouteSeo />
      <App />
    </>
  );
}
