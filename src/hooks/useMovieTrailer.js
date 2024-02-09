import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch} from "react-redux";
import { addMovieTrailer } from "../redux/movieSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    console.log(movieId)
    const fetchTrailer = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", OPTIONS);
        const json = await response.json();
        const videos = json.results;
        const Trailers =  videos.filter((video) => video.type === "Trailer")
        const Trailer = Trailers[0]
        dispatch(addMovieTrailer(Trailer));
    };

    useEffect(()=> {
        fetchTrailer();
    }, []);
}

export default useMovieTrailer;