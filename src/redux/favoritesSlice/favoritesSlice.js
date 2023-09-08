import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite(state, action) {
      const isInFavorites = state.favorites.findIndex((fav) => fav.id === action.payload.id);
      if (isInFavorites === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter((fav) => fav.id !== action.payload.id);
      }
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((fav) => fav.id === action.payload.id);
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
