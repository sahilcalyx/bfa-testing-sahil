"use client";

import { BrowserRouter } from "react-router-dom";
import App from "../react/App";

export default function AppShell() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
