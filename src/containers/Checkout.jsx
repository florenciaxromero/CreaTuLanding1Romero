import React, { useContext, useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const onSubmit = (dataCliente) => {
    
    const idGenerado = 'ORD-' + Math.floor(Math.random() * 1000000);
    setOrderId(idGenerado);
    clearCart();
    console.log('Orden generada:', idGenerado, 'Datos del cliente:', dataCliente);
  };

  if (orderId) {
    return (
      <div className="container my-5 text-center">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es:</p>
        <h3>{orderId}</h3>
        <p>Recibirás un correo con los detalles.</p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <p>Agregá productos para poder finalizar la compra.</p>
      </div>
    );
  }

  return <CheckoutForm onSubmit={onSubmit} />;
};

export default Checkout;
