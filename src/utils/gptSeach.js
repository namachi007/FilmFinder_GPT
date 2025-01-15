import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    moviesName: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovies: (state, action) => {
      const {movieNames, tmdbResults} = action.payload
      state.movieResults = tmdbResults;
      state.moviesName = movieNames;
    },
  },
});

export const { toggleGptSearch, addMovies } = gptSearch.actions;

export default gptSearch.reducer;
