import { Products } from "@/lib/types";
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
export const createSession = createAsyncThunk(
  "globalState/createSession",
  async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CREATE_SESSION_URL}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const session = await response.text();

        return session;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchProducts = createAsyncThunk(
  "globalState/fetchProducts",
  async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LIST_PRODUCTS_URL}`
      );
      if (response.status !== 200) {
        throw new Error("Failed to fetch products");
      }
      if (response.ok) {
        const products = await response.json();
        return products;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const globalSlice = createSlice({
  initialState,
  name: "globalState",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSession.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSession.fulfilled, (state, action) => {
        state.session = action.payload!;
      })
      .addCase(createSession.rejected, (state, action) => {
        state.error = action.error.message!;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload!;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message!;
      });
  },
});

export default globalSlice.reducer;

export const getSession = (state: { globalState: GlobalState }) =>
  state.globalState.session;
export const getProducts = (state: { globalState: GlobalState }) =>
  state.globalState.products;
export const getLoading = (state: { globalState: GlobalState }) =>
  state.globalState.isLoading;
