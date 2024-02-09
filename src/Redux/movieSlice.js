import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState : {
        nowPlayingMovies : null,
        movieTrailer : null
    },
    reducers : {
        addNowPlaying : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer : (state, action) => {
            state.movieTrailer = action.payload;
        }
    }
});

export const {addNowPlaying, addMovieTrailer} = movieSlice.actions;

export default movieSlice.reducer;