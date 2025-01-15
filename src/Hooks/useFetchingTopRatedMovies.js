import { addTopRatedMovies } from "../utils/movieSlice";
import { apiOptions } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFetchingTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedmovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      apiOptions
    );
    const response = await data.json();
    dispatch(addTopRatedMovies(response.results));
  };

  useEffect(() => {
    if(!topRatedmovies) {
    getTopRatedMovies();
    }
  }, []);
};

export default useFetchingTopRatedMovies;
