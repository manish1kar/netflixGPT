import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondConatiner from './SecondConatiner';
import useNowPlaying from '../hooks/useNowPlaying';
import usePopularMovie from '../hooks/usePopularMovie';
import useTopRatedMovie from '../hooks/useTopRatedMovie';
import useUpcomingMovie from '../hooks/useUpcomingMovie';

const Browse = () => {

  useNowPlaying();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();

  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondConatiner/>
    </div>
  )
}

export default Browse