import React from 'react';
import { FiPlay } from "react-icons/fi";
import { LuBadgeInfo } from "react-icons/lu";


const MovieTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video absolute py-48 pl-12 bg-gradient-to-t from-black '>
      <h1 className='font-bold text-5xl text-white'>{title}</h1>
      <p className='w-1/3 ml-6 m-2 text-white'>{overview}</p>
        <div className='flex'>
        <button className='px-6 m-2 py-2 bg-white flex rounded-md hover:opacity-80'>
        <FiPlay className='mt-1'/> <p className='mx-2'>Play</p>
        </button>
        <button className='px-6 m-2 py-2 bg-white flex rounded-md hover:opacity-80'>
        <LuBadgeInfo className='mt-1'/> <p className='mx-2'>More Info</p>
        </button>
      </div>
    </div>
  )
}

export default MovieTitle