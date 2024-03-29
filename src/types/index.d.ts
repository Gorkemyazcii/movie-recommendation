export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  video: boolean;
}
export interface Category {
  id: number;
  name: string;
}
export interface Genre {
  id: number;
  name: string;
  genres: Category[];
}
