"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function Welcome() {
  const searchParams = useSearchParams();
  const name = searchParams?.get("name") || "Guest";

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-md rounded-md bg-white p-10 shadow-md text-center">
        <h1 className="mb-4 text-2xl font-semibold">Welcome</h1>
        <p className="text-lg">Welcome, {name}!</p>
      </main>
    </div>
  );
}
