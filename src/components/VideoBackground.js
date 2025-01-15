import React from 'react';
import { useMovieTrailer } from '../Hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

export const VideoBackground = ({movieId}) => {
  const trailerKey = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="h-full w-full relative">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div> */}
      <iframe
        className=" aspect-video  w-full h-full absolute -z-10"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey?.key +
          "?autoplay=1&loop=1&controls=0&mute=1&playlist=" +
          trailerKey?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1536px',
          height: '864px', 
          objectFit: 'cover',
        }}
      ></iframe>
    </div>
  );
   
    
}
