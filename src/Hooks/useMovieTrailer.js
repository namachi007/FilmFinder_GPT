import React, { useEffect, useState } from "react";
import {
  apiOptionsWithKey,
  TMDB_PROXY_BASE_URL,
  TMDB_API_KEY,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideoTrailer } from "../utils/movieSlice";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getmovieTrailer = async () => {
    const data = await fetch(
      `${TMDB_PROXY_BASE_URL}/movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=en-US`,
      apiOptionsWithKey
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
};
