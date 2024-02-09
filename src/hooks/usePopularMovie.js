import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/movieSlice";

const usePopularMovie = () => {

    const dispatch = useDispatch()
    
    const fetchPopular = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', OPTIONS);
        const json = await response.json();
        dispatch(addPopularMovies(json?.results))
    };

    useEffect(()=> {
        fetchPopular();
    }, []);
} 

export default usePopularMovie;
