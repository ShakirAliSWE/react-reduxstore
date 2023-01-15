import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const sliceCategory = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    setCategory(state, action) {
      return action.payload;
    },
  },
});

export const { setCategory } = sliceCategory.actions;
export default sliceCategory.reducer;
