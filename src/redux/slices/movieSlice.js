import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    errors: null,
    loading: null,
    movieDetails: {},
    prev: null,
    next: null

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
    async ({query}, {rejectWithValue}) => {

        try {
            const {data} = await movieService.searchMovies(query);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        getMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.loading = false;
                state.errors = null;
                state.prev = action.payload.page +1;
                state.next = action.payload.page -1;
                state.totalPage = action.payload.total_pages;

            })
            .addCase(getAll.rejected, (state, action) =>{
                state.errors = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state,action) => {
                state.loading = true;
            })


});


const {reducer:movieReducer, actions:{getMovieDetails}} = movieSlice;

const movieAction = {
    getAll,
    getMovieDetails,
    search
}

export {
    movieReducer,
    movieAction
}