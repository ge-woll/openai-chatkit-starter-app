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

          {/* 🔗 Footer-Links */}
          <div className="flex justify-center gap-6 text-sm text-blue-700">
            <Link
              href="/contact"
              className="hover:text-blue-900 transition-colors"
            >
              Kontakt
            </Link>
            <Link
              href="/privacy"
              className="hover:text-blue-900 transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="hover:text-blue-900 transition-colors"
            >
              Impressum
            </Link>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Dies ist ein Beispielprojekt zur Demonstration von OpenAI ChatKit-Integration.
          </p>
        </footer>
      </body>
    </html>
  );
}
