import React from 'react'
import { useSelector } from 'react-redux'
import { MovieList } from './MovieList';

export const GptSearchSuggestions = () => {
    const {moviesName, movieResults} = useSelector(store => store.gpt);
    if(moviesName === null) return;

  return (
    <div className="text-white w-full bg-black  ">
      <div className="-mt-44 ml-10 relative z-20 bg-opacity-20">
        {moviesName.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
}
