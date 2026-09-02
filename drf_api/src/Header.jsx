import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCart();

    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Car_listing">Car Listing</Link></li>
        </ul>
      </nav>

      <Link to="/login">
        <span className="login-btn">Login</span>
      </Link>

      <Link to="/register">
        <span className="Register">Register</span>
      </Link>

      <Link to="/Car_listing/cart" className="cart-wrapper">
        <FaShoppingCart className="cart-icon" />
        <span className="badge">{cartCount}</span>
      </Link>
    </header>
  );
}

export default Header;