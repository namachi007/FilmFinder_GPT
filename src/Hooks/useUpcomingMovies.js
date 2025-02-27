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
    const data = await fetch(
      `${TMDB_PROXY_BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}`,
      apiOptionsWithKey
    );
    const response = await data.json();
    dispatch(addupcomingMovies(response.results));
  };

  useEffect(() => {
    if (!upcomingmovies) {
      getUpcomingMovies();
    }
  }, []);
};

export default useUpcomingMovies;
