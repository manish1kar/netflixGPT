import React from 'react'
import { POSTER_URL } from '../utils/constants'

const searchCard = ({movie}) => {
    console.log(POSTER_URL+movie?.poster_path)
  return (
    <div className='w-3/12 p-2 my-2 pt-4 text-white'>
    <img 
    alt='poster' 
    src={POSTER_URL+movie?.poster_path}
    className='h-[70%] p-2 rounded-2xl'
    />
    <div className='p-3'>
    <h1 className='font-bold text-xl text-yellow-500'>{movie?.title}</h1>
    <p className='px-4'>{movie?.overview.slice(0,150)}...</p>
    <p className='text-red-400'>{movie?.release_date}</p>
    </div>
    </div>
  )
}

export default searchCard