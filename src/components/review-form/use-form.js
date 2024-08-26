import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  text: "",
  rating: 5,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_TEXT":
      return { ...state, text: payload.target.value };
    case "INCREMENT_RATING":
      return { ...state, rating: Math.min(state.rating + 1, 5) };
    case "DECREMENT_RATING":
      return { ...state, rating: Math.max(state.rating - 1, 1) };
    case "CLEAR":
      return { ...DEFAULT_FORM_VALUE };
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const setText = (event) => dispatch({ type: "SET_TEXT", payload: event });
  const incrementRating = () => dispatch({ type: "INCREMENT_RATING" });
  const decrementRating = () => dispatch({ type: "DECREMENT_RATING" });
  const clear = () => dispatch({ type: "CLEAR" });

  return {
    form,
    incrementRating,
    setText,
    decrementRating,
    clear,
  };
};
