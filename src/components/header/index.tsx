import React from "react";
import { FaFilm, FaPlayCircle } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-2xl mb-20 max-md:text-lg">
      <div className="flex justify-between items-center mt-3">
        <Link href="/" className="flex items-center space-x-1 text-black ">
          <FaFilm />
          <div className="text-nowrap bg-gradient-to-l to-stone-300 from-emerald-600 bg-clip-text text-transparent">
            GORKEM FILM
          </div>
        </Link>
        <nav className="mr-10 flex space-x-10 text-lg max-md:text-sm">
          <Link href="https://github.com/Gorkemyazcii">Github</Link>
          <Link href="https://www.linkedin.com/in/gorkem-yazici/">
            Linkedin
          </Link>
          <Link href="https://www.instagram.com/gorkemyazcii/">Instagram</Link>
        </nav>
      </div>
    </header>
  );
}
