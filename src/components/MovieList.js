import React from 'react'
import { MovieCard } from './MovieCard'
import { useRef } from 'react';

export const MovieList = ({title, movies}) => {
  console.log(movies);
  const scrollRef = useRef(null);

   const scrollLeft = () => {
     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
   };

   const scrollRight = () => {
     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
   };
  
  return (
    movies && (
      <div className=" py-4">
        <h1 className="text-2xl font-semibold mb-5 ml-3">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
          <button
            className="absolute left-0 z-10 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
            onClick={scrollLeft}
          >
            ◀
          </button>
          <div className="flex " ref={scrollRef}>
            {movies.map((movie) => (
              <MovieCard moviePoster={movie?.poster_path} />
            ))}
            ;
          </div>
          <button
            className="absolute right-0 z-10 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
            onClick={scrollRight}
          >
            ▶
          </button>
        </div>
      </div>
    )
  );
}
