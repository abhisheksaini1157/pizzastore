import { React} from "react";

import Pizzas from "../components/Pizzas";

const MainDisplay = () => {
  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([]));
  }

  return (
    <>
      <Pizzas />
    </>
  );
};

export default MainDisplay;
