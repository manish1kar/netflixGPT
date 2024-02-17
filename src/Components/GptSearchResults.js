import React from 'react'
import { useSelector } from 'react-redux';
import SearchCard from './SearchCard';
const GptSearchResults = () => {
  const searchedMovie = useSelector((store)=> store.movie.searchedMovies);

  return (
    <div className='bg-black bg-opacity-70 p-4'>
    <div className=' flex flex-wrap mx-auto'>
      {searchedMovie && 
      searchedMovie.map((movie) => (
       movie?.poster_path && <SearchCard movie={movie}/>
      ))
      }
      </div>
    </div>
  )
}

export default GptSearchResults;