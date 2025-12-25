import Script from "next/script";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "AgentKit Demo",
  description: "Demo of ChatKit with hosted workflow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <Script
          src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
          strategy="beforeInteractive"
        />
      </head>

      <body className="flex flex-col min-h-screen antialiased">
        
        {/* Header ganz oben, responsive Schriftgröße */}
        <header className="w-full bg-transparent text-center py-2 text-base sm:text-lg font-medium text-gray-800 dark:text-gray-200">
          Willkommen beim AgentKit Demo
        </header>

        {/* Hauptinhalt mit etwas Padding für kleine Bildschirme */}
        <main className="flex-grow px-4 sm:px-6 md:px-8 py-4">
          {children}
        </main>

        {/* Footer ohne extra Abstand oben, mit responsiven Links */}
        <footer className="bg-transparent text-center py-4 text-sm text-gray-700 dark:text-gray-300">
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} AgentKit Demo – mit ❤️ in Next.js
          </p>

          {/* Links werden auf kleinen Bildschirmen übereinander angezeigt */}
          <div className="mt-2 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
            <Link
              href="/impressum"
              className="underline hover:text-blue-600 text-xs sm:text-sm"
            >
              Impressum
            </Link>

            <Link
              href="https://demo-chatkit.workki.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 text-xs sm:text-sm"
            >
              Datenschutz
            </Link>
          </div>
        </footer>

      </body>
    </html>
  );
}
