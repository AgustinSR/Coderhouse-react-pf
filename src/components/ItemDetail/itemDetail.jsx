import React,{ useState, useContext} from "react";
import { CartContext } from "../../context/cartContext";
import itemCount from "../ItemCount/itemCount";

function ItemDetail({ product }) {
  const { agregarItem } = useContext(CartContext);
  const [cantidadAgregada, setCantidadAgregada] = useState(false);

  const manejarAgregar = (cantidad) => {
    agregarItem(product, cantidad);
    setCantidadAgregada(true);
  };


  return (
    <div>
      <img src="img" alt="" />
      <h2>{product.title}</h2>
      <p>{product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
      {!cantidadAgregada ? (
        <p>Producto agregado al carrito :D</p>
      ) : (
        <itemCount stock={product.stock} inicial={1} onAdd={manejarAgregar} />
      )}
    </div>
  );
}

export default ItemDetail;

