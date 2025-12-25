import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">Seite nicht gefunden</h1>
      <p>Die gesuchte Seite existiert nicht.</p>
      <Link href="/" className="text-blue-500 underline">
        Zur Startseite
      </Link>
    </div>
  );
}
