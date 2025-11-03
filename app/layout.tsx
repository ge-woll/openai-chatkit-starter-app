import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentKit Demo",
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

      <body className="antialiased flex flex-col min-h-screen">
        {/* 🧭 Kopfbereich */}
        <header className="p-4 bg-gray-100 text-center font-semibold shadow">
          AgentKit Demo
        </header>

        {/* 🔹 Hauptinhalt */}
        <main className="flex-grow">{children}</main>

        {/* 🧾 Footer-Bereich */}
        <footer className="bg-gray-200 text-center py-6 mt-8 shadow-inner">
          <p className="text-sm text-gray-700 mb-2">
            © {new Date().getFullYear()} AgentKit Demo – Erstellt mit ❤️ und Next.js
          </p>
           <p className="text-xs text-gray-500 mt-3">
            Dies ist ein Beispielprojekt zur Demonstration des OpenAI ChatKit.
           </p>
          <p className="text-xs text-gray-600 mt-3">
            E-Mail: ge-woll@t-online.de
          </p>
        </footer>
      </body>
    </html>
  );
}
