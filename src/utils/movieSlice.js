import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addVideoTrailer: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addVideoTrailer } = movieSlice.actions;

export default movieSlice.reducer;