import { configureStore } from "@reduxjs/toolkit";
import  appSlice from "../util/Slice/appSlice";

const store = configureStore({
  reducer: {
   app:appSlice
  },
});

export default store;
