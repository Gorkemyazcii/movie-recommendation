"use client";
import Link from "next/link";
import React from "react";

export default function Error() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl mb-2">Page Error</h1>
      <Link href="/" className="underline text-xl mt-2">
        Go Home
      </Link>
    </div>
  );
}
