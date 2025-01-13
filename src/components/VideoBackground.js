import React from 'react';
import { useMovieTrailer } from '../Hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

export const VideoBackground = ({movieId}) => {
  const trailerKey = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      <iframe
        className=" aspect-video  w-full h-full absolute top-0 left-0 -z-10"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey?.key +
          "?autoplay=1&loop=1&controls=0&mute=1&playlist=" + trailerKey?.key + "&modestbranding=1&rel=0&showinfo=0&fs=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // style={{
        //   // Matches 16:9 aspect ratio to fill width
        //   height: "100vh", // Full screen height
        //   position: "absolute",
        //   top: "50%",
        //   left: "50%",
        //   transform: "translate(-50%, -50%)",
        //   objectFit: "cover",
        // }}
      ></iframe>
    </div>
  );
   
    
}
