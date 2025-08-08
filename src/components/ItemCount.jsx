import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="d-flex flex-column align-items-center gap-3 mt-4">
      <div className="btn-group" role="group" aria-label="Contador de unidades">
        <button 
          className="btn btn-outline-primary" 
          onClick={decrease} 
          aria-label="Disminuir cantidad"
          disabled={count === 1}
        >
          &minus;
        </button>
        <button className="btn btn-outline-primary" disabled aria-live="polite" aria-atomic="true">
          {count}
        </button>
        <button 
          className="btn btn-outline-primary" 
          onClick={increase} 
          aria-label="Aumentar cantidad"
          disabled={count === stock}
        >
          &#43;
        </button>
      </div>
      <button
        className="btn btn-primary w-100"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
        aria-disabled={stock === 0}
        aria-label="Agregar producto al carrito"
      >
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
    </div>
  );
};

export default ItemCount;

