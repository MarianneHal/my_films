import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genre: []
}


const getGenres = createAsyncThunk(
    'genreSlice/getGenres',
    async (_, thunkApi) => {
    try{
        const {data} = await genreService.getGenres();
        return data;
    }catch (e) {
        return thunkApi.rejectedWithValue(e.response.data)
    }
});

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
});

const {reducer:genreReducer, action} = genreSlice;

const genreAction = {
    getGenres
};

export {
    genreAction,
    genreReducer
}