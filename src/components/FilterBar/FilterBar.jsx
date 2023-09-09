import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { filterAdverts } from "../../redux/filterSlice/filterSlice";
import { useFormik } from "formik";
import { selectAdverts } from "../../redux/selectors";
import { Button, ExtraWrapper, FilterForm, FormBox, Input, InputLabel, MileageWrapper, SelectBrand, SelectPrice, TextWrap } from "./FilterBar.styled";

export const FilterBar = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  const brands = [...new Set(adverts?.map((advert) => advert.make))];

  const brandOptions = brands.map((brand) => ({ value: brand, label: brand }));

  const allPrices = adverts?.map((advert) => {
    const price = advert.rentalPrice;
    return Number(price.slice(1, price.length));
  });
  const maxPrice = allPrices ? Math.max(...allPrices) : null;

  const prices = Array.from({ length: Math.ceil(maxPrice / 10) }, (_, index) => (index + 1) * 10);

  const priceOptions = prices.map((price) => ({ value: price, label: price }));

  const formik = useFormik({
    initialValues: {
      brand: "",
      price: "",
      from: 0,
      to: 0,
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(filterAdverts(values));
    },
    validationSchema: Yup.object().shape({
      brand: Yup.string(),
      price: Yup.string(),
      from: Yup.number().max(Yup.ref("to"), `Please, enter the number less than "To" field`),
      to: Yup.number().min(Yup.ref("from"), `Please, enter the number more than "From" field`),
    }),
  });

  return (
    <FilterForm onSubmit={formik.handleSubmit}>
      <FormBox>
        <TextWrap>Car brand</TextWrap>
        <label htmlFor="brand"></label>
        <SelectBrand
          className="react-select-container"
          classNamePrefix="react-select"
          name="brand"
          id="brand"
          options={brandOptions}
          onChange={(selectedOption) => formik.setFieldValue("brand", selectedOption.value)}
          value={brandOptions.find((option) => option.value === formik.values.brand)}
          placeholder="Enter the text"
        />
      </FormBox>

      <FormBox>
        <TextWrap>Price/1 hour</TextWrap>
        <label htmlFor="price"></label>
        <SelectPrice
          className="react-select-container"
          classNamePrefix="react-select"
          name="price"
          id="price"
          options={priceOptions}
          onChange={(selectedOption) => formik.setFieldValue("price", selectedOption.value)}
          value={priceOptions.find((option) => option.value === formik.values.price)}
          placeholder="To $"
        />
      </FormBox>

      <FormBox>
        <TextWrap>Car milleage/km</TextWrap>
        <ExtraWrapper>
          <MileageWrapper>
            <InputLabel htmlFor="from">From</InputLabel>
            <Input name="from" id="from" type="number" onChange={formik.handleChange} value={formik.values.from} />
            {formik.submitCount > 0 && formik.errors.from && <p>{formik.errors.from}</p>}
          </MileageWrapper>
          <MileageWrapper>
            <InputLabel htmlFor="to">To</InputLabel>
            <Input name="to" id="to" type="number" onChange={formik.handleChange} value={formik.values.to} />
            {formik.submitCount > 0 && formik.errors.to && <p>{formik.errors.to}</p>}
          </MileageWrapper>
        </ExtraWrapper>
      </FormBox>

      <Button type="submit">Search</Button>
    </FilterForm>
  );
};
