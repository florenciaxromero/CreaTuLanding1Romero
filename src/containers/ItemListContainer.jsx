import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';


import { getProducts, getProductsByCategory } from '../data/products';

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = category ? getProductsByCategory(category) : getProducts();
    fetchData.then(data => {
      setItems(data);
      setLoading(false);
    });
  }, [category]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {greeting && <h2>{greeting}</h2>}
      {loading
        ? <p>Cargando productos...</p>
        : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
