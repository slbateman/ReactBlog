import * as api from "../api/articleAPI.js";
import {
  allArticles,
  addArticle,
  editArticle,
  removeArticle,
} from "../store/articleSlice.js";

export const getArticles = () => async (dispatch) => {
  try {
    const { data } = await api.readArticles();
    dispatch(allArticles(data));
  } catch (error) {
    console.log(error);
  }
};

export const postArticle = (newArticle) => async (dispatch) => {
  try {
    const { data } = await api.createArticle(newArticle);
    dispatch(addArticle(data));
  } catch (error) {
    console.log(error);
  }
};

export const patchArticle = (id, updatedArticle) => async (dispatch) => {
  try {
    const { data } = await api.updateArticle(id, updatedArticle);
    dispatch(editArticle(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteArticle = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteArticle(id);
    dispatch(removeArticle(data));
  } catch (error) {
    console.log(error);
  }
};
