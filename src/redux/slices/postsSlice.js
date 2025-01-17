import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  loading: false,
  error: ''
};

// GET THE DATA FROM THE API
export const getPosts = createAsyncThunk(
  'posts/list',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.message || 'Please check your internet connection!'
      );
    }
  }
);

export const postsSlice = createSlice({
  name: 'posts slice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.posts = [];
    });

    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.error = '';
      state.loading = false;
    });

    builder.addCase(getPosts.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.posts = [];
    });
  }
});