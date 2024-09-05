import { Counter } from "../counter/counter";
import { useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItems,
} from "../../redux/ui/cart/cart";
import { useDispatch } from "react-redux";

export const HeadphoneCounter = ({ headphoneId }) => {
  const { amount } =
    useSelector(selectCartItems).find(({ id }) => id === headphoneId) || {};

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(headphoneId));
  };

  const remove = () => {
    dispatch(removeFromCart(headphoneId));
  };

  return <Counter value={amount || 0} increment={add} decrement={remove} />;
};
