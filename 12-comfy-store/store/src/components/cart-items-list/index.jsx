import { useSelector } from "react-redux";
import CartItem from "../cart-item";

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </>
  );
};
export default CartItemsList;
