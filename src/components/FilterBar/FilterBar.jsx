import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { filterAdverts } from "../../redux/filterSlice/filterSlice";

import { useFormik } from "formik";

export const FilterBar = ({ brands, maxPrice }) => {
  const dispatch = useDispatch();

  console.log(brands);

  const prices = Array.from({ length: Math.ceil(maxPrice / 10) }, (_, index) => (index + 1) * 10);

  const formik = useFormik({
    initialValues: {
      brand: "",
      price: "",
      from: "",
      to: "",
    },
    onSubmit: (values) => {
      dispatch(filterAdverts(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <select name="brand">
        <option value="" disabled selected hidden>
          Enter the text
        </option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      <select name="price">
        <option value="" disabled selected hidden>
          To $
        </option>
        {prices.map((price) => (
          <option key={price} value={price}>
            {price}
          </option>
        ))}
        {}
      </select>
    </form>
  );
};

FilterBar.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.string.isRequired),
  maxPrice: PropTypes.number.isRequired,
};
// const options = brands.map((brand) => {
//   return { value: brand, label: brand };
// });
// console.log(options);
