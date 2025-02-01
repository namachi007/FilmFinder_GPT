import React from "react";
import { BG_URL_Netflix } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import client from "../utils/openai";
import {apiOptions} from "../utils/constants";
import { addMovies } from "../utils/gptSeach"; 

export const GptSearchMain = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((store) => store.config.configLanguage);
  const searchText = useRef(null);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [results, setResults] = useState(null); 
  const [isClicked, setIsClicked] = useState(false); 

  const serachMoviesTmdb = async(movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
      apiOptions
    );
    const json = await data.json();
    return json.results;
  } 

   useEffect(() => {
     const fetchGptResults = async () => {
       if (searchQuery === "") return; 
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
       }
     };

     fetchGptResults();
   }, [searchQuery]);

   const tmdbApiCall = async (gptResults) => {
     const data = gptResults.choices[0].message.content.split(",");
     const promiseApiCall = data.map((movie) => serachMoviesTmdb(movie));
     let tmdbResults = await Promise.all(promiseApiCall);
      tmdbResults = tmdbResults.filter(movie => movie.length > 0);
     dispatch(addMovies({movieNames:data, tmdbResults: tmdbResults}));
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
            >
              {lang[currentLanguage].find}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
