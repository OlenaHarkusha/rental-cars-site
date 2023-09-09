// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAdverts } from "../../../redux/catalogSlice/operations";
import { FilterBar } from "../../FilterBar/FilterBar";
import { Container } from "./CatalogPage.styled";
import { Catalog } from "../../Catalog/Catalog";
import { LoadMoreButton } from "../../LoadMoreButton/LoadMoreButton";
import { selectFilteredAverts } from "../../../redux/selectors";

export const CatalogPage = () => {
  // const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const advertsPerPage = 8;
  const adverts = useSelector(selectFilteredAverts);

  const paginatedAdverts = adverts.slice(0, page * advertsPerPage);

  const btnClickHandle = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);

  return (
    <Container>
      <FilterBar />
      <Catalog adverts={paginatedAdverts} />
      {50 / 8 > page && <LoadMoreButton onClick={btnClickHandle} />}
    </Container>
  );
};
