export default function ImpressumPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Impressum</h1>

      <div className="text-gray-700 text-center max-w-xl space-y-2">
        <p><strong>AgentKit Demo</strong></p>
        <p>Musterstraße 1<br />12345 Musterstadt<br />Deutschland</p>
        <p>E-Mail: info@agentkit-demo.de</p>
        <p>Vertreten durch: Max Mustermann</p>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Dieses Impressum dient nur als Beispiel für die AgentKit-Demo und hat keine rechtliche Gültigkeit.
      </p>
    </main>
  );
}
