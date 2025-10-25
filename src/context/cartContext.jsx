import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarItem = (item, cantidad) => {
    const existe = cart.find((p) => p.id === item.id);
    if (existe) {
      setCart(
        cart.map((p) =>
          p.id === item.id ? { ...p, cantidad: p.cantidad + cantidad } : p
        )
      );
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const eliminarItem = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  const limpiarCart = () => setCart([]);

  const cantidadTotal = cart.reduce((acc, p) => acc + p.cantidad, 0);
  const precioTotal = cart.reduce((acc, p) => acc + p.price * p.cantidad, 0);

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
