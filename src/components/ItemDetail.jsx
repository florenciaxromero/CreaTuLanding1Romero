import React, { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
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
          <p><strong>Stock disponible:</strong> {product.stock > 0 ? product.stock : 'Sin stock'}</p>

          {product.stock > 0 && !added && (
            <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
          )}

          {(added || product.stock === 0) && (
            <div className="d-flex gap-3 mt-3">
              <Link to="/" className="btn btn-primary">Volver al inicio</Link>
              <Link to="/carrito" className="btn btn-success">Ir al carrito</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

