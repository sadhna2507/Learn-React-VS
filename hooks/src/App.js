// import { CountClass } from "./components/CountClass";
// import { CounterHooks } from "./components/CounterHooks";
// import { CountHooks } from "./components/CountHooks";
// import { StateWithArray } from "./components/StateWithArray";
// import { StateWithObject } from "./components/StateWithObject";
// import { TitleChangeClass } from "./components/TitleChangeClass";
// import { TitleChangeHooks } from "./components/TitleChangeHooks";
// import Check from "./components/Check";
// import { RefExample } from "./components/RefExample";
import React, { useState } from "react";
import { DataFetch } from "./components/DataFetch";

export function App() {
  const [valid, setValid] = useState(0);
  return (
    <div>
      {/* <CountClass/> */}
      {/* <CountHooks/> */}
      {/* <CounterHooks/> */}
      {/* <StateWithObject/> */}
      {/* <StateWithArray/> */}
      {/* <TitleChangeClass/> */}
      {/* <TitleChangeHooks/> */}
      {/* {valid < 10 && <Check />} */}
      {/* <button onClick={() => setValid((prev) => prev + 1)}> */}
      {/* Click = {valid} */}
      {/* </button> */}
      {/* <RefExample /> */}
      <DataFetch />
    </div>
  );
}

export default App;
