import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");
const userIsLoggedIn = !!token;
const initialAuthState = {
  token: token || "",
  isLoggedIn: userIsLoggedIn,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    loggin: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.token = "";
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
