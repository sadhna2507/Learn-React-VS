import React, { useReducer } from "react";
//useReduce is also used to store and handle state date
//useState is built on useReducer only

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;

//     case "decrement":
//       return state - 1;

//     case "reset":
//       return initialState;

//     default:
//       return state;
//   }
// };

// export function ReducerCounter() {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h1>count = {count}</h1>
//       <button onClick={() => dispatch("increment")}>increment</button>
//       <button onClick={() => dispatch("decrement")}>decrement</button>
//       <button onClick={() => dispatch("reset")}>reset</button>
//     </div>
//   );
// }

// lets assume initialState as an object

const initialState = {
  value: 0,
  name: "Host",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + action.value };

    case "DECREMENT":
      return { ...state, value: state.value - action.value };

    case "RESET":
      return initialState;

    case "UPDATE":
      return { ...state, name: action.value };

    default:
      return state;
  }
};

export function ReducerCounter() {
  const [countObj, dispatch] = useReducer(reducer, initialState);
  const [secondObj, secondDispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>count = {countObj.value}</h1>
      {/* <h1>name - {countObj.name}</h1> */}
      <h1>count = {secondObj.value}</h1>

      {/* <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button> */}

      <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
        increment 5
      </button>
      <button onClick={() => secondDispatch({ type: "INCREMENT", value: 3 })}>
        second increment 3
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 5 })}>
        decrement 5
      </button>
      <button onClick={() => secondDispatch({ type: "DECREMENT", value: 3 })}>
        second decrement 3
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
      <button onClick={() => secondDispatch({ type: "RESET" })}>
        second reset
      </button>

      {/* <button onClick={() => dispatch({ type: "UPDATE", value: "sadhna" })}>
        change name
      </button> */}

      {/* <input></input> */}
    </div>
  );
}
