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
// import { DataFetch } from "./components/DataFetch";
import { ComponentA } from "./components/ComponentA";


export const NameContext = React.createContext();

export function App() {
  // const [valid, setValid] = useState(0);
  const [name, setName] = useState('sadhna')

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
      {/* <DataFetch /> */}

      <NameContext.Provider value={name}>
        <ComponentA />
      </NameContext.Provider>
    </div>
  );
}

export default App;
