import { configureStore } from "@reduxjs/toolkit"
import dataListReducer from "./Reducer";

const Store = configureStore({
  reducer: {
    dataList: dataListReducer,
  },
});

export default Store