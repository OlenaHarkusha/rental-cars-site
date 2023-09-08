import { useDispatch } from "react-redux";
import { ReactComponent as IconNormal } from "../../Images/normal.svg";
import PropTypes from "prop-types";
import { addFavorite } from "../../redux/favoritesSlice/favoritesSlice";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const CatalogItem = ({ advert }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { img, description, make, year, model, rentalPrice, address, rentalCompany, type, mileage, functionalities } = advert;
  // eslint-disable-next-line react/prop-types
  const data = address.split(",");
  const city = data[1];
  const country = data[2];

  const favBtnClickHandle = () => {
    dispatch(addFavorite(advert));
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <li>
      <img src={img} alt={description} />
      <button type="button" onClick={favBtnClickHandle}>
        <IconNormal />
      </button>
      <h2>
        {make} {model}, {year}
      </h2>
      <p>{rentalPrice}</p>
      <ul>
        <li>{city}</li>
        <li>{country}</li>
        <li>{rentalCompany}</li>
        <li>{type}</li>
        <li>{model}</li>
        <li>{mileage}</li>
        <li>{functionalities[0]}</li>
      </ul>
      <button type="button" onClick={toggleModal}>
        Learn more
      </button>
      {showModal && <Modal advert={advert} />}
    </li>
  );
};

CatalogItem.propTypes = {
  advert: PropTypes.shape({
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    model: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    functionalities: PropTypes.array.isRequired,
  }),
};
