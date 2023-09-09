import { CatalogItem } from "../CatalogItem/CatalogItem";
import PropTypes from "prop-types";
import { CatalogContainer, CatalogList } from "./Catalog.styled";

export const Catalog = ({ adverts }) => {
  return (
    <CatalogContainer>
      <CatalogList>
        {adverts.map((advert) => (
          <CatalogItem key={advert.id} advert={advert} />
        ))}
      </CatalogList>
    </CatalogContainer>
  );
};

Catalog.propTypes = {
  adverts: PropTypes.array,
};
