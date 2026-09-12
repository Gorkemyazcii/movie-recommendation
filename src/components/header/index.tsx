import React from "react";
import { FaFilm } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-10 mb-10 sm:mb-16 lg:mb-20">
      {/* Çok dar ekranlarda menü logonun altına iner, taşma olmaz */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 sm:gap-x-6">
        <Link
          href="/"
          className="flex shrink-0 items-center space-x-1 text-base sm:text-xl lg:text-2xl"
        >
          <FaFilm className="shrink-0" />
          <span className="text-nowrap bg-gradient-to-l to-stone-200 from-emerald-500 bg-clip-text text-transparent">
            GORKEM FILM
          </span>
        </Link>
        <nav className="flex items-center gap-3 text-xs sm:gap-6 sm:text-sm lg:gap-10 lg:text-lg">
          <Link href="https://github.com/Gorkemyazcii" target="_blank">
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/gorkem-yazici/"
            target="_blank"
          >
            Linkedin
          </Link>
          <Link href="https://www.instagram.com/gorkemyazcii/" target="_blank">
            Instagram
          </Link>
        </nav>
      </div>
    </header>
  );
}
