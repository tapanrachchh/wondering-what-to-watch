import AddToWatchList from "@/components/AddToWatchList";
import CopyButton from "@/components/CopyButton";
import { CardDemo } from "@/components/MovieCard";
import MovieList from "@/components/MovieList";
import db from "@/db";
import { cn, getLanguageName, trimText } from "@/lib/utils";
import { Movie } from "@/types/movie";
import { Youtube } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const movies = db.collection("movies");
  const search = await movies.find(
    { _id: id },
    {
      projection: {
        title: 1,
      },
    }
  );

  if (!(await search.hasNext())) {
    return notFound();
  }

  const movie = (await search.next()) as unknown as Movie;

  return {
    title: movie.title,
    assets: movie.poster_path,
  };
}

async function MoviePage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const movies = db.collection("movies");
  const search = await movies.find(
    { $and: [{ _id: id }] },
    {
      projection: {
        title: 1,
        $vectorize: 1,
        genres: 1,
        cast: 1,
        backdrop_path: 1,
        poster_path: 1,
        release_year: 1,
        directors: 1,
        $vector: 1,
        trailer_url: 1,
        _id: 1,
        runtime: 1,
        original_language: 1,
      },
    }
  );

  if (!(await search.hasNext())) {
    return notFound();
  }

  const movie = (await search.next()) as unknown as Movie;

  const similarMovies = (await movies
    .find(
      {},
      {
        vector: movie.$vector,
        limit: 7,
        includeSimilarity: true,
      }
    )
    .toArray()) as unknown as Movie[];

  similarMovies.shift();

  return (
    <div className="h-screen w-full">
      <div
        className={cn("h-screen md:h-[55%] w-full bg-cover")}
        style={{
          backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`,
        }}
      >
        <div className="bg-black bg-opacity-60 h-full flex md:flex-row  flex-col items-center p-4 justify-center sm:justify-start sm:px-40  pt-28 sm:pt-20">
          <Image
            src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
            height={250}
            width={200}
            alt="poster"
            className="sm:mr-12 rounded-lg "
          />
          <div className=" text-white flex-col text-center sm:text-left mt-4 sm:mt-0">
            <div className="font-bold  text-3xl block">{movie.title}</div>
            <div className="mt-2">{`${parseInt(movie.release_year)} | ${
              movie.runtime
            } min | ${getLanguageName(movie.original_language)}`}</div>
            <div className="mt-6">
              <span className="text-gray-300">Genre:</span>
              <span className="ml-2">{movie.genres}</span>
            </div>
            <div className="mt-2 max-w-96">
              <span className="text-gray-300">Summary:</span>
              <span className="ml-2">{trimText(movie.$vectorize, 100)}</span>
            </div>{" "}
            <div className="mt-2 max-w-96">
              <span className="text-gray-300">Directed by:</span>
              <span className="ml-2">{movie.directors}</span>
            </div>
            <div className="mt-2 max-w-96">
              <span className="text-gray-300">Staring:</span>
              <span className="ml-2">{trimText(movie.cast, 64)}</span>
            </div>
            <div className="flex items-center mt-4 justify-center sm:justify-start">
              <Link
                className="w-56 bg-white text-black p-2 rounded-full flex items-center justify-center font-semibold "
                href={movie.trailer_url}
                target="_blank"
              >
                <Youtube className="mr-2" />
                Watch Trailer
              </Link>
              <AddToWatchList movie={movie} />
              <CopyButton />
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-4 flex flex-col sm:justify-start ">
        <div className="text-white text-2xl font-bold w-full text-center sm:text-left sm:px-10">
          Similar movies
        </div>
        <div className="overflow-hidden w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-4">
          {similarMovies.map((movie) => {
            return <CardDemo movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
