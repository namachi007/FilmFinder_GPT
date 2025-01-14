import React from 'react'
import {BG_URL_Netflix} from '../utils/constants';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

export const GptSearchMain = () => {

    const currentLanguage = useSelector((store) => store.config.configLanguage);

  return (
    <div className="flex flex-col ">
      <div className=" relative w-full  overflow-hidden h-screen">
        <img
          className=" h-full w-full "
          srcset={BG_URL_Netflix}
          alt=""
          aria-hidden="true"
          class="default-ltr-cache-19j6xtr"
        ></img>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/90"></div>
      </div>
      <div className="absolute w-full h-screen">
        <div className="flex justify-center w-full h-screen items-center flex-col">
          <h1 className="text-white text-4xl font-extrabold mb-8 text-center">
            {lang[currentLanguage].searchText}
          </h1>
          <form
            className="flex justify-center items-center w-full "
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              placeholder={lang[currentLanguage].searchPlaceholder}
              className="w-[40%] p-3 text-lg rounded-lg "
            ></input>
            <button className="bg-red-500 text-white p-3 w-32 rounded-lg ml-10 text-lg font-bold">
              {lang[currentLanguage].find}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
