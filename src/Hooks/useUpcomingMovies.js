import { addupcomingMovies } from "../utils/movieSlice";
import { apiOptions } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingmovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      apiOptions
    );
    const response = await data.json();
    dispatch(addupcomingMovies(response.results));
  };

  useEffect(() => {
    if (!upcomingmovies) { getUpcomingMovies();}
  }, []);
};

export default useUpcomingMovies;
