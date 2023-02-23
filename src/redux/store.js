import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";
import {themeReducer} from "./slices/themeSlice";


const rootReducer = combineReducers({
    movies: movieReducer,
    genre:genreReducer,
    theme: themeReducer
});


const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}
