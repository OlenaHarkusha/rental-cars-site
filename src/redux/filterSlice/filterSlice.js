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
      state.from = action.payload.from;
      state.to = action.payload.to;
      // },
      // filterPrice(state, action) {
      //   state.price = action.payload;
      // },
      // filterMilleageFrom(state, action) {
      //   state.from = action.payload;
      // },
      // filterMilleageTo(state, action) {
      //   state.to = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filterAdverts } = filterSlice.actions;
