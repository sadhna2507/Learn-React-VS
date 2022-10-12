import { CountClass } from "./components/CountClass";
import { CounterHooks } from "./components/CounterHooks";
import { CountHooks } from "./components/CountHooks";
import { StateWithArray } from "./components/StateWithArray";
import { StateWithObject } from "./components/StateWithObject";
import { TitleChangeClass } from "./components/TitleChangeClass";
import { TitleChangeHooks } from "./components/TitleChangeHooks";
import React, { useState } from "react";
import Check from "./components/Check";

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
      {valid < 10 && <Check />}
      <button onClick={() => setValid((prev) => prev + 1)}>
        Click = {valid}
      </button>
    </div>
  );
}

export default App;
