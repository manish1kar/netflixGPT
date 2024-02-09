import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondConatiner from './SecondConatiner';
import useNowPlaying from '../hooks/useNowPlaying';

const Browse = () => {

  useNowPlaying();

  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondConatiner/>
    </div>
  )
}

export default Browse