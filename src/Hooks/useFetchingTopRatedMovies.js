import { addTopRatedMovies } from "../utils/movieSlice";
import { apiOptions } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useFetchingTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      apiOptions
    );
    const response = await data.json();
    dispatch(addTopRatedMovies(response.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useFetchingTopRatedMovies;
