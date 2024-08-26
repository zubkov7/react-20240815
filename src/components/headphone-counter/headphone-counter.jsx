import { useCount } from "./use-counter";
import { Counter } from "../counter/counter";
import { useRef } from "react";

export const HeadphoneCounter = () => {
  const { value, increment, decrement } = useCount();

  const timerRef = useRef(null); // { current: null }

  const onStop = () => {
    if (!timerRef.current) {
      return;
    }

    clearInterval(timerRef.current);
  };

  const onStart = () => {
    timerRef.current = setInterval(increment, 1000);
  };

  return (
    <>
      <Counter value={value} increment={increment} decrement={decrement} />
      <button onClick={onStart}>start</button>
      <button onClick={onStop}>stop</button>
    </>
  );
};
