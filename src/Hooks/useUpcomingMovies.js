import { addupcomingMovies } from "../utils/movieSlice";
import { apiOptions } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      apiOptions
    );
    const response = await data.json();
    dispatch(addupcomingMovies(response.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
