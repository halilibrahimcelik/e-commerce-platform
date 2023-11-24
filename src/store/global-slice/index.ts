import { CartQuantity, CartValue, Products, SessionId } from "@/lib/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface GlobalState {
  isLoading: boolean;
  error: string | null;
  session: string | null;
  products: Products[];
  defaultProducts: Products[];
  cartQuantity: CartQuantity[];

  isSearched: boolean;
}

const initialState: GlobalState = {
  error: null,
  isLoading: false,
  session: null,
  products: [],
  defaultProducts: [],
  isSearched: false,
  cartQuantity: [],
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

export const addProductToCart = createAsyncThunk(
  "globalState/addProductToCart",
  async (value: CartValue) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_ADD_TO_CART_URL}${value.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Session-ID": value.sessionId,
          },
        }
      );
      if (response.status !== 200) {
        throw new Error("Failed to add product to cart");
      }
      if (response.ok) {
        const outcome = await response.text();
        console.log(outcome);
        return outcome;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const extractProductFromCart = createAsyncThunk(
  "globalState/addProductToCart",
  async (value: CartValue) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUBTRACT_FROM_CART_URL}${value.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Session-ID": value.sessionId,
          },
        }
      );
      if (response.status !== 200) {
        throw new Error("Failed to remove product from cart");
      }
      if (response.ok) {
        const outcome = await response.text();
        console.log(outcome);
        return outcome;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const CartQuantityList = createAsyncThunk(
  "globalState/CartQuantity",
  async ({ sessionId: sessionId }: SessionId) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_VIEW_CART_URL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "SESSION-ID": sessionId,
        },
      });

      if (response.status !== 200) {
        throw new Error("Failed to fetch Cart List");
      }

      if (response.ok) {
        const cartQuantity = await response.json();
        return cartQuantity;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const globalSlice = createSlice({
  initialState,
  name: "globalState",
  reducers: {
    searchedProduct: (state, action) => {
      const { searchedProduct } = action.payload;
      const filteredProducts = state.defaultProducts.filter((product) =>
        product.name
          .toLowerCase()
          .trim()
          .includes(searchedProduct.toLowerCase().trim())
      );
      state.products = filteredProducts;
      state.isSearched = true;
    },
    resetProducts: (state, action) => {
      const { products } = action.payload;
      state.products = products;
      state.isSearched = false;
    },
    productQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.cartQuantity.find(
        (product) => product.productId === id
      );
      if (product) {
        product.quantity = quantity;
      }
    },
  },

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
        state.defaultProducts = action.payload!;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message!;
      })
      .addCase(CartQuantityList.fulfilled, (state, action) => {
        state.cartQuantity = action.payload!;
      });
  },
});

export const { searchedProduct, resetProducts } = globalSlice.actions;
export default globalSlice.reducer;

export const getSession = (state: { globalState: GlobalState }) =>
  state.globalState.session;
export const getProducts = (state: { globalState: GlobalState }) =>
  state.globalState.products;
export const getLoading = (state: { globalState: GlobalState }) =>
  state.globalState.isLoading;
export const getDefaultProducts = (state: { globalState: GlobalState }) =>
  state.globalState.defaultProducts;
export const getIsSearched = (state: { globalState: GlobalState }) => {
  return state.globalState.isSearched;
};
export const getCartQuantity = (state: { globalState: GlobalState }) =>
  state.globalState.cartQuantity;

export const getSingleProductQuantity = (
  state: { globalState: GlobalState },
  id: string
) => {
  const quantity = state.globalState.cartQuantity?.find(
    (item) => item.productId === id
  );
  return quantity?.quantity;
};
