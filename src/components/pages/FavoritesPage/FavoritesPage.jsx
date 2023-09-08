// import React from "react";

import { useSelector } from "react-redux";
import { selectFavorites } from "../../../redux/selectors";
import { Catalog } from "../../Catalog/Catalog";

export const FavoritesPage = () => {
  const favoriteAdverts = useSelector(selectFavorites);
  return <Catalog adverts={favoriteAdverts} />;
};
