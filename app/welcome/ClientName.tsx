"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

type Props = {
  serverName: string;
};

export default function ClientName({ serverName }: Props) {
  const searchParams = useSearchParams();
  const clientName = searchParams?.get("name") || serverName;
  return <p className="text-lg">Welcome, {clientName}!</p>;
}
