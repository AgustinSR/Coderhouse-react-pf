import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarItem = (item, cantidad) => {
    const itemExistente = cart.find((p) => p.id === item.id);
    if (itemExistente) {
      setCart(
        cart.map((p) =>
          p.id === item.id ? { ...p, cantidad: p.cantidad + cantidad } : p
        )
      );
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const eliminarItem = (itemId) => {
    setCart(cart.filter((p) => p.id !== itemId));
  };

  const limpiarCart = () => setCart([]);

  const cantidadTotal = cart.reduce((acc, p) => acc + p.cantidad, 0);

  const precioTotal = cart.reduce((acc, p) => acc + p.cantidad * p.precio, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarItem,
        eliminarItem,
        limpiarCart,
        cantidadTotal,
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
