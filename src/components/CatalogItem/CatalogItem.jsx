import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as IconNormal } from "../../Images/normal.svg";
import { ReactComponent as IconActive } from "../../Images/active.svg";

import PropTypes from "prop-types";
import { addFavorite } from "../../redux/favoritesSlice/favoritesSlice";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { selectFavorites } from "../../redux/selectors";
import { Button, CatalogImage, DescriptionList, FavButton, Item, ModelWrap, Title, TitleWrapper } from "./CatalogItem.styled";

export const CatalogItem = ({ advert }) => {
  const { id, img, description, make, year, model, rentalPrice, address, rentalCompany, type, mileage, functionalities } = advert;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((favorite) => favorite.id === id);
  const [showModal, setShowModal] = useState(false);
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
    <Item>
      <CatalogImage src={img} alt={description} />
      <FavButton type="button" onClick={favBtnClickHandle}>
        {isFavorite ? <IconActive /> : <IconNormal />}
      </FavButton>
      <TitleWrapper>
        <Title>
          {make}
          <ModelWrap> {model}</ModelWrap>, {year}
        </Title>
        <p>{rentalPrice}</p>
      </TitleWrapper>
      <DescriptionList>
        <li>{city}</li>
        <li>{country}</li>
        <li>{rentalCompany}</li>
        <li>{type}</li>
        <li>{model}</li>
        <li>{mileage}</li>
        <li>{functionalities[0]}</li>
      </DescriptionList>
      <Button type="button" onClick={toggleModal}>
        Learn more
      </Button>
      {showModal && <Modal advert={advert} showModal={showModal} toggleModal={toggleModal} />}
    </Item>
  );
};

CatalogItem.propTypes = {
  advert: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
