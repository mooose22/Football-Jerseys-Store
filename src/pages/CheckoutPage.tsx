import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { selectCartItems, selectCartTotal } from "../redux/selectors";
import { Jersey } from "../data/jerseysData";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return <h2 className="text-center text-xl my-10">Your cart is empty</h2>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Order Summary</h1>
      <h3 className="text-xl my-2">{cartItems.length} items in Cart</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {cartItems.map((item: Jersey) => (
          <div key={item.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>Price: {item.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-xl font-bold my-4">
        Total: ${cartTotal.toFixed(2)}
      </div>{" "}
      <button onClick={handleClearCart} className="btn btn-error mt-4">
        Clear Cart
      </button>
    </div>
  );
};

export default CheckoutPage;
