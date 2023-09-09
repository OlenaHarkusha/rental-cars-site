import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    adverts: [],
    fetchedPage: 0,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adverts = [...state.adverts, ...action.payload.data];
        state.error = null;
        state.fetchedPage = action.payload.page;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
