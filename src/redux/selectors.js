import { createSelector } from "@reduxjs/toolkit";

export const selectAdverts = (state) => state.catalog.adverts;
export const selectIsLoading = (state) => state.catalog.isLoading;
export const selectError = (state) => state.catalog.error;
export const selectfetchedPage = (state) => state.catalog.fetchedPage;

export const selectFavorites = (state) => state.favorites.favorites;

export const selectFilter = (state) => state.filter;

export const selectFilteredAverts = createSelector([selectAdverts, selectFilter], (adverts, filter) => {
  const { brand, price, from, to } = filter;

  let filteredAdverts = adverts;

  if (brand !== "") {
    filteredAdverts = filteredAdverts.filter((advert) => advert.make === brand);
  }

  if (price !== "") {
    filteredAdverts = filteredAdverts.filter((advert) => {
      const { rentalPrice } = advert;
      const normalizedPrice = rentalPrice.slice(1, rentalPrice.length);
      return normalizedPrice <= price;
    });
  }

  if (from !== 0 && from !== "") {
    filteredAdverts = filteredAdverts.filter((advert) => advert.mileage >= from);
  }

  if (to !== 0 && to !== "") {
    filteredAdverts = filteredAdverts.filter((advert) => advert.mileage <= to);
  }
  return filteredAdverts;
});
