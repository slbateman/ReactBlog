import * as api from "../api/replyAPI.js";
import {
  allReplies,
  addReply,
  editReply,
  removeReply,
} from "../store/replySlice.js";

export const getReplies = () => async (dispatch) => {
  try {
    const { data } = await api.readReplies();
    dispatch(allReplies(data));
  } catch (error) {
    console.log(error);
  }
};

export const postReply = (newReply) => async (dispatch) => {
  try {
    const { data } = await api.createReply(newReply);
    dispatch(addReply(data));
  } catch (error) {
    console.log(error);
  }
};

export const patchReply = (id, updatedReply) => async (dispatch) => {
  try {
    const { data } = await api.updateReply(id, updatedReply);
    dispatch(editReply(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteReply = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteReply(id);
    dispatch(removeReply(data));
  } catch (error) {
    console.log(error);
  }
};
