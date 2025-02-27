import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import useFetchingMovies from "../Hooks/useFetchingNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import useFetchingPopularMovies from "../Hooks/useFetchingPopularMovies";
import useFetchingTopRatedMovies from "../Hooks/useFetchingTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import { toggleGptSearch } from "../utils/gptSeach";
import { useDispatch, useSelector } from "react-redux";
import { GptSearchMain } from "./GptSearchMain";
import { Supported_Language } from "../utils/constants";
import { changeConfigLanguage } from "../utils/configSlice";
import { GptSearchSuggestions } from "./GptSearchSuggestions";
import { useEffect, useState } from "react";

const NetworkErrorMessage = ({ onDismiss }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-3xl w-full bg-gradient-to-b from-red-900 to-black p-6 rounded-xl shadow-2xl border border-red-700">
        <div className="flex flex-col items-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-red-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Network Restriction Detected
          </h2>
          <div className="w-24 h-1 bg-red-600 rounded mb-6"></div>
        </div>

        <div className="space-y-6 text-center">
          <p className="text-xl">
            We've detected that you're using{" "}
            <span className="font-bold text-red-500">Jio network</span>, which
            is currently blocking access to our movie database (TMDB).
          </p>

          <div className="bg-black bg-opacity-50 p-4 rounded-lg border border-red-800">
            <h3 className="text-xl font-semibold mb-3">
              To enjoy the full experience, please try:
            </h3>
            <ul className="space-y-3 text-left list-none mx-auto max-w-md">
              <li className="flex items-center">
                <span className="bg-red-600 rounded-full p-1 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  Switching to <strong>Airtel</strong>, <strong>Vi</strong>, or
                  another network provider
                </span>
              </li>
              <li className="flex items-center">
                <span className="bg-red-600 rounded-full p-1 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  Using a <strong>VPN service</strong> to bypass network
                  restrictions
                </span>
              </li>
              <li className="flex items-center">
                <span className="bg-red-600 rounded-full p-1 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  Connecting to a different <strong>WiFi network</strong>
                </span>
              </li>
            </ul>
          </div>

          <p className="text-lg italic">
            You can still use the GPT Search feature, but movie results may not
            display properly.
          </p>

          <div className="pt-4 flex justify-center space-x-4">
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Try Again
            </button>
            <button
              onClick={onDismiss}
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingmovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularmovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedmovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingmovies);

  const [networkError, setNetworkError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [apiErrorCount, setApiErrorCount] = useState(0);
  const [hasAttemptedLoad, setHasAttemptedLoad] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [debugInfo, setDebugInfo] = useState({
    apiCalls: 0,
    apiErrors: 0,
    hasMovieData: false,
    timeElapsed: 0,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setApiErrorCount(0);
    setNetworkError(false);
    localStorage.removeItem("tmdb_network_error");
    localStorage.removeItem("tmdb_api_error_count");
  }, []);

  useEffect(() => {
    const handleFetchError = (event) => {
      if (event.type === "error") {
        if (
          event.message &&
          (event.message.includes("Failed to fetch") ||
            event.message.includes("NetworkError") ||
            event.message.includes("ERR_CONNECTION_TIMED_OUT"))
        ) {
          console.log("Network error detected via window event:", event);
          setApiErrorCount((prev) => prev + 1);
          setDebugInfo((prev) => ({ ...prev, apiErrors: prev.apiErrors + 1 }));
        }
      }
    };

    window.addEventListener("error", handleFetchError, true);
    window.addEventListener("unhandledrejection", (event) => {
      if (
        event.reason &&
        event.reason.message &&
        (event.reason.message.includes("Failed to fetch") ||
          event.reason.message.includes("NetworkError") ||
          event.reason.message.includes("ERR_CONNECTION_TIMED_OUT"))
      ) {
        console.log(
          "Unhandled promise rejection for network error:",
          event.reason
        );
        setApiErrorCount((prev) => prev + 1);
        setDebugInfo((prev) => ({ ...prev, apiErrors: prev.apiErrors + 1 }));
      }
    });

    return () => {
      window.removeEventListener("error", handleFetchError, true);
      window.removeEventListener("unhandledrejection", handleFetchError);
    };
  }, []);

 
  useEffect(() => {
    if (showGptSearch) {
      setNetworkError(false);
      setIsLoading(false);
      return;
    }

    const hasAnyMovieData =
      (nowPlayingMovies && nowPlayingMovies.length > 0) ||
      (popularMovies && popularMovies.length > 0) ||
      (topRatedMovies && topRatedMovies.length > 0) ||
      (upcomingMovies && upcomingMovies.length > 0);

    setDebugInfo((prev) => ({ ...prev, hasMovieData: hasAnyMovieData }));

    if (hasAnyMovieData) {
      setNetworkError(false);
      setIsLoading(false);
      setHasAttemptedLoad(true);
    }

    const continueButtonTimeoutId = setTimeout(() => {
      setShowContinueButton(true);
    }, 2000);

    const quickTimeoutId = setTimeout(() => {
      if (hasAnyMovieData) {
        setIsLoading(false);
      }
      setDebugInfo((prev) => ({ ...prev, timeElapsed: 3 }));
    }, 3000);

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      setHasAttemptedLoad(true);

      const hasNoMovieData =
        (!nowPlayingMovies || nowPlayingMovies.length === 0) &&
        (!popularMovies || popularMovies.length === 0) &&
        (!topRatedMovies || topRatedMovies.length === 0) &&
        (!upcomingMovies || upcomingMovies.length === 0);

      setDebugInfo((prev) => ({
        ...prev,
        timeElapsed: 5,
        hasMovieData: !hasNoMovieData,
      }));
      if (hasNoMovieData && !showGptSearch && apiErrorCount >= 3) {
        console.log(
          "Setting network error to true. No movie data:",
          hasNoMovieData,
          "API errors:",
          apiErrorCount
        );
        setNetworkError(true);
      } else {
        setNetworkError(false);
      }
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(quickTimeoutId);
      clearTimeout(continueButtonTimeoutId);
    };
  }, [
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    showGptSearch,
    apiErrorCount,
  ]);

  const handleSignOut = () => {
    localStorage.removeItem("tmdb_network_error");
    localStorage.removeItem("tmdb_api_error_count");
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeConfigLanguage(e.target.value));
  };

  const toggleGpt = () => {
    if (!showGptSearch) {
      setNetworkError(false);
    }
    dispatch(toggleGptSearch());
  };

  const dismissNetworkError = () => {
    setNetworkError(false);
  };

  useFetchingMovies();
  useFetchingPopularMovies();
  useFetchingTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    const hasNoMovieData =
      (!nowPlayingMovies || nowPlayingMovies.length === 0) &&
      (!popularMovies || popularMovies.length === 0) &&
      (!topRatedMovies || topRatedMovies.length === 0) &&
      (!upcomingMovies || upcomingMovies.length === 0);

    if (
      apiErrorCount >= 3 &&
      hasNoMovieData &&
      !showGptSearch &&
      hasAttemptedLoad
    ) {
      console.log("Forcing network error display due to API errors");
      setNetworkError(true);
    } else if (hasAttemptedLoad && !hasNoMovieData) {
      setNetworkError(false);
    }
  }, [
    apiErrorCount,
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    showGptSearch,
    hasAttemptedLoad,
  ]);
  if (networkError && !showGptSearch) {
    return <NetworkErrorMessage onDismiss={dismissNetworkError} />;
  }

  return (
    <div className="relative">
      <div className="relative">
        <Header />

        <div className="absolute md:top-2 md:right-10 md:p-4 p-2 z-50 flex flex-col md:flex-row items-center right-2 md:mt-0 md:ml-0">
          {showGptSearch && (
            <select
              className="bg-gray-700 text-white md:p-1 md:text-[15px] p-[2px] rounded-lg bg-opacity-70 md:text-md text-[12px]"
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
            className="md:w-32 mx-6 my-3 h-18 p-1 px-2 md-p-auto bg-slate-500 bg-opacity-50 cursor-pointer md:text-[15px] text-[10px] text-white font-medium rounded-md hover:shadow-[0_8px_20px_rgba(32,_198,_219,_0.7)] flex items-center justify-center space-x-2"
          >
            {showGptSearch ? (
              "Home Page"
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <span>GPT Search</span>
              </>
            )}
          </button>
          <button
            onClick={handleSignOut}
            className="md:w-24 w-20 md:h-8 h-6 md:p-1 md:text-[15px] border-red-600 bg-red-600 cursor-pointer md:text-md text-[10px] text-white font-medium rounded-md hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>

        {isLoading && !showGptSearch && (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-red-600 mb-4"></div>
            <p className="text-black text-xl font-semibold animate-pulse">
              Loading movies...
            </p>
            {showContinueButton && (
              <button
                onClick={() => setIsLoading(false)}
                className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Continue Anyway
              </button>
            )}
          </div>
        )}

        {!isLoading && (
          <>
            {showGptSearch ? (
              <div className="flex flex-col">
                <GptSearchMain />
                <GptSearchSuggestions />
              </div>
            ) : (
              <div className="flex flex-col">
                <MainContainer />
                <SecondaryContainer />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
