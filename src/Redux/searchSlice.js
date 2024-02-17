import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {
        isSearchTab : false,
    },
    reducers : {
        toggleSeachTab : (state) => {
            state.isSearchTab = !state.isSearchTab;
        }
    }
});

export const {toggleSeachTab} = searchSlice.actions;

export default searchSlice.reducer;