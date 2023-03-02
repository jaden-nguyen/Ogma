import React from "react";
import ReactDOM from "react-dom/client";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// render(
//     <App />,
//     document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
