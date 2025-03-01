import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "../form-input";
import FormSelect from "../form-select";
import FormRange from "../form-range/FormRange";
import FormCheckbox from "../form-checkbox";
// import FormSelect from "./FormSelect";
// import FormRange from "./FormRange";
// import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta } = useLoaderData();
  const { category, companies, pagination, order } = meta;
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        // defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="companies"
        list={meta.companies}
        size="select-sm"
        defaultValue={companies}
      />
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={price}
      />
      <FormCheckbox
        name="shipping"
        label="free shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};
export default Filters;

{
  /* PRICE */
}
{
  /* <FormRange
  name="price"
  label="select price"
  size="range-sm"
  //price={price}
/>; */
}
{
  /* <FormCheckbox
  name="shipping"
  label="free shipping"
  size="checkbox-sm"
  //defaultValue={shipping}
/>; */
}
