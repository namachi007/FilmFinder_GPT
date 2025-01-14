import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import movieReducer from './movieSlice';
import gptSearch from './gptSeach';
import configSlice from './configSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gpt: gptSearch,
        config: configSlice,
    } 
});

export default appStore;