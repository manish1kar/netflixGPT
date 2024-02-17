import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
    reducer : {
        user : userReducer,
        movie : movieReducer,
        search : searchReducer,
    }
});

export default appStore;

