"use client";
import { Movie } from "@/types/movie";
import { Book, Bookmark, Delete, Trash2 } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const checkIfExists = (id: string) => {
  const prevMovies = JSON.parse(localStorage.getItem("my-watchlist") || "{}");
  return prevMovies[id];
};

const AddToWatchList = ({ movie }: { movie: Movie }) => {
  const [added, setAdded] = useState(checkIfExists(movie._id));
  const prevMovies = JSON.parse(localStorage.getItem("my-watchlist") || "{}");
  return (
    <div
      className="bg-white ml-2 text-black rounded-full w-10 h-10 flex items-center justify-center"
      onClick={() => {
        if (checkIfExists(movie._id)) {
          delete prevMovies[movie._id];
          localStorage.setItem("my-watchlist", JSON.stringify(prevMovies));
          setAdded(false);
          toast("Removed from your watchlist");
        } else {
          prevMovies[movie._id] = movie;
          localStorage.setItem("my-watchlist", JSON.stringify(prevMovies));
          setAdded(true);
          toast.success("Added to your watchlist!");
        }
      }}
    >
      {added ? <Trash2 /> : <Bookmark />}
    </div>
  );
};

export default AddToWatchList;
