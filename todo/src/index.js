import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { Parent } from './Parent'
import { Greetings } from './components/Greetings';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App name = "Harry Potter - Self closed"/> */}
    {/* <App name = "Harry Potter - Normal tag">
      <h2>head tag inside app</h2>
    </App> */}
    {/* <Parent/> */}
    <Greetings/>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
