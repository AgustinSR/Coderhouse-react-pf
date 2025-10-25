import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/itemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryId} = useParams();


  useEffect(() => {
    const fetchProducts = async () => {
    try{
      const collectionRef = collection(db, "products");
      const q = categoryId
      ? query (collectionRef, where ("category", "==", categoryId))
      : collectionRef;

      const snapshot = await getDocs(q);
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(items);
    } catch (error) {
      console.error("Error fetching products: ", error);
    } finally {
      setLoading(false);
    }
  };
    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <p>Cargando Productos...</p>;
  }
  return (
    <div>
      <h2> {categoryId ? `Categoria: ${categoryId}` : "Todos los productos"}</h2>
      <ItemList products={products} />
    </div>
  );
}


export default ItemListContainer;