'use client';
import MovieList from '@/components/MovieList';
import { Movie } from '@/types/movie';
import { Bookmark } from 'lucide-react';

const MyWatchlist = () => {
  const watchListData = localStorage.getItem('my-watchlist');
  const watchList = JSON.parse(watchListData || '{}');
  const movies = Object.values(watchList) as Movie[];

  if (!movies.length)
    return (
      <div className=" text-white flex">
        {' '}
        <Bookmark className="mr-2" /> Your list is empty{' '}
      </div>
    );

  return (
    <main className="pt-24 p-4 w-full">
      <div className="font-semibold text-white w-full text-center text-2xl mb-8 flex items-center justify-center ">
        My Watchlist
      </div>
      <MovieList movies={movies} search={false} />
    </main>
  );
};

export default MyWatchlist;
