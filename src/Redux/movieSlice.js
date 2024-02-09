import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState : {
        nowPlayingMovies : null,
        movieTrailer : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null
    },
    reducers : {
        addNowPlaying : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer : (state, action) => {
            state.movieTrailer = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload;
        },
        removeNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = null
        },
        removeMovieTrailer : (state, action) => {
            state.movieTrailer = null
        },
        removePopularMovies : (state, action) => {
            state.popularMovies = null
        },
        removeTopRatedMovies : (state, action) => {
            state.topRatedMovies = null
        },
        removeUpcomingMovies : (state, action) => {
            state.upcomingMovies = null
        },
    }
});

export const {
     addNowPlaying,
     addMovieTrailer,
     addPopularMovies,
     addTopRatedMovies,
     addUpcomingMovies,
     removeNowPlayingMovies,
     removeMovieTrailer,
     removePopularMovies,
     removeTopRatedMovies,
     removeUpcomingMovies,
    } = movieSlice.actions;

export default movieSlice.reducer;