import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    alert(`Agregaste ${quantity} unidad(es) de ${product.name} al carrito.`);
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="lead"><strong>Precio:</strong> ${product.price}</p>
          <p><strong>Stock disponible:</strong> {product.stock}</p>
          <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

