import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import Cart from "./components/Card/Cart";
import CartProvider from "./store/CartProvider";

function App() {
 
  const [cartIsShown, setCartIsShown] = useState(false);

  const showModalHandler = (props) => {
    setCartIsShown(true);
  }

  const hideModalHandler = (props) => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideModalHandler}/> } 
      <Header onShowModal={showModalHandler}/>
      <main>
      <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
