import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#eee'
    }}>
      <nav className="navbar bg-dark text-white">
  <div className="container">
    <h1 className="navbar-brand">Mi Tienda</h1>
  </div>
</nav>

      <h1>Tienda Merluza</h1>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem' }}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
