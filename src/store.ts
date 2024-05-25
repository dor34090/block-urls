import { configureStore } from "@reduxjs/toolkit";
import linkReducer from "./reducers/linkReducer";

const store = configureStore({
  reducer: linkReducer,
});

export default store;
