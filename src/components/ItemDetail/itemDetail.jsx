import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/itemCount";

function ItemDetail({ product }) {
  const { agregarItem } = useContext(CartContext);
  const [agregado, setAgregado] = useState(false);

  const manejarAgregar = (cantidad) => {
    agregarItem(product, cantidad);
    setAgregado(true);
  };
  const sinStock = product.stock === 0;

  return (
    <div className="item-detail">
      <img
        src={product.img}
        alt={product.title}
        style={{ maxWidth: 320, width: "100%", borderRadius: 8 }}
      />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p style={{ fontWeight: 700 }}>Precio: ${product.price}</p>

        {sinStock ? (
          <p style={{ color: "red", fontWeight: 600 }}>No hay stock!</p>
        ) : agregado ? (
          <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
            <Link className="btn btn-cart" to="/cart">
              Ir al carrito
            </Link>
            <Link className="btn" to="/">
              Seguir comprando
            </Link>
          </div>
        ) : (
          <ItemCount stock={product.stock} initial={1} onAdd={manejarAgregar} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
