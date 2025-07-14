import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">Tienda Merluza</Link>
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
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/catalogo">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/catalogo/remeras">Remeras</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/catalogo/gorras">Gorras</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/catalogo/camperas">Camperas</Link></li>
          </ul>
          <Link to="/carrito" className="btn btn-outline-light position-relative">
            <i className="bi bi-cart4" style={{ fontSize: '1.5rem' }}></i>
            {totalItems > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
                <span className="visually-hidden">productos en carrito</span>
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

