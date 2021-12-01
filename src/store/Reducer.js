import { createSlice } from "@reduxjs/toolkit";

import Users from "../data/Users";
import ArticleList from "../data/ArticleList";
import Comments from "../data/Comments";

let userInfo = JSON.parse(localStorage.getItem("userInfo"));
let users = JSON.parse(localStorage.getItem("users"));
let articles = JSON.parse(localStorage.getItem("articles"));
let comments = JSON.parse(localStorage.getItem("comments"));

const initUserInfo = () => {
  if (!userInfo) {
    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        userID: 0,
        loggedIn: false,
      })
    );
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
  }
};

const initUsers = () => {
  if (!users) {
    localStorage.setItem("users", JSON.stringify(Users));
    users = JSON.parse(localStorage.getItem("users"));
  }
};

const initArticles = () => {
  if (!articles) {
    localStorage.setItem("articles", JSON.stringify(ArticleList));
    articles = JSON.parse(localStorage.getItem("articles"));
  }
};

const initComments = () => {
  if (!comments) {
    localStorage.setItem("comments", JSON.stringify(Comments));
    comments = JSON.parse(localStorage.getItem("comments"));
    window.location.replace("/");
  }
};

const init = () => {
  initUserInfo();
  initUsers();
  initArticles();
  initComments();
};

init();

let indexStates = {
  userIndex: users.findIndex((element) => element.userID === userInfo.userID),
  authorIndex: 0,
  articleIndex: 0,
  commentIndex: 0,
  replyIndex: 0,
};
if (users.findIndex((element) => element.userID === userInfo.userID) === -1) {
  indexStates.userIndex = 0;
}

export const dataListSlice = createSlice({
  name: "dataList",
  initialState: {
    userInfo,
    users,
    articles,
    comments,
    indexStates,
  },
  reducers: {
    updateUserInfo: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    updateUsers: (state, action) => {
      const index = state.users.findIndex(
        (e) => e.userID === action.payload.userID
      );
      state.users[index] = action.payload
      localStorage.setItem("users", JSON.stringify(state.users))
    },
    updateArticles: (state, action) => {
      state.articles = [action.payload, ...state.articles];
      localStorage.setItem("articles", JSON.stringify(state.articles));
    },
    updateComments: (state, action) => {
      state.comments = [...state.comments, action.payload];
      localStorage.setItem("comments", JSON.stringify(state.comments));
    },
    updateReplies: (state, action) => {
      state.comments[action.payload.commentIndex].reply.push(
        action.payload.reply
      );
      localStorage.setItem("comments", JSON.stringify(state.comments));
    },
    updateUserIndex: (state, action) => {
      state.indexStates.userIndex = action.payload;
    },
    updateAuthorIndex: (state, action) => {
      if (action.payload === -1) {
        state.indexStates.authorIndex = 0;
      } else {
        state.indexStates.authorIndex = action.payload;
      }
    },
    updateArticleIndex: (state, action) => {
      if (action.payload === -1) {
        state.indexStates.articleIndex = 0;
      } else {
        state.indexStates.articleIndex = action.payload;
      }
    },
    updateCommentIndex: (state, action) => {
      state.indexStates.commentIndex = action.payload;
    },
    updateReplyIndex: (state, action) => {
      state.indexStates.replyIndex = action.payload;
    },
  },
});

export const {
  updateUserInfo,
  addUser,
  updateUsers,
  updateArticles,
  updateComments,
  updateReplies,
  updateUserIndex,
  updateAuthorIndex,
  updateArticleIndex,
  updateCommentIndex,
  updateReplyIndex,
} = dataListSlice.actions;

export const selectUserInfo = (state) => state.dataList.userInfo;
export const selectUsers = (state) => state.dataList.users;
export const selectArticles = (state) => state.dataList.articles;
export const selectComments = (state) => state.dataList.comments;
export const selectIndexStates = (state) => state.dataList.indexStates;

export default dataListSlice.reducer;
