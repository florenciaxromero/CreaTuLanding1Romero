import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FaShoppingCart size={20} />
      <span style={{ marginLeft: '5px' }}>3</span>
    </div>
  );
};

export default CartWidget;
