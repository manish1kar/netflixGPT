import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/movieSlice";

const useTopRatedMovie = () => {

    const dispatch = useDispatch()
    
    const fetchTopRated = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', OPTIONS);
        const json = await response.json();
        dispatch(addTopRatedMovies(json?.results))
    };

    useEffect(()=> {
        fetchTopRated();
    }, []);
} 

export default useTopRatedMovie;
