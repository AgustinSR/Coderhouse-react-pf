import React, { useContext } from "react";
import { CartContext } from "./../../context/cartContext";

function CartWidget() {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <span>{totalItems}</span>
    </div>
  );
}

export default CartWidget;
