import MovieList from '@/components/MovieList';
import { Searchable } from '@/components/Searchable';
import db from '@/db';
import { Movie } from '@/types/movie';

async function Home() {
  const movies = db.collection('movies');
  const popularMovies = (await movies
    .find(
      {},
      {
        limit: 8,
        sort: {
          popularity: -1,
        },
        // Get popular movies randomly
        skip: parseInt((Math.random() * 100).toString()),
        projection: { $vector: 0 },
      },
    )
    .toArray()) as Movie[];

  return (
    <main className="pt-24 p-4 w-full">
      <Searchable />
      <MovieList movies={popularMovies} />;
    </main>
  );
}

export default Home;
