import { Products } from "@/app/lib/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface GlobalState {
  isLoading: boolean;
  error: string | null;
  session: string | null;
  products: Products[];
}
const initialState: GlobalState = {
  error: null,
  isLoading: false,
  session: null,
  products: [],
};

export const globalSlice = createSlice({
  initialState,
  name: "globalState",
  reducers: {},
});

export default globalSlice.reducer;
