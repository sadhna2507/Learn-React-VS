import React from "react";
import { useCounter } from "./useCounter";

export function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(10);

  //   const [count, setCount] = useState(0);

  //   const increment = () => {
  //     setCount((prev) => prev + 1);
  //   };

  //   const decrement = () => {
  //     setCount((prev) => prev - 1);
  //   };

  //   const reset = () => {
  //     setCount(0);
  //   };

  return (
    <div>
      <h1>count = {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
