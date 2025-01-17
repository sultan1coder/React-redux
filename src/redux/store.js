import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';
import { postsSlice } from './slices/postsSlice';
import { commentsSLice } from './slices/commentsSlice';

const store = configureStore({
  reducer: {
    myTodos: todoSlice.reducer,
    myPosts: postsSlice.reducer,
    myComments: commentsSLice.reducer
  }
});

export default store;