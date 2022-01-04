import { createSlice } from "@reduxjs/toolkit";

const articles = [];

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles,
  },
  reducers: {
    allArticles: (state, action) => {
      state.articles = action.payload;
    },
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },
    editArticle: (state, action) => {
      state.articles.map((article) =>
        article._id === action.payload._id ? action.payload : article
      );
    },
    removeArticle: (state, action) => {
      state.articles.splice(
        state.articles.findIndex((e) => state.articles._id === action.payload),
        1
      );
    },
  },
});

export const { allArticles, addArticle, editArticle, removeArticle } =
  articleSlice.actions;

export const selectArticles = (state) => state.articles.articles;

export default articleSlice.reducer;
