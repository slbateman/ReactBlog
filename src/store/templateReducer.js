import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {
        todoList: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
            console.log(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todoList.splice(action.payload, 1);
        },
    },
});

export const { addTodo, deleteTodo } = todoListSlice.actions;

export const selectTodoList = (state) => state.todoList.todoList;

export default todoListSlice.reducer;