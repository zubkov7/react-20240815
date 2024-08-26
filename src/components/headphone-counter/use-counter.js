import { useState, useCallback, useMemo } from "react";

const getCallbacks = (increment, decrement) => {
  let value = 0;
  for (let i = 0; i < 1000000000; i++) {
    value = i;
  }

  return [increment, decrement];
};

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

  const [incrementCalculated, decrementCalculated] = useMemo(
    () => getCallbacks(increment, decrement),
    [decrement, increment]
  );

  return {
    value,
    increment: incrementCalculated,
    decrement: decrementCalculated,
  };
};
