import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const text = "Hello world";
const elem = (
  <div>
    <h2>Text: {text}</h2>
    <input type="text" name="" id="" />
    <button>Clock</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elem);

reportWebVitals();
