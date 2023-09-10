// import React from "react";

import { useSelector } from "react-redux";
import { selectFavorites } from "../../../redux/selectors";
import { Catalog } from "../../Catalog/Catalog";
import { Container } from "../CatalogPage/CatalogPage.styled";

export const FavoritesPage = () => {
  const favoriteAdverts = useSelector(selectFavorites);
  return (
    <Container>
      <Catalog adverts={favoriteAdverts} />
    </Container>
  );
};
