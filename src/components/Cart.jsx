import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Tu carrito está vacío</h2>
        <Link to="/catalogo" className="btn btn-primary mt-3">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2>Carrito de compras</h2>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total: ${getTotalPrice()}</h4>
      <button className="btn btn-warning mt-3" onClick={clearCart}>
        Vaciar carrito
      </button>

      <CheckoutForm />
    </div>
  );
};

export default Cart;
