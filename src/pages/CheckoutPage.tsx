import { useSelector } from "react-redux";
import { selectCartItems } from "../app/cartSlice";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);

  if (cartItems.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckoutPage;
