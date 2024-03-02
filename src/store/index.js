import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import expenseReducer from "./expenseReducer";
import themReducer from "./themReducer";
const store = configureStore({
  reducer: { auth: authReducer, expense: expenseReducer, theme: themReducer },
});

export default store;
