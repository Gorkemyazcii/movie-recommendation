import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/header";
import React from "react";
export const metadata: Metadata = {
  title: "Gorkem Fılms",
  description: "Movie recommendation site",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "text-base flex min-h-screen flex-col px-4 sm:px-6 lg:px-10"
        )}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
