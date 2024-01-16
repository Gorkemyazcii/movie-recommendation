import { Movie } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

export default function FeaturedMovie({ movie = {} }) {
  const { poster_path, title, overview } = movie as Movie;

  return (
    <div className="flex flex-col gap-6 mt-14 mb-14 ">
      <h1 className="text-7xl uppercase font-black h-auto max-w-[1300px] mb-10 max-md:text-3xl ">
        {title}
      </h1>
      <p className="text-2xl max-w-[1440px] xl:line-clamp-none max-md:text-lg max-md:line-clamp-1 max-lg:line-clamp-2">
        {overview}
      </p>
      <div className="flex gap-3">
        <Link
          className="flex items-center justify-center bg-slate-200 text-gray-900 px-20 py-2 rounded-2xl text-2xl font-bold"
          href="#"
        >
          Play
        </Link>
        <button className="flex p-3 items-center justify-center border-2 border-solid border-slate-200  text-slate-200 rounded-full text-xl font-bold">
          <FaPlus />
        </button>
      </div>

      <div className="h-auto -z-20  object-cover">
        <div className="absolute top-0 -z-10 left-0 bg-black opacity-50 ">
          <Image
            unoptimized
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
            width={1920}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}
