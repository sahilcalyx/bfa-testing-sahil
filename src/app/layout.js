import { Geist, Geist_Mono } from "next/font/google";
import { defaultSeo } from "../seo/seo.config";
import "./globals.css";
import "../react/index.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_BASE_URL || "https://britfintechawards.com"),
  ...defaultSeo,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
  
// Global metadata can be defined here if needed; per-route SEO comes from
// route-specific head.js or layouts.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Global legacy styles from public/assets */}
        <link rel="stylesheet" href="/assets/css/plugins/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/animate.css" />
        <link rel="stylesheet" href="/assets/css/plugins/slick.css" />
        <link rel="stylesheet" href="/assets/css/plugins/lightgallery.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/theme_12.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
