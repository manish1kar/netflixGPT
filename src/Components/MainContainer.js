import React from 'react'
import MovieTitle from './MovieTitle';
import TrailerVideo from './TrailerVideo';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  
  const movies = useSelector((store)=> store.movie?.nowPlayingMovies);

  if(!movies) return ;

  const random = Math.floor(Math.random() * movies?.length);

  const randomMovie = movies[random] ;

  const {original_title, overview, id} = randomMovie;

  return (
    <div>
        <MovieTitle title={original_title} overview={overview}/>
        <TrailerVideo movieId ={id}/>
    </div>
  )
}

export default MainContainer;