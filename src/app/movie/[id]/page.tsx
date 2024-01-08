import React from "react";
import { notFound } from "next/navigation";

import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";
import { getPopularMovies, getTopRatedMovies, getMovie } from "@/api";
import { Movie } from "@/types";

// async function delay(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default async function MoviePage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { error: string };
}) {
  // const popularPromise = getPopularMovies();
  // const topRatedPromise = getTopRatedMovies();
  const movieDetail = await getMovie(params.id);

  // const [{ results: popularMovies }, { results: topRatedMovies }] =
  //   await Promise.all([popularPromise, topRatedPromise]);

  // const movieDetail: [] =
  //   popularMovies.find((movie: Movie) => movie.id.toString() === params.id) ||
  //   topRatedMovies.find((movie: Movie) => movie.id.toString() === params.id);
  // const movieDetail = await getMovie(params.id);
  // console.log(movieDetail);

  if (!movieDetail) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Error happened");
  }
  return <MovieContainer movie={movieDetail} />;
}

// export const movieBgPath = atom(movieDetail.poster_path);
