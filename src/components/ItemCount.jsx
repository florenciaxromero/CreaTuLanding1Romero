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
    <div className="d-flex flex-column align-items-center gap-2 mt-3">
      <div className="btn-group" role="group">
        <button className="btn btn-outline-secondary" onClick={decrease}>-</button>
        <button className="btn btn-outline-secondary" disabled>{count}</button>
        <button className="btn btn-outline-secondary" onClick={increase}>+</button>
      </div>
      <button
        className="btn btn-success mt-2"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

