import React, { useRef } from 'react'
import { OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addSearchMovies } from '../redux/movieSlice';

const GptSearchBar = () => {

  const dispatch = useDispatch();
  const search = useRef(null);

  const clickHandler = async () => {
    const response = await fetch('https://api.themoviedb.org/3/search/movie?query='+search.current.value+'&include_adult=false&page=1', OPTIONS);
    const json = await response.json();
    dispatch(addSearchMovies(json?.results));
  }
  return (
    <div className='pt-16'>
      <form 
      onSubmit={(e) => e.preventDefault()}
      className='p-4 bg-black w-1/2 grid grid-cols-12 mx-auto bg-opacity-70'>
        <input 
        type='text' 
        placeholder='what do you want to search?' 
        className='bg-white col-span-9 p-2 rounded-lg'
        ref={search}
         />
        <button onClick={clickHandler}
        className='mx-2 text-white col-span-3 bg-red-500 rounded-lg'
        >Search</button>
        </form>  
    </div>
  )
}

export default GptSearchBar;