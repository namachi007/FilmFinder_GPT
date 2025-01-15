import React from 'react';
import { addNowPlayingMovies } from "../utils/movieSlice";
import { apiOptions } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const useFetchingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingmovies = useSelector(
      (store) => store.movies.nowPlayingMovies
    );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      apiOptions
    );
    const response = await data.json();
    dispatch(addNowPlayingMovies(response.results));
  };

  useEffect(() => {
    if(!nowPlayingmovies){
    getNowPlayingMovies();
    }
  }, []);
}


export default useFetchingMovies;
