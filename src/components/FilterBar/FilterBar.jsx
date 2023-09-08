import { useDispatch, useSelector } from "react-redux";

import { filterAdverts } from "../../redux/filterSlice/filterSlice";

import { useFormik } from "formik";
import { selectAdverts } from "../../redux/selectors";

export const FilterBar = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  console.log(adverts);

  const brands = [...new Set(adverts?.map((advert) => advert.make))];
  console.log("brands", brands);

  const allPrices = adverts?.map((advert) => {
    const price = advert.rentalPrice;
    return Number(price.slice(1, price.length));
  });
  const maxPrice = allPrices ? Math.max(...allPrices) : null;
  console.log("maxPrice", maxPrice);

  const prices = Array.from({ length: Math.ceil(maxPrice / 10) }, (_, index) => (index + 1) * 10);

  const formik = useFormik({
    initialValues: {
      brand: "",
      price: "",
      from: "",
      to: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(filterAdverts(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <span>Car brand</span>
        <select name="brand" id="brand" onChange={formik.handleChange} value={formik.values.brand}>
          {/* <option value="" disabled defaultValue hidden>
            Enter the text
          </option> */}
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div>
        <span>Price/1 hour</span>
        <label htmlFor="price">To $</label>
        <select name="price" id="price" onChange={formik.handleChange} value={formik.values.price}>
          {/* <option value="" disabled defaultValue hidden>
            To $
          </option> */}
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>
      <div>
        <span>Car milleage/km</span>
        <label htmlFor="from">From</label>
        <input name="from" id="from" type="text" onChange={formik.handleChange} value={formik.values.from} />
        <label htmlFor="to">To</label>
        <input name="to" id="to" type="text" onChange={formik.handleChange} value={formik.values.to} />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};
