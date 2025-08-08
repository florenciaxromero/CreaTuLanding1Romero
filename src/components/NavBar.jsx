import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand brand-text">Tienda Merluza</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link nav-text" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link nav-text" to="/catalogo">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link nav-text" to="/catalogo/remeras">Remeras</Link></li>
            <li className="nav-item"><Link className="nav-link nav-text" to="/catalogo/gorras">Gorras</Link></li>
            <li className="nav-item"><Link className="nav-link nav-text" to="/catalogo/camperas">Camperas</Link></li>
          </ul>

          <Link to="/carrito" className="cart-button">
            <FaShoppingCart className="cart-icon" />
            {totalItems > 0 && (
              <span className="cart-badge">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
