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
        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-200 text-center py-4 text-sm text-gray-700 mt-12">
          <p>© {new Date().getFullYear()} AgentKit Demo – mit ❤️ in Next.js</p>
          
          {/*externer Link zur Seite Impressum */}
           <Link
              href="https://meinedomain.de/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Datenschutz
            </Link>

            {/* externer Link zur Datenschutz-Seite */}
            <Link
              href="https://meinedomain.de/datenschutz"
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


