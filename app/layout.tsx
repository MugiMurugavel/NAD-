import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";
import { NavigationMinimal } from "@/components/nav-minimal";

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
        <ScrollProgress />
        <NavigationMinimal />
        {children}
      </body>
    </html>
  );
}
