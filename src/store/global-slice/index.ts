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
        `https://linkedin-cv-crawler.beta-limited.workers.dev/interview/createsession`,
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
        state.isLoading = false;
        state.session = action.payload!;
      })
      .addCase(createSession.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message!;
      });
  },
});

export default globalSlice.reducer;

export const getSession = (state: { globalState: GlobalState }) =>
  state.globalState.session;
