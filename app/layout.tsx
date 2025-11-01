import Script from "next/script";
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
        {/* 🧭 Kopfbereich */}
        <header className="p-4 bg-gray-100 text-center font-semibold shadow">
          AgentKit Demo
        </header>

        {/* 📝 Fester Text direkt im Layout */}
        <section className="text-center bg-blue-50 text-blue-800 py-4 shadow-inner">
          <p className="text-lg font-medium">
            Willkommen bei der AgentKit-Demo 🚀
          </p>
          <p className="text-sm text-blue-700 mt-1">
            Diese Anwendung zeigt, wie man mit Next.js und OpenAI einfache Workflows erstellt.
          </p>
        </section>

        {/* 🔹 Hier erscheinen die Seiteninhalte */}
        <main>{children}</main>
      </body>
    </html>
  );
}
