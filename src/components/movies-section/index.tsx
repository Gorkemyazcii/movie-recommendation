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
  return (
    <div className="mt-8 sm:mt-10">
      <h3 className="mb-3 uppercase text-lg tracking-tighter sm:text-2xl">
        {title}
      </h3>
      {/* Slayt başına sabit 6 film yerine film başına bir slayt: kaç posterin
          göründüğünü ekran genişliği belirler. */}
      <Carousel
        opts={{ align: "start", dragFree: true, slidesToScroll: "auto" }}
        className="mx-0 sm:mx-14 lg:mx-20"
      >
        <CarouselContent className="-ml-2 sm:-ml-4">
          {movies.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="basis-1/3 pl-2 sm:basis-1/4 sm:pl-4 md:basis-1/5 lg:basis-1/6"
            >
              <Link href={`/movie/${movie.id}`} passHref className="group block">
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-white/10 group-hover:scale-105 duration-300">
                  {movie.poster_path && (
                    <Image
                      fill
                      sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 16vw"
                      alt={movie.title}
                      src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                      className="object-cover"
                    />
                  )}
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:inline-flex" />
        <CarouselNext className="hidden sm:inline-flex" />
      </Carousel>
    </div>
  );
}
