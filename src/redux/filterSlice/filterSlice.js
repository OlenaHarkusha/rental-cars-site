import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    brand: "",
    price: "",
    from: "",
    to: "",
  },
  reducers: {
    filterAdverts(state, action) {
      state.brand = action.payload.brand;
      state.price = action.payload.price;
      state.from = Number(action.payload.from);
      state.to = Number(action.payload.to);
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filterAdverts } = filterSlice.actions;
