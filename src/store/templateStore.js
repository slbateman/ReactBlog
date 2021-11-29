import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from '../todoList/todoListSlice';

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});