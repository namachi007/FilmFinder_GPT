import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { apiOptions } from "../utils/constants";
import { useSearchParams } from "react-router";

export const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const [ytData, setYtData] = useState(null);
  const [isAgeRestricted, setIsAgeRestricted] = useState(false);

  useEffect(() => {
    getYtData();
  }, []);

  const getYtData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        searchParams.get("v") +
        "/videos?language=en-US",
      apiOptions
    );
    const json = await data.json();
    console.log(json?.results);

    const videoKey = json?.results[0]?.key;
    if (videoKey) {
      setYtData(videoKey);
    }   
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-screen">
        {ytData ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${ytData}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-4 animate-pulse">
              Loading Video...
            </div>
            <div className="flex justify-center">
              <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
