import { createSlice } from "@reduxjs/toolkit";

const initialExpensState = {
  price: 0,
  showPremiunBtn: false,
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState: initialExpensState,
  reducers: {
    addPrice: (state, action) => {
      state.price = state.price + Number(action.payload);
      if (state.price >= 1000) {
        state.showPremiunBtn = true;
      }
    },
  },
});

export const expensePriceAction = expenseSlice.actions;

export default expenseSlice.reducer;
