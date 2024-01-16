"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

export default function MoviesSection({
  title,
  movies,
}: {
  title: string;
  movies: Movie[];
}) {
  const itemsPerPage = 6; // Number of movies on the page
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const prev = () => {
    setCurrentPage((prevPage) =>
      prevPage > 0 ? prevPage - 1 : totalPages - 1
    );
  };

  const next = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages - 1 ? prevPage + 1 : 0
    );
  };

  const startIndex = currentPage * itemsPerPage;

  const visibleMovies = movies.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mt-10">
      <h3 className="mb-3 uppercase text-2xl tracking-tighter">{title}</h3>

      <div className="flex gap-8 w-full items-center h-full group ">
        <button
          onClick={prev}
          className="text-4xl max-lg:text-2xl duration-300 hidden group-hover:block "
        >
          <BsChevronCompactLeft />
        </button>
        {visibleMovies.map((movie: Movie) => {
          return (
            <Link
              href={`/movie/${movie.id}`}
              key={movie.id}
              className="relative overflow-hidden rounded-lg h-full w-full hover:z-10 hover:scale-125 mb-5 hover:duration-500 snap-center"
            >
              <Image
                width={300}
                height={250}
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            </Link>
          );
        })}
        <button
          onClick={next}
          className="text-4xl max-lg:text-2xl duration-300 hidden group-hover:block"
        >
          <BsChevronCompactRight />
        </button>
      </div>
    </div>
  );
}
