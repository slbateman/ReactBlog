import { createStore } from "redux";
import Reducer from "./Reducer";

console.log("--Store--")

const Store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
