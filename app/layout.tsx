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

      {/* Flex‑Layout für Sticky‑Footer */}
      <body className="flex flex-col min-h-screen antialiased">

        {/* Hauptinhalt füllt den Raum auf */}
        <main className="flex-grow px-4 sm:px-6 md:px-8 py-4">
          {children}
        </main>

        {/* Footer ganz unten */}
       <footer className="bg-transparent text-center py-2 text-xs text-gray-600 dark:text-gray-400">
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
          
           <Link
              href="https://demo-chatkit.workki.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              Impressum
            </Link>

            <Link
              href="https://demo-chatkit.workki.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              Datenschutz
            </Link>
          </div>
        </footer>

      </body>
    </html>
  );
}
