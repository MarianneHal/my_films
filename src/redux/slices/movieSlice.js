import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    errors: null,
    loading: null,
    movieDetails: {},
    currentPage: 1

}

const getAll =  createAsyncThunk(
    'movieSlice/getAll',
    async ({page,genre}, thunkApi) => {
        try{
            const {data} = await movieService.getMovies(page, genre);
            return data
        }catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
);

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async ({query, page}, thunkApi) => {
        try{
            const {data} = await movieService.getAll(query, page);
            return data;
        }catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'moviesSlice/getById',
    async ({id}, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.loading = false;
                state.currentPage = action.payload.page;
            })
            .addCase(getAll.rejected, (state, action) =>{
                state.errors = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state,action) => {
                state.loading = true;
            })

});


const {reducer:movieReducer} = movieSlice;

const movieAction = {
    getAll,
    searchMovie,
    getById
}

export {
    movieReducer,
    movieAction
}