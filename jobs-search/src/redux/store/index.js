import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "../reducers";

configureStore({
  reducer: MainReducer,
});

export default store;
