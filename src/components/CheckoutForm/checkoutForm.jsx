// src/components/CheckoutForm/checkoutForm.jsx
import { useState, useContext } from "react";
import { db } from "../../services/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { CartContext } from "../../context/cartContext";

function CheckoutForm() {
  const { cart, precioTotal, limpiarCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);

  const onChange = (e) => setBuyer({ ...buyer, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer,
      items: cart,
      total: precioTotal,
      createdAt: serverTimestamp(),
    };
    const ref = await addDoc(collection(db, "orders"), order);
    setOrderId(ref.id);
    limpiarCart();
  };

  if (orderId) {
    return (
      <div className="container">
        <h2>Gracias por tu compra! :D</h2>
        <p>Tu numero de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <form className="container checkout-form" onSubmit={onSubmit}>
      <h2>Finalizar compra</h2>
      <input name="name" placeholder="Nombre" value={buyer.name} onChange={onChange} required />
      <input name="email" placeholder="Email" value={buyer.email} onChange={onChange} required />
      <input name="phone" placeholder="Telefono" value={buyer.phone} onChange={onChange} required />
      <button className="btn" type="submit">Confirmar</button>
    </form>
  );
}

export default CheckoutForm;
