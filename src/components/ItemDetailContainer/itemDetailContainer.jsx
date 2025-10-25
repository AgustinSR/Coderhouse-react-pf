import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import ItemDetail from "../ItemDetail/itemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", id);

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setProduct({ id: res.id, ...res.data() });
        } else {
          console.warn("Producto no encontrado");
        }
      })
      .catch((err) => console.error("Error al obtener producto:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Cargando producto...</h2>;
  }

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Producto no encontrado</h2>;
  }

  return (
    <div className="container">
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
