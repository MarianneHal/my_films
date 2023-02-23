import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    genres: []
};

const getGenres = createAsyncThunk(
    'genreSlice/getAll',
    async (_,thunkApi) => {
        try {
            const {data} = await movieService.getGenre()
            return data
        }catch (e){
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
    });

const {reducer: genreReducer, actions} = genreSlice;

const genreAction = {
     getGenres
}

export {
    genreReducer,
    genreAction
}