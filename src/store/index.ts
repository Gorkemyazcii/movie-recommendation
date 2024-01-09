import { atom } from "jotai";

export const textAtom = atom("Gorkem");

const popularUrl =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.HEADER}`,
  },
};

export async function getPopularMovies() {
  const res = await fetch(popularUrl, options);

  return await res.json();
}
