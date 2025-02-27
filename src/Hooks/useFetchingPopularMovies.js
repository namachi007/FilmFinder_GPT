import { addPopularMovies } from "../utils/movieSlice";
import {
  apiOptionsWithKey,
  TMDB_PROXY_BASE_URL,
  TMDB_API_KEY,
} from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFetchingMovies = () => {
  const dispatch = useDispatch();
  const popularmovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      `${TMDB_PROXY_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`,
      apiOptionsWithKey
    );
    const response = await data.json();
    dispatch(addPopularMovies(response.results));
  };

  useEffect(() => {
    if (!popularmovies) {
      getPopularMovies();
    }
  }, []);
};

export default useFetchingMovies;
