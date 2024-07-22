'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function CardDemo({ movie }: { movie: any }) {
  const image = `https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`;

  return (
    <Link
      className="group/card p-2"
      href={'/movie/' + movie._id}
      key={movie._id}
    >
      <div
        className={cn(
          ' cursor-pointer overflow-hidden relative card  aspect-[1/1.5] max-h-80 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 bg-cover ',
        )}
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

        <div className="text content absolute bottom-4 hidden">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            Black Widow
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            2024
          </p>
        </div>
      </div>
    </Link>
  );
}
