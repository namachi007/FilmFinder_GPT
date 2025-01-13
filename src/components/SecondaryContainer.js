import React from 'react'
import {MovieList} from "./MovieList";
import {MovieCard} from "./MovieCard";
import {useSelector} from "react-redux";

export const SecondaryContainer = () => {
  
  const Movies = useSelector(store => store.movies)
 

  return (
    <div className="text-white w-full bg-black ">
      {/*
        MovieList-Popular 
          -MovieCard * n
        MovieList-Now Playing 
          -MovieCard * n
          ....
      */}
      
        <div className="-mt-44 ml-10 relative z-20 bg-opacity-20">
          <MovieList title={"Now Playing"} movies={Movies.nowPlayingMovies} />
          <MovieList title={"Now Playing"} movies={Movies.nowPlayingMovies} />
          <MovieList title={"Now Playing"} movies={Movies.nowPlayingMovies} />
        </div>
      </div>
  );  }
