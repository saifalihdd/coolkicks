"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch?: (query: string) => void }) {
  const [query, setQuery] = useState("");

  function handleSearch() {
    if (onSearch) onSearch(query);
  }

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search sneakers..."
        className="w-full px-4 py-2 rounded-lg bg-white/5 text-white/40 placeholder-white/15 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800"
      >
        🔍
      </button>
    </div>
  );
}