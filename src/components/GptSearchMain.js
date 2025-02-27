import React from "react";
import {
  BG_URL_Netflix,
  apiOptionsWithKey,
  TMDB_API_KEY,
} from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import client from "../utils/openai";
import { addMovies } from "../utils/gptSeach";

export const GptSearchMain = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((store) => store.config.configLanguage);
  const searchText = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const serachMoviesTmdb = async (movie) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${TMDB_API_KEY}&include_adult=false&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      if (!data.ok) {
        throw new Error(`API request failed with status ${data.status}`);
      }

      const json = await data.json();
      return json.results;
    } catch (error) {
      console.error("Error in serachMoviesTmdb:", error);
      setNetworkError(true);
      return [];
    }
  };

  useEffect(() => {
    const fetchGptResults = async () => {
      if (searchQuery === "") return;
      setNetworkError(false);
      setIsLoading(true); 

      try {
        const gptQuery = `Act as a recommendation system and suggest some very relevant movies for the query: ${searchQuery}. Only give names of 8 movies, comma-separated.`;

        const gptResults = await client.chat.completions.create({
          messages: [{ role: "user", content: gptQuery }],
          model: "gpt-4o-mini",
        });
        setResults(gptResults.choices[0].message.content);
        tmdbApiCall(gptResults);
      } catch (error) {
        console.error("Error fetching GPT results:", error.message);
        setNetworkError(true);
        setIsLoading(false); 
      }
    };

    fetchGptResults();
  }, [searchQuery]);

  const tmdbApiCall = async (gptResults) => {
    try {
      const data = gptResults.choices[0].message.content.split(",");
      const promiseApiCall = data.map((movie) => serachMoviesTmdb(movie));
      const settledResults = await Promise.allSettled(promiseApiCall);
      let tmdbResults = settledResults
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value);

      tmdbResults = tmdbResults.filter(
        (movie) => movie && Array.isArray(movie) && movie.length > 0
      );

      dispatch(addMovies({ movieNames: data, tmdbResults: tmdbResults }));
    } catch (error) {
      console.error("Error in tmdbApiCall:", error);
      dispatch(addMovies({ movieNames: [], tmdbResults: [] }));
      setNetworkError(true);
    } finally {
      setIsLoading(false); 
    }
  };

  const handleSearchClick = () => {
    setIsClicked(true);
    if (searchText.current && searchText.current.value) {
      setSearchQuery(searchText.current.value.trim());
    } else {
      console.error("Input is null or empty!");
    }
  };

  return (
    <div className="flex flex-col ">
      <div className=" relative w-full  overflow-hidden h-screen ">
        <img
          className=" md:h-full md:w-full  h-screen object-cover"
          srcset={BG_URL_Netflix}
          alt=""
          aria-hidden="true"
        ></img>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/90"></div>
      </div>
      <div className="absolute w-full h-screen">
        <div className="flex justify-center w-full md:h-screen items-center flex-col h-[70%]">
          <h1 className="text-white md:text-4xl sm:text-2xl text-xl  font-extrabold mb-8 text-center">
            {lang[currentLanguage].searchText}
          </h1>

          {isLoading && (
            <div className="flex flex-col justify-center items-center mb-6">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500 mb-3"></div>
              <p className="text-white text-lg">Searching for movies...</p>
            </div>
          )}

          {networkError && (
            <div className="bg-red-600 text-white p-4 rounded-lg mb-6 max-w-2xl text-center">
              <h3 className="text-xl font-bold mb-2">
                Network Restriction Detected
              </h3>
              <p className="mb-2">
                It appears that your internet service provider (Jio) is blocking
                access to the movie database API.
              </p>
              <p>To use the search feature, please try:</p>
              <ul className="list-disc list-inside mt-2 mb-2">
                <li>Using a different internet connection</li>
                <li>Using a VPN service</li>
                <li>Accessing this application later</li>
              </ul>
              <p className="mt-2">
                You can still browse the main movie collections on the home
                page.
              </p>
            </div>
          )}

          <form
            className="flex justify-center items-center w-full "
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              ref={searchText}
              placeholder={lang[currentLanguage].searchPlaceholder}
              className="md:w-[40%] p-3 w-[60%] md:text-lg text-md rounded-lg "
            ></input>
            <button
              className="bg-red-500 text-white md:p-3 p-2 md:w-32 w-20 rounded-lg ml-10 md:text-lg text-md font-bold"
              onClick={handleSearchClick}
              disabled={isLoading}
            >
              {isLoading ? "Searching..." : lang[currentLanguage].find}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
