import { db } from "./firebaseConfig.js";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  query,
  where,
  limit,
} from "firebase/firestore";

const productosCol = collection(db, "products");
const ordenesCol = collection(db, "ordenes");

export async function fetchProductos() {
  const snap = await getDocs(productosCol);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function fetchProductosPorCategoria(categoriaId) {
  const q = query(productosCol, where("categoria", "==", categoriaId));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function fetchProductoPorId(productoId) {
  const d = doc(db, "productos", productoId);
  const snap = await getDoc(d);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() }; 
}

export async function  crearPedido(pedidoData) {
  const c = await addDoc(ordenesCol, pedidoData);
  return c.id;
}