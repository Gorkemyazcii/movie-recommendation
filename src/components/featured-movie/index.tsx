import { Movie } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

export default function FeaturedMovie({ movie = {} }) {
  const { poster_path, backdrop_path, title, overview } = movie as Movie;
  // Yatay "backdrop" görseli hero için doğru oran; yoksa afişe düşülür.
  const heroPath = backdrop_path || poster_path;

  return (
    <div className="flex flex-col gap-4 mt-8 mb-8 sm:gap-6 sm:mt-14 sm:mb-14">
      <h1 className="text-3xl uppercase font-black leading-tight max-w-[1300px] mb-4 sm:text-5xl sm:mb-8 lg:text-7xl lg:mb-10">
        {title}
      </h1>
      <p className="text-sm max-w-[1440px] line-clamp-3 sm:text-lg sm:line-clamp-4 lg:text-2xl xl:line-clamp-none">
        {overview}
      </p>
      <div className="flex items-center gap-3">
        <Link
          className="flex flex-1 items-center justify-center bg-slate-200 text-gray-900 px-6 py-3 rounded-2xl text-lg font-bold sm:flex-none sm:px-16 sm:text-xl lg:px-20 lg:text-2xl"
          href="#"
        >
          Play
        </Link>
        <button
          aria-label="Listeme ekle"
          className="flex shrink-0 p-3 items-center justify-center border-2 border-solid border-slate-200 text-slate-200 rounded-full text-lg font-bold sm:p-4 sm:text-xl"
        >
          <FaPlus />
        </button>
      </div>

      {/* Tam genişlik arka plan. Üst öğelerin hiçbiri "relative" olmadığı için
          bu kutu viewport'a göre konumlanır ve kenar boşluklarının dışına taşar. */}
      {heroPath && (
        <div className="absolute inset-x-0 top-0 -z-10 h-[75vh] min-h-[440px] overflow-hidden sm:h-[80vh]">
          <Image
            src={`https://image.tmdb.org/t/p/w1280${heroPath}`}
            alt={title ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        </div>
      )}
    </div>
  );
}
