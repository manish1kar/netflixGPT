import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondConatiner from './SecondConatiner';
import useNowPlaying from '../hooks/useNowPlaying';
import usePopularMovie from '../hooks/usePopularMovie';
import useTopRatedMovie from '../hooks/useTopRatedMovie';
import useUpcomingMovie from '../hooks/useUpcomingMovie';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const isSearchTab = useSelector((store)=> store.search?.isSearchTab)

  useNowPlaying();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();

  return (
    <div>
        <Header/>
        {isSearchTab ? <GptSearch/> :
        (<div>
        <MainContainer/>
        <SecondConatiner/>
        </div>
        )}
    </div>
  )
}

export default Browse