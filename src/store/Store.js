import { configureStore } from "@reduxjs/toolkit";
import  productFormSlice  from "./ProductFormSlice";
import ProductCardSlice from "./CardPageSlice";

export const store = configureStore({
  reducer: {
    product: productFormSlice,
    cardProduct: ProductCardSlice
  },
});
