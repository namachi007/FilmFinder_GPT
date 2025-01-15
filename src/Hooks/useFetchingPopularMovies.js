import { addPopularMovies } from "../utils/movieSlice";
import { apiOptions } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFetchingMovies = () => {
  const dispatch = useDispatch();
const popularmovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      apiOptions
    );
    const response = await data.json();
    dispatch(addPopularMovies(response.results));
  };

  useEffect(() => {
    if(!popularmovies) {
    getPopularMovies();
    }
  }, []);
};

export default useFetchingMovies;
