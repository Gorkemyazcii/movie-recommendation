import React from "react";
import CategoriesLoading from "@/components/categories/loading";
import FeaturedMovieLoading from "@/components/featured-movie/loading";
import MovieSectionLoading from "@/components/movies-section/loading";

export default function Loading() {
  return (
    <div>
      <FeaturedMovieLoading />
      <CategoriesLoading />
      <MovieSectionLoading />
      <MovieSectionLoading />
      <MovieSectionLoading />
    </div>
  );
}
