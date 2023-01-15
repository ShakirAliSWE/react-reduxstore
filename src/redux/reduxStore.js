import { configureStore } from "@reduxjs/toolkit";
import sliceCart from "./sliceCart";
import sliceCategory from "./sliceCategory";
import sliceProducts from "./sliceProducts";

const reduxStore = configureStore({
  reducer: {
    cart: sliceCart,
    categories: sliceCategory,
    products: sliceProducts,
  },
});

export default reduxStore;
