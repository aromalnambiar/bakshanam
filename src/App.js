import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import MainMeals from "./components/Meals/MainMeals";

function App() {

  const [isCartShow, setIsCartShow] = useState(false)

  const ShowCart = () => {
    setIsCartShow(true);
  }

  const HideCart = () => {
    setIsCartShow(false);
  }

  return (
    <div  >
      {
        isCartShow &&
        <Cart onHideCart={HideCart} />
      }
      
      <Header  onShowCart={ShowCart} />
      <MainMeals/>
    </div>
  );
}

export default App;
