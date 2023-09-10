import styled from "styled-components";
import { devices } from "../constants/devices";

export const CatalogContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  margin-top: 50px;
`;

export const CatalogList = styled.ul`
  @media ${devices.md} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 29px;
    grid-row-gap: 50px;

    margin-bottom: 50px;
  }
  @media ${devices.xl} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
