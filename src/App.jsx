import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/itemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/itemDetailContainer";
import Cart from "./components/Cart/cart";
import CheckoutForm from "./components/CheckoutForm/checkoutForm";
import "./styles/main.css";


function App() {
  return (
    <CartContextProvider>
      <Router>
        <NavBar />
        <Routes>
          
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
