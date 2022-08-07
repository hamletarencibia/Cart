import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CartLayout from "./layout/CartLayout";
import Cart from "./pages/Cart";

function App() {
  return (
    <CartLayout>
      <Cart />
    </CartLayout>
  );
}

export default App;
