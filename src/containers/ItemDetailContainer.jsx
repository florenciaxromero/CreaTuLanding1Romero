import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { getProductById } from '../data/products';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id).then(data => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {loading && <p>Cargando producto...</p>}
      {!loading && product && <ItemDetail product={product} />}
      {!loading && !product && <p>Producto no encontrado</p>}
    </div>
  );
};

export default ItemDetailContainer;
