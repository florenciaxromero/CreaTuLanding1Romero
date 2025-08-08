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
    getProductById(id)
      .then(data => {
        if (data) {
          setProduct(data);
        } else {
          setProduct(null);
        }
        setLoading(false);
      })
      .catch(() => {
        setProduct(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>Cargando producto...</p>;
  }

  if (!product) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>Producto no encontrado</p>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;

