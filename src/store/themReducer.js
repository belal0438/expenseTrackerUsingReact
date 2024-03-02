import { createSlice } from "@reduxjs/toolkit";

const initialThenState = {
  isDarkThem: false,
};

const themSlice = createSlice({
  name: "them",
  initialState: initialThenState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkThem = !state.isDarkThem;
    },
  },
});

export const themAction = themSlice.actions;
export default themSlice.reducer;
