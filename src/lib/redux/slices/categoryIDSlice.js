// src/store/categoryIDSlice.js
import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categoryID",
  initialState: {
    categoryId: null, 
  },
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = categorySlice.actions;
export default categorySlice.reducer;
