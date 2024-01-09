import React from "react";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";
import { Category, Movie } from "@/types";

function HomeContainer({
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
  return (
    <div>
      <FeaturedMovie movie={popularMovies?.[0]} />
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
    </div>
  );
}
export default HomeContainer;
// {selectedCategory.movies.lenght > 0 && (
//   <MoviesSection
//     movies={selectedCategory.movies}
//     title={
//       Genres.genres.find((genre) => `${genre.id}` === selectedCategory.id)
//         .name
//     }
//   />
// )}
