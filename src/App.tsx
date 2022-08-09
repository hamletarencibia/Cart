import "./App.css";
import CartLayout from "./layout/CartLayout";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <CartLayout>
        <Cart />
      </CartLayout>
    </CartProvider>
  );
}

export default App;
