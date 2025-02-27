import { addTopRatedMovies } from "../utils/movieSlice";
import {
  apiOptionsWithKey,
  TMDB_PROXY_BASE_URL,
  TMDB_API_KEY,
} from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFetchingTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedmovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        `${TMDB_PROXY_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`,
        apiOptionsWithKey
      );

      if (!data.ok) {
        throw new Error(`API request failed with status ${data.status}`);
      }

      const response = await data.json();
      dispatch(addTopRatedMovies(response.results));
    } catch (error) {
      console.error("Error fetching top rated movies:", error);
      // Dispatch empty array to avoid UI errors
      dispatch(addTopRatedMovies([]));
    }
  };

  useEffect(() => {
    if (!topRatedmovies) {
      getTopRatedMovies();
    }
  }, []);
};

export default useFetchingTopRatedMovies;
