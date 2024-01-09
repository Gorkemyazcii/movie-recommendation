import React from "react";
import { notFound } from "next/navigation";

import MovieContainer from "@/containers/movie";
import { getMovie } from "@/api";

export default async function MoviePage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { error: string };
}) {
  const movieDetail = await getMovie(params.id);

  if (!movieDetail) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Error happened");
  }
  return <MovieContainer movie={movieDetail} />;
}
