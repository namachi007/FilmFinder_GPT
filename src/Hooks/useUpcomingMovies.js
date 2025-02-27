import { addupcomingMovies } from "../utils/movieSlice";
import {
  apiOptionsWithKey,
  TMDB_PROXY_BASE_URL,
  TMDB_API_KEY,
} from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingmovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(
        `${TMDB_PROXY_BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}`,
        apiOptionsWithKey
      );

      if (!data.ok) {
        throw new Error(`API request failed with status ${data.status}`);
      }

      const response = await data.json();
      dispatch(addupcomingMovies(response.results));
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
      // Dispatch empty array to avoid UI errors
      dispatch(addupcomingMovies([]));
    }
  };

  useEffect(() => {
    if (!upcomingmovies) {
      getUpcomingMovies();
    }
  }, []);
};

export default useUpcomingMovies;
