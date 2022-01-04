import * as api from "../api/commentAPI.js";
import {
  allComments,
  addComment,
  editComment,
  removeComment,
} from "../store/commentSlice.js";

export const getComments = () => async (dispatch) => {
  try {
    const { data } = await api.readComments();
    dispatch(allComments(data));
  } catch (error) {
    console.log(error);
  }
};

export const postComment = (newComment) => async (dispatch) => {
  try {
    const { data } = await api.createComment(newComment);
    dispatch(addComment(data));
  } catch (error) {
    console.log(error);
  }
};

export const patchComment = (id, updatedComment) => async (dispatch) => {
  try {
    const { data } = await api.updateComment(id, updatedComment);
    dispatch(editComment(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteComment(id);
    dispatch(removeComment(data));
  } catch (error) {
    console.log(error);
  }
};
