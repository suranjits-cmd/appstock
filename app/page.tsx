"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    router.push(`/welcome?name=${encodeURIComponent(trimmed)}`);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-md rounded-md bg-white p-10 shadow-md">
        <h1 className="mb-6 text-2xl font-semibold">Login</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            className="w-full rounded-md border px-3 py-2 mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            aria-label="Name"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-black px-4 py-2 text-white hover:opacity-95"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
