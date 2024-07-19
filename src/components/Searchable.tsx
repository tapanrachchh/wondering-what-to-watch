"use client";

import { redirect } from "next/navigation";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import Link from "next/link";

export function Searchable({ placeholder }: { placeholder?: string }) {
  const defaultPlaceholders = [
    "Wondering what to watch?",
    "Movies like interstellar",
    "Movies of robert downy jr",
    "Love hate movie",
    "Search similar movies",
    "Crime thrillers",
  ];

  return (
    <div className="mb-12 flex flex-col w-full ">
      <form action={() => {}} className="w-full">
        <PlaceholdersAndVanishInput
          placeholders={placeholder ? [placeholder] : defaultPlaceholders}
          onSubmit={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          name="searchTerm"
          onChange={() => {}}
        />
      </form>
    </div>
  );
}
