import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "AgentKit Demo",
  description: "Demo of ChatKit with hosted workflow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="flex flex-col min-h-screen antialiased">
        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-200 text-center py-4 text-sm text-gray-700">
          <p>© {new Date().getFullYear()} AgentKit Demo – mit ❤️ in Next.js</p>
          <Link href="https://meinedomain.de/datenschutz" target="_blank" className="hover:underline">
          Datenschutz
        </Link> 
          <p className="text-xs text-gray-500">Beispielprojekt – OpenAI ChatKit</p>
          <p className="text-xs text-gray-600">Kontakt: ge-woll@t-online.de</p>
        </footer>
      </body>
    </html>
  );
}

