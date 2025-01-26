import React from 'react'
import { MovieCard } from './MovieCard'
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({title, movies}) => {
  console.log(movies);
  const scrollRef = useRef(null);
  let startX = 0;
  let scrollLeft = 0;

  const handleTouchStart = (e) => {
    if (!scrollRef.current) return;
    startX = e.touches[0].pageX;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
if (!scrollRef.current) return;
    const moveX = e.touches[0].pageX - startX;
    scrollRef.current.scrollLeft = scrollLeft - moveX;
  };

   const scrollleft = () => {
     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
   };

   const scrollRight = () => {
     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
   };
  
  return (
    movies && (
      <div className="md:py-3 pb-6 relative md:w-full">
        <h1 className="md:text-2xl text-md font-semibold mb-5 md:ml-8">
          {title}
        </h1>
        <div className="relative">
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75  md:block hidden "
            onClick={scrollleft}
          >
            ◀
          </button>
          <div
            ref={scrollRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className="flex overflow-x-scroll scrollbar-hide space-x-4 md:px-4"
          >
            {movies.map((movie, index) => (
              <Link key={movie.id} to={"/watch?v=" + movie.id}>
                <MovieCard key={index} moviePoster={movie?.poster_path} />
              </Link>
            ))}
          </div>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75  md:block hidden"
            onClick={scrollRight}
          >
            ▶
          </button>
        </div>
      </div>
    )
  );
}
