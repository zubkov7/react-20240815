import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart/cart";
import { CartItem } from "../cart-item/cart-item";

export const Cart = () => {
  const cartItem = useSelector(selectCartItems);

  return (
    <div>
      <h3>Cart:</h3>
      <ul>
        {cartItem.map(({ id, amount }) => (
          <li key={id}>
            <CartItem id={id} amount={amount} />
          </li>
        ))}
      </ul>
    </div>
  );
};
