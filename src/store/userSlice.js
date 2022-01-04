import { createSlice } from "@reduxjs/toolkit";

const users = [];

const userSlice = createSlice({
  name: "users",
  initialState: {
    users,
  },
  reducers: {
    allUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    editUser: (state, action) => {
      state.users.map((user) =>
      user._id === action.payload._id ? action.payload : user
      );
    },
    removeUser: (state, action) => {
      state.users.splice(
        state.users.findIndex((e) => state.users._id === action.payload),
        1
      );
    },
  },
});

export const { allUsers, addUser, editUser, removeUser } =
userSlice.actions;

export const selectUsers = (state) => state.users.users;

export default userSlice.reducer;
