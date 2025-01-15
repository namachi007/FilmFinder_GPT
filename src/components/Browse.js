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
import { toggleGptSearch } from '../utils/gptSeach';
import { useDispatch, useSelector } from 'react-redux';
import { GptSearchMain } from './GptSearchMain';
import { Supported_Language } from '../utils/constants';
import { changeConfigLanguage } from '../utils/configSlice'; 
import { GptSearchSuggestions } from './GptSearchSuggestions';


const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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


const handleLanguageChange = (e) => {
   dispatch(changeConfigLanguage(e.target.value));
}

const toggleGpt = () => {
  dispatch(toggleGptSearch());
}

  useFetchingMovies();
  useFetchingPopularMovies();
  useFetchingTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="relative min-h-screen">
      <div className="relative min-h-screen">
        <Header />
        <div className="absolute top-2 right-10 p-4 z-50 flex ">
          {showGptSearch && (
            <select
              className="bg-gray-700 text-white p-1 rounded-lg bg-opacity-70"
              onChange={handleLanguageChange}
            >
              {Supported_Language.map((lang) => (
                <option key={lang.indentifier} value={lang.indentifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={toggleGpt}
            className="w-36 mx-6 h-18 p-1 px-3 bg-slate-500 bg-opacity-50 cursor-pointer text-md text-white font-medium rounded-md hover:shadow-[0_8px_20px_rgba(32,_198,_219,_0.7)] flex items-center justify-center space-x-2"
          >
            {showGptSearch ? (
              "Home Page"
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />{" "}
                </svg>
                <span>GPT Search</span>
              </>
            )}
          </button>
          <button
            onClick={handleSignOut}
            className="w-24 h-8 p-1 border-red-600 bg-red-600 cursor-pointer text-md text-white font-medium rounded-md hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
        {showGptSearch ? (
          <div className='flex flex-col'>
            <GptSearchMain />
            <GptSearchSuggestions />
          </div>
        ) : (
          <div className="flex flex-col">
            <MainContainer />
            <SecondaryContainer />
          </div>
        )}
      </div>
    </div>
  );
};


export default Browse;