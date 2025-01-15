import React from 'react'

export const MovieCard = ({ moviePoster }) => {
  if(!moviePoster) return null;
  return (
    <div className="min-w-[150px] sm:min-w-[200px] md:min-w-[240px] ml-3 w-36 rounded-md">
      <img
        className="rounded-lg w-full h-auto object-cover"
        src={"https://image.tmdb.org/t/p/w500/" + moviePoster}
        alt="Movie Poster"
      />
    </div>
  );
};
