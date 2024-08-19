import { useState } from "react";

export const useCount = () => {
  const [value, setValue] = useState(0);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue((prevState) => prevState - 1);

  return {
    value,
    increment,
    decrement,
  };
};
