import Hero from "../components/hero";
import { customFetch } from "../utils/index";

export const loader = async () => {
  const response = await customFetch("/products?featured=true");
  const products = response.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
    </>
  );
};
export default Landing;
