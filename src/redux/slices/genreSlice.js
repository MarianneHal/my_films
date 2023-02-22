import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    genres: []
};

const getAll = createAsyncThunk(
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
            .addCase(getAll.fulfilled, (state, action) => {
                state.genre = action.payload.genres
            })
    });

const {reducer: genreReducer} = genreSlice;

const genreAction = {
     getAll
}

export {
    genreReducer,
    genreAction
}