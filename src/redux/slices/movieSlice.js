import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    errors: null,
    loading: null,
    movieDetails: {},
    genres:[],
    currentPage: 1

}

const getAll =  createAsyncThunk(
    'movieSlice/getAll',
    async (_, thunkApi) => {
        try{
            const {data} = await movieService.getAll(1);
            return data.results
        }catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
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
                state.movies = action.payload
                state.loading = false;
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
    getAll
}

export {
    movieReducer,
    movieAction
}