import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./Index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  container
);
