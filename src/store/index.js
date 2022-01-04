import { configureStore } from "@reduxjs/toolkit"
import dataListReducer from "./Reducer";
import articlesReducer from "./articleSlice"
import commentReducer from "./commentSlice";
import userReducer from "./userSlice";
import replySlice from "./replySlice";

const Store = configureStore({
  reducer: {
    dataList: dataListReducer,
    articles: articlesReducer,
    comments: commentReducer,
    replies: replySlice,
    users: userReducer
  },
});

export default Store