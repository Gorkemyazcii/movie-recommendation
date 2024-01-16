import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-2xl mb-20 max-md:text-lg">
      <div className="flex justify-between items-center mt-3">
        <Link href="/" className="flex items-center space-x-1  ">
          <FaPlayCircle /> <div>GORKEM</div>
        </Link>
        <nav className="mr-10 flex space-x-10 text-lg max-md:text-sm">
          <Link href="#">Movies</Link>
          <Link href="#">Anime</Link>
          <Link href="#">Series</Link>
        </nav>
      </div>
    </header>
  );
}
