import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const sliceProducts = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      return action.payload;
    },
  },
});

export const { setProducts } = sliceProducts.actions;
export default sliceProducts.reducer;
