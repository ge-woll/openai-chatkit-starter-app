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
         
        <div className="bg-white dark:bg-gray-900 text-center py-2">
        <p className="text-lg font-medium text-gray-800 dark:text-gray-200">AgentKit Demo</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Einfach chatten mit ChatKit</p>
        </div>

        <main className="flex-grow">{children}</main>

      <footer className="bg-gray-200 text-center py-4 text-sm text-gray-700 mt-1">

          <p>© {new Date().getFullYear()} AgentKit Demo – mit ❤️ in Next.js</p>
          
          {/*externer Link zur Seite Impressum */}
           <div className="mt-2 space-x-4">
           <Link
              href="https://meinedomain.de/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Impressum
            </Link>

            {/* externer Link zur Datenschutz-Seite */}
            <Link
              href="https://demo-chatkit.workki.de"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Datenschutz
            </Link>
          </div>

          
        </footer>
      </body>
    </html>
  );
}


