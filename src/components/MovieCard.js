import React from 'react'

export const MovieCard = ({ moviePoster }) => {
  return (
    <div className="w-52 ml-3 rounded-md">
      <img className='rounded-lg' src={"https://image.tmdb.org/t/p/w200/" + moviePoster} alt='Movie Poster'  />
    </div>
  );
};
