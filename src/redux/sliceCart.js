import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const sliceCart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    updateCart(cartProducts, action) {
      const product = action.payload;
      const productIndex = cartProducts.findIndex((p) => {
        return p.id === product.id;
      });

      if (productIndex === -1) {
        cartProducts.push(product);
      } else {
        cartProducts[productIndex] = product;
      }
    },
    removeCart(cartProducts, action) {
      return cartProducts.filter((p) => p.id !== action.payload);
    },
  },
});

export const { updateCart, removeCart } = sliceCart.actions;
export default sliceCart.reducer;
