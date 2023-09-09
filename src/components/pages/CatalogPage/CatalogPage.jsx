// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAdverts } from "../../../redux/catalogSlice/operations";
import { FilterBar } from "../../FilterBar/FilterBar";
import { Container } from "./CatalogPage.styled";
import { Catalog } from "../../Catalog/Catalog";
import { LoadMoreButton } from "../../LoadMoreButton/LoadMoreButton";
import { selectAdverts, selectfetchedPage } from "../../../redux/selectors";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const adverts = useSelector(selectAdverts);
  const fetchedPage = useSelector(selectfetchedPage);

  // const isLoading = useSelector(selectIsLoading);

  const btnClickHandle = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (fetchedPage < page) {
      dispatch(fetchAdverts(page));
    }
  }, [dispatch, fetchedPage, page]);

  return (
    <Container>
      <FilterBar />
      <Catalog adverts={adverts} />
      {50 / 8 > page && <LoadMoreButton onClick={btnClickHandle} />}
    </Container>
  );
};
