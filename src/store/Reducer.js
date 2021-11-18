import ArticleList from "../data/ArticleList";
import AuthorBios from "../data/AuthorBios";
import Comments from "../data/Comments";
import Users from "../data/Users";

console.log("--Reducer--");

let userInfo = JSON.parse(localStorage.getItem("userInfo"));
let authors = JSON.parse(localStorage.getItem("authors"));
let users = JSON.parse(localStorage.getItem("users"));
let blogs = JSON.parse(localStorage.getItem("blogs"));
let comments = JSON.parse(localStorage.getItem("comments"));

const initUserInfo = () => {
  if (!userInfo) {
    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        userID: "",
        loggedIn: false,
      })
    );
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
  }
};

const initAuthors = () => {
  if (!authors) {
    localStorage.setItem("authors", JSON.stringify(AuthorBios));
    authors = JSON.parse(localStorage.getItem("authors"));
  }
};

const initUsers = () => {
  if (!users) {
    localStorage.setItem("user", JSON.stringify(Users));
    users = JSON.parse(localStorage.getItem("users"));
  }
};

const initBlogs = () => {
  if (!blogs) {
    localStorage.setItem("blogs", JSON.stringify(ArticleList));
    blogs = JSON.parse(localStorage.getItem("blogs"));
  }
};

const initComments = () => {
  if (!comments) {
    localStorage.setItem("comments", JSON.stringify(Comments));
    comments = JSON.parse(localStorage.getItem("comments"));
  }
};

const init = () => {
  initUserInfo();
  initAuthors();
  initUsers();
  initBlogs();
  initComments();
};

init();

const defaultState = {
  userInfo: userInfo,
  authors: authors,
  users: users,
  blogs: blogs,
  comments: comments,
};

const Reducer = (state = defaultState, action) => {
  return state;
};

export default Reducer;
