import { useState, useCallback } from "react";

export const useCount = () => {
  const [value, setValue] = useState(0);

  const increment = useCallback(
    () => setValue((prevState) => prevState + 1),
    []
  );
  const decrement = useCallback(
    () => setValue((prevState) => prevState - 1),
    []
  );

  return {
    value,
    increment,
    decrement,
  };
};
