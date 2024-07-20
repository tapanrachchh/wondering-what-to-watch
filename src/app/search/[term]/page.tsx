import MovieList from '@/components/MovieList';
import { Searchable } from '@/components/Searchable';
import db from '@/db';
import { Movie } from '@/types/movie';
import { notFound } from 'next/navigation';

async function SearchTerm({
  params: { term },
}: {
  params: {
    term: string;
  };
}) {
  const decodedTerm = decodeURIComponent(term);
  const movies = db.collection('movies');
  let filter: {
    [key: string]: string;
  } = {};
  let options: {
    [key: string]: string | number | { [key: string]: number };
  } = {
    limit: 8,
    projection: { $vector: 0 },
  };

  if (term.startsWith('directed-by')) {
    filter['directors'] = decodedTerm.replace('directed-by', '').trim();
  } else {
    options['vectorize'] = decodedTerm;
  }

  console.log('filter', filter, options);

  const searchResults = (await movies
    .find(filter, options)
    .toArray()) as Movie[];

  if (!searchResults.length) {
    return notFound();
  }
  return (
    <main className="pt-24 p-4 w-full">
      <Searchable placeholder={decodedTerm} />
      <MovieList movies={searchResults} />;
    </main>
  );
}

export default SearchTerm;
