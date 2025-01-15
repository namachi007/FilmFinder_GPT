import React from 'react'
import { MovieCard } from './MovieCard'
import { useRef } from 'react';

export const MovieList = ({title, movies}) => {
  const scrollRef = useRef(null);

   const scrollLeft = () => {
     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
   };

   const scrollRight = () => {
     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
   };
  
  return (
    movies && (
      <div className="py-4 relative">
        <h1 className="text-2xl font-semibold mb-5 ml-8">{title}</h1>
        <div className="relative">
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75 "
            onClick={scrollLeft}
          >
            ◀
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll scrollbar-hide space-x-4 px-4"
          >
            {movies.map((movie, index) => (
              <MovieCard key={index} moviePoster={movie?.poster_path} />
            ))}
          </div>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75"
            onClick={scrollRight}
          >
            ▶
          </button>
        </div>
      </div>
    )
  );
}
