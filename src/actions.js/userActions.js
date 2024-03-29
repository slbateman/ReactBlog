import * as api from "../api/userAPI.js";
import { updateUserInfo } from "../store/Reducer.js";
import { allUsers, addUser, editUser, removeUser } from "../store/userSlice.js";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.readUsers();
    console.log(data);
    dispatch(allUsers(data));
  } catch (error) {
    console.log(error);
  }
};

export const postUser = (newUser) => async (dispatch) => {
  try {
    const { data } = await api.createUser(newUser);
    dispatch(addUser(data));
    dispatch(updateUserInfo({ user_ID: data._id, loggedIn: true }));
  } catch (error) {
    console.log(error);
  }
};

export const patchUser = (id, updatedUser) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, updatedUser);
    dispatch(editUser(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteUser(id);
    dispatch(removeUser(data));
  } catch (error) {
    console.log(error);
  }
};
