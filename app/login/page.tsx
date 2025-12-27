"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username: u, password: p }),
      headers: { "Content-Type": "application/json" }
    });

    if (res.ok) {
      // nach Login weiterleiten
      router.push("/protected");
    } else {
      alert("Login fehlgeschlagen");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input value={u} onChange={e => setU(e.target.value)} placeholder="Benutzer" />
      <input type="password" value={p} onChange={e => setP(e.target.value)} placeholder="Passwort" />
      <button>Login</button>
    </form>
  );
}
