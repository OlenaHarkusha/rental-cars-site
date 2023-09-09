import { createPortal } from "react-dom";
import { AccentWrap, Backdrop, CloseModalIcon, Condition, ConditionsList, Description, DescriptionList, Image, ModalWindow, RentalButton, Subtitle, Title } from "./Modal.styled";
import { useEffect } from "react";

export const Modal = ({ advert, showModal, toggleModal }) => {
  const modalRoot = document.querySelector("#modal-root");
  const { img, make, model, description, address, mileage, year, type, fuelConsumption, engineSize, accessories, functionalities, rentalConditions, rentalPrice } = advert;
  const data = address.split(",");
  const city = data[1];
  const country = data[2];

  const conditions = rentalConditions.split("\n");

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal, toggleModal]);

  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };
  return createPortal(
    <Backdrop onClick={handleOverlayClick}>
      <ModalWindow>
        <CloseModalIcon onClick={toggleModal} />
        <Image src={img} alt={description} />
        <Title>
          {make} <AccentWrap>{model}</AccentWrap>, {year}
        </Title>
        <DescriptionList>
          <li>{city}</li>
          <li>{country}</li>
          <li>Mileage: {mileage}</li>
          <li>Year: {year}</li>
          <li>Type: {type}</li>
          <li>Fuel consumption: {fuelConsumption}</li>
          <li>Engine Size: {engineSize}</li>
        </DescriptionList>
        <Description>{description}</Description>
        <Subtitle>Accessories and functionalities:</Subtitle>
        <DescriptionList>
          {accessories.map((accessory) => (
            <li key={accessory}>{accessory}</li>
          ))}
          {functionalities.map((functionality) => (
            <li key={functionality}>{functionality}</li>
          ))}
        </DescriptionList>
        <Subtitle>Rental Conditions:</Subtitle>
        <ConditionsList>
          {conditions.map((condition) => (
            <Condition key={condition}>{condition}</Condition>
          ))}
          <Condition>
            Mileage: <AccentWrap>{mileage}</AccentWrap>
          </Condition>
          <Condition>
            Price: <AccentWrap>{rentalPrice}</AccentWrap>
          </Condition>
        </ConditionsList>
        <RentalButton href="tel:+380730000000">Rental car</RentalButton>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};
