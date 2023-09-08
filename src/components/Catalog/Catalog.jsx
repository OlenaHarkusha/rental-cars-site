import { CatalogItem } from "../CatalogItem/CatalogItem";
import PropTypes from "prop-types";

export const Catalog = ({ adverts }) => {
  return (
    <div>
      <ul>
        {adverts.map((advert) => (
          <CatalogItem key={advert.id} advert={advert} />
        ))}
      </ul>
    </div>
  );
};

Catalog.propTypes = {
  adverts: PropTypes.array,
};
