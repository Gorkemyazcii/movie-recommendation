import type { Metadata } from "next";
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(inter.className, "text-base flex flex-col ml-10 mr-10")}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
