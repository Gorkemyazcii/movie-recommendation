import React from "react";
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";
import { Category, Movie } from "@/types";

export default function HomeContainer({
  popularMovies = [],
  topRatedMovies = [],
  upcomingMovies = [],
  categories = [],
  selectedCategory,
}: {
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  upcomingMovies: Movie[];
  categories: Category[];
  selectedCategory: { id: string; movies: Movie[] };
}) {
  const index = Math.floor(Math.random() * 20);

  return (
    <React.Fragment>
      <FeaturedMovie movie={popularMovies?.[index]} />
      <Categories categories={categories} />
      {selectedCategory.id && (
        <MoviesSection
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory?.id)
              ?.name || ""
          }
          movies={selectedCategory.movies}
        />
      )}

      <MoviesSection
        movies={popularMovies.slice(0, 18)}
        title="Popular Films"
      />

      <MoviesSection
        movies={topRatedMovies.slice(0, 18)}
        title="Top Rated Films"
      />
      <MoviesSection
        movies={upcomingMovies.slice(0, 18)}
        title="Up coming Films"
      />
    </React.Fragment>
  );
}
