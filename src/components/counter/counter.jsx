import { useEffect } from "react";
import { useCount } from "./use-counter";
import { Test } from "../test/test";

export const Counter = () => {
  const { value, increment, decrement } = useCount();

  useEffect(() => {
    increment();
  }, [increment]);

  return (
    <div>
      <button onClick={increment}>+</button>
      {value}
      <button onClick={decrement}>-</button>
      {value < 5 && <Test />}
    </div>
  );
};
