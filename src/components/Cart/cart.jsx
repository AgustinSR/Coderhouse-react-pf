import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../Cart/cartItem";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, precioTotal, limpiarCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );

    return (
      <div className="cart">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <h3>Total: ${precioTotal}</h3>
        <button onClick={limpiarCart}>Vaciar Carrito</button>
        <Link to="/checkout" className="btn">
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

export default Cart;
