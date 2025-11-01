"use client"; // 👈 Wichtig, weil wir usePathname im Client brauchen

import Script from "next/script";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 👈 Hook zum Erkennen der aktuellen Route
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentKit demo",
  description: "Demo of ChatKit with hosted workflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // 👈 Gibt den aktuellen Pfad zurück (z. B. "/", "/about")

  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased">
        <header className="p-4 bg-gray-100 text-center font-semibold shadow flex flex-col items-center">
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-600 transition">
              Startseite
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition">
              Über uns
            </Link>
          </div>

          {/* 👇 Nur auf der Startseite anzeigen */}
          {pathname === "/" && (
            <p className="text-sm text-gray-600 mt-2">
              Willkommen zur AgentKit-Demo – erkunde unsere Funktionen 🚀
            </p>
          )}
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
