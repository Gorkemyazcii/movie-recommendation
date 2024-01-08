import { Category } from "@/types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.HEADER}`,
  },
};
const popularUrl =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export async function getPopularMovies() {
  const res = await fetch(popularUrl, options);
  return await res.json();
}
const genreUrl = "https://api.themoviedb.org/3/genre/movie/list?language=en";

export async function getCategories() {
  const res = await fetch(genreUrl, options);

  return await res.json();
}
const topRatedUrl =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export async function getTopRatedMovies() {
  const res = await fetch(topRatedUrl, options);
  return await res.json();
}

const upcomingdUrl =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export async function getUpcomingMovies() {
  const res = await fetch(upcomingdUrl, options);
  return await res.json();
}

const singleCategoryUrl =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=";
export async function getSingleCategory(genreId: string) {
  const res = await fetch(singleCategoryUrl.concat(genreId), options);
  return await res.json();
}

export async function getMovie(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return await res.json();
}
// const getTopRatedMovies = async () => {
//   const res = await fetch(topRatedUrl, options);

//   return await res.json();
// };
