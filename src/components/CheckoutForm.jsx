import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from 'react-router-dom';
import './CheckoutForm.css';


const CheckoutForm = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);
  const [buyerData, setBuyerData] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBuyerData({ ...buyerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const order = {
        buyer: buyerData,
        items: cart.map(({ id, name, price, quantity }) => ({ id, name, price, quantity })),
        total: getTotalPrice(),
        date: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, "orders"), order);

      setOrderId(docRef.id);
      clearCart();
      setLoading(false);

    } catch (error) {
      console.error("Error al crear la orden: ", error);
      setLoading(false);
      alert("Hubo un error al generar la orden. Intenta más tarde.");
    }
  };

  if (loading) return <p>Procesando tu orden...</p>;

  if (orderId) return (
    <div style={{ padding: '2rem' }}>
      <h2>¡Gracias por tu compra!</h2>
      <p>Tu número de orden es: <strong>{orderId}</strong></p>
      <button onClick={() => navigate('/')}>Volver al inicio</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h2>Finalizar Compra</h2>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={buyerData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={buyerData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={buyerData.phone}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={cart.length === 0}>Finalizar compra</button>
    </form>
  );
};

export default CheckoutForm;
