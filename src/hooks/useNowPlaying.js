import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../redux/movieSlice";

const useNowPlaying = () => {

    const dispatch = useDispatch()
    
    const fetchNowPlaying = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS);
        const json = await response.json();
        dispatch(addNowPlaying(json.results))
    };

    useEffect(()=> {
        fetchNowPlaying();
    }, []);
} 

export default useNowPlaying;
