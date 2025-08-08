import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="logo">TuNombre</h1>
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
          <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>
        <button 
          className="menu-toggle" 
          aria-label="Toggle menu" 
          onClick={toggleMenu}
          aria-expanded={menuOpen}
        >
          <span className="hamburger"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
