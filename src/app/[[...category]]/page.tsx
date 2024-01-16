import React from "react";
import HomeContainer from "@/containers/home";
import {
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
  getSingleCategory,
  getUpcomingMovies,
} from "@/api";

export default async function HomePage({
  params,
}: {
  params: { id: number; category: string };
}) {
  let selectedCategory: any;

  const [
    { results: popularMovies },
    { results: topRatedMovies },
    { results: upcomingMovies },
    { genres: categories },
  ] = await Promise.all([
    getPopularMovies(),
    getTopRatedMovies(),
    getUpcomingMovies(),
    getCategories(),
  ]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);

    selectedCategory = results;
  }

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
