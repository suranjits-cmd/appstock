import React, { Suspense } from "react";
import ClientName from "./ClientName";

type Props = {
  searchParams?: { name?: string };
};

export default function Welcome({ searchParams }: Props) {
  const serverName = searchParams?.name || "Guest";

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-md rounded-md bg-white p-10 shadow-md text-center">
        <h1 className="mb-4 text-2xl font-semibold">Welcome</h1>
        <Suspense fallback={<p className="text-lg">Welcome, {serverName}!</p>}>
          <ClientName serverName={serverName} />
        </Suspense>
      </main>
    </div>
  );
}
