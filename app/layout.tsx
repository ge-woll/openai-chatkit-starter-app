"use client";

import Script from "next/script";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

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
        </header>

        {/* 👇 Text direkt im Body, unterhalb des Headers */}
        <div className="text-center mt-4 text-gray-700">
          Willkommen auf der AgentKit-Demo! Hier kannst du ChatKit ausprobieren 🚀
        </div>

        <main>{children}</main>
      </body>
    </html>
  );
}
