// "use client";

import React from "react";
import HomeContainer from "@/containers/home";
import {
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
  getSingleCategory,
  getUpcomingMovies,
} from "@/api";

import Movies from "@/mocks/movies.json";
import { Category, Movie } from "@/types";
// import { textAtom, getPopularMovies } from "@/store";
// import { useAtom } from "jotai";

export default async function HomePage({
  params,
}: {
  params: { id: number; category: string };
}) {
  let selectedCategory: any;

  const popularPromise = getPopularMovies();
  const topRatedPromise = getTopRatedMovies();
  const upcomingPromise = getUpcomingMovies();
  const categoriesPromise = getCategories();

  // const { results: popularMovies } = await getPopularMovies();
  // const { results: topRatedMovies } = await getTopRatedMovies();

  const [
    { results: popularMovies },
    { results: topRatedMovies },
    { results: upcomingMovies },
    { genres: categories },
  ] = await Promise.all([
    popularPromise,
    topRatedPromise,
    upcomingPromise,
    categoriesPromise,
  ]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return (
    <div>
      <HomeContainer
        popularMovies={popularMovies}
        topRatedMovies={topRatedMovies}
        upcomingMovies={upcomingMovies}
        categories={categories}
        selectedCategory={{
          id: params.category?.[0] ?? "",
          movies: selectedCategory ? selectedCategory.slice(0, 18) : [],
        }}
      />
    </div>
  );
}
