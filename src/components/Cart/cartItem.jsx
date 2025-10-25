import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";

function CartItem({ item }) {
  const { eliminarItem } = useContext(CartContext);

  return (
    <div className="cart-item">
      <p>{item.title}</p>
      <p>Cantidad: {item.cantidad}</p>
      <p>Subtotal: ${item.price * item.cantidad}</p>
      <button onClick={() => eliminarItem(item.id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;
