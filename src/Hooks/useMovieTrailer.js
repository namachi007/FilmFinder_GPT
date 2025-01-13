import React, { useEffect, useState } from 'react'
import { apiOptions } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addVideoTrailer } from '../utils/movieSlice';

export const useMovieTrailer = (movieId) => {

  const dispatch = useDispatch();
  const getmovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
      apiOptions
    );
    const json = await data.json();
    const filteredTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const currentTrailer =
      filteredTrailer.length == 0 ? filteredTrailer[0] : json.results[0];
    dispatch(addVideoTrailer(currentTrailer));
  };

  useEffect(() => {
    getmovieTrailer();
  }, []);
}
