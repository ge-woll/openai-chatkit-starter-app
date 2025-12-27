export default function ProtectedPage() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-2xl font-bold">🔒 Geschützte Seite</h1>
      <p>Nur eingeloggte Nutzer sehen diesen Inhalt.</p>
    </main>
  );
}
