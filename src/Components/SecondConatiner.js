import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondConatiner = () => {
  const nowPlaying = useSelector((store)=> store?.movie?.nowPlayingMovies);
  const popular = useSelector((store)=> store?.movie?.popularMovies);
  const topRated = useSelector((store)=> store?.movie?.topRatedMovies);
  const upcoming = useSelector((store)=> store?.movie?.upcomingMovies);

  if(!nowPlaying || !popular || !topRated || !upcoming) return;

  return (
    <div className='-mt-80 relative z-20'>
        <div className=''>
          <MovieList title={"NOW PLAYING"} movies={nowPlaying}/>
        </div>     
    <div className='bg-black'>
      <MovieList title={"POPULAR"} movies={popular}/>
      <MovieList title={"TOP RATED"} movies={topRated}/>
      <MovieList title={"UPCOMING"} movies={upcoming}/>
    </div>
    </div>
  )
}

export default SecondConatiner;