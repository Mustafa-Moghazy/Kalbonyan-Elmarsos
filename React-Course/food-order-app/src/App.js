import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsVisabile, setCartIsVisable] = useState(false);

  const showCart = () => {
    setCartIsVisable(true);
  };

  const hideCart = () => {
    setCartIsVisable(false);
  };

  return (
    <CartProvider>
      {cartIsVisabile && <Cart onClose={hideCart} />}
      <Header onClick={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
