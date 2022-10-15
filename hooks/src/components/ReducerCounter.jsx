import React, { useReducer } from "react";
//useReduce is also used to store and handle state date
//useState is built on useReducer only

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

export function ReducerCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>count = {count}</h1>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}
