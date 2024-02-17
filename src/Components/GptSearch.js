import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptSearchResults from './GptSearchResults';
import { BG_IMG } from '../utils/constants';

const GptSearch = () => {
  return (
    <div className=''>
        <img alt='bg' src={BG_IMG} className='fixed'/>
        <div className='absolute w-full'>
        <GptSearchBar/>
        <GptSearchResults/>
        </div>
    </div>
  )
}

export default GptSearch