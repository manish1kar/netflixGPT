
import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    
  return (
    <div>
    <h1 className='font-bold px-6 mt-4 text-lg text-white'>{title}</h1>
    <div className='flex overflow-x-scroll no-scrollbar'>
        <div className='flex p-4'>
        {movies && movies.map((movie)=> 
          <MovieCard movies={movie}/>
        )}
        </div>
    </div>
    </div>
  )
}

export default MovieList