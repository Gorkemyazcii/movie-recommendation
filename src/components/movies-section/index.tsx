"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function MoviesSection({
  title,
  movies,
}: {
  title: string;
  movies: Movie[];
}) {
  const movieItems = [];
  for (let i = 0; i < movies.length; i += 6) {
    movieItems.push(movies.slice(i, i + 6));
  }
  return (
    <div className="mt-10">
      <h3 className="mb-3 uppercase text-2xl tracking-tighter">{title}</h3>
      <Carousel className="mx-20">
        <CarouselContent className="flex gap-5 justify-start items-stretch">
          {movieItems.map((movieItem, movieItemIndex) => (
            <CarouselItem key={movieItemIndex} className="flex gap-5 w-full">
              {movieItem.map((movie) => (
                <Link key={movie.id} href={`/movie/${movie.id}`} passHref >
                  <div className="relative overflow-hidden rounded-lg h-full w-full hover:rounded-none hover:scale-105 duration-300 snap-center">
                    <Image
                      width={300}
                      height={250}
                      unoptimized
                      alt={movie.title}
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    />
                  </div>
                </Link>
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
