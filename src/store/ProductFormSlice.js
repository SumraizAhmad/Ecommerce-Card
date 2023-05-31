import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const productFormSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    addUser: (state, action) => {
     state.push(action.payload);
    },
  },
});


export const { addUser } = productFormSlice.actions;
export default productFormSlice.reducer;
