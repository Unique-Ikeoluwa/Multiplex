"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface DisplayProps {
  searchTerm: string;
}
interface Movie {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  release_date?: string;
}

const Display: React.FC<DisplayProps> = ({ searchTerm }) => {
  const { theme } = useTheme();
  const [movies, setMovies] = useState<Movie[]>([]);

  const apiKey = "2ca22f700bb9eff7e814bfbe16ba6831";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = searchTerm
          ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
              searchTerm
            )}&language=en-US`
          : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`;

        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div className="md:max-w-7xl md:mx-auto py-7">
      {searchTerm && (
        <h2
          className={`text-3xl mb-12 mt-4 ${
            theme === "dark" ? "text-white" : "text-gray-700"
          }`}
        >
          Result for &apos;{searchTerm}&apos;
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {movies.length > 0 ? (
          movies.map((movie) => (
          <div
            key={movie.id}
            className={`max-w-sm ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } border ${
              theme === "dark" ? "border-gray-800" : "border-gray-200"
            } rounded-lg shadow m-3`}
          >
            <a href="#">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="rounded-t-lg h-auto max-w-full"
                alt={movie.name || movie.title}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h3
                  className={`mb-2 text-2xl font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {movie.name || movie.title}
                </h3>
              </a>
              <p
                className={`mb-3 font-normal ${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {movie.overview?.slice(0, 100)}...
              </p>
            </div>
          </div>
        ))
        ) : (
          searchTerm && (
            <p
              className={`col-span-full text-center ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              No results found.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Display;
