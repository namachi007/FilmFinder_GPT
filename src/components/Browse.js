import Header from './Header';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import useFetchingMovies from '../Hooks/useFetchingNowPlayingMovies';
import { MainContainer } from './MainContainer';
import { SecondaryContainer } from './SecondaryContainer';
import useFetchingPopularMovies from "../Hooks/useFetchingPopularMovies";
import useFetchingTopRatedMovies from "../Hooks/useFetchingTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";


const Browse = () => {
  const navigate = useNavigate();
const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      navigate("/");
    })
    .catch((error) => {
      // An error happened.
      navigate("/error");
    });
}

  useFetchingMovies();
  useFetchingPopularMovies();
  useFetchingTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="relative min-h-screen">
      <div className="relative min-h-screen">
        <Header />
        <div className="absolute top-2 right-10 p-4 z-50">
          <button
            onClick={handleSignOut}
            className="w-24 h-8 p-1 border-red-600 bg-red-600 cursor-pointer text-md text-white font-medium rounded-md hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
        <div className="flex flex-col">
          <MainContainer />
          <SecondaryContainer />
        </div>
      </div>
    </div>
  );
};


export default Browse;