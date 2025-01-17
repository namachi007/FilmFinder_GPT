import React from 'react'
import {MovieList} from "./MovieList";
import {useSelector} from "react-redux";


export const SecondaryContainer = () => {
  
  const Movies = useSelector(store => store.movies)
  

  return (
    <div className="text-white w-full bg-black md:w-screen ">
      {/*
        MovieList-Popular 
          -MovieCard * n
        MovieList-Now Playing 
          -MovieCard * n
          ....
      */}

      <div className="md:-mt-32 mt-72 ml-7   md:ml-10 relative z-10 bg-opacity-20">
        <MovieList title={"Now Playing"} movies={Movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={Movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={Movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={Movies.upcomingMovies} />
      </div>
    </div>
  );  }
