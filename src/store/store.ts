import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { globalSlice } from "./global-slice";
import { useDispatch } from "react-redux";

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const store = configureStore({
  reducer: {
    globalState: globalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
