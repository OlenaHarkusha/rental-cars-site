import { createPortal } from "react-dom";
import { ReactComponent as CloseIcon } from "../../Images/x.svg";

export const Modal = ({ advert }) => {
  const modalRoot = document.querySelector("#modal-root");
  const { img, make, model, description, address, mileage, year, type, fuelConsumption, engineSize, accessories, functionalities, rentalConditions, rentalPrice } = advert;
  const data = address.split(",");
  const city = data[1];
  const country = data[2];

  const conditions = rentalConditions.split("\n");

  return createPortal(
    <div>
      <div>
        <CloseIcon />
        <img src={img} alt={description} />
        <h2>
          {make} {model}, {year}
        </h2>
        <ul>
          <li>{city}</li>
          <li>{country}</li>
          <li>Mileage: {mileage}</li>
          <li>Year: {year}</li>
          <li>Type: {type}</li>
          <li>Fuel consumption: {fuelConsumption}</li>
          <li>Engine Size: {engineSize}</li>
        </ul>
        <p>{description}</p>
        <h3>Accessories and functionalities:</h3>
        <ul>
          {accessories.map((accessory) => (
            <li key={accessory}>{accessory}</li>
          ))}
          {functionalities.map((functionality) => (
            <li key={functionality}>{functionality}</li>
          ))}
        </ul>
        <h3>Rental Conditions:</h3>
        <ul>
          {conditions.map((condition) => (
            <li key={condition}>{condition}</li>
          ))}
          <li>Mileage: {mileage}</li>
          <li>Price: {rentalPrice}</li>
        </ul>
        <a href="tel:+380730000000">Rental car</a>
      </div>
    </div>,
    modalRoot
  );
};
