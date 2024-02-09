import React from 'react'
import { POSTER_URL } from '../utils/constants'

const MovieCard = ({movies}) => {
  return (
    <div className='w-36 p-2'>
        <img 
        alt='poster' 
        src={POSTER_URL+movies?.poster_path}
        />
    </div>
  )
}

export default MovieCard