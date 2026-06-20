import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import FitToWidth from "./components/FitToWidth";
import ScrollProgress from "./components/ScrollProgress";
import { NavigationMinimal } from "@/components/nav-minimal";

// Set the fit scale before first paint so the design never flashes oversized.
const fitScript = `(function(){try{var w=window.innerWidth;document.documentElement.style.setProperty('--fit-scale',String(w>=768?Math.min(1,w/1440):1));}catch(e){}})();`;

export const metadata: Metadata = {
  title: "Cell Context — LNAD⁺",
  description:
    "Don't just ask how much NAD⁺ is in the scoop. Ask how much is still alive. LathMized® NAD⁺ (LNAD⁺) is engineered to preserve NAD⁺ in its functional, biologically recognizable form.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&family=Newsreader:ital,wght@0,400;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script id="fit-scale" strategy="beforeInteractive">
          {fitScript}
        </Script>
        <FitToWidth />
        <ScrollProgress />
        <NavigationMinimal />
        {children}
      </body>
    </html>
  );
}
