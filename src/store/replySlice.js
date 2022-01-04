import { createSlice } from "@reduxjs/toolkit";

const replies = [];

const replySlice = createSlice({
  name: "replies",
  initialState: {
    replies,
  },
  reducers: {
    allReplies: (state, action) => {
      state.replies = action.payload;
    },
    addReply: (state, action) => {
      state.replies.push(action.payload);
    },
    editReply: (state, action) => {
      state.replies.map((reply) =>
      reply._id === action.payload._id ? action.payload : reply
      );
    },
    removeReply: (state, action) => {
      state.replies.splice(
        state.replies.findIndex((e) => state.replies._id === action.payload),
        1
      );
    },
  },
});

export const { allReplies, addReply, editReply, removeReply } =
replySlice.actions;

export const selectReplies = (state) => state.replies.replies;

export default replySlice.reducer;
