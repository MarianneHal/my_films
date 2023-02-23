import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    errors: null,
    loading: null,
    movieDetails: {},
    currentPages: 1,
    totalPage: 1

}

const getAll =  createAsyncThunk(
    'movieSlice/getAll',
    async ({page,genre}, thunkApi) => {
        try{
            const {data} = await movieService.getAll(page, genre);
            return data
        }catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
);

const search = createAsyncThunk(
    'movieSlice/search',
    async ({query, page}, {rejectWithValue}) => {

        try {
            const {data} = await movieService.searchMovies(query, page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
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
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.loading = false;
                state.errors = null;
                state.currentPage = action.payload.page;
                if (action.payload.total_pages > 500) {
                    state.totalPages = 500;
                } else {
                    state.totalPages = action.payload.total_pages;
                }

            })
            .addCase(getAll.rejected, (state, action) =>{
                state.errors = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state,action) => {
                state.loading = true;
            })
            .addCase(search.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.loading = false;
                state.totalPages = action.payload.total_pages;
                state.currentPage = action.payload.page;

            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movieDetails = action.payload
                state.loading = false;
            })


});


const {reducer:movieReducer, actions:{getMovieDetails}} = movieSlice;

const movieAction = {
    getAll,
    getMovieDetails,
    search,
    getById
}

export {
    movieReducer,
    movieAction
}