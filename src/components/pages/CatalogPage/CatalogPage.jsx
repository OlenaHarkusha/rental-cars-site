// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { selectAdverts } from "../../../redux/selectors";
import { useEffect } from "react";
import { fetchAdverts } from "../../../redux/catalogSlice/operations";
import { FilterBar } from "../../FilterBar/FilterBar";
import { Container } from "./CatalogPage.styled";

export const CatalogPage = () => {
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  console.log("adverts", adverts);

  const brands = [...new Set(adverts.map((advert) => advert.make))];
  const prices = adverts.map((advert) => {
    const price = advert.rentalPrice;
    return Number(price.slice(1, price.length));
  });
  const maxPrice = Math.max(...prices);
  console.log(maxPrice);

  return (
    <Container>
      <FilterBar brands={brands} maxPrice={maxPrice} />
    </Container>
  );
};
