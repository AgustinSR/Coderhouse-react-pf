import React, { useContext } from "react";
import { CartContext } from "./../../context/cartContext";

function CartWidget() {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div className="cart-widget">
      🛒 <span>{cantidadTotal}</span>
    </div>
  );
}

export default CartWidget;
