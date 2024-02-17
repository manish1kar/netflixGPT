import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState : {
        nowPlayingMovies : null,
        movieTrailer : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null,
        searchedMovies : null,
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
        addSearchMovies : (state, action) => {
            state.searchedMovies = action.payload;        },
        removeMovieData : (state) => {
            state = null
        },

    }
});

export const {
     addNowPlaying,
     addMovieTrailer,
     addPopularMovies,
     addTopRatedMovies,
     addUpcomingMovies,
     addSearchMovies,
     removeMovieData,
    } = movieSlice.actions;

export default movieSlice.reducer;