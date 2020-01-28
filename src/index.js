import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.body.appendChild(document.createElement("div"))
);
