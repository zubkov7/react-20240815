import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  address: "",
  text: "",
};

const reducer = (state, { type, payload }) => {
  const value = payload.target.value;

  switch (type) {
    case "SET_NAME":
      return { ...DEFAULT_FORM_VALUE, name: value };
    case "SET_ADDRESS":
      return { ...state, address: value };
    case "SET_TEXT":
      return { ...state, text: value };
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const setName = (event) => dispatch({ type: "SET_NAME", payload: event });
  const setAddress = (event) =>
    dispatch({ type: "SET_ADDRESS", payload: event });
  const setText = (event) => dispatch({ type: "SET_TEXT", payload: event });

  return {
    form,
    setName,
    setText,
    setAddress,
  };
};
