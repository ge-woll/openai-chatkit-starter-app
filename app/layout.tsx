import Script from "next/script";
import Link from "next/link";
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
          <div>
            <Link href="/" className="hover:text-blue-600 transition">
              Startseite
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Willkommen bei der AgentKit-Demo 👋
            </p>
          </div>

          <div className="mt-4">
            <Link href="/about" className="hover:text-blue-600 transition">
              Über uns
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Erfahre mehr über dieses Projekt
            </p>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
