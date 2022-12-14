import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { Parent } from './Parent'
import { Greetings } from './components/Greetings';
import { Name } from './components/Name';
import { LifeCycle } from './components/LifeCycle';
import { ParentLifeCycle } from './components/ParentLifeCycle';
import { InstaMain } from './components/InstaMain';
import { Form } from './components/Form';
import { ErrorBoundary } from "./components/ErrorBoundary";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App name = "Harry Potter - Self closed"/> */}
    {/* <App name = "Harry Potter - Normal tag">
      <h2>head tag inside app</h2>
    </App> */}
    {/* <Parent/> */}
    {/* <Greetings/>   */}
    {/* <Name/> */}
    {/* <LifeCycle/> */}
    {/* <InstaMain/> */}
    {/* <ParentLifeCycle/> */}
    {/* <Form/> */}
    <ErrorBoundary/>
     {/* <Button text="increment" /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
