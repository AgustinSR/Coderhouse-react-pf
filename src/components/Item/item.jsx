import React from "react";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="item-card">
      <img src={product.img} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/detail/${product.id}`} className="btn">
        Ver detalle
      </Link>
    </div>
  );
}

export default Item;
