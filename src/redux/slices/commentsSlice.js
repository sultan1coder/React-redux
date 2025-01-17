/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    comments: []
};


export const getComments = createAsyncThunk("Comments/List", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message || "Please check your Internet connection");
    }
})



export const commentsSLice = createSlice({
    name: "Comments Slice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getComments.pending, (state, action) => {
            state.loading = true;
            state.error = null;
            state.comments = [];
        })
        builder.addCase(getComments.fulfilled, (state, action) => {
            state.loading = false;
            state.comments = action.payload;
            state.error = [];
        })
        builder.addCase(getComments.rejected, (state, action) => {
            state.loading = false;
            state.comments = [];
            state.error = action.payload;
        })
    }
})