import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

export const productCardSlice = createSlice({
  name: "add-to-card",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const item = action.payload;

      for (let i = 0; i < state.cartItem.length; i++) {
        if (item.id === state.cartItem[i].id) {
          state.cartItem[i].count++;
          return;
        }
      }

      state.cartItem.push({ ...item, count: 1 });
    },
    deleteProduct: (state, action) => {
      let index = state.cartItem.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.cartItem.splice(index, 1);
    },
    incrementProduct: (state, action) => {
      // const getData = state.cartItem.map((current) => {
      //   if (current.id === action.payload.id) {
      //     current.quantity += 1;
      //     const price = current.productPrice;
      //     current.subtotal = price * current.quantity;
      //   }
      // });

      const index = action.payload;
      console.log(index);
      state.cartItem[index].count++;
    },
    decrementProduct: (state, action) => {
      // const getData = state.cartItem.map((current) => {
      //   if (current.id === action.payload.id && current.quantity > 1) {
      //     current.quantity -= 1;
      //     const price = current.productPrice;
      //     current.subtotal = price * current.quantity;
      //   }
      // });
      const index = action.payload;
      if (state.cartItem[index].count > 1) {
        state.cartItem[index].count--;
      }
      },
  },
});

export const { addProduct, deleteProduct, incrementProduct, decrementProduct } =
  productCardSlice.actions;
export default productCardSlice.reducer;
