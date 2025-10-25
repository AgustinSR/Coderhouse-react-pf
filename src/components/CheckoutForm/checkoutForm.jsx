import React, { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { db } from "../../services/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function CheckoutForm() {
  const { cart, precioTotal, limpiarCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer,
      items: cart,
      total: precioTotal,
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "ordenes"), ordenes);
      setOrderId(docRef.id);
      limpiarCart();
    } catch (error) {
      console.error("Error al generar la orden:", error);
    }
  };

  if (ordenesId) {
    return (
      <div>
        <h2>Gracias por tu compra</h2>
        <p>Tu numero de orden es: {ordenesId}</p>
      </div>
    );
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Finalizar compra</h2>
      <input
        name="name"
        placeholder="Nombre"
        value={buyer.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={buyer.email}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Teléfono"
        value={buyer.phone}
        onChange={handleChange}
      />
      <button type="submit">Confirmar compra</button>
    </form>
  );
}

export default CheckoutForm;
