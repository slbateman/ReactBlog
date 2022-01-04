import { createSlice } from "@reduxjs/toolkit";

const comments = [];

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments,
  },
  reducers: {
    allComments: (state, action) => {
      state.comments = action.payload;
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    editComment: (state, action) => {
      state.comments.map((comment) =>
      comment._id === action.payload._id ? action.payload : comment
      );
    },
    removeComment: (state, action) => {
      state.comments.splice(
        state.comments.findIndex((e) => state.comments._id === action.payload),
        1
      );
    },
  },
});

export const { allComments, addComment, editComment, removeComment } =
commentSlice.actions;

export const selectComments = (state) => state.comments.comments;

export default commentSlice.reducer;
