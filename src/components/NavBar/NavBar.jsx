import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">ReactShop</Link>
      <div className="nav-links">
        <Link to="/category/ropa">Ropa</Link>
        <Link to="/category/zapatillas">Zapatillas</Link>
        <Link to="/category/accesorios">Accesorios</Link>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
