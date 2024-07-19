import React from "react";
import { Searchable } from "./Searchable";
import { CardDemo } from "./MovieCard";
import { Movie } from "@/types/movie";

const MovieList = ({
  movies,
  search = true,
}: {
  movies: Movie[];
  search?: boolean;
}) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full sm:w-2/3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-10 gap-4">
        {movies.map((movie) => {
          return <CardDemo movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
