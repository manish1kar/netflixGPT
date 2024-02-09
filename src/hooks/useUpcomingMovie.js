import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addUpcomingMovies } from "../redux/movieSlice";

const useUpcomingMovie = () => {

    const dispatch = useDispatch()
    
    const fetchUpcoming = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', OPTIONS);
        const json = await response.json();
        dispatch(addUpcomingMovies(json?.results))
    };

    useEffect(()=> {
        fetchUpcoming();
    }, []);
} 

export default useUpcomingMovie;
