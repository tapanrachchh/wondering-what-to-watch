"use client";

import { redirect } from "next/navigation";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function Searchable({ placeholder }: { placeholder?: string }) {
  const defaultPlaceholders = [
    "Wondering what to watch?",
    "Movies like interstellar",
    "Movies of robert downy jr",
    "Love hate movie",
    "Search similar movies",
    "Crime thrillers",
  ];

  async function searchAction(formData: FormData) {
    const searchTerm = formData.get("searchTerm") as string;

    redirect(`/search/${searchTerm}`);
  }

  return (
    <div className="mb-12 flex flex-col w-full ">
      <form action={searchAction} className="w-full">
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
