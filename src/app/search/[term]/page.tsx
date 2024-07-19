import MovieList from '@/components/MovieList';
import { Searchable } from '@/components/Searchable';
import db from '@/db';
import { Movie } from '@/types/movie';

// refresh cache every 24 hours
export const revalidate = 60 * 60 * 24;

async function SearchTerm({
  params: { term },
}: {
  params: {
    term: string;
  };
}) {
  const movies = db.collection('movies');

  const searchResults = (await movies
    .find(
      {},
      {
        vectorize: term,
        limit: 8,
        projection: { $vector: 0 },
      },
    )
    .toArray()) as Movie[];

  return (
    <main className="pt-24 p-4 w-full">
      <Searchable placeholder={decodeURIComponent(term)} />
      <MovieList movies={searchResults} />;
    </main>
  );
}

export default SearchTerm;
