import React from "react";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl mb-2">Sayfa bulunamadı</h1>
      <Link href="/" className="underline text-xl mt-2">
        Go Home
      </Link>
    </div>
  );
}
