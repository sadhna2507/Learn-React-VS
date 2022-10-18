// import { CountClass } from "./components/CountClass";
// import { CounterHooks } from "./components/CounterHooks";
// import { CountHooks } from "./components/CountHooks";
// import { StateWithArray } from "./components/StateWithArray";
// import { StateWithObject } from "./components/StateWithObject";
// import { TitleChangeClass } from "./components/TitleChangeClass";
// import { TitleChangeHooks } from "./components/TitleChangeHooks";
// import Check from "./components/Check";
// import { RefExample } from "./components/RefExample";
// import React, { useState } from "react";
// import { DataFetch } from "./components/DataFetch";
// import { ComponentA } from "./components/ComponentA";
// import { CounterOne } from "./components/CounterOne";
// import { CounterTwo } from "./components/CounterTwo";
// import { DocTitleOne } from "./components/DocTitleOne";
// import { DocTitleTwo } from "./components/DocTitleTwo";
// import { MemoCounter } from "./components/MemoCounter";
// import { ReducerCounter } from "./components/ReducerCounter";

import { Home } from "./components/Routing.jsx/Home";
import { About } from "./components/Routing.jsx/About";
import { Contact } from "./components/Routing.jsx/Contact";
import { Content } from "./components/Routing.jsx/Content";
import { Sidebar } from "./components/Routing.jsx/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Routing.jsx/Header";
import { ErrorPage } from "./components/Routing.jsx/ErrorPage";

// export const NameContext = React.createContext();

export function App() {
  // const [valid, setValid] = useState(0);
  // const [name, setName] = useState('sadhna')

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

      {/* <NameContext.Provider value={name}>
        <ComponentA />
      </NameContext.Provider> */}

      {/* <ReducerCounter /> */}
      {/* <MemoCounter/> */}
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}

      {/* <h1>Router</h1> */}

      <Routes>
        <Route path="/about" element={<Sidebar />} />
      </Routes>

      <Routes>
        <Route path="/contact" element={<Sidebar />} />
      </Routes>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/:id" element={<Content />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
