import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";
import {authReducer} from "./slices/authSlice";


const rootReducer = combineReducers({
    movies: movieReducer,
    genre:genreReducer,
    auth:authReducer
});


const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}
