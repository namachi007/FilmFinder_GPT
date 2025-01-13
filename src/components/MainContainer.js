import React from 'react'
import { useSelector } from 'react-redux'
import { VideoTitle } from './VideoTitle';
import { VideoBackground } from './VideoBackground';

export const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies);
    if(!movies) {
        return <div>Loading...</div>
    }
    const MainMovie = movies[0];
    const {original_title, overview, id} = MainMovie

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
      
    </div>
  );
}
