import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./components/CartComponents/CartContext";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,

  document.getElementById("root")
);
