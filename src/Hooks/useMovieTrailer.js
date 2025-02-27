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
    try {
      const data = await fetch(
        `${TMDB_PROXY_BASE_URL}/movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=en-US`,
        apiOptionsWithKey
      );

      if (!data.ok) {
        throw new Error(`API request failed with status ${data.status}`);
      }

      const json = await data.json();
      const filteredTrailer = json.results.filter(
        (video) => video.type === "Trailer"
      );
      // Fix logic issue: if filteredTrailer is empty, use json.results[0] instead
      const currentTrailer =
        filteredTrailer.length > 0 ? filteredTrailer[0] : json.results[0];
      dispatch(addVideoTrailer(currentTrailer));
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
      // Dispatch empty object to avoid UI errors
      dispatch(addVideoTrailer({}));
    }
  };

  useEffect(() => {
    getmovieTrailer();
  }, []);
};
