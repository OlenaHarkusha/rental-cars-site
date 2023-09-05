import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.favorites = state.favorites.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((fav) => fav.id === action.payload.id);
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
