import React from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import {
  apiOptionsWithKey,
  TMDB_PROXY_BASE_URL,
  TMDB_API_KEY,
} from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFetchingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingmovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        `${TMDB_PROXY_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&page=1`,
        apiOptionsWithKey
      );

      if (!data.ok) {
        throw new Error(`API request failed with status ${data.status}`);
      }

      const response = await data.json();
      dispatch(addNowPlayingMovies(response.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
      // Dispatch empty array to avoid UI errors
      dispatch(addNowPlayingMovies([]));
    }
  };

  useEffect(() => {
    if (!nowPlayingmovies) {
      getNowPlayingMovies();
    }
  }, []);
};

export default useFetchingMovies;
