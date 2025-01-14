import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice({
    name: "config",
    initialState: {
        configLanguage: "en"
    },
    reducers: {
        changeConfigLanguage: (state, action) => {
            state.configLanguage = action.payload;
        }
    }
});

export const {changeConfigLanguage} = configSlice.actions;

export default configSlice.reducer;